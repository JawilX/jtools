import{ay as B,d as G,j as R,q as w,v as j,w as E,x as _,bw as I,ad as v,z as M,h as b,bx as P}from"./index-EZkD0_Zx.js";function T(e,n="default",o=[]){const i=e.$slots[n];return i===void 0?o:i()}let y;const A=()=>{if(!B)return!0;if(y===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),y=n}return y},L=Object.assign(Object.assign({},w.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),W=G({name:"Space",props:L,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=R(e),t=w("Space","-space",void 0,P,e,n),i=j("Space",o,n);return{useGap:A(),rtlEnabled:i,mergedClsPrefix:n,margin:E(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[_("gap",a)]:r}}=t.value,{row:f,col:d}=I(r);return{horizontal:v(d),vertical:v(f)}})}},render(){const{vertical:e,align:n,inline:o,justify:t,itemClass:i,itemStyle:a,margin:r,wrap:f,mergedClsPrefix:d,rtlEnabled:h,useGap:p,wrapItem:S,internalUseGap:C}=this,u=M(T(this));if(!u.length)return null;const x=`${r.horizontal}px`,m=`${r.horizontal/2}px`,z=`${r.vertical}px`,l=`${r.vertical/2}px`,c=u.length-1,g=t.startsWith("space-");return b("div",{role:"none",class:[`${d}-space`,h&&`${d}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!f||e?"nowrap":"wrap",marginTop:p||e?"":`-${l}`,marginBottom:p||e?"":`-${l}`,alignItems:n,gap:p?`${r.vertical}px ${r.horizontal}px`:""}},!S&&(p||C)?u:u.map(($,s)=>b("div",{role:"none",class:i,style:[a,{maxWidth:"100%"},p?"":e?{marginBottom:s!==c?z:""}:h?{marginLeft:g?t==="space-between"&&s===c?"":m:s!==c?x:"",marginRight:g?t==="space-between"&&s===0?"":m:"",paddingTop:l,paddingBottom:l}:{marginRight:g?t==="space-between"&&s===c?"":m:s!==c?x:"",marginLeft:g?t==="space-between"&&s===0?"":m:"",paddingTop:l,paddingBottom:l}]},$)))}});export{W as _,T as g};
