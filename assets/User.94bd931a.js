var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,s,l)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l;import{e as o,f as n}from"./sys.e9f002b8.js";import{b as d,Y as c,o as p,d as b,e as u,h,n as m,l as f,f as y,t as g}from"./vendor.cd5cedf3.js";import"./index.6066ce25.js";const w={name:"User",components:{},props:{roleId:{type:Number,required:!0}},data:()=>({list:[],total:0,dialogVisible:!1,permissionVisible:!1}),watch:{roleId(){this.getList()}},methods:{getList(e={}){var n,d;Object.keys(e).length<=0&&(this.total=0),o((n=((e,t)=>{for(var s in t||(t={}))a.call(t,s)&&r(e,s,t[s]);if(l)for(var s of l(t))i.call(t,s)&&r(e,s,t[s]);return e})({},e),d={roleId:this.roleId},t(n,s(d)))).then((e=>{0===e.code&&(this.list=e.data.list,this.total=e.data.total)}))},delSysUserRole(e){this.$confirm(`确定要删除【${e.row.name}】吗？`,this.$t("提示"),{type:"warning"}).then((()=>{n({userId:e.row.id,roleId:this.roleId}).then((t=>{t.success?(this.list.splice(e.$index,1),this.$message.success("删除成功")):this.$message.success(t.desc)}))})).catch((()=>{}))}},created(){this.getList()}},$=y("禁用"),j=y("正常"),O=y("离职"),v={style:{"margin-top":"20px"}};w.render=function(e,t,s,l,a,i){const r=d("el-table-column"),o=d("el-tag"),n=d("el-button"),w=d("el-table"),I=d("Pagination"),k=c("permit");return p(),b("div",null,[u(w,{data:a.list,stripe:"",style:{width:"100%"}},{default:h((()=>[u(r,{width:"46",type:"index",label:"#"}),u(r,{prop:"id",width:"46"}),u(r,{prop:"name",label:e.$t("账号")},null,8,["label"]),u(r,{prop:"nickName",label:e.$t("用户名")},null,8,["label"]),u(r,{label:e.$t("状态")},{default:h((e=>["0"===e.row.status?(p(),b(o,{key:0,size:"small"},{default:h((()=>[$])),_:1})):m("",!0),"1"===e.row.status?(p(),b(o,{key:1,size:"small"},{default:h((()=>[j])),_:1})):m("",!0),"2"===e.row.status?(p(),b(o,{key:2,size:"small"},{default:h((()=>[O])),_:1})):m("",!0)])),_:1},8,["label"]),u(r,{fixed:"right",label:e.$t("操作"),width:"100"},{default:h((t=>[f(u(n,{type:"text",onClick:e=>i.delSysUserRole(t),disabled:t.row.name==e.$config.admin},{default:h((()=>[y(g(e.$t("删除")),1)])),_:2},1032,["onClick","disabled"]),[[k,"saveSysUser"]])])),_:1},8,["label"])])),_:1},8,["data"]),u("div",v,[u(I,{onChange:i.getList,total:a.total},null,8,["onChange","total"])])])};export default w;
