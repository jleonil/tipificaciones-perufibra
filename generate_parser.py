import json

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
    "Informativo", "Status", "Solicitud", "Atípico", "Sugerencia", "Problemas",
    "Cancelación de servicio -Retenido", "Cancelación"
]

valid_tipos = [
    "Serv. Solicitados", "Mis Solicitudes", "Recojo de equipos", "Cambio de Velocidad temporal",
    "WIN TV Premium", "Cambio de Datos en el servicio", "Cambio de Plan", "Producto contratado",
    "Visita Técnica", "Atención Tecnológica", "Suspensión Temporal", "Actualización de datos",
    "Cancelación del Servicio", "Cesión contractual", "Cambio de Titularidad", "Pagina Web",
    "Gestión Cliente", "Cartera de productos", "Canales de Atención", "Internet con cable",
    "Conectividad por cable", "Conectividad WiFi", "Sin conexión", "Problemas con atención",
    "Problemas con servicio", "Ventas Campo", "Ventas Voz", "Ventas RRSS", "Instalación",
    "Pagos", "Recibo", "Equipos", "Promociones", "Reclamo", "Welcome Call", "WIN TV",
    "Atípico", "Facturación", "Mis solicitudes", "Servicios Solicitados", "Reactivación",
    "Cambio de Velocidad", "Cancelacion del servicio"
]

