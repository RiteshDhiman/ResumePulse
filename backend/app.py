from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from scripts.extract_text import extract_text_from_file
from scripts.communicate_with_gpt import get_cv_analysis
from scripts.utils import to_json_formatted
from scripts.build_resume import build_resume
import os

app = Flask(__name__)
# origins=["http://localhost:5173","http://trustedwebsite.com"]
CORS(app)

@app.route("/api/check_score_route", methods=["POST"])
def check_score_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    text = request.form["jd_text"]

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if not os.path.exists('check_score_resumes'):
        os.makedirs('./check_score_resumes')
        
    filename = secure_filename(file.filename)
    file_path = os.path.join('./check_score_resumes', filename)
    
    try:
        file.save(file_path)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    result_json = check_score(file_path,text)
    os.remove(file_path)
    return jsonify({"checkscore" : result_json}), 200

def check_score(file_path,jd_text):
    extracted_text = extract_text_from_file(file_path)
    result_from_gpt = get_cv_analysis(extracted_text,jd_text)
    return to_json_formatted(result_from_gpt)
    
@app.route("/api/build_resume_route", methods=["POST"])  
def build_resume_route():
    json_data = request.json
    resume_path, resume_name = build_resume(json_data)
    try:
        return send_file(resume_path,as_attachment=True, download_name=resume_name)
        # return send_from_directory("exported_resume", resume_name)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if "__main__" == __name__:
    app.run(debug=True)