from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from scripts.extract_text import extract_text_from_file
from scripts.communicate_with_gpt import get_cv_analysis
from scripts.utils import to_json_formatted
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route("/check_score_route", methods=["POST"])
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

    return jsonify({"checkscore" : check_score(file_path,text)}), 200

def check_score(file_path,jd_text):
    extracted_text = extract_text_from_file(file_path)
    result_from_gpt = get_cv_analysis(extracted_text,jd_text)
    return to_json_formatted(result_from_gpt)
    
@app.route("/build_resume_route", methods=["POST"])  
def build_resume_route():
    pass
    # json_data = request.json
    # return build_resume(json_data)

if "__main__" == __name__:
    app.run(debug=True)