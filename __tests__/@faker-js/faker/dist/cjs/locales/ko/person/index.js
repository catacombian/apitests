"use strict";var l=Object.create;var e=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var u=(o,r)=>{for(var t in r)e(o,t,{get:r[t],enumerable:!0})},a=(o,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of P(r))!d.call(o,m)&&m!==t&&e(o,m,{get:()=>r[m],enumerable:!(i=D(r,m))||i.enumerable});return o};var n=(o,r,t)=>(t=o!=null?l(c(o)):{},a(r||!o||!o.__esModule?e(t,"default",{value:o,enumerable:!0}):t,o)),x=o=>a(e({},"__esModule",{value:!0}),o);var g={};u(g,{default:()=>b});module.exports=x(g);var f=n(require("./first_name")),p=n(require("./last_name")),s=n(require("./last_name_pattern")),_=n(require("./name"));const y={first_name:f.default,last_name:p.default,last_name_pattern:s.default,name:_.default};var b=y;
