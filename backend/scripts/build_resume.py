from scripts.utils import to_json_formatted
from scripts.communicate_with_gpt import build_resume_with_gpt

def build_resume(json_request_data):
    # data = to_json_formatted(json_request_data)
    
    data_prep={}
    
    for key in json_request_data:
        if type(json_request_data[key]) == dict:
            for sub_key in json_request_data[key]:
                data_prep[f"{key}_{sub_key}"] = json_request_data[key][sub_key]
                
        if type(json_request_data[key]) == list:
            for idx, obj in enumerate(json_request_data[key]):
                for sub_key in obj:
                    data_prep[f"{sub_key}_{idx}"] = obj[sub_key]

    json_response = build_resume_with_gpt(data_prep)
    formatted_json_response = to_json_formatted(json_response)
    
    code_for_resume = formatted_json_response["code"]
    exec(code_for_resume)
    
    path_to_resume = formatted_json_response["filePath"]
    
    print(path_to_resume)
    return path_to_resume