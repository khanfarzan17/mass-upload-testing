"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[388],{3728:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(9379),s=o(45),i=(o(5043),o(8155)),l=o(579);const a=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],r=e=>{let{variant:t="primary",size:o="md",type:r="button",disabled:d=!1,onClick:c,className:h="",title:u,text:p,imageSrc:g}=e,m=(0,s.A)(e,a);return(0,l.jsxs)(i.A,(0,n.A)((0,n.A)({variant:t,size:o,type:r,disabled:d,onClick:c,className:h,title:u},m),{},{children:[g&&(0,l.jsx)("img",{src:g,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},2725:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(9379),s=o(45),i=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],a=()=>{const e=e=>{let{message:t,type:o="default",position:a="top-right",autoClose:r=2e3,hideProgressBar:d=!1,closeOnClick:c=!0,pauseOnHover:h=!1,pauseOnFocusLoss:u=!1,draggable:p=!0,theme:g="light",transition:m=i.br}=e,x=(0,s.A)(e,l);(i.oR[o]||i.oR)(t,(0,n.A)({position:a,autoClose:r,hideProgressBar:d,closeOnClick:c,pauseOnHover:h,draggable:p,theme:g,transition:m},x))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,n.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,n.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,n.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,n.A)({message:t,type:"warn"},o))}}}},388:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var n=o(5043),s=o(4391),i=(o(2342),o(9555),o(3003)),l=o(2670),a=o(2115),r=(o(8421),o(4050),o(9959),o(2327)),d=o(2691),c=o(3728),h=o(7680),u=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:s}=e;const[i,l]=(0,n.useState)([]),a=()=>{l([]),s&&s([])};return(0,u.jsxs)("div",{className:"file-upload-container",children:[(0,u.jsx)("h2",{children:"Drag & Drop Files"}),(0,u.jsxs)("div",{className:"upload-area",children:[(0,u.jsx)(h.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];l(t),s&&s(t)},name:"file",types:t}),(0,u.jsx)("div",{className:"file-list",children:i.length>0?i.map(((e,t)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,u.jsxs)("p",{style:{marginRight:"10px"},children:["\ud83d\udcc1 ",e.name]}),(0,u.jsx)("button",{onClick:a,style:{background:"none",border:"none",cursor:"pointer",color:"red"},children:"X"})]},t))):(0,u.jsx)("p",{children:"No files uploaded yet."})})]})]})};var g=o(6245),m=o(8155);const x=e=>{let{show:t,onHide:o,title:n,children:s,footerButtons:i}=e;return(0,u.jsxs)(g.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,u.jsx)(g.A.Header,{closeButton:!0,children:(0,u.jsx)(g.A.Title,{children:n||"Modal Title"})}),(0,u.jsx)(g.A.Body,{children:s}),(0,u.jsx)(g.A.Footer,{children:i?i.map(((e,t)=>(0,u.jsx)(m.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,u.jsx)(m.A,{variant:"secondary",onClick:o,children:"Close"})})]})};var w=o(2073),j=o(2725);const v=()=>{const[e,t]=(0,n.useState)(!1),[o,s]=(0,n.useState)(""),{showErrorToast:i}=(0,j.A)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.A,{className:"mt-3",gap:4,children:[(0,u.jsxs)(r.A,{direction:"horizontal",children:[(0,u.jsxs)(d.A.Select,{"aria-label":"Choose Operations ",style:{width:"30%",border:"1px solid #007bff",outline:"none",borderRadius:"8px"},onChange:e=>s(e.target.value),children:[(0,u.jsx)("option",{value:"",children:"Choose Operations"}),(0,u.jsx)("option",{value:"1",children:"Physical Product/Raw Material"}),(0,u.jsx)("option",{value:"2",children:"Physical Product Structure"}),(0,u.jsx)("option",{value:"3",children:"Document"}),(0,u.jsx)("option",{value:"4",children:"Physical Product-Document"})]}),(0,u.jsx)(c.A,{variant:"link ms-auto btn-lg",onClick:()=>{(0,w.Ti)(i)(o)},text:"Download Template"})]}),(0,u.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:e=>{console.log("Uploaded files:",e)}}),(0,u.jsxs)(r.A,{direction:"horizontal",children:[(0,u.jsx)(d.A.Check,{type:"checkbox",label:"background"}),(0,u.jsx)(c.A,{variant:"primary ms-auto",onClick:()=>t(!0),text:"Submit"})]})]}),(0,u.jsx)(x,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,u.jsx)("p",{children:"This is a reusable modal component with dynamic content."})})]})};let y=null;function C(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),y||(y=s.createRoot(o)),y.render((0,u.jsxs)(i.Kq,{store:l.A,children:[(0,u.jsx)(v,{}),(0,u.jsx)(a.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=388.a28313a3.chunk.js.map