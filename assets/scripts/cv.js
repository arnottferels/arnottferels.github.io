import{E as T,a2 as d,a3 as L,a4 as S,c as m,a5 as s,v as w,y as g,a6 as h,a7 as v,a8 as P,a9 as R}from"./const.mjs";import{M as p}from"./media.mjs";import{i as l,a as M}from"./key.mjs";import"./events.mjs";const C=e=>{const t=`#${e}`,n=new URLSearchParams(window.location.search);if(window.location.hash===t&&"open"===n.get(d)){const e=document.querySelector(`${t} ${d}`);e&&(e.open=!0)}},a=()=>{const e=window.location.hash.slice(1);e&&C(e)},N=()=>{T.forEach((e=>document.addEventListener(e,a))),new MutationObserver(a).observe(document.body,{childList:!0,subtree:!0}),a()};N();const E="data-cv-original-date",i=(e,t)=>(void 0!==t&&e.setAttribute(E,t),e.getAttribute(E)),H=e=>e.innerHTML.replace(/(\w{3} \d{4}|\d{4}) - (\w{3} \d{4}|\d{4}|Present)/g,((e,t,n)=>{const s=/^\w{3} \d{4}$/;if(s.test(t)&&s.test(n)){const[e,s]=t.split(" "),[o,a]=n.split(" ");return s===a?`${e} - ${o} ${s}`:`${t} - <br/>${n}`}return e})),f=e=>document.querySelectorAll(`.${S}`).forEach(e),$=()=>{f((e=>{i(e)||i(e,e.innerHTML);const t=H(e);e.innerHTML=t}))},I=()=>{f((e=>{const t=i(e);t&&(e.innerHTML=t)}))},V=window.matchMedia(p),D=()=>V.addEventListener(L,(e=>e.matches?$():I()));D();const O=()=>{const e=window.location.pathname,t=v.has(e),n=Array.from(P).some((t=>e.startsWith(t)));return t||n},U=()=>{O()&&(window.addEventListener(m,(e=>{l(e)&&(e.preventDefault(),window.print())})),sessionStorage.getItem(s)===s&&(window.addEventListener(w,(e=>{e.preventDefault(),window.print()})),window.addEventListener(g,(()=>{sessionStorage.removeItem(s),location.href=h}))))};U();const b=e=>{window.location.pathname===h&&(l(e)||M(e))&&(e.preventDefault(),sessionStorage.setItem(s,s),window.location.href=R)},Y=()=>{sessionStorage.removeItem(s)},y=()=>{window.addEventListener(m,b),window.addEventListener(w,Y)};y();