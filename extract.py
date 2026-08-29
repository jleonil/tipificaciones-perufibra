import fitz
import os
import io

pdf_path = "MANUAL DE MARCA PERÚ FIBRA - PARTNERS TÉCNICOS .pptx.pdf"
doc = fitz.open(pdf_path)

out_dir = "extracted_images"
os.makedirs(out_dir, exist_ok=True)

image_count = 0
for i in range(len(doc)):
    for img in doc.get_page_images(i):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"image_{i}_{image_count}.{image_ext}"
        with open(os.path.join(out_dir, image_name), "wb") as f:
            f.write(image_bytes)
        print(f"Extracted: {image_name}")
        image_count += 1
