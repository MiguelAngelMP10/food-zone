function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=s(n,e,o,c);t.p(r,a)}}let l,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;o[s]=e[t]+1;const i=t+1;e[i]=s,r=Math.max(i,r)}const i=[],c=[];let a=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(i.push(n[s-1]);a>=s;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,u=0;s<c.length;s++){for(;u<i.length&&c[s].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){f&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function E(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):_(n)))}function A(t,n){return v(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>g(n)),!0)}function k(t){return A(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}function T(t){l=t}function B(){if(!l)throw new Error("Function called outside component initialization");return l}function C(t){B().$$.on_mount.push(t)}function O(t){B().$$.after_update.push(t)}function q(t,n){B().$$.context.set(t,n)}const I=[],L=[],M=[],z=[],F=Promise.resolve();let P=!1;function D(t){M.push(t)}let G=!1;const H=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];T(n),K(n.$$)}for(T(null),I.length=0;L.length;)L.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];H.has(n)||(H.add(n),n())}M.length=0}while(I.length);for(;z.length;)z.pop()();P=!1,G=!1,H.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Y="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Z(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function tt(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function et(t,n){t&&t.l(n)}function ot(t,n,o,c){const{fragment:a,on_mount:s,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,o),c||D((()=>{const n=s.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(D)}function rt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){-1===t.$$.dirty[0]&&(I.push(t),P||(P=!0,F.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,i,c,a,s,u=[-1]){const d=l;T(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&it(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){f=!0;const t=w(e.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&W(n.$$.fragment),ot(n,e.target,e.anchor,e.customElement),f=!1,J()}T(d)}class at{$destroy(){rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ut(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!st.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),st.push(t,n)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const s=[c,a];return r.push(s),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,U as B,ut as C,j as D,h as E,b as F,t as G,r as H,Y as I,a as J,u as K,S as L,at as S,w as a,x as b,E as c,m as d,_ as e,p as f,A as g,N as h,ct as i,nt as j,$ as k,y as l,et as m,k as n,ot as o,Z as p,tt as q,X as r,c as s,g as t,V as u,W as v,rt as w,q as x,O as y,C as z};
