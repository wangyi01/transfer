(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+25Y":function(t,e,a){},"4/c5":function(t,e,a){"use strict";a.r(e);var s={name:"create_edit",components:{},data:()=>({form:{gridName:"",reportName:"",state:"",dangerShow:"",labelWidth:"113px"},rules:{gridName:[{required:!0,message:"请输入类别名称"}],reportName:[{required:!0,message:"请输入报告名称"}],state:[{required:!0,message:"请选择是否启用"}],dangerShow:[{required:!0,message:"请选择低危评估"}]},routeType:"",popoverStatus:!1,getlisttype:[],getlisttype1:[],getlisttype2:[],getlisttype3:[],getlisttype4:[],dropdownList:[{name:"测试"}],isCompareList:[{name:"是",value:"1"},{name:"否",value:"0"}],isCompareLists:[{name:"不显示",value:"0"},{name:"显示",value:"1"}],tablest:[{name:"封面前言",type:1,contentList:[]},{name:"综合健康信息",type:2,contentList:[]},{name:"疾病风险评估",type:3,contentList:[]},{name:"日常保健建议",type:4,contentList:[]},{name:"其他分析建议",type:5,contentList:[]}],table:[],section:{organItemLibraryId:"",list:[],totalCount:0,currentPage:1,pageSize:15}}),mounted(){this.onLoad()},methods:{onLoad(){const t=this.$route;this.getLibraryList(),[1,2,3,4,5].forEach(t=>{this.getDetailtypePush(t)}),"1"===t.meta.type?this.routeType=1:"2"===t.meta.type?(this.routeType=2,this.getDetail()):(this.routeType=3,this.getDetail())},handlePopoperClose(){this.popoverStatus=!1},onSelectSection(t){this.form.sectionName=t.sectionName},dropdownChange(t){const e=this.dropdownList[t].name;this.form.sectionName=e},async getLibraryList(){const t=await this.$api.physicalProjectListInterface.listOrganItemLibrary(),{data:e}=t.data;this.form.libraryList=e},async getDetail(){const t={id:this.$route.params.id},e=await this.$api.categoryManage.getdetails(t),{data:a}=e.data;this.form.gridName=a.gridName,this.form.reportName=a.reportName,this.form.state=a.state,this.form.dangerShow=a.dangerShow,this.tablest.forEach(t=>{t.contentList.forEach(t=>{const e=t;a.paramCodeList.forEach(t=>{e.code===t&&(e.checked=!0)})})})},async getDetailtypePush(t){const e=t,a={paramType:t},s=await this.$api.categoryManage.getdetailtype(a),{data:i}=s.data;console.log(i),i.forEach(t=>{this.tablest[e-1].contentList.push({name:t.name,code:t.code,checked:!1})})},cancel(){this.$router.push({path:"/category_manage"})},async save(){const t=[];this.tablest.forEach(e=>{e.contentList.forEach(e=>{!0===e.checked&&t.push(e.code)})}),this.$refs.form.validate(async e=>{if(e){const e={gridName:this.form.gridName,reportName:this.form.reportName,state:this.form.state,dangerShow:this.form.dangerShow,paramCodeList:t};e.id=this.$route.params.id,await this.$api.categoryManage.clientGridSave(e),this.$message.success("操作成功"),this.cancel()}})}}},i=(a("LR2+"),a("KHd+")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-edit"},[a("el-form",{ref:"form",staticClass:"form-inline",attrs:{rules:t.rules,inline:!1,model:t.form,"label-position":"right"}},[a("div",{staticClass:"form-title"},[1===t.routeType?a("h3",{staticClass:"name"},[t._v("新增-用户类别"),a("div",{staticClass:"titleBiao"})]):t._e(),t._v(" "),2===t.routeType?a("h3",{staticClass:"name"},[t._v("编辑-用户类别"),a("div",{staticClass:"titleBiao"})]):t._e(),t._v(" "),3===t.routeType?a("h3",{staticClass:"name"},[t._v("查看-用户类别\n        "),a("div",{staticClass:"titleBiao"})]):t._e()]),t._v(" "),a("div",{staticClass:"mt20"},[a("div",{staticClass:"row"},[a("el-form-item",{staticStyle:{width:"23%"},attrs:{label:"类别名称：","label-width":"82px",prop:"gridName"}},[3==t.routeType?a("span",[t._v(t._s(t.form.gridName))]):t._e(),t._v(" "),3!=t.routeType?a("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:"30",placeholder:"请输入"},model:{value:t.form.gridName,callback:function(e){t.$set(t.form,"gridName",e)},expression:"form.gridName"}}):t._e()],1),t._v(" "),a("el-form-item",{staticStyle:{width:"23%"},attrs:{label:"报告名称：","label-width":"82px",prop:"reportName"}},[3==t.routeType?a("span",[t._v(t._s(t.form.reportName))]):t._e(),t._v(" "),3!=t.routeType?a("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:"30",placeholder:"请输入"},model:{value:t.form.reportName,callback:function(e){t.$set(t.form,"reportName",e)},expression:"form.reportName"}}):t._e()],1),t._v(" "),a("el-form-item",{staticStyle:{width:"25%"},attrs:{label:"是否启用：",prop:"state","label-width":"83px"}},[3==t.routeType?a("span",[t._v(t._s(0==t.form.state?"否":"是"))]):t._e(),t._v(" "),3!=t.routeType?a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择是否启用"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}},t._l(t.isCompareList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.value}})})),1):t._e()],1),t._v(" "),a("el-form-item",{staticStyle:{width:"23%"},attrs:{label:"低危评估：",prop:"dangerShow","label-width":"83px"}},[3==t.routeType?a("span",[t._v(t._s(0==t.form.state?"不显示":"显示"))]):t._e(),t._v(" "),3!=t.routeType?a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择低危评估"},model:{value:t.form.dangerShow,callback:function(e){t.$set(t.form,"dangerShow",e)},expression:"form.dangerShow"}},t._l(t.isCompareLists,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.value}})})),1):t._e()],1)],1),t._v(" "),a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticClass:"form-title"},[a("h3",{staticClass:"name"},[t._v("内容"),a("div",{staticClass:"titleBiao"})])]),t._v(" "),t._l(t.tablest,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"wltitle"},[a("div",{staticClass:"quan"}),t._v(" "),a("span",[t._v(t._s(e.name))])]),t._v(" "),t._l(e.contentList,(function(e){return a("el-checkbox",{key:e.id,staticStyle:{width:"23%",margin:"20px 0 !important"},attrs:{disabled:3===t.routeType},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"it.checked"}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)}))],2),t._v(" "),a("div",{staticClass:"handle-btn mt10 mb30"},[a("el-button",{staticClass:"cancelBtn",on:{click:t.cancel}},[t._v("返回")]),t._v(" "),1===t.routeType?a("el-button",{staticClass:"add-btn",attrs:{type:"primary",size:"small"},on:{click:t.save}},[t._v("保存")]):t._e(),t._v(" "),2===t.routeType?a("el-button",{staticClass:"add-btn",attrs:{type:"primary",size:"small"},on:{click:t.save}},[t._v("修改")]):t._e()],1)])])],1)}),[],!1,null,"0aa5b48a",null);e.default=r.exports},"LR2+":function(t,e,a){"use strict";a("+25Y")}}]);