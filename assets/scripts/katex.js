import{E as o}from"./const.mjs";import"./events.mjs";const r=(e,t)=>{const o=window.getComputedStyle(e,"::after").getPropertyValue("content").replace(/"/g,"");return new RegExp("\\d+").exec(o)?.[0]||(t+1).toString()},c=document.querySelectorAll(".katex-display"),i=()=>c.forEach(((e,t)=>e.id=`eq${r(e,t)}`)),a=()=>o.forEach((e=>document.addEventListener(e,i)));a();