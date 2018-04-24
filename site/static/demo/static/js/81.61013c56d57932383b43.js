webpackJsonp([81],{758:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DemoNormalPick",i18n:{messages:{"zh-CN":{title:"基础使用",confirm:"确认",cancel:"取消"},"en-US":{title:"Basic Usage",confirm:"Confirm",cancel:"Cancel"}}},data:function(){return{smoothie:"",timer:""}},methods:{oneColumns:function(){var t=this,e=[{text:"Mango"},{text:"Banana"},{text:"Cherry"},{text:"Strawberry"},{text:"Raspberry"},{text:"Blueberry"},{text:"Peach"},{text:"Coconut"},{text:"Pineapple"},{text:"Honeydew"},{text:"Watermelon"},{text:"Grape"},{text:"Avocado"},{text:"Kiwi"},{text:"Orange"},{text:"Papaya"}],n=e.indexOf(e.filter(function(e){return t.smoothie.toString().toLowerCase().indexOf(e.text.toString().toLowerCase())>-1})[0]),o={buttons:[{text:this.$t("cancel"),role:"cancel",handler:function(t){console.log(JSON.stringify(t))}},{text:this.$t("confirm"),handler:function(e){t.smoothie=""+e.flavor1.value}}],columns:[{name:"flavor1",selectedIndex:n,options:e}]};this.$picker.present(o)},twoColumns:function(){var t=this;this.$picker.present({buttons:[{text:this.$t("cancel"),role:"cancel"},{text:this.$t("confirm"),handler:function(e){t.smoothie=e.flavor1.value+" "+e.flavor2.value,console.log(e),console.log(e),console.log(JSON.stringify(e))}}],columns:[{name:"flavor1",align:"right",selectedIndex:1,options:[{text:"Mango"},{text:"Banana"},{text:"Cherry"},{text:"Strawberry"},{text:"Raspberry"},{text:"Blueberry"},{text:"Peach"},{text:"Coconut"},{text:"Pineapple"},{text:"Honeydew"},{text:"Watermelon"},{text:"Grape"},{text:"Avocado"},{text:"Kiwi"},{text:"Orange"},{text:"Papaya"}]},{name:"flavor2",align:"left",selectedIndex:3,options:[{text:"Banana"},{text:"Orange"},{text:"Grape"},{text:"Watermelon"},{text:"Strawberry"},{text:"Papaya"},{text:"Kiwi"},{text:"Cherry"},{text:"Raspberry"},{text:"Mango"},{text:"Pineapple"},{text:"Peach"},{text:"Avocado"},{text:"Honeydew"},{text:"Blueberry"},{text:"Coconut"}]}]})},threeColumns:function(){var t=this;this.$picker.present({buttons:[{text:this.$t("cancel"),role:"cancel"},{text:this.$t("confirm"),handler:function(e){t.smoothie=e.flavor1.value+" "+e.flavor2.value,console.log(e),console.log(e),console.log(JSON.stringify(e))}}],columns:[{name:"flavor1",align:"right",selectedIndex:1,options:[{text:"Mango"},{text:"Banana"},{text:"Cherry"},{text:"Strawberry"},{text:"Raspberry"},{text:"Blueberry"},{text:"Peach"},{text:"Coconut"},{text:"Pineapple"},{text:"Honeydew"},{text:"Watermelon"},{text:"Grape"},{text:"Avocado"},{text:"Kiwi"},{text:"Orange"},{text:"Papaya"}]},{name:"flavor2",align:"left",selectedIndex:3,options:[{text:"Banana"},{text:"Orange"},{text:"Grape"},{text:"Watermelon"},{text:"Strawberry"},{text:"Papaya"},{text:"Kiwi"},{text:"Cherry"},{text:"Raspberry"},{text:"Mango"},{text:"Pineapple"},{text:"Peach"},{text:"Avocado"},{text:"Honeydew"},{text:"Blueberry"},{text:"Coconut"}]},{name:"flavor3",align:"left",selectedIndex:5,options:[{text:"Banana"},{text:"Orange"},{text:"Grape"},{text:"Watermelon"},{text:"Strawberry"},{text:"Papaya"},{text:"Kiwi"},{text:"Cherry"},{text:"Raspberry"},{text:"Mango"},{text:"Pineapple"},{text:"Peach"},{text:"Avocado"},{text:"Honeydew"},{text:"Blueberry"},{text:"Coconut"}]}]})},prefixLabel:function(){var t=this;this.$picker.present({isH5:!0,buttons:[{text:"Nerp",role:"cancel"},{text:"Woot!",handler:function(e){t.smoothie=""+e.flavor1.value}}],columns:[{name:"flavor1",align:"left",prefix:"Flavor",options:[{text:"Mango"},{text:"Banana"},{text:"Cherry"},{text:"Strawberry"},{text:"Raspberry"},{text:"Blueberry"},{text:"Peach"},{text:"Coconut"},{text:"Pineapple"},{text:"Honeydew"},{text:"Watermelon"},{text:"Grape"},{text:"Avocado"},{text:"Kiwi"},{text:"Orange"},{text:"Papaya"}]}]})},suffixLabel:function(){var t=this;this.$picker.present({isH5:!0,buttons:[{text:"No",role:"cancel"},{text:"Si",handler:function(e){t.smoothie=""+e.flavor1.value}}],columns:[{name:"flavor1",align:"right",suffix:"flavor",options:[{text:"Mango"},{text:"Banana"},{text:"Cherry"},{text:"Strawberry"},{text:"Raspberry"},{text:"Blueberry"},{text:"Peach"},{text:"Coconut"},{text:"Pineapple"},{text:"Honeydew"},{text:"Watermelon"},{text:"Grape"},{text:"Avocado"},{text:"Kiwi"},{text:"Orange"},{text:"Papaya"}]}]})},columnSizes:function(){for(var t=this,e={name:"hour",suffix:"hour",optionsWidth:"50px",align:"right",options:Array.apply(null,{length:24}).map(Number.call,Number)},n=[],o=0;o<60;o++)n.push({text:o,value:("0"+o).slice(-2)});var a={name:"min",suffix:"min",optionsWidth:"80px",align:"left",options:n};this.$picker.present({isH5:!0,buttons:[{text:"Cancel",role:"cancel"},{text:"Set Timer",handler:function(e){t.timer=e.hour.value+":"+e.min.value}}],columns:[e,a]})}}}},759:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[n("Header",[n("Navbar",[n("Title",[t._v(t._s(t.$t("title")))])],1)],1),t._v(" "),n("Content",{staticClass:"outer-content",attrs:{padding:""}},[n("Button",{attrs:{block:""},on:{click:t.oneColumns}},[t._v("1 Columns")]),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.twoColumns}},[t._v("2 Columns")]),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.threeColumns}},[t._v("3 Columns")]),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.prefixLabel}},[t._v("Prefix Label")]),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.suffixLabel}},[t._v("Suffix Label")]),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.columnSizes}},[t._v("Columns with sizes")]),t._v(" "),n("p",{attrs:{padding:""}},[n("code",[t._v("Smoothie: "+t._s(t.smoothie))]),n("br"),t._v(" "),n("code",[t._v("Timer: "+t._s(t.timer))]),n("br")])],1)],1)},staticRenderFns:[]}},955:function(t,e,n){var o=n(0)(n(758),n(759),null,null);t.exports=o.exports}});
//# sourceMappingURL=81.61013c56d57932383b43.js.map