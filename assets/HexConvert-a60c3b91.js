import{_ as at}from"./BaseTitle.vue_vue_type_script_setup_true_lang-890a79ad.js";import{c as st}from"./index-2eb3f77c.js";import{d as ie,r as M,u as ct,a3 as He,L as gn,h as d,a4 as dt,a5 as Cn,a6 as Tn,l as $,m as z,o as X,j as bn,q as ce,a7 as ut,f as pn,a8 as ft,w as A,x as W,y as Ie,N as zn,g as Qe,E as Re,a9 as Mn,n as H,p as ke,aa as Bn,t as Y,ab as ht,I as Fe,ac as vt,ad as en,s as un,B as fn,ae as gt,af as bt,ag as pt,v as mt,ah as wn,G as yt,c as Ct,ai as wt,k as re,aj as xt,J as kt,F as In,ak as St,e as Ot,al as Rt,M as Ft,O as _t,am as xn,an as Pt,ao as Tt,ap as zt,U as De,W as nn,X as Me,Y as tn,Z as Be,a1 as kn,aq as Mt,$ as le,ar as Bt,a2 as on,_ as It,as as $t,a0 as Nt}from"./index-1a816866.js";import{a as $n,u as Sn}from"./Eye-ad89177e.js";import{N as At,u as Et}from"./Popover-6201b744.js";import{c as Lt,a as Kt,i as mn,b as Dt,u as hn,V as Vt,d as jt,e as Wt}from"./Follower-bab4aa83.js";import{N as Ht,_ as Ut}from"./Input-00f1a3f5.js";import{V as Gt,h as Ve,F as qt}from"./FocusDetector-fb03915e.js";import{_ as Zt}from"./InputGroup-4cb9a30e.js";import{_ as Yt}from"./Table-0fb56186.js";import"./headers-873773b8.js";function Jt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function rn(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const xe="v-hidden",Xt=Kt("[v-hidden]",{display:"none!important"}),On=ie({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=M(null),o=M(null);function i(){const{value:a}=n,{getCounter:l,getTail:p}=e;let h;if(l!==void 0?h=l():h=o.value,!a||!h)return;h.hasAttribute(xe)&&h.removeAttribute(xe);const{children:v}=a,g=a.offsetWidth,S=[],C=t.tail?p==null?void 0:p():null;let c=C?C.offsetWidth:0,O=!1;const B=a.children.length-(t.tail?1:0);for(let R=0;R<B-1;++R){if(R<0)continue;const E=v[R];if(O){E.hasAttribute(xe)||E.setAttribute(xe,"");continue}else E.hasAttribute(xe)&&E.removeAttribute(xe);const y=E.offsetWidth;if(c+=y,S[R]=y,c>g){const{updateCounter:x}=e;for(let _=R;_>=0;--_){const L=B-1-_;x!==void 0?x(L):h.textContent=`${L}`;const D=h.offsetWidth;if(c-=S[_],c+D<=g||_===0){O=!0,R=_-1,C&&(R===-1?(C.style.maxWidth=`${g-D}px`,C.style.boxSizing="border-box"):C.style.maxWidth="");break}}}}const{onUpdateOverflow:k}=e;O?k!==void 0&&k(!0):(k!==void 0&&k(!1),h.setAttribute(xe,""))}const s=ct();return Xt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Lt,ssr:s}),He(i),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return gn(this.sync),d("div",{class:"v-overflow",ref:"selfRef"},[dt(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Nn(e,t){t&&(He(()=>{const{value:n}=e;n&&Cn.registerHandler(n,t)}),Tn(()=>{const{value:n}=e;n&&Cn.unregisterHandler(n)}))}const Qt=ie({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),eo=ie({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}});function Rn(e){return Array.isArray(e)?e:[e]}const vn={STOP:"STOP"};function An(e,t){const n=t(e);e.children!==void 0&&n!==vn.STOP&&e.children.forEach(o=>An(o,t))}function no(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(i)}return s(e),o}function to(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function oo(e){return e.children}function ro(e){return e.key}function lo(){return!1}function io(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function ao(e){return e.disabled===!0}function so(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ln(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function an(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function co(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function uo(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function fo(e){return(e==null?void 0:e.type)==="group"}function ho(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class vo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function go(e,t,n,o){return je(t.concat(e),n,o,!1)}function bo(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let s=i.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function po(e,t,n,o){const i=je(t,n,o,!1),s=je(e,n,o,!0),a=bo(e,n),l=[];return i.forEach(p=>{(s.has(p)||a.has(p))&&l.push(p)}),l.forEach(p=>i.delete(p)),i}function sn(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:s,cascade:a,leafOnly:l,checkStrategy:p,allowNotLoaded:h}=e;if(!a)return o!==void 0?{checkedKeys:co(n,o),indeterminateKeys:Array.from(s)}:i!==void 0?{checkedKeys:uo(n,i),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:v}=t;let g;i!==void 0?g=po(i,n,t,h):o!==void 0?g=go(o,n,t,h):g=je(n,t,h,!1);const S=p==="parent",C=p==="child"||l,c=g,O=new Set,B=Math.max.apply(null,Array.from(v.keys()));for(let k=B;k>=0;k-=1){const R=k===0,E=v.get(k);for(const y of E){if(y.isLeaf)continue;const{key:x,shallowLoaded:_}=y;if(C&&_&&y.children.forEach(K=>{!K.disabled&&!K.isLeaf&&K.shallowLoaded&&c.has(K.key)&&c.delete(K.key)}),y.disabled||!_)continue;let L=!0,D=!1,G=!0;for(const K of y.children){const Z=K.key;if(!K.disabled){if(G&&(G=!1),c.has(Z))D=!0;else if(O.has(Z)){D=!0,L=!1;break}else if(L=!1,D)break}}L&&!G?(S&&y.children.forEach(K=>{!K.disabled&&c.has(K.key)&&c.delete(K.key)}),c.add(x)):D&&O.add(x),R&&C&&c.has(x)&&c.delete(x)}}return{checkedKeys:Array.from(c),indeterminateKeys:Array.from(O)}}function je(e,t,n,o){const{treeNodeMap:i,getChildren:s}=t,a=new Set,l=new Set(e);return e.forEach(p=>{const h=i.get(p);h!==void 0&&An(h,v=>{if(v.disabled)return vn.STOP;const{key:g}=v;if(!a.has(g)&&(a.add(g),l.add(g),so(v.rawNode,s))){if(o)return vn.STOP;if(!n)throw new vo}})}),l}function mo(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const s=o.treeNodeMap;let a=e==null?null:(i=s.get(e))!==null&&i!==void 0?i:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(p=>p.key),l}function yo(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Co(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function Fn(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?wo:Co,s={reverse:t==="prev"};let a=!1,l=null;function p(h){if(h!==null){if(h===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!h.disabled||o)&&!h.ignored&&!h.isGroup){l=h;return}if(h.isGroup){const v=yn(h,s);v!==null?l=v:p(i(h,n))}else{const v=i(h,!1);if(v!==null)p(v);else{const g=xo(h);g!=null&&g.isGroup?p(i(g,n)):n&&p(i(h,!0))}}}}return p(e),l}function wo(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function xo(e){return e.parent}function yn(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,s=n?i-1:0,a=n?-1:i,l=n?-1:1;for(let p=s;p!==a;p+=l){const h=o[p];if(!h.disabled&&!h.ignored)if(h.isGroup){const v=yn(h,t);if(v!==null)return v}else return h}}return null}const ko={getChild(){return this.ignored?null:yn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Fn(this,"next",e)},getPrev(e={}){return Fn(this,"prev",e)}};function So(e,t){const n=t?new Set(t):void 0,o=[];function i(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&i(a.children)})}return i(e),o}function Oo(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function En(e,t,n,o,i,s=null,a=0){const l=[];return e.forEach((p,h)=>{var v;const g=Object.create(o);if(g.rawNode=p,g.siblings=l,g.level=a,g.index=h,g.isFirstChild=h===0,g.isLastChild=h+1===e.length,g.parent=s,!g.ignored){const S=i(p);Array.isArray(S)&&(g.children=En(S,t,n,o,i,g,a+1))}l.push(g),t.set(g.key,g),n.has(a)||n.set(a,[]),(v=n.get(a))===null||v===void 0||v.push(g)}),l}function Ro(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:s=ao,getIgnored:a=lo,getIsGroup:l=fo,getKey:p=ro}=t,h=(n=t.getChildren)!==null&&n!==void 0?n:oo,v=t.ignoreEmptyChildren?y=>{const x=h(y);return Array.isArray(x)?x.length?x:null:x}:h,g=Object.assign({get key(){return p(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return to(this.rawNode,v)},get shallowLoaded(){return io(this.rawNode,v)},get ignored(){return a(this.rawNode)},contains(y){return Oo(this,y)}},ko),S=En(e,o,i,g,v);function C(y){if(y==null)return null;const x=o.get(y);return x&&!x.isGroup&&!x.ignored?x:null}function c(y){if(y==null)return null;const x=o.get(y);return x&&!x.ignored?x:null}function O(y,x){const _=c(y);return _?_.getPrev(x):null}function B(y,x){const _=c(y);return _?_.getNext(x):null}function k(y){const x=c(y);return x?x.getParent():null}function R(y){const x=c(y);return x?x.getChild():null}const E={treeNodes:S,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:v,getFlattenedNodes(y){return So(S,y)},getNode:C,getPrev:O,getNext:B,getParent:k,getChild:R,getFirstAvailableNode(){return yo(S)},getPath(y,x={}){return mo(y,x,E)},getCheckedKeys(y,x={}){const{cascade:_=!0,leafOnly:L=!1,checkStrategy:D="all",allowNotLoaded:G=!1}=x;return sn({checkedKeys:ln(y),indeterminateKeys:an(y),cascade:_,leafOnly:L,checkStrategy:D,allowNotLoaded:G},E)},check(y,x,_={}){const{cascade:L=!0,leafOnly:D=!1,checkStrategy:G="all",allowNotLoaded:K=!1}=_;return sn({checkedKeys:ln(x),indeterminateKeys:an(x),keysToCheck:y==null?[]:Rn(y),cascade:L,leafOnly:D,checkStrategy:G,allowNotLoaded:K},E)},uncheck(y,x,_={}){const{cascade:L=!0,leafOnly:D=!1,checkStrategy:G="all",allowNotLoaded:K=!1}=_;return sn({checkedKeys:ln(x),indeterminateKeys:an(x),keysToUncheck:y==null?[]:Rn(y),cascade:L,leafOnly:D,checkStrategy:G,allowNotLoaded:K},E)},getNonLeafKeys(y={}){return no(S,y)}};return E}const Fo=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[X("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),_o=Object.assign(Object.assign({},ce.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Po=ie({name:"Empty",props:_o,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=bn(e),o=ce("Empty","-empty",Fo,ut,e,t),{localeRef:i}=$n("Empty"),s=pn(ft,null),a=A(()=>{var v,g,S;return(v=e.description)!==null&&v!==void 0?v:(S=(g=s==null?void 0:s.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||S===void 0?void 0:S.description}),l=A(()=>{var v,g;return((g=(v=s==null?void 0:s.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>d(eo,null))}),p=A(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:g},self:{[W("iconSize",v)]:S,[W("fontSize",v)]:C,textColor:c,iconColor:O,extraTextColor:B}}=o.value;return{"--n-icon-size":S,"--n-font-size":C,"--n-bezier":g,"--n-text-color":c,"--n-icon-color":O,"--n-extra-text-color":B}}),h=n?Ie("empty",A(()=>{let v="";const{size:g}=e;return v+=g[0],v}),p,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:A(()=>a.value||i.value.description),cssVars:n?void 0:p,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),d("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${t}-empty__icon`},e.icon?e.icon():d(zn,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${t}-empty__extra`},e.extra()):null)}});function To(e,t){return d(Mn,{name:"fade-in-scale-up-transition"},{default:()=>e?d(zn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>d(Qt)}):null})}const _n=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:s,renderOptionRef:a,labelFieldRef:l,valueFieldRef:p,showCheckmarkRef:h,nodePropsRef:v,handleOptionClick:g,handleOptionMouseEnter:S}=pn(mn),C=Qe(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function c(k){const{tmNode:R}=e;R.disabled||g(k,R)}function O(k){const{tmNode:R}=e;R.disabled||S(k,R)}function B(k){const{tmNode:R}=e,{value:E}=C;R.disabled||E||S(k,R)}return{multiple:o,isGrouped:Qe(()=>{const{tmNode:k}=e,{parent:R}=k;return R&&R.rawNode.type==="group"}),showCheckmark:h,nodeProps:v,isPending:C,isSelected:Qe(()=>{const{value:k}=t,{value:R}=o;if(k===null)return!1;const E=e.tmNode.rawNode[p.value];if(R){const{value:y}=i;return y.has(E)}else return k===E}),labelField:l,renderLabel:s,renderOption:a,handleMouseMove:B,handleMouseEnter:O,handleClick:c}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:s,nodeProps:a,renderOption:l,renderLabel:p,handleClick:h,handleMouseEnter:v,handleMouseMove:g}=this,S=To(n,e),C=p?[p(t,n),s&&S]:[Re(t[this.labelField],t,n),s&&S],c=a==null?void 0:a(t),O=d("div",Object.assign({},c,{class:[`${e}-base-select-option`,t.class,c==null?void 0:c.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(c==null?void 0:c.style)||"",t.style||""],onClick:rn([h,c==null?void 0:c.onClick]),onMouseenter:rn([v,c==null?void 0:c.onMouseenter]),onMousemove:rn([g,c==null?void 0:c.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},C));return t.render?t.render({node:O,option:t,selected:n}):l?l({node:O,option:t,selected:n}):O}}),Pn=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=pn(mn);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,s=o==null?void 0:o(i),a=t?t(i,!1):Re(i[this.labelField],i,!1),l=d("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return i.render?i.render({node:l,option:i}):n?n({node:l,option:i,selected:!1}):l}}),zo=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[H("show-checkmark",`
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
 `),H("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),H("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),H("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),H("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),H("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),H("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Bn({enterScale:"0.5"})])])]),Mo=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=ce("InternalSelectMenu","-internal-select-menu",zo,ht,e,Y(e,"clsPrefix")),n=M(null),o=M(null),i=M(null),s=A(()=>e.treeMate.getFlattenedNodes()),a=A(()=>ho(s.value)),l=M(null);function p(){const{treeMate:u}=e;let m=null;const{value:V}=e;V===null?m=u.getFirstAvailableNode():(e.multiple?m=u.getNode((V||[])[(V||[]).length-1]):m=u.getNode(V),(!m||m.disabled)&&(m=u.getFirstAvailableNode())),Z(m||null)}function h(){const{value:u}=l;u&&!e.treeMate.getNode(u.key)&&(l.value=null)}let v;Fe(()=>e.show,u=>{u?v=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():h(),gn(U)):h()},{immediate:!0}):v==null||v()},{immediate:!0}),Tn(()=>{v==null||v()});const g=A(()=>vt(t.value.self[W("optionHeight",e.size)])),S=A(()=>en(t.value.self[W("padding",e.size)])),C=A(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),c=A(()=>{const u=s.value;return u&&u.length===0});function O(u){const{onToggle:m}=e;m&&m(u)}function B(u){const{onScroll:m}=e;m&&m(u)}function k(u){var m;(m=i.value)===null||m===void 0||m.sync(),B(u)}function R(){var u;(u=i.value)===null||u===void 0||u.sync()}function E(){const{value:u}=l;return u||null}function y(u,m){m.disabled||Z(m,!1)}function x(u,m){m.disabled||O(m)}function _(u){var m;Ve(u,"action")||(m=e.onKeyup)===null||m===void 0||m.call(e,u)}function L(u){var m;Ve(u,"action")||(m=e.onKeydown)===null||m===void 0||m.call(e,u)}function D(u){var m;(m=e.onMousedown)===null||m===void 0||m.call(e,u),!e.focusable&&u.preventDefault()}function G(){const{value:u}=l;u&&Z(u.getNext({loop:!0}),!0)}function K(){const{value:u}=l;u&&Z(u.getPrev({loop:!0}),!0)}function Z(u,m=!1){l.value=u,m&&U()}function U(){var u,m;const V=l.value;if(!V)return;const te=a.value(V.key);te!==null&&(e.virtualScroll?(u=o.value)===null||u===void 0||u.scrollTo({index:te}):(m=i.value)===null||m===void 0||m.scrollTo({index:te,elSize:g.value}))}function de(u){var m,V;!((m=n.value)===null||m===void 0)&&m.contains(u.target)&&((V=e.onFocus)===null||V===void 0||V.call(e,u))}function he(u){var m,V;!((m=n.value)===null||m===void 0)&&m.contains(u.relatedTarget)||(V=e.onBlur)===null||V===void 0||V.call(e,u)}un(mn,{handleOptionMouseEnter:y,handleOptionClick:x,valueSetRef:C,pendingTmNodeRef:l,nodePropsRef:Y(e,"nodeProps"),showCheckmarkRef:Y(e,"showCheckmark"),multipleRef:Y(e,"multiple"),valueRef:Y(e,"value"),renderLabelRef:Y(e,"renderLabel"),renderOptionRef:Y(e,"renderOption"),labelFieldRef:Y(e,"labelField"),valueFieldRef:Y(e,"valueField")}),un(Dt,n),He(()=>{const{value:u}=i;u&&u.sync()});const ue=A(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:m},self:{height:V,borderRadius:te,color:ve,groupHeaderTextColor:me,actionDividerColor:ye,optionTextColorPressed:ge,optionTextColor:fe,optionTextColorDisabled:oe,optionTextColorActive:J,optionOpacityDisabled:be,optionCheckColor:se,actionTextColor:_e,optionColorPending:Ce,optionColorActive:we,loadingColor:Pe,loadingSize:Te,optionColorActivePending:ze,[W("optionFontSize",u)]:Se,[W("optionHeight",u)]:Oe,[W("optionPadding",u)]:ee}}=t.value;return{"--n-height":V,"--n-action-divider-color":ye,"--n-action-text-color":_e,"--n-bezier":m,"--n-border-radius":te,"--n-color":ve,"--n-option-font-size":Se,"--n-group-header-text-color":me,"--n-option-check-color":se,"--n-option-color-pending":Ce,"--n-option-color-active":we,"--n-option-color-active-pending":ze,"--n-option-height":Oe,"--n-option-opacity-disabled":be,"--n-option-text-color":fe,"--n-option-text-color-active":J,"--n-option-text-color-disabled":oe,"--n-option-text-color-pressed":ge,"--n-option-padding":ee,"--n-option-padding-left":en(ee,"left"),"--n-option-padding-right":en(ee,"right"),"--n-loading-color":Pe,"--n-loading-size":Te}}),{inlineThemeDisabled:ne}=e,Q=ne?Ie("internal-select-menu",A(()=>e.size[0]),ue,e):void 0,ae={selfRef:n,next:G,prev:K,getPendingTmNode:E};return Nn(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:i,itemSize:g,padding:S,flattenedNodes:s,empty:c,virtualListContainer(){const{value:u}=o;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=o;return u==null?void 0:u.itemsElRef},doScroll:B,handleFocusin:de,handleFocusout:he,handleKeyUp:_,handleKeyDown:L,handleMouseDown:D,handleVirtualListResize:R,handleVirtualListScroll:k,cssVars:ne?void 0:ue,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},ae)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:s}=this;return s==null||s(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?d("div",{class:`${n}-base-select-menu__loading`},d(gt,{clsPrefix:n,strokeWidth:20})):this.empty?d("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},pt(e.empty,()=>[d(Po,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):d(bt,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?d(Gt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?d(Pn,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:d(_n,{clsPrefix:n,key:a.key,tmNode:a})}):d("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?d(Pn,{key:a.key,clsPrefix:n,tmNode:a}):d(_n,{clsPrefix:n,key:a.key,tmNode:a})))}),fn(e.action,a=>a&&[d("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),d(qt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Bo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=$("tag",`
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
`,[H("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),H("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),H("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),H("icon, avatar",[H("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),H("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),H("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[X("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),X("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),H("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[X("&:hover","background-color: var(--n-color-checked-hover);"),X("&:active","background-color: var(--n-color-checked-pressed);")])])])]),$o=Object.assign(Object.assign(Object.assign({},ce.props),Bo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),No=Ct("n-tag"),cn=ie({name:"Tag",props:$o,setup(e){const t=M(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:s}=bn(e),a=ce("Tag","-tag",Io,wt,e,o);un(No,{roundRef:Y(e,"round")});function l(C){if(!e.disabled&&e.checkable){const{checked:c,onCheckedChange:O,onUpdateChecked:B,"onUpdate:checked":k}=e;B&&B(!c),k&&k(!c),O&&O(!c)}}function p(C){if(e.triggerClickOnClose||C.stopPropagation(),!e.disabled){const{onClose:c}=e;c&&re(c,C)}}const h={setTextContent(C){const{value:c}=t;c&&(c.textContent=C)}},v=mt("Tag",s,o),g=A(()=>{const{type:C,size:c,color:{color:O,textColor:B}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:R,closeMargin:E,closeMarginRtl:y,borderRadius:x,opacityDisabled:_,textColorCheckable:L,textColorHoverCheckable:D,textColorPressedCheckable:G,textColorChecked:K,colorCheckable:Z,colorHoverCheckable:U,colorPressedCheckable:de,colorChecked:he,colorCheckedHover:ue,colorCheckedPressed:ne,closeBorderRadius:Q,fontWeightStrong:ae,[W("colorBordered",C)]:u,[W("closeSize",c)]:m,[W("closeIconSize",c)]:V,[W("fontSize",c)]:te,[W("height",c)]:ve,[W("color",C)]:me,[W("textColor",C)]:ye,[W("border",C)]:ge,[W("closeIconColor",C)]:fe,[W("closeIconColorHover",C)]:oe,[W("closeIconColorPressed",C)]:J,[W("closeColorHover",C)]:be,[W("closeColorPressed",C)]:se}}=a.value;return{"--n-font-weight-strong":ae,"--n-avatar-size-override":`calc(${ve} - 8px)`,"--n-bezier":k,"--n-border-radius":x,"--n-border":ge,"--n-close-icon-size":V,"--n-close-color-pressed":se,"--n-close-color-hover":be,"--n-close-border-radius":Q,"--n-close-icon-color":fe,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":J,"--n-close-icon-color-disabled":fe,"--n-close-margin":E,"--n-close-margin-rtl":y,"--n-close-size":m,"--n-color":O||(n.value?u:me),"--n-color-checkable":Z,"--n-color-checked":he,"--n-color-checked-hover":ue,"--n-color-checked-pressed":ne,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":de,"--n-font-size":te,"--n-height":ve,"--n-opacity-disabled":_,"--n-padding":R,"--n-text-color":B||ye,"--n-text-color-checkable":L,"--n-text-color-checked":K,"--n-text-color-hover-checkable":D,"--n-text-color-pressed-checkable":G}}),S=i?Ie("tag",A(()=>{let C="";const{type:c,size:O,color:{color:B,textColor:k}={}}=e;return C+=c[0],C+=O[0],B&&(C+=`a${wn(B)}`),k&&(C+=`b${wn(k)}`),n.value&&(C+="c"),C}),g,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:v,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:p,cssVars:i?void 0:g,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:i,color:{borderColor:s}={},round:a,onRender:l,$slots:p}=this;l==null||l();const h=fn(p.avatar,g=>g&&d("div",{class:`${n}-tag__avatar`},g)),v=fn(p.icon,g=>g&&d("div",{class:`${n}-tag__icon`},g));return d("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:h,[`${n}-tag--icon`]:v,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v||h,d("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&i?d(yt,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${n}-tag__border`,style:{borderColor:s}}):null)}}),Ao=X([$("base-selection",`
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
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
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
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
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
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
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
 `),$("base-selection-label",`
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
 `,[$("base-selection-input",`
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
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[X("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),H("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),H("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),H("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
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
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>H(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),ke("disabled",[X("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),H("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),H("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Eo=ie({name:"InternalSelection",props:Object.assign(Object.assign({},ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=M(null),n=M(null),o=M(null),i=M(null),s=M(null),a=M(null),l=M(null),p=M(null),h=M(null),v=M(null),g=M(!1),S=M(!1),C=M(!1),c=ce("InternalSelection","-internal-selection",Ao,xt,e,Y(e,"clsPrefix")),O=A(()=>e.clearable&&!e.disabled&&(C.value||e.active)),B=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=A(()=>{const f=e.selectedOption;if(f)return f[e.labelField]}),R=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function E(){var f;const{value:w}=t;if(w){const{value:j}=n;j&&(j.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((f=h.value)===null||f===void 0||f.sync()))}}function y(){const{value:f}=v;f&&(f.style.display="none")}function x(){const{value:f}=v;f&&(f.style.display="inline-block")}Fe(Y(e,"active"),f=>{f||y()}),Fe(Y(e,"pattern"),()=>{e.multiple&&gn(E)});function _(f){const{onFocus:w}=e;w&&w(f)}function L(f){const{onBlur:w}=e;w&&w(f)}function D(f){const{onDeleteOption:w}=e;w&&w(f)}function G(f){const{onClear:w}=e;w&&w(f)}function K(f){const{onPatternInput:w}=e;w&&w(f)}function Z(f){var w;(!f.relatedTarget||!(!((w=o.value)===null||w===void 0)&&w.contains(f.relatedTarget)))&&_(f)}function U(f){var w;!((w=o.value)===null||w===void 0)&&w.contains(f.relatedTarget)||L(f)}function de(f){G(f)}function he(){C.value=!0}function ue(){C.value=!1}function ne(f){!e.active||!e.filterable||f.target!==n.value&&f.preventDefault()}function Q(f){D(f)}function ae(f){if(f.key==="Backspace"&&!u.value&&!e.pattern.length){const{selectedOptions:w}=e;w!=null&&w.length&&Q(w[w.length-1])}}const u=M(!1);let m=null;function V(f){const{value:w}=t;if(w){const j=f.target.value;w.textContent=j,E()}e.ignoreComposition&&u.value?m=f:K(f)}function te(){u.value=!0}function ve(){u.value=!1,e.ignoreComposition&&K(m),m=null}function me(f){var w;S.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,f)}function ye(f){var w;S.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,f)}function ge(){var f,w;if(e.filterable)S.value=!1,(f=a.value)===null||f===void 0||f.blur(),(w=n.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:j}=i;j==null||j.blur()}else{const{value:j}=s;j==null||j.blur()}}function fe(){var f,w,j;e.filterable?(S.value=!1,(f=a.value)===null||f===void 0||f.focus()):e.multiple?(w=i.value)===null||w===void 0||w.focus():(j=s.value)===null||j===void 0||j.focus()}function oe(){const{value:f}=n;f&&(x(),f.focus())}function J(){const{value:f}=n;f&&f.blur()}function be(f){const{value:w}=l;w&&w.setTextContent(`+${f}`)}function se(){const{value:f}=p;return f}function _e(){return n.value}let Ce=null;function we(){Ce!==null&&window.clearTimeout(Ce)}function Pe(){e.disabled||e.active||(we(),Ce=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function Te(){we()}function ze(f){f||(we(),g.value=!1)}Fe(R,f=>{f||(g.value=!1)}),He(()=>{kt(()=>{const f=a.value;f&&(f.tabIndex=e.disabled||S.value?-1:0)})}),Nn(o,e.onResize);const{inlineThemeDisabled:Se}=e,Oe=A(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:w},self:{borderRadius:j,color:$e,placeholderColor:Ue,textColor:Ge,paddingSingle:qe,paddingMultiple:Ze,caretColor:Ne,colorDisabled:Ae,textColorDisabled:Ee,placeholderColorDisabled:Ye,colorActive:Je,boxShadowFocus:Le,boxShadowActive:pe,boxShadowHover:r,border:b,borderFocus:F,borderHover:N,borderActive:P,arrowColor:I,arrowColorDisabled:T,loadingColor:q,colorActiveWarning:Ke,boxShadowFocusWarning:Xe,boxShadowActiveWarning:Kn,boxShadowHoverWarning:Dn,borderWarning:Vn,borderFocusWarning:jn,borderHoverWarning:Wn,borderActiveWarning:Hn,colorActiveError:Un,boxShadowFocusError:Gn,boxShadowActiveError:qn,boxShadowHoverError:Zn,borderError:Yn,borderFocusError:Jn,borderHoverError:Xn,borderActiveError:Qn,clearColor:et,clearColorHover:nt,clearColorPressed:tt,clearSize:ot,arrowSize:rt,[W("height",f)]:lt,[W("fontSize",f)]:it}}=c.value;return{"--n-bezier":w,"--n-border":b,"--n-border-active":P,"--n-border-focus":F,"--n-border-hover":N,"--n-border-radius":j,"--n-box-shadow-active":pe,"--n-box-shadow-focus":Le,"--n-box-shadow-hover":r,"--n-caret-color":Ne,"--n-color":$e,"--n-color-active":Je,"--n-color-disabled":Ae,"--n-font-size":it,"--n-height":lt,"--n-padding-single":qe,"--n-padding-multiple":Ze,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Ye,"--n-text-color":Ge,"--n-text-color-disabled":Ee,"--n-arrow-color":I,"--n-arrow-color-disabled":T,"--n-loading-color":q,"--n-color-active-warning":Ke,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":Kn,"--n-box-shadow-hover-warning":Dn,"--n-border-warning":Vn,"--n-border-focus-warning":jn,"--n-border-hover-warning":Wn,"--n-border-active-warning":Hn,"--n-color-active-error":Un,"--n-box-shadow-focus-error":Gn,"--n-box-shadow-active-error":qn,"--n-box-shadow-hover-error":Zn,"--n-border-error":Yn,"--n-border-focus-error":Jn,"--n-border-hover-error":Xn,"--n-border-active-error":Qn,"--n-clear-size":ot,"--n-clear-color":et,"--n-clear-color-hover":nt,"--n-clear-color-pressed":tt,"--n-arrow-size":rt}}),ee=Se?Ie("internal-selection",A(()=>e.size[0]),Oe,e):void 0;return{mergedTheme:c,mergedClearable:O,patternInputFocused:S,filterablePlaceholder:B,label:k,selected:R,showTagsPanel:g,isComposing:u,counterRef:l,counterWrapperRef:p,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:i,singleElRef:s,patternInputWrapperRef:a,overflowRef:h,inputTagElRef:v,handleMouseDown:ne,handleFocusin:Z,handleClear:de,handleMouseEnter:he,handleMouseLeave:ue,handleDeleteOption:Q,handlePatternKeyDown:ae,handlePatternInputInput:V,handlePatternInputBlur:ye,handlePatternInputFocus:me,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:Te,handleFocusout:U,handleCompositionEnd:ve,handleCompositionStart:te,onPopoverUpdateShow:ze,focus:fe,focusInput:oe,blur:ge,blurInput:J,updateCounter:be,getCounter:se,getTail:_e,renderLabel:e.renderLabel,cssVars:Se?void 0:Oe,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:s,bordered:a,clsPrefix:l,onRender:p,renderTag:h,renderLabel:v}=this;p==null||p();const g=s==="responsive",S=typeof s=="number",C=g||S,c=d(St,null,{default:()=>d(Ht,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var B,k;return(k=(B=this.$slots).arrow)===null||k===void 0?void 0:k.call(B)}})});let O;if(t){const{labelField:B}=this,k=U=>d("div",{class:`${l}-base-selection-tag-wrapper`,key:U.value},h?h({option:U,handleClose:()=>this.handleDeleteOption(U)}):d(cn,{size:n,closable:!U.disabled,disabled:o,onClose:()=>this.handleDeleteOption(U),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(U,!0):Re(U[B],U,!0)})),R=()=>(S?this.selectedOptions.slice(0,s):this.selectedOptions).map(k),E=i?d("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,y=g?()=>d("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(cn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let x;if(S){const U=this.selectedOptions.length-s;U>0&&(x=d("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},d(cn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${U}`})))}const _=g?i?d(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:y,tail:()=>E}):d(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:y}):S?R().concat(x):R(),L=C?()=>d("div",{class:`${l}-base-selection-popover`},g?R():this.selectedOptions.map(k)):void 0,D=C?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,K=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},d("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Z=i?d("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},_,g?null:E,c):d("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},_,c);O=d(In,null,C?d(At,Object.assign({},D,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Z,default:L}):Z,K)}else if(i){const B=this.pattern||this.isComposing,k=this.active?!B:!this.selected,R=this.active?!1:this.selected;O=d("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?d("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},d("div",{class:`${l}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,k?d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,c)}else O=d("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${l}-base-selection-input`,title:Jt(this.label),key:"input"},d("div",{class:`${l}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),c);return d("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?d("div",{class:`${l}-base-selection__border`}):null,a?d("div",{class:`${l}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Ln(e){return e.type==="ignored"}function dn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Lo(e,t){return{getIsGroup:We,getIgnored:Ln,getKey(o){return We(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Ko(e,t,n,o){if(!t)return e;function i(s){if(!Array.isArray(s))return[];const a=[];for(const l of s)if(We(l)){const p=i(l[o]);p.length&&a.push(Object.assign({},l,{[o]:p}))}else{if(Ln(l))continue;t(n,l)&&a.push(l)}return a}return i(e)}function Do(e,t,n){const o=new Map;return e.forEach(i=>{We(i)?i[n].forEach(s=>{o.set(s[t],s)}):o.set(i[t],i)}),o}const Vo=X([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Bn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),jo=Object.assign(Object.assign({},ce.props),{to:hn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Wo=ie({name:"Select",props:jo,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=bn(e),s=ce("Select","-select",Vo,Pt,e,t),a=M(e.defaultValue),l=Y(e,"value"),p=Sn(l,a),h=M(!1),v=M(""),g=A(()=>{const{valueField:r,childrenField:b}=e,F=Lo(r,b);return Ro(U.value,F)}),S=A(()=>Do(K.value,e.valueField,e.childrenField)),C=M(!1),c=Sn(Y(e,"show"),C),O=M(null),B=M(null),k=M(null),{localeRef:R}=$n("Select"),E=A(()=>{var r;return(r=e.placeholder)!==null&&r!==void 0?r:R.value.placeholder}),y=Et(e,["items","options"]),x=[],_=M([]),L=M([]),D=M(new Map),G=A(()=>{const{fallbackOption:r}=e;if(r===void 0){const{labelField:b,valueField:F}=e;return N=>({[b]:String(N),[F]:N})}return r===!1?!1:b=>Object.assign(r(b),{value:b})}),K=A(()=>L.value.concat(_.value).concat(y.value)),Z=A(()=>{const{filter:r}=e;if(r)return r;const{labelField:b,valueField:F}=e;return(N,P)=>{if(!P)return!1;const I=P[b];if(typeof I=="string")return dn(N,I);const T=P[F];return typeof T=="string"?dn(N,T):typeof T=="number"?dn(N,String(T)):!1}}),U=A(()=>{if(e.remote)return y.value;{const{value:r}=K,{value:b}=v;return!b.length||!e.filterable?r:Ko(r,Z.value,b,e.childrenField)}});function de(r){const b=e.remote,{value:F}=D,{value:N}=S,{value:P}=G,I=[];return r.forEach(T=>{if(N.has(T))I.push(N.get(T));else if(b&&F.has(T))I.push(F.get(T));else if(P){const q=P(T);q&&I.push(q)}}),I}const he=A(()=>{if(e.multiple){const{value:r}=p;return Array.isArray(r)?de(r):[]}return null}),ue=A(()=>{const{value:r}=p;return!e.multiple&&!Array.isArray(r)?r===null?null:de([r])[0]||null:null}),ne=Ot(e),{mergedSizeRef:Q,mergedDisabledRef:ae,mergedStatusRef:u}=ne;function m(r,b){const{onChange:F,"onUpdate:value":N,onUpdateValue:P}=e,{nTriggerFormChange:I,nTriggerFormInput:T}=ne;F&&re(F,r,b),P&&re(P,r,b),N&&re(N,r,b),a.value=r,I(),T()}function V(r){const{onBlur:b}=e,{nTriggerFormBlur:F}=ne;b&&re(b,r),F()}function te(){const{onClear:r}=e;r&&re(r)}function ve(r){const{onFocus:b,showOnFocus:F}=e,{nTriggerFormFocus:N}=ne;b&&re(b,r),N(),F&&oe()}function me(r){const{onSearch:b}=e;b&&re(b,r)}function ye(r){const{onScroll:b}=e;b&&re(b,r)}function ge(){var r;const{remote:b,multiple:F}=e;if(b){const{value:N}=D;if(F){const{valueField:P}=e;(r=he.value)===null||r===void 0||r.forEach(I=>{N.set(I[P],I)})}else{const P=ue.value;P&&N.set(P[e.valueField],P)}}}function fe(r){const{onUpdateShow:b,"onUpdate:show":F}=e;b&&re(b,r),F&&re(F,r),C.value=r}function oe(){ae.value||(fe(!0),C.value=!0,e.filterable&&Ee())}function J(){fe(!1)}function be(){v.value="",L.value=x}const se=M(!1);function _e(){e.filterable&&(se.value=!0)}function Ce(){e.filterable&&(se.value=!1,c.value||be())}function we(){ae.value||(c.value?e.filterable?Ee():J():oe())}function Pe(r){var b,F;!((F=(b=k.value)===null||b===void 0?void 0:b.selfRef)===null||F===void 0)&&F.contains(r.relatedTarget)||(h.value=!1,V(r),J())}function Te(r){ve(r),h.value=!0}function ze(r){h.value=!0}function Se(r){var b;!((b=O.value)===null||b===void 0)&&b.$el.contains(r.relatedTarget)||(h.value=!1,V(r),J())}function Oe(){var r;(r=O.value)===null||r===void 0||r.focus(),J()}function ee(r){var b;c.value&&(!((b=O.value)===null||b===void 0)&&b.$el.contains(Tt(r))||J())}function f(r){if(!Array.isArray(r))return[];if(G.value)return Array.from(r);{const{remote:b}=e,{value:F}=S;if(b){const{value:N}=D;return r.filter(P=>F.has(P)||N.has(P))}else return r.filter(N=>F.has(N))}}function w(r){j(r.rawNode)}function j(r){if(ae.value)return;const{tag:b,remote:F,clearFilterAfterSelect:N,valueField:P}=e;if(b&&!F){const{value:I}=L,T=I[0]||null;if(T){const q=_.value;q.length?q.push(T):_.value=[T],L.value=x}}if(F&&D.value.set(r[P],r),e.multiple){const I=f(p.value),T=I.findIndex(q=>q===r[P]);if(~T){if(I.splice(T,1),b&&!F){const q=$e(r[P]);~q&&(_.value.splice(q,1),N&&(v.value=""))}}else I.push(r[P]),N&&(v.value="");m(I,de(I))}else{if(b&&!F){const I=$e(r[P]);~I?_.value=[_.value[I]]:_.value=x}Ae(),J(),m(r[P],r)}}function $e(r){return _.value.findIndex(F=>F[e.valueField]===r)}function Ue(r){c.value||oe();const{value:b}=r.target;v.value=b;const{tag:F,remote:N}=e;if(me(b),F&&!N){if(!b){L.value=x;return}const{onCreate:P}=e,I=P?P(b):{[e.labelField]:b,[e.valueField]:b},{valueField:T}=e;y.value.some(q=>q[T]===I[T])||_.value.some(q=>q[T]===I[T])?L.value=x:L.value=[I]}}function Ge(r){r.stopPropagation();const{multiple:b}=e;!b&&e.filterable&&J(),te(),b?m([],[]):m(null,null)}function qe(r){!Ve(r,"action")&&!Ve(r,"empty")&&r.preventDefault()}function Ze(r){ye(r)}function Ne(r){var b,F,N,P,I;switch(r.key){case" ":if(e.filterable)break;r.preventDefault();case"Enter":if(!(!((b=O.value)===null||b===void 0)&&b.isComposing)){if(c.value){const T=(F=k.value)===null||F===void 0?void 0:F.getPendingTmNode();T?w(T):e.filterable||(J(),Ae())}else if(oe(),e.tag&&se.value){const T=L.value[0];if(T){const q=T[e.valueField],{value:Ke}=p;e.multiple&&Array.isArray(Ke)&&Ke.some(Xe=>Xe===q)||j(T)}}}r.preventDefault();break;case"ArrowUp":if(r.preventDefault(),e.loading)return;c.value&&((N=k.value)===null||N===void 0||N.prev());break;case"ArrowDown":if(r.preventDefault(),e.loading)return;c.value?(P=k.value)===null||P===void 0||P.next():oe();break;case"Escape":c.value&&(zt(r),J()),(I=O.value)===null||I===void 0||I.focus();break}}function Ae(){var r;(r=O.value)===null||r===void 0||r.focus()}function Ee(){var r;(r=O.value)===null||r===void 0||r.focusInput()}function Ye(){var r;c.value&&((r=B.value)===null||r===void 0||r.syncPosition())}ge(),Fe(Y(e,"options"),ge);const Je={focus:()=>{var r;(r=O.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=O.value)===null||r===void 0||r.blur()}},Le=A(()=>{const{self:{menuBoxShadow:r}}=s.value;return{"--n-menu-box-shadow":r}}),pe=i?Ie("select",void 0,Le,e):void 0;return Object.assign(Object.assign({},Je),{mergedStatus:u,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:g,isMounted:Rt(),triggerRef:O,menuRef:k,pattern:v,uncontrolledShow:C,mergedShow:c,adjustedTo:hn(e),uncontrolledValue:a,mergedValue:p,followerRef:B,localizedPlaceholder:E,selectedOption:ue,selectedOptions:he,mergedSize:Q,mergedDisabled:ae,focused:h,activeWithoutMenuOpen:se,inlineThemeDisabled:i,onTriggerInputFocus:_e,onTriggerInputBlur:Ce,handleTriggerOrMenuResize:Ye,handleMenuFocus:ze,handleMenuBlur:Se,handleMenuTabOut:Oe,handleTriggerClick:we,handleToggle:w,handleDeleteOption:j,handlePatternInput:Ue,handleClear:Ge,handleTriggerBlur:Pe,handleTriggerFocus:Te,handleKeydown:Ne,handleMenuAfterLeave:be,handleMenuClickOutside:ee,handleMenuScroll:Ze,handleMenuKeydown:Ne,handleMenuMousedown:qe,mergedTheme:s,cssVars:i?void 0:Le,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Vt,null,{default:()=>[d(jt,null,{default:()=>d(Eo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),d(Wt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===hn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Mn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Ft(d(Mo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[_t,this.mergedShow],[xn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[xn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ho=le("thead",null,[le("tr",null,[le("th",{width:"80"}," 进制 "),le("th",null,"值"),le("th",{width:"140"}," 备注 "),le("th",{width:"80"}," 操作 ")])],-1),Uo={class:"max-w-[4rem] truncate"},rr=ie({__name:"HexConvert",setup(e){const t=M(10),n=[{label:"2进制",value:2},{label:"8进制",value:8},{label:"10进制",value:10},{label:"16进制",value:16},{label:"26进制",value:26},{label:"32进制",value:32},{label:"36进制",value:36}],o=M(""),i=A(()=>[{radix:"2进制",value:s(2),note:""},{radix:"4进制",value:s(4),note:""},{radix:"8进制",value:s(8),note:""},{radix:"10进制",value:s(10),note:""},{radix:"16进制",value:s(16),note:""},{radix:"26进制",value:s(26),note:"小写字母"},{radix:"32进制",value:s(32),note:"数字 + 大写字母"},{radix:"36进制",value:s(36),note:"数字 + 小写字母"}]);function s(a){return parseInt(o.value,t.value).toString(a)}return(a,l)=>{const p=at,h=Wo,v=Ut,g=Zt,S=Nt,C=Yt;return De(),nn("section",null,[Me(p),Me(g,{class:"mb-6"},{default:tn(()=>[Me(h,{value:Be(t),"onUpdate:value":l[0]||(l[0]=c=>kn(t)?t.value=c:null),class:"basis-28",options:n},null,8,["value"]),Me(v,{value:Be(o),"onUpdate:value":l[1]||(l[1]=c=>kn(o)?o.value=c:null)},null,8,["value"])]),_:1}),Be(o)?(De(),Mt(C,{key:0,bordered:!1},{default:tn(()=>[Ho,le("tbody",null,[(De(!0),nn(In,null,Bt(Be(i),c=>(De(),nn("tr",{key:c.radix},[le("td",null,on(c.radix),1),le("td",Uo,on(c.value),1),le("td",null,on(c.note),1),le("td",null,[Me(S,{size:"small",secondary:"",type:"info",onClick:O=>Be(st)(c.value)},{default:tn(()=>[It(" 复制 ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})):$t("",!0)])}}});export{rr as default};
