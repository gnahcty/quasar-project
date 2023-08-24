import{u as ae,a as ne,b as le,c as ie,f as J,d as re}from"./use-key-composition.758d90bf.js";import{r as G,w as I,H as L,I as ue,c as V,G as oe,J as se,o as fe,h as H,K as de,g as ce,L as X}from"./index.ec6ff545.js";import{u as ge,a as me}from"./use-form.b2201d37.js";import{a as ve}from"./use-timeout.66cac902.js";const p={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},U={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},te=Object.keys(U);te.forEach(e=>{U[e].regex=new RegExp(U[e].pattern)});const he=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+te.join("")+"])|(.)","g"),ee=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),ke={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Me(e,C,B,S){let c,g,A,E,P,M;const w=G(null),f=G(b());function Y(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,D),I(()=>e.mask,l=>{if(l!==void 0)N(f.value,!0);else{const a=F(f.value);D(),e.modelValue!==a&&C("update:modelValue",a)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&N(f.value,!0)}),I(()=>e.unmaskedValue,()=>{w.value===!0&&N(f.value)});function b(){if(D(),w.value===!0){const l=q(F(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function j(l){if(l<c.length)return c.slice(-l);let a="",i=c;const n=i.indexOf(h);if(n>-1){for(let u=l-i.length;u>0;u--)a+=h;i=i.slice(0,n)+a+i.slice(n)}return i}function D(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&Y(),w.value===!1){E=void 0,c="",g="";return}const l=p[e.mask]===void 0?e.mask:p[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(ee,"\\$&"),n=[],u=[],r=[];let v=e.reverseFillMask===!0,o="",s="";l.replace(he,(k,t,m,T,R)=>{if(T!==void 0){const x=U[T];r.push(x),s=x.negate,v===!0&&(u.push("(?:"+s+"+)?("+x.pattern+"+)?(?:"+s+"+)?("+x.pattern+"+)?"),v=!1),u.push("(?:"+s+"+)?("+x.pattern+")?")}else if(m!==void 0)o="\\"+(m==="\\"?"":m),r.push(m),n.push("([^"+o+"]+)?"+o+"?");else{const x=t!==void 0?t:R;o=x==="\\"?"\\\\\\\\":x.replace(ee,"\\\\$&"),r.push(x),n.push("([^"+o+"]+)?"+o+"?")}});const K=new RegExp("^"+n.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),Z=u.length-1,d=u.map((k,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+k):t===Z?new RegExp("^"+k+"("+(s===""?".":s)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+k));A=r,E=k=>{const t=K.exec(e.reverseFillMask===!0?k:k.slice(0,r.length+1));t!==null&&(k=t.slice(1).join(""));const m=[],T=d.length;for(let R=0,x=k;R<T;R++){const z=d[R].exec(x);if(z===null)break;x=x.slice(z.shift().length),m.push(...z)}return m.length!==0?m.join(""):k},c=r.map(k=>typeof k=="string"?k:h).join(""),g=c.split(h).join(a)}function N(l,a,i){const n=S.value,u=n.selectionEnd,r=n.value.length-u,v=F(l);a===!0&&D();const o=q(v),s=e.fillMask!==!1?$(o):o,K=f.value!==s;n.value!==s&&(n.value=s),K===!0&&(f.value=s),document.activeElement===n&&L(()=>{if(s===g){const d=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(d,d,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const d=n.selectionEnd;let k=u-1;for(let t=P;t<=k&&t<d;t++)c[t]!==h&&k++;y.right(n,k);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const d=e.reverseFillMask===!0?u===0?s.length>o.length?1:0:Math.max(0,s.length-(s===g?0:Math.min(o.length,r)+1))+1:u;n.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(K===!0){const d=Math.max(0,s.length-(s===g?0:Math.min(o.length,r+1)));d===1&&u===1?n.setSelectionRange(d,d,"forward"):y.rightReverse(n,d)}else{const d=s.length-r;n.setSelectionRange(d,d,"backward")}else if(K===!0){const d=Math.max(0,c.indexOf(h),Math.min(o.length,u)-1);y.right(n,d)}else{const d=u-1;y.right(n,d)}});const Z=e.unmaskedValue===!0?F(s):s;String(e.modelValue)!==Z&&B(Z,!0)}function Q(l,a,i){const n=q(F(l.value));a=Math.max(0,c.indexOf(h),Math.min(n.length,a)),P=a,l.setSelectionRange(a,i,"forward")}const y={left(l,a){const i=c.slice(a-1).indexOf(h)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(c[n]===h){a=n,i===!0&&a++;break}if(n<0&&c[a]!==void 0&&c[a]!==h)return y.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(c[n]===h){a=n;break}else c[n-1]===h&&(a=n);if(n>i&&c[a-1]!==void 0&&c[a-1]!==h)return y.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=j(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===h){a=n;break}else if(i[n]===h&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==h)return y.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=j(i),u=n.slice(0,a+1).indexOf(h)===-1;let r=Math.min(i,a+1);for(;r<=i;r++)if(n[r-1]===h){a=r,a>0&&u===!0&&a--;break}if(r>i&&n[a-1]!==void 0&&n[a-1]!==h)return y.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function W(l){C("click",l),M=void 0}function _(l){if(C("keydown",l),ue(l)===!0)return;const a=S.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(M=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&M===void 0&&(M=a.selectionDirection==="forward"?i:n);const u=y[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,M===i?n:i),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(M,r),Math.max(M,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(y.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(y.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function q(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const a=A;let i=0,n="";for(let u=0;u<a.length;u++){const r=l[i],v=a[u];if(typeof v=="string")n+=v,r===v&&i++;else if(r!==void 0&&v.regex.test(r))n+=v.transform!==void 0?v.transform(r):r,i++;else return n}return n}function O(l){const a=A,i=c.indexOf(h);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n>-1;r--){const v=a[r];let o=l[n];if(typeof v=="string")u=v+u,o===v&&n--;else if(o!==void 0&&v.regex.test(o))do u=(v.transform!==void 0?v.transform(o):o)+u,n--,o=l[n];while(i===r&&o!==void 0&&v.regex.test(o));else return u}return u}function F(l){return typeof l!="string"||E===void 0?typeof l=="number"?E(""+l):l:E(l)}function $(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:f,hasMask:w,moveCursorForPaste:Q,updateMaskValue:N,onMaskedKeydown:_,onMaskedClick:W}}function we(e,C){function B(){const S=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(S)===S&&("length"in S?Array.from(S):[S]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return C===!0?V(()=>{if(e.type==="file")return B()}):V(B)}var be=oe({name:"QInput",inheritAttrs:!1,props:{...ae,...ke,...ge,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ne,"paste","change","keydown","click","animationend"],setup(e,{emit:C,attrs:B}){const{proxy:S}=ce(),{$q:c}=S,g={};let A=NaN,E,P,M=null,w;const f=G(null),Y=me(e),{innerValue:b,hasMask:j,moveCursorForPaste:D,updateMaskValue:N,onMaskedKeydown:Q,onMaskedClick:y}=Me(e,C,o,f),W=we(e,!0),_=V(()=>J(b.value)),q=re(r),O=le(),F=V(()=>e.type==="textarea"||e.autogrow===!0),$=V(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),l=V(()=>{const t={...O.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:K,onBlur:Z,onFocus:X};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=q,j.value===!0&&(t.onKeydown=Q,t.onClick=y),e.autogrow===!0&&(t.onAnimationend=v),t}),a=V(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Y.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(j.value===!0){if(P===!0&&(P=!1,String(t)===A))return;N(t)}else b.value!==t&&(b.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(E===!0?E=!1:delete g.value));e.autogrow===!0&&L(s)}),I(()=>e.autogrow,t=>{t===!0?L(s):f.value!==null&&B.rows>0&&(f.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&L(s)});function i(){ve(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==O.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(j.value===!0&&e.reverseFillMask!==!0){const m=t.target;D(m,m.selectionStart,m.selectionEnd)}C("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){C("update:modelValue",t.target.files);return}const m=t.target.value;if(t.target.qComposing===!0){g.value=m;return}if(j.value===!0)N(m,!1,t.inputType);else if(o(m),$.value===!0&&t.target===document.activeElement){const{selectionStart:T,selectionEnd:R}=t.target;T!==void 0&&R!==void 0&&L(()=>{t.target===document.activeElement&&m.indexOf(t.target.value)===0&&t.target.setSelectionRange(T,R)})}e.autogrow===!0&&s()}function v(t){C("animationend",t),s()}function o(t,m){w=()=>{M=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&A!==t&&(A=t,m===!0&&(P=!0),C("update:modelValue",t),L(()=>{A===t&&(A=NaN)})),w=void 0},e.type==="number"&&(E=!0,g.value=t),e.debounce!==void 0?(M!==null&&clearTimeout(M),g.value=t,M=setTimeout(w,e.debounce)):w()}function s(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const m=t.parentNode.style,{scrollTop:T}=t,{overflowY:R,maxHeight:x}=c.platform.is.firefox===!0?{}:window.getComputedStyle(t),z=R!==void 0&&R!=="scroll";z===!0&&(t.style.overflowY="hidden"),m.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",z===!0&&(t.style.overflowY=parseInt(x,10)<t.scrollHeight?"auto":"hidden"),m.marginBottom="",t.scrollTop=T}})}function K(t){q(t),M!==null&&(clearTimeout(M),M=null),w!==void 0&&w(),C("change",t.target.value)}function Z(t){t!==void 0&&X(t),M!==null&&(clearTimeout(M),M=null),w!==void 0&&w(),E=!1,P=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=b.value!==void 0?b.value:"")})}function d(){return g.hasOwnProperty("value")===!0?g.value:b.value!==void 0?b.value:""}se(()=>{Z()}),fe(()=>{e.autogrow===!0&&s()}),Object.assign(O,{innerValue:b,fieldClass:V(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:V(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:o,hasValue:_,floatingLabel:V(()=>_.value===!0&&(e.type!=="number"||isNaN(b.value)===!1)||J(e.displayValue)),getControl:()=>H(F.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:d()}:W.value}),getShadowControl:()=>H("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[H("span",{class:"invisible"},d()),H("span",e.shadowText)])});const k=ie(O);return Object.assign(S,{focus:i,select:n,getNativeElement:()=>f.value}),de(S,"nativeEl",()=>f.value),k}});export{be as Q};