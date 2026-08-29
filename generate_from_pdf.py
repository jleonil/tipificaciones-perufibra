import pymupdf
import json
import re

pdf_path = r'C:\Users\jhonn\.gemini\antigravity-ide\brain\42ca9250-ec67-49f0-a03c-651b53ade503\.user_uploaded\media_1787774781104.pdf'

doc = pymupdf.open(pdf_path)
full_text = ""
for page in doc:
    full_text += page.get_text()

# Normalize line endings
full_text = full_text.replace('\r\n', '\n')

current_macro = ""
data = []
current_item = None
current_key = None

for line in full_text.split('\n'):
    line = line.strip()
    if not line:
        continue
        
    if line.startswith('#'):
        current_macro = line[1:].strip().upper()
        # Clean up some common macro names if needed based on the PDF
        if current_macro == 'RETENCIONES ATC':
            current_macro = 'RETENCIÓN ATC'
        continue
        
    if line.startswith('CATEGORÍA:'):
        if current_item and current_item.get('categoria'):
            data.append(current_item)
        current_item = {
            'grupo': current_macro,
            'categoria': line.replace('CATEGORÍA:', '').strip(),
            'medio': '',
            'tipo': '',
            'motivo': '',
            'descripcion': '',
            'raw': ''
        }
        current_key = 'categoria'
    elif line.startswith('MEDIO:'):
        if current_item:
            current_item['medio'] = line.replace('MEDIO:', '').strip()
            current_key = 'medio'
    elif line.startswith('TIPO:'):
        if current_item:
            current_item['tipo'] = line.replace('TIPO:', '').strip()
            current_key = 'tipo'
    elif line.startswith('MOTIVO:'):
        if current_item:
            current_item['motivo'] = line.replace('MOTIVO:', '').strip()
            current_key = 'motivo'
    elif line.startswith('DESCRIPCIÓN:'):
        if current_item:
            current_item['descripcion'] = line.replace('DESCRIPCIÓN:', '').strip()
            current_key = 'descripcion'
    else:
        # Continuation of the previous field (usually descripción)
        if current_item and current_key:
            current_item[current_key] += ' ' + line

if current_item and current_item.get('categoria'):
    data.append(current_item)

# Post-processing to clean up encoding issues from PDF reading if any
for d in data:
    for k in d:
        d['raw'] = f"{d['medio']} {d['tipo']} {d['motivo']} {d['descripcion']}"

js_content = "const tipificaciones = " + json.dumps(data, indent=2, ensure_ascii=False) + ";"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(data)} pristine tipificaciones from PDF.")
