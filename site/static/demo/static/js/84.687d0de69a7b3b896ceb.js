webpackJsonp([84],{675:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"InputDemo",i18n:{messages:{"zh-CN":{title:"输入验证",nickname:"昵称",nicknamePlaceholder:"中英文字母、数字、'-'、'_'组成",nicknameValidNotice:"输入的昵称有误, 请检查!",integer:"整数",integerPlaceholder:"请输入整数",integerValidNotice:"输入的整数有误, 请检查!",tel:"电话",telPlaceholder:"请输入电话",telValidNotice:"输入的电话有误, 请检查!",url:"Url",urlPlaceholder:"请输入url",urlValidNotice:"输入的url有误, 请检查!",phone:"手机号",phonePlaceholder:"请输入手机号",phoneValidNotice:"输入的手机号有误, 请检查!",email:"邮箱",emailPlaceholder:"请输入电话",emailValidNotice:"输入的电话有误, 请检查!",psw:"密码",pswPlaceholder:"密码需6-18位，以字母开头可含数字",pswValidNotice:"输入的密码有误, 请检查!",id:"身份证",idPlaceholder:"请输入身份证号码",idValidNotice:"输入的身份证有误, 请检查!",securityCode:"验证码",securityCodePlaceholder:"请输入至少4位",securityCodeValidNotice:"输入的验证码有误, 请检查!",cn:"中文",cnPlaceholder:"请输入中文",cnValidNotice:"输入的中文有误, 请检查!",qq:"QQ号",qqPlaceholder:"请输入QQ号",qqValidNotice:"输入的QQ有误, 请检查!",cus:"自定义数字格式",cusPlaceholder:"请输入XX-XX-XXX格式",cusValidNotice:"输入的格式有误, 请检查!"},"en-US":{title:"Valid",nickname:"Nickname",nicknamePlaceholder:"Consisting of Chinese and English letters, numbers, '-', '_'",nicknameValidNotice:"The nickname you entered is incorrect. Please check!",integer:"Integer",integerPlaceholder:"Please enter an integer",integerValidNotice:"The input integer is wrong, please check!",tel:"Tel",telPlaceholder:"Please enter the phone",telValidNotice:"The phone number entered is incorrect. Please check!",url:"Url",urlPlaceholder:"Please enter url",urlValidNotice:"The input url is wrong, please check!",phone:"Phone",phonePlaceholder:"Please enter phone number",phoneValidNotice:"The phone number entered is incorrect. Please check!",email:"Email",emailPlaceholder:"Please input your email",emailValidNotice:"The email entered is incorrect. Please check!",psw:"password",pswPlaceholder:"The password must be 6-18 digits, starting with the letters can contain numbers",pswValidNotice:"The password you entered is incorrect. Please check!",id:"ID card",idPlaceholder:"Please enter the ID number",idValidNotice:"The ID you entered is incorrect. Please check!",securityCode:"Code",securityCodePlaceholder:"Please enter at least 4 digits",securityCodeValidNotice:"The verification code entered is incorrect. Please check!",cn:"Chinese",cnPlaceholder:"Please enter Chinese",cnValidNotice:"There is an error in the Chinese input. Please check!",qq:"QQ NO.",qqPlaceholder:"Please enter QQ number",qqValidNotice:"The QQ entered is incorrect. Please check!",cus:"Custom number format",cusPlaceholder:"Please enter XX-XX-XXX format",cusValidNotice:"The input format is incorrect, please check!"}}},data:function(){return{testValue:"hello",testDisabled:!1}},methods:{onInvalidHandler:function(e){this.$toast(e)}}}},676:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Page",[i("Header",[i("Navbar",[i("Title",{attrs:{title:e.$t("title")}})],1)],1),e._v(" "),i("Content",[i("List",[i("ListHeader",[e._v("Demo")]),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("nickname")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("nicknamePlaceholder"),type:"nickName",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("nicknameValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("integer")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("integerPlaceholder"),type:"integer",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("integerValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("tel")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("telPlaceholder"),type:"tel",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("telValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("url")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("urlPlaceholder"),type:"url",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("urlValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("phone")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("phonePlaceholder"),type:"mobile",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("phoneValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("email")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("emailPlaceholder"),type:"email",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("emailValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("psw")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("pswPlaceholder"),type:"password",check:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("pswValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("id")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("idPlaceholder"),type:"idCard",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("idValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("securityCode")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("securityCodePlaceholder"),type:"securityCode",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("securityCodeValidNotice"))}}}),e._v(" "),i("span",{attrs:{slot:"item-right"},slot:"item-right"},[e._v("*CODE*")])],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("cn")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("cnPlaceholder"),type:"cn",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("cnValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("qq")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("qqPlaceholder"),type:"qq",check:"",clearInput:""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("qqValidNotice"))}}})],1),e._v(" "),i("Item",[i("Label",{attrs:{color:"primary"}},[e._v(e._s(e.$t("cus")))]),e._v(" "),i("Input",{attrs:{"show-focus-highlight":"","show-valid-highlight":"","show-invalid-highlight":"",placeholder:e.$t("cusPlaceholder"),type:"text",check:"",regex:/\d{2}-\d{2}-\d{3}/,"clear-input":""},on:{onInvalid:function(t){e.onInvalidHandler(e.$t("cusValidNotice"))}}})],1)],1)],1)],1)},staticRenderFns:[]}},933:function(e,t,i){var l=i(0)(i(675),i(676),null,null);e.exports=l.exports}});
//# sourceMappingURL=84.687d0de69a7b3b896ceb.js.map