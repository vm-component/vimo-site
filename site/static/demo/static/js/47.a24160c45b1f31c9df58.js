webpackJsonp([47],{621:function(e,n,i){var t=i(622);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);i(522)("5a9564d4",t,!0)},622:function(e,n,i){n=e.exports=i(521)(),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"content-hideBars.vue",sourceRoot:""}])},623:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"DemoContentHideBars",i18n:{messages:{"zh-CN":{title:"隐藏Bars",notice:"如果在微信/支付宝/钉钉模式下, 可能看不到Header的效果.",hideOrShow:"显/隐",both:"同时 显/隐"},"en-US":{title:"Hide Header/Footer",notice:"If you are in WeChat/Alipay/Stick mode, you may not see the effect of Header.",hideOrShow:"Show/Hide",both:"Both Show/Hide"}}},props:{},watch:{},computed:{headerComponent:function(){return this.$refs.header},footerComponent:function(){return this.$refs.footer},contentComponent:function(){return this.$refs.content}},methods:{hideHeader:function(){this.headerComponent.toggle()},hideFooter:function(){this.footerComponent.toggle()},hideBoth:function(){this.footerComponent.toggle(),this.headerComponent.toggle()},onScrollHandler:function(e){"down"===e.directionY&&e.scrollTop>0?(this.footerComponent.hide(),this.headerComponent.hide()):(this.footerComponent.show(),this.headerComponent.show())}}}},624:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("Page",[i("Header",{ref:"header"},[i("Navbar",[i("Title",[e._v(e._s(e.$t("title")))])],1)],1),e._v(" "),i("Content",{ref:"content",staticClass:"outer-content",attrs:{fullscreen:"",padding:""},on:{onScroll:e.onScrollHandler}},[i("p",[i("strong",[e._v("ps: "+e._s(e.$t("notice")))])]),e._v(" "),i("Grid",{attrs:{"no-padding":""}},[i("Row",{attrs:{"justify-content-around":"","align-items-center":"","no-padding":""}},[i("Button",{attrs:{outline:"",small:""},on:{click:e.hideHeader}},[e._v(e._s(e.$t("hideOrShow"))+" Header")]),e._v(" "),i("Button",{attrs:{outline:"",small:""},on:{click:e.hideFooter}},[e._v(e._s(e.$t("hideOrShow"))+" Footer")]),e._v(" "),i("Button",{attrs:{outline:"",small:""},on:{click:e.hideBoth}},[e._v(e._s(e.$t("both")))])],1)],1),e._v(" "),i("section",[i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")]),e._v(" "),i("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deleniti doloribus dolorum, est eum facilis ipsa magnam\n                neque\n                nesciunt non perferendis quae quaerat rerum saepe. Eveniet magnam quo sapiente.")])])],1),e._v(" "),i("Footer",{ref:"footer"},[i("Toolbar",[i("Title",[e._v("Footer")])],1)],1)],1)},staticRenderFns:[]}},920:function(e,n,i){i(621);var t=i(0)(i(623),i(624),"data-v-53b7ccd8",null);e.exports=t.exports}});
//# sourceMappingURL=47.a24160c45b1f31c9df58.js.map