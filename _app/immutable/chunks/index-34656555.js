function g(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function W(){return Object.create(null)}function E(t){t.forEach(X)}function B(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ft(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(at(e,n))}function It(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,o){if(s){const r=Y(e,n,i,o);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){return t==null?"":t}function Ut(t,e,n){return t.set(n),e}function Vt(t){return t&&B(t.destroy)?t.destroy:g}const Z=typeof window<"u";let ft=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):g;const y=new Set;function tt(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(tt)}function _t(t){let e;return y.size===0&&z(tt),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let H=!1;function dt(){H=!0}function ht(){H=!1}function mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:mt(1,s,_=>e[n[_]].claim_order,u))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,s=Math.max(a,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<o.length&&r[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[l],f)}}function yt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=F("style");return xt(et(t),e),e.sheet}function xt(t,e){yt(t.head||t,e)}function $t(t,e){if(H){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){t.insertBefore(e,n||null)}function wt(t,e,n){H&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Yt(){return G(" ")}function Zt(){return G("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ne(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Et(t,i,e[i])}function Nt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){nt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function At(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return At(t,e,n,F)}function Tt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function se(t){return Tt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function re(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);nt(t);const s=t.splice(n,i-n+1);C(s[0]),C(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=vt(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)bt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class K extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}}const S=new Map;let M=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return S.set(t,n),n}function Mt(t,e,n,i,s,o,r,c=0){const l=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=l){const N=e+(n-e)*o(m);u+=m*100+`%{${r(N,1-N)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${c}`,_=et(t),{stylesheet:h,rules:d}=S.get(_)||St(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${a} ${i}ms linear ${s}ms 1 both`,M+=1,a}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),M-=s,M||Dt())}function Dt(){z(()=>{M||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let v;function w(t){v=t}function L(){if(!v)throw new Error("Function called outside component initialization");return v}function ae(t){L().$$.on_mount.push(t)}function fe(t){L().$$.after_update.push(t)}function _e(t){L().$$.on_destroy.push(t)}function de(t,e){return L().$$.context.set(t,e),e}const b=[],U=[],k=[],P=[],st=Promise.resolve();let q=!1;function rt(){q||(q=!0,st.then(lt))}function he(){return rt(),st}function D(t){k.push(t)}function me(t){P.push(t)}const R=new Set;let T=0;function lt(){const t=v;do{for(;T<b.length;){const e=b[T];T++,w(e),Ht(e.$$)}for(w(null),b.length=0,T=0;U.length;)U.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];R.has(n)||(R.add(n),n())}k.length=0}while(b.length);for(;P.length;)P.pop()();q=!1,R.clear(),w(t)}function Ht(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let $;function Lt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function V(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function pe(){p={r:0,c:[],p}}function ye(){p.r||E(p.c),p=p.p}function Ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ge(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function xe(t,e,n){let i=e(t,n),s=!1,o,r,c=0;function l(){o&&Q(t,o)}function u(){const{delay:a=0,duration:_=300,easing:h=ot,tick:d=g,css:x}=i||Rt;x&&(o=Mt(t,0,1,_,a,h,x,c++)),d(0,1);const m=ft()+a,N=m+_;r&&r.abort(),s=!0,D(()=>V(t,!0,"start")),r=_t(O=>{if(s){if(O>=N)return d(1,0),V(t,!0,"end"),l(),s=!1;if(O>=m){const I=h((O-m)/_);d(I,1-I)}}return s})}let f=!1;return{start(){f||(f=!0,Q(t),B(i)?(i=i(),Lt().then(u)):u())},invalidate(){f=!1},end(){s&&(l(),s=!1)}}}function $e(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],c=e[o];if(c){for(const l in r)l in c||(i[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[o]=c}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function be(t){return typeof t=="object"&&t!==null?t:{}}function we(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ve(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,n),i||D(()=>{const l=o.map(X).filter(B);r?r.push(...l):E(l),t.$$.on_mount=[]}),c.forEach(D)}function qt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,o,r,c=[-1]){const l=v;w(t);const u=t.$$={fragment:null,ctx:null,props:o,update:g,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return u.ctx&&s(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),f&&Bt(t,a)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){dt();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ht(),lt()}w(l)}class Ae{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ne as $,be as A,qt as B,ct as C,he as D,g as E,Xt as F,$t as G,te as H,B as I,Gt as J,ue as K,Ut as L,D as M,It as N,Jt as O,Kt as P,Wt as Q,ft as R,Ae as S,_t as T,ot as U,Qt as V,Vt as W,E as X,_e as Y,K as Z,re as _,Yt as a,oe as a0,U as a1,we as a2,ee as a3,me as a4,xe as a5,Ft as a6,wt as b,se as c,ye as d,Zt as e,Ot as f,pe as g,C as h,Ne as i,de as j,fe as k,F as l,ie as m,Nt as n,ae as o,Et as p,ce as q,G as r,zt as s,ge as t,Tt as u,le as v,ve as w,Ee as x,Pt as y,$e as z};
