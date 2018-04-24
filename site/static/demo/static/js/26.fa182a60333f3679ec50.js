webpackJsonp([26],{569:function(e,t,n){var i=n(570);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(522)("526e84ba",i,!0)},570:function(e,t,n){t=e.exports=n(521)(),t.push([e.i,".alertCssOuterMain .alert-image-box{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-top:16px}.alertCssOuterMain .alert-image-box .alert-image{height:100px;width:100px}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/alert.vue"],names:[],mappings:"AACA,oCACE,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,gBAAkB,CACnB,AACD,iDACI,aAAc,AACd,WAAa,CAChB",file:"alert.vue",sourcesContent:["\n.alertCssOuterMain .alert-image-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 16px;\n}\n.alertCssOuterMain .alert-image-box .alert-image {\n    height: 100px;\n    width: 100px;\n}\n"],sourceRoot:""}])},571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AlertDemo",i18n:{messages:{"zh-CN":{title:"对话框",cancel:"取消",confirm:"确认",notClear:"不清楚"},"en-US":{title:"Alert",cancel:"Cancel",confirm:"Confirm",notClear:"Not Clear"}}},methods:{alert:function(){this.$alert.present({title:"Alert",message:"This is a warning box.",enableBackdropDismiss:!0,buttons:[{text:this.$t("confirm"),role:"",handler:function(){console.log("Alert 确定 click")}}]})},confirm:function(){var e=this;this.$alert.present({title:"Confirm",message:"This is a confirmation dialog containing the cancel button.",cssClass:"alertCssOuterMain",enableBackdropDismiss:!0,buttons:[{text:this.$t("cancel"),role:"cancel",icon:"icon-Destructive",cssClass:"",handler:function(){console.debug("Confirm 取消 click")}},{text:this.$t("confirm"),role:"",handler:function(){e.$alert.dismiss().then(function(){console.debug("Confirm 确定 click")})}}]})},threeBtn:function(){var e=this;this.$alert.present({title:"Three buttons",message:"When the incoming button exceeds three, it is displayed vertically, and this message can also be passed into the html structure.",enableBackdropDismiss:!1,buttons:[{text:this.$t("notClear"),role:"",handler:function(){console.debug("Three 不清楚 click")}},{text:this.$t("cancel"),role:"cancel",handler:function(){console.debug("Three 取消 click")}},{text:this.$t("confirm"),role:"",handler:function(){e.$alert.dismiss().then(function(e){console.debug("Three 确定 click")})}}]})},input:function(){var e=this;this.$alert.present({title:"Log in to iTunes Store",message:'Please enter the password for your Apple ID "apple@icloud.com"',enableBackdropDismiss:!0,inputs:[{type:"password",name:"password",placeholder:"password",value:""}],buttons:[{text:this.$t("cancel"),role:"cancel",handler:function(){}},{text:this.$t("confirm"),handler:function(t){e.$alert.present({title:"Please confirm",message:"The information you entered："+JSON.stringify(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:e.$t("confirm"),role:"cancel",handler:function(t){e.$alert.dismiss().then(function(){console.log("Alert 确定 click")})}}]}).then(function(){console.log("Alert present promise")})}}]}).then(function(){console.log("Input present!")})},checkbox:function(){var e=this;this.$alert.present({title:"Fruit comes",message:"Choose the fruit you like to eat",enableBackdropDismiss:!0,inputs:[{type:"checkbox",value:"apple",label:"apple",checked:!0,handler:function(e){console.log("checkbox1 clicked"),console.log(e)}},{type:"checkbox",value:"pear",label:"pear",checked:!1,disabled:!0,handler:function(e){console.log("checkbox2 clicked"),console.log(e)}},{type:"checkbox",value:"banana",label:"banana",checked:!0,handler:function(e){console.log("checkbox3 clicked"),console.log(e)}},{type:"checkbox",value:"orange",label:"orange",checked:!1,handler:function(e){console.log("checkbox4 clicked"),console.log(e)}}],buttons:[{text:this.$t("cancel"),role:"cancel",handler:function(){return console.log("必须选择"),e.$toast("必须选择"),!1}},{text:this.$t("confirm"),role:"",handler:function(t){e.$alert.dismiss().then(function(n){e.$alert.present({title:"Please confirm",message:"The information you entered："+JSON.stringify(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:e.$t("confirm"),role:"",handler:function(e){}}]})})}}]})},radio:function(){var e=this;this.$alert.present({title:"Fruit comes",message:"You can only choose one",enableBackdropDismiss:!0,inputs:[{type:"radio",value:"apple",label:"apple",checked:!0,handler:function(e){console.log("radio clicked"),console.log(e)}},{type:"radio",value:"pear",label:"pear",checked:!1,disabled:!0,handler:function(e){console.log("radio2 clicked"),console.log(e)}},{type:"radio",value:"banana",label:"banana",checked:!1,handler:function(e){console.log("radio3 clicked"),console.log(e)}},{type:"radio",value:"orange",label:"orange",checked:!1,handler:function(e){console.log("radio4 clicked"),console.log(e)}}],buttons:[{text:this.$t("cancel"),role:"cancel",handler:function(){return console.log("必须选择"),!1}},{text:this.$t("confirm"),role:"",handler:function(t){e.$alert.dismiss().then(function(n){e.$alert.present({title:"Please confirm",message:"The information you entered："+JSON.stringify(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:e.$t("confirm"),role:"",handler:function(e){}}]})})}}]})},image:function(){var e=this;this.$alert.present({image:"https://github.com/vm-component/Vimo/blob/master/examples/static/img/vimo.png?raw=true",title:"5.5 version update",message:"1. Function update 2. Function update;",cssClass:"alertCssOuterMain",enableBackdropDismiss:!0,buttons:[{text:"Got it",role:"cancel",icon:"icon-Destructive",cssClass:"",handler:function(){console.debug("Confirm 取消 click")}},{text:"More",role:"",handler:function(){e.$alert.dismiss().then(function(){console.debug("Confirm 确定 click")})}}]})}}}},572:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("Header",[n("Navbar",[n("Title",[e._v(e._s(e.$t("title")))])],1)],1),e._v(" "),n("Content",{attrs:{padding:""}},[n("Button",{attrs:{block:""},on:{click:function(t){e.alert()}}},[e._v("Alert")]),e._v(" "),n("Button",{attrs:{color:"danger",block:""},on:{click:function(t){e.confirm()}}},[e._v("Confirm")]),e._v(" "),n("Button",{attrs:{color:"secondary",block:""},on:{click:function(t){e.threeBtn()}}},[e._v("Three Button")]),e._v(" "),n("Button",{attrs:{color:"dark",block:""},on:{click:function(t){e.input()}}},[e._v("Input")]),e._v(" "),n("Button",{attrs:{color:"dark",block:""},on:{click:function(t){e.checkbox()}}},[e._v("Checkbox")]),e._v(" "),n("Button",{attrs:{color:"primary",block:""},on:{click:function(t){e.radio()}}},[e._v("Radio")]),e._v(" "),n("Button",{attrs:{color:"primary",block:""},on:{click:function(t){e.image()}}},[e._v("Image")]),e._v(" "),n("article",[n("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur debitis deleniti doloribus eius laborum magni maiores maxime,\n                molestias quidem. Amet esse excepturi, facilis illum magnam nulla quo repudiandae vero.")]),e._v(" "),n("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur debitis deleniti doloribus eius laborum magni maiores maxime,\n                molestias quidem. Amet esse excepturi, facilis illum magnam nulla quo repudiandae vero.")]),e._v(" "),n("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur debitis deleniti doloribus eius laborum magni maiores maxime,\n                molestias quidem. Amet esse excepturi, facilis illum magnam nulla quo repudiandae vero.")]),e._v(" "),n("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur debitis deleniti doloribus eius laborum magni maiores maxime,\n                molestias quidem. Amet esse excepturi, facilis illum magnam nulla quo repudiandae vero.")]),e._v(" "),n("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur debitis deleniti doloribus eius laborum magni maiores maxime,\n                molestias quidem. Amet esse excepturi, facilis illum magnam nulla quo repudiandae vero.")])])],1)],1)},staticRenderFns:[]}},907:function(e,t,n){n(569);var i=n(0)(n(571),n(572),null,null);e.exports=i.exports}});
//# sourceMappingURL=26.fa182a60333f3679ec50.js.map