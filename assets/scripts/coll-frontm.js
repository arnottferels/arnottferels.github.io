import{a1 as o,y as a,a2 as e}from"./const.mjs";import"./events.mjs";const n=a=>document.querySelectorAll(e).forEach((e=>e.open=a===o)),r=()=>[o,a].forEach((o=>window.addEventListener(o,(()=>n(o)))));r();