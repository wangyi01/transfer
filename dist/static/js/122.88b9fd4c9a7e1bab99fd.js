(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"6dXJ":function(t,a,e){},ZVhf:function(t,a,e){"use strict";e("6dXJ")},ly8M:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC30lEQVRoQ+2Xz0sUYRzGn2fcTUQpAqGg8BbCzuyytEQEEhJ0UOofiMIIu9SprhFGePcUQSCB4MlbIHrwYNQhLZN1ZiCiUxgRHgIRf6SzT6xgmK46M+8stTBz3e/zfJ/P+33fd3aIBn/Y4PmRAvzrCaYTSCdguAJ120Lq7s5gaWkIpNDe/pDT01uGWWvK6wfg5IYl3Kl2JTlMz+9vGAA5uQEJT3YHpsUBuv7TpCESn4Dy9m1V9LJWUIJ99P2RJCESBZDjXAU0LilbE4DcBK1euu5UUhCJAchxClDljYDjh4UjsAyrqYuu6yYBkQiACoWzqATvJJ0JE4rkIqymS1xYWAxTf8SCmFmoVDqBjbW3EpwoTiRdtLZ1cWZmOYpub63RBFQqZbG+PinoSpwQJKbQ3NLLubnNOPrtKzqusKqTY49IumXiQXKEnt8X1yM2gBx7UNKjuI33vCMG6fqP43jFAlDevquKXsRpeJCGtPrpecNRPSMDKJ/vgSqvJGWiNjv0NiG3YOE6F/zJKL6RAFQonEcQvBbUFqVJ2FqCK8hkLrNcng+vCVm5fdcHwXtBp0NKYpUR+I5M9gLL5W9hDEJPQLZ9AcCDv0wJC0C3pFNhmu27w8kfAKYhVHb9JpBD9LwPYTxDAxxkpkKhU8HWpzDN9gFksp0slz/H0e5ozAFKpazW137FCcGcneHYWBBHmwLsrED170Q6AYM9lJ6BdAult5DBAapKG34LbUM4uXEJvVHWguQ4Pf9aFE2tWuNb6M/7IJ8/ibZKOL8VS3Tdn6bhq/pwDZPoVCePRADU09OMxa/3IBQBNh2eVQGEeXR0POfExIYpVzIAtj0q6EaUMKQ1Ss+7GUVTtzMgx16V1BIlDMlVen5rFE09AWYlVT94Qj8EZ+n7F0MLDihMZgsVi+ewtfkMUBE64gxQAcB5HMN9fvS//BcApiFM9IlMwCSAqTYFMF1BU306AdMVNNU3/AR+AwvyIUD0BsOnAAAAAElFTkSuQmCC"},ubTV:function(t,a,e){"use strict";e.r(a);var s=e("kaQf"),l={name:"report_detail",props:["id"],data:()=>({formData:{sectionConclusionList:[],abnormalList:[],notMatchAbnormalList:[]},templateName:"",libraryName:"",abnormalLevelMap:{1:"I",2:"II",3:"III",4:"IV",5:"V"}}),mounted(){this.fetch(this.id)},methods:{fetch(t){this.$api.reportInterface.getReportDetail(t).then(({data:t})=>{t.success&&(this.formData=t.data,this.formData.sectionConclusionList||this.$set(this.formData,"sectionConclusionList",[]),this.formData.abnormalList||this.$set(this.formData,"abnormalList",[]),this.formData.notMatchAbnormalList||this.$set(this.formData,"notMatchAbnormalList",[]),this.queryTemplate(),this.queryLibrary())})},queryTemplate(){this.$api.reportInterface.getTemplate({pageNo:1,pageSize:s.a}).then(({data:t})=>{t.data.list.forEach(t=>{t.id===this.formData.reportTemplateId&&(this.templateName=t.name)})})},queryLibrary(){this.$api.reportInterface.getOrganType().then(({data:t})=>{t.data.forEach(t=>{t.id===this.formData.libraryId&&(this.libraryName=t.name)})})}}},i=(e("ZVhf"),e("KHd+")),n=Object(i.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail-content"},[s("div",{staticClass:"title"},[t._v("查看体检报告-基本信息")]),t._v(" "),s("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"90px","label-suffix":"：",disabled:""}},[s("el-row",[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"姓名",prop:"clientId"}},[s("el-input",{model:{value:t.formData.clientName,callback:function(a){t.$set(t.formData,"clientName",a)},expression:"formData.clientName"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"体检编号",prop:"reportNo"}},[s("el-input",{model:{value:t.formData.reportNo,callback:function(a){t.$set(t.formData,"reportNo",a)},expression:"formData.reportNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"体检日期",prop:"reportDate"}},[s("el-input",{model:{value:t.formData.reportDate,callback:function(a){t.$set(t.formData,"reportDate",a)},expression:"formData.reportDate"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"体检机构",prop:"examinationOrgan"}},[s("el-input",{model:{value:t.formData.examinationOrgan,callback:function(a){t.$set(t.formData,"examinationOrgan",a)},expression:"formData.examinationOrgan"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"录入模板",prop:"reportTemplateId"}},[s("el-input",{model:{value:t.templateName,callback:function(a){t.templateName=a},expression:"templateName"}})],1)],1)],1)],1),t._v(" "),t.formData.sectionConclusionList.length>0?[s("div",{staticClass:"title physical-examination-info"},[t._v("体检信息")]),t._v(" "),t._l(t.formData.sectionConclusionList,(function(a,l){return s("div",{key:l,staticClass:"section-conclusion-item"},[s("div",{staticClass:"top"},[s("span",{staticClass:"section-name"},[t._v(t._s(a.sectionName))])]),t._v(" "),s("div",{staticClass:"center"},[s("el-table",{attrs:{data:a.itemList}},[s("el-table-column",{attrs:{prop:"itemName",label:"名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"itemValue",label:"结果"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[s("span",[t._v(t._s(a.row.itemValue))]),t._v(" "),1===a.row.judageValue?s("img",{staticClass:"qushi",staticStyle:{width:"24px",height:"24px","vertical-align":"bottom"},attrs:{src:e("ly8M"),alt:""}}):t._e(),t._v(" "),-1===a.row.judageValue?s("img",{staticClass:"qushi",staticStyle:{width:"24px",height:"24px","vertical-align":"bottom"},attrs:{src:e("ly8M"),alt:""}}):t._e()])]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"refRange",label:"正常参考"}}),t._v(" "),s("el-table-column",{attrs:{prop:"itemUnit",label:"单位"}}),t._v(" "),s("el-table-column",{attrs:{prop:"attention",label:"是否关注指标"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v("\n                "+t._s("2"===a.row.attention?"是":"0"===a.row.attention?"否":"")+"\n              ")])]}}],null,!0)})],1)],1),t._v(" "),a.conclusion?s("div",{staticClass:"bottom"},[s("div",[t._v("科室小结")]),t._v(" "),s("div",{staticClass:"bottom-conclusion"},[t._v(t._s(a.conclusion))])]):t._e()])}))]:t._e(),t._v(" "),t.formData.abnormalList.length>0||t.formData.notMatchAbnormalList.length>0?[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"abnormal-list"},[t._l(t.formData.abnormalList,(function(a){return s("div",{key:a.abnormalCode,class:"abnormal-item level"+a.dangerLevel},[s("span",{staticClass:"abnormal-number"},[t._v(t._s(t.abnormalLevelMap[a.dangerLevel]))]),t._v(" "),s("span",{staticClass:"abnormal-name"},[t._v(t._s(a.abnormalName))])])})),t._v(" "),t._l(t.formData.notMatchAbnormalList,(function(a,e){return s("div",{key:e,staticClass:"abnormal-item level0"},[s("span",{staticClass:"abnormal-name"},[t._v(t._s(a))])])}))],2)]:t._e(),t._v(" "),t.formData.summarize||t.formData.advice?[t._m(2),t._v(" "),t.formData.summarize?s("div",{staticClass:"suggest-item"},[s("div",{staticClass:"label"},[t._v("综述")]),t._v(" "),s("div",[t._v(t._s(t.formData.summarize))])]):t._e(),t._v(" "),t.formData.advice?s("div",{staticClass:"suggest-item"},[s("div",{staticClass:"label"},[t._v("建议")]),t._v(" "),s("div",[t._v(t._s(t.formData.advice))])]):t._e()]:t._e(),t._v(" "),s("div",{staticClass:"buttons"},[s("el-button",{on:{click:function(a){return t.$emit("close")}}},[t._v("返回")])],1)],2)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sub-title"},[a("span",[this._v("异常信息")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"abnormal-level"},[e("span",{staticClass:"level1"},[t._v("一般")]),t._v(" "),e("span",{staticClass:"level2"},[t._v("轻度")]),t._v(" "),e("span",{staticClass:"level3"},[t._v("中度")]),t._v(" "),e("span",{staticClass:"level4"},[t._v("中重度")]),t._v(" "),e("span",{staticClass:"level5"},[t._v("重度")]),t._v(" "),e("span",{staticClass:"level0"},[t._v("未曾匹配")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sub-title"},[a("span",[this._v("总检建议")])])}],!1,null,"e261789e",null);a.default=n.exports}}]);