"use strict";var x=Object.create;var f=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var z=(r,m)=>{for(var i in m)f(r,i,{get:m[i],enumerable:!0})},e=(r,m,i,p)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of j(m))!v.call(r,t)&&t!==i&&f(r,t,{get:()=>m[t],enumerable:!(p=_(m,t))||p.enumerable});return r};var o=(r,m,i)=>(i=r!=null?x(q(r)):{},e(m||!r||!r.__esModule?f(i,"default",{value:r,enumerable:!0}):i,r)),B=r=>e(f({},"__esModule",{value:!0}),r);var F={};z(F,{default:()=>E});module.exports=B(F);var n=o(require("./bear")),a=o(require("./bird")),c=o(require("./cat")),l=o(require("./cetacean")),d=o(require("./cow")),s=o(require("./crocodilia")),b=o(require("./dog")),y=o(require("./fish")),h=o(require("./horse")),A=o(require("./insect")),D=o(require("./lion")),g=o(require("./rabbit")),k=o(require("./rodent")),u=o(require("./snake")),w=o(require("./type"));const C={bear:n.default,bird:a.default,cat:c.default,cetacean:l.default,cow:d.default,crocodilia:s.default,dog:b.default,fish:y.default,horse:h.default,insect:A.default,lion:D.default,rabbit:g.default,rodent:k.default,snake:u.default,type:w.default};var E=C;
