webpackJsonp([15],{737:function(s,n,o){var t=o(738);"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);o(522)("25e08ffe",t,!0)},738:function(s,n,o){n=s.exports=o(521)(),n.push([s.i,".loadingDemo{padding:15px}.customer-loading,.customer-loading .loading-box{text-align:center}.customer-loading .loading-box img{height:80px}.customer-loading p{text-align:center;margin:0}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/loading.vue"],names:[],mappings:"AACA,aACE,YAAc,CACf,AAID,iDACI,iBAAmB,CACtB,AACD,mCACM,WAAa,CAClB,AACD,oBACI,kBAAmB,AACnB,QAAU,CACb",file:"loading.vue",sourcesContent:["\n.loadingDemo {\n  padding: 15px;\n}\n.customer-loading {\n  text-align: center;\n}\n.customer-loading .loading-box {\n    text-align: center;\n}\n.customer-loading .loading-box img {\n      height: 80px;\n}\n.customer-loading p {\n    text-align: center;\n    margin: 0;\n}\n"],sourceRoot:""}])},739:function(s,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(740),i=o.n(t);n.default={data:function(){return{}},i18n:{messages:{"zh-CN":{title:"加载提示",open:"打开Loading",onlySpinner:"只有Spinner",onlyString:"只传入String",closeWhenPageChange:"控制页面切换是否关闭loading",type:"类型",show:"显示",noBackdrop:"不显示Backdrop",openContinue:"在一个loading中定时打开另一个",noSpinner:"没有旋转样式",customer:"自定义内容"},"en-US":{title:"Loading",open:"Open Loading",onlySpinner:"Only Spinner",onlyString:"Only String",closeWhenPageChange:"Control page switching is off loading",type:"Type",show:"Show",noBackdrop:"Does not show Backdrop",openContinue:"To open another one regularly during a loading",noSpinner:"No rotation style",customer:"Custom content"}}},methods:{spinnerOnly:function(){var s=this;this.$loading.present(),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},stringOnly:function(){var s=this;this.$loading.present("只传入了String"),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showDefault:function(){var s=this;this.$loading.present({content:"正在加载, 6000ms后自动关闭...",dismissOnPageChange:!1,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},6e3)},dismissWhenChangeUrl:function(){var s=this;this.$loading.present({content:"正在加载, 6000ms后自动关闭...",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},6e3)},showIos:function(){var s=this;this.$loading.present({spinner:"ios",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showIosSmall:function(){var s=this;this.$loading.present({spinner:"ios-small",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showBubbles:function(){var s=this;this.$loading.present({spinner:"bubbles",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showCircles:function(){var s=this;this.$loading.present({spinner:"circles",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showCrescent:function(){var s=this;this.$loading.present({spinner:"crescent",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showDots:function(){var s=this;this.$loading.present({spinner:"dots",content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showNoBackDrop:function(){var s=this;this.$loading.present({content:"正在加载, 1000ms后自动关闭...",cssClass:"cssClass",dismissOnPageChange:!0,showBackdrop:!1}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showOther:function(){var s=this;this.$loading.present({content:"正在加载, 这个是开启的第一个, 没有Backdrop.",cssClass:"cssClass",showBackdrop:!1}),setTimeout(function(){s.$loading.present({content:"正在加载, 这个是开启的第二个, 打开Backdrop.",cssClass:"cssClass",showBackdrop:!0}),setTimeout(function(){s.$loading.present({content:"正在加载, 这个是开启的第三个, 没有Backdrop.",cssClass:"cssClass",showBackdrop:!1}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("所有Loading都关闭了")})},2e3)},2e3)},2e3)},showNoSpinner:function(){var s=this;this.$loading.present({spinner:"hide",content:"正在加载, 这个loading没有Spnner.",cssClass:"cssClass",showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},1e3)},showCusContent:function(){var s=this;this.$loading.present({spinner:"hide",content:'<div class="loading-box"><img src="'+i.a+'"><p>Loading</p></div>',cssClass:"customer-loading",showBackdrop:!0}),setTimeout(function(){s.$loading.dismiss().then(function(){console.debug("dismiss in promise success!")})},3e3)}}}},740:function(s,n,o){s.exports=o.p+"static/img/customer-loading.74d5bc9.gif"},741:function(s,n){s.exports={render:function(){var s=this,n=s.$createElement,o=s._self._c||n;return o("Page",[o("Header",[o("Navbar",[o("Title",{attrs:{title:s.$t("title")}})],1)],1),s._v(" "),o("Content",{attrs:{padding:""}},[o("p",[s._v(s._s(s.$t("onlySpinner")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.spinnerOnly()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("onlyString")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.stringOnly()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("closeWhenPageChange")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showDefault()}}},[s._v(s._s(s.$t("open"))+"(Default)")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.dismissWhenChangeUrl()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("type"))+": ios/ios-small/bubbles/circles/crescent/dots")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showIos()}}},[s._v(s._s(s.$t("show"))+" ios")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showIosSmall()}}},[s._v(s._s(s.$t("show"))+" ios-small")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showBubbles()}}},[s._v(s._s(s.$t("show"))+" Bubbles")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showCircles()}}},[s._v(s._s(s.$t("show"))+" circles")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showCrescent()}}},[s._v(s._s(s.$t("show"))+" crescent")]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showDots()}}},[s._v(s._s(s.$t("show"))+" dots")]),s._v(" "),o("p",[s._v(s._s(s.$t("noBackdrop")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showNoBackDrop()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("openContinue")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showOther()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("noSpinner")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showNoSpinner()}}},[s._v(s._s(s.$t("open")))]),s._v(" "),o("p",[s._v(s._s(s.$t("customer")))]),s._v(" "),o("Button",{attrs:{block:""},on:{click:function(n){s.showCusContent()}}},[s._v(s._s(s.$t("open")))])],1)],1)},staticRenderFns:[]}},950:function(s,n,o){o(737);var t=o(0)(o(739),o(741),null,null);s.exports=t.exports}});
//# sourceMappingURL=15.26fa863c31358ef07e7d.js.map