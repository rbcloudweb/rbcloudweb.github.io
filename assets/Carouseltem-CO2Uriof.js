import{U as M,d as y}from"./utils-DTcZfRkq.js";import{t as S}from"./tweenManager-D1g6n6E9.js";import{V as Z}from"./ch_drama-LT0q_Gb8.js";import{_ as ee,j as u,h as v,k as $,l as te,q as se,m as ne,r as A,o as l,c as i,n as x,b as o,t as g,i as k,f as B,x as T,e as oe,A as le,F as re,p as ie}from"./app-CET_n2wA.js";import"./index-ZORhgBxb.js";const ae={class:"carousel-live-row"},ce={class:"logo"},ue={class:"carousel-live-num"},me={key:0},de={key:0,class:"flag-live flag-live-s"},he={class:"carousel-live-info"},ve={class:"carousel-live-title"},ge={class:"carousel-live-progress"},fe={class:"progress"},_e={key:1,class:"carousel-live-info"},pe={class:"carousel-live-title"},ye={key:2,class:"carousel-live-video"},xe={autoplay:"",loop:"",muted:"",width:"445",height:"250"},ke=["src"],Te=["onClick"],Ce={key:0},Ne={__name:"Carouseltem",props:{item:{type:Object,required:!0},index:{type:Number,required:!0},lineFocus:{type:Boolean,required:!0},lineFocusX:{type:Number,required:!0},scrollY:{type:Number,required:!0},indexPage:{type:Number,required:!0}},setup(a){const s=a,C=u(!1),D=u(null),X=u(null),f=u(null),m=u(!1);let N=new Image;const _=u(null),Y=u(!1),d=v(()=>(console.log("🚀 ~ focusedItem ~ props.lineFocusX:",s.lineFocusX),s.item.scheduleList[s.lineFocusX])),q=v(()=>s.item.scheduleList.slice(0,s.item.scheduleList.length)),V=()=>{E().then(e=>{e.success?(m.value=!0,f.value=I()):m.value=!1})},E=async()=>{N=new Image;const e=I();return await M.preloadImage(e,N)},I=()=>`assets/upload/white_epg_${s.item.svcId}.png`,H=v(()=>{if(!s.item)return;let e=s.item.channelNo;const t=3-e.toString().length;if(t>0)for(let n=0;n<t;n++)e=`0${e}`;return e});v(()=>{if(s.item.channelName)return M.elipsis(s.item.channelName,500)});const P=v(()=>{if(s.item.channelName)return[s.item.channelName]});function R(e){if(e&&e.start_time&&e.end_time){const t=y().unix()*1e3,n=this.getUnixTimeA(e.start_time),r=this.getUnixTimeA(e.end_time);if(n<t&&t<r)return!0;if(t>r)return!0}return!1}const O=e=>R(e),j=e=>{const t={},n=s.item,r=n.scheduleList[0];return t.svcId=n.svcId,t.channelName=n.channelName,t.channelNo=n.channelNo,t.title=r.title,t.startTime=w(r),t.endTime=L(r),t.progressBar=b(r),t},z=()=>{j(s.index)},G=e=>{C.value||e.noProgram||(X.value=e.m_url,D.value={...e,channelNo:s.item.num,channelName:s.item.name,img:s.item.img},C.value=!0)},J=()=>{},K=(e,t,n)=>e&&t+1===n;function F(e){const t=y(e).format("YYMMDDHHmm");return y(t,"YYMMDDHHmm").unix()*1e3}const b=e=>{const t=new Date().getTime(),n=F(e.start_time),r=F(e.end_time);if(t<n)return 0;let c=(t-n)/(r-n)*100;return c=c>100?100:c,c},w=e=>{if(!e.start_time)return"00:00";const t=virtualStore.getUnixTimeA(e.start_time);return U(new Date(t))},L=e=>{if(!e.end_time)return"00:00";const t=virtualStore.getUnixTimeA(e.end_time);return U(new Date(t))},U=e=>{let t=String(e.getHours());t=t.length===1?`0${t}`:t;let n=String(e.getMinutes());return n=n.length===1?`0${n}`:n,`${t}:${n}`},Q=e=>[e.title];$(()=>s.scrollY,()=>{W(s.scrollY)}),$(()=>s.item,()=>{f.value=null,s.item?(m.value=!0,V()):m.value=!1},{immediate:!0}),te(()=>{history.historyMethod!=="RECOVER"&&z()}),se(()=>{S(_.value,0,{x:s.scrollY})}),ne(()=>{});const W=e=>{S(_.value,.5,{x:e,ease:"back.out(3)",onComplete:()=>{Y.value=!1}})};return(e,t)=>{var c;const n=A("schedule-TextMoveAnimationGroup"),r=A("schedule-CarouselProductImg");return l(),i("div",ae,[s.item.scheduleList.length?(l(),i("div",{key:0,class:x(["carousel-live-block carousel-live-block-front",{"--focused focusOn":a.lineFocus}]),onClick:J},[o("div",ce,[o("div",ue,g(H.value),1),o("div",{class:x(["carousel-live-epg",{"epg-logo-hide":!m.value}])},[m.value?(l(),i("div",{key:0,class:"epg-logo",style:k({backgroundImage:`url(${f.value})`})},null,4)):(l(),B(n,{key:1,"class-arr":["epg-log-text"],active:!0,width:"95%","text-array":P.value,delay:1e3},null,8,["text-array"]))],2)]),a.lineFocus?(l(),i("div",me,[O(d.value)?(l(),i("span",de,"LIVE")):T("",!0),o("div",he,[o("p",ve,[oe(n,{"class-arr":["name"],active:a.lineFocus,width:"80%","text-array":Q(d.value),delay:1e3},null,8,["active","text-array"])]),o("div",ge,[o("em",null,g(w(d.value)),1),o("div",fe,[o("span",{style:k({width:`${b(d.value)}%`})},null,4)]),o("em",null,g(L(d.value)),1)])])])):(l(),i("div",_e,[o("div",pe,g((c=d.value)==null?void 0:c.title),1)])),a.lineFocus?(l(),i("div",ye,[o("video",xe,[o("source",{type:"video/mp4",src:le(Z)},null,8,ke)])])):T("",!0)],2)):T("",!0),o("div",{ref_key:"groupRef",ref:_,class:"carousel__cell",style:k({transform:`translateX(${a.scrollY})`})},[(l(!0),i(re,null,ie(q.value,(p,h)=>(l(),i("div",{key:h,class:x(["carousel-live-block",{"carousel-live-block-s":h!==s.lineFocusX,"fade-out":h<s.lineFocusX,"fade-in":h===s.lineFocusX}]),onClick:Ie=>G(p)},[p.title?(l(),B(r,{key:1,"item-info":p,"b-full-size":!K(a.lineFocus,h,s.lineFocusX)},null,8,["item-info","b-full-size"])):(l(),i("p",Ce,"프로그램 정보 업데이트 예정"))],10,Te))),128))],4)])}}},Me=ee(Ne,[["__scopeId","data-v-e0b110fa"],["__file","Carouseltem.vue"]]);export{Me as default};
