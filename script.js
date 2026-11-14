
  // Rejilla corporativa: 3 filas × 11 círculos (33).
  document.querySelectorAll('[data-dots]').forEach(function (el) {
    var html = '';
    for (var i = 0; i < 33; i++) html += '<i></i>';
    el.innerHTML = html;
  });

  // Copiar el tarifario en texto plano, listo para pegar en WhatsApp.
  var TARIFA_TXT = [
    'BUEN FIN AMMJE — 30% DE DESCUENTO',
    'Dale forma al siguiente paso de tu negocio con diseño, web y estrategia.',
    '',
    'SERVICIOS (precios con descuento):',
    '• Logo IA — $210 (base $300)',
    '• Logo profesional, 1 propuesta — $840 (base $1,200)',
    '• Logo profesional, 3 propuestas — $2,100 (base $3,000)',
    '• Plantilla para redes sociales — $2,100 (base $3,000)',
    '• Landing page — $3,500 (base $5,000)',
    '• Manual de identidad de marca — $4,900 (base $7,000)',
    '• Sesión de diagnóstico y orientación express (2 h) — $2,310 (base $3,300)',
    '',
    'PAQUETES PARA CADA ETAPA:',
    '• EMPRENDEDORA — desde $4,620 con plantilla / $6,020 con landing',
    '• EMPRESARIA — desde $6,510 con plantilla / $7,910 con landing',
    '• VISIONARIA — $9,310 (web aparte, a cotizar)',
    '• DIAGNÓSTICO EXPRESS — $2,310',
    '',
    'Precios en MXN. Cada proyecto comienza con un briefing incluido.',
    '¿Te ayudo a elegir? Escríbeme por WhatsApp: 871 197 3093'
  ].join('\n');

  var copyBtn = document.getElementById('copyBtn');
  var toast = document.getElementById('copyToast');
  var toastTimer = null;
  copyBtn.addEventListener('click', function () {
    function done() {
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(TARIFA_TXT).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = TARIFA_TXT;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* sin portapapeles */ }
      document.body.removeChild(ta);
    }
  });
