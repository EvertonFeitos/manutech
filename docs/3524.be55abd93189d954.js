"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3524],{3524:(T,u,r)=>{r.r(u),r.d(u,{LoginPage:()=>Z});var f=r(5861),n=r(9468),p=r(6814),g=r(95),e=r(9843),m=r(5714),C=r(3959);function _(i,c){if(1&i){const a=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.NdJ("click",function(){n.CHM(a);const t=n.oxw();return n.KtG(t.openModalChange.emit(!1))}),n._uU(4,"Voltar"),n.qZA()(),n.TgZ(5,"ion-buttons",3)(6,"ion-button",4),n.NdJ("click",function(){n.CHM(a);const t=n.oxw();return n.KtG(t.botaoConfirmar())}),n._uU(7,"Confirmar"),n.qZA()()()(),n.TgZ(8,"ion-content",5)(9,"ion-row")(10,"ion-col",6)(11,"h2"),n._uU(12,"Configura\xe7\xf5es"),n.qZA(),n.TgZ(13,"ion-item")(14,"ion-label",7),n._uU(15,"Caminho Api"),n.qZA(),n.TgZ(16,"ion-input",8),n.NdJ("ngModelChange",function(t){n.CHM(a);const l=n.oxw();return n.KtG(l.config=t)}),n.qZA()()()()()}if(2&i){const a=n.oxw();n.xp6(6),n.Q6J("disabled",!a.config)("strong",!0),n.xp6(10),n.Q6J("ngModel",a.config)}}let M=(()=>{var i;class c{constructor(o){this.baseApi=o,this.openModalChange=new n.vpe}ngOnInit(){this.baseApi.baseUrl$.subscribe(o=>{this.config=o})}botaoConfirmar(){this.baseApi.setBaseUrl(this.config),this.openModalChange.emit(!1)}}return(i=c).\u0275fac=function(o){return new(o||i)(n.Y36(C._))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-config"]],inputs:{openModal:"openModal"},outputs:{openModalChange:"openModalChange"},standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[[3,"isOpen"],["slot","start"],[3,"click"],["slot","end"],[3,"disabled","strong","click"],[1,"ion-padding"],["size","12"],["color","darking","position","stacked"],["placeholder","10.0.0.0:88","aria-label","Caminho Api",3,"ngModel","ngModelChange"]],template:function(o,t){1&o&&(n.TgZ(0,"ion-modal",0),n.YNc(1,_,17,3,"ng-template"),n.qZA()),2&o&&n.Q6J("isOpen",t.openModal)},dependencies:[e.Pc,e.YG,e.Sm,e.wI,e.W2,e.Gu,e.pK,e.Ie,e.Q$,e.Nd,e.sr,e.ki,e.j9,p.ez,g.u5,g.JJ,g.On]}),c})();var b=r(8268);let Z=(()=>{var i;class c{constructor(o,t,l,s){this.auth=o,this.loaddingCtrl=t,this.alert=l,this.router=s,this.credentials=(0,n.tdS)({}),this.configOpen=!1}ngOnInit(){}submit(){var o=this;return(0,f.Z)(function*(){const{id:t,senha:l}=o.credentials();if(void 0!==t&&void 0!==l&&null!==t&&null!==l){const s=yield o.loaddingCtrl.create({message:"Aguarde..."});yield s.present();try{yield o.auth.login(Number(t),l),o.credentials.set({}),yield s.dismiss(),o.router.navigate(["/home"])}catch(d){console.error(d),yield s.dismiss(),yield(yield o.alert.create({header:"Erro!",message:d.message?null==d?void 0:d.message:"Erro desconhecido, tente novamente",buttons:["Ok"]})).present(),o.credentials.update(h=>(h.senha=null,h))}}})()}abrirConfiguracoes(){this.configOpen=!0}openModalChange(o){this.configOpen=o}}return(i=c).\u0275fac=function(o){return new(o||i)(n.Y36(b.r),n.Y36(e.HT),n.Y36(e.Br),n.Y36(m.F0))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:24,vars:7,consts:[[3,"fullscreen"],["slot","end"],[3,"click"],["slot","icon-only","color","primary","size","large","name","settings-outline"],[1,"ion-justify-content-center"],["size-md","6","size-lg","4","size-xl","3"],["src","assets/logo.jpeg"],[1,"ion-text-center"],["size","12"],["fill","outline","label","C\xf3digo",3,"type","labelPlacement","ngModel","ngModelChange"],["fill","outline","label","Senha","type","password",3,"labelPlacement","ngModel","ngModelChange"],["expand","block","size","large","fill","solid","color","primary",3,"click"],[3,"openModal","openModalChange"]],template:function(o,t){1&o&&(n.TgZ(0,"ion-content",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1)(4,"ion-button",2),n.NdJ("click",function(){return t.abrirConfiguracoes()}),n._UZ(5,"ion-icon",3),n.qZA()()()(),n.TgZ(6,"ion-grid")(7,"ion-row",4)(8,"ion-col",5),n._UZ(9,"ion-img",6),n.TgZ(10,"h1",7),n._uU(11,"Manutech"),n.qZA(),n.TgZ(12,"ion-grid")(13,"ion-row",4)(14,"ion-col",8)(15,"ion-input",9),n.NdJ("ngModelChange",function(s){return t.credentials().id=s}),n.qZA()()(),n.TgZ(16,"ion-row",4)(17,"ion-col",8)(18,"ion-input",10),n.NdJ("ngModelChange",function(s){return t.credentials().senha=s}),n.qZA()()(),n.TgZ(19,"ion-row",4)(20,"ion-col",8)(21,"ion-button",11),n.NdJ("click",function(){return t.submit()}),n._uU(22,"Entrar"),n.qZA()()()()()()()(),n.TgZ(23,"app-config",12),n.NdJ("openModalChange",function(s){return t.openModalChange(s)}),n.qZA()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(15),n.Q6J("type","number")("labelPlacement","stacked")("ngModel",t.credentials().id),n.xp6(3),n.Q6J("labelPlacement","stacked")("ngModel",t.credentials().senha),n.xp6(5),n.Q6J("openModal",t.configOpen))},dependencies:[e.Pc,e.YG,e.Sm,e.wI,e.W2,e.jY,e.Gu,e.gu,e.Xz,e.pK,e.Nd,e.sr,e.j9,p.ez,g.u5,g.JJ,g.On,m.Bz,M],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin:2rem 0}[_nghost-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:300px;width:66%;margin:0 auto}[_nghost-%COMP%]   .header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type{--border-width: 0 0 0}[_nghost-%COMP%]   .header-md[_ngcontent-%COMP%]{box-shadow:none!important}"]}),c})()}}]);