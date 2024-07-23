import { F as o } from './hoisted.DtA5ocgQ.js';
import './index.CTbVEFV3.js';
document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('hello');
  let t = 0;
  const n = () => {
    if (e) {
      const { text: l, latin: r, transliteration: i } = o[t];
      r
        ? (e.innerText = l)
        : (e.innerHTML = `${l} <div class="transliteration">(${i})</div>`),
        (t = (t + 1) % o.length);
    } else console.error('Hello element not found');
  };
  n(), setInterval(n, 2e3);
});
