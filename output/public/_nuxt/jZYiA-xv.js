import{u as y,a as K}from"./BzyvTdK6.js";import{n as Q,S as W,C as X,E as Y}from"./B60CRdtE.js";import{n as T,z as D,A as Z,r as f,g as z,B as E,s as P,o as n,c as r,a as e,d as B,t as k,u as i,C as ee,F as b,D as x,E as R,x as S,p as U,e as L,_ as N,q,v as te,G as w,b as M,w as V,H as $,y as se,I as oe,J as le}from"./DJOztor7.js";import{_ as ne}from"./DlZI_DoU.js";import ae from"./Dx09xZPn.js";import{P as ie}from"./BKhE2TgR.js";import{M as ce}from"./I9y1Gozj.js";import{T as re}from"./D1u0PEr_.js";const G=o=>(U("data-v-aea6e6e0"),o=o(),L(),o),de=G(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"},[e("path",{d:"M13.6663 1.5L7.24967 7.91667L1.5 1.5",stroke:"#667085","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ue={key:0,class:"list-select-component"},me=["onClick"],pe=G(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"9",viewBox:"0 0 12 9",fill:"none"},[e("path",{d:"M10.6663 1.5L4.24967 7.91667L1.33301 5",stroke:"#2E90FA","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),_e=T({__name:"Select",props:D({listSelect:{}},{modelValue:{},modelModifiers:{}}),emits:D(["select"],["update:modelValue"]),setup(o,{emit:h}){const m=Z(o,"modelValue"),d=o,c=h,s=f(!1);z(()=>d.listSelect,()=>{d.listSelect.length>0&&!m.value&&l(0)},{immediate:!0});function l(t){m.value!==d.listSelect[t]&&(m.value=d.listSelect[t],s.value=!1,c("select",t))}return(t,g)=>{const a=E("out-click");return P((n(),r("div",{class:R(["select",i(s)?"active":""])},[e("button",{type:"button",onClick:g[0]||(g[0]=v=>s.value=!i(s)),style:ee({justifyContent:m.value?"":"flex-end"}),class:"open white"},[B(k(m.value)+" ",1),de],4),i(s)?(n(),r("ul",ue,[(n(!0),r(b,null,x(t.listSelect,(v,j)=>(n(),r("li",null,[e("button",{type:"button",onClick:A=>l(j),class:R([v===m.value?"selected":""])},[B(k(v)+" ",1),pe],10,me)]))),256))])):S("",!0)],2)),[[a,()=>{s.value=!1}]])}}}),he=N(_e,[["__scopeId","data-v-aea6e6e0"]]),C=o=>(U("data-v-4650cd8a"),o=o(),L(),o),ve={class:"modal-block"},fe=C(()=>e("p",{class:"modal-name"},"Создание команды",-1)),we=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[e("path",{d:"M11 1L1 11M1 1L11 11",stroke:"#667085","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ge=[we],ke=C(()=>e("hr",null,null,-1)),Ce={class:"content-modal modal-block column"},$e={class:"input-container column"},ye=C(()=>e("p",{class:"input-name"},"Название команды",-1)),Se={class:"input-container column"},be=C(()=>e("p",{class:"input-name"},"Добавление участников",-1)),xe=["onClick"],Me=["src"],Ve={class:"login"},je={class:"full-name"},Ie={class:"includes-participants column"},Be={class:"include-profile"},Te=["src"],Pe={class:"login"},Ue={class:"full-name"},Le=["onClick"],Ne=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("path",{d:"M10.6667 4.00001V3.46668C10.6667 2.71994 10.6667 2.34657 10.5213 2.06136C10.3935 1.81047 10.1895 1.6065 9.93865 1.47867C9.65344 1.33334 9.28007 1.33334 8.53333 1.33334H7.46667C6.71993 1.33334 6.34656 1.33334 6.06135 1.47867C5.81046 1.6065 5.60649 1.81047 5.47866 2.06136C5.33333 2.34657 5.33333 2.71994 5.33333 3.46668V4.00001M2 4.00001H14M12.6667 4.00001V11.4667C12.6667 12.5868 12.6667 13.1468 12.4487 13.5747C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5747C3.33333 13.1468 3.33333 12.5868 3.33333 11.4667V4.00001",stroke:"#F04438","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),He=[Ne],Ee=C(()=>e("footer",null,[e("button",{type:"submit",class:"blue"},"Создать")],-1)),Fe=T({__name:"ContentModalCreateTeam",emits:["close"],async setup(o,{emit:h}){let m,d;const c=h,s=f(""),l=f(""),t=f(([m,d]=q(()=>y("/role")),m=await m,d(),m));console.log(t);const g=f([]),a=f([]),v=f(!1);function j(_){var p;console.log(_.id),(a.value.length<0||!a.value.find(u=>u.id===_.id))&&(a.value.push({..._,role:t.value?t.value[((p=t.value)==null?void 0:p.length)-1].id:a.value.length?3:1}),v.value=!1)}function A(_){a.value.splice(_)}function J(_,p){a.value[p].role=t.value?t.value[_].id:void 0}async function O(){try{let _=await y("team",{method:"POST",body:{name:l.value,participates:a.value.map(p=>({id:p.id,role:p.role}))}});console.log(_),_&&oe(`/team/${_.id}`)}catch(_){console.log(_.message)}}return z(s,async()=>{g.value=await y("/user/search",{query:{name:s.value}})},{immediate:!0}),(_,p)=>(n(),r("form",{onSubmit:se(O,["prevent"]),class:"white-window column"},[e("header",ve,[fe,e("button",{class:"close",onClick:p[0]||(p[0]=u=>c("close"))},ge)]),ke,e("div",Ce,[e("div",$e,[ye,P(e("input",{"onUpdate:modelValue":p[1]||(p[1]=u=>w(l)?l.value=u:null),placeholder:"Введите название команды",type:"text"},null,512),[[te,i(l)]])]),e("div",Se,[be,M(W,{attributes:{placeholder:"@login"},"is-search":i(v),"onUpdate:isSearch":p[2]||(p[2]=u=>w(v)?v.value=u:null),modelValue:i(s),"onUpdate:modelValue":p[3]||(p[3]=u=>w(s)?s.value=u:null),onSelect:j},{default:V(()=>[(n(!0),r(b,null,x(i(g),u=>(n(),r("li",{onClick:H=>j(u),class:"profile-search"},[e("img",{class:"profile-photo",src:u.photo??i(Q),alt:""},null,8,Me),e("p",Ve,"@"+k(u.login),1),e("p",je,k(u.name),1)],8,xe))),256))]),_:1},8,["is-search","modelValue"]),e("ul",Ie,[i(a)?(n(!0),r(b,{key:0},x(i(a),(u,H)=>(n(),r("li",Be,[e("img",{class:"profile-photo",src:u.photo,alt:""},null,8,Te),e("p",Pe,k(u.login),1),e("p",Ue,k(u.name),1),i(t)?(n(),$(he,{key:0,class:"select-role",onSelect:I=>J(I,H),"list-select":i(t).map(I=>I.nameRu)},null,8,["onSelect","list-select"])):S("",!0),e("button",{onClick:I=>A(H),class:"white delete-user"},He,8,Le)]))),256)):S("",!0)])]),Ee])],32))}}),Ae=N(Fe,[["__scopeId","data-v-4650cd8a"]]),F=o=>(U("data-v-398ca48a"),o=o(),L(),o),De={class:"team-content-component"},Re={class:"title-container"},ze={class:"team-name"},qe={class:"btns"},Ge=F(()=>e("button",{class:"clear managment"},"Управлять",-1)),Je=F(()=>e("button",{class:"white add-paticipant"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[e("path",{d:"M10.0001 4.16667V15.8333M4.16675 10H15.8334",stroke:"#667085","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),Oe={class:"last-projects-container"},Ke=F(()=>e("p",{class:"title"},"Последние проекты",-1)),Qe={class:"last-projects"},We=T({__name:"TeamContent",props:{teamName:{},teamId:{},users:{}},async setup(o){let h,m;const d=o,c=f();async function s(){try{let l=await y(`/team/${d.teamId}`);l&&l.projects&&(c.value=l==null?void 0:l.projects),console.log(c.value)}catch(l){console.error(l)}}return[h,m]=q(()=>s()),await h,m(),(l,t)=>{const g=ne,a=E("crop-content");return n(),r("div",De,[e("div",Re,[e("p",ze,k(l.teamName),1),e("div",qe,[Ge,M(g,{to:`team/${l.teamId}`,class:"white"},{default:V(()=>[B(" Показать все проекты ")]),_:1},8,["to"])])]),M(ae,{list:l.users,class:"list-participants"},{default:V(()=>[Je]),_:1},8,["list"]),e("div",Oe,[Ke,P((n(),r("div",Qe,[(n(!0),r(b,null,x(i(c),v=>(n(),$(ie,{photo:v.photo,id:v.id,name:v.name},null,8,["photo","id","name"]))),256))])),[[a]])])])}}}),Xe=N(We,[["__scopeId","data-v-398ca48a"]]),Ye=le("user",{state:()=>({user:{},roles:[]}),actions:{async getUser(){K("access_token");let o=await y("/user");this.user=o,console.log(this.user)}}}),Ze=o=>(U("data-v-6c573ac4"),o=o(),L(),o),et={class:"padding-page"},tt={style:{position:"relative",height:"fit-content",width:"fit-content"},class:"btn-container"},st=Ze(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[e("path",{d:"M10.0001 4.16667V15.8333M4.16675 10H15.8334",stroke:"white","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ot={key:0,class:"list-select-component"},lt={key:1,class:"content-main-page"},nt={class:"teams"},at={class:"team white-block"},it=T({__name:"index",setup(o){Ye();const h=f();async function m(){try{let l=await y("/team");h.value=l,console.log(h.value)}catch(l){console.error(l)}}m();let d=f(!1),c=f(!1),s=f(!1);return(l,t)=>{const g=E("out-click");return n(),r(b,null,[i(c)||i(s)?(n(),$(ce,{key:0,onClose:t[2]||(t[2]=()=>{w(c)?c.value=!1:c=!1,w(s)?s.value=!1:s=!1})},{default:V(()=>[i(c)?(n(),$(Ae,{key:0,onClose:t[0]||(t[0]=a=>w(c)?c.value=!1:c=!1)})):i(s)?(n(),$(X,{key:1,onClose:t[1]||(t[1]=a=>w(s)?s.value=!1:s=!1)})):S("",!0)]),_:1})):S("",!0),e("main",et,[M(re,{title:"Главная",description:"Здесь вы можете управлять личными проектами или командами, в которых состоите."},{default:V(()=>[P((n(),r("div",tt,[e("button",{onClick:t[3]||(t[3]=a=>w(d)?d.value=!0:d=!0),class:"blue add-team"},[st,B(" Создать ")]),i(d)?(n(),r("ul",ot,[e("li",null,[e("button",{class:"select-item",onClick:t[4]||(t[4]=a=>w(c)?c.value=!0:c=!0)}," Создать команду ")]),e("li",null,[e("button",{onClick:t[5]||(t[5]=a=>w(s)?s.value=!0:s=!0),class:"select-item"}," Создать проект ")])])):S("",!0)])),[[g,()=>w(d)?d.value=!1:d=!1]])]),_:1}),i(h)&&i(h).length==0?(n(),$(Y,{key:0,description:"Пока ничего нет. <br> Но вы можете создать собственную команду команду!",preview:"@/assets/img/empty-emoji.png"})):(n(),r("div",lt,[e("section",nt,[(n(!0),r(b,null,x(i(h),a=>(n(),r("div",at,[M(Xe,{users:a.users,"team-id":a.teamId,"team-name":a.teamName},null,8,["users","team-id","team-name"])]))),256))])]))])],64)}}}),vt=N(it,[["__scopeId","data-v-6c573ac4"]]);export{vt as default};
