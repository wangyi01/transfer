(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{FwIR:function(t,e,s){},PBvC:function(t,e,s){"use strict";s.r(e);var o=s("kaQf"),a=s("L2JU"),i={name:"Login",data:()=>({loginForm:{username:"admin",password:"1234a"},loginRules:{username:[{required:!0,message:"账号不能为空"}],password:[{required:!0,message:"密码不能为空"}]},loginResult:{},organizationInfo:{}}),computed:{...Object(a.mapState)({tagNavList:t=>t.app.tagNavList})},mounted(){document.addEventListener("keyup",this.handleKeyUp)},beforeDestroy(){document.removeEventListener("keyup",this.handleKeyUp)},methods:{...Object(a.mapMutations)({setTagNavList:"app/SET_TAG_NAV_LIST"}),handleSubmit(){this.$refs.loginForm.validate(t=>{t&&this.login()})},forgetPassword(){this.$router.push("/forget_password")},login(){this.$api.loginInterface.login({mobile:this.loginForm.username,password:this.loginForm.password}).then(t=>{const{data:e}=t;console.log(t),this.loginResult=e.data||{},this.redirectHome()})},redirectHome(){this.storeLoginInfo(),this.clearTagsNav()},storeLoginInfo(){Object(o.t)(this.loginResult.token),Object(o.n)("HK_USER_INFO",JSON.stringify(this.loginResult)),this.$router.push({name:"home"})},handleKeyUp(t){13===t.keyCode&&this.handleSubmit()},clearTagsNav(){const t=this.tagNavList.filter(t=>"home"===t.name);this.setTagNavList(t)}}},n=(s("Y3S2"),s("KHd+")),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("div",{staticClass:"login-content"},[s("div",{staticClass:"login-content-wrapper"},[s("div",{staticClass:"content-main"},[s("div",{staticClass:"content-center"},[t._m(0),t._v(" "),s("div",{staticClass:"login-form"},[s("h2",{staticClass:"login-title"},[t._v("Login")]),t._v(" "),s("el-form",{ref:"loginForm",staticClass:"inputCommon",attrs:{model:t.loginForm,rules:t.loginRules}},[s("el-form-item",{attrs:{label:"账号",prop:"username"}},[s("el-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),t._v(" "),s("div",{staticClass:"forget-password"},[s("span",{on:{click:t.forgetPassword}},[t._v("忘记密码?")])]),t._v(" "),s("el-button",{staticClass:"login-button",attrs:{type:"primary",size:"small"},on:{click:t.handleSubmit}},[t._v("登 录")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-header"},[e("h3",[this._v("WELCOME TO")]),this._v(" "),e("h2",{staticClass:"login-brand"},[this._v("健康管理系统")])])}],!1,null,"72d04f68",null);e.default=r.exports},Y3S2:function(t,e,s){"use strict";s("FwIR")}}]);