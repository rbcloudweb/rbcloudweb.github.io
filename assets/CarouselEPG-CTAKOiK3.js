import{U as M}from"./utils-DTcZfRkq.js";import{_ as U,j as l,l as G,m as j,k as C,r as A,o as f,c as h,a as N,F as T,p as D,i as H,d as O}from"./app-Bkv90TE2.js";const S={class:"scene"},o=16,X={__name:"CarouselEPG",props:{channelInfo:{type:Object,required:!0},channelList:{type:Array,required:!1,default:()=>[]}},setup(L,{expose:y}){const n=L;y({control:P});const e=l(0),t=l(0),s=l(-320),x=l(0),u=l(0),d=l(0);l(!1),l(null),l(null);const g=l(null),v=l(!1);let p=new Image;const c=l([]),k=l(null),w=()=>{E().then(a=>{a.success?(v.value=!0,g.value=m()):v.value=!1})},E=async()=>{p=new Image;const a=m();return await M.preloadImage(a,p)},m=()=>`appConfigStore.headEnd.LOCAL_UPDATE_URL/white_epg_${n.channelInfo[e.value].id}.png`,I=()=>(console.log("🚀 ~ getFilteredChannelList ~ props.channelInfo:",n.channelInfo),n.channelInfo.length<o?n.channelInfo:(u.value=e.value-o/2<0?0:e.value-o/2,d.value=e.value+o/2<0?0:e.value+o/2,n.channelInfo.slice(u.value,d.value)));G(()=>{}),j(()=>{}),C(()=>e.value,()=>{e.value+o/2>=c.value.length&&c.value.length<n.channelInfo.length&&(c.value=I(e.value))}),C(()=>n.channelInfo,()=>{n.channelInfo.length&&(c.value=I(e.value)),g.value=null,n.channelInfo?(v.value=!0,w()):v.value=!1},{immediate:!0});const _=a=>{e.value+=a,console.log("🚀 ~ adjustChannel ~ curIndex.value:",e.value)};function P(a){b(a)}const b=a=>{const{key:i}=a;switch(i){case"LEFT":t.value>0&&(t.value-=1,t.value<=1?s.value=-320:(console.log("🚀 ~ direction:",1),s.value=s.value+1*320),console.log("🚀 ~ scrollY:",s.value));break;case"RIGHT":t.value<c.value[e.value].scheduleList.length&&(t.value+=1,t.value<1?s.value=-320:s.value=s.value+-1*320);break;case"UP":e.value>=0&&_(-1);break;case"DOWN":e.value<n.channelInfo.length-1&&_(1);break}};return(a,i)=>{const B=A("schedule-Carouseltem");return f(),h("div",S,[N("ul",{ref_key:"carousel",ref:k,class:"carousel"},[(f(!0),h(T,null,D(c.value,(F,r)=>(f(),h("li",{key:u.value+r,style:H({transform:`rotateX(${360/o*(o-1-(u.value+r-e.value))+360/o}deg) translateZ(${Math.round(250/2/Math.tan(Math.PI/o))}px)`,opacity:1-Math.abs((u.value+r-e.value)*.1)})},[O(B,{item:F,index:r,"line-focus":u.value+r===e.value,"line-focus-x":t.value,"scroll-y":s.value,"index-page":x.value},null,8,["item","index","line-focus","line-focus-x","scroll-y","index-page"])],4))),128))],512)])}}},R=U(X,[["__file","CarouselEPG.vue"]]);export{R as default};
