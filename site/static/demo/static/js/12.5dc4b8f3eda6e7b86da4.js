webpackJsonp([12],{573:function(e,t,s){var i=s(574);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(522)("386ab5de",i,!0)},574:function(e,t,s){t=e.exports=s(521)(),t.push([e.i,".hello-vimo-here{text-align:center;color:red;display:none}.hello-vimo .hello-vimo-here{display:block}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/app.vue"],names:[],mappings:"AACA,iBACE,kBAAmB,AACnB,UAAW,AACX,YAAc,CACf,AACD,6BACE,aAAe,CAChB",file:"app.vue",sourcesContent:["\n.hello-vimo-here {\n  text-align: center;\n  color: red;\n  display: none;\n}\n.hello-vimo .hello-vimo-here {\n  display: block;\n}\n"],sourceRoot:""}])},575:function(e,t,s){var i=s(576);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(522)("3310a8b8",i,!0)},576:function(e,t,s){t=e.exports=s(521)(),t.push([e.i,".stateBar[data-v-190ffe73]{background:hsla(0,0%,100%,.9);padding:10px 20px;width:100%}.stateBar p[data-v-190ffe73]{margin:5px 0}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/app.vue"],names:[],mappings:"AACA,2BACE,8BAAqC,AACrC,kBAAmB,AACnB,UAAY,CACb,AACD,6BACI,YAAc,CACjB",file:"app.vue",sourcesContent:["\n.stateBar[data-v-190ffe73] {\n  background: rgba(255, 255, 255, 0.9);\n  padding: 10px 20px;\n  width: 100%;\n}\n.stateBar p[data-v-190ffe73] {\n    margin: 5px 0;\n}\n"],sourceRoot:""}])},577:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={i18n:{messages:{"zh-CN":{service:"App服务",setDisabledDesc:"3秒内页面无法点击",setDisabledBtn:"冷冻页面",setDisableScrollDesc:"3秒内页面无法滚动",setDisableScrollBtn:"禁止滚动",setDocTitleDesc:"设置Doc的Title",setDocTitleDesc2:"方法this.$app.setDocTitle(val)只能设置document.title的值, Header中的Title组件请额外处理. 比如下面的按钮.",setDocTitleBtn:"设置DocTitle",setClassDesc:"在根组件添加全局Class",success:"设置成功",appState:"App状态"},"en-US":{service:"App Service",setDisabledDesc:"The page cannot be clicked within 3 seconds",setDisabledBtn:"Frozen Page",setDisableScrollDesc:"The page cannot be scrolled within 3 seconds",setDisableScrollBtn:"Frozen Scroll",setClassDesc:"Add a global class to the root component",setDocTitleDesc:"Set document.title",setDocTitleDesc2:'The method this.$app.setDocTitle(val) can only set the value of "document.title". The Title component in Header should be handled extra. For example, the following button.',setDocTitleBtn:"Set DocTitle",success:"Set Success!",appState:"App State"}}},data:function(){return{toggle:!0}}}},578:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Page",[s("Header",[s("Navbar",[s("Title",[e._v("App")])],1)],1),e._v(" "),s("Content",{staticClass:"outer-content",attrs:{padding:""}},[s("h2",[e._v(e._s(e.$t("service")))]),e._v(" "),s("h5",[e._v("this.$app.setDisabled(false, 3000)")]),e._v(" "),s("p",[e._v(e._s(e.$t("setDisabledDesc")))]),e._v(" "),s("Button",{attrs:{block:""},on:{click:function(t){e.$app.setEnabled(!1,3e3)}}},[e._v(e._s(e.$t("setDisabledBtn")))]),e._v(" "),s("h5",[e._v("this.$app.setDisableScroll(true,3000)")]),e._v(" "),s("p",[e._v(e._s(e.$t("setDisableScrollDesc")))]),e._v(" "),s("Button",{attrs:{block:""},on:{click:function(t){e.$app.setDisableScroll(!0,3e3)}}},[e._v(e._s(e.$t("setDisableScrollBtn")))]),e._v(" "),s("h5",[e._v("this.$app.setDocTitle(val)")]),e._v(" "),s("p",[e._v(e._s(e.$t("setDocTitleDesc")))]),e._v(" "),s("small",[e._v(e._s(e.$t("setDocTitleDesc2")))]),e._v(" "),s("Button",{attrs:{block:""},on:{click:function(t){e.$app.setDocTitle("TestTitle")}}},[e._v(e._s(e.$t("setDocTitleBtn")))]),e._v(" "),s("h5",[e._v("this.$app.setClass(val, isAdd)")]),e._v(" "),s("p",[e._v(e._s(e.$t("setClassDesc")))]),e._v(" "),s("Button",{attrs:{block:""},on:{click:function(t){e.$app.setClass("hello-vimo",e.toggle),e.toggle=!e.toggle}}},[e._v("Toggle Class")]),e._v(" "),s("section",{staticClass:"hello-vimo-here",attrs:{padding:""}},[s("strong",[e._v(e._s(e.$t("success")))])]),e._v(" "),s("article",[s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),s("p",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae\n                consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")])]),e._v(" "),s("section",{staticClass:"stateBar",attrs:{slot:"fixed-bottom"},slot:"fixed-bottom"},[s("Grid",{attrs:{"no-padding":""}},[s("Row",{attrs:{"no-padding":""}},[s("Column",[s("strong",{attrs:{"text-danger":""}},[e._v(e._s(e.$t("appState"))+":")]),e._v(" "),s("p",[e._v("isScrolling: "+e._s(e.$app.isScrolling))]),e._v(" "),s("p",[e._v("isEnabled: "+e._s(e.$app.isEnabled))]),e._v(" "),s("p",[e._v("isScrollDisabled: "+e._s(e.$app.isScrollDisabled))])])],1)],1)],1)],1)],1)},staticRenderFns:[]}},908:function(e,t,s){s(573),s(575);var i=s(0)(s(577),s(578),"data-v-190ffe73",null);e.exports=i.exports}});
//# sourceMappingURL=12.5dc4b8f3eda6e7b86da4.js.map