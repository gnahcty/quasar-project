import{Q as c}from"./QImg.41799b64.js";import{Q as f}from"./QTooltip.81eea7d2.js";import{p as i,j as l,k as d,d as e,s,t as r,ag as o,v as m,F as h,aj as y}from"./index.64fd29e4.js";const g={class:"arched column justify-around items-center bgea q-pt-xl gt-md"},x={class:"text-bold text-h3 q-mt-xs"},w={class:"text-bold row gt-md"},v={class:"q-mr-md"},b={class:"gt-sm col-4 row q-gutter-md q-pa-md flex-center",style:{width:"100%"}},Q={__name:"UserArch",props:{_id:{type:String,default:()=>""},username:{type:String,default:()=>""},avatar:{type:String,default:()=>""},reviewed:{type:Number,default:()=>0},watched:{type:Number,default:()=>0},latestComments:{type:Array,default:()=>[]}},setup(u){const t=u;return(k,q)=>{const n=i("router-link"),p=i("RouterLink");return l(),d("div",g,[e(n,{to:`/profile/${t.username}/recent`,style:{width:"70%"}},{default:s(()=>[e(c,{src:t.avatar,class:"round",style:{border:"3px solid #000"}},null,8,["src"])]),_:1},8,["to"]),e(n,{to:`/profile/${t.username}/recent`,class:"text-center",style:{width:"70%"}},{default:s(()=>[r("span",x,o(t.username),1)]),_:1},8,["to"]),r("div",w,[r("span",v,o(t.watched)+" films",1),m(),r("span",null,o(t.reviewed)+" reviews",1)]),r("div",b,[(l(!0),d(h,null,y(t.latestComments,(a,_)=>(l(),d("div",{class:"col flex justify-center",key:_},[e(p,{to:"/films/"+a.film,class:"full-width"},{default:s(()=>[e(c,{src:"http://image.tmdb.org/t/p/w300/"+a.poster,class:"ratio full-width rounded15",style:{border:"3px solid #000"}},{default:s(()=>[e(f,{anchor:"center middle",self:"top middle"},{default:s(()=>[m(o(a.title),1)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["to"])]))),128))])])}}};export{Q as _};
