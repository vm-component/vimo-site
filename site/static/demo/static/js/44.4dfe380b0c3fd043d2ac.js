webpackJsonp([44],{579:function(t,e,i){var n=i(580);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(522)("6f75d0ae",n,!0)},580:function(t,e,i){e=t.exports=i(521)(),e.push([t.i,"#backdropInDiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:100px;background:#ddd;position:relative}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/backdrop.vue"],names:[],mappings:"AACA,eACE,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,iBAAmB,CACpB",file:"backdrop.vue",sourcesContent:["\n#backdropInDiv {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100px;\n  background: #ddd;\n  position: relative;\n}\n"],sourceRoot:""}])},581:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={i18n:{messages:{"zh-CN":{title:"幕布"},"en-US":{title:"Backdrop"}}},data:function(){return{isActive:!1,isActiveInner:!1,top:0,left:0}},methods:{present:function(){this.isActive=!0,this.top=0,this.left=0},presentWithTopWhite:function(){this.top=100,this.left=0,this.isActive=!0},presentWithRightWhite:function(){this.top=0,this.left=-100,this.isActive=!0},presentWithBottomWhite:function(){this.top=-100,this.left=0,this.isActive=!0},presentWithLeftWhite:function(){this.top=0,this.left=100,this.isActive=!0}}}},582:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Page",[i("Header",[i("Navbar",[i("Title",[t._v(t._s(t.$t("title")))])],1)],1),t._v(" "),i("Content",{attrs:{padding:""}},[i("p",[i("strong",[t._v("Normal")])]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.present}},[t._v("Open Backdrop")]),t._v(" "),i("p",[i("strong",[t._v("top: 100px")])]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.presentWithTopWhite}},[t._v("Open Backdrop")]),t._v(" "),i("p",[i("strong",[t._v("left: 100px")])]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.presentWithRightWhite}},[t._v("Open Backdrop")]),t._v(" "),i("p",[i("strong",[t._v("bottom: 100px")])]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.presentWithBottomWhite}},[t._v("Open Backdrop")]),t._v(" "),i("p",[i("strong",[t._v("right: 100px")])]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.presentWithLeftWhite}},[t._v("Open Backdrop")]),t._v(" "),i("p",[i("strong",[t._v("Inner present")])]),t._v(" "),i("div",{attrs:{id:"backdropInDiv"}},[i("Backdrop",{attrs:{isActive:t.isActiveInner,bdClick:function(){t.isActiveInner=!t.isActiveInner}}}),t._v(" "),i("span",[t._v("Hello, Vimo!")])],1),t._v(" "),i("Button",{attrs:{block:""},on:{click:function(e){t.isActiveInner=!t.isActiveInner}}},[t._v("Open Backdrop")]),t._v(" "),i("Backdrop",{attrs:{isActive:t.isActive,bdClick:function(){t.isActive=!t.isActive},top:t.top,left:t.left,fixed:!0}})],1)],1)},staticRenderFns:[]}},909:function(t,e,i){i(579);var n=i(0)(i(581),i(582),null,null);t.exports=n.exports}});
//# sourceMappingURL=44.4dfe380b0c3fd043d2ac.js.map