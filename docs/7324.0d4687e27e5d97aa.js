"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7324],{7324:(p,s,n)=>{n.r(s),n.d(s,{pwa_camera_modal:()=>i});var o=n(5861),r=n(3404);const i=class{constructor(e){(0,r.r)(this,e),this.onPhoto=(0,r.c)(this,"onPhoto",7),this.noDeviceError=(0,r.c)(this,"noDeviceError",7),this.facingMode="user"}present(){var e=this;return(0,o.Z)(function*(){var c,d;const t=document.createElement("pwa-camera-modal-instance");t.facingMode=e.facingMode,t.addEventListener("onPhoto",function(h){return(c=c||(0,o.Z)(function*(a){e._modal&&e.onPhoto.emit(a.detail)})).apply(this,arguments)}),t.addEventListener("noDeviceError",function(h){return(d=d||(0,o.Z)(function*(a){e.noDeviceError.emit(a)})).apply(this,arguments)}),document.body.append(t),e._modal=t})()}dismiss(){var e=this;return(0,o.Z)(function*(){e._modal&&(e._modal&&e._modal.parentNode.removeChild(e._modal),e._modal=null)})()}render(){return(0,r.h)("div",null)}};i.style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}"}}]);