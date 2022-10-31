import{S as H,i as I,s as j,a as V,e as M,c as C,b as g,E as O,h as _,F as Z,l as v,r as S,m as k,n as y,u as T,p as d,G as N,H as F,I as se,w as q,x as B,y as D,f as $,t as w,B as L,q as A,J as ee,K,L as ae,M as oe,N as re,d as te,O as ie,P as ce,Q as fe,g as le}from"../chunks/index-e7d67494.js";import{g as ue,s as he,t as _e,c as me}from"../chunks/index-6a9268e0.js";import"../chunks/index-169a599c.js";function P(a,e,l){const t=a.slice();return t[7]=e[l].text,t[8]=e[l].href,t}function Q(a){let e,l=a[7]+"",t,n,o,r;return{c(){e=v("a"),t=S(l),n=V(),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=y(e);t=T(i,l),n=C(i),i.forEach(_),this.h()},h(){d(e,"class",a[0]),d(e,"href",a[8])},m(s,i){g(s,e,i),N(e,t),N(e,n),o||(r=F(e,"click",function(){se(a[1])&&a[1].apply(this,arguments)}),o=!0)},p(s,i){a=s,i&1&&d(e,"class",a[0])},d(s){s&&_(e),o=!1,r()}}}function pe(a){let e,l,t=a[2],n=[];for(let o=0;o<t.length;o+=1)n[o]=Q(P(a,t,o));return{c(){e=V();for(let o=0;o<n.length;o+=1)n[o].c();l=M()},l(o){e=C(o);for(let r=0;r<n.length;r+=1)n[r].l(o);l=M()},m(o,r){g(o,e,r);for(let s=0;s<n.length;s+=1)n[s].m(o,r);g(o,l,r)},p(o,[r]){if(r&7){t=o[2];let s;for(s=0;s<t.length;s+=1){const i=P(o,t,s);n[s]?n[s].p(i,r):(n[s]=Q(i),n[s].c(),n[s].m(l.parentNode,l))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}},i:O,o:O,d(o){o&&_(e),Z(n,o),o&&_(l)}}}function de(a,e,l){const t=ue(),{aboutme:n,portfolio:o,contact:r}=he[t].nav,s=[{href:"#aboutme",text:n},{href:"#portfolio",text:o},{href:"#contact",text:r}];let{className:i}=e,{onClick:f=()=>{}}=e;return a.$$set=c=>{"className"in c&&l(0,i=c.className),"onClick"in c&&l(1,f=c.onClick)},[i,f,s]}class ne extends H{constructor(e){super(),I(this,e,de,pe,j,{className:0,onClick:1})}}function ge(a){let e,l,t;return l=new ne({props:{className:"font-roboto text-white block small-caps font-semibold text-2xl hover:text-pink-600 transition-colors whitespace-nowrap"}}),{c(){e=v("nav"),q(l.$$.fragment),this.h()},l(n){e=k(n,"NAV",{class:!0});var o=y(e);B(l.$$.fragment,o),o.forEach(_),this.h()},h(){d(e,"class","flex top-2 right-7 fixed gap-20 z-50")},m(n,o){g(n,e,o),D(l,e,null),t=!0},p:O,i(n){t||($(l.$$.fragment,n),t=!0)},o(n){w(l.$$.fragment,n),t=!1},d(n){n&&_(e),L(l)}}}class be extends H{constructor(e){super(),I(this,e,null,ge,j,{})}}function U(a,e,l){const t=a.slice();return t[3]=e[l],t}function X(a){let e;return{c(){e=v("hr"),this.h()},l(l){e=k(l,"HR",{class:!0}),this.h()},h(){d(e,"class","bg-white border-[1px] w-7 transition-all duration-200 my-[3px] svelte-ifhaj0"),K(e,"close-icon",a[0])},m(l,t){g(l,e,t)},p(l,t){t&1&&K(e,"close-icon",l[0])},d(l){l&&_(e)}}}function $e(a){let e,l,t,n,o,r,s,i,f,c,m,x,G,E=Array(3),p=[];for(let u=0;u<E.length;u+=1)p[u]=X(U(a,E,u));return n=new ne({props:{className:"mobile-nav-options",onClick:a[2]}}),{c(){e=v("button");for(let u=0;u<p.length;u+=1)p[u].c();l=V(),t=v("nav"),q(n.$$.fragment),o=V(),r=v("a"),s=S("github"),i=V(),f=v("a"),c=S("linkedin"),this.h()},l(u){e=k(u,"BUTTON",{class:!0});var b=y(e);for(let R=0;R<p.length;R+=1)p[R].l(b);b.forEach(_),l=C(u),t=k(u,"NAV",{class:!0});var h=y(t);B(n.$$.fragment,h),o=C(h),r=k(h,"A",{class:!0,target:!0,href:!0});var z=y(r);s=T(z,"github"),z.forEach(_),i=C(h),f=k(h,"A",{class:!0,target:!0,href:!0});var J=y(f);c=T(J,"linkedin"),J.forEach(_),h.forEach(_),this.h()},h(){d(e,"class","flex flex-col no-highlight fixed top-0 z-50 right-0 p-2"),A(e,"right",`${a[1]}px`,!1),d(r,"class","mobile-nav-options"),d(r,"target","_blank"),d(r,"href","https://github.com/gralmeidan"),d(f,"class","mobile-nav-options"),d(f,"target","_blank"),d(f,"href","https://www.linkedin.com/in/gralmeidan/"),d(t,"class","overflow-hidden h-[100vh] inset-shadow bg-neutral-850 fixed top-0 right-0 svelte-ifhaj0"),A(t,"width",`${a[1]}px`,!1)},m(u,b){g(u,e,b);for(let h=0;h<p.length;h+=1)p[h].m(e,null);g(u,l,b),g(u,t,b),D(n,t,null),N(t,o),N(t,r),N(r,s),N(t,i),N(t,f),N(f,c),m=!0,x||(G=F(e,"click",a[2]),x=!0)},p(u,[b]){if(b&1){E=Array(3);let h;for(h=0;h<E.length;h+=1){const z=U(u,E,h);p[h]?p[h].p(z,b):(p[h]=X(z),p[h].c(),p[h].m(e,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=E.length}b&2&&A(e,"right",`${u[1]}px`,!1),b&2&&A(t,"width",`${u[1]}px`,!1)},i(u){m||($(n.$$.fragment,u),m=!0)},o(u){w(n.$$.fragment,u),m=!1},d(u){u&&_(e),Z(p,u),u&&_(l),u&&_(t),L(n),x=!1,G()}}}const W=_e(0,{duration:300,easing:me});function ve(a,e,l){let t,n=O;ee(a,W,s=>l(1,t=s)),a.$$.on_destroy.push(()=>n());const o=()=>{ae(W,t=t>0?0:200,t),l(0,r=!r)};let r=!1;return[r,t,o]}class ke extends H{constructor(e){super(),I(this,e,ve,$e,j,{})}}function Y(a){let e,l,t,n;const o=[Ne,we],r=[];function s(i,f){return i[0]<640?0:1}return e=s(a),l=r[e]=o[e](a),{c(){l.c(),t=M()},l(i){l.l(i),t=M()},m(i,f){r[e].m(i,f),g(i,t,f),n=!0},p(i,f){let c=e;e=s(i),e!==c&&(le(),w(r[c],1,1,()=>{r[c]=null}),te(),l=r[e],l||(l=r[e]=o[e](i),l.c()),$(l,1),l.m(t.parentNode,t))},i(i){n||($(l),n=!0)},o(i){w(l),n=!1},d(i){r[e].d(i),i&&_(t)}}}function we(a){let e,l;return e=new be({}),{c(){q(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,n){D(e,t,n),l=!0},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ne(a){let e,l;return e=new ke({}),{c(){q(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,n){D(e,t,n),l=!0},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function ye(a){let e,l,t,n,o,r;oe(a[4]);let s=!!a[0]&&Y(a);const i=a[3].default,f=re(i,a,a[2],null);return{c(){e=v("header"),s&&s.c(),l=V(),t=v("main"),f&&f.c(),this.h()},l(c){e=k(c,"HEADER",{});var m=y(e);s&&s.l(m),m.forEach(_),l=C(c),t=k(c,"MAIN",{class:!0});var x=y(t);f&&f.l(x),x.forEach(_),this.h()},h(){d(t,"class","relative w-[100vw] sm:static"),A(t,"left",`-${a[1]}px`,!1)},m(c,m){g(c,e,m),s&&s.m(e,null),g(c,l,m),g(c,t,m),f&&f.m(t,null),n=!0,o||(r=F(window,"resize",a[4]),o=!0)},p(c,[m]){c[0]?s?(s.p(c,m),m&1&&$(s,1)):(s=Y(c),s.c(),$(s,1),s.m(e,null)):s&&(le(),w(s,1,1,()=>{s=null}),te()),f&&f.p&&(!n||m&4)&&ie(f,i,c,c[2],n?fe(i,c[2],m,null):ce(c[2]),null),m&2&&A(t,"left",`-${c[1]}px`,!1)},i(c){n||($(s),$(f,c),n=!0)},o(c){w(s),w(f,c),n=!1},d(c){c&&_(e),s&&s.d(),c&&_(l),c&&_(t),f&&f.d(c),o=!1,r()}}}function xe(a,e,l){let t;ee(a,W,i=>l(1,t=i));let{$$slots:n={},$$scope:o}=e,r=0;function s(){l(0,r=window.innerWidth)}return a.$$set=i=>{"$$scope"in i&&l(2,o=i.$$scope)},[r,t,o,n,s]}class Ce extends H{constructor(e){super(),I(this,e,xe,ye,j,{})}}export{Ce as default};