valid_motivos = ["Informativo-Motivos Economicos Renovación del beneficio RETENIDOS Cancelación de servicio -Retenido Informativo-Facturación No reconoce el monto", "Informativo-Mudanza Viaje Mudanza-Ya cuenta con Perú Fibra RETENIDOS Cancelación de servicio -Retenido Informativo-Negociación Interrumpida", "Informativo-Motivos Economicos Solicitud de prorroga de pago RETENIDOS Cancelación de servicio -Retenido Informativo-Motivos Economicos", "Cuando el cliente se comunica solicitando la programación de recojo de equipos", "Cómo realizar cambio de titularidad_Persona Natural-Requisitos y Procedimiento", "con atención Atención al cliente RRSS No contesta mensaje/Cierra conversación", "Cómo realizar cesión contractual_Persona Juridica Requisitos y Procedimiento", "Estado de la solicitud de cambio de titularidad_Persona Natural En proceso", "con atención Atención al cliente RRSS No brindo solución y/o información", "apc Cuando cliente, solita el ingreso de la solicitud de suspensión APC", "con atención Atención al cliente Voz No brindo solución y/o información", "Estado de la solicitud Cesión Contractual_Persona Juridica-En proceso", "Informativo-Problemas personales Problemas personales sin dar detalle", "LOS verde Lentitud - Intermitencia Configuración accediendo al router", "Informativo-Motivos Economicos No puede pagar el total del recibo", "Cómo actualizo los datos de mi cuenta Requisitos y Procedimiento", "Informativo-Incumplimiento Perú Fibra Gestión de instalaciones", "Cómo solicitar suspensión temporal Requisitos y Procedimiento", "Informativo-Mudanza Viaje Viaje dentro del País-con cobertura", "LOS verde - Ancho de Banda Configuración accediendo al router", "Informativo-Mudanza Viaje Viaje dentro del País-sin cobertura", "LOS verde - Perdida total Configuración accediendo al router", "Importe pendiente de pago-Monto a pagar- Servicio suspendido", "del Servicio Como cancelar todos mis servicio/Procedimiento", "Informativo-Problemas personales Regreso Trabajo Presencial", "Informativo-Problemas personales Incendio/Desastre natural", "Informativo-Incumplimiento Perú Fibra Gestión Fidelización", "Informativo-Mudanza Viaje Mudanza-sin facilidades técnicas", "Visita Técnica Estado de VT fuera de plazo Planta externa", "con atención Atención al cliente RRSS Maltratos/Insultos", "Pago realizado no impacta en sistema-Solicita reconexión", "Informativo-Mudanza Viaje Viaje al extranjero Indefinido", "con atención Atención al cliente Voz No contesta llamada", "Cambio de Dirección en el recibo sin solicitudes pendie", "Importe pendiente de pago-Monto a pagar-Servicio Activo", "con atención Atención al cliente Voz Maltratos/Insultos", "Formas de pago-Bancos, Agentes y otros lugares de pagos", "Informativo-Problemas personales Problemas Familiares", "Cómo solicitar un traslado-Requisitos y Procedimiento", "LOS verde - Ancho de Banda-Corregir velocidad de plan", "Cambio de Titular en el recibo por cesión contractual", "Pago realizado impactó en sistema-Solicita reconexión", "LOS verde Lentitud - Intermitencia Descartes físicos", "Informativo-Incumplimiento Perú Fibra Gestión Ventas", "Informativo-Problemas personales Problemas de Salud", "Cómo realizar Downgrade-Requisitos y Procedimiento", "Atención Tecnológica- Estado de AT dentro de plazo", "No relacionado a Perú Fibra/Otro operador/empresa", "Características de mi plan-Términos y condiciones", "Cómo realizar Upgrade -Requisitos y Procedimiento", "Atención Tecnológica- Estado de AT fuera de plazo", "Informativo-Incumplimiento Perú Fibra Gestión ATC", "Información errónea sobre el servicio contratado", "Informativo-Competencia No menciona/Otra Empresa", "Estado de la solicitud Cambio de plan Downgrade", "Informativo-Mudanza Viaje Mudanza-con Cobertura", "Estado de la solicitud de reubicación de router", "Informativo-Mudanza Viaje Mudanza-sin Cobertura", "Cambio de Dirección Requisitos y Procedimiento", "Invasión de espacios terceros por instalación", "Informativo-Competencia Win Negocios/Empresas", "Estado de la solicitud Cambio de plan Upgrade", "Cambio de Dirección en el recibo por traslado", "LOS verde - Ancho de Banda Descartes físicos", "No reconoce cargos por servicios solicitados", "Sin acceso a páginas /Aplicaciones externas", "con servicio ONT No funciona puerto trasero", "Visita Técnica-Estado de VT dentro de plazo", "Visita Técnica Estado de VT fuera de plazo", "Sin luces - Perdida total-ONT desenchufada", "Cambio de Dirección en el recibo por error", "Cambio de titularidad - A Persona Jurídica", "Estado de la solicitud Suspensión Temporal", "LOS verde - Perdida total Reinicio de ONT", "Cambio de titularidad - A Persona Natural", "Invasión de espacios terceros por trabajo", "Se facturo estando suspendido el servicio", "Cambio de Titularidad A Persona Juridica", "Importe pendiente de pago-Código de pago", "Estado de devolución-Pago a otro cliente", "Ajuste/Descuento/Devolución no realizado", "Cobro de prorrateo/cuota de instalación", "Operativa interna-Devolución de llamada", "/Juegos No ingresa a una página puntual", "No contesta mensaje/Cierra conversación", "Cambio de Titularidad A Persona Natural", "Reubicación-Cómo solicitar reubicación", "Accidente de un tercero por el técnico", "Informativo-Competencia Igualar Oferta", "Informativo-Problemas personales Robo", "Lentitud en horas puntuales - 5.0 Ghz", "Lentitud en horas puntuales - 2.4 Ghz", "Mesh Cuando el cliente solicite Mesh", "Rotura de Fibra dentro del domicilio", "Por solicitud de suspensión temporal", "Recableado-Cómo solicitar recableado", "es pendientes Error en actualización", "Patch cord-Cómo solicitar patch cord", "es Ampliación - Suspensión Temporal", "Baja por inclumplimiento Perú Fibra", "Desiste de cancelación del servicio", "con servicio ONT Luces no funcionan", "/Juegos No carga un juego instalado", "Estado de devolución-Saldo a favor-", "Rotura de Fibra fuera del domicilio", "Cobros adicionales no reconocidos", "Lentitud todo el tiempo - 5.0 Ghz", "Descuento por Suspensión Temporal", "Lentitud todo el tiempo - 2.4 Ghz", "Anulación a solicitud del cliente", "Informativo-Competencia FIBERPRO", "Ciertos dispositivos no conectan", "Downgrade Downgrade no realizado", "Informativo-Competencia MOVISTAR", "Reincidencia en problema técnico", "Informativo-Competencia MI FIBRA", "con servicio ONT Enchufe dañado", "Afiliación al débito automático", "Baja por motivos de facturación", "Estado de devolución-Pago doble", "Baja por problemas con servicio", "Informativo-Competencia DIRECTV", "Estado de Traslado a domicilio", "Llamadas en horarios indebidos", "Informativo-Competencia NIUBIX", "Mensajes en horarios indebidos", "Informativo-Motivos Economicos", "Problemas con Juegos/ Latencia", "Estado de cambio de patch cord", "Informativo-Competencia ENTEL", "Anulación cambio de dirección", "Visitas en horarios indebidos", "Baja por problemas personales", "Informativo-Competencia CLARO", "Informativo-Competencia BITEL", "Estado de Traslado a edificio", "Descuento por Reclamo Fundado", "Insatisfecho con la velocidad", "ONT-Cómo solicitar reemplazo", "Cambio de nombre de red WiFi", "Cambio de correo electrónico", "con servicio ONT No enciende", "Cambio de número de teléfono", "Información usuario abonados", "Demora en emisión de recibo", "Descuento por Avería Masiva", "Informativo-Competencia WOW", "Sin consulta / Llamada muda", "Baja por motivos económicos", "Pérdida total del servicio", "Upgrade Upgrade no realiza", "No concreto la instalación", "Envio documentos-Rechazado", "Reprogramación del cliente", "Reprogramación por cliente", "Ajuste por Reclamo Fundado", "Ningún dispositivo conecta", "Estado de cambio de router", "Descuento por Fidelización", "Incumplimiento Perú Fibra", "Cambio de contraseña WiFi", "Intermitencia en la señal", "Dispositivos compatibles", "No aparece red - 2.4 Ghz", "Desconexiones aleatorias", "No aparece red - 5.0 Ghz", "Solicito datos indebidos", "Condiciones del servicio", "Sin facilidades técnicas", "Anulación Cambio de Plan", "Estado de Reinstalación", "Informativo-Competencia", "/Juegos No funciona VPN", "No llega ancho de banda", "Ajuste por Fidelización", "Baja por mudanza/viaje", "Actualización Telefono", "Error en el cargo Fijo", "No aparece ninguna red", "Libro de reclamaciones", "Daños en el domicilio", "Accidente del técnico", "Por Pendiente de pago", "Ciclo de Facturación-", "Sobre la instalación", "Traslado a Edificios", "Descuento por Avería", "Estado de Recableado", "Traslado a Domicilio", "Baja por competencia", "Preguntas Frecuentes", "Cambio de Patch Cord", "Actualización Correo", "Mensajes constantes", "Llamadas constantes", "ONT-Características", "Puntos presenciales", "Cambio de dirección", "Cambio de Patchcord", "No contesta llamada", "Costo de Reconexión", "Correo electrónico", "Reubicación de Ont", "No envió de recibo", "No brindo solución", "Número de teléfono", "Reubicación de ONT", "Maltratos/Insultos", "Prórroga de Pago-", "Mesh con cableado", "Lentitud de señal", "Apps de Streaming", "Problemas de Wifi", "Promoción 6 meses", "Doble Facturación", "Alcance - 5.0 Ghz", "Primera Instancia", "Alcance - 2.4 Ghz", "Sin factibilidad", "Inicio de sesión", "Agresión física", "LOS rojo en ONT", "con el servicio", "Nota de crédito", "Medio de Pagos", "Nuevo servicio", "Suspención APC", "Reinstalación", "Cambio de Ont", "Viaje/Mudanza", "Amplificador", "con servicio", "Autogestión", "Reclableado", "del cliente", "Vicio Vicio", "Competencia", "personales", "TV Digital", "Beneficios", "No vigente", "económicos", "Downgrade", "Dirección", "Speedtest", "Telefonía", "estéticos", "Apelación", "Prorrateo", "Telegram", "Traslado", "Lentitud", "Upgrade", "Canales", "Vigente", "Insulto", "Sorteos", "Masivo", "Otros", "Cable", "Mis", ""]

def starts_with_medio(text):
    lower_text = text.lower()
    for vm in valid_medios:
        vm_lower = vm.lower()
        if lower_text.startswith(vm_lower):
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
