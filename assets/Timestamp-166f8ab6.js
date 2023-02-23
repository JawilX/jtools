import{_ as w}from"./BaseTitle.vue_vue_type_script_setup_true_lang-d1e9ebd9.js";import{d as H,r as y,w as b,br as U,U as $,W as V,X as e,Y as a,_ as p,$ as t,a2 as C,Z as o,aq as Y,as as M,a1 as d,a0 as G}from"./index-bc9287d3.js";import{c as P}from"./index-4ac65761.js";import{u as R}from"./index-d084ce0c.js";import{_ as X}from"./InputGroupLabel-c404c07f.js";import{_ as h}from"./Space-c5a72ec5.js";import{_ as j}from"./Input-05a87b71.js";import{_ as q}from"./InputGroup-9b53beaf.js";import{_ as E}from"./Table-8ef7fc23.js";import"./headers-159fcd27.js";import"./Eye-d3da929b.js";const L={class:"inline-block w-40 text-xl"},O=t("span",{class:"pr-6"},"毫秒",-1),W=t("span",{class:"px-6"},"=>",-1),Z=t("span",{class:"my-4 ml-24 inline-block rotate-90"},"=>",-1),z={class:"p-4"},A=t("div",{class:"leading-6"}," Unix时间戳（Unix时间/POSIX时间）是自1970年1月1日（UTC / GMT午夜）以来经过的秒数。 此页面上的转换器将以秒（10位数字）和毫秒（13位数字）为单位的时间戳转换为可读的日期。 ",-1),F=t("thead",null,[t("th",null,"单位"),t("th",null,"数量")],-1),J=t("tbody",null,[t("tr",null,[t("td",null,"1分钟"),t("td",null,"60")]),t("tr",null,[t("td",null,"1小时"),t("td",null,"3600")]),t("tr",null,[t("td",null,"1天"),t("td",null,"86400")]),t("tr",null,[t("td",null,"1周（星期）"),t("td",null,"604800")]),t("tr",null,[t("td",null,"1个月（30.44天）"),t("td",null,"2629743")]),t("tr",null,[t("td",null,"1年（365.24天）"),t("td",null,"31556926")])],-1),it=H({__name:"Timestamp",setup(K){const{timestamp:f,pause:D,resume:B}=R({controls:!0}),v=y(!1),_=y("");_.value=String(f.value);const k=b(()=>U(parseInt(_.value)).format("YYYY-MM-DD HH:mm:ss")),c=y("");c.value=U(f.value).format("YYYY-MM-DD HH:mm:ss");const N=b(()=>U(c.value).format("x")),x=y(""),I=b(()=>{const i=parseInt(x.value);if(isNaN(i))return"";let l="结算结果：";const m=Math.floor(i/86400),u=Math.floor(i%86400/3600),r=Math.floor(i%3600/60),s=i%60;return m>0&&(l+=`${m}天 `),u>0&&(l+=`${u}小时 `),r>0&&(l+=`${r}分钟 `),s>0&&(l+=`${s}秒 `),l});return(i,l)=>{const m=G,u=h,r=w,s=j,T=X,g=q,S=E;return $(),V("section",null,[e(u,{align:"center"},{default:a(()=>[p(" 当前时间： "),t("span",L,C(o(f)),1),O,o(v)?M("",!0):($(),Y(m,{key:0,text:"",type:"warning",onClick:l[0]||(l[0]=n=>(o(D)(),v.value=!0))},{default:a(()=>[p(" 暂停 ")]),_:1})),o(v)?($(),Y(m,{key:1,text:"",type:"primary",onClick:l[1]||(l[1]=n=>(o(B)(),v.value=!1))},{default:a(()=>[p(" 启动 ")]),_:1})):M("",!0),e(m,{text:"",type:"info",onClick:l[2]||(l[2]=n=>o(P)(o(f)))},{default:a(()=>[p(" 复制 ")]),_:1})]),_:1}),e(r,{class:"my-6"}),e(u,{align:"center"},{default:a(()=>[e(g,null,{default:a(()=>[e(s,{value:o(_),"onUpdate:value":l[3]||(l[3]=n=>d(_)?_.value=n:null),class:"flex-1",clearable:"",placeholder:"时间戳"},null,8,["value"]),e(T,{class:""},{default:a(()=>[p(" 毫秒 ")]),_:1})]),_:1}),W,e(g,null,{default:a(()=>[e(s,{ref:"convertTimestampRef",value:o(k),"onUpdate:value":l[4]||(l[4]=n=>d(k)?k.value=n:null),class:"flex-1",placeholder:"时间",onClick:l[5]||(l[5]=n=>n.target.select())},null,8,["value"])]),_:1})]),_:1}),e(r,{class:"!mt-12",text:"获取时间戳"}),e(u,{align:"center"},{default:a(()=>[e(s,{value:o(c),"onUpdate:value":l[6]||(l[6]=n=>d(c)?c.value=n:null),clearable:"",placeholder:"时间"},null,8,["value"])]),_:1}),Z,e(u,{align:"center"},{default:a(()=>[e(g,null,{default:a(()=>[e(s,{value:o(N),"onUpdate:value":l[7]||(l[7]=n=>d(N)?N.value=n:null),class:"flex-1",placeholder:"时间戳",onClick:l[8]||(l[8]=n=>n.target.select())},null,8,["value"]),e(T,null,{default:a(()=>[p("毫秒")]),_:1})]),_:1})]),_:1}),e(r,{class:"!mt-12",text:"秒转天、小时、分钟、秒"}),e(g,{class:"w-[231px]"},{default:a(()=>[e(s,{value:o(x),"onUpdate:value":l[9]||(l[9]=n=>d(x)?x.value=n:null),clearable:""},null,8,["value"]),e(T,{class:""},{default:a(()=>[p(" 秒 ")]),_:1})]),_:1}),t("div",z,C(o(I)),1),e(r,{class:"!mt-48",text:"什么是Unix时间戳"}),A,e(S,{bordered:!1},{default:a(()=>[F,J]),_:1})])}}});export{it as default};
