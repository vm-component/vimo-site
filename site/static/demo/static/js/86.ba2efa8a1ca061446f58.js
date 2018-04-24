webpackJsonp([86],{659:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DemoIndicator",i18n:{messages:{"zh-CN":{title:"指示器",noticeInfo1:"Loading的简单版, 用于无提示的Loading使用场景, 且开启最多存在10s, 10s后自动关闭. 如果路由切换则关闭组件",noticeInfo2:"70ms期间执行dismiss则不再显示Indicator",noticeInfo3:"present和dismiss乱序调用"},"en-US":{title:"Indicator",noticeInfo1:"A simple version of Loading, used for silent loading scenarios, with up to 10 seconds on, and off automatically after 10 seconds. If the route is switched, the component is closed.",noticeInfo2:"Dismiss the indicator no longer appears during 70ms",noticeInfo3:"Present and dismiss out of order calls"}}},data:function(){return{}},methods:{special:function(){var i=this;this.$indicator.present(),this.$indicator.present(),this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},20),setTimeout(function(){i.$indicator.dismiss()},100),setTimeout(function(){i.$indicator.dismiss()},200),setTimeout(function(){i.$indicator.present()},200),setTimeout(function(){i.$indicator.dismiss()},400)},openIndicatorInfinity:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},1e4)},openIndicator1000:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},1e3)},openIndicatorReverse1000:function(){var i=this;this.$indicator.present(!0),setTimeout(function(){i.$indicator.dismiss()},1e3)},openIndicator300:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},300)},openIndicator100:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},100)},openIndicator70:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},70)},openIndicator50:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},50)},openIndicator5:function(){var i=this;this.$indicator.present(),setTimeout(function(){i.$indicator.dismiss()},5)}}}},660:function(i,t){i.exports={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("Page",[e("Header",[e("Navbar",[e("Title",[i._v(i._s(i.$t("title")))])],1)],1),i._v(" "),e("Content",{staticClass:"outer-content",attrs:{padding:""}},[e("p",[i._v(i._s(i.$t("noticeInfo1")))]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicatorInfinity}},[i._v("Open infinity(max 10s)")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator1000}},[i._v("Open 1000ms")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicatorReverse1000}},[i._v("Open 1000ms In Reverse Color")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator300}},[i._v("Open 300ms")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator100}},[i._v("Open 100ms")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator70}},[i._v("Open 70ms")]),i._v(" "),e("p",[i._v(i._s(i.$t("noticeInfo2")))]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator50}},[i._v("Open 50ms")]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.openIndicator5}},[i._v("Open 5ms")]),i._v(" "),e("p",[i._v(i._s(i.$t("noticeInfo3")))]),i._v(" "),e("Button",{attrs:{block:""},on:{click:i.special}},[i._v("Special")]),i._v(" "),e("article",[e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")]),i._v(" "),e("p",[i._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis\n                perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.")])])],1)],1)},staticRenderFns:[]}},928:function(i,t,e){var o=e(0)(e(659),e(660),null,null);i.exports=o.exports}});
//# sourceMappingURL=86.ba2efa8a1ca061446f58.js.map