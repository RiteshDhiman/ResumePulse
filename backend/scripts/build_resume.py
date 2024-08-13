from scripts.utils import to_json_formatted
from scripts.communicate_with_gpt import build_resume_with_gpt

def build_resume(json_request_data):
    # data = to_json_formatted(json_request_data)
    prep_data = { 
                 obj["type"].rsplit("/", 1)[-1][3:]: obj["payload"]
                for obj in data 
            }

    json_response = build_resume_with_gpt(prep_data)
    formatted_json_response = to_json_formatted(json_response)
    
    code_for_resume = formatted_json_response["code"]
    exec(code_for_resume)
    
    path_to_resume = formatted_json_response["filePath"]
    print(path_to_resume)
    return path_to_resume