import { F as i } from './hoisted.C3sIn2jF.js';
import './index.CTbVEFV3.js';
document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('greeting');
  let t = 0;
  const n = () => {
    if (e) {
      const { text: r, latin: o, transliteration: l } = i[t];
      o
        ? (e.innerText = r)
        : (e.innerHTML = `${r} <div class="transliteration">(${l})</div>`),
        (t = (t + 1) % i.length);
    } else console.error('Greeting element not found');
  };
  n(), setInterval(n, 2e3);
});
