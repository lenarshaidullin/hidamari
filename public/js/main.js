/**
 * Плавная прокрутка к якорям
 */
document.querySelectorAll('.scroll-to').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = button.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

/**
 * Замена кавычек "" на «ёлочки»
 */
(function replaceQuotes() {
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replace(/"([^"]*)"/g, '«$1»');
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.nodeName.toUpperCase();
      if (tagName !== 'SCRIPT' && tagName !== 'STYLE') {
        node.childNodes.forEach(processNode);
      }
    }
  }

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
  const excludedSelectors = ['.header', '.main-nav', '.footer'];

  function isExcluded(node) {
    return excludedSelectors.some((selector) => node.closest(selector));
  }

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentNode;
    if (parent.nodeType !== Node.ELEMENT_NODE || isExcluded(parent)) {
      continue;
    }

    node.nodeValue = node.nodeValue.replace(
      /\s+(и|в|на|с|по|для|к|от|за|без|при|о|об|а|«На|«на)\s+/g,
      ' $1\u00A0'
    );
  }
})();