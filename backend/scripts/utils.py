import json
from io import BytesIO, StringIO
from base64 import b64encode
from PIL import Image

# --------------------------------------------------------------------------#
def convert_to_png(image):
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    return buffered.getvalue()

def process_image(image_path, max_image_dim=1024):
    img = Image.open(image_path)
    width, height = img.size
    max_dim = max(width, height)
    if max_dim > max_image_dim:
        scale_factor = max_image_dim / max_dim
        new_width = int(width * scale_factor)
        new_height = int(height * scale_factor)
        img = img.resize((new_width, new_height))
        
    image_bytes = convert_to_png(img)
    return b64encode(image_bytes).decode("utf-8")
# --------------------------------------------------------------------------#

# --------------------------------------------------------------------------#
# extract page as images from scanned documents
def extract_images_from_pdf(document):
    images = []
    for page_num in range(len(document)):
        page = document.load_page(page_num)
        pix = page.get_pixmap()
        img = Image.open(BytesIO(pix.tobytes()))
        images.append(img)
    return images
# --------------------------------------------------------------------------#


# --------------------------------------------------------------------------#
# Returns the response String as JSON Object
def to_json_formatted(response_string):
    return json.load(StringIO(response_string))
# --------------------------------------------------------------------------#


def preprocess_for_fe():
    pass