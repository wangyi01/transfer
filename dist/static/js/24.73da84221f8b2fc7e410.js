(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"9aOt":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));const s=[{name:"全部运动强度",value:-1},{name:"低",value:1},{name:"中",value:2},{name:"高",value:3}],l=[{name:"启用",value:1},{name:"不启用",value:0}],i=[{name:"低",value:1},{name:"中",value:2},{name:"高",value:3}],n=[{name:"有氧",value:1},{name:"力量",value:2},{name:"柔韧性",value:3}],r=[{name:"日常运动",value:1},{name:"健身类",value:2},{name:"耐力类",value:3},{name:"跳绳类",value:4},{name:"舞蹈类",value:5},{name:"游泳类",value:6}]},COTN:function(t,e,a){"use strict";a.r(e);var s=a("9aOt"),l={name:"el_select_sport_style_mdl",data:()=>({show:!0,modalTitle:"选择运动方式",form:{name:"",state:-1,strengthDegree:-1,strengthDegreeList:s.d},table:{list:[],totalCount:0,currentPage:1,pageSize:5}}),mounted(){this.onLoad()},methods:{onLoad(){this.$nextTick(()=>{this.getList()})},async getList(){const t={name:this.form.name,state:this.form.state,strengthDegree:this.form.strengthDegree,pageNo:this.table.currentPage,pageSize:this.table.pageSize},e=await this.$api.sportListInterface.getSportLibraryListPage(t),{data:a}=e.data;a&&(this.table.list=a.list||[],this.table.totalCount=a.total)},onSearch(){this.table.currentPage=1,this.getList()},onVisible(t){t||this.$jDynamic.hide({component:"elSelectSportStyleMdl"})},save(){const t=this.$refs.table.selection;this.confirmfunc&&this.confirmfunc.call(this,{selection:t}),this.cancel()},cancel(){this.show=!1},handleChange(t){this.table.currentPage=t,this.getList()}}},i=(a("wCyL"),a("KHd+")),n=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"el-select-sport-style-mdl",attrs:{title:t.modalTitle,visible:t.show,width:"750px",alignFooter:"right","close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e},close:t.onVisible}},[a("div",{staticClass:"body"},[a("div",{staticClass:"header"},[a("el-form",{staticClass:"form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:""}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择运动强度"},model:{value:t.form.strengthDegree,callback:function(e){t.$set(t.form,"strengthDegree",e)},expression:"form.strengthDegree"}},t._l(t.form.strengthDegreeList,(function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"请输入运动名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onSearch}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.table.list,border:"","max-height":"450"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"运动名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"strengthDegree",label:"运动强度"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.strengthDegree?a("span",[t._v("低")]):t._e(),t._v(" "),2===e.row.strengthDegree?a("span",[t._v("中")]):t._e(),t._v(" "),3===e.row.strengthDegree?a("span",[t._v("高")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"met",label:"代谢当量MET"}})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.table.currentPage,"page-size":t.table.pageSize,layout:"prev, pager, next",total:t.table.totalCount},on:{"current-change":t.handleChange}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.save}},[t._v("确定")])],1)])}),[],!1,null,"77735904",null).exports,r={name:"create_edit",data:()=>({routeType:1,labelPosition:"top",form:{name:"",lifeStyleId:"",state:1,sportStyleList:[],sportStyleDataList:[],lifeStyleList:[],sportList:[],stateList:s.c}}),mounted(){this.onLoad()},methods:{async onLoad(){const t=this.$route;this.getLifeStyleListPage(),"intervention_template_create"===t.meta.type?this.routeType=1:"intervention_template_edit"===t.meta.type&&(this.routeType=2,await this.getSportStyleList(),await this.getDetail())},async getDetail(){const t={id:this.$route.params.id},e=await this.$api.interventionTemplateInterface.getInterveneTemplateById(t),{data:a}=e.data;this.form.name=a.name,this.form.lifeStyleId=a.lifeId,this.form.state=a.state;(a.sportId?a.sportId.split(","):[]).map(t=>this.form.sportStyleDataList.map(e=>t===e.id&&this.form.sportStyleList.push(e)))},async getLifeStyleListPage(){const t=await this.$api.lifeStyleInterface.getLifeStyleListPage({name:"",guideType:0,pageNo:1,pageSize:1e4}),{data:e}=t.data;if(e){(e.list||[]).map(t=>this.form.lifeStyleList.push(t))}},async getSportStyleList(){const t=await this.$api.sportListInterface.getSportLibraryListPage({name:"",state:-1,strengthDegree:-1,pageNo:1,pageSize:1e4}),{data:e}=t.data;if(e){(e.list||[]).map(t=>this.form.sportStyleDataList.push(t))}},selectSportStyle(){this.$jDynamic.show({component:"elSelectSportStyleMdl",data:{confirmfunc:async({selection:t})=>{t.map(t=>(this.form.sportStyleList.map(t=>t.id).includes(t.id)||this.form.sportStyleList.push(t),!0))}},render:t=>t(n)})},handleTagClose(t){this.form.sportStyleList.splice(t,1)},cancel(){this.$router.push({path:"/plan_center/intervention_template"})},async save(){const t=this.form.sportStyleList.map(t=>t.id);if(!this.form.name)return this.$message.warning("请输入模板名称");if(!this.form.lifeStyleId)return this.$message.warning("请选择生活方式");if(!t.length)return this.$message.warning("请选择运动方式");const e={name:this.form.name,lifeStyleId:this.form.lifeStyleId,sportIds:t.join(),state:this.form.state};1===this.routeType?await this.$api.interventionTemplateInterface.saveInterveneTemplate(e):2===this.routeType&&(e.id=this.$route.params.id,await this.$api.interventionTemplateInterface.updateInterveneTemplate(e)),1===this.routeType&&Object.assign(this.$data,this.$options.data()),this.$message.success("操作成功"),this.cancel()}}},o=(a("f6lM"),Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-edit"},[a("div",{staticClass:"person-title"},[t._v("干预模板")]),t._v(" "),a("el-form",{staticClass:"form-inline",attrs:{inline:!1,"label-position":t.labelPosition,model:t.form}},[a("el-row",[a("el-form-item",{attrs:{label:"模板名称"}},[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{maxlength:"15","show-word-limit":"",placeholder:"请输入模板名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"生活方式"}},[a("el-col",{attrs:{span:9}},[a("el-select",{attrs:{placeholder:"请选择生活方式"},model:{value:t.form.lifeStyleId,callback:function(e){t.$set(t.form,"lifeStyleId",e)},expression:"form.lifeStyleId"}},t._l(t.form.lifeStyleList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"运动方式"}},[a("el-col",{attrs:{span:9}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.selectSportStyle}},[t._v("选择")]),t._v(" "),a("div",{staticClass:"sport-style-list"},[a("div",{staticClass:"item"},t._l(t.form.sportStyleList,(function(e,s){return a("el-tag",{key:e.id,attrs:{closable:""},on:{close:function(e){return t.handleTagClose(s)}}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),1)])],1)],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"状态"}},[a("el-col",{attrs:{span:9}},t._l(t.form.stateList,(function(e){return a("el-radio",{key:e.name,attrs:{label:e.value},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}},[t._v(t._s(e.name)+"\n          ")])})),1)],1)],1),t._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)}),[],!1,null,"3deacf0d",null));e.default=o.exports},Rnxx:function(t,e,a){},f6lM:function(t,e,a){"use strict";a("nSP5")},nSP5:function(t,e,a){},wCyL:function(t,e,a){"use strict";a("Rnxx")}}]);