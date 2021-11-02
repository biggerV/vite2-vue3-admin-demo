import{u as a,m as e,n as l}from"./sys.1ef09c51.js";import{p as t,a as s,b as r,Y as o,l as d,o as i,d as m,e as u,f as n,t as f,v as p,w as c}from"./vendor.cd5cedf3.js";import"./index.de78ff2b.js";const g={components:{},data:()=>({uploadUserAvatar:a,formData:{},rules:{name:[{required:!0,message:"请输入账号",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]},loading:!1}),computed:{avatarUrl(){return this.formData.avatar?`${this.$config.fileRoot}/${this.formData.avatar}`:`${this.$config.fileRoot}/avatar.jpg`}},created(){this.getSysUser()},methods:{submitForm(a){this.$refs[a].validate((a=>{if(!a)return!1;""!=this.formData.password&&null!=this.formData.password||delete this.formData.password,e(this.formData).then((a=>{0===a.code&&this.$message.success("保存成功")}))}))},resetForm(a){this.$refs[a].resetFields()},getSysUser(){this.loading=!0,l({id:this.$store.getters.user.id}).then((a=>{0===a.code&&(this.formData=a.data)})).finally((()=>{this.loading=!1}))},saveAvatar(a){e({id:this.formData.id,avatar:a}).then((e=>{0===e.code?(this.$message.success("保存头像成功"),this.formData.avatar=a):this.$message.error("保存头像失败，请重试")}))},handleUploadAvatarSuccess(a,e,l){if(a.success){const e=JSON.parse(a.data);this.saveAvatar(e.upload_data.file_name)}else this.$message.error(`上传失败：${a.desc}`)}}},h=c();t("data-v-bfa2c504");const b={class:"wrap"},v={class:"avatar-wrap"},_=u("div",{class:"el-upload__tip"},"支持jpg/png，小于500kb",-1);s();const D=h(((a,e,l,t,s,c)=>{const g=r("el-button"),D=r("el-upload"),$=r("el-input"),V=r("el-form-item"),U=r("el-col"),w=r("Dictionary"),y=r("el-row"),k=r("el-form"),A=o("loading");return d((i(),m("div",b,[u("div",v,[u("img",{class:"avatar",src:c.avatarUrl},null,8,["src"]),u(D,{class:"upload-demo",action:s.uploadUserAvatar,name:"avatar","on-success":c.handleUploadAvatarSuccess,"show-file-list":!1},{tip:h((()=>[_])),default:h((()=>[u(g,{size:"small",type:"primary",class:"btn"},{default:h((()=>[n(f(a.$t("点击上传")),1)])),_:1})])),_:1},8,["action","on-success"])]),u(k,{model:s.formData,ref:"form",rules:s.rules,"label-width":"80px","label-position":"top","label-suffix":"："},{default:h((()=>[d(u(V,{prop:"id"},{default:h((()=>[u($,{value:"formData.id"})])),_:1},512),[[p,!1]]),u(y,{gutter:20},{default:h((()=>[u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("账号"),prop:"name"},{default:h((()=>[u("span",null,f(s.formData.name),1)])),_:1},8,["label"])])),_:1}),u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("密码"),prop:"password"},{default:h((()=>[u($,{modelValue:s.formData.password,"onUpdate:modelValue":e[1]||(e[1]=a=>s.formData.password=a),placeholder:"不修改密码则不填写"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("用户名"),prop:"nickName"},{default:h((()=>[u($,{modelValue:s.formData.nickName,"onUpdate:modelValue":e[2]||(e[2]=a=>s.formData.nickName=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("邮箱"),prop:"email"},{default:h((()=>[u($,{modelValue:s.formData.email,"onUpdate:modelValue":e[3]||(e[3]=a=>s.formData.email=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("手机"),prop:"phone"},{default:h((()=>[u($,{modelValue:s.formData.phone,"onUpdate:modelValue":e[4]||(e[4]=a=>s.formData.phone=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(U,{span:12},{default:h((()=>[u(V,{label:a.$t("性别"),prop:"gender"},{default:h((()=>[u(w,{modelValue:s.formData.gender,"onUpdate:modelValue":e[5]||(e[5]=a=>s.formData.gender=a),code:"GENDER",type:"radio"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(U,{span:24},{default:h((()=>[u(V,{label:""},{default:h((()=>[u(g,{type:"primary",onClick:e[6]||(e[6]=a=>c.submitForm("form"))},{default:h((()=>[n(f(a.$t("提交")),1)])),_:1}),u(g,{onClick:e[7]||(e[7]=a=>c.resetForm("form"))},{default:h((()=>[n(f(a.$t("重置")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[A,s.loading]])}));g.render=D,g.__scopeId="data-v-bfa2c504";export default g;
