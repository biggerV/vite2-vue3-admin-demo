import{o as e,t as a,u as s}from"./index.6066ce25.js";import l from"./AddI18nTypes.5a4a17b7.js";import{b as o,Y as t,o as d,d as n,e as r,l as i,f as c,t as m,w as p}from"./vendor.cd5cedf3.js";const h={components:{AddI18nTypes:l},data:()=>({searchForm:{name:"",code:""},i18nTypesFormData:{},isShowAddI18nTypes:!1,getI18nTypes:e}),created(){},methods:{handleListLoaded(e){e.map((e=>{e.sort=Number(e.sort)}))},handleShowAddTypes(){this.i18nTypesFormData={},this.isShowAddI18nTypes=!0},handleAddTypesSuccess(){this.$refs.searchFormTable.getList(),this.isShowAddI18nTypes=!1},handleEdit(e){this.isShowAddI18nTypes=!0,this.i18nTypesFormData=this.$tools.simDeepCopy(e)},async handleDel(e){try{if("confirm"==await this.$confirm(`确定要删除：${e.name} 吗？`,this.$t("提示"),{type:"warning"})){0===(await a(e)).code&&(this.$message.success("删除成功"),this.$refs.searchFormTable.getList())}}catch(s){}},async handleSortChange(e){0===(await s(e)).code&&(this.$message.success("排序成功"),this.$refs.searchFormTable.getList())}},watch:{}},u=p(),y=u(((e,a,s,l,p,h)=>{const y=o("el-input"),T=o("el-form-item"),b=o("el-button"),f=o("el-table-column"),w=o("el-input-number"),$=o("SearchFormTable"),S=o("AddI18nTypes"),g=t("permit");return d(),n("div",null,[r($,{searchFormModel:p.searchForm,getListServer:p.getI18nTypes,ref:"searchFormTable",onListLoaded:h.handleListLoaded},{search:u((()=>[r(T,{prop:"name",label:e.$t("名称")},{default:u((()=>[r(y,{modelValue:p.searchForm.name,"onUpdate:modelValue":a[1]||(a[1]=e=>p.searchForm.name=e)},null,8,["modelValue"])])),_:1},8,["label"]),r(T,{prop:"code",label:e.$t("编码")},{default:u((()=>[r(y,{modelValue:p.searchForm.code,"onUpdate:modelValue":a[2]||(a[2]=e=>p.searchForm.code=e)},null,8,["modelValue"])])),_:1},8,["label"])])),operation:u((()=>[i(r(b,{onClick:h.handleShowAddTypes,icon:"el-icon-plus",size:"mini"},{default:u((()=>[c(m(e.$t("新增")),1)])),_:1},8,["onClick"]),[[g,"saveSysTypes"]])])),columns:u((()=>[r(f,{prop:"name",label:e.$t("名称")},null,8,["label"]),r(f,{prop:"code",label:e.$t("编码")},null,8,["label"]),i(r(f,{prop:"sort",label:e.$t("排序"),align:"center"},{default:u((e=>[r(w,{size:"mini",modelValue:e.row.sort,"onUpdate:modelValue":a=>e.row.sort=a,onChange:a=>h.handleSortChange(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1},8,["label"]),[[g,"sortI18nTypes"]]),r(f,{prop:"updateTime",label:e.$t("更新时间"),width:"180"},null,8,["label"]),r(f,{fixed:"right",label:e.$t("操作"),width:"100",align:"center"},{default:u((a=>[i(r(b,{type:"text",onClick:e=>h.handleEdit(a.row)},{default:u((()=>[c(m(e.$t("编辑")),1)])),_:2},1032,["onClick"]),[[g,"saveI18nTypes"]]),i(r(b,{type:"text",onClick:e=>h.handleDel(a.row)},{default:u((()=>[c(m(e.$t("删除")),1)])),_:2},1032,["onClick"]),[[g,"delI18nTypes"]])])),_:1},8,["label"])])),_:1},8,["searchFormModel","getListServer","onListLoaded"]),r(S,{modelValue:p.isShowAddI18nTypes,"onUpdate:modelValue":a[3]||(a[3]=e=>p.isShowAddI18nTypes=e),onSuccess:h.handleAddTypesSuccess,datas:p.i18nTypesFormData},null,8,["modelValue","onSuccess","datas"])])}));h.render=y,h.__scopeId="data-v-67268e96";export default h;
