# code done ✅

import pymupdf
from docx2txt import process
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
    elif file_extension in ['doc', 'docx']:
        extracted_text = extract_text_from_word(file_path)
        
    if not extracted_text:
        extracted_text = extract_text_from_scanned_pdf(file_path)
        
    if not extracted_text or len(extracted_text) < 10:
        raise Exception("Text extraction failed")
        
    return extracted_text
# --------------------------------------------------------------------------#
    
# --------------------------------------------------------------------------#
# extract text from digital files
def extract_text_from_pdf(file_path): 
    pdf_document = pymupdf.open(file_path)
    text = ''
    count=0
    for page in pdf_document:
        if count >= 2:
            break
        text += page.get_text()
        count+=1
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
def extract_text_from_word(file_path):
    return process(file_path).strip()
# --------------------------------------------------------------------------#