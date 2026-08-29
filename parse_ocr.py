import json

with open("clean_motivos.json", "r", encoding="utf-8") as f:
    clean_motivos = json.load(f)

with open("ocr.txt", "r", encoding="utf-8") as f:
    lines = [line.strip() for line in f if line.strip()]

if lines and "MEDIO TIPO MOTIVO DESCRIPCIÓN" in lines[0]:
    lines = lines[1:]

data = []
current_category = ""

categories = [
    "INSTALACIÓN", "FACURACION Y COBRANZA", "FACTURACIÓN Y COBRANZA", "PLANES TARIFARIOS",
    "SERVICIOS SOLICITADOS", "ACTUALIZACIÓN DE DATOS", "VISITA TÉCNICA",
    "ATENCIÓN TECNOLÓGICA", "PAGINA WEB", "OTROS", "RECLAMOS", "RECUPERO DE EQUIPO",
    "BAJAS", "WELCOME CALL", "WIN TV", "WINTV PREMIUM", "REACTIVACIÓN", "ATC", "INSTALACIONES",
    "VENTAS CAMPO", "VENTAS CALL", "VENTAS RRSS", "RETENIDOS", "CAMBIO DE DATOS EN EL SERVICIO",
    "SOLICITUDES", "SUSPENSIÓN TEMPORAL"
]

valid_medios = [
    "Informativo", "Status", "Solicitud", "Atípico", "Sugerencia", "Problemas con atención", "Problemas con servicio", "Problemas",
    "Cancelación de servicio -Retenido", "Cancelación"
]

valid_tipos = [
    "Serv. Solicitados", "Mis Solicitudes", "Recojo de equipos", "Cambio de Velocidad temporal",
    "WIN TV Premium", "Cambio de Datos en el servicio", "Cambio de Plan", "Producto contratado",
    "Visita Técnica", "Atención Tecnológica", "Susensión Temporal", "Suspensión Temporal", "Actualización de datos",
    "Cancelación del Servicio", "Cesión contractual", "Cambio de Titularidad", "Pagina Web",
    "Gestión Cliente", "Cartera de productos", "Canales de Atención", "Internet con cable",
    "Conectividad por cable", "Conectividad WiFi", "Sin conexión", "Problemas con atención",
    "Problemas con servicio", "Ventas Campo", "Ventas Voz", "Ventas RRSS", "Instalación",
    "Pagos", "Recibo", "Equipos", "Promociones", "Reclamo", "Welcome Call", "WIN TV",
    "Atípico", "Facturación", "Mis solicitudes", "Servicios Solicitados", "Reactivación",
    "Cambio de Velocidad", "Cancelacion del servicio", "Atención al cliente Voz", "Atención al cliente RRSS", "ONT", "Pagina web/Juegos",
    "Informativo-Competencia", "Informativo-Motivos Economicos", "Informativo-Facturación", "Informativo-Incumplimiento Perú Fibra",
    "Informativo-Mudanza Viaje", "Informativo-Negociación Interrumpida", "Informativo-Problemas personales", "Informativo-Problemas con servicio"
]

valid_motivos = clean_motivos

def starts_with_medio(text):
    lower_text = text.lower()
    for vm in valid_medios:
        vm_lower = vm.lower()
        if lower_text.startswith(vm_lower):
            # Must match whole word to prevent "Solicitudes" matching "Solicitud"
            if len(lower_text) == len(vm_lower) or lower_text[len(vm_lower)] == ' ':
                return True
    return False

i = 0
while i < len(lines):
    line = lines[i]
    
    if line.isupper() and len(line) < 40 and not line.startswith("LOS ") and line != "ONT":
        current_category = line
        if i + 1 < len(lines) and lines[i+1].isupper() and len(lines[i+1]) < 20 and not lines[i+1].startswith("LOS "):
            current_category += " " + lines[i+1]
            i += 1
        i += 1
        continue
        
    if line == "MEDIO TIPO MOTIVO DESCRIPCIÓN":
        i += 1
        continue
        
    if starts_with_medio(line):
        row_text = line
        j = i + 1
        while j < len(lines):
            next_line = lines[j]
            if next_line.isupper() and len(next_line) < 40 and next_line != "ONT":
                break
            if starts_with_medio(next_line):
                break
            if next_line == "MEDIO TIPO MOTIVO DESCRIPCIÓN":
                break
            
            row_text += " " + next_line
            j += 1
            
        i = j
        row_text_orig = row_text
        
        medio = ""
        for vm in sorted(valid_medios, key=len, reverse=True):
            if row_text.lower().startswith(vm.lower()):
                medio = vm
                row_text = row_text[len(vm):].strip()
                break
        
        tipo = ""
        for vt in sorted(valid_tipos, key=len, reverse=True):
            idx = row_text.lower().find(vt.lower())
            if idx != -1 and idx < 15:
                tipo = vt
                row_text = row_text[idx + len(vt):].strip()
                break
                
        motivo = ""
        for vm in valid_motivos:
            idx = row_text.lower().find(vm.lower())
            if idx != -1 and idx < 10:
                motivo = vm
                row_text = row_text[idx + len(vm):].strip()
                break
                
        desc = row_text
        if desc.lower().startswith("del cliente"): desc = desc[11:].strip()
        if motivo.startswith("-"): motivo = motivo[1:].strip()
        if motivo.lower().startswith("es "): motivo = motivo[3:].strip()
        if desc.lower().startswith("es "): desc = desc[3:].strip()
        if desc.lower().startswith("apc "): desc = desc[4:].strip()
        
        # specific manual override based on user images to fix residual split artifacts
        if tipo == "Cambio de Velocidad temporal" and motivo == "" and row_text_orig.strip() == "Solicitud":
            continue # ignore empty rows caused by bad OCR formatting

        data.append({
            "categoria": current_category,
            "medio": medio,
            "tipo": tipo,
            "motivo": motivo,
            "descripcion": desc,
            "raw": row_text_orig
        })
    else:
        i += 1

js_content = "const tipificaciones = " + json.dumps(data, indent=2, ensure_ascii=False) + ";"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Parsed {len(data)} tipificaciones.")
