import{u as b,m as y,W as q,o as j,p as C,j as l,k as c,t as s,ag as o,F as B,aj as N,d as i,s as f,x as g,Q as V,v as D,ah as L,ad as $,ak as F}from"./index.db1df928.js";import{u as O}from"./checkLogin.3fa48bdf.js";import"./use-quasar.b9d28179.js";const Q={padding:"",class:"row justify-center q-pt-xl"},S={class:"col-12 col-md-10 col-lg-8 row"},T={class:"col-12 col-md-8 q-px-md"},U={class:"titles bdb4"},A={class:"row"},E=["src"],M={class:"col-12 col-md-4 q-pa-xl"},R={class:"row w100 justify-start items-center"},W={class:"col-5"},z=["src"],G={class:"col-auto title3 q-ml-sm text-bold text-center"},H={class:"q-my-md q-pl-lg q-pb-md flex w100 justify-between items-center bdb4"},I={class:"text-h6"},J={key:0,class:"q-pa-lg text-h5 text-bold"},Z={__name:"ListDetails",setup(K){const v=b(),{loginTryCatch:x}=O(),k=y(),t=q({}),n=async()=>{const{data:a}=await $.get(`lists/${k.params.id}`);Object.assign(t,a.results)},w=async a=>{await F.post("lists/like",{id:a}),n()};return j(n),(a,r)=>{var _,u,m,p,h;const d=C("router-link");return l(),c("div",Q,[s("div",S,[s("div",T,[s("div",U,o(t.name),1),s("div",A,[(l(!0),c(B,null,N(t.films,e=>(l(),c("div",{class:"col-6 col-md-4 col-lg-3 q-pa-md flex flex-center",key:e.id},[i(d,{to:"/films/"+e.id},{default:f(()=>[s("img",{src:"http://image.tmdb.org/t/p/w300/"+e.poster,class:"w100 rounded15 border5"},null,8,E)]),_:2},1032,["to"])]))),128))])]),s("div",M,[s("div",R,[s("div",W,[i(d,{to:`/profile/${(_=t.user)==null?void 0:_.username}/recent`},{default:f(()=>{var e;return[s("img",{src:(e=t.user)==null?void 0:e.avatar,class:"w100"},null,8,z)]}),_:1},8,["to"])]),s("div",G,o((u=t.user)==null?void 0:u.username),1)]),s("div",H,[s("span",I,o((m=t.films)==null?void 0:m.length)+" films",1),s("span",null,[i(V,{flat:"",round:"",icon:"favorite",onClick:r[0]||(r[0]=e=>g(x)(()=>w(t._id))),color:((p=t.likes)==null?void 0:p.indexOf(g(v)._id))===-1?"black":"red"},null,8,["color"]),D(" "+o((h=t.likes)==null?void 0:h.length),1)])]),t.description?(l(),c("div",J,o(t.description),1)):L("",!0)])])])}}};export{Z as default};