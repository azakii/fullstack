"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9541],{69541:(z,g,s)=>{s.d(g,{ProtectedEditPage:()=>G});var t=s(74081),D=s(27279),E=s(93415),l=s(10701),A=s(32370),h=s(48102),I=s(23298),O=s(74577),v=s(12881),T=s(39708),B=s(73354),L=s(27875),d=s(74758),U=s(79213),a=s(87006),W=s(76827),K=s(53532),y=s(71563),i=s(61020),f=s(40464),C=s(51447),$=s(47533),u=s(47853),Q=s(37995),Y=s(87137),H=s(66947),S=s(29679),ds=s(15816),rs=s(97442),ls=s(13576),es=s(87830),Ps=s(47184),Ms=s(364),Ds=s(59461),Os=s(49204),ms=s(74919),Rs=s(29206),As=s(98934),hs=s(43433),vs=s(75719),Ls=s(8175),Cs=s(6078),cs=s(51943),gs=s(55783),Is=s(92249),Ts=s(41942),Bs=s(22919),Us=s(53915),Ws=s(75041),Ks=s(30200),fs=s(91379),xs=s(33299),js=s(33409),ys=s(63645),us=s(7988),Ss=s(7055),ps=s(26757),Zs=s(58311),Ns=s(29510),Fs=s(16946),zs=s(10124),$s=s(69530),Qs=s(86961),Ys=s(51527),Hs=s(19764),Js=s(42982),Vs=s(26126),Xs=s(64797),Gs=s(85811),bs=s(10131),ks=s(63799);const J=({disabled:r,role:n,values:m,errors:_,onChange:R,onBlur:c})=>{const{formatMessage:o}=(0,i.Z)();return(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.x,{children:[(0,t.jsx)(E.x,{children:(0,t.jsx)(A.Z,{fontWeight:"bold",children:n?n.name:o({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.x,{children:(0,t.jsx)(A.Z,{textColor:"neutral500",variant:"pi",children:n?n.description:o({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.z,{disabled:!0,variant:"secondary",children:o({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:n.usersCount})})]}),(0,t.jsxs)(I.r,{gap:4,children:[(0,t.jsx)(O.P,{col:6,children:(0,t.jsx)(v.o,{disabled:r,name:"name",error:_.name&&o({id:_.name}),label:o({id:"global.name",defaultMessage:"Name"}),onChange:R,onBlur:c,required:!0,value:m.name||""})}),(0,t.jsx)(O.P,{col:6,children:(0,t.jsx)(T.g,{disabled:r,label:o({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&o({id:_.name}),onChange:R,onBlur:c,children:m.description||""})})]})]})})},V=u.Ry().shape({name:u.Z_().required(a.I0.required)}),X=()=>{const r=(0,a.lm)(),{formatMessage:n}=(0,i.Z)(),_=(0,C.$B)("/settings/roles/:id")?.params.id,{put:R,get:c}=(0,a.kY)(),[o,p]=D.useState(!1),x=D.useRef(null),{lockApp:b,unlockApp:k}=(0,a.o1)(),{trackUsage:w}=(0,a.rS)(),{formatAPIError:q}=(0,a.So)(),{isLoading:ss,data:Z}=(0,f.useQuery)(["permissions",_],async()=>{const{data:{data:P}}=await c("/admin/permissions",{params:{role:_}});return P},{cacheTime:0}),{roles:ts,isLoading:N,refetch:_s}=(0,Y.u)({id:_},{cacheTime:0}),e=ts[0]??{},{permissions:as,isLoading:ns}=(0,S.u)({id:_??null},{cacheTime:0}),os=async P=>{try{b?.(),p(!0);const{permissionsToSend:M,didUpdateConditions:j}=x.current?.getPermissions()??{};await R(`/admin/roles/${_}`,P),e.code!=="strapi-super-admin"&&(await R(`/admin/roles/${_}/permissions`,{permissions:M}),j&&w("didUpdateConditions")),x.current?.setFormAfterSubmit(),await _s(),r({type:"success",message:{id:"notification.success.saved"}})}catch(M){M instanceof K.d7&&r({type:"warning",message:q(M)})}finally{p(!1),k?.()}},F=!N&&e.code==="strapi-super-admin";return(0,t.jsxs)(B.o,{children:[(0,t.jsx)(a.SL,{name:"Roles"}),(0,t.jsx)(y.J9,{enableReinitialize:!0,initialValues:{name:e.name??"",description:e.description??""},onSubmit:os,validationSchema:V,validateOnChange:!1,children:({handleSubmit:P,values:M,errors:j,handleChange:Es,handleBlur:is})=>(0,t.jsxs)("form",{onSubmit:P,children:[(0,t.jsx)(L.T,{primaryAction:(0,t.jsx)(l.k,{gap:2,children:(0,t.jsx)(h.z,{type:"submit",disabled:e.code==="strapi-super-admin",onClick:P,loading:o,size:"L",children:n({id:"global.save",defaultMessage:"Save"})})}),title:n({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:n({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(U.r,{as:$.OL,startIcon:(0,t.jsx)(W.Z,{}),to:"/settings/roles",children:n({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(d.D,{children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(J,{disabled:F,errors:j,values:M,onChange:Es,onBlur:is,role:e}),!ss&&!N&&!ns&&Z?(0,t.jsx)(E.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(S.P,{isFormDisabled:F,permissions:as,ref:x,layout:Z})}):(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(a.dO,{})})]})})]})})]})},G=()=>{const r=(0,Q.f)(H.s),{isLoading:n,allowedActions:{canRead:m,canUpdate:_}}=(0,a.ss)(r.settings?.roles);return n?(0,t.jsx)(a.dO,{}):!m&&!_?(0,t.jsx)(C.l_,{to:"/"}):(0,t.jsx)(X,{})}},87137:(z,g,s)=>{s.d(g,{u:()=>A});var t=s(27279),D=s(87006),E=s(61020),l=s(40464);const A=(h={},I={})=>{const{id:O="",...v}=h,{get:T}=(0,D.kY)(),{locale:B}=(0,E.Z)(),L=(0,D.Xe)(B,{sensitivity:"base"}),{data:d,error:U,isError:a,isLoading:W,refetch:K}=(0,l.useQuery)(["roles",O,v],async()=>{const{data:i}=await T(`/admin/roles/${O??""}`,{params:v});return i},I);return{roles:t.useMemo(()=>{let i=[];return d&&(Array.isArray(d.data)?i=d.data:i=[d.data]),[...i].sort((f,C)=>L.compare(f.name,C.name))},[d,L]),error:U,isError:a,isLoading:W,refetch:K}}}}]);
