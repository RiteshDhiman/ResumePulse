from scripts.utils import to_json_formatted
from scripts.communicate_with_gpt import build_resume_with_gpt
from flatten_dict.reducers import make_reducer
from flatten_dict import flatten

def build_resume(json_request_data):
    data_prep = flatten(json_request_data, reducer=make_reducer(delimiter='_'), enumerate_types=(list,), keep_empty_types=(dict,))
    
    print(data_prep)
    
    json_response = build_resume_with_gpt(data_prep)
    formatted_json_response = to_json_formatted(json_response)
    
    code_for_resume = formatted_json_response["code"]
    
    # Create a dictionary to hold the variables
    exec_context = {}
    
    exec(code_for_resume, exec_context)
    doc = exec_context["doc"]
    print(doc)
    
    return doc