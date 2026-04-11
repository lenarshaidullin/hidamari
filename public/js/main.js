
/**
 * Плавная прокрутка к якорям
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-to').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(btn.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

/**
 * Замена кавычек "" на «ёлочки»
 */
(function replaceQuotes() {
  const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replace(/"([^"]*)"/g, '«$1»');
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE'].includes(node.nodeName)) {
      node.childNodes.forEach(processNode);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => processNode(document.body));
  } else {
    processNode(document.body);
  }
})();

/**
 * Неразрывные пробелы для «висячих» предлогов
 * Исключает: .header, .main-nav, .footer
 */
(function addNonBreakingSpaces() {
  const excluded = ['.header', '.main-nav', '.footer'];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentNode;
    if (parent.nodeType === Node.ELEMENT_NODE && !excluded.some((s) => parent.closest(s))) {
      node.nodeValue = node.nodeValue.replace(/\s+(и|в|на|с|по|для|к|от|за|без|при|о|об|а|«На|«на)\s+/g, ' $1\u00A0');
    }
  }
})();

/**
 * Выравнивание ширины кнопок по самой широкой
 * Применяется к контейнерам с классом .buttons-wrapper--ew
 */
(function equalizeButtonWidths() {
  const equalize = () => {
    document.querySelectorAll('.buttons-wrapper--ew').forEach((wrap) => {
      const btns = wrap.querySelectorAll('.button');
      if (!btns.length) return;
      btns.forEach((b) => {
        b.style.width = '';
        b.style.justifyContent = 'center';
      });
      const maxW = Math.ceil(Math.max(...[...btns].map((b) => b.getBoundingClientRect().width)));
      btns.forEach((b) => (b.style.width = `${maxW}px`));
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', equalize);
  } else {
    equalize();
  }
  window.addEventListener('resize', equalize);
})();