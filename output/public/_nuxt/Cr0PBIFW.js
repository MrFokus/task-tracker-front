import{u}from"./BzyvTdK6.js";import{n as y,q as C,r as h,g as x,c as v,b as k,a as o,u as s,s as d,v as c,t as b,x as V,y as P,o as f,p as S,e as T,_ as B}from"./DJOztor7.js";import{T as L}from"./D1u0PEr_.js";import"./DlZI_DoU.js";const i=l=>(S("data-v-d725f373"),l=l(),T(),l),M={class:"padding-page column"},U={class:"container-profile-photo"},D={class:"hover-container"},I=["src"],j={class:"add-photo"},A=i(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none"},[o("path",{d:"M47.9999 26.6668L37.3332 16.0002M6.6665 57.3335L15.6915 56.3307C16.7941 56.2082 17.3454 56.1469 17.8608 55.9801C18.3179 55.8321 18.753 55.623 19.1542 55.3585C19.6064 55.0603 19.9986 54.668 20.7831 53.8836L55.9999 18.6668C58.9454 15.7213 58.9454 10.9457 55.9999 8.00016C53.0544 5.05464 48.2788 5.05464 45.3332 8.00015L10.1164 43.2169C9.33196 44.0014 8.93972 44.3936 8.64154 44.8458C8.37699 45.247 8.16788 45.6821 8.01987 46.1392C7.85305 46.6546 7.79179 47.2059 7.66928 48.3085L6.6665 57.3335Z",stroke:"white","stroke-opacity":"0.5","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),F={class:"input-container column"},N=i(()=>o("p",{class:"input-name"},"Имя",-1)),q={class:"input-container column"},E=i(()=>o("p",{class:"input-name"},"Адрес электронной почты",-1)),H={class:"input-container column"},O=i(()=>o("p",{class:"input-name"},"Новый пароль",-1)),Z={class:"input-container column"},z=i(()=>o("p",{class:"input-name"},"Повторите новый пароль",-1)),G={key:0,class:"error"},J=y({__name:"account",async setup(l){let r,m,n=([r,m]=C(()=>u("/user")),r=await r,m(),r);const e=h({name:"",mail:"",password:"",confirmPassword:""}),p=h();x(n,()=>[e.value.name=n.name,e.value.mail=n.mail,e.value.photo=n.photo],{immediate:!0});async function w(_){let t=Array.from(_.target.files),a=new FormData;a.append("file",t[0]),e.value.photo=await u("/user/upload",{method:"POST",body:a})}async function g(){if(e.value.password!==e.value.confirmPassword){p.value="Пароли не совпадают",setTimeout(()=>{p.value=""},5e3);return}e.value.mail&&e.value.name&&(n=await u("/user",{method:"PATCH",body:{mail:e.value.mail.trim(),name:e.value.name.trim(),password:e.value.password?e.value.password:void 0}}))}return(_,t)=>(f(),v("main",M,[k(L,{title:"Аккаунт",description:"Здесь вы можете управлять своим аккаунтом"}),o("form",{onSubmit:t[4]||(t[4]=P(()=>{},["prevent"])),class:"profile-info column"},[o("div",U,[o("div",D,[o("img",{class:"profile",src:s(e).photo?s(e).photo:"/no-user-profile.svg",alt:""},null,8,I),o("label",j,[o("input",{onChange:w,type:"file",accept:"image/jpg,image/jpeg,image/png,image/svg"},null,32),A])])]),o("div",F,[N,d(o("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).name=a),placeholder:"Введите ваше имя",type:"text"},null,512),[[c,s(e).name]])]),o("div",q,[E,d(o("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).mail=a),placeholder:"Введите вашу почту",type:"text"},null,512),[[c,s(e).mail]])]),o("div",H,[O,d(o("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s(e).password=a),placeholder:"Введите ваш новый пароль",type:"password"},null,512),[[c,s(e).password]])]),o("div",Z,[z,d(o("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s(e).confirmPassword=a),placeholder:"Повторите ваш новый пароль",type:"password"},null,512),[[c,s(e).confirmPassword]])]),s(p)?(f(),v("p",G,b(s(p)),1)):V("",!0),o("div",{class:"action"},[o("button",{onClick:g,class:"save blue"}," Сохранить ")])],32)]))}}),X=B(J,[["__scopeId","data-v-d725f373"]]);export{X as default};