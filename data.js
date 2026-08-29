const tipificaciones = [
  {
    "grupo": "INFORMATIVO",
    "categoria": "INSTALACIÓN",
    "medio": "Informativo",
    "tipo": "Instalación",
    "motivo": "Sobre la instalación",
    "descripcion": "Cliente desea conocer documento, horario, tiempo que demora la instalación, técnico que lo visitará, etc",
    "raw": "Informativo Instalación Sobre la instalación Cliente desea conocer documento, horario, tiempo que demora la instalación, técnico que lo visitará, etc"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "INSTALACIÓN",
    "medio": "Informativo",
    "tipo": "Instalación",
    "motivo": "Estado de problemas en la instalación",
    "descripcion": "Cuando el cliente consulta sobre un problema durante la instalación.",
    "raw": "Informativo Instalación Estado de problemas en la instalación Cuando el cliente consulta sobre un problema durante la instalación."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "INSTALACIÓN",
    "medio": "Informativo",
    "tipo": "Instalación",
    "motivo": "Sin factibilidad",
    "descripcion": "Cuando cliente se comunica para saber por su instalación y se valida que no hay factibilidades técnicas para proceder.",
    "raw": "Informativo Instalación Sin factibilidad Cuando cliente se comunica para saber por su instalación y se valida que no hay factibilidades técnicas para proceder."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Pagos",
    "motivo": "Formas de pago-Bancos, Agentes y otros lugares de pagos",
    "descripcion": "Cuando desea saber los medios para pagar su recibo.",
    "raw": "Informativo Pagos Formas de pago-Bancos, Agentes y otros lugares de pagos Cuando desea saber los medios para pagar su recibo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Pagos",
    "motivo": "Afiliación al débito automático",
    "descripcion": "Cuando desea saber los pasos para afiliarse al débito automático de su banco.",
    "raw": "Informativo Pagos Afiliación al débito automático Cuando desea saber los pasos para afiliarse al débito automático de su banco."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Pagos",
    "motivo": "Prórroga de Pago-Se informa",
    "descripcion": "Cuando desea saber si existe alguna manera para que su pago se extienda o le den alguna facilidad.",
    "raw": "Informativo Pagos Prórroga de Pago-Se informa Cuando desea saber si existe alguna manera para que su pago se extienda o le den alguna facilidad."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Importe pendiente de pago-Monto a pagar-Servicio Activo",
    "descripcion": "Cuando consulta sobre su deuda pendiente y se valida que el servicio está activo aún.",
    "raw": "Informativo Recibo Importe pendiente de pago-Monto a pagar-Servicio Activo Cuando consulta sobre su deuda pendiente y se valida que el servicio está activo aún."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Importe pendiente de pago-Monto a pagar- Servicio suspendido",
    "descripcion": "Cuando consulta sobre su deuda pendiente y se valida que el servicio está suspendido por falta de pago.",
    "raw": "Informativo Recibo Importe pendiente de pago-Monto a pagar- Servicio suspendido Cuando consulta sobre su deuda pendiente y se valida que el servicio está suspendido por falta de pago."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Importe pendiente de pago-Código de pago",
    "descripcion": "Cuando pide le puedan brindar su código de pago para que pueda pagar.",
    "raw": "Informativo Recibo Importe pendiente de pago-Código de pago Cuando pide le puedan brindar su código de pago para que pueda pagar."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Explicación de recibo-Prorrateo",
    "descripcion": "Cuando pide que le expliquen su recibo.",
    "raw": "Informativo Recibo Explicación de recibo-Prorrateo Cuando pide que le expliquen su recibo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Costo de Reconexión",
    "descripcion": "Cliente consulta si tenemos cobro por reconexión del servicio por suspensión por deuda",
    "raw": "Informativo Recibo Costo de Reconexión Cliente consulta si tenemos cobro por reconexión del servicio por suspensión por deuda"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Informativo",
    "tipo": "Recibo",
    "motivo": "Ciclo de Facturación-Se informa",
    "descripcion": "Cuando desea saber los ciclos de facturación.",
    "raw": "Informativo Recibo Ciclo de Facturación-Se informa Cuando desea saber los ciclos de facturación."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Informativo",
    "tipo": "Cambio de Plan",
    "motivo": "Cómo realizar Upgrade -Requisitos y Procedimiento",
    "descripcion": "Cuando cliente, desea saber sobre como subir su plan a uno superior.",
    "raw": "Informativo Cambio de Plan Cómo realizar Upgrade -Requisitos y Procedimiento Cuando cliente, desea saber sobre como subir su plan a uno superior."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Informativo",
    "tipo": "Cambio de Plan",
    "motivo": "Cómo realizar Downgrade-Requisitos y Procedimiento",
    "descripcion": "Cuando cliente, desea saber sobre como bajar su plan.",
    "raw": "Informativo Cambio de Plan Cómo realizar Downgrade-Requisitos y Procedimiento Cuando cliente, desea saber sobre como bajar su plan."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Informativo",
    "tipo": "Producto contratado",
    "motivo": "Características de mi plan-Términos y condiciones",
    "descripcion": "Cuando cliente, desea saber sobre el plan actual que tiene contratado",
    "raw": "Informativo Producto contratado Características de mi plan-Términos y condiciones Cuando cliente, desea saber sobre el plan actual que tiene contratado"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Informativo",
    "tipo": "Producto contratado",
    "motivo": "Condiciones del servicio",
    "descripcion": "Cliente desea conocer sobre las especificaciones de su servicio como NAT, IP, etc.",
    "raw": "Informativo Producto contratado Condiciones del servicio Cliente desea conocer sobre las especificaciones de su servicio como NAT, IP, etc."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Equipos",
    "motivo": "ONT-Características",
    "descripcion": "Cuando cliente, consulta características o modelo de ONT",
    "raw": "Informativo Equipos ONT-Características Cuando cliente, consulta características o modelo de ONT"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Equipos",
    "motivo": "ONT-Cómo solicitar reemplazo",
    "descripcion": "Cuando cliente, consulta como puede cambiar su ONT",
    "raw": "Informativo Equipos ONT-Cómo solicitar reemplazo Cuando cliente, consulta como puede cambiar su ONT"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Equipos",
    "motivo": "Recableado-Cómo solicitar recableado",
    "descripcion": "Cuando cliente, consulta costo de un recableado y no se concreta la variación.",
    "raw": "Informativo Equipos Recableado-Cómo solicitar recableado Cuando cliente, consulta costo de un recableado y no se concreta la variación."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Equipos",
    "motivo": "Reubicación-Cómo solicitar reubicación",
    "descripcion": "Cuando cliente, consulta costo de reubicación a solicitud y como puede realizar la gestión y no se concreta la variación.",
    "raw": "Informativo Equipos Reubicación-Cómo solicitar reubicación Cuando cliente, consulta costo de reubicación a solicitud y como puede realizar la gestión y no se concreta la variación."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Equipos",
    "motivo": "Patch cord-Cómo solicitar patch cord",
    "descripcion": "Cuando cliente, consulta costo de patch cord y no se concreta variación.",
    "raw": "Informativo Equipos Patch cord-Cómo solicitar patch cord Cuando cliente, consulta costo de patch cord y no se concreta variación."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Informativo",
    "tipo": "Suspensión Temporal",
    "motivo": "Cómo solicitar suspensión temporal-Requisitos y Procedimiento",
    "descripcion": "Cuando cliente, desea saber que se necesita para pedir la suspensión temporal",
    "raw": "Informativo Suspensión Temporal Cómo solicitar suspensión temporal-Requisitos y Procedimiento Cuando cliente, desea saber que se necesita para pedir la suspensión temporal"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Informativo",
    "tipo": "Actualización de datos",
    "motivo": "Cómo actualizo los datos de mi cuenta-Requisitos y Procedimiento",
    "descripcion": "Cuando el cliente se comunica para solicitar requisitos para actualización de datos",
    "raw": "Informativo Actualización de datos Cómo actualizo los datos de mi cuenta-Requisitos y Procedimiento Cuando el cliente se comunica para solicitar requisitos para actualización de datos"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Informativo",
    "tipo": "Actualización de datos",
    "motivo": "Cómo realizar cesión contractual_Persona Juridica-Requisitos y Procedimiento",
    "descripcion": "Cuando el cliente solicita una cesión contractual y se le brinda el procedimiento y se envía la documentación",
    "raw": "Informativo Actualización de datos Cómo realizar cesión contractual_Persona Juridica-Requisitos y Procedimiento Cuando el cliente solicita una cesión contractual y se le brinda el procedimiento y se envía la documentación"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Informativo",
    "tipo": "Actualización de datos",
    "motivo": "Cómo realizar cambio de titularidad_Persona Natural-Requisitos y Procedimiento",
    "descripcion": "Cuando el cliente solicita un cambio de titularidad y se le brinda el procedimiento y se envía la documentación",
    "raw": "Informativo Actualización de datos Cómo realizar cambio de titularidad_Persona Natural-Requisitos y Procedimiento Cuando el cliente solicita un cambio de titularidad y se le brinda el procedimiento y se envía la documentación"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Informativo",
    "tipo": "Cesión contractual",
    "motivo": "Envio documentos-Rechazado",
    "descripcion": "Cuando solicita una cesión contractual y envió documentos, pero se rechaza u observa.",
    "raw": "Informativo Cesión contractual Envio documentos-Rechazado Cuando solicita una cesión contractual y envió documentos, pero se rechaza u observa."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Informativo",
    "tipo": "Cambio de Titularidad",
    "motivo": "Envio documentos-Rechazado",
    "descripcion": "Cuando solicita un cambio de titularidad y envió documentos, pero se rechaza u observa.",
    "raw": "Informativo Cambio de Titularidad Envio documentos-Rechazado Cuando solicita un cambio de titularidad y envió documentos, pero se rechaza u observa."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Visita Técnica-Estado de VT dentro de plazo",
    "descripcion": "Cuando cliente, se comunica para saber sobre su Visita técnica pendiente, se valida que está dentro de plazo.",
    "raw": "Informativo Visita Técnica Visita Técnica-Estado de VT dentro de plazo Cuando cliente, se comunica para saber sobre su Visita técnica pendiente, se valida que está dentro de plazo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Cómo solicitar un traslado-Requisitos y Procedimiento",
    "descripcion": "Cuando cliente, desea saber que se necesita para pedir un traslado de servicio",
    "raw": "Informativo Visita Técnica Cómo solicitar un traslado-Requisitos y Procedimiento Cuando cliente, desea saber que se necesita para pedir un traslado de servicio"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Traslado a Edificios",
    "descripcion": "Cliente desea conocer condiciones para realizar un traslado",
    "raw": "Informativo Visita Técnica Traslado a Edificios Cliente desea conocer condiciones para realizar un traslado"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Traslado a Domicilio",
    "descripcion": "Cliente desea conocer condiciones para realizar un traslado",
    "raw": "Informativo Visita Técnica Traslado a Domicilio Cliente desea conocer condiciones para realizar un traslado"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Reubicación de ONT",
    "descripcion": "Cliente desea conocer condiciones para realizar un reubicación de ont",
    "raw": "Informativo Visita Técnica Reubicación de ONT Cliente desea conocer condiciones para realizar un reubicación de ont"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Cambio de Patchcord",
    "descripcion": "Cliente desea conocer el cambio de patchcord",
    "raw": "Informativo Visita Técnica Cambio de Patchcord Cliente desea conocer el cambio de patchcord"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Cambio de Ont",
    "descripcion": "Cliente desea conocer el cambio de ont",
    "raw": "Informativo Visita Técnica Cambio de Ont Cliente desea conocer el cambio de ont"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Recableado",
    "descripcion": "Cliente desea conocer condiciones para realizar un recableado",
    "raw": "Informativo Visita Técnica Recableado Cliente desea conocer condiciones para realizar un recableado"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "VISITA TÉCNICA",
    "medio": "Informativo",
    "tipo": "Visita Técnica",
    "motivo": "Reinstalación",
    "descripcion": "Cliente desea conocer condiciones para realizar una reinstalación",
    "raw": "Informativo Visita Técnica Reinstalación Cliente desea conocer condiciones para realizar una reinstalación"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Informativo",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de contraseña WiFi",
    "descripcion": "Cliente desea conocer sobre el proceso de cambio de contraseña",
    "raw": "Informativo Atención Tecnológica Cambio de contraseña WiFi Cliente desea conocer sobre el proceso de cambio de contraseña"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Informativo",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de nombre de red WiFi",
    "descripcion": "Cliente desea conocer sobre el proceso de cambio de red WiFi",
    "raw": "Informativo Atención Tecnológica Cambio de nombre de red WiFi Cliente desea conocer sobre el proceso de cambio de red WiFi"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Informativo",
    "tipo": "Atención Tecnológica",
    "motivo": "Atención Tecnológica- Estado de AT dentro de plazo",
    "descripcion": "Cuando cliente, se comunica para saber sobre su Atención Tecnológica pendiente, se valida que está dentro de plazo.",
    "raw": "Informativo Atención Tecnológica Atención Tecnológica- Estado de AT dentro de plazo Cuando cliente, se comunica para saber sobre su Atención Tecnológica pendiente, se valida que está dentro de plazo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Informativo",
    "tipo": "Atención Tecnológica",
    "motivo": "Atención Tecnológica- Estado de AT fuera de plazo",
    "descripcion": "Cuando cliente, se comunica para saber sobre su Atención Tecnológica pendiente, se valida que está fuera de plazo.",
    "raw": "Informativo Atención Tecnológica Atención Tecnológica- Estado de AT fuera de plazo Cuando cliente, se comunica para saber sobre su Atención Tecnológica pendiente, se valida que está fuera de plazo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PAGINA WEB",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Libro de reclamaciones",
    "descripcion": "Cuando el cliente, se comunique para solicitar el libro de reclamaciones.",
    "raw": "Informativo Pagina Web Libro de reclamaciones Cuando el cliente, se comunique para solicitar el libro de reclamaciones."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PAGINA WEB",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Medio de Pagos",
    "descripcion": "Cuando el cliente, se comunique para generar consultas sobre los medios de pago en la Web",
    "raw": "Informativo Pagina Web Medio de Pagos Cuando el cliente, se comunique para generar consultas sobre los medios de pago en la Web"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PAGINA WEB",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Información usuario abonados",
    "descripcion": "",
    "raw": "Informativo Pagina Web Información usuario abonados "
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PAGINA WEB",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Autogestión",
    "descripcion": "",
    "raw": "Informativo Pagina Web Autogestión "
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "PAGINA WEB",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Preguntas Frecuentes",
    "descripcion": "Cuando el cliente, se comunique para generar consultas frecuentes de la pagina Web.",
    "raw": "Informativo Pagina Web Preguntas Frecuentes Cuando el cliente, se comunique para generar consultas frecuentes de la pagina Web."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Gestión Cliente",
    "motivo": "Operativa interna-Devolución de llamada",
    "descripcion": "Cuando el asesor, se compromete a llamar al cliente por algún motivo.",
    "raw": "Informativo Gestión Cliente Operativa interna-Devolución de llamada Cuando el asesor, se compromete a llamar al cliente por algún motivo."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Pagina Web",
    "motivo": "Speedtest",
    "descripcion": "Cuando el cliente consulte o desee validar su velocidad desde speedtest",
    "raw": "Informativo Pagina Web Speedtest Cuando el cliente consulte o desee validar su velocidad desde speedtest"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Atípico",
    "tipo": "Atípico",
    "motivo": "No relacionado a Perú Fibra/Otro operador/empresa",
    "descripcion": "Cuando el cliente consulte por otros temas no relacionado a Perú Fibra",
    "raw": "Atípico Atípico No relacionado a Perú Fibra/Otro operador/empresa Cuando el cliente consulte por otros temas no relacionado a Perú Fibra"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Atípico",
    "tipo": "Atípico",
    "motivo": "Vicio",
    "descripcion": "Vicio",
    "raw": "Atípico Atípico Vicio Vicio"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Atípico",
    "tipo": "Atípico",
    "motivo": "Sin consulta / Llamada muda",
    "descripcion": "Se equivoca de número o escribe y no tiene consulta.",
    "raw": "Atípico Atípico Sin consulta / Llamada muda Se equivoca de número o escribe y no tiene consulta."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Atípico",
    "tipo": "Atípico",
    "motivo": "Insulto",
    "descripcion": "Cuando el cliente insulte",
    "raw": "Atípico Atípico Insulto Cuando el cliente insulte"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "Telefonía",
    "descripcion": "Cuando el cliente solicite Telefonía",
    "raw": "Sugerencia Cartera de productos Telefonía Cuando el cliente solicite Telefonía"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "Mesh",
    "descripcion": "Cuando el cliente solicite Mesh",
    "raw": "Sugerencia Cartera de productos Mesh Cuando el cliente solicite Mesh"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "Amplificador",
    "descripcion": "Cuando el cliente solicite Amplificador",
    "raw": "Sugerencia Cartera de productos Amplificador Cuando el cliente solicite Amplificador"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "Cable",
    "descripcion": "Cuando el cliente solicite Cable",
    "raw": "Sugerencia Cartera de productos Cable Cuando el cliente solicite Cable"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "TV Digital",
    "descripcion": "Cuando el cliente solicite TV Digital",
    "raw": "Sugerencia Cartera de productos TV Digital Cuando el cliente solicite TV Digital"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Cartera de productos",
    "motivo": "Apps de Streaming",
    "descripcion": "Cuando el cliente solicite Apps de Streaming",
    "raw": "Sugerencia Cartera de productos Apps de Streaming Cuando el cliente solicite Apps de Streaming"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Canales de Atención",
    "motivo": "Puntos presenciales",
    "descripcion": "Cuando el cliente solicite Canal de Atención Presencial",
    "raw": "Sugerencia Canales de Atención Puntos presenciales Cuando el cliente solicite Canal de Atención Presencial"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Canales de Atención",
    "motivo": "Telegram",
    "descripcion": "Cuando el cliente solicite Telegram",
    "raw": "Sugerencia Canales de Atención Telegram Cuando el cliente solicite Telegram"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Sugerencia",
    "tipo": "Canales de Atención",
    "motivo": "Otros",
    "descripcion": "Cuando el cliente solicite Otros",
    "raw": "Sugerencia Canales de Atención Otros Cuando el cliente solicite Otros"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Promociones",
    "motivo": "Sorteos",
    "descripcion": "Cuando el cliente consulta por sorteos",
    "raw": "Informativo Promociones Sorteos Cuando el cliente consulta por sorteos"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Promociones",
    "motivo": "No vigente",
    "descripcion": "Cuando el cliente consulta por promos no vigentes",
    "raw": "Informativo Promociones No vigente Cuando el cliente consulta por promos no vigentes"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Promociones",
    "motivo": "Vigente",
    "descripcion": "Cuando el cliente consulta por promos vigentes",
    "raw": "Informativo Promociones Vigente Cuando el cliente consulta por promos vigentes"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "OTROS",
    "medio": "Informativo",
    "tipo": "Promociones",
    "motivo": "Nuevo servicio",
    "descripcion": "Cuando el cliente consulta información de servicio nuevo",
    "raw": "Informativo Promociones Nuevo servicio Cuando el cliente consulta información de servicio nuevo"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "RECLAMOS",
    "medio": "Informativo",
    "tipo": "Reclamo",
    "motivo": "Información de Reclamos",
    "descripcion": "Cuando cliente consulte como registrar un reclamo",
    "raw": "Informativo Reclamo Información de Reclamos Cuando cliente consulte como registrar un reclamo"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "RECUPERO DE EQUIPO",
    "medio": "Informativo",
    "tipo": "Recojo de equipos",
    "motivo": "Informacion de Recojo de equipos",
    "descripcion": "Cuando cliente consulte como se genera la devolucion de equipos (Servicio de baja)",
    "raw": "Informativo Recojo de equipos Informacion de Recojo de equipos Cuando cliente consulte como se genera la devolucion de equipos (Servicio de baja)"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "BAJAS",
    "medio": "Informativo",
    "tipo": "Cancelación del Servicio",
    "motivo": "Como cancelar todos mis servicio/Procedimiento",
    "descripcion": "Cuando cliente consulte el paso a paso de gestionar una baja.",
    "raw": "Informativo Cancelación del Servicio Como cancelar todos mis servicio/Procedimiento Cuando cliente consulte el paso a paso de gestionar una baja."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WELCOME CALL",
    "medio": "Informativo",
    "tipo": "Welcome Call",
    "motivo": "Conforme con servicio",
    "descripcion": "Cuando el cliente reciba la llamada de Welcome Call y no presenta ningun problema",
    "raw": "Informativo Welcome Call Conforme con servicio Cuando el cliente reciba la llamada de Welcome Call y no presenta ningun problema"
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WIN TV",
    "medio": "Informativo",
    "tipo": "WIN TV Premium",
    "motivo": "Beneficios",
    "descripcion": "Cliente consulta en qué consiste el servicio WIN TV, beneficios y contenido incluido.",
    "raw": "Informativo WIN TV Premium Beneficios Cliente consulta en qué consiste el servicio WIN TV, beneficios y contenido incluido."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WIN TV",
    "medio": "Informativo",
    "tipo": "WIN TV Premium",
    "motivo": "Promoción 6 meses",
    "descripcion": "Cliente consulta sobre la promoción de WIN TV Premium gratuito por 6 meses, condiciones y vigencia.",
    "raw": "Informativo WIN TV Premium Promoción 6 meses Cliente consulta sobre la promoción de WIN TV Premium gratuito por 6 meses, condiciones y vigencia."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WIN TV",
    "medio": "Informativo",
    "tipo": "WIN TV Premium",
    "motivo": "Inicio de sesión",
    "descripcion": "Cliente solicita orientación para acceder a su cuenta WIN TV.",
    "raw": "Informativo WIN TV Premium Inicio de sesión Cliente solicita orientación para acceder a su cuenta WIN TV."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WIN TV",
    "medio": "Informativo",
    "tipo": "WIN TV Premium",
    "motivo": "Dispositivos compatibles",
    "descripcion": "Cliente consulta en qué equipos puede utilizar WIN TV.",
    "raw": "Informativo WIN TV Premium Dispositivos compatibles Cliente consulta en qué equipos puede utilizar WIN TV."
  },
  {
    "grupo": "INFORMATIVO",
    "categoria": "WIN TV",
    "medio": "Informativo",
    "tipo": "WIN TV Premium",
    "motivo": "Canales",
    "descripcion": "Cliente consulta la grilla de canales o contenido disponible en WIN TV Premium.",
    "raw": "Informativo WIN TV Premium Canales Cliente consulta la grilla de canales o contenido disponible en WIN TV Premium."
  },
  {
    "grupo": "STATUS",
    "categoria": "INSTALACIÓN",
    "medio": "Status",
    "tipo": "Instalación",
    "motivo": "Reprogramación del cliente",
    "descripcion": "Cuando se comunica para saber sobre el estado de su reprogramación",
    "raw": "Status Instalación Reprogramación del cliente Cuando se comunica para saber sobre el estado de su reprogramación"
  },
  {
    "grupo": "STATUS",
    "categoria": "INSTALACIÓN",
    "medio": "Status",
    "tipo": "Instalación",
    "motivo": "Sin facilidades técnicas",
    "descripcion": "Cuando cliente se comunica para saber por su instalación y se valida que no hay factibilidades técnicas para proceder.",
    "raw": "Status Instalación Sin facilidades técnicas Cuando cliente se comunica para saber por su instalación y se valida que no hay factibilidades técnicas para proceder."
  },
  {
    "grupo": "STATUS",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Status",
    "tipo": "Mis Solicitudes",
    "motivo": "Estado de la solicitud-Cambio de plan Downgrade",
    "descripcion": "Cuando cliente, desea saber si su cambio de plan se efectuó.",
    "raw": "Status Mis Solicitudes Estado de la solicitud-Cambio de plan Downgrade Cuando cliente, desea saber si su cambio de plan se efectuó."
  },
  {
    "grupo": "STATUS",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Status",
    "tipo": "Mis Solicitudes",
    "motivo": "Estado de la solicitud-Cambio de plan Upgrade",
    "descripcion": "Cuando cliente, desea saber si su cambio de plan se efectuó.",
    "raw": "Status Mis Solicitudes Estado de la solicitud-Cambio de plan Upgrade Cuando cliente, desea saber si su cambio de plan se efectuó."
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Recibo",
    "motivo": "Estado de devolución-Pago a otro cliente",
    "descripcion": "Cuando se comunica para saber sobre el estado de su solicitud por el pago a otro abonado.",
    "raw": "Status Recibo Estado de devolución-Pago a otro cliente Cuando se comunica para saber sobre el estado de su solicitud por el pago a otro abonado."
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Recibo",
    "motivo": "Estado de devolución-Pago doble",
    "descripcion": "Cuando se comunica para saber sobre el estado de su solicitud por el pago doble.",
    "raw": "Status Recibo Estado de devolución-Pago doble Cuando se comunica para saber sobre el estado de su solicitud por el pago doble."
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Recibo",
    "motivo": "Estado de devolución-Saldo a favor- Cliente baja",
    "descripcion": "Cuando se comunica para saber sobre su solicitud de devolución su saldo a favor y su estado es baja definitiva o suspensión definitiva",
    "raw": "Status Recibo Estado de devolución-Saldo a favor- Cliente baja Cuando se comunica para saber sobre su solicitud de devolución su saldo a favor y su estado es baja definitiva o suspensión definitiva"
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Ajuste por Fidelización",
    "descripcion": "Cuando se comunica para saber sobre el ajuste otorgado por fidelización",
    "raw": "Status Facturación Ajuste por Fidelización Cuando se comunica para saber sobre el ajuste otorgado por fidelización"
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Descuento por Fidelización",
    "descripcion": "Cuando se comunica para saber sobre el descuento otorgado por fidelización",
    "raw": "Status Facturación Descuento por Fidelización Cuando se comunica para saber sobre el descuento otorgado por fidelización"
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Ajuste por Reclamo Fundado",
    "descripcion": "Cuando se comunica para saber sobre el ajuste que corresponde según reclamo fundado",
    "raw": "Status Facturación Ajuste por Reclamo Fundado Cuando se comunica para saber sobre el ajuste que corresponde según reclamo fundado"
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Descuento por Reclamo Fundado",
    "descripcion": "Cuando se comunica para saber sobre el descuento que corresponde según reclamo fundado",
    "raw": "Status Facturación Descuento por Reclamo Fundado Cuando se comunica para saber sobre el descuento que corresponde según reclamo fundado"
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por error",
    "descripcion": "",
    "raw": "Status Facturación Cambio de Dirección en el recibo por error "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por traslado",
    "descripcion": "",
    "raw": "Status Facturación Cambio de Dirección en el recibo por traslado "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo sin solicitudes pendientes",
    "descripcion": "",
    "raw": "Status Facturación Cambio de Dirección en el recibo sin solicitudes pendientes "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Cambio de Titular en el recibo por cesión contractual",
    "descripcion": "",
    "raw": "Status Facturación Cambio de Titular en el recibo por cesión contractual "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Doble Facturación",
    "descripcion": "",
    "raw": "Status Facturación Doble Facturación "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Cobros adicionales no reconocidos",
    "descripcion": "",
    "raw": "Status Facturación Cobros adicionales no reconocidos "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Nota de crédito",
    "descripcion": "",
    "raw": "Status Facturación Nota de crédito "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Prorrateo",
    "descripcion": "",
    "raw": "Status Facturación Prorrateo "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería Masiva",
    "descripcion": "",
    "raw": "Status Facturación Descuento por Avería Masiva "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Descuento por Suspensión Temporal",
    "descripcion": "",
    "raw": "Status Facturación Descuento por Suspensión Temporal "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería",
    "descripcion": "",
    "raw": "Status Facturación Descuento por Avería "
  },
  {
    "grupo": "STATUS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Status",
    "tipo": "Facturación",
    "motivo": "Afiliación al débito automático",
    "descripcion": "",
    "raw": "Status Facturación Afiliación al débito automático "
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de la solicitud de reubicación de router",
    "descripcion": "Cuando cliente, consulta sobre la reubicación que solicito y se verifica que aún está en proceso (dentro de plazo).",
    "raw": "Status Mis solicitudes Estado de la solicitud de reubicación de router Cuando cliente, consulta sobre la reubicación que solicito y se verifica que aún está en proceso (dentro de plazo)."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de Recableado",
    "descripcion": "Cuando cliente, consulta sobre estado de su solicitud de recableado, se valida que está pendiente dentro de plazo.",
    "raw": "Status Mis solicitudes Estado de Recableado Cuando cliente, consulta sobre estado de su solicitud de recableado, se valida que está pendiente dentro de plazo."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de Traslado a domicilio",
    "descripcion": "Cuando cliente, desea saber el estado de su traslado de servicio.",
    "raw": "Status Mis solicitudes Estado de Traslado a domicilio Cuando cliente, desea saber el estado de su traslado de servicio."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de Reinstalación",
    "descripcion": "Cuando cliente, desea saber el estado de su traslado de la reinstalación de su servicio.",
    "raw": "Status Mis solicitudes Estado de Reinstalación Cuando cliente, desea saber el estado de su traslado de la reinstalación de su servicio."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de Traslado a edificio",
    "descripcion": "Cuando cliente, desea saber el estado de su traslado de servicio.",
    "raw": "Status Mis solicitudes Estado de Traslado a edificio Cuando cliente, desea saber el estado de su traslado de servicio."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de cambio de patch cord",
    "descripcion": "Cuando cliente, consulta sobre estado de su solicitud de cable Patch Cord, se valida ya entregado.",
    "raw": "Status Mis solicitudes Estado de cambio de patch cord Cuando cliente, consulta sobre estado de su solicitud de cable Patch Cord, se valida ya entregado."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de cambio de router",
    "descripcion": "Cuando cliente, consulta sobre estado de su solicitud de router, se valida ya entregado",
    "raw": "Status Mis solicitudes Estado de cambio de router Cuando cliente, consulta sobre estado de su solicitud de router, se valida ya entregado"
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de la solicitud-Suspensión Temporal",
    "descripcion": "Cuando el cliente, desea saber si su servicio y se confirme suspendido temporalmente.",
    "raw": "Status Mis solicitudes Estado de la solicitud-Suspensión Temporal Cuando el cliente, desea saber si su servicio y se confirme suspendido temporalmente."
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Reactivación",
    "motivo": "Por Pendiente de pago",
    "descripcion": "Cuando el cliente, desea saber el estado de la reactivación del servicio por pago realizado",
    "raw": "Status Reactivación Por Pendiente de pago Cuando el cliente, desea saber el estado de la reactivación del servicio por pago realizado"
  },
  {
    "grupo": "STATUS",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Status",
    "tipo": "Reactivación",
    "motivo": "Por solicitud de suspensión temporal",
    "descripcion": "Cuando el cliente, desea saber el estado de la reactivación APC",
    "raw": "Status Reactivación Por solicitud de suspensión temporal Cuando el cliente, desea saber el estado de la reactivación APC"
  },
  {
    "grupo": "STATUS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Status",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de número de teléfono",
    "descripcion": "Cliente desea saber el estado de cambio su número de teléfono",
    "raw": "Status Actualización de datos Cambio de número de teléfono Cliente desea saber el estado de cambio su número de teléfono"
  },
  {
    "grupo": "STATUS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Status",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de correo electrónico",
    "descripcion": "Cliente desea saber el estado de cambio de su correo electrónico",
    "raw": "Status Actualización de datos Cambio de correo electrónico Cliente desea saber el estado de cambio de su correo electrónico"
  },
  {
    "grupo": "STATUS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Status",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de dirección",
    "descripcion": "Cliente desea saber el estado de cambio de su dirección",
    "raw": "Status Actualización de datos Cambio de dirección Cliente desea saber el estado de cambio de su dirección"
  },
  {
    "grupo": "STATUS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de la solicitud de cambio de titularidad_Persona Natural-En proceso",
    "descripcion": "Cuando consulta el estado de su solicitud de cambio de titularidad, se identifica que aun se encuentra en proceso.",
    "raw": "Status Mis solicitudes Estado de la solicitud de cambio de titularidad_Persona Natural-En proceso Cuando consulta el estado de su solicitud de cambio de titularidad, se identifica que aun se encuentra en proceso."
  },
  {
    "grupo": "STATUS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Status",
    "tipo": "Mis solicitudes",
    "motivo": "Estado de la solicitud Cesión Contractual_Persona Juridica-En proceso",
    "descripcion": "Cuando el cliente, consulta el estado de su solicitud de cesión contractual, se identifica que aun se encuentra en proceso dentro de plazo.",
    "raw": "Status Mis solicitudes Estado de la solicitud Cesión Contractual_Persona Juridica-En proceso Cuando el cliente, consulta el estado de su solicitud de cesión contractual, se identifica que aun se encuentra en proceso dentro de plazo."
  },
  {
    "grupo": "STATUS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Status",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de contraseña WiFi",
    "descripcion": "Cliente desea saber el estado de cambio de contraseña WiFi",
    "raw": "Status Atención Tecnológica Cambio de contraseña WiFi Cliente desea saber el estado de cambio de contraseña WiFi"
  },
  {
    "grupo": "STATUS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Status",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de nombre de red WiFi",
    "descripcion": "Cliente desea saber el estado de cambio de nombre de red WiFi",
    "raw": "Status Atención Tecnológica Cambio de nombre de red WiFi Cliente desea saber el estado de cambio de nombre de red WiFi"
  },
  {
    "grupo": "STATUS",
    "categoria": "BAJAS",
    "medio": "Status",
    "tipo": "Cancelación del Servicio",
    "motivo": "Estado de cancelación total",
    "descripcion": "Cuando el cliente ya tenga un registro de baja total y consulte el estado.",
    "raw": "Status Cancelación del Servicio Estado de cancelación total Cuando el cliente ya tenga un registro de baja total y consulte el estado."
  },
  {
    "grupo": "STATUS",
    "categoria": "RECUPERO DE EQUIPO",
    "medio": "Status",
    "tipo": "Recojo de equipos",
    "motivo": "Estado de recojo de equipos",
    "descripcion": "Cuando el cliente se comunique consultando el estado de la programación de recojo de equipos",
    "raw": "Status Recojo de equipos Estado de recojo de equipos Cuando el cliente se comunique consultando el estado de la programación de recojo de equipos"
  },
  {
    "grupo": "STATUS",
    "categoria": "RECLAMOS",
    "medio": "Status",
    "tipo": "Reclamo",
    "motivo": "Primera Instancia",
    "descripcion": "Cliente desea saber el estado de su reclamo",
    "raw": "Status Reclamo Primera Instancia Cliente desea saber el estado de su reclamo"
  },
  {
    "grupo": "STATUS",
    "categoria": "RECLAMOS",
    "medio": "Status",
    "tipo": "Reclamo",
    "motivo": "Apelación",
    "descripcion": "Cliente desea saber el estado de su apelación",
    "raw": "Status Reclamo Apelación Cliente desea saber el estado de su apelación"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "INSTALACIÓN",
    "medio": "Solicitud",
    "tipo": "Instalación",
    "motivo": "Anulación a solicitud del cliente",
    "descripcion": "Cuando el cliente, desea anular su instalación.",
    "raw": "Solicitud Instalación Anulación a solicitud del cliente Cuando el cliente, desea anular su instalación."
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "INSTALACIÓN",
    "medio": "Solicitud",
    "tipo": "Instalación",
    "motivo": "Anulación cambio de dirección",
    "descripcion": "Cuando el cliente, indica que desea modificar o cambiar la dirección porque se ingresó mal.",
    "raw": "Solicitud Instalación Anulación cambio de dirección Cuando el cliente, indica que desea modificar o cambiar la dirección porque se ingresó mal."
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "INSTALACIÓN",
    "medio": "Solicitud",
    "tipo": "Instalación",
    "motivo": "Anulación Cambio de Plan",
    "descripcion": "Cuando cliente, desea contratar con otro plan.",
    "raw": "Solicitud Instalación Anulación Cambio de Plan Cuando cliente, desea contratar con otro plan."
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "INSTALACIÓN",
    "medio": "Solicitud",
    "tipo": "Instalación",
    "motivo": "Sin facilidades técnicas",
    "descripcion": "Cuando no hay facilidades tecnicas",
    "raw": "Solicitud Instalación Sin facilidades técnicas Cuando no hay facilidades tecnicas"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "INSTALACIÓN",
    "medio": "Solicitud",
    "tipo": "Instalación",
    "motivo": "Reprogramación por cliente",
    "descripcion": "Cuando el cliente se comunica para poder reprogramar su instalación.",
    "raw": "Solicitud Instalación Reprogramación por cliente Cuando el cliente se comunica para poder reprogramar su instalación."
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Solicitud",
    "tipo": "Actualización de datos",
    "motivo": "Actualización Telefono",
    "descripcion": "Cuando desea cambiar su telefono porque ya no es el mismo que el registrado",
    "raw": "Solicitud Actualización de datos Actualización Telefono Cuando desea cambiar su telefono porque ya no es el mismo que el registrado"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Solicitud",
    "tipo": "Actualización de datos",
    "motivo": "Actualización Correo",
    "descripcion": "Cuando desea cambiar su correo porque ya no es el mismo que el registrado",
    "raw": "Solicitud Actualización de datos Actualización Correo Cuando desea cambiar su correo porque ya no es el mismo que el registrado"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Solicitud",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de Dirección-Requisitos y Procedimiento",
    "descripcion": "Cuando indica que su dirección esta mal registrada y desea cambiarla.",
    "raw": "Solicitud Actualización de datos Cambio de Dirección-Requisitos y Procedimiento Cuando indica que su dirección esta mal registrada y desea cambiarla."
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE DATOS EN EL SERVICIO",
    "medio": "Solicitud",
    "tipo": "Cambio de Datos en el servicio",
    "motivo": "Cambio de Titularidad- A Persona Natural",
    "descripcion": "Cuando desea un cambio de titularidad a persona natural",
    "raw": "Solicitud Cambio de Datos en el servicio Cambio de Titularidad- A Persona Natural Cuando desea un cambio de titularidad a persona natural"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE DATOS EN EL SERVICIO",
    "medio": "Solicitud",
    "tipo": "Cambio de Datos en el servicio",
    "motivo": "Cambio de Titularidad- A Persona Juridica",
    "descripcion": "Cuando desea un cambio de titularidad a persona juridica",
    "raw": "Solicitud Cambio de Datos en el servicio Cambio de Titularidad- A Persona Juridica Cuando desea un cambio de titularidad a persona juridica"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE DATOS EN EL SERVICIO",
    "medio": "Solicitud",
    "tipo": "Cambio de Datos en el servicio",
    "motivo": "Dirección",
    "descripcion": "Cuando desea un cambio de dirección",
    "raw": "Solicitud Cambio de Datos en el servicio Dirección Cuando desea un cambio de dirección"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Solicitud",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de contraseña WiFi",
    "descripcion": "Cliente desea saber el estado de cambio de contraseña WiFi",
    "raw": "Solicitud Atención Tecnológica Cambio de contraseña WiFi Cliente desea saber el estado de cambio de contraseña WiFi"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Solicitud",
    "tipo": "Atención Tecnológica",
    "motivo": "Cambio de nombre de red WiFi",
    "descripcion": "Cliente desea saber el estado de cambio de nombre de red WiFi",
    "raw": "Solicitud Atención Tecnológica Cambio de nombre de red WiFi Cliente desea saber el estado de cambio de nombre de red WiFi"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Ajuste por Fidelización",
    "descripcion": "Cuando se realizara rectificación sobre un monto facturado",
    "raw": "Solicitud Facturación Ajuste por Fidelización Cuando se realizara rectificación sobre un monto facturado"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Descuento por Fidelización",
    "descripcion": "Cuando se realizara un descuento para proximos emisiones",
    "raw": "Solicitud Facturación Descuento por Fidelización Cuando se realizara un descuento para proximos emisiones"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Ajuste por Reclamo Fundado",
    "descripcion": "Area de Reclamos realiza ajuste",
    "raw": "Solicitud Facturación Ajuste por Reclamo Fundado Area de Reclamos realiza ajuste"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Descuento por Reclamo Fundado",
    "descripcion": "Area de Reclamos realiza descuento",
    "raw": "Solicitud Facturación Descuento por Reclamo Fundado Area de Reclamos realiza descuento"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por error",
    "descripcion": "Actualización de datos del cliente",
    "raw": "Solicitud Facturación Cambio de Dirección en el recibo por error Actualización de datos del cliente"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por traslado",
    "descripcion": "Actualización de datos del cliente",
    "raw": "Solicitud Facturación Cambio de Dirección en el recibo por traslado Actualización de datos del cliente"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo sin solicitudes pendientes",
    "descripcion": "Actualización de datos del cliente",
    "raw": "Solicitud Facturación Cambio de Dirección en el recibo sin solicitudes pendientes Actualización de datos del cliente"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Cambio de Titular en el recibo por cesión contractual",
    "descripcion": "Actualización de datos del cliente",
    "raw": "Solicitud Facturación Cambio de Titular en el recibo por cesión contractual Actualización de datos del cliente"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Nota de crédito",
    "descripcion": "Cuando se realizara rectificación sobre un monto facturado",
    "raw": "Solicitud Facturación Nota de crédito Cuando se realizara rectificación sobre un monto facturado"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Prorrateo",
    "descripcion": "Descuento/Ajuste sobre prorrateo no reconocido",
    "raw": "Solicitud Facturación Prorrateo Descuento/Ajuste sobre prorrateo no reconocido"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería Masiva",
    "descripcion": "Descuento por avería masivo",
    "raw": "Solicitud Facturación Descuento por Avería Masiva Descuento por avería masivo"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Descuento por Suspensión Temporal",
    "descripcion": "Descuento sobre servicio que conto con suspensión APC",
    "raw": "Solicitud Facturación Descuento por Suspensión Temporal Descuento sobre servicio que conto con suspensión APC"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería",
    "descripcion": "Descuento por avería",
    "raw": "Solicitud Facturación Descuento por Avería Descuento por avería"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Solicitud",
    "tipo": "Facturación",
    "motivo": "Afiliación al débito automático",
    "descripcion": "Cuando solciite afiliación debito automatico",
    "raw": "Solicitud Facturación Afiliación al débito automático Cuando solciite afiliación debito automatico"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Cambio de Patch Cord",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de reubicación",
    "raw": "Solicitud Serv. Solicitados Cambio de Patch Cord Cuando cliente, solicita el ingreso de la solicitud de reubicación"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Cambio de Ont",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de recableado",
    "raw": "Solicitud Serv. Solicitados Cambio de Ont Cuando cliente, solicita el ingreso de la solicitud de recableado"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Mesh con cableado",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de traslado a domicilio",
    "raw": "Solicitud Serv. Solicitados Mesh con cableado Cuando cliente, solicita el ingreso de la solicitud de traslado a domicilio"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Reinstalación",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de reinstalación",
    "raw": "Solicitud Serv. Solicitados Reinstalación Cuando cliente, solicita el ingreso de la solicitud de reinstalación"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Traslado",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de traslado a edificio",
    "raw": "Solicitud Serv. Solicitados Traslado Cuando cliente, solicita el ingreso de la solicitud de traslado a edificio"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SERVICIOS SOLICITADOS",
    "medio": "Solicitud",
    "tipo": "Serv. Solicitados",
    "motivo": "Reubicación de Ont",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de patch cord",
    "raw": "Solicitud Serv. Solicitados Reubicación de Ont Cuando cliente, solicita el ingreso de la solicitud de patch cord"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Problemas económicos",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Problemas económicos "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Problemas personales",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Problemas personales "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Problemas con el servicio",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Problemas con el servicio "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Competencia",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Competencia "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Viaje/Mudanza",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Viaje/Mudanza "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "CAMBIO DE VELOCIDAD TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Cambio de Velocidad temporal",
    "motivo": "Incumplimiento Perú Fibra",
    "descripcion": "",
    "raw": "Solicitud Cambio de Velocidad temporal Incumplimiento Perú Fibra "
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SOLICITUDES",
    "medio": "Solicitud",
    "tipo": "Mis Solicitudes",
    "motivo": "Suspensión Temporal apc",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de suspensión APC",
    "raw": "Solicitud Mis Solicitudes Suspensión Temporal apc Cuando cliente, solicita el ingreso de la solicitud de suspensión APC"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SOLICITUDES",
    "medio": "Solicitud",
    "tipo": "Mis Solicitudes",
    "motivo": "Ampliación -Suspensión Temporal",
    "descripcion": "Cuando el cliente solicita ampliación de la suspensión",
    "raw": "Solicitud Mis Solicitudes Ampliación -Suspensión Temporal Cuando el cliente solicita ampliación de la suspensión"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "REACTIVACIÓN",
    "medio": "Solicitud",
    "tipo": "Reactivación",
    "motivo": "Por Pendiente de pago",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de reactivación por deuda",
    "raw": "Solicitud Reactivación Por Pendiente de pago Cuando cliente, solicita el ingreso de la solicitud de reactivación por deuda"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "REACTIVACIÓN",
    "medio": "Solicitud",
    "tipo": "Reactivación",
    "motivo": "Por solicitud de suspensión temporal",
    "descripcion": "Cuando cliente, solicita el ingreso de la solicitud de reactivación APC",
    "raw": "Solicitud Reactivación Por solicitud de suspensión temporal Cuando cliente, solicita el ingreso de la solicitud de reactivación APC"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "REACTIVACIÓN",
    "medio": "Solicitud",
    "tipo": "Reactivación",
    "motivo": "Desiste de cancelación del servicio",
    "descripcion": "Cuando cliente desiste de cancelar el servicio y desea que reactive",
    "raw": "Solicitud Reactivación Desiste de cancelación del servicio Cuando cliente desiste de cancelar el servicio y desea que reactive"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "SUSPENSIÓN TEMPORAL",
    "medio": "Solicitud",
    "tipo": "Suspensión Temporal",
    "motivo": "Suspención APC",
    "descripcion": "Cuando el cliente solicite suspensión temporal de 15 a 60 dias (NO SE UTILIZA)",
    "raw": "Solicitud Suspensión Temporal Suspención APC Cuando el cliente solicite suspensión temporal de 15 a 60 dias (NO SE UTILIZA)"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Solicitud",
    "tipo": "Cambio de Plan",
    "motivo": "Downgrade",
    "descripcion": "Cuando cliente, desea generar cambio Downgrade",
    "raw": "Solicitud Cambio de Plan Downgrade Cuando cliente, desea generar cambio Downgrade"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Solicitud",
    "tipo": "Cambio de Plan",
    "motivo": "Upgrade",
    "descripcion": "Cuando cliente, desea generar Upgrade",
    "raw": "Solicitud Cambio de Plan Upgrade Cuando cliente, desea generar Upgrade"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "RECLAMOS",
    "medio": "Solicitud",
    "tipo": "Reclamo",
    "motivo": "Primera Instancia",
    "descripcion": "Cliente desea ingresar un reclamo",
    "raw": "Solicitud Reclamo Primera Instancia Cliente desea ingresar un reclamo"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "RECLAMOS",
    "medio": "Solicitud",
    "tipo": "Reclamo",
    "motivo": "Apelación",
    "descripcion": "Cliente desea ingresar una apelación",
    "raw": "Solicitud Reclamo Apelación Cliente desea ingresar una apelación"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por competencia",
    "descripcion": "Cuando cliente solicita baja por oferta de la competencia",
    "raw": "Solicitud Cancelación del Servicio Baja por competencia Cuando cliente solicita baja por oferta de la competencia"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por motivos de facturación",
    "descripcion": "Cuando cliente solicita baja por disconformidad en los recibos",
    "raw": "Solicitud Cancelación del Servicio Baja por motivos de facturación Cuando cliente solicita baja por disconformidad en los recibos"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por motivos económicos",
    "descripcion": "Cuando cliente solicita baja por motivos económicos",
    "raw": "Solicitud Cancelación del Servicio Baja por motivos económicos Cuando cliente solicita baja por motivos económicos"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por problemas con servicio",
    "descripcion": "Cuando cliente solicita baja por averias/inconvenientes con el servicio",
    "raw": "Solicitud Cancelación del Servicio Baja por problemas con servicio Cuando cliente solicita baja por averias/inconvenientes con el servicio"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por mudanza/viaje",
    "descripcion": "Cuando cliente solicita baja por mudanza o viaje",
    "raw": "Solicitud Cancelación del Servicio Baja por mudanza/viaje Cuando cliente solicita baja por mudanza o viaje"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por problemas personales",
    "descripcion": "Cuando cliente solicita baja por motivos personales",
    "raw": "Solicitud Cancelación del Servicio Baja por problemas personales Cuando cliente solicita baja por motivos personales"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "BAJAS",
    "medio": "Solicitud",
    "tipo": "Cancelación del Servicio",
    "motivo": "Baja por inclumplimiento Perú Fibra",
    "descripcion": "Cuando cliente solicita baja por incumplimiento de contrato",
    "raw": "Solicitud Cancelación del Servicio Baja por inclumplimiento Perú Fibra Cuando cliente solicita baja por incumplimiento de contrato"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "RECUPERO DE EQUIPO",
    "medio": "Solicitud",
    "tipo": "Recojo de equipos",
    "motivo": "Solicitud de recojo de equipos",
    "descripcion": "Cuando el cliente se comunica solicitando la programación de recojo de equipos",
    "raw": "Solicitud Recojo de equipos Solicitud de recojo de equipos Cuando el cliente se comunica solicitando la programación de recojo de equipos"
  },
  {
    "grupo": "SOLICITUD",
    "categoria": "WIN TV PREMIUM",
    "medio": "Solicitud",
    "tipo": "WIN TV Premium",
    "motivo": "Activación",
    "descripcion": "Se activa WIN TV PREMIUM por ofrecimiento de Fidelización",
    "raw": "Solicitud WIN TV Premium Activación Se activa WIN TV PREMIUM por ofrecimiento de Fidelización"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente Voz",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente Voz Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente Voz",
    "motivo": "No brindo solución y/o información",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente Voz No brindo solución y/o información "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente Voz",
    "motivo": "No contesta llamada",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente Voz No contesta llamada "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente RRSS",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente RRSS Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente RRSS",
    "motivo": "No brindo solución y/o información",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente RRSS No brindo solución y/o información "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATC",
    "medio": "Problemas con atención",
    "tipo": "Atención al cliente RRSS",
    "motivo": "No contesta mensaje/Cierra conversación",
    "descripcion": "",
    "raw": "Problemas con atención Atención al cliente RRSS No contesta mensaje/Cierra conversación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Información errónea sobre el servicio contratado",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Información errónea sobre el servicio contratado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Solicito datos indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Solicito datos indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Agresión física",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Agresión física "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "No concreto la instalación",
    "descripcion": "",
    "raw": "Problemas con atención Instalación No concreto la instalación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Daños en el domicilio",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Daños en el domicilio "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Accidente del técnico",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Accidente del técnico "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Accidente de un tercero por el técnico",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Accidente de un tercero por el técnico "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Problemas estéticos",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Problemas estéticos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con atención",
    "tipo": "Instalación",
    "motivo": "Invasión de espacios terceros por instalación",
    "descripcion": "",
    "raw": "Problemas con atención Instalación Invasión de espacios terceros por instalación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con servicio",
    "tipo": "Instalación",
    "motivo": "Reprogramación del cliente",
    "descripcion": "",
    "raw": "Problemas con servicio Instalación Reprogramación del cliente "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "INSTALACIONES",
    "medio": "Problemas con servicio",
    "tipo": "Instalación",
    "motivo": "Sin facilidades técnicas",
    "descripcion": "",
    "raw": "Problemas con servicio Instalación Sin facilidades técnicas "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CAMPO",
    "medio": "Problemas con atención",
    "tipo": "Ventas Campo",
    "motivo": "Información errónea sobre el servicio contratado",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Campo Información errónea sobre el servicio contratado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CAMPO",
    "medio": "Problemas con atención",
    "tipo": "Ventas Campo",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Campo Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CAMPO",
    "medio": "Problemas con atención",
    "tipo": "Ventas Campo",
    "motivo": "Solicito datos indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Campo Solicito datos indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CAMPO",
    "medio": "Problemas con atención",
    "tipo": "Ventas Campo",
    "motivo": "Visitas en horarios indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Campo Visitas en horarios indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CALL",
    "medio": "Problemas con atención",
    "tipo": "Ventas Voz",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Voz Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CALL",
    "medio": "Problemas con atención",
    "tipo": "Ventas Voz",
    "motivo": "Información errónea sobre el servicio contratado",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Voz Información errónea sobre el servicio contratado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CALL",
    "medio": "Problemas con atención",
    "tipo": "Ventas Voz",
    "motivo": "No contesta llamada",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Voz No contesta llamada "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CALL",
    "medio": "Problemas con atención",
    "tipo": "Ventas Voz",
    "motivo": "Llamadas constantes",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Voz Llamadas constantes "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS CALL",
    "medio": "Problemas con atención",
    "tipo": "Ventas Voz",
    "motivo": "Llamadas en horarios indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas Voz Llamadas en horarios indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS RRSS",
    "medio": "Problemas con atención",
    "tipo": "Ventas RRSS",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas RRSS Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS RRSS",
    "medio": "Problemas con atención",
    "tipo": "Ventas RRSS",
    "motivo": "Información errónea sobre el servicio contratado",
    "descripcion": "",
    "raw": "Problemas con atención Ventas RRSS Información errónea sobre el servicio contratado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS RRSS",
    "medio": "Problemas con atención",
    "tipo": "Ventas RRSS",
    "motivo": "No contesta mensaje/Cierra conversación",
    "descripcion": "",
    "raw": "Problemas con atención Ventas RRSS No contesta mensaje/Cierra conversación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS RRSS",
    "medio": "Problemas con atención",
    "tipo": "Ventas RRSS",
    "motivo": "Mensajes constantes",
    "descripcion": "",
    "raw": "Problemas con atención Ventas RRSS Mensajes constantes "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VENTAS RRSS",
    "medio": "Problemas con atención",
    "tipo": "Ventas RRSS",
    "motivo": "Mensajes en horarios indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Ventas RRSS Mensajes en horarios indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Información errónea sobre el servicio contratado",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Información errónea sobre el servicio contratado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Maltratos/Insultos",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Maltratos/Insultos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Solicito datos indebidos",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Solicito datos indebidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Agresión física",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Agresión física "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "No brindo solución",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica No brindo solución "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Daños en el domicilio",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Daños en el domicilio "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Accidente del técnico",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Accidente del técnico "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Accidente de un tercero por el técnico",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Accidente de un tercero por el técnico "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Problemas estéticos",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Problemas estéticos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con atención",
    "tipo": "Visita Técnica",
    "motivo": "Invasión de espacios terceros por trabajo",
    "descripcion": "",
    "raw": "Problemas con atención Visita Técnica Invasión de espacios terceros por trabajo "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Problemas con servicio",
    "tipo": "Cambio de plan",
    "motivo": "Upgrade",
    "descripcion": "Upgrade no realiza",
    "raw": "Problemas con servicio Cambio de plan Upgrade Upgrade no realiza"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "PLANES TARIFARIOS",
    "medio": "Problemas con servicio",
    "tipo": "Cambio de plan",
    "motivo": "Downgrade",
    "descripcion": "Downgrade no realizado",
    "raw": "Problemas con servicio Cambio de plan Downgrade Downgrade no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Ajuste por Fidelización",
    "descripcion": "Ajuste no realizado",
    "raw": "Problemas con servicio Facturación Ajuste por Fidelización Ajuste no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Descuento por Fidelización",
    "descripcion": "Descuento no realizado",
    "raw": "Problemas con servicio Facturación Descuento por Fidelización Descuento no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Ajuste por Reclamo Fundado",
    "descripcion": "Ajuste no realizado",
    "raw": "Problemas con servicio Facturación Ajuste por Reclamo Fundado Ajuste no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Descuento por Reclamo Fundado",
    "descripcion": "Descuento no realizado",
    "raw": "Problemas con servicio Facturación Descuento por Reclamo Fundado Descuento no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por error",
    "descripcion": "Error en actualización",
    "raw": "Problemas con servicio Facturación Cambio de Dirección en el recibo por error Error en actualización"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo por traslado",
    "descripcion": "Error en actualización",
    "raw": "Problemas con servicio Facturación Cambio de Dirección en el recibo por traslado Error en actualización"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Cambio de Dirección en el recibo sin solicitudes pendientes",
    "descripcion": "Error en actualización",
    "raw": "Problemas con servicio Facturación Cambio de Dirección en el recibo sin solicitudes pendientes Error en actualización"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Cambio de Titular en el recibo por cesión contractual",
    "descripcion": "Error en actualización",
    "raw": "Problemas con servicio Facturación Cambio de Titular en el recibo por cesión contractual Error en actualización"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Doble Facturación",
    "descripcion": "",
    "raw": "Problemas con servicio Facturación Doble Facturación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Cobros adicionales no reconocidos",
    "descripcion": "",
    "raw": "Problemas con servicio Facturación Cobros adicionales no reconocidos "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Nota de crédito",
    "descripcion": "Nota de crédito no realizado",
    "raw": "Problemas con servicio Facturación Nota de crédito Nota de crédito no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Prorrateo",
    "descripcion": "Error en prorrateo",
    "raw": "Problemas con servicio Facturación Prorrateo Error en prorrateo"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería Masiva",
    "descripcion": "Descuento no realizado",
    "raw": "Problemas con servicio Facturación Descuento por Avería Masiva Descuento no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Descuento por Suspensión Temporal",
    "descripcion": "Descuento no realizado",
    "raw": "Problemas con servicio Facturación Descuento por Suspensión Temporal Descuento no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Descuento por Avería",
    "descripcion": "Descuento no realizado",
    "raw": "Problemas con servicio Facturación Descuento por Avería Descuento no realizado"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Afiliación al débito automático",
    "descripcion": "Error en afiliación a débito automático",
    "raw": "Problemas con servicio Facturación Afiliación al débito automático Error en afiliación a débito automático"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Pago realizado no impacta en sistema-Solicita reconexión",
    "descripcion": "Cliente se comunica e informa que ya pago, pero el pago aún no se ve registrado en CRM Experiencia y el servicio sigue suspendido. Solicitarle al cliente que brinde detalle del comprobante donde se verifique que el pago fue realizado a Perú Fibra.",
    "raw": "Problemas con servicio Facturación Pago realizado no impacta en sistema-Solicita reconexión Cliente se comunica e informa que ya pago, pero el pago aún no se ve registrado en CRM Experiencia y el servicio sigue suspendido. Solicitarle al cliente que brinde detalle del comprobante donde se verifique que el pago fue realizado a Perú Fibra."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "FACTURACIÓN Y COBRANZA",
    "medio": "Problemas con servicio",
    "tipo": "Facturación",
    "motivo": "Pago realizado impactó en sistema-Solicita reconexión",
    "descripcion": "Cliente se comunica e informa que ya pago y este ya se ve registrado en CRM Experiencia. Escalar internamente con tu supervisor.",
    "raw": "Problemas con servicio Facturación Pago realizado impactó en sistema-Solicita reconexión Cliente se comunica e informa que ya pago y este ya se ve registrado en CRM Experiencia. Escalar internamente con tu supervisor."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde - Perdida total-Configuración accediendo al router",
    "descripcion": "Cliente indica que tiene los verde en ONT y tiene perdida total de internet por cable. De acuerdo a los descartes realizados se dio la solución mediante configuración Wan, DNS",
    "raw": "Problemas con servicio Internet con cable LOS verde - Perdida total-Configuración accediendo al router Cliente indica que tiene los verde en ONT y tiene perdida total de internet por cable. De acuerdo a los descartes realizados se dio la solución mediante configuración Wan, DNS"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde - Perdida total-Reinicio de ONT",
    "descripcion": "Cuando el cliente indica que no tiene internet, según los descartes tiene los verde y se resuelve con un reinicio de ont.",
    "raw": "Problemas con servicio Internet con cable LOS verde - Perdida total-Reinicio de ONT Cuando el cliente indica que no tiene internet, según los descartes tiene los verde y se resuelve con un reinicio de ont."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "Sin luces - Perdida total-ONT desenchufada",
    "descripcion": "Cliente menciona que no tiene luz en su router y no tiene conexión a internet. Al realizar descartes el botón de ON/OFF se encuentra apagado o no se encuentra correctamente enchufado al tomacorriente o este (tomacorriente) se encuentra dañado.",
    "raw": "Problemas con servicio Internet con cable Sin luces - Perdida total-ONT desenchufada Cliente menciona que no tiene luz en su router y no tiene conexión a internet. Al realizar descartes el botón de ON/OFF se encuentra apagado o no se encuentra correctamente enchufado al tomacorriente o este (tomacorriente) se encuentra dañado."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde-Lentitud - Intermitencia-Configuración accediendo al router",
    "descripcion": "Cliente indica que tiene lentitud o intermitencia durante la navegación y de acuerdo a los descartes realizados se solucione con la configuración wan, configuración DNS y otras configuraciones dentro del router.",
    "raw": "Problemas con servicio Internet con cable LOS verde-Lentitud - Intermitencia-Configuración accediendo al router Cliente indica que tiene lentitud o intermitencia durante la navegación y de acuerdo a los descartes realizados se solucione con la configuración wan, configuración DNS y otras configuraciones dentro del router."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde-Lentitud - Intermitencia-Descartes físicos",
    "descripcion": "Cliente indica que tiene lentitud o intermitencia durante la navegación y de acuerdo a los descartes realizados se soluciona con descartes físicos del router.",
    "raw": "Problemas con servicio Internet con cable LOS verde-Lentitud - Intermitencia-Descartes físicos Cliente indica que tiene lentitud o intermitencia durante la navegación y de acuerdo a los descartes realizados se soluciona con descartes físicos del router."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde - Ancho de Banda-Configuración accediendo al router",
    "descripcion": "Cliente menciona que tiene una luz verde en su router y no llega el ancho de banda, contratado. Al realizar descartes, se realiza solución con configuración WAN, DNS y configuraciones accediendo al router.",
    "raw": "Problemas con servicio Internet con cable LOS verde - Ancho de Banda-Configuración accediendo al router Cliente menciona que tiene una luz verde en su router y no llega el ancho de banda, contratado. Al realizar descartes, se realiza solución con configuración WAN, DNS y configuraciones accediendo al router."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde - Ancho de Banda-Descartes físicos",
    "descripcion": "Cliente indica que tiene luz verde en su router y no le llega el ancho de banda. De acuerdo a los descartes realizados se brinda solución con los descarte físicos.",
    "raw": "Problemas con servicio Internet con cable LOS verde - Ancho de Banda-Descartes físicos Cliente indica que tiene luz verde en su router y no le llega el ancho de banda. De acuerdo a los descartes realizados se brinda solución con los descarte físicos."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Internet con cable",
    "motivo": "LOS verde - Ancho de Banda-Corregir velocidad de plan",
    "descripcion": "Cliente indica que tiene luz verde, e indique que su ancho de banda no es correcto y se detecte que tiene registrado otro plan distinto al que contrató.",
    "raw": "Problemas con servicio Internet con cable LOS verde - Ancho de Banda-Corregir velocidad de plan Cliente indica que tiene luz verde, e indique que su ancho de banda no es correcto y se detecte que tiene registrado otro plan distinto al que contrató."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad por cable",
    "motivo": "Ningún dispositivo conecta",
    "descripcion": "Cliente menciona que no puede conectar ningun dispositivo de manera cableada",
    "raw": "Problemas con servicio Conectividad por cable Ningún dispositivo conecta Cliente menciona que no puede conectar ningun dispositivo de manera cableada"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad por cable",
    "motivo": "Ciertos dispositivos no conectan",
    "descripcion": "Cliente menciona que algunos dispositivos no puede conectar de manera cableada",
    "raw": "Problemas con servicio Conectividad por cable Ciertos dispositivos no conectan Cliente menciona que algunos dispositivos no puede conectar de manera cableada"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad por cable",
    "motivo": "Lentitud",
    "descripcion": "Cliente indica que tiene lentitud",
    "raw": "Problemas con servicio Conectividad por cable Lentitud Cliente indica que tiene lentitud"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad por cable",
    "motivo": "Desconexiones aleatorias",
    "descripcion": "",
    "raw": "Problemas con servicio Conectividad por cable Desconexiones aleatorias "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Ciertos dispositivos no conectan",
    "descripcion": "Cliente menciona que algunos dispositivos no puede conectar por WiFi",
    "raw": "Problemas con servicio Conectividad WiFi Ciertos dispositivos no conectan Cliente menciona que algunos dispositivos no puede conectar por WiFi"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Ningún dispositivo conecta",
    "descripcion": "Cliente menciona que no puede conectar ningun dispositivo por WiFi",
    "raw": "Problemas con servicio Conectividad WiFi Ningún dispositivo conecta Cliente menciona que no puede conectar ningun dispositivo por WiFi"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "No aparece ninguna red",
    "descripcion": "Cliente menciona que no aparece Red WiFi",
    "raw": "Problemas con servicio Conectividad WiFi No aparece ninguna red Cliente menciona que no aparece Red WiFi"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "No aparece red - 2.4 Ghz",
    "descripcion": "Cliente menciona que no aparece Red WiFi 2.4Ghz",
    "raw": "Problemas con servicio Conectividad WiFi No aparece red - 2.4 Ghz Cliente menciona que no aparece Red WiFi 2.4Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "No aparece red - 5.0 Ghz",
    "descripcion": "Cliente menciona que no aparece Red WiFi 5.0Ghz",
    "raw": "Problemas con servicio Conectividad WiFi No aparece red - 5.0 Ghz Cliente menciona que no aparece Red WiFi 5.0Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Lentitud en horas puntuales - 2.4 Ghz",
    "descripcion": "Cliente menciona que hay lentitud en horas puntuales - 2.4 Ghz",
    "raw": "Problemas con servicio Conectividad WiFi Lentitud en horas puntuales - 2.4 Ghz Cliente menciona que hay lentitud en horas puntuales - 2.4 Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Lentitud en horas puntuales - 5.0 Ghz",
    "descripcion": "Cliente menciona que hay lentitud en horas puntuales - 5.0 Ghz",
    "raw": "Problemas con servicio Conectividad WiFi Lentitud en horas puntuales - 5.0 Ghz Cliente menciona que hay lentitud en horas puntuales - 5.0 Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Lentitud todo el tiempo - 2.4 Ghz",
    "descripcion": "Cliente menciona que hay lentitud con Red 2.4 Ghz",
    "raw": "Problemas con servicio Conectividad WiFi Lentitud todo el tiempo - 2.4 Ghz Cliente menciona que hay lentitud con Red 2.4 Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Lentitud todo el tiempo - 5.0 Ghz",
    "descripcion": "Cliente menciona que hay lentitud con Red 5.0 Ghz",
    "raw": "Problemas con servicio Conectividad WiFi Lentitud todo el tiempo - 5.0 Ghz Cliente menciona que hay lentitud con Red 5.0 Ghz"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Alcance - 2.4 Ghz",
    "descripcion": "",
    "raw": "Problemas con servicio Conectividad WiFi Alcance - 2.4 Ghz "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Conectividad WiFi",
    "motivo": "Alcance - 5.0 Ghz",
    "descripcion": "",
    "raw": "Problemas con servicio Conectividad WiFi Alcance - 5.0 Ghz "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Sin conexión",
    "motivo": "Masivo",
    "descripcion": "Cliente menciona que no cuenta con servicicio de internet y se valida que es falla masiva",
    "raw": "Problemas con servicio Sin conexión Masivo Cliente menciona que no cuenta con servicicio de internet y se valida que es falla masiva"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Sin conexión",
    "motivo": "LOS rojo en ONT",
    "descripcion": "Cliente menciona que no cuenta con servicicio de internet Luz Rojo en Router",
    "raw": "Problemas con servicio Sin conexión LOS rojo en ONT Cliente menciona que no cuenta con servicicio de internet Luz Rojo en Router"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Sin conexión",
    "motivo": "Rotura de Fibra dentro del domicilio",
    "descripcion": "Cliente menciona que no cuenta con servicicio de internet rotura Fibra dentro del domicilio",
    "raw": "Problemas con servicio Sin conexión Rotura de Fibra dentro del domicilio Cliente menciona que no cuenta con servicicio de internet rotura Fibra dentro del domicilio"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Sin conexión",
    "motivo": "Rotura de Fibra fuera del domicilio",
    "descripcion": "Cliente menciona que no cuenta con servicicio de internet rotura Fibra fuera del domicilio",
    "raw": "Problemas con servicio Sin conexión Rotura de Fibra fuera del domicilio Cliente menciona que no cuenta con servicicio de internet rotura Fibra fuera del domicilio"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "ONT",
    "motivo": "No enciende",
    "descripcion": "Cliente se comunica e indica que no enciende Router",
    "raw": "Problemas con servicio ONT No enciende Cliente se comunica e indica que no enciende Router"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "ONT",
    "motivo": "No funciona puerto trasero",
    "descripcion": "Cliente se comunica e indica que no funciona los puertos",
    "raw": "Problemas con servicio ONT No funciona puerto trasero Cliente se comunica e indica que no funciona los puertos"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "ONT",
    "motivo": "Luces no funcionan",
    "descripcion": "Cliente se comunica e indica que no enciende ninguna luz del Router",
    "raw": "Problemas con servicio ONT Luces no funcionan Cliente se comunica e indica que no enciende ninguna luz del Router"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "ONT",
    "motivo": "Enchufe dañado",
    "descripcion": "Cliente se comunica e indica que el enchufe esta dañado o no conecta",
    "raw": "Problemas con servicio ONT Enchufe dañado Cliente se comunica e indica que el enchufe esta dañado o no conecta"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Pagina web/Juegos",
    "motivo": "No ingresa a una página puntual",
    "descripcion": "",
    "raw": "Problemas con servicio Pagina web/Juegos No ingresa a una página puntual "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Pagina web/Juegos",
    "motivo": "No carga un juego instalado",
    "descripcion": "",
    "raw": "Problemas con servicio Pagina web/Juegos No carga un juego instalado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ATENCIÓN TECNOLÓGICA",
    "medio": "Problemas con servicio",
    "tipo": "Pagina web/Juegos",
    "motivo": "No funciona VPN",
    "descripcion": "",
    "raw": "Problemas con servicio Pagina web/Juegos No funciona VPN "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Visita Técnica-Estado de VT fuera de plazo",
    "descripcion": "Cuando cliente, se comunica y reporta que ya paso el tiempo de la programación de la visita técnica",
    "raw": "Problemas con servicio Visita Técnica Visita Técnica-Estado de VT fuera de plazo Cuando cliente, se comunica y reporta que ya paso el tiempo de la programación de la visita técnica"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Visita Técnica-Estado de VT fuera de plazo Planta externa",
    "descripcion": "Cliente informa que tiene un ticket de atención visita técnica (derivado a planta externa) y se encuentra fuera de plazo de atención.",
    "raw": "Problemas con servicio Visita Técnica Visita Técnica-Estado de VT fuera de plazo Planta externa Cliente informa que tiene un ticket de atención visita técnica (derivado a planta externa) y se encuentra fuera de plazo de atención."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Traslado",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Traslado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Reubicación de ONT",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Reubicación de ONT "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Cambio de Patchcord",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Cambio de Patchcord "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Cambio de Ont",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Cambio de Ont "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Recableado",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Recableado "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "VISITA TÉCNICA",
    "medio": "Problemas con servicio",
    "tipo": "Visita Técnica",
    "motivo": "Reinstalación",
    "descripcion": "",
    "raw": "Problemas con servicio Visita Técnica Reinstalación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "RECLAMOS",
    "medio": "Problemas con servicio",
    "tipo": "Reclamo",
    "motivo": "Primera Instancia",
    "descripcion": "",
    "raw": "Problemas con servicio Reclamo Primera Instancia "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "RECLAMOS",
    "medio": "Problemas con servicio",
    "tipo": "Reclamo",
    "motivo": "Apelación",
    "descripcion": "",
    "raw": "Problemas con servicio Reclamo Apelación "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de titularidad - A Persona Natural",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Cambio de titularidad - A Persona Natural "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de titularidad - A Persona Jurídica",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Cambio de titularidad - A Persona Jurídica "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Número de teléfono",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Número de teléfono "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Correo electrónico",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Correo electrónico "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de contraseña WiFi",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Cambio de contraseña WiFi "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Cambio de nombre de red WiFi",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Cambio de nombre de red WiFi "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "ACTUALIZACIÓN DE DATOS",
    "medio": "Problemas con servicio",
    "tipo": "Actualización de datos",
    "motivo": "Dirección",
    "descripcion": "",
    "raw": "Problemas con servicio Actualización de datos Dirección "
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso-Capacidad de memoria",
    "descripcion": "Cliente no puede acceder o utilizar WIN TV debido a que el dispositivo no cuenta con memoria o almacenamiento suficiente.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso-Capacidad de memoria Cliente no puede acceder o utilizar WIN TV debido a que el dispositivo no cuenta con memoria o almacenamiento suficiente."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso-Como configurar TV",
    "descripcion": "Cliente requiere orientación para configurar su Smart TV y acceder correctamente a WIN TV.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso-Como configurar TV Cliente requiere orientación para configurar su Smart TV y acceder correctamente a WIN TV."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso-Otros dispositivos",
    "descripcion": "Cliente presenta inconvenientes para acceder a WIN TV desde otros dispositivos",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso-Otros dispositivos Cliente presenta inconvenientes para acceder a WIN TV desde otros dispositivos"
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "TV no compatible",
    "descripcion": "Cliente consulta o reporta que su televisor no es compatible con la aplicación WIN TV.",
    "raw": "Problemas con servicio WIN TV Premium TV no compatible Cliente consulta o reporta que su televisor no es compatible con la aplicación WIN TV."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso - Portal Win-Clave incorrecta",
    "descripcion": "Cliente no puede iniciar sesión debido a que la contraseña ingresada es incorrecta.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso - Portal Win-Clave incorrecta Cliente no puede iniciar sesión debido a que la contraseña ingresada es incorrecta."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso - Portal Win-No registrado",
    "descripcion": "Cliente no puede acceder porque el sistema indica que su usuario o correo no se encuentra registrado en WIN TV.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso - Portal Win-No registrado Cliente no puede acceder porque el sistema indica que su usuario o correo no se encuentra registrado en WIN TV."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso - Portal Win-No recibió usuario y contraseña",
    "descripcion": "Cliente informa que no recibió el correo con las credenciales necesarias para acceder a WIN TV.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso - Portal Win-No recibió usuario y contraseña Cliente informa que no recibió el correo con las credenciales necesarias para acceder a WIN TV."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Celular no compatible-Información comercial",
    "descripcion": "Cliente reporta incompatibilidad del equipo.",
    "raw": "Problemas con servicio WIN TV Premium Celular no compatible-Información comercial Cliente reporta incompatibilidad del equipo."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Límite de dispositivos-Información comercial",
    "descripcion": "Cliente reporta haber alcanzado el número máximo de dispositivos permitidos para utilizar WIN TV.",
    "raw": "Problemas con servicio WIN TV Premium Límite de dispositivos-Información comercial Cliente reporta haber alcanzado el número máximo de dispositivos permitidos para utilizar WIN TV."
  },
  {
    "grupo": "PROBLEMAS",
    "categoria": "WIN TV PREMIUM",
    "medio": "Problemas con servicio",
    "tipo": "WIN TV Premium",
    "motivo": "Sin acceso-WIN TV contratado",
    "descripcion": "Cliente cuenta con el servicio o beneficio de WIN TV, pero no puede acceder o aprovisionamiento del servicio.",
    "raw": "Problemas con servicio WIN TV Premium Sin acceso-WIN TV contratado Cliente cuenta con el servicio o beneficio de WIN TV, pero no puede acceder o aprovisionamiento del servicio."
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "BANTEL",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia BANTEL "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "BITEL",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia BITEL "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "CLARO",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia CLARO "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "DIRECTV",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia DIRECTV "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "ENTEL",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia ENTEL "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "FIBERPRO",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia FIBERPRO "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "MI FIBRA",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia MI FIBRA "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "MOVISTAR",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia MOVISTAR "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "NIUBIX",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia NIUBIX "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "WOW",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia WOW "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "No menciona/Otra Empresa",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia No menciona/Otra Empresa "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "Win Negocios/Empresas",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia Win Negocios/Empresas "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Competencia",
    "motivo": "Igualar Oferta",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Competencia Igualar Oferta "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Motivos Economicos",
    "motivo": "No puede pagar el total del recibo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Motivos Economicos No puede pagar el total del recibo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Motivos Economicos",
    "motivo": "Solicitud de prorroga de pago",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Motivos Economicos Solicitud de prorroga de pago "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Motivos Economicos",
    "motivo": "Se quedo sin trabajo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Motivos Economicos Se quedo sin trabajo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Motivos Economicos",
    "motivo": "Cliente en desacuerdo con el costo del plan",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Motivos Economicos Cliente en desacuerdo con el costo del plan "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Motivos Economicos",
    "motivo": "Renovación del beneficio",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Motivos Economicos Renovación del beneficio "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "No reconoce el monto",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación No reconoce el monto "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "Error en el cargo Fijo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación Error en el cargo Fijo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "Se facturo estando suspendido el servicio",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación Se facturo estando suspendido el servicio "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "No reconoce cargos por servicios solicitados",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación No reconoce cargos por servicios solicitados "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "Ajuste/Descuento/Devolución no realizado",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación Ajuste/Descuento/Devolución no realizado "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "No envió de recibo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación No envió de recibo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "Cobro de prorrateo/cuota de instalación",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación Cobro de prorrateo/cuota de instalación "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Facturación",
    "motivo": "Demora en emisión de recibo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Facturación Demora en emisión de recibo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Incumplimiento Perú Fibra",
    "motivo": "Gestión de instalaciones",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Incumplimiento Perú Fibra Gestión de instalaciones "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Incumplimiento Perú Fibra",
    "motivo": "Gestión Ventas",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Incumplimiento Perú Fibra Gestión Ventas "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Incumplimiento Perú Fibra",
    "motivo": "Gestión ATC",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Incumplimiento Perú Fibra Gestión ATC "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Incumplimiento Perú Fibra",
    "motivo": "Gestión Fidelización",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Incumplimiento Perú Fibra Gestión Fidelización "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Viaje al extranjero Indefinido",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Viaje al extranjero Indefinido "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Viaje dentro del País-sin cobertura",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Viaje dentro del País-sin cobertura "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Viaje dentro del País-con cobertura",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Viaje dentro del País-con cobertura "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Mudanza-sin Cobertura",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Mudanza-sin Cobertura "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Mudanza-con Cobertura",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Mudanza-con Cobertura "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Mudanza-sin facilidades técnicas",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Mudanza-sin facilidades técnicas "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Mudanza Viaje",
    "motivo": "Mudanza-Ya cuenta con Perú Fibra",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Mudanza Viaje Mudanza-Ya cuenta con Perú Fibra "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Negociación Interrumpida",
    "motivo": "Cliente Corta llamada",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Negociación Interrumpida Cliente Corta llamada "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Problemas de Salud",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Problemas de Salud "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Problemas Familiares",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Problemas Familiares "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Problemas personales sin dar detalle",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Problemas personales sin dar detalle "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Regreso Trabajo Presencial",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Regreso Trabajo Presencial "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Incendio/Desastre natural",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Incendio/Desastre natural "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas personales",
    "motivo": "Robo",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas personales Robo "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Lentitud de señal",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Lentitud de señal "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Insatisfecho con la velocidad",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Insatisfecho con la velocidad "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Intermitencia en la señal",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Intermitencia en la señal "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Pérdida total del servicio",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Pérdida total del servicio "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "No llega ancho de banda",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio No llega ancho de banda "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Problemas de Wifi",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Problemas de Wifi "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Problemas con Juegos/ Latencia",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Problemas con Juegos/ Latencia "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Sin acceso a páginas /Aplicaciones externas",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Sin acceso a páginas /Aplicaciones externas "
  },
  {
    "grupo": "RETENCIÓN ATC",
    "categoria": "RETENIDOS",
    "medio": "Cancelación de servicio -Retenido",
    "tipo": "Informativo-Problemas con servicio",
    "motivo": "Reincidencia en problema técnico",
    "descripcion": "",
    "raw": "Cancelación de servicio -Retenido Informativo-Problemas con servicio Reincidencia en problema técnico "
  }
];