import{E as o,Y as a,Z as l,_ as r,$ as E,a0 as i,a as c}from"./const.mjs";import"./events.mjs";const s=()=>{const e=document.querySelector(`[${a}=${l}]`),t=document.getElementById(r.toLowerCase()),s=e?.querySelector("ul");s&&(s.style.display="none",t.style.cursor="pointer",t.style.userSelect="none",t?.addEventListener(E,(()=>{t.style.textDecoration="underline var(--color-fg-main) 1px"})),t?.addEventListener(i,(()=>{t.style.textDecoration=""})),t?.addEventListener(c,(()=>{"none"===s.style.display?s.style.display="block":s.style.display="none"})))},d=()=>{s(),o.forEach((e=>document.addEventListener(e,s)))};d();