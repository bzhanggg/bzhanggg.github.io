import{a as d,t as v}from"../chunks/disclose-version.DhJcBbSb.js";import"../chunks/legacy.pnYrkDS7.js";import{B as h,v as f,t as $,w as x,C as u,z as _,D as k,F as y,G as j,I as w,J as z,K as B,M as C,i as l,k as g,j as D}from"../chunks/runtime.CZaAnAre.js";import{s as m}from"../chunks/render.B2k3ebg6.js";import{s as E,a as F}from"../chunks/store.BGcZtv3e.js";import{s as G}from"../chunks/entry.z6yb6Ruj.js";function I(s=!1){const t=$,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const c=j(()=>{let i=!1;const p=t.s;for(const o in p)p[o]!==r[o]&&(r[o]=p[o],i=!0);return i&&a++,a});n=()=>_(c)}e.b.length&&h(()=>{b(t,n),u(e.b)}),f(()=>{const a=x(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{b(t,n),u(e.a)})}function b(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const J=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},K={subscribe(s){return J().page.subscribe(s)}};var M=v("<h1> </h1> <p> </p>",1);function O(s,t){w(t,!1);const e=E(),n=()=>F(K,"$page",e);I();var a=M(),r=z(a),c=l(r,!0);g(r);var i=D(r,2),p=l(i,!0);g(i),B(()=>{var o;m(c,n().status),m(p,(o=n().error)==null?void 0:o.message)}),d(s,a),C()}export{O as component};