import{_ as w,i as m,g as y,p as _,r as h,o as v,c as k,b as t,F as x,m as C,q as l,s as i,v as a,t as r,e as f}from"./app-D1kaGB1U.js";import{i as B}from"./woman-7109043_1280-D6wd_GLH.js";const V="/assets/woman-8029209_1280-082e-mp-.jpg",U={class:"container"},I=["max"],N={__name:"rbcloud-block-container-example",setup(P){const e=m({menu_id:"id_01",menu_name:"컨테이너 1",blockRows:[{epsd_id:"1",title:"",poster:B},{epsd_id:"2",title:"",poster:V}],block:{height:720,width:480},container:{row:1,position:{x:100,y:100},deg:-20,perspective:1300,block_count:30}}),d=m([]),c=m(0),g=y(()=>c.value+1);function p(){console.log("rbcloud-block-container-example init"),d.value=[];const u=e.value.blockRows;let n=0,s=0;for(b(u[n]);s<e.value.container.block_count;){const o=Object.assign({epsd_id:`epsd_id_${s}`},u[n]);d.value.push(o),s+=1,n+=1,n===u.length&&(n=0)}}async function b(u){console.log("episode selected callback",u)}return _(()=>{p()}),(u,n)=>{const s=h("home-CarouselBlockContainer");return v(),k(x,null,[t("div",U,[(v(!0),k(x,null,C(e.value.container.row,(o,R)=>(v(),f(s,{"block-container-id":o,"block-container-idx":o,"block-container-perspective":e.value.container.perspective,"block-container-position-x":e.value.container.position.x,"block-container-position-y":e.value.container.position.y,"block-container-deg":e.value.container.deg,title:e.value.menu_name,"block-list":d.value,height:Number(e.value.block.height),width:Number(e.value.block.width),"selected-block-container-id":g.value,"selected-block-container-idx":Number(c.value),onSelectedItem:b},null,8,["block-container-id","block-container-idx","block-container-perspective","block-container-position-x","block-container-position-y","block-container-deg","title","block-list","height","width","selected-block-container-id","selected-block-container-idx"]))),256))]),t("aside",null,[t("label",null,[l("Container Position Rows"),i(t("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>e.value.container.row=o),type:"range",min:"0",max:"10"},null,512),[[a,e.value.container.row,void 0,{number:!0}]]),l(r(e.value.container.row)+" rows",1)]),t("label",null,[l("Container Position X"),i(t("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>e.value.container.position.x=o),type:"range",min:"0",max:"600"},null,512),[[a,e.value.container.position.x,void 0,{number:!0}]]),l(r(e.value.container.position.x)+" px",1)]),t("label",null,[l("Container Position Y"),i(t("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>e.value.container.position.y=o),type:"range",min:"0",max:"600"},null,512),[[a,e.value.container.position.y,void 0,{number:!0}]]),l(r(e.value.container.position.y)+" px",1)]),t("label",null,[l("Container Deg"),i(t("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>e.value.container.deg=o),type:"range",min:"-25",max:"25"},null,512),[[a,e.value.container.deg,void 0,{number:!0}]]),l(" "+r(e.value.container.perspective),1)]),t("label",null,[l("Container Perspective"),i(t("input",{"onUpdate:modelValue":n[4]||(n[4]=o=>e.value.container.perspective=o),type:"range",min:"500",max:"2000"},null,512),[[a,e.value.container.perspective,void 0,{number:!0}]]),l(" "+r(e.value.container.perspective),1)]),t("label",null,[l("height"),i(t("input",{"onUpdate:modelValue":n[5]||(n[5]=o=>e.value.block.height=o),type:"range",min:"100",max:"600"},null,512),[[a,e.value.block.height,void 0,{number:!0}]]),l(r(e.value.block.height)+" px",1)]),t("label",null,[l("width"),i(t("input",{"onUpdate:modelValue":n[6]||(n[6]=o=>e.value.block.width=o),type:"range",min:"100",max:"600"},null,512),[[a,e.value.block.width,void 0,{number:!0}]]),l(r(e.value.block.width)+" px ",1)]),t("label",null,[l("Block count"),i(t("input",{"onUpdate:modelValue":n[7]||(n[7]=o=>e.value.container.block_count=o),type:"range",min:"1",max:"40",onChange:p},null,544),[[a,e.value.container.block_count,void 0,{number:!0}]]),l(" "+r(e.value.container.block_count),1)]),t("label",null,[l("Container Index"),i(t("input",{"onUpdate:modelValue":n[8]||(n[8]=o=>c.value=o),type:"range",min:0,max:e.value.container.row-1,onChange:p},null,40,I),[[a,c.value,void 0,{number:!0}]]),l(" "+r(c.value),1)])])],64)}}},E=w(N,[["__scopeId","data-v-42d4af1b"],["__file","rbcloud-block-container-example.vue"]]);export{E as default};
