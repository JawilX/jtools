import{o as r,l as n,n as t,p as O,bs as V,bt as H,d as q,j as D,q as b,v as F,w as c,x as a,y as I,h as K,bu as N}from"./index-bc9287d3.js";const W=r([n("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),t("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),t("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),t("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),t("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),O("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),V(n("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),H(n("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),A=Object.assign(Object.assign({},b.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),J=q({name:"Table",props:A,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:g}=D(e),h=b("Table","-table",W,N,e,o),v=F("Table",g,o),s=c(()=>{const{size:l}=e,{self:{borderColor:p,tdColor:m,tdColorModal:u,tdColorPopover:f,thColor:x,thColorModal:C,thColorPopover:z,thTextColor:k,tdTextColor:P,borderRadius:R,thFontWeight:y,lineHeight:B,borderColorModal:w,borderColorPopover:T,tdColorStriped:$,tdColorStripedModal:M,tdColorStripedPopover:S,[a("fontSize",l)]:_,[a("tdPadding",l)]:E,[a("thPadding",l)]:j},common:{cubicBezierEaseInOut:L}}=h.value;return{"--n-bezier":L,"--n-td-color":m,"--n-td-color-modal":u,"--n-td-color-popover":f,"--n-td-text-color":P,"--n-border-color":p,"--n-border-color-modal":w,"--n-border-color-popover":T,"--n-border-radius":R,"--n-font-size":_,"--n-th-color":x,"--n-th-color-modal":C,"--n-th-color-popover":z,"--n-th-font-weight":y,"--n-th-text-color":k,"--n-line-height":B,"--n-td-padding":E,"--n-th-padding":j,"--n-td-color-striped":$,"--n-td-color-striped-modal":M,"--n-td-color-striped-popover":S}}),d=i?I("table",c(()=>e.size[0]),s,e):void 0;return{rtlEnabled:v,mergedClsPrefix:o,cssVars:i?void 0:s,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),K("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{J as _};
