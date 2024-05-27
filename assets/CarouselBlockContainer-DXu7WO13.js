import{_ as q,j as a,h as l,k as v,l as w,m as z,r as L,o as k,c as m,b as N,F as P,p as H,i as f,n as Y,f as X}from"./app-CmLyX-ve.js";const M={__name:"CarouselBlockContainer",props:{title:{type:String,default:""},blockContainerId:{type:String,default:""},blockContainerIdx:{type:Number,required:!0},blockContainerPerspective:{type:Number,required:!0},blockContainerPositionX:{type:Number,required:!0},blockContainerPositionY:{type:Number,required:!0},blockContainerDeg:{type:Number,required:!0},blockList:{type:Array,required:!0},isHorizontal:{type:Boolean,required:!0,default:()=>!0},selectedBlockContainerId:{type:String,required:!0},selectedBlockContainerIdx:{type:Number,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0}},emits:["selected-item"],setup(_,{emit:S}){const e=_,s=a(0),b=a([]),i=a(0),u=a(0),p=a(e.isHorizontal?"rotateY":"rotateX"),n=a(e.isHorizontal?e.width:e.height),o=a(e.blockList.length),y=l(()=>{const t=i.value*s.value*-1;return"translateZ("+(-u.value-200)+"px) "+p.value+"("+t+"deg) "});function B(){let t=0;for(;t<o.value;){const r=i.value*t;b.value[t]=p.value+"("+r+"deg) translateZ("+u.value+"px) rotate3d(1, 0, 0, 0deg)",t+=1}}const x=l(()=>{const t=e.blockContainerPositionY,r=e.blockContainerPositionX,d=e.height*-1*e.selectedBlockContainerIdx;return console.log("containerRotateCarousel",t+d),"translateY("+(t+d)+"px) translateX("+r+"px) rotate3d(1, 0, 0, "+e.blockContainerDeg+"deg)"}),C=l(()=>{const t=Math.abs(s.value)%o.value;return s.value<0?e.blockList[o.value-t]:e.blockList[t]}),I=l(()=>C.value.epsd_id+"");l(()=>C.value.title);function c(){u.value=Math.round(n.value/2/Math.tan(Math.PI/o.value)),i.value=360/o.value,B(),console.log("init",n.value,o.value,u.value,i.value)}return v(()=>e.blockList,(t,r)=>{o.value=t.length,s.value=0,c()}),v(()=>e.width,(t,r)=>{n.value=e.isHorizontal?t+20:e.height,c()}),v(()=>e.height,(t,r)=>{n.value=e.isHorizontal?e.width:t+20,c()}),w(()=>{o.value=e.blockList.length,n.value=e.isHorizontal?e.width+20:e.height+20,p.value=e.isHorizontal?"rotateY":"rotateX",c()}),z(()=>{}),(t,r)=>{const d=L("home-CarouselBlock");return k(),m("div",{class:Y(["block-container",[e.blockContainerId===e.selectedBlockContainerId?"--focused":""]]),style:f({height:e.height-350+"px",perspective:e.blockContainerPerspective+"px",transform:x.value})},[N("div",{class:"block-list",style:f({transform:y.value,height:e.height+"px"})},[(k(!0),m(P,null,H(e.blockList,(h,g)=>(k(),X(d,{key:g,"epsd-id":h.epsd_id,selected:h.epsd_id===I.value&&e.blockContainerId===e.selectedBlockContainerId,"poster-path":h.poster,transform:b.value[g],height:e.height,width:e.width},null,8,["epsd-id","selected","poster-path","transform","height","width"]))),128))],4)],6)}}},F=q(M,[["__scopeId","data-v-9227f624"],["__file","CarouselBlockContainer.vue"]]);export{F as default};