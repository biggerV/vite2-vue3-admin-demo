import{s as e}from"./index.6066ce25.js";import{b as a,o as t,d as o,e as l,f as s,t as r,l as d,v as i,w as m}from"./vendor.cd5cedf3.js";const u={props:{datas:{type:Object,default:()=>({})}},emits:["input","success"],data:()=>({dialogVisible:!1,formData:{},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],code:[{required:!0,message:"请输入编码",trigger:"blur"}]},roles:[]}),created(){},methods:{submitForm(a){this.$refs[a].validate((a=>{if(!a)return!1;e(this.formData).then((e=>{0===e.code&&(this.$message.success("保存成功"),this.formData={},this.onDialogClose(),this.$emit("success",!0))}))}))},resetForm(e){this.$refs[e].resetFields()},onDialogClose(){this.$emit("input",!1)}},watch:{datas(e,a){e.id?this.formData=e:this.formData={}}}},f=m(),n=f(((e,m,u,n,p,c)=>{const b=a("el-input"),h=a("el-form-item"),D=a("el-form"),g=a("el-button"),V=a("el-dialog");return t(),o(V,{title:p.formData.id?e.$t("编辑"):e.$t("新增"),modelValue:p.dialogVisible,"onUpdate:modelValue":m[5]||(m[5]=e=>p.dialogVisible=e),"append-to-body":"","destroy-on-close":"",onClose:c.onDialogClose,width:"30%"},{footer:f((()=>[l("div",null,[l(g,{type:"primary",onClick:m[3]||(m[3]=e=>c.submitForm("form"))},{default:f((()=>[s(r(e.$t("提交")),1)])),_:1}),l(g,{onClick:m[4]||(m[4]=e=>c.resetForm("form"))},{default:f((()=>[s(r(e.$t("重置")),1)])),_:1})])])),default:f((()=>[l(D,{model:p.formData,ref:"form",rules:p.rules,"label-width":"80px","label-position":"top","label-suffix":"："},{default:f((()=>[d(l(h,{prop:"id"},{default:f((()=>[l(b,{value:"formData.id"})])),_:1},512),[[i,!1]]),l(h,{label:e.$t("名称"),prop:"name"},{default:f((()=>[l(b,{modelValue:p.formData.name,"onUpdate:modelValue":m[1]||(m[1]=e=>p.formData.name=e)},null,8,["modelValue"])])),_:1},8,["label"]),l(h,{label:e.$t("编码"),prop:"code"},{default:f((()=>[l(b,{modelValue:p.formData.code,"onUpdate:modelValue":m[2]||(m[2]=e=>p.formData.code=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue","onClose"])}));u.render=n,u.__scopeId="data-v-625fb799";export default u;
