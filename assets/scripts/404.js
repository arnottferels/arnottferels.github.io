import"./theme.js";import{E as o,a as n,D as e,b as i}from"./const.mjs";import"./events.mjs";const r=()=>{if(window.history.length<=1){const o=document.querySelector(`[${e}=${i}]`);o&&(o.style.display="none")}},s=()=>{o.forEach((e=>document.addEventListener(e,r))),window.addEventListener(n,window.history.back)};s();