import{O as b,P as E,Q as V,R as N,t as Y,S as H,T as P,U as $,V as m,W as q,X as B,Y as C,Z as S,f as w,e as A,c as j,g as p,_ as Q,$ as U,a0 as X,a1 as Z,a2 as z,a3 as F,a4 as G,a as J,I as K,h as R,M as x,l as tt}from"./runtime.Cfq028uL.js";import{b as rt}from"./disclose-version.DhQHp3FM.js";function et(t){var r=V,a=N;b(null),E(null);try{return t()}finally{b(r),E(a)}}const at=new Set,D=new Set;function nt(t,r,a,o){function s(e){if(o.capture||y.call(r,e),!e.cancelBubble)return et(()=>a.call(this,e))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?H(()=>{r.addEventListener(t,s,o)}):r.addEventListener(t,s,o),s}function lt(t,r,a,o,s){var e={capture:o,passive:s},u=nt(t,r,a,e);(r===document.body||r===window||r===document)&&Y(()=>{r.removeEventListener(t,u,e)})}function y(t){var O;var r=this,a=r.ownerDocument,o=t.type,s=((O=t.composedPath)==null?void 0:O.call(t))||[],e=s[0]||t.target,u=0,h=t.__root;if(h){var c=s.indexOf(h);if(c!==-1&&(r===document||r===window)){t.__root=r;return}var d=s.indexOf(r);if(d===-1)return;c<=d&&(u=c)}if(e=s[u]||t.target,e!==r){P(t,"currentTarget",{configurable:!0,get(){return e||a}});var T=V,f=N;b(null),E(null);try{for(var n,i=[];e!==null;){var l=e.assignedSlot||e.parentNode||e.host||null;try{var _=e["__"+o];if(_!==void 0&&!e.disabled)if($(_)){var[M,...W]=_;M.apply(e,[t,...W])}else _.call(e,t)}catch(g){n?i.push(g):n=g}if(t.cancelBubble||l===r||l===null)break;e=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{t.__root=r,delete t.currentTarget,b(T),E(f)}}}const st=["touchstart","touchmove"];function it(t){return st.includes(t)}let I=!0;function ct(t,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function ot(t,r){return k(t,r)}function dt(t,r){m(),r.intro=r.intro??!1;const a=r.target,o=R,s=p;try{for(var e=q(a);e&&(e.nodeType!==8||e.data!==B);)e=C(e);if(!e)throw S;w(!0),A(e),j();const u=k(t,{...r,anchor:e});if(p===null||p.nodeType!==8||p.data!==Q)throw U(),S;return w(!1),u}catch(u){if(u===S)return r.recover===!1&&X(),m(),Z(a),w(!1),ot(t,r);throw u}finally{w(o),A(s)}}const v=new Map;function k(t,{target:r,anchor:a,props:o={},events:s,context:e,intro:u=!0}){m();var h=new Set,c=f=>{for(var n=0;n<f.length;n++){var i=f[n];if(!h.has(i)){h.add(i);var l=it(i);r.addEventListener(i,y,{passive:l});var _=v.get(i);_===void 0?(document.addEventListener(i,y,{passive:l}),v.set(i,1)):v.set(i,_+1)}}};c(z(at)),D.add(c);var d=void 0,T=F(()=>{var f=a??r.appendChild(G());return J(()=>{if(e){K({});var n=tt;n.c=e}s&&(o.$$events=s),R&&rt(f,null),I=u,d=t(f,o)||{},I=!0,R&&(N.nodes_end=p),e&&x()}),()=>{var l;for(var n of h){r.removeEventListener(n,y);var i=v.get(n);--i===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,i)}D.delete(c),L.delete(d),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return L.set(d,T),d}let L=new WeakMap;function _t(t){const r=L.get(t);r&&r()}export{I as a,lt as e,dt as h,ot as m,ct as s,_t as u};
