import{_ as i,h as d,m as p,p as c,r as v,o as x,c as m,b as t,e as _,d as o,x as r,y as s,t as y,F as b}from"./app-BcMoYYbX.js";const h={class:"container"},w={__name:"rbcloud-text-move-ani-group-example",setup(T){const e=d({active:!0,width:1e3,delay:1,text:"테스트 텍스트 테스트 텍스트 테스트 텍스트 테스트 텍스트 ",classArr:[]}),u=p(()=>[e.value.text]);return c(()=>{}),(f,a)=>{const n=v("schedule-TextMoveAnimationGroup");return x(),m(b,null,[t("div",h,[_(n,{active:e.value.active,width:Number(e.value.width),delay:Number(e.value.delay),"text-array":u.value,"class-arr":e.value.classArr},null,8,["active","width","delay","text-array","class-arr"])]),t("aside",null,[t("label",null,[o("Display Text"),r(t("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.text=l),type:"text"},null,512),[[s,e.value.text]])]),t("label",null,[o("Display Text"),r(t("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.width=l),type:"range",min:"100",max:"1000"},null,512),[[s,e.value.width,void 0,{number:!0}]]),o(" "+y(e.value.width)+" px",1)])])],64)}}},g=i(w,[["__scopeId","data-v-29955283"],["__file","rbcloud-text-move-ani-group-example.vue"]]);export{g as default};