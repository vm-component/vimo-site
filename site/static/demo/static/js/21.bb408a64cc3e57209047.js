webpackJsonp([21],{870:function(t,a,e){var r=e(871);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(522)("2e9b8344",r,!0)},871:function(t,a,e){a=t.exports=e(521)(),a.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"tabs.vue",sourceRoot:""}])},872:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=["icon-top","icon-start","icon-end","icon-bottom","icon-hide","title-hide"];a.default={name:"DemoTabs",i18n:{messages:{"zh-CN":{user:"用户",cars:"汽车",star:"明星"},"en-US":{user:"User",cars:"Cars",star:"Star"}}},data:function(){return{timer:null,tabsLayout:r[Math.floor(6*Math.random())],routerType:"replace",tabBadge1:Math.floor(10*Math.random()),tabBadge2:Math.floor(10*Math.random()),tabBadge3:Math.floor(10*Math.random())}}}},873:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Page",[e("Content",[e("router-view")],1),t._v(" "),e("Footer",[e("Tabs",{attrs:{tabsLayout:t.tabsLayout,tabsHighlight:""}},[e("Tab",{attrs:{routerType:t.routerType,to:{name:"tabs.index"},tabBadge:t.tabBadge1,tabTitle:t.$t("user"),tabBadgeStyle:"danger",tabIcon:"person"}}),t._v(" "),e("Tab",{attrs:{routerType:t.routerType,to:{name:"tabs.tab1"},tabBadge:t.tabBadge2,tabTitle:t.$t("cars"),tabBadgeStyle:"dark",tabIcon:"car"}}),t._v(" "),e("Tab",{attrs:{routerType:t.routerType,to:{name:"tabs.tab2"},tabBadge:t.tabBadge3,tabTitle:t.$t("star"),tabIcon:"star",disabled:!1}})],1)],1)],1)},staticRenderFns:[]}},980:function(t,a,e){e(870);var r=e(0)(e(872),e(873),"data-v-de1f17c8",null);t.exports=r.exports}});
//# sourceMappingURL=21.bb408a64cc3e57209047.js.map