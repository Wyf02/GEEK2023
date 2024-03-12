"use strict";(self["webpackChunkwork"]=self["webpackChunkwork"]||[]).push([[493],{2493:function(t,e,a){a.r(e),a.d(e,{default:function(){return B}});var r=a(3396);const n={class:"barChart-container"};function o(t,e,a,o,i,l){return(0,r.wg)(),(0,r.iD)("div",n)}var i=a(2317),l={mounted(){const t=i.Ys(".barChart-container").append("svg").attr("viewBox","0 0 750 550").attr("width","100%").attr("height","100%"),e=700,a=550,r={top:20,right:20,bottom:20,left:100},n=e-r.left-r.right,o=a-r.top-r.bottom,l=t=>t.number,s=t=>t.bigtype,c=function(e){const a=i.BYU().domain([0,i.Fp7(e,l)]).range([0,n]),c=i.tiA().domain(e.map(s)).range([0,o]).padding(.1),d=t.append("g").attr("transform",`translate(${r.left}, ${r.top})`);var u=t.append("linearGradient").attr("id","myGradient").attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%");u.append("stop").attr("offset","0%").style("stop-color","#7400bf"),u.append("stop").attr("offset","100%").style("stop-color","#ff7bac"),d.selectAll("rect").data(e).enter().append("rect").attr("y",(t=>c(s(t)))).attr("width",(t=>a(l(t)))).attr("height",c.bandwidth()).attr("fill","url(#myGradient)").on("mouseover",(function(t,e){i.Ys(this).attr("fill","YellowGreen")})).on("mouseout",(function(t,e){i.Ys(this).transition().duration(500).attr("fill","url(#myGradient)")})),d.selectAll("text").data(e).enter().append("text").attr("class","MyText").attr("x",(function(t){return 0})).attr("y",(function(t,a){return c(s(e[a]))+.618*c(s(e[1]))})).style("fill","white").style("font-size","60%").text((function(t){return l(t)})),d.append("g").call(i.y4O(c)).attr("color","white"),d.append("g").call(i.LLu(a)).attr("transform",`translate(0, ${o})`).attr("color","white")};i.gyn("../number.csv").then((function(t){t.forEach((t=>{t.number=+t.number})),c(t)}))}},s=a(89);const c=(0,s.Z)(l,[["render",o]]);var d=c;const u={id:"scatter"};function f(t,e,a,n,o,i){return(0,r.wg)(),(0,r.iD)("div",u)}var p=a(5338),h=a(4161),m={data(){return{relation:[]}},mounted(){h.Z.get("../echarts_radar.json").then((t=>{console.log(t.data);let e=t.data;console.log(e);var a=document.getElementById("scatter"),r=p.init(a,"null",{renderer:"canvas",useDirtyRect:!1});console.log(e);var n={title:{text:"危害程度-可触发性",left:"center",top:5,textStyle:{color:"white"}},visualMap:{min:0,max:10,dimension:0,orient:"vertical",top:"center",calculable:!0,inRange:{color:["#7400bf","#ff7bac","#24b7f2"]},itemWidth:5,itemHeight:140,textStyle:{fontSize:14,fontWeight:400,color:"white"},right:"0%",align:"right"},tooltip:{trigger:"item",axisPointer:{type:"cross"}},xAxis:[{type:"value",axisLabel:{show:!0,textStyle:{color:"white"}}}],yAxis:[{type:"value",axisLabel:{show:!0,textStyle:{color:"white"}}}],series:[{name:"危害程度",type:"scatter",symbolSize:5,data:e.data}]};r.setOption(n)}))}};const v=(0,s.Z)(m,[["render",f]]);var y=v;const g={id:"radar"};function b(t,e,a,n,o,i){return(0,r.wg)(),(0,r.iD)("div",g)}a(7658);var x={data(){return{relation:[]}},mounted(){h.Z.get("../echarts_radar.json").then((t=>{console.log(t.data);let e=t.data;var a=document.getElementById("radar"),r=p.init(a,"null",{renderer:"canvas",useDirtyRect:!1});let n=["#3c4ffc","#7400bf","#ff7bac","#b337fc"];for(var o=e.data0.length,i=[],l=0;l<o;l++)i.push(e.data0[l].name),e.data0[l].areaStyle={type:"default",opacity:.25,color:n[l]};e.max_rate.forEach(((t,a)=>{e.max_rate[a].max=parseFloat(e.max_rate[a].max)})),e.data0.forEach(((t,a)=>{e.data0[a].value.forEach(((t,r)=>{e.data0[a].value[r]=parseFloat(e.data0[a].value[r])}))})),console.log(e);var s={color:["#3c4ffc","#7400bf","#ff7bac","#b337fc"],title:{text:"漏洞修复率",left:"left",top:10,textStyle:{color:"white"}},tooltip:{show:!0,trigger:"item",axisPointer:{type:"cross",snap:!1}},legend:{bottom:4,data:i,textStyle:{color:"white"}},radar:{name:{textStyle:{color:"white"}},indicator:e.max_rate},series:[{name:{textStyle:{color:"white"}},type:"radar",data:e.data0,areaStyle:{type:"default"},textStyle:{color:"white"}}]};r.setOption(s)}))}};const w=(0,s.Z)(x,[["render",b]]);var S=w;const _={class:"overview"},D={class:"leftPart"},E={class:"leftUpper"},k=(0,r.uE)('<div class="number"><h4 class="daynumber">总览多维度下危害评级的漏洞修复率、漏洞的危害程度与可达性分布、漏洞类型-数量分布</h4><div class="phone-media-number-div"><h4 class="daynumber"><br><br>共检出漏洞</h4><div class="nDayNumber"><h3>2973</h3></div></div></div>',1),A={class:"radar-graph-container"},G={class:"leftDown"},W={class:"rightPart"};var Y={__name:"Overview",setup(t){return(t,e)=>((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",D,[(0,r._)("div",E,[k,(0,r._)("div",A,[(0,r.Wm)(S)])]),(0,r._)("div",G,[(0,r.Wm)(y)])]),(0,r._)("div",W,[(0,r.Wm)(d)])]))}};const Z=Y;var B=Z}}]);
//# sourceMappingURL=493.c1048412.js.map