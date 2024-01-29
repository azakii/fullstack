"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8667],{78667:(se,T,t)=>{t.r(T),t.d(T,{E:()=>N,a:()=>W,b:()=>Se});var e=t(74081),x=t(27279),_=t(10701),I=t(2878),k=t(77970),R=t(96226),L=t(25191),b=t(4540),O=t(51094),A=t(10989),M=t(32370),B=t(67472),K=t(22572),Z=t(73411),h=t(93415),$=t(23298),D=t(74577),w=t(12881),te=t(1782),ne=t(8295),ae=t(61121),re=t(27875),z=t(48102),oe=t(74758),ie=t(73354),v=t(87006),S=t(40464),le=t(47533),F=t(51447),V=t(37995),X=t(59491),de=t(66947),ce=t(79213),ge=t(36938),Q=t(95066),he=t(34547),G=t(59082),ue=t(64820),_e=t(76827),P=t(71563),C=t(61020),y=t(47853),Ee=t(76873),H=t(72450);const[me,Y]=(0,Ee.k)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,C.Z)(),{collectionTypes:a,isLoading:c}=(0,X.u)(),r=x.useMemo(()=>a.some(o=>o.options?.draftAndPublish===!0),[a]),d=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(me,{isDraftAndPublish:r,children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.Q,{"aria-hidden":!0,children:d}),c&&(0,e.jsx)(k.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(fe,{"aria-label":d,children:s})]})})},fe=(0,H.ZP)(R.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,pe=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},xe=({getHeaders:s=pe})=>{const{isDraftAndPublish:n}=Y("Headers"),{formatMessage:a}=(0,C.Z)(),c=s(n);return(0,e.jsx)(L.S,{children:(0,e.jsxs)(b.Z,{children:[(0,e.jsx)(O.g,{children:(0,e.jsx)(A.T,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,e.jsx)(O.g,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(M.Z,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,e.jsx)(O.g,{children:(0,e.jsx)(M.Z,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},Pe=({providedEvents:s})=>{const{isDraftAndPublish:n}=Y("Body"),a=s||je(n),{values:c,handleChange:r}=(0,P.u6)(),d="events",o=c.events,m=[],f=o.reduce((l,i)=>{const u=i.split(".")[0];return l[u]||(l[u]=[]),l[u].push(i),l},{}),g=({target:{name:l,value:i}})=>{const u=new Set(o);i?u.add(l):u.delete(l),r({target:{name:d,value:Array.from(u)}})},p=({target:{name:l,value:i}})=>{const u=new Set(o);i?a[l].forEach(j=>{m.includes(j)||u.add(j)}):a[l].forEach(j=>u.delete(j)),r({target:{name:d,value:Array.from(u)}})};return(0,e.jsx)(B.X,{children:Object.entries(a).map(([l,i])=>(0,e.jsx)(J,{disabledEvents:m,name:l,events:i,inputValue:f[l],handleSelect:g,handleSelectAll:p},l))})},je=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},J=({disabledEvents:s=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:d})=>{const{formatMessage:o}=(0,C.Z)(),m=a.filter(i=>!s.includes(i)),f=c.length>0,g=c.length===m.length,p=({target:{name:i}})=>{d({target:{name:i,value:!g}})},l=5;return(0,e.jsxs)(b.Z,{children:[(0,e.jsx)(O.f,{children:(0,e.jsx)(K.X,{indeterminate:f&&!g,"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:p,value:g,children:ve(n)})}),a.map(i=>(0,e.jsx)(O.f,{children:(0,e.jsx)(Z.C,{disabled:s.includes(i),"aria-label":i,name:i,value:c.includes(i),onValueChange:u=>r({target:{name:i,value:u}})})},i)),a.length<l&&(0,e.jsx)(O.f,{colSpan:l-a.length})]})},ve=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),W={Root:Me,Headers:xe,Body:Pe,Row:J},ye=()=>(0,e.jsxs)(W.Root,{children:[(0,e.jsx)(W.Headers,{}),(0,e.jsx)(W.Body,{})]}),Oe=()=>{const{formatMessage:s}=(0,C.Z)(),{values:n,errors:a}=(0,P.u6)();return(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.Q,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(h.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(P.F2,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,e.jsxs)($.r,{gap:4,children:[n.headers.map((d,o)=>{const m=a.headers?.[o],f=typeof m=="object"?m.key:void 0,g=typeof m=="object"?m.value:void 0;return(0,e.jsxs)(x.Fragment,{children:[(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)(P.gN,{as:De,name:`headers.${o}.key`,"aria-label":`row ${o+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,e.jsx)(D.P,{col:6,children:(0,e.jsxs)(_.k,{alignItems:"flex-end",children:[(0,e.jsx)(h.x,{style:{flex:1},children:(0,e.jsx)(P.gN,{as:w.o,name:`headers.${o}.value`,"aria-label":`row ${o+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:g})}),(0,e.jsx)(_.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:g?0:5,children:(0,e.jsx)(v.fG,{disabled:n.headers.length===1,onClick:()=>r(o),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:o+1})})})]})})]},`${o}.${d.key}`)}),(0,e.jsx)(D.P,{col:12,children:(0,e.jsx)(te.A,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,e.jsx)(ge.Z,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},De=({name:s,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,P.u6)(),[d,o]=x.useState([...q]);x.useEffect(()=>{const g=q.filter(p=>!r?.some(l=>l.key!==a&&l.key===p));o(g)},[r,a]);const m=g=>{n({target:{name:s,value:g}})},f=g=>{o(p=>[...p,g]),m(g)};return(0,e.jsx)(ne.XU,{...c,onClear:()=>m(""),onChange:m,onCreateOption:f,placeholder:"",value:a,children:d.map(g=>(0,e.jsx)(ae.O,{value:g,children:g},g))})},q=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ce=({isPending:s,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:d}=(0,C.Z)();return(0,e.jsx)(h.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)($.r,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(D.P,{col:3,children:(0,e.jsx)(M.Z,{children:d({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(D.P,{col:3,children:(0,e.jsx)(be,{isPending:s,statusCode:c})}),(0,e.jsx)(D.P,{col:6,children:s?(0,e.jsx)(_.k,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(_.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(M.Z,{textColor:"neutral400",children:d({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(U,{as:Q.Z,color:"neutral400"})]})})}):(0,e.jsx)(Ae,{statusCode:c,message:r})})]})})},U=H.ZP.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,H.iv)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),be=({isPending:s,statusCode:n})=>{const{formatMessage:a}=(0,C.Z)();return s||!n?(0,e.jsxs)(_.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:he.Z}),(0,e.jsx)(M.Z,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(_.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:G.Z,color:"success700"}),(0,e.jsx)(M.Z,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(_.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:Q.Z,color:"danger700"}),(0,e.jsxs)(M.Z,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Ae=({statusCode:s,message:n})=>{const{formatMessage:a}=(0,C.Z)();return s?s>=200&&s<300?(0,e.jsx)(_.k,{justifyContent:"flex-end",children:(0,e.jsx)(M.Z,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(_.k,{justifyContent:"flex-end",children:(0,e.jsx)(_.k,{maxWidth:(0,v.Q1)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(M.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Te=({handleSubmit:s,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:d})=>{const{formatMessage:o}=(0,C.Z)(),[m,f]=x.useState(!1),g=(0,V.j)(ye,async()=>(await t.e(1601).then(t.bind(t,11601))).EventsTableEE),p=i=>Object.keys(i).length?Object.entries(i).map(([u,j])=>({key:u,value:j})):[{key:"",value:""}],l=(0,P.TA)({initialValues:{name:d?.name||"",url:d?.url||"",headers:p(d?.headers||{}),events:d?.events||[]},onSubmit(i,{resetForm:u,setSubmitting:j}){s(i),u({values:i}),j(!1)},validationSchema:Le({formatMessage:o}),validateOnChange:!1,validateOnBlur:!1});return g?(0,e.jsx)(P.Hy,{value:l,children:(0,e.jsxs)(v.l0,{children:[(0,e.jsx)(re.T,{primaryAction:(0,e.jsxs)(_.k,{gap:2,children:[(0,e.jsx)(z.z,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,e.jsx)(ue.Z,{}),disabled:a||c,size:"L",children:o({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(z.z,{startIcon:(0,e.jsx)(G.Z,{}),type:"submit",size:"L",disabled:!l.dirty,loading:l.isSubmitting,children:o({id:"global.save",defaultMessage:"Save"})})]}),title:a?o({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):d?.name,navigationAction:(0,e.jsx)(ce.r,{as:le.OL,startIcon:(0,e.jsx)(_e.Z,{}),to:"/settings/webhooks",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(oe.D,{children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[m&&(0,e.jsx)(Ce,{isPending:c,response:r,onCancel:()=>f(!1)}),(0,e.jsx)(h.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)($.r,{gap:6,children:[(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)(P.gN,{as:w.o,name:"name",error:l.errors.name,label:o({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(D.P,{col:12,children:(0,e.jsx)(P.gN,{as:w.o,name:"url",error:l.errors.url,label:o({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(Oe,{}),(0,e.jsx)(g,{})]})})]})})]})}):null},Ie=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Re=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Le=({formatMessage:s})=>y.Ry().shape({name:y.Z_().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Ie,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:y.Z_().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Re,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:y.Vo(n=>{const a=y.IX();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(y.Ry().shape({key:y.Z_().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:y.Z_().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:y.IX()}),ee=s=>({...s,headers:s.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),N=()=>{const n=(0,F.$B)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,F.k6)(),r=(0,v.lm)(),{formatAPIError:d}=(0,v.So)(),{isLoading:o}=(0,X.u)(),{put:m,get:f,post:g}=(0,v.kY)(),{isLoading:p,data:l,error:i,refetch:u}=(0,S.useQuery)(["webhooks",n],async()=>{const{data:{data:E}}=await f(`/admin/webhooks/${n}`);return E},{enabled:!a});x.useEffect(()=>{i&&r({type:"warning",message:d(i)})},[i,r,d]);const{isLoading:j,data:We,mutate:Ue}=(0,S.useMutation)(()=>g(`/admin/webhooks/${n}/trigger`).then(E=>E.data.data),{onError(E){r({type:"warning",message:d(E)})}}),ke=(0,S.useMutation)(E=>g("/admin/webhooks",E),{onSuccess({data:E}){r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${E.data.id}`)},onError(E){r({type:"warning",message:d(E)})}}),Be=(0,S.useMutation)(({id:E,body:Ze})=>m(`/admin/webhooks/${E}`,Ze),{onSuccess(){u(),r({type:"success",message:{id:"notification.form.success.fields"}})},onError(E){r({type:"warning",message:d(E)})}}),Ke=async E=>{if(a){ke.mutate(ee(E));return}Be.mutate({id:n,body:ee(E)})};return p||o?(0,e.jsx)(v.dO,{}):(0,e.jsxs)(ie.o,{children:[(0,e.jsx)(v.SL,{name:"Webhooks"}),(0,e.jsx)(Te,{data:l,handleSubmit:Ke,triggerWebhook:Ue,isCreating:a,isTriggering:j,triggerResponse:We})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,EditPage:N,ProtectedEditPage:()=>{const s=(0,V.f)(de.s);return(0,e.jsx)(v.O4,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(N,{})})}},Symbol.toStringTag,{value:"Module"}))},59491:(se,T,t)=>{t.d(T,{u:()=>k});var e=t(27279),x=t(87006),_=t(53532),I=t(40464);function k(){const{get:R}=(0,x.kY)(),{formatAPIError:L}=(0,x.So)(),b=(0,x.lm)(),O=(0,I.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:h}}=await R("/content-manager/components");return h},onError(h){h instanceof _.d7&&b({type:"warning",message:L(h)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:h}}=await R("/content-manager/content-types");return h},onError(h){h instanceof _.d7&&b({type:"warning",message:L(h)})}}]),[A,M]=O,B=A.isLoading||M.isLoading,K=e.useMemo(()=>(M?.data??[]).filter(h=>h.kind==="collectionType"&&h.isDisplayed),[M?.data]),Z=e.useMemo(()=>(M?.data??[]).filter(h=>h.kind!=="collectionType"&&h.isDisplayed),[M?.data]);return{isLoading:B,components:e.useMemo(()=>A?.data??[],[A?.data]),collectionTypes:K,singleTypes:Z}}}}]);
