# code done ✅

import pymupdf
from docx2txt import process
from docx2python import docx2python
from scripts.communicate_with_gpt import get_image_text
from scripts.utils import process_image, extract_images_from_pdf

# --------------------------------------------------------------------------#
# main controller function
def extract_text_from_file(file_path):
    extracted_text = ""
    file_extension = file_path.lower().rsplit(".", 1)[-1]
    if file_extension in ['png', 'jpg', 'jpeg', 'tiff', 'bmp']:
        extracted_text = extract_text_from_image(file_path)
    elif file_extension == 'pdf':
        extracted_text = extract_text_from_pdf(file_path)
    elif file_extension in ['.doc', '.docx']:
        extracted_text = extract_text_from_word_1(file_path)
        
    if not extracted_text:
        extracted_text = extract_text_from_scanned_pdf(file_path)
        
    return extracted_text
# --------------------------------------------------------------------------#
    
# --------------------------------------------------------------------------#
# extract text from digital files
def extract_text_from_pdf(file_path): 
    pdf_document = pymupdf.open(file_path)
    text = ''
    for page in pdf_document:
        text += page.get_text()
    return text
# --------------------------------------------------------------------------#

# --------------------------------------------------------------------------#
# text extraction from image
# extract text that will be integrated with gpt-4o
def extract_text_from_image(image_path):
    encoded_image_string = process_image(image_path)
    return get_image_text(encoded_image_string)
# --------------------------------------------------------------------------#

# --------------------------------------------------------------------------#

# extract text from scanned documents
def extract_text_from_scanned_pdf(file_path):
    document = pymupdf.open(file_path)
    images = extract_images_from_pdf(document)
    text = ""
    for img in images:
        text += extract_text_from_image(img)
    return text
# --------------------------------------------------------------------------#

# --------------------------------------------------------------------------#
# extract text from word documents
def extract_text_from_word_1(file_path):
    return process(file_path).strip()
    
def extract_text_from_word_2(file_path):
    # Extract the contents of the docx file
    content = docx2python(file_path)
    
    # List to hold the text
    text_list = []
    
    # Recursively extract text from the content
    support_for_v2_word_extraction_1(content.body, text_list)
    
    # Join the text list into a single string
    return '\n'.join(text_list)

def support_for_v2_word_extraction_1(data, text_list):
    """
    Recursively extract text from nested lists and append to text_list.
    """
    if isinstance(data, list):
        for item in data:
            support_for_v2_word_extraction_1(item, text_list)
    elif isinstance(data, str):
        text_list.append(data)
# --------------------------------------------------------------------------#