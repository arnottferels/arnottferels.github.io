import{S as e,P as o,K,k as i,l as n}from"./const.mjs";const l=(a,s)=>a.key===s,E=(a,s)=>(a.ctrlKey||a.metaKey)&&a.key===s,a=(a,s)=>l(a,s),c=(a,s)=>s.some((s=>E(a,s))),y=a=>c(a,[e,o]),S=a=>c(a,[e]),d=a=>c(a,[K]),h=s=>a(s,i),Y=s=>a(s,n);export{y as a,d as b,h as c,Y as d,S as i};