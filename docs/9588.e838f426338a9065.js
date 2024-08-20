"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9588],{9588:(b,f,s)=>{s.r(f),s.d(f,{ion_spinner:()=>d});var i=s(1688),m=s(3567),c=s(2085),u=s(3781);const d=class{constructor(e){(0,i.r)(this,e),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const e=this.name||c.c.get("spinner"),n=(0,c.b)(this);return e||("ios"===n?"lines":"circular")}render(){var e;const n=this,t=(0,c.b)(n),l=n.getName(),r=null!==(e=u.S[l])&&void 0!==e?e:u.S.lines,o="number"==typeof n.duration&&n.duration>10?n.duration:r.dur,p=[];if(void 0!==r.circles)for(let a=0;a<r.circles;a++)p.push(k(r,o,a,r.circles));else if(void 0!==r.lines)for(let a=0;a<r.lines;a++)p.push(y(r,o,a,r.lines));return(0,i.h)(i.H,{class:(0,m.c)(n.color,{[t]:!0,[`spinner-${l}`]:!0,"spinner-paused":n.paused||c.c.getBoolean("_testing")}),role:"progressbar",style:r.elmDuration?{animationDuration:o+"ms"}:{}},p)}},k=(e,n,t,l)=>{const r=e.fn(n,t,l);return r.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:r.viewBox||"0 0 64 64",style:r.style},(0,i.h)("circle",{transform:r.transform||"translate(32,32)",cx:r.cx,cy:r.cy,r:r.r,style:e.elmDuration?{animationDuration:n+"ms"}:{}}))},y=(e,n,t,l)=>{const r=e.fn(n,t,l);return r.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:r.viewBox||"0 0 64 64",style:r.style},(0,i.h)("line",{transform:"translate(32,32)",y1:r.y1,y2:r.y2}))};d.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},3567:(b,f,s)=>{s.d(f,{c:()=>u,g:()=>d,h:()=>c,o:()=>y});var m,i=s(5861);const c=(e,n)=>null!==n.closest(e),u=(e,n)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},n):n,d=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(e).forEach(t=>n[t]=!0),n},k=/^[a-z][a-z0-9+\-.]*:/,y=function(n,t,l,r){return(m=m||(0,i.Z)(function*(o,p,a,w){if(null!=o&&"#"!==o[0]&&!k.test(o)){const g=document.querySelector("ion-router");if(g)return null!=p&&p.preventDefault(),g.push(o,a,w)}return!1})).apply(this,arguments)}}}]);