import{a2 as y,aF as w,q as p,j as u,k as f,d as a,t as d,v as l,al as c,x as _,F as q,ao as k}from"./index.38b11327.js";import{Q as v}from"./QImg.af54b30d.js";import{Q as C}from"./QTooltip.83d447e2.js";const b={threshold:0,root:null,rootMargin:"0px"};function h(t,e,s){let r,o,i;typeof s=="function"?(r=s,o=b,i=e.cfg===void 0):(r=s.handler,o=Object.assign({},b,s.cfg),i=e.cfg===void 0||w(e.cfg,o)===!1),e.handler!==r&&(e.handler=r),i===!0&&(e.cfg=o,e.observer!==void 0&&e.observer.unobserve(t),e.observer=new IntersectionObserver(([n])=>{if(typeof e.handler=="function"){if(n.rootBounds===null&&document.body.contains(t)===!0){e.observer.unobserve(t),e.observer.observe(t);return}(e.handler(n,e.observer)===!1||e.once===!0&&n.isIntersecting===!0)&&g(t)}},o),e.observer.observe(t))}function g(t){const e=t.__qvisible;e!==void 0&&(e.observer!==void 0&&e.observer.unobserve(t),delete t.__qvisible)}var F=y({name:"intersection",mounted(t,{modifiers:e,value:s}){const r={once:e.once===!0};h(t,r,s),t.__qvisible=r},updated(t,e){const s=t.__qvisible;s!==void 0&&h(t,s,e.value)},beforeUnmount:g});const I={class:"arched column justify-around items-center bgea q-pt-md-md q-pt-lg-xl"},N={class:"text-bold text-h3 q-mt-xs"},j={class:"text-bold row gt-md"},x={class:"q-mr-md"},B={class:"gt-sm col-4 row q-gutter-md q-pa-md flex-center",style:{width:"100%"}},L={__name:"UserArch",props:{_id:{type:String,default:()=>""},username:{type:String,default:()=>""},avatar:{type:String,default:()=>""},reviewed:{type:Number,default:()=>0},watched:{type:Number,default:()=>0},latestComments:{type:Array,default:()=>[]}},setup(t){const e=t;return(s,r)=>{const o=p("router-link"),i=p("RouterLink");return u(),f("div",I,[a(o,{to:`/profile/${e.username}/recent`,style:{width:"70%"}},{default:d(()=>[a(v,{src:e.avatar,class:"round",style:{border:"3px solid #000"}},null,8,["src"])]),_:1},8,["to"]),a(o,{to:`/profile/${e.username}/recent`,class:"text-center",style:{width:"70%"}},{default:d(()=>[l("span",N,c(e.username),1)]),_:1},8,["to"]),l("div",j,[l("span",x,c(e.watched)+" films",1),_(),l("span",null,c(e.reviewed)+" reviews",1)]),l("div",B,[(u(!0),f(q,null,k(e.latestComments,(n,m)=>(u(),f("div",{class:"col flex justify-center",key:m},[a(i,{to:"/films/"+n.film,class:"full-width"},{default:d(()=>[a(v,{src:"https://image.tmdb.org/t/p/w300/"+n.poster,class:"ratio full-width rounded15",style:{border:"3px solid #000"}},{default:d(()=>[a(C,{anchor:"center middle",self:"top middle"},{default:d(()=>[_(c(n.title),1)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["to"])]))),128))])])}}};export{F as I,L as _};
