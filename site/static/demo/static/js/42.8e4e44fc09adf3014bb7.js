webpackJsonp([42],{902:function(t,o,n){var e=n(903);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(522)("7772e5c4",e,!0)},903:function(t,o,n){o=t.exports=n(521)(),o.push([t.i,".main{height:100%}","",{version:3,sources:["/Users/Hsiang/GitHub/vimo/demo/src/components/toolbar.vue"],names:[],mappings:"AACA,MACE,WAAa,CACd",file:"toolbar.vue",sourcesContent:["\n.main {\n  height: 100%;\n}\n"],sourceRoot:""}])},904:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{relationship8:"friend1",relationship9:"friend2",myInput1:"",myInput2:"",myInput3:""}},methods:{toolbarButtonClick:function(t){alert(t)},onSegmentChange8:function(t){this.relationship8=t},onSelectChangeFriend1:function(t){console.debug("segment8 friend1 select:"+t)},onSelectChangeFriend2:function(t){console.debug("segment8 friend2 select:"+t)},onSegmentChange9:function(t){this.relationship9=t},onInput:function(t){console.debug("outer-onInput:")},onCancel:function(t){console.debug("outer-onCancel:")},onClear:function(t){console.debug("outer-onClear:")},onBlur:function(t){console.debug("outer-onBlur:")},onFocus:function(t){console.debug("outer-onFocus:")}},created:function(){},mounted:function(){console.debug("this.count-toolbar"),console.debug(this.count)},activated:function(){}}},905:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("Page",[n("Header",[n("Navbar",[n("Buttons",{attrs:{slot:"buttons",left:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"},on:{click:function(o){t.toolbarButtonClick("contact")}}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1),t._v(" "),n("Button",{attrs:{"icon-only":"",role:"bar-button"},on:{click:function(o){t.toolbarButtonClick("more")}}},[n("Icon",{staticClass:"icon",attrs:{name:"more"}})],1)],1),t._v(" "),n("Title",[t._v("Toolbar")]),t._v(" "),n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"},on:{click:function(o){t.toolbarButtonClick("search")}}},[n("Icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1)],1)],1),t._v(" "),n("Content",[n("Toolbar",{attrs:{color:"primary"}},[n("Title",[t._v("This is a long title long title")])],1),t._v(" "),n("Toolbar",{attrs:{color:"danger"}},[n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1),t._v(" "),n("Button",{attrs:{"icon-only":"",role:"bar-button"}},[n("Icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"}},[n("Icon",{staticClass:"icon",attrs:{name:"more"}})],1)],1),t._v(" "),n("Title",[t._v("My Toolbar Title")])],1),t._v(" "),n("Toolbar",[n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",color:"danger"}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",color:"secondary"}},[n("Icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",color:"danger"}},[n("Icon",{staticClass:"icon",attrs:{name:"more"}})],1)],1),t._v(" "),n("Title",[t._v("My Toolbar Title")])],1),t._v(" "),n("Toolbar",[n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",type:"solid"}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-right":"",role:"bar-button",color:"secondary",type:"solid"}},[n("span",[t._v("Help")]),t._v(" "),n("Icon",{staticClass:"icon",attrs:{name:"help-circle"}})],1)],1),t._v(" "),n("Title",[t._v("Solid")])],1),t._v(" "),n("Toolbar",[n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",outline:""}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",start:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button",outline:"",color:"danger"}},[n("Icon",{staticClass:"icon",attrs:{name:"contact"}})],1)],1),t._v(" "),n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-right":"",role:"bar-button",color:"secondary",outline:""}},[n("span",[t._v("Help")]),t._v(" "),n("Icon",{staticClass:"icon",attrs:{name:"help-circle"}})],1)],1),t._v(" "),n("Title",[t._v("Outline")])],1),t._v(" "),n("Toolbar",[n("Button",{attrs:{slot:"buttons",left:"","icon-only":"",role:"bar-button",menutoggle:""},slot:"buttons"},[n("Icon",{staticClass:"icon",attrs:{name:"menu"}})],1),t._v(" "),n("Title",[t._v("Left Menu")])],1),t._v(" "),n("Toolbar",[n("Button",{attrs:{slot:"buttons",right:"","icon-only":"",role:"bar-button",menutoggle:""},slot:"buttons"},[n("Icon",{staticClass:"icon",attrs:{name:"menu"}})],1),t._v(" "),n("Title",[t._v("Right Menu")])],1),t._v(" "),n("Toolbar",[n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"}},[n("Icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1),t._v(" "),n("Title",[t._v("Right Menu")])],1),t._v(" "),n("Toolbar",[n("Buttons",{attrs:{slot:"buttons",end:""},slot:"buttons"},[n("Button",{attrs:{"icon-only":"",role:"bar-button"}},[n("Icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1),t._v(" "),n("Segment",{attrs:{value:t.relationship8,color:"danger"},on:{ionChange:t.onSegmentChange8}},[n("SegmentButton",{attrs:{value:"friend1"},on:{ionSelect:t.onSelectChangeFriend1}},[t._v("friend1")]),t._v(" "),n("SegmentButton",{attrs:{value:"friend2"},on:{ionSelect:t.onSelectChangeFriend2}},[t._v("friend2")])],1)],1),t._v(" "),n("Toolbar",[n("Segment",{attrs:{value:t.relationship9},on:{ionChange:t.onSegmentChange9}},[n("SegmentButton",{attrs:{value:"friend1"}},[t._v("friend1")]),t._v(" "),n("SegmentButton",{attrs:{value:"friend2"}},[t._v("friend2")]),t._v(" "),n("SegmentButton",{attrs:{value:"friend3"}},[t._v("friend2")])],1)],1),t._v(" "),n("Toolbar",[n("Searchbar",{attrs:{animated:!0,debounce:1e3,mode:"ios",showCancelButton:!0,cancelButtonText:"取消"},on:{ionInput:t.onInput,ionFocus:t.onFocus,ionBlur:t.onBlur,ionCancel:t.onCancel,ionClear:t.onClear},model:{value:t.myInput1,callback:function(o){t.myInput1=o},expression:"myInput1"}})],1),t._v(" "),n("Toolbar",{attrs:{color:"primary"}},[n("Searchbar",{attrs:{animated:!0,debounce:1e3,showCancelButton:!0,cancelButtonText:"取消"},on:{ionInput:t.onInput,ionFocus:t.onFocus,ionBlur:t.onBlur,ionCancel:t.onCancel,ionClear:t.onClear},model:{value:t.myInput2,callback:function(o){t.myInput2=o},expression:"myInput2"}})],1)],1),t._v(" "),n("Footer",[n("Toolbar",[n("Searchbar",{attrs:{animated:!1,debounce:1e3,showCancelButton:!0,cancelButtonText:"取消"},on:{ionInput:t.onInput,ionFocus:t.onFocus,ionBlur:t.onBlur,ionCancel:t.onCancel,ionClear:t.onClear},model:{value:t.myInput3,callback:function(o){t.myInput3=o},expression:"myInput3"}})],1)],1)],1)},staticRenderFns:[]}},991:function(t,o,n){n(902);var e=n(0)(n(904),n(905),null,null);t.exports=e.exports}});
//# sourceMappingURL=42.8e4e44fc09adf3014bb7.js.map