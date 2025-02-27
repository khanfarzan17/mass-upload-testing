"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[71],{3728:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),n=o(45),i=(o(5043),o(8155)),s=o(579);const r=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],l=e=>{let{variant:t="primary",size:o="md",type:l="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,n.A)(e,r);return(0,s.jsxs)(i.A,(0,a.A)((0,a.A)({variant:t,size:o,type:l,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,s.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(579);const n=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},2725:(e,t,o)=>{o.d(t,{A:()=>r});var a=o(9379),n=o(45),i=o(2115);const s=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],r=()=>{const e=e=>{let{message:t,type:o="default",position:r="top-right",autoClose:l=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=i.br}=e,x=(0,n.A)(e,s);(i.oR[o]||i.oR)(t,(0,a.A)({position:r,autoClose:l,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},x))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},6071:(e,t,o)=>{o.r(t),o.d(t,{default:()=>A});var a=o(5043),n=o(4391),i=(o(2342),o(9555),o(3003)),s=o(2670),r=o(2115),l=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:n}=e;const[i,s]=(0,a.useState)([]),r=()=>{s([]),n&&n([])};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];s(t),n&&n(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:i.length>0?i.map(((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{style:{marginRight:"10px"},children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:r,style:{background:"none",border:"none",cursor:"pointer",color:"red",marginBottom:"10px"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=o(6245),g=o(8155);const x=e=>{let{show:t,onHide:o,title:a,children:n,footerButtons:i}=e;return(0,h.jsxs)(m.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:a||"Modal Title"})}),(0,h.jsx)(m.A.Body,{children:n}),(0,h.jsx)(m.A.Footer,{children:i?i.map(((e,t)=>(0,h.jsx)(g.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,h.jsx)(g.A,{variant:"secondary",onClick:o,children:"Close"})})]})};var y=o(3277);var v=o(2725),b=o(1238);const j=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"manadatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure"]},"Document":{"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"]},"Physical Product Structure":{"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}');var w=o(6713);const f=()=>{const[e,t]=(0,a.useState)(!1),[o,n]=(0,a.useState)(!1),[i,s]=(0,a.useState)(""),{showErrorToast:r}=(0,v.A)(),[u,m]=(0,a.useState)(!1),[g,f]=(0,a.useState)([]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(l.A,{direction:"horizontal",children:[(0,h.jsxs)(c.A.Select,{"aria-label":"Choose Operations",style:{width:"30%",border:"1px solid #007bff",outline:"none",borderRadius:"8px"},onChange:e=>s(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"Choose Operations"}),(0,h.jsx)("option",{value:"1",children:"Physical Product/Raw Material"}),(0,h.jsx)("option",{value:"2",children:"Physical Product Structure"}),(0,h.jsx)("option",{value:"3",children:"Document"}),(0,h.jsx)("option",{value:"4",children:"Physical Product-Document"})]}),(0,h.jsx)(d.A,{variant:"link ms-auto btn-lg",onClick:()=>(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(y._2)}window.open(o,"_blank")})(r)(i),text:"Download Template"})]}),(0,h.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:e=>{var t;0!==e.length&&(m(!0),(t=e[0],new Promise(((e,o)=>{const a=new FileReader;a.readAsBinaryString(t),a.onload=t=>{var a;const n=b.LF(t.target.result,{type:"binary"}),s=n.SheetNames[0],r=b.Wp.sheet_to_json(n.Sheets[s],{defval:""}),l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[i],c=(null===(a=j.o[l])||void 0===a?void 0:a.mandatoryAttributes)||[];if(0===r.length)return void o(["Uploaded file is empty."]);const d=Object.keys(r[0]),u=c.filter((e=>!d.includes(e)));if(u.length>0)return void o(["Missing required headers: ".concat(u.join(", ")),"Ensure your file has the correct column names."]);const h=[];r.forEach(((e,t)=>{c.forEach((o=>{e[o]&&""!==e[o].toString().trim()||h.push("Row ".concat(t+2,": ").concat(o," is required."))}))})),h.length>0?o(h):e()},a.onerror=()=>o(["File reading failed."])}))).then((()=>{f([]),m(!1)})).catch((e=>{f(e),m(!1)})))}}),u&&(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)(w.A,{})}),g.length>0&&(0,h.jsx)(d.A,{variant:"danger",text:"Content Error",onClick:()=>n(!0)}),(0,h.jsxs)(l.A,{direction:"horizontal",children:[(0,h.jsx)(c.A.Check,{type:"checkbox",label:"Background"}),(0,h.jsx)(d.A,{variant:"primary ms-auto",onClick:()=>t(!0),text:"Submit"})]})]}),(0,h.jsx)(x,{show:o,onHide:()=>n(!1),title:"Validation Errors",footerButtons:[{label:"Close",variant:"danger",onClick:()=>n(!1)}],children:(0,h.jsx)("ul",{children:g.map(((e,t)=>(0,h.jsx)("li",{children:e},t)))})}),(0,h.jsx)(x,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,h.jsx)("p",{children:"This is a reusable modal component with dynamic content."})})]})};let C=null;function A(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),C||(C=n.createRoot(o)),C.render((0,h.jsxs)(i.Kq,{store:s.A,children:[(0,h.jsx)(f,{}),(0,h.jsx)(r.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=71.b08d7657.chunk.js.map