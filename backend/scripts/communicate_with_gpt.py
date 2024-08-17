# Code completed just needs to update the prompts

from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def communicate_with_openai(message, response_type={ "type": "json_object" }, model="gpt-4o"):
    client = OpenAI()
    response = client.chat.completions.create(
        model=model,
        max_tokens=1024,
        temperature=0.4,
        n=1,
        response_format= response_type,
        messages=message
    )
    return response.choices[0].message.content

def get_cv_analysis(cv_text, jd_text):
    role = "HR Manager at a top-tier company responsible for hiring the best talent"
    goal = "Evaluate the CV in relation to the Job Description (JD) to determine the candidate's suitability"
    constraints = "Ensure the texts provided are legitimate and contextually appropriate for a CV and JD. If they are not relevant, return a score of 0 and indicate the issue"""
    related_info = "If someone mentions they about github then, don't assume that they know version control via GIT, if unless explicitly mentioned"
    formatting = """
    {
      similarityScore: < just the score>, 
      matchingAreas: [
        bestMatched: [<upto 5 points>],
        partiallyMatched: [<upto 5 points>],
        poorlyMatched: [<upto 5 points>]
        ], 
      improvementSuggestions: [<5-6 suggestions>]
    }
    """
    
    system_prompt = "You are a helpful assistant designed to output JSON."
    
    user_prompt = f"""
    Role: '{role}', Goal: '{goal}', Constraints: '{constraints}', Related Info: {related_info}
    
    CV: {cv_text}
    JD: {jd_text}

    1. Analyze the provided CV and JD and calculate a cosine similarity score as a percentage, reflecting how closely the CV matches the requirements and qualifications outlined in the JD. Ensure this score accurately represents the alignment between the two documents.

    2. Categorize the contents of the CV in relation to the JD into three distinct lists:
       - Areas that best matched the JD
       - Areas that partially matched the JD
       - Areas that poorly matched or did not match the JD

    3. Provide detailed suggestions in 5-6 bullet points to improve the CV, making it better aligned with the JD. These suggestions should be actionable and specific, aiming to enhance the candidate's chances of meeting the job requirements.
    
    You have to provide me the output in this format: {formatting}
    """
    
    message = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ] 
    
    return communicate_with_openai(message)

def get_image_text(encoded_image_string):
    system_prompt = """
    You are an expert at analyzing images with computer vision. In case of error, make a full report of the cause of: any issues in receiving, understanding, or describing images
    """
    
    user_prompt= """Extract me the content of the image and give me in a text format such that there is no loss of context"""
    response_format= {"type":"text" }
    
    message = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content":[
            {"type": "text", "text":user_prompt},
            {"type": "image_url", 
             "image_url": {
                            "url":f"data:image/png;base64,{encoded_image_string}",
                            "detail":"high"
                        }
            }
        ]}
    ]
    return communicate_with_openai(message, response_format)
  
def build_resume_with_gpt(json_clean_data):
  system_prompt = """
  You are a professional resume builder that builds one page resume. You follow the standard procedures of making a resume like the order of education, work experience etc.
  You give me a response in json format.
  """
  
  formatting = """
    {
        "librariesToInstall": "<comma-separated names of pip-recognized libraries>", 
        "code": "<all the code>", 
        "filePath": "<path of the word file alongwith the name of the file>", 
        "filename": "<name of the word file>", 
        "issues": "<any issues if the data is not legitimate>"
    }
    """
  
  user_prompt = f"Generate me just the code without using any f-string in the script using the python-docx module to make a beautifully formatted resume that attracts anyone based on the following data. Data:{json_clean_data}, Format of JSON Response:{formatting}. Save the document to the directory path './exported_resume/' using doc.save "
  
  message = [
    {"role":"system", "content":system_prompt},
    {"role":"user", "content": user_prompt}
  ]
  
  return communicate_with_openai(message=message, model="gpt-4-turbo")