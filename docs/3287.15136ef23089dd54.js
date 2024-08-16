"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(rt,N,h)=>{h.r(N),h.d(N,{startInputShims:()=>ot});var W,F,M=h(5861),x=h(8360),m=h(839),j=h(7484);h(4874),h(6225);const w=new WeakMap,B=(t,e,s,o=0,r=!1)=>{w.has(t)!==s&&(s?z(t,e,o,r):V(t,e))},z=(t,e,s,o=!1)=>{const r=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),w.set(t,a);const n="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${n}px,${s}px,0) scale(0)`},V=(t,e)=>{const s=w.get(t);s&&(w.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},O="input, textarea, [no-blur], [contenteditable]",H="$ionPaddingTimer",K=(t,e,s)=>{const o=t[H];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[H]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},Z=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&K(e,0,s)},{once:!0})};let P=0;const R="data-ionic-skip-scroll-assist",tt=(t,e,s,o,r,a,c,n=!1)=>{var i;const d=a&&(void 0===c||c.mode===j.a.None),l=function(){return(i=i||(0,M.Z)(function*(){e.hasAttribute(R)?e.removeAttribute(R):et(t,e,s,o,r,d,n)})).apply(this,arguments)};return t.addEventListener("focusin",l,!0),()=>{t.removeEventListener("focusin",l,!0)}},U=t=>{document.activeElement!==t&&(t.setAttribute(R,"true"),t.focus())},et=function(e,s,o,r,a,c){return(W=W||(0,M.Z)(function*(n,i,d,l,y,g,L=!1){if(!d&&!l)return;const f=((t,e,s)=>{var o;return((t,e,s,o)=>{const r=t.top,a=t.bottom,c=e.top,i=c+15,l=Math.min(e.bottom,o-s)-50-a,y=i-r,g=Math.round(l<0?-l:y>0?-y:0),L=Math.min(g,r-c),v=Math.abs(L)/.3;return{scrollAmount:L,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(n,d||l,y);if(d&&Math.abs(f.scrollAmount)<4)return U(i),void(g&&null!==d&&(K(d,P),Z(i,d,()=>P=0)));if(B(n,i,!0,f.inputSafeY,L),U(i),(0,m.r)(()=>n.click()),g&&d&&(P=f.scrollPadding,K(d,P)),typeof window<"u"){var v;let S;const A=function D(){return(v=v||(0,M.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",b),window.removeEventListener("ionKeyboardDidShow",D),d&&(yield(0,x.c)(d,0,f.scrollAmount,f.scrollDuration)),B(n,i,!1,f.inputSafeY),U(i),g&&Z(i,d,()=>P=0)})).apply(this,arguments)},b=()=>{window.removeEventListener("ionKeyboardDidShow",b),window.addEventListener("ionKeyboardDidShow",A)};if(d){const D=yield(0,x.g)(d);if(f.scrollAmount>D.scrollHeight-D.clientHeight-D.scrollTop)return"password"===i.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",b)):window.addEventListener("ionKeyboardDidShow",A),void(S=setTimeout(A,1e3))}A()}})).apply(this,arguments)},ot=function(e,s){return(F=F||(0,M.Z)(function*(o,r){var a;const c=document,n="ios"===r,i="android"===r,d=o.getNumber("keyboardHeight",290),l=o.getBoolean("scrollAssist",!0),y=o.getBoolean("hideCaretOnScroll",n),g=o.getBoolean("inputBlurring",n),L=o.getBoolean("scrollPadding",!0),f=Array.from(c.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,S=new WeakMap,A=yield j.K.getResizeMode(),b=function(I){return(a=a||(0,M.Z)(function*(_){yield new Promise(p=>(0,m.c)(_,p));const G=_.shadowRoot||_,C=G.querySelector("input")||G.querySelector("textarea"),T=(0,x.f)(_),Y=T?null:_.closest("ion-footer");if(C){if(T&&y&&!v.has(_)){const p=((t,e,s)=>{if(!s||!e)return()=>{};const o=n=>{(t=>t===t.getRootNode().activeElement)(e)&&B(t,e,n)},r=()=>B(t,e,!1),a=()=>o(!0),c=()=>o(!1);return(0,m.a)(s,"ionScrollStart",a),(0,m.a)(s,"ionScrollEnd",c),e.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",a),(0,m.b)(s,"ionScrollEnd",c),e.removeEventListener("blur",r)}})(_,C,T);v.set(_,p)}if("date"!==C.type&&"datetime-local"!==C.type&&(T||Y)&&l&&!S.has(_)){const p=tt(_,C,T,Y,d,L,A,i);S.set(_,p)}}})).apply(this,arguments)};g&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",c=>{if(e)return void(e=!1);const n=s.activeElement;if(!n||n.matches(O))return;const i=c.target;i!==n&&(i.matches(O)||i.closest(O)||(t=!1,setTimeout(()=>{t||n.blur()},50)))},!1)})();for(const u of f)b(u);c.addEventListener("ionInputDidLoad",u=>{b(u.detail)}),c.addEventListener("ionInputDidUnload",u=>{(u=>{if(y){const I=v.get(u);I&&I(),v.delete(u)}if(l){const I=S.get(u);I&&I(),S.delete(u)}})(u.detail)})})).apply(this,arguments)}}}]);