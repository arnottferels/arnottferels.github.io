import './hoisted.DtA5ocgQ.js';
import './index.CTbVEFV3.js';
const e = {
  init: function () {
    new PagefindUI({
      element: '#searchContainer',
      debounceTimeoutMs: 500,
      resetStyles: !1,
      showEmptyFilters: !1,
      excerptLength: 10,
      showImages: !0,
      showSubResults: !1,
      autofocus: !0,
    });
  },
};
e.init();
document.addEventListener('astro:after-swap', e.init);
