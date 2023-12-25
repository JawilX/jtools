import{_ as at}from"./BaseTitle.vue_vue_type_script_setup_true_lang-tx1nfh-K.js";import{c as st}from"./index-bHauXoKV.js";import{d as ie,r as A,u as ct,a4 as Ue,M as gn,h as u,a5 as dt,a6 as Cn,a7 as zn,l as N,m as T,o as X,j as bn,q as de,a8 as ut,f as pn,a9 as ft,w as K,x as H,y as Ae,N as Tn,g as en,E as _e,aa as Mn,n as U,p as Se,ab as In,t as Y,ac as ht,I as Fe,ad as vt,K as nn,s as fn,B as Ve,ae as gt,af as bt,ag as pt,v as mt,ah as wn,G as yt,c as Ct,ai as wt,k as re,aj as xt,J as kt,F as Bn,ak as St,e as Ot,al as Rt,O as _t,P as Ft,am as xn,an as Pt,ao as zt,ap as Tt,W as De,X as tn,Y as Ie,Z as on,_ as Be,a2 as kn,aq as Mt,a0 as le,ar as It,a3 as rn,$ as Bt,as as At,a1 as $t}from"./index-EZkD0_Zx.js";import{a as An,u as Sn}from"./Eye-8muYtmkb.js";import{N as Nt,u as Et}from"./Popover-Jc4tUJNo.js";import{c as Lt,a as Kt,i as mn,b as Dt,u as hn,V as Vt,d as jt,e as Wt}from"./Follower-MTVtQCYD.js";import{N as Ht,_ as Ut}from"./Input-pgzvNeUo.js";import{V as Gt,h as je,F as qt}from"./FocusDetector-Es5WrkfB.js";import{_ as Zt}from"./InputGroup-FUNiuO63.js";import{_ as Yt}from"./Table-0yuImfwA.js";import"./headers-egynYs5L.js";function Jt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ln(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const ve="v-hidden",Xt=Kt("[v-hidden]",{display:"none!important"}),On=ie({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=A(null),o=A(null);function i(a){const{value:l}=n,{getCounter:m,getTail:g}=e;let d;if(m!==void 0?d=m():d=o.value,!l||!d)return;d.hasAttribute(ve)&&d.removeAttribute(ve);const{children:v}=l;if(a.showAllItemsBeforeCalculate)for(const F of v)F.hasAttribute(ve)&&F.removeAttribute(ve);const k=l.offsetWidth,x=[],s=t.tail?g==null?void 0:g():null;let O=s?s.offsetWidth:0,M=!1;const S=l.children.length-(t.tail?1:0);for(let F=0;F<S-1;++F){if(F<0)continue;const p=v[F];if(M){p.hasAttribute(ve)||p.setAttribute(ve,"");continue}else p.hasAttribute(ve)&&p.removeAttribute(ve);const w=p.offsetWidth;if(O+=w,x[F]=w,O>k){const{updateCounter:P}=e;for(let $=F;$>=0;--$){const D=S-1-$;P!==void 0?P(D):d.textContent=`${D}`;const W=d.offsetWidth;if(O-=x[$],O+W<=k||$===0){M=!0,F=$-1,s&&(F===-1?(s.style.maxWidth=`${k-W}px`,s.style.boxSizing="border-box"):s.style.maxWidth="");const{onUpdateCount:E}=e;E&&E(D);break}}}}const{onUpdateOverflow:_}=e;M?_!==void 0&&_(!0):(_!==void 0&&_(!1),d.setAttribute(ve,""))}const c=ct();return Xt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Lt,ssr:c}),Ue(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return gn(()=>this.sync({showAllItemsBeforeCalculate:!1})),u("div",{class:"v-overflow",ref:"selfRef"},[dt(e,"default"),e.counter?e.counter():u("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function $n(e,t){t&&(Ue(()=>{const{value:n}=e;n&&Cn.registerHandler(n,t)}),zn(()=>{const{value:n}=e;n&&Cn.unregisterHandler(n)}))}const Qt=ie({name:"Checkmark",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),eo=ie({name:"Empty",render(){return u("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),u("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}});function Rn(e){return Array.isArray(e)?e:[e]}const vn={STOP:"STOP"};function Nn(e,t){const n=t(e);e.children!==void 0&&n!==vn.STOP&&e.children.forEach(o=>Nn(o,t))}function no(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?a=>{a.isLeaf||(o.push(a.key),c(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),c(a.children))};function c(a){a.forEach(i)}return c(e),o}function to(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function oo(e){return e.children}function ro(e){return e.key}function lo(){return!1}function io(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function ao(e){return e.disabled===!0}function so(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function an(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function sn(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function co(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function uo(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function fo(e){return(e==null?void 0:e.type)==="group"}function ho(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class vo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function go(e,t,n,o){return We(t.concat(e),n,o,!1)}function bo(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let c=i.parent;for(;c!==null&&!(c.disabled||n.has(c.key));)n.add(c.key),c=c.parent}}),n}function po(e,t,n,o){const i=We(t,n,o,!1),c=We(e,n,o,!0),a=bo(e,n),l=[];return i.forEach(m=>{(c.has(m)||a.has(m))&&l.push(m)}),l.forEach(m=>i.delete(m)),i}function cn(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:c,cascade:a,leafOnly:l,checkStrategy:m,allowNotLoaded:g}=e;if(!a)return o!==void 0?{checkedKeys:co(n,o),indeterminateKeys:Array.from(c)}:i!==void 0?{checkedKeys:uo(n,i),indeterminateKeys:Array.from(c)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(c)};const{levelTreeNodeMap:d}=t;let v;i!==void 0?v=po(i,n,t,g):o!==void 0?v=go(o,n,t,g):v=We(n,t,g,!1);const k=m==="parent",x=m==="child"||l,s=v,O=new Set,M=Math.max.apply(null,Array.from(d.keys()));for(let S=M;S>=0;S-=1){const _=S===0,F=d.get(S);for(const p of F){if(p.isLeaf)continue;const{key:w,shallowLoaded:P}=p;if(x&&P&&p.children.forEach(E=>{!E.disabled&&!E.isLeaf&&E.shallowLoaded&&s.has(E.key)&&s.delete(E.key)}),p.disabled||!P)continue;let $=!0,D=!1,W=!0;for(const E of p.children){const Z=E.key;if(!E.disabled){if(W&&(W=!1),s.has(Z))D=!0;else if(O.has(Z)){D=!0,$=!1;break}else if($=!1,D)break}}$&&!W?(k&&p.children.forEach(E=>{!E.disabled&&s.has(E.key)&&s.delete(E.key)}),s.add(w)):D&&O.add(w),_&&x&&s.has(w)&&s.delete(w)}}return{checkedKeys:Array.from(s),indeterminateKeys:Array.from(O)}}function We(e,t,n,o){const{treeNodeMap:i,getChildren:c}=t,a=new Set,l=new Set(e);return e.forEach(m=>{const g=i.get(m);g!==void 0&&Nn(g,d=>{if(d.disabled)return vn.STOP;const{key:v}=d;if(!a.has(v)&&(a.add(v),l.add(v),so(d.rawNode,c))){if(o)return vn.STOP;if(!n)throw new vo}})}),l}function mo(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const c=o.treeNodeMap;let a=e==null?null:(i=c.get(e))!==null&&i!==void 0?i:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(m=>m.key),l}function yo(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Co(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function _n(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?wo:Co,c={reverse:t==="prev"};let a=!1,l=null;function m(g){if(g!==null){if(g===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!g.disabled||o)&&!g.ignored&&!g.isGroup){l=g;return}if(g.isGroup){const d=yn(g,c);d!==null?l=d:m(i(g,n))}else{const d=i(g,!1);if(d!==null)m(d);else{const v=xo(g);v!=null&&v.isGroup?m(i(v,n)):n&&m(i(g,!0))}}}}return m(e),l}function wo(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function xo(e){return e.parent}function yn(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,c=n?i-1:0,a=n?-1:i,l=n?-1:1;for(let m=c;m!==a;m+=l){const g=o[m];if(!g.disabled&&!g.ignored)if(g.isGroup){const d=yn(g,t);if(d!==null)return d}else return g}}return null}const ko={getChild(){return this.ignored?null:yn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return _n(this,"next",e)},getPrev(e={}){return _n(this,"prev",e)}};function So(e,t){const n=t?new Set(t):void 0,o=[];function i(c){c.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&i(a.children)})}return i(e),o}function Oo(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function En(e,t,n,o,i,c=null,a=0){const l=[];return e.forEach((m,g)=>{var d;const v=Object.create(o);if(v.rawNode=m,v.siblings=l,v.level=a,v.index=g,v.isFirstChild=g===0,v.isLastChild=g+1===e.length,v.parent=c,!v.ignored){const k=i(m);Array.isArray(k)&&(v.children=En(k,t,n,o,i,v,a+1))}l.push(v),t.set(v.key,v),n.has(a)||n.set(a,[]),(d=n.get(a))===null||d===void 0||d.push(v)}),l}function Ro(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:c=ao,getIgnored:a=lo,getIsGroup:l=fo,getKey:m=ro}=t,g=(n=t.getChildren)!==null&&n!==void 0?n:oo,d=t.ignoreEmptyChildren?p=>{const w=g(p);return Array.isArray(w)?w.length?w:null:w}:g,v=Object.assign({get key(){return m(this.rawNode)},get disabled(){return c(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return to(this.rawNode,d)},get shallowLoaded(){return io(this.rawNode,d)},get ignored(){return a(this.rawNode)},contains(p){return Oo(this,p)}},ko),k=En(e,o,i,v,d);function x(p){if(p==null)return null;const w=o.get(p);return w&&!w.isGroup&&!w.ignored?w:null}function s(p){if(p==null)return null;const w=o.get(p);return w&&!w.ignored?w:null}function O(p,w){const P=s(p);return P?P.getPrev(w):null}function M(p,w){const P=s(p);return P?P.getNext(w):null}function S(p){const w=s(p);return w?w.getParent():null}function _(p){const w=s(p);return w?w.getChild():null}const F={treeNodes:k,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:d,getFlattenedNodes(p){return So(k,p)},getNode:x,getPrev:O,getNext:M,getParent:S,getChild:_,getFirstAvailableNode(){return yo(k)},getPath(p,w={}){return mo(p,w,F)},getCheckedKeys(p,w={}){const{cascade:P=!0,leafOnly:$=!1,checkStrategy:D="all",allowNotLoaded:W=!1}=w;return cn({checkedKeys:an(p),indeterminateKeys:sn(p),cascade:P,leafOnly:$,checkStrategy:D,allowNotLoaded:W},F)},check(p,w,P={}){const{cascade:$=!0,leafOnly:D=!1,checkStrategy:W="all",allowNotLoaded:E=!1}=P;return cn({checkedKeys:an(w),indeterminateKeys:sn(w),keysToCheck:p==null?[]:Rn(p),cascade:$,leafOnly:D,checkStrategy:W,allowNotLoaded:E},F)},uncheck(p,w,P={}){const{cascade:$=!0,leafOnly:D=!1,checkStrategy:W="all",allowNotLoaded:E=!1}=P;return cn({checkedKeys:an(w),indeterminateKeys:sn(w),keysToUncheck:p==null?[]:Rn(p),cascade:$,leafOnly:D,checkStrategy:W,allowNotLoaded:E},F)},getNonLeafKeys(p={}){return no(k,p)}};return F}const _o=N("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[T("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[X("+",[T("description",`
 margin-top: 8px;
 `)])]),T("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Fo=Object.assign(Object.assign({},de.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Po=ie({name:"Empty",props:Fo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=bn(e),o=de("Empty","-empty",_o,ut,e,t),{localeRef:i}=An("Empty"),c=pn(ft,null),a=K(()=>{var d,v,k;return(d=e.description)!==null&&d!==void 0?d:(k=(v=c==null?void 0:c.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||k===void 0?void 0:k.description}),l=K(()=>{var d,v;return((v=(d=c==null?void 0:c.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>u(eo,null))}),m=K(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:v},self:{[H("iconSize",d)]:k,[H("fontSize",d)]:x,textColor:s,iconColor:O,extraTextColor:M}}=o.value;return{"--n-icon-size":k,"--n-font-size":x,"--n-bezier":v,"--n-text-color":s,"--n-icon-color":O,"--n-extra-text-color":M}}),g=n?Ae("empty",K(()=>{let d="";const{size:v}=e;return d+=v[0],d}),m,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:K(()=>a.value||i.value.description),cssVars:n?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),u("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?u("div",{class:`${t}-empty__icon`},e.icon?e.icon():u(Tn,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?u("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?u("div",{class:`${t}-empty__extra`},e.extra()):null)}});function zo(e,t){return u(Mn,{name:"fade-in-scale-up-transition"},{default:()=>e?u(Tn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>u(Qt)}):null})}const Fn=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:c,renderOptionRef:a,labelFieldRef:l,valueFieldRef:m,showCheckmarkRef:g,nodePropsRef:d,handleOptionClick:v,handleOptionMouseEnter:k}=pn(mn),x=en(()=>{const{value:S}=n;return S?e.tmNode.key===S.key:!1});function s(S){const{tmNode:_}=e;_.disabled||v(S,_)}function O(S){const{tmNode:_}=e;_.disabled||k(S,_)}function M(S){const{tmNode:_}=e,{value:F}=x;_.disabled||F||k(S,_)}return{multiple:o,isGrouped:en(()=>{const{tmNode:S}=e,{parent:_}=S;return _&&_.rawNode.type==="group"}),showCheckmark:g,nodeProps:d,isPending:x,isSelected:en(()=>{const{value:S}=t,{value:_}=o;if(S===null)return!1;const F=e.tmNode.rawNode[m.value];if(_){const{value:p}=i;return p.has(F)}else return S===F}),labelField:l,renderLabel:c,renderOption:a,handleMouseMove:M,handleMouseEnter:O,handleClick:s}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:c,nodeProps:a,renderOption:l,renderLabel:m,handleClick:g,handleMouseEnter:d,handleMouseMove:v}=this,k=zo(n,e),x=m?[m(t,n),c&&k]:[_e(t[this.labelField],t,n),c&&k],s=a==null?void 0:a(t),O=u("div",Object.assign({},s,{class:[`${e}-base-select-option`,t.class,s==null?void 0:s.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:c}],style:[(s==null?void 0:s.style)||"",t.style||""],onClick:ln([g,s==null?void 0:s.onClick]),onMouseenter:ln([d,s==null?void 0:s.onMouseenter]),onMousemove:ln([v,s==null?void 0:s.onMousemove])}),u("div",{class:`${e}-base-select-option__content`},x));return t.render?t.render({node:O,option:t,selected:n}):l?l({node:O,option:t,selected:n}):O}}),Pn=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=pn(mn);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,c=o==null?void 0:o(i),a=t?t(i,!1):_e(i[this.labelField],i,!1),l=u("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),a);return i.render?i.render({node:l,option:i}):n?n({node:l,option:i,selected:!1}):l}}),To=N("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[N("scrollbar",`
 max-height: var(--n-height);
 `),N("virtual-list",`
 max-height: var(--n-height);
 `),N("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),N("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),N("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),T("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),N("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),N("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Se("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),T("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[In({enterScale:"0.5"})])])]),Mo=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},de.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=de("InternalSelectMenu","-internal-select-menu",To,ht,e,Y(e,"clsPrefix")),n=A(null),o=A(null),i=A(null),c=K(()=>e.treeMate.getFlattenedNodes()),a=K(()=>ho(c.value)),l=A(null);function m(){const{treeMate:h}=e;let y=null;const{value:V}=e;V===null?y=h.getFirstAvailableNode():(e.multiple?y=h.getNode((V||[])[(V||[]).length-1]):y=h.getNode(V),(!y||y.disabled)&&(y=h.getFirstAvailableNode())),Z(y||null)}function g(){const{value:h}=l;h&&!e.treeMate.getNode(h.key)&&(l.value=null)}let d;Fe(()=>e.show,h=>{h?d=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():g(),gn(G)):g()},{immediate:!0}):d==null||d()},{immediate:!0}),zn(()=>{d==null||d()});const v=K(()=>vt(t.value.self[H("optionHeight",e.size)])),k=K(()=>nn(t.value.self[H("padding",e.size)])),x=K(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),s=K(()=>{const h=c.value;return h&&h.length===0});function O(h){const{onToggle:y}=e;y&&y(h)}function M(h){const{onScroll:y}=e;y&&y(h)}function S(h){var y;(y=i.value)===null||y===void 0||y.sync(),M(h)}function _(){var h;(h=i.value)===null||h===void 0||h.sync()}function F(){const{value:h}=l;return h||null}function p(h,y){y.disabled||Z(y,!1)}function w(h,y){y.disabled||O(y)}function P(h){var y;je(h,"action")||(y=e.onKeyup)===null||y===void 0||y.call(e,h)}function $(h){var y;je(h,"action")||(y=e.onKeydown)===null||y===void 0||y.call(e,h)}function D(h){var y;(y=e.onMousedown)===null||y===void 0||y.call(e,h),!e.focusable&&h.preventDefault()}function W(){const{value:h}=l;h&&Z(h.getNext({loop:!0}),!0)}function E(){const{value:h}=l;h&&Z(h.getPrev({loop:!0}),!0)}function Z(h,y=!1){l.value=h,y&&G()}function G(){var h,y;const V=l.value;if(!V)return;const te=a.value(V.key);te!==null&&(e.virtualScroll?(h=o.value)===null||h===void 0||h.scrollTo({index:te}):(y=i.value)===null||y===void 0||y.scrollTo({index:te,elSize:v.value}))}function ue(h){var y,V;!((y=n.value)===null||y===void 0)&&y.contains(h.target)&&((V=e.onFocus)===null||V===void 0||V.call(e,h))}function ge(h){var y,V;!((y=n.value)===null||y===void 0)&&y.contains(h.relatedTarget)||(V=e.onBlur)===null||V===void 0||V.call(e,h)}fn(mn,{handleOptionMouseEnter:p,handleOptionClick:w,valueSetRef:x,pendingTmNodeRef:l,nodePropsRef:Y(e,"nodeProps"),showCheckmarkRef:Y(e,"showCheckmark"),multipleRef:Y(e,"multiple"),valueRef:Y(e,"value"),renderLabelRef:Y(e,"renderLabel"),renderOptionRef:Y(e,"renderOption"),labelFieldRef:Y(e,"labelField"),valueFieldRef:Y(e,"valueField")}),fn(Dt,n),Ue(()=>{const{value:h}=i;h&&h.sync()});const fe=K(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:y},self:{height:V,borderRadius:te,color:be,groupHeaderTextColor:Ce,actionDividerColor:we,optionTextColorPressed:pe,optionTextColor:he,optionTextColorDisabled:oe,optionTextColorActive:J,optionOpacityDisabled:me,optionCheckColor:se,actionTextColor:Pe,optionColorPending:xe,optionColorActive:ke,loadingColor:ze,loadingSize:Te,optionColorActivePending:Me,[H("optionFontSize",h)]:Oe,[H("optionHeight",h)]:Re,[H("optionPadding",h)]:ee}}=t.value;return{"--n-height":V,"--n-action-divider-color":we,"--n-action-text-color":Pe,"--n-bezier":y,"--n-border-radius":te,"--n-color":be,"--n-option-font-size":Oe,"--n-group-header-text-color":Ce,"--n-option-check-color":se,"--n-option-color-pending":xe,"--n-option-color-active":ke,"--n-option-color-active-pending":Me,"--n-option-height":Re,"--n-option-opacity-disabled":me,"--n-option-text-color":he,"--n-option-text-color-active":J,"--n-option-text-color-disabled":oe,"--n-option-text-color-pressed":pe,"--n-option-padding":ee,"--n-option-padding-left":nn(ee,"left"),"--n-option-padding-right":nn(ee,"right"),"--n-loading-color":ze,"--n-loading-size":Te}}),{inlineThemeDisabled:ne}=e,Q=ne?Ae("internal-select-menu",K(()=>e.size[0]),fe,e):void 0,ae={selfRef:n,next:W,prev:E,getPendingTmNode:F};return $n(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:i,itemSize:v,padding:k,flattenedNodes:c,empty:s,virtualListContainer(){const{value:h}=o;return h==null?void 0:h.listElRef},virtualListContent(){const{value:h}=o;return h==null?void 0:h.itemsElRef},doScroll:M,handleFocusin:ue,handleFocusout:ge,handleKeyUp:P,handleKeyDown:$,handleMouseDown:D,handleVirtualListResize:_,handleVirtualListScroll:S,cssVars:ne?void 0:fe,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},ae)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:c}=this;return c==null||c(),u("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ve(e.header,a=>a&&u("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},a)),this.loading?u("div",{class:`${n}-base-select-menu__loading`},u(gt,{clsPrefix:n,strokeWidth:20})):this.empty?u("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0,"data-action":!0},pt(e.empty,()=>[u(Po,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):u(bt,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?u(Gt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?u(Pn,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:u(Fn,{clsPrefix:n,key:a.key,tmNode:a})}):u("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?u(Pn,{key:a.key,clsPrefix:n,tmNode:a}):u(Fn,{clsPrefix:n,key:a.key,tmNode:a})))}),Ve(e.action,a=>a&&[u("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),u(qt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Io={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Bo=N("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[U("strong",`
 font-weight: var(--n-font-weight-strong);
 `),T("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),T("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),T("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),T("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[T("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),T("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),U("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),U("icon, avatar",[U("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),U("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),U("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Se("disabled",[X("&:hover","background-color: var(--n-color-hover-checkable);",[Se("checked","color: var(--n-text-color-hover-checkable);")]),X("&:active","background-color: var(--n-color-pressed-checkable);",[Se("checked","color: var(--n-text-color-pressed-checkable);")])]),U("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Se("disabled",[X("&:hover","background-color: var(--n-color-checked-hover);"),X("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ao=Object.assign(Object.assign(Object.assign({},de.props),Io),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),$o=Ct("n-tag"),dn=ie({name:"Tag",props:Ao,setup(e){const t=A(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:c}=bn(e),a=de("Tag","-tag",Bo,wt,e,o);fn($o,{roundRef:Y(e,"round")});function l(x){if(!e.disabled&&e.checkable){const{checked:s,onCheckedChange:O,onUpdateChecked:M,"onUpdate:checked":S}=e;M&&M(!s),S&&S(!s),O&&O(!s)}}function m(x){if(e.triggerClickOnClose||x.stopPropagation(),!e.disabled){const{onClose:s}=e;s&&re(s,x)}}const g={setTextContent(x){const{value:s}=t;s&&(s.textContent=x)}},d=mt("Tag",c,o),v=K(()=>{const{type:x,size:s,color:{color:O,textColor:M}={}}=e,{common:{cubicBezierEaseInOut:S},self:{padding:_,closeMargin:F,closeMarginRtl:p,borderRadius:w,opacityDisabled:P,textColorCheckable:$,textColorHoverCheckable:D,textColorPressedCheckable:W,textColorChecked:E,colorCheckable:Z,colorHoverCheckable:G,colorPressedCheckable:ue,colorChecked:ge,colorCheckedHover:fe,colorCheckedPressed:ne,closeBorderRadius:Q,fontWeightStrong:ae,[H("colorBordered",x)]:h,[H("closeSize",s)]:y,[H("closeIconSize",s)]:V,[H("fontSize",s)]:te,[H("height",s)]:be,[H("color",x)]:Ce,[H("textColor",x)]:we,[H("border",x)]:pe,[H("closeIconColor",x)]:he,[H("closeIconColorHover",x)]:oe,[H("closeIconColorPressed",x)]:J,[H("closeColorHover",x)]:me,[H("closeColorPressed",x)]:se}}=a.value;return{"--n-font-weight-strong":ae,"--n-avatar-size-override":`calc(${be} - 8px)`,"--n-bezier":S,"--n-border-radius":w,"--n-border":pe,"--n-close-icon-size":V,"--n-close-color-pressed":se,"--n-close-color-hover":me,"--n-close-border-radius":Q,"--n-close-icon-color":he,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":J,"--n-close-icon-color-disabled":he,"--n-close-margin":F,"--n-close-margin-rtl":p,"--n-close-size":y,"--n-color":O||(n.value?h:Ce),"--n-color-checkable":Z,"--n-color-checked":ge,"--n-color-checked-hover":fe,"--n-color-checked-pressed":ne,"--n-color-hover-checkable":G,"--n-color-pressed-checkable":ue,"--n-font-size":te,"--n-height":be,"--n-opacity-disabled":P,"--n-padding":_,"--n-text-color":M||we,"--n-text-color-checkable":$,"--n-text-color-checked":E,"--n-text-color-hover-checkable":D,"--n-text-color-pressed-checkable":W}}),k=i?Ae("tag",K(()=>{let x="";const{type:s,size:O,color:{color:M,textColor:S}={}}=e;return x+=s[0],x+=O[0],M&&(x+=`a${wn(M)}`),S&&(x+=`b${wn(S)}`),n.value&&(x+="c"),x}),v,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:d,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:m,cssVars:i?void 0:v,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:i,color:{borderColor:c}={},round:a,onRender:l,$slots:m}=this;l==null||l();const g=Ve(m.avatar,v=>v&&u("div",{class:`${n}-tag__avatar`},v)),d=Ve(m.icon,v=>v&&u("div",{class:`${n}-tag__icon`},v));return u("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:g,[`${n}-tag--icon`]:d,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||g,u("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&i?u(yt,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?u("div",{class:`${n}-tag__border`,style:{borderColor:c}}):null)}}),No=X([N("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[N("base-loading",`
 color: var(--n-loading-color);
 `),N("base-selection-tags","min-height: var(--n-height);"),T("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),T("state-border",`
 z-index: 1;
 border-color: #0000;
 `),N("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),N("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[T("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),N("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[T("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),N("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),N("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[N("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[T("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T("render-label",`
 color: var(--n-text-color);
 `)]),Se("disabled",[X("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),N("base-selection-label","background-color: var(--n-color-active);"),N("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[T("arrow",`
 color: var(--n-arrow-color-disabled);
 `),N("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[N("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T("render-label",`
 color: var(--n-text-color-disabled);
 `)]),N("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),N("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),N("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),T("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[T("state-border",`border: var(--n-border-${e});`),Se("disabled",[X("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),N("base-selection-label",`background-color: var(--n-color-active-${e});`),N("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),N("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),N("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X("&:last-child","padding-right: 0;"),N("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[T("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Eo=ie({name:"InternalSelection",props:Object.assign(Object.assign({},de.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=A(null),n=A(null),o=A(null),i=A(null),c=A(null),a=A(null),l=A(null),m=A(null),g=A(null),d=A(null),v=A(!1),k=A(!1),x=A(!1),s=de("InternalSelection","-internal-selection",No,xt,e,Y(e,"clsPrefix")),O=K(()=>e.clearable&&!e.disabled&&(x.value||e.active)),M=K(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):_e(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=K(()=>{const f=e.selectedOption;if(f)return f[e.labelField]}),_=K(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function F(){var f;const{value:C}=t;if(C){const{value:j}=n;j&&(j.style.width=`${C.offsetWidth}px`,e.maxTagCount!=="responsive"&&((f=g.value)===null||f===void 0||f.sync({showAllItemsBeforeCalculate:!1})))}}function p(){const{value:f}=d;f&&(f.style.display="none")}function w(){const{value:f}=d;f&&(f.style.display="inline-block")}Fe(Y(e,"active"),f=>{f||p()}),Fe(Y(e,"pattern"),()=>{e.multiple&&gn(F)});function P(f){const{onFocus:C}=e;C&&C(f)}function $(f){const{onBlur:C}=e;C&&C(f)}function D(f){const{onDeleteOption:C}=e;C&&C(f)}function W(f){const{onClear:C}=e;C&&C(f)}function E(f){const{onPatternInput:C}=e;C&&C(f)}function Z(f){var C;(!f.relatedTarget||!(!((C=o.value)===null||C===void 0)&&C.contains(f.relatedTarget)))&&P(f)}function G(f){var C;!((C=o.value)===null||C===void 0)&&C.contains(f.relatedTarget)||$(f)}function ue(f){W(f)}function ge(){x.value=!0}function fe(){x.value=!1}function ne(f){!e.active||!e.filterable||f.target!==n.value&&f.preventDefault()}function Q(f){D(f)}function ae(f){if(f.key==="Backspace"&&!h.value&&!e.pattern.length){const{selectedOptions:C}=e;C!=null&&C.length&&Q(C[C.length-1])}}const h=A(!1);let y=null;function V(f){const{value:C}=t;if(C){const j=f.target.value;C.textContent=j,F()}e.ignoreComposition&&h.value?y=f:E(f)}function te(){h.value=!0}function be(){h.value=!1,e.ignoreComposition&&E(y),y=null}function Ce(f){var C;k.value=!0,(C=e.onPatternFocus)===null||C===void 0||C.call(e,f)}function we(f){var C;k.value=!1,(C=e.onPatternBlur)===null||C===void 0||C.call(e,f)}function pe(){var f,C;if(e.filterable)k.value=!1,(f=a.value)===null||f===void 0||f.blur(),(C=n.value)===null||C===void 0||C.blur();else if(e.multiple){const{value:j}=i;j==null||j.blur()}else{const{value:j}=c;j==null||j.blur()}}function he(){var f,C,j;e.filterable?(k.value=!1,(f=a.value)===null||f===void 0||f.focus()):e.multiple?(C=i.value)===null||C===void 0||C.focus():(j=c.value)===null||j===void 0||j.focus()}function oe(){const{value:f}=n;f&&(w(),f.focus())}function J(){const{value:f}=n;f&&f.blur()}function me(f){const{value:C}=l;C&&C.setTextContent(`+${f}`)}function se(){const{value:f}=m;return f}function Pe(){return n.value}let xe=null;function ke(){xe!==null&&window.clearTimeout(xe)}function ze(){e.active||(ke(),xe=window.setTimeout(()=>{_.value&&(v.value=!0)},100))}function Te(){ke()}function Me(f){f||(ke(),v.value=!1)}Fe(_,f=>{f||(v.value=!1)}),Ue(()=>{kt(()=>{const f=a.value;f&&(e.disabled?f.removeAttribute("tabindex"):f.tabIndex=k.value?-1:0)})}),$n(o,e.onResize);const{inlineThemeDisabled:Oe}=e,Re=K(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:C},self:{borderRadius:j,color:$e,placeholderColor:Ge,textColor:qe,paddingSingle:Ze,paddingMultiple:Ye,caretColor:Ne,colorDisabled:Ee,textColorDisabled:Le,placeholderColorDisabled:Je,colorActive:Xe,boxShadowFocus:Ke,boxShadowActive:ye,boxShadowHover:r,border:b,borderFocus:R,borderHover:L,borderActive:I,arrowColor:z,arrowColorDisabled:B,loadingColor:q,colorActiveWarning:ce,boxShadowFocusWarning:Qe,boxShadowActiveWarning:Kn,boxShadowHoverWarning:Dn,borderWarning:Vn,borderFocusWarning:jn,borderHoverWarning:Wn,borderActiveWarning:Hn,colorActiveError:Un,boxShadowFocusError:Gn,boxShadowActiveError:qn,boxShadowHoverError:Zn,borderError:Yn,borderFocusError:Jn,borderHoverError:Xn,borderActiveError:Qn,clearColor:et,clearColorHover:nt,clearColorPressed:tt,clearSize:ot,arrowSize:rt,[H("height",f)]:lt,[H("fontSize",f)]:it}}=s.value;return{"--n-bezier":C,"--n-border":b,"--n-border-active":I,"--n-border-focus":R,"--n-border-hover":L,"--n-border-radius":j,"--n-box-shadow-active":ye,"--n-box-shadow-focus":Ke,"--n-box-shadow-hover":r,"--n-caret-color":Ne,"--n-color":$e,"--n-color-active":Xe,"--n-color-disabled":Ee,"--n-font-size":it,"--n-height":lt,"--n-padding-single":Ze,"--n-padding-multiple":Ye,"--n-placeholder-color":Ge,"--n-placeholder-color-disabled":Je,"--n-text-color":qe,"--n-text-color-disabled":Le,"--n-arrow-color":z,"--n-arrow-color-disabled":B,"--n-loading-color":q,"--n-color-active-warning":ce,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":Kn,"--n-box-shadow-hover-warning":Dn,"--n-border-warning":Vn,"--n-border-focus-warning":jn,"--n-border-hover-warning":Wn,"--n-border-active-warning":Hn,"--n-color-active-error":Un,"--n-box-shadow-focus-error":Gn,"--n-box-shadow-active-error":qn,"--n-box-shadow-hover-error":Zn,"--n-border-error":Yn,"--n-border-focus-error":Jn,"--n-border-hover-error":Xn,"--n-border-active-error":Qn,"--n-clear-size":ot,"--n-clear-color":et,"--n-clear-color-hover":nt,"--n-clear-color-pressed":tt,"--n-arrow-size":rt}}),ee=Oe?Ae("internal-selection",K(()=>e.size[0]),Re,e):void 0;return{mergedTheme:s,mergedClearable:O,patternInputFocused:k,filterablePlaceholder:M,label:S,selected:_,showTagsPanel:v,isComposing:h,counterRef:l,counterWrapperRef:m,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:i,singleElRef:c,patternInputWrapperRef:a,overflowRef:g,inputTagElRef:d,handleMouseDown:ne,handleFocusin:Z,handleClear:ue,handleMouseEnter:ge,handleMouseLeave:fe,handleDeleteOption:Q,handlePatternKeyDown:ae,handlePatternInputInput:V,handlePatternInputBlur:we,handlePatternInputFocus:Ce,handleMouseEnterCounter:ze,handleMouseLeaveCounter:Te,handleFocusout:G,handleCompositionEnd:be,handleCompositionStart:te,onPopoverUpdateShow:Me,focus:he,focusInput:oe,blur:pe,blurInput:J,updateCounter:me,getCounter:se,getTail:Pe,renderLabel:e.renderLabel,cssVars:Oe?void 0:Re,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:c,bordered:a,clsPrefix:l,onRender:m,renderTag:g,renderLabel:d}=this;m==null||m();const v=c==="responsive",k=typeof c=="number",x=v||k,s=u(St,null,{default:()=>u(Ht,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,S;return(S=(M=this.$slots).arrow)===null||S===void 0?void 0:S.call(M)}})});let O;if(t){const{labelField:M}=this,S=G=>u("div",{class:`${l}-base-selection-tag-wrapper`,key:G.value},g?g({option:G,handleClose:()=>{this.handleDeleteOption(G)}}):u(dn,{size:n,closable:!G.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(G)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(G,!0):_e(G[M],G,!0)})),_=()=>(k?this.selectedOptions.slice(0,c):this.selectedOptions).map(S),F=i?u("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},u("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),u("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,p=v?()=>u("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},u(dn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let w;if(k){const G=this.selectedOptions.length-c;G>0&&(w=u("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},u(dn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${G}`})))}const P=v?i?u(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:p,tail:()=>F}):u(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:p}):k&&w?_().concat(w):_(),$=x?()=>u("div",{class:`${l}-base-selection-popover`},v?_():this.selectedOptions.map(S)):void 0,D=x?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,E=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},u("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Z=i?u("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},P,v?null:F,s):u("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},P,s);O=u(Bn,null,x?u(Nt,Object.assign({},D,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Z,default:$}):Z,E)}else if(i){const M=this.pattern||this.isComposing,S=this.active?!M:!this.selected,_=this.active?!1:this.selected;O=u("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},u("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),_?u("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},u("div",{class:`${l}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_e(this.label,this.selectedOption,!0))):null,S?u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},u("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,s)}else O=u("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?u("div",{class:`${l}-base-selection-input`,title:Jt(this.label),key:"input"},u("div",{class:`${l}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_e(this.label,this.selectedOption,!0))):u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},u("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),s);return u("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?u("div",{class:`${l}-base-selection__border`}):null,a?u("div",{class:`${l}-base-selection__state-border`}):null)}});function He(e){return e.type==="group"}function Ln(e){return e.type==="ignored"}function un(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Lo(e,t){return{getIsGroup:He,getIgnored:Ln,getKey(o){return He(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Ko(e,t,n,o){if(!t)return e;function i(c){if(!Array.isArray(c))return[];const a=[];for(const l of c)if(He(l)){const m=i(l[o]);m.length&&a.push(Object.assign({},l,{[o]:m}))}else{if(Ln(l))continue;t(n,l)&&a.push(l)}return a}return i(e)}function Do(e,t,n){const o=new Map;return e.forEach(i=>{He(i)?i[n].forEach(c=>{o.set(c[t],c)}):o.set(i[t],i)}),o}const Vo=X([N("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),N("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[In({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),jo=Object.assign(Object.assign({},de.props),{to:hn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Wo=ie({name:"Select",props:jo,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=bn(e),c=de("Select","-select",Vo,Pt,e,t),a=A(e.defaultValue),l=Y(e,"value"),m=Sn(l,a),g=A(!1),d=A(""),v=K(()=>{const{valueField:r,childrenField:b}=e,R=Lo(r,b);return Ro(G.value,R)}),k=K(()=>Do(E.value,e.valueField,e.childrenField)),x=A(!1),s=Sn(Y(e,"show"),x),O=A(null),M=A(null),S=A(null),{localeRef:_}=An("Select"),F=K(()=>{var r;return(r=e.placeholder)!==null&&r!==void 0?r:_.value.placeholder}),p=Et(e,["items","options"]),w=[],P=A([]),$=A([]),D=A(new Map),W=K(()=>{const{fallbackOption:r}=e;if(r===void 0){const{labelField:b,valueField:R}=e;return L=>({[b]:String(L),[R]:L})}return r===!1?!1:b=>Object.assign(r(b),{value:b})}),E=K(()=>$.value.concat(P.value).concat(p.value)),Z=K(()=>{const{filter:r}=e;if(r)return r;const{labelField:b,valueField:R}=e;return(L,I)=>{if(!I)return!1;const z=I[b];if(typeof z=="string")return un(L,z);const B=I[R];return typeof B=="string"?un(L,B):typeof B=="number"?un(L,String(B)):!1}}),G=K(()=>{if(e.remote)return p.value;{const{value:r}=E,{value:b}=d;return!b.length||!e.filterable?r:Ko(r,Z.value,b,e.childrenField)}});function ue(r){const b=e.remote,{value:R}=D,{value:L}=k,{value:I}=W,z=[];return r.forEach(B=>{if(L.has(B))z.push(L.get(B));else if(b&&R.has(B))z.push(R.get(B));else if(I){const q=I(B);q&&z.push(q)}}),z}const ge=K(()=>{if(e.multiple){const{value:r}=m;return Array.isArray(r)?ue(r):[]}return null}),fe=K(()=>{const{value:r}=m;return!e.multiple&&!Array.isArray(r)?r===null?null:ue([r])[0]||null:null}),ne=Ot(e),{mergedSizeRef:Q,mergedDisabledRef:ae,mergedStatusRef:h}=ne;function y(r,b){const{onChange:R,"onUpdate:value":L,onUpdateValue:I}=e,{nTriggerFormChange:z,nTriggerFormInput:B}=ne;R&&re(R,r,b),I&&re(I,r,b),L&&re(L,r,b),a.value=r,z(),B()}function V(r){const{onBlur:b}=e,{nTriggerFormBlur:R}=ne;b&&re(b,r),R()}function te(){const{onClear:r}=e;r&&re(r)}function be(r){const{onFocus:b,showOnFocus:R}=e,{nTriggerFormFocus:L}=ne;b&&re(b,r),L(),R&&oe()}function Ce(r){const{onSearch:b}=e;b&&re(b,r)}function we(r){const{onScroll:b}=e;b&&re(b,r)}function pe(){var r;const{remote:b,multiple:R}=e;if(b){const{value:L}=D;if(R){const{valueField:I}=e;(r=ge.value)===null||r===void 0||r.forEach(z=>{L.set(z[I],z)})}else{const I=fe.value;I&&L.set(I[e.valueField],I)}}}function he(r){const{onUpdateShow:b,"onUpdate:show":R}=e;b&&re(b,r),R&&re(R,r),x.value=r}function oe(){ae.value||(he(!0),x.value=!0,e.filterable&&Le())}function J(){he(!1)}function me(){d.value="",$.value=w}const se=A(!1);function Pe(){e.filterable&&(se.value=!0)}function xe(){e.filterable&&(se.value=!1,s.value||me())}function ke(){ae.value||(s.value?e.filterable?Le():J():oe())}function ze(r){var b,R;!((R=(b=S.value)===null||b===void 0?void 0:b.selfRef)===null||R===void 0)&&R.contains(r.relatedTarget)||(g.value=!1,V(r),J())}function Te(r){be(r),g.value=!0}function Me(r){g.value=!0}function Oe(r){var b;!((b=O.value)===null||b===void 0)&&b.$el.contains(r.relatedTarget)||(g.value=!1,V(r),J())}function Re(){var r;(r=O.value)===null||r===void 0||r.focus(),J()}function ee(r){var b;s.value&&(!((b=O.value)===null||b===void 0)&&b.$el.contains(zt(r))||J())}function f(r){if(!Array.isArray(r))return[];if(W.value)return Array.from(r);{const{remote:b}=e,{value:R}=k;if(b){const{value:L}=D;return r.filter(I=>R.has(I)||L.has(I))}else return r.filter(L=>R.has(L))}}function C(r){j(r.rawNode)}function j(r){if(ae.value)return;const{tag:b,remote:R,clearFilterAfterSelect:L,valueField:I}=e;if(b&&!R){const{value:z}=$,B=z[0]||null;if(B){const q=P.value;q.length?q.push(B):P.value=[B],$.value=w}}if(R&&D.value.set(r[I],r),e.multiple){const z=f(m.value),B=z.findIndex(q=>q===r[I]);if(~B){if(z.splice(B,1),b&&!R){const q=$e(r[I]);~q&&(P.value.splice(q,1),L&&(d.value=""))}}else z.push(r[I]),L&&(d.value="");y(z,ue(z))}else{if(b&&!R){const z=$e(r[I]);~z?P.value=[P.value[z]]:P.value=w}Ee(),J(),y(r[I],r)}}function $e(r){return P.value.findIndex(R=>R[e.valueField]===r)}function Ge(r){s.value||oe();const{value:b}=r.target;d.value=b;const{tag:R,remote:L}=e;if(Ce(b),R&&!L){if(!b){$.value=w;return}const{onCreate:I}=e,z=I?I(b):{[e.labelField]:b,[e.valueField]:b},{valueField:B,labelField:q}=e;p.value.some(ce=>ce[B]===z[B]||ce[q]===z[q])||P.value.some(ce=>ce[B]===z[B]||ce[q]===z[q])?$.value=w:$.value=[z]}}function qe(r){r.stopPropagation();const{multiple:b}=e;!b&&e.filterable&&J(),te(),b?y([],[]):y(null,null)}function Ze(r){!je(r,"action")&&!je(r,"empty")&&r.preventDefault()}function Ye(r){we(r)}function Ne(r){var b,R,L,I,z;if(!e.keyboard){r.preventDefault();return}switch(r.key){case" ":if(e.filterable)break;r.preventDefault();case"Enter":if(!(!((b=O.value)===null||b===void 0)&&b.isComposing)){if(s.value){const B=(R=S.value)===null||R===void 0?void 0:R.getPendingTmNode();B?C(B):e.filterable||(J(),Ee())}else if(oe(),e.tag&&se.value){const B=$.value[0];if(B){const q=B[e.valueField],{value:ce}=m;e.multiple&&Array.isArray(ce)&&ce.some(Qe=>Qe===q)||j(B)}}}r.preventDefault();break;case"ArrowUp":if(r.preventDefault(),e.loading)return;s.value&&((L=S.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(r.preventDefault(),e.loading)return;s.value?(I=S.value)===null||I===void 0||I.next():oe();break;case"Escape":s.value&&(Tt(r),J()),(z=O.value)===null||z===void 0||z.focus();break}}function Ee(){var r;(r=O.value)===null||r===void 0||r.focus()}function Le(){var r;(r=O.value)===null||r===void 0||r.focusInput()}function Je(){var r;s.value&&((r=M.value)===null||r===void 0||r.syncPosition())}pe(),Fe(Y(e,"options"),pe);const Xe={focus:()=>{var r;(r=O.value)===null||r===void 0||r.focus()},focusInput:()=>{var r;(r=O.value)===null||r===void 0||r.focusInput()},blur:()=>{var r;(r=O.value)===null||r===void 0||r.blur()},blurInput:()=>{var r;(r=O.value)===null||r===void 0||r.blurInput()}},Ke=K(()=>{const{self:{menuBoxShadow:r}}=c.value;return{"--n-menu-box-shadow":r}}),ye=i?Ae("select",void 0,Ke,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:h,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:v,isMounted:Rt(),triggerRef:O,menuRef:S,pattern:d,uncontrolledShow:x,mergedShow:s,adjustedTo:hn(e),uncontrolledValue:a,mergedValue:m,followerRef:M,localizedPlaceholder:F,selectedOption:fe,selectedOptions:ge,mergedSize:Q,mergedDisabled:ae,focused:g,activeWithoutMenuOpen:se,inlineThemeDisabled:i,onTriggerInputFocus:Pe,onTriggerInputBlur:xe,handleTriggerOrMenuResize:Je,handleMenuFocus:Me,handleMenuBlur:Oe,handleMenuTabOut:Re,handleTriggerClick:ke,handleToggle:C,handleDeleteOption:j,handlePatternInput:Ge,handleClear:qe,handleTriggerBlur:ze,handleTriggerFocus:Te,handleKeydown:Ne,handleMenuAfterLeave:me,handleMenuClickOutside:ee,handleMenuScroll:Ye,handleMenuKeydown:Ne,handleMenuMousedown:Ze,mergedTheme:c,cssVars:i?void 0:Ke,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){return u("div",{class:`${this.mergedClsPrefix}-select`},u(Vt,null,{default:()=>[u(jt,null,{default:()=>u(Eo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),u(Wt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===hn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>u(Mn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),_t(u(Mo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[Ft,this.mergedShow],[xn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[xn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ho=le("thead",null,[le("tr",null,[le("th",{width:"80"}," 进制 "),le("th",null,"值"),le("th",{width:"140"}," 备注 "),le("th",{width:"80"}," 操作 ")])],-1),Uo={class:"max-w-[4rem] truncate"},rr=ie({__name:"HexConvert",setup(e){const t=A(10),n=[{label:"2进制",value:2},{label:"8进制",value:8},{label:"10进制",value:10},{label:"16进制",value:16},{label:"26进制",value:26},{label:"32进制",value:32},{label:"36进制",value:36}],o=A(""),i=K(()=>[{radix:"2进制",value:c(2),note:""},{radix:"4进制",value:c(4),note:""},{radix:"8进制",value:c(8),note:""},{radix:"10进制",value:c(10),note:""},{radix:"16进制",value:c(16),note:""},{radix:"26进制",value:c(26),note:"小写字母"},{radix:"32进制",value:c(32),note:"数字 + 大写字母"},{radix:"36进制",value:c(36),note:"数字 + 小写字母"}]);function c(a){return Number.parseInt(o.value,t.value).toString(a)}return(a,l)=>{const m=at,g=Wo,d=Ut,v=Zt,k=$t,x=Yt;return De(),tn("section",null,[Ie(m),Ie(v,{class:"mb-6"},{default:on(()=>[Ie(g,{value:Be(t),"onUpdate:value":l[0]||(l[0]=s=>kn(t)?t.value=s:null),class:"basis-28",options:n},null,8,["value"]),Ie(d,{value:Be(o),"onUpdate:value":l[1]||(l[1]=s=>kn(o)?o.value=s:null)},null,8,["value"])]),_:1}),Be(o)?(De(),Mt(x,{key:0,bordered:!1},{default:on(()=>[Ho,le("tbody",null,[(De(!0),tn(Bn,null,It(Be(i),s=>(De(),tn("tr",{key:s.radix},[le("td",null,rn(s.radix),1),le("td",Uo,rn(s.value),1),le("td",null,rn(s.note),1),le("td",null,[Ie(k,{size:"small",secondary:"",type:"info",onClick:O=>Be(st)(s.value)},{default:on(()=>[Bt(" 复制 ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})):At("",!0)])}}});export{rr as default};
