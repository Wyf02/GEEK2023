"use strict";(self["webpackChunkwork"]=self["webpackChunkwork"]||[]).push([[986],{986:function(e,s,t){t.r(s),t.d(s,{default:function(){return M}});var l=t(3396),o=t(9242),n=t(6112);const a={class:"submisson-interface-view"},r=(0,l._)("div",{style:{height:"140px"}},null,-1),i={class:"submit1",id:"drop_area1"},d={class:"dropUp"},c={class:"dropUp"},u=(0,l._)("img",{src:n},null,-1),p=(0,l._)("div",{style:{color:"white","font-size":"large","font-weight":"bold"}},"上传文件",-1),b=(0,l._)("br",null,null,-1),h=(0,l._)("div",{class:"upload__text"},"点击图标或将文件文件拖拽到此处上传",-1),_=(0,l._)("div",{class:"filestyle"},"仅限上传json格式文件",-1),g=(0,l._)("div",{style:{height:"50px"}},null,-1),f=(0,l._)("div",{style:{height:"15px"}},null,-1),m={class:"report",style:{height:"7%","margin-top":"1.5%"}},y=(0,l._)("div",{style:{height:"70px"}},null,-1),w={class:"below",style:{height:"30%","margin-top":"1.5%"}},v={class:"table"},k=(0,l._)("caption",null,"最近提交",-1),x=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{border:"1px solid #7400bf"}},"应用名称"),(0,l._)("th",{style:{border:"1px solid #8946b8"}},"package name"),(0,l._)("th",{style:{border:"1px solid #ac7eb0"}},"版本"),(0,l._)("th",{style:{border:"1px solid  #df8cab"}},"上传时间"),(0,l._)("th",{style:{border:"1px solid #ff7bab"}},"操作")])],-1),C={style:{border:"1px solid #7400bf"}},U=(0,l._)("span",null,"dubbo",-1),A=(0,l._)("td",{style:{border:"1px solid #8946b8"}},"com.alibaba.dubbo",-1),F=(0,l._)("td",{style:{border:"1px solid #ac7eb0"}},"2.6.11",-1),L=(0,l._)("td",{style:{border:"1px solid  #df8cab"}},"2023.8.17 21:00",-1),S={style:{border:"1px solid #ff7bab"}},$=(0,l._)("button",{class:"btn-sc",style:{border:"none",background:"none",cursor:"pointer"}},[(0,l._)("span",{style:{color:"#ff7bab"}},"展示")],-1),j=(0,l._)("span",{style:{color:"#ff7bab"}},"下载",-1),z=[j],D=(0,l._)("button",{class:"btn-sc",style:{border:"none",background:"none"}},[(0,l._)("span",{style:{color:"red"}},"删除")],-1);function O(e,s,t,n,j,O){const T=(0,l.up)("el-upload"),W=(0,l.up)("el-button"),Z=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[r,(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l.Wm)(T,{action:"http://120.26.95.9:8081/restler/uploadFile",accept:".json","on-change":O.handleUpload,"on-success":O.handleSubmitSuccess,"on-error":O.handleSubmitError,"auto-upload":!1,"file-list":e.fileList,multiple:"",drag:"",ref:"el",limit:1},{default:(0,l.w5)((()=>[u,p,b,h,_])),_:1},8,["accept","on-change","on-success","on-error","file-list"])])])]),g,f,(0,l._)("div",m,[(0,l.Wm)(W,{class:"btn-sub",size:"medium",onClick:O.postFiles},{default:(0,l.w5)((()=>[(0,l.Uk)("开始分析")])),_:1},8,["onClick"])]),y,(0,l._)("div",w,[(0,l._)("div",v,[(0,l._)("table",null,[k,x,(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",C,[(0,l.wy)((0,l._)("input",{type:"radio",name:"Appname",value:"DEMO","onUpdate:modelValue":s[0]||(s[0]=s=>e.selectDemo=s)},null,512),[[o.G2,e.selectDemo]]),U]),A,F,L,(0,l._)("td",S,[(0,l.Wm)(Z,{tag:"a",target:"_blank",to:"/FUZZanalyse"},{default:(0,l.w5)((()=>[$])),_:1}),(0,l._)("button",{class:"btn-sc",style:{border:"none",background:"none",cursor:"pointer"},onClick:s[1]||(s[1]=(...s)=>e.downloaddoc1&&e.downloaddoc1(...s))},z),D])])])])])])])}t(7658);var T=t(4161),W={data(){return{WAY:["Test","FuzzLean","Fuzz"],selectedWay:""}},methods:{sendData(e){var s='{"data" : "'+e+'"}',t=JSON.parse(s);console.log(t),T.Z.post("http://120.26.95.9:8081/restler/sendData",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST"}}).then((e=>{console.log(e.data)})).catch((e=>{console.error(e)}))},handleUpload(e){if(console.log(e),"ready"!=e.status)return;const s="application/json"===e.raw.type;s?(console.log(e.raw.name+"上传成功"),this.fileList=[],this.fileList.push(e),this.$message({message:"上传成功",type:"success"}),setTimeout((()=>{this.$message.closeAll()}),2e3)):(this.fileList=[],this.$message.error("仅限上传json格式文件"))},postFiles(){console.log(this.$refs),0!==this.fileList.length?this.$refs.el.submit():alert("请上传文件")},handleSubmitSuccess(){this.$message({message:"提交成功",type:"success"}),this.$message.info("即将进行分析")},handleSubmitError(){this.$message({message:"服务器繁忙，请稍后再试~",type:"error"})},downloadFile(){console.log(1),T.Z.get("http://120.26.95.9/restler/downloadFile",{responseType:"blob"}).then((e=>{const s=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=s,t.setAttribute("download","file.txt"),document.body.appendChild(t),t.click()})).catch((e=>{console.error(e)}))}}},Z=t(89);const E=(0,Z.Z)(W,[["render",O]]);var M=E},6112:function(e,s,t){e.exports=t.p+"img/云.90750982.svg"}}]);
//# sourceMappingURL=986.d431fd64.js.map