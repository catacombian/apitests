"use strict";var c=Object.create;var e=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var j=(o,r)=>{for(var i in r)e(o,i,{get:r[i],enumerable:!0})},f=(o,r,i,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!W.call(o,t)&&t!==i&&e(o,t,{get:()=>r[t],enumerable:!(p=s(r,t))||p.enumerable});return o};var m=(o,r,i)=>(i=o!=null?c(D(o)):{},f(r||!o||!o.__esModule?e(i,"default",{value:o,enumerable:!0}):i,o)),l=o=>f(e({},"__esModule",{value:!0}),o);var y={};j(y,{default:()=>x});module.exports=l(y);var n=m(require("./adjective")),d=m(require("./adverb")),a=m(require("./noun")),v=m(require("./preposition")),b=m(require("./verb"));const w={adjective:n.default,adverb:d.default,noun:a.default,preposition:v.default,verb:b.default};var x=w;
