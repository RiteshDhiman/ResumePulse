from flask import Flask, request, jsonify, send_file, after_this_request
from flask_cors import CORS
from werkzeug.utils import secure_filename
from scripts.extract_text import extract_text_from_file
from scripts.communicate_with_gpt import get_cv_analysis
from scripts.utils import to_json_formatted, delayed_file_removal, get_unique_file_name
from scripts.build_resume import build_resume
import os
import threading
import json


app = Flask(__name__)
# origins=["http://localhost:5173","http://trustedwebsite.com"]
CORS(app)

# Set the base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Directories
check_score_resumes_dir = os.path.join(BASE_DIR, 'check_score_resumes')
exported_resume_dir = os.path.join(BASE_DIR, 'exported_resume')

@app.route("/api/check_score_route/<filename>", methods=["GET","POST"])
def check_score_route(filename):
    
    if request.method == 'GET':
        
        file_path = os.path.join(check_score_resumes_dir, f"{filename}.json")
        
        if os.path.exists(file_path):
            with open(file_path, "r") as f:
                result = json.load(f)
                
            @after_this_request
            def remove_file(response):
                # Start a thread to remove the file after a delay
                threading.Thread(target=delayed_file_removal, args=(file_path,)).start()
                return response
            
            return jsonify(result), 200
        else:
            return jsonify({'error': 'Result not found'}), 404
        
    elif request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400
        
        file = request.files['file']
        text = request.form.get("jd_text","")

        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        elif text == '':
            return jsonify({'error': 'No job description text'}), 400
        
        if not os.path.exists(check_score_resumes_dir):
            os.makedirs(check_score_resumes_dir)

        filename = secure_filename(file.filename)
        file_path = os.path.join(check_score_resumes_dir, filename)
        
        try:
            file.save(file_path)
        except Exception as e:
            return jsonify({'error': str(e)}), 500

        result_json = check_score(file_path,text)
        result_file_name = f"result_{get_unique_file_name()}"
        
        try:
            threading.Thread(target=delayed_file_removal, args=(file_path,10)).start()
        except Exception as e:
            return jsonify({'error': f'Error deleting file: {str(e)}'}), 500
        
        try:
            result_path = os.path.join(check_score_resumes_dir, f"{result_file_name}.json")
            
            with open(result_path, "w") as f:
                json.dump(result_json, f)
            return jsonify({'status': "success", "request_id": result_file_name}), 200
        
        except Exception as e:
            return jsonify({'error': f'Error writing result: {str(e)}'}), 500
        
    else:
        return jsonify({'error': 'Method not allowed'}), 405

def check_score(file_path,jd_text):
    extracted_text = extract_text_from_file(file_path)
    result_from_gpt = get_cv_analysis(extracted_text,jd_text)
    return to_json_formatted(result_from_gpt)
    
@app.route("/api/build_resume_route/<resume>", methods=["GET","POST"])  
def build_resume_route(resume):
    if not os.path.exists(exported_resume_dir):
        os.makedirs(exported_resume_dir)
        
    if request.method == 'GET':
        file_path = os.path.join(exported_resume_dir, f"{resume}.docx")
        if os.path.exists(file_path):
            
            @after_this_request
            def remove_file(response):
                # Start a thread to remove the file after a delay
                threading.Thread(target=delayed_file_removal, args=(file_path,)).start()
                return response
            
            return send_file(file_path, as_attachment=True)
        else:
            return jsonify({'error': 'Resume not found'}), 404

    elif request.method == 'POST':
        json_data = request.json
        try:
            resume = build_resume(json_data)
        except Exception as e:
            print(f"Error: {str(e)}")
            return jsonify({"building error": str(e)}), 500
        
        try:
            resume_name = f"resume_{get_unique_file_name()}"
            resume_path = os.path.join(exported_resume_dir, f"{resume_name}.docx")
            resume.save(resume_path)
        except Exception as e:
            print(f"Error: {str(e)}")
            return jsonify({"saving error": str(e)}), 500
        
        try:
            return jsonify({"status": "success", "resume_name": resume_name}), 200
        except Exception as e:
            print(f"Error: {str(e)}")
            return jsonify({" sending resume success error": str(e)}), 500
    
    else:
        return jsonify({'error': 'Method not allowed'}), 405   
     
@app.route("/", methods=["GET"])
def hello():
    return "Hello World from flask!"

if "__main__" == __name__:
    app.run(debug=True)