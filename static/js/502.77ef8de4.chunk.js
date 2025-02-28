"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[502],{3728:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(9379),n=o(45),r=(o(5043),o(4282)),a=o(579);const i=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],l=e=>{let{variant:t="primary",size:o="md",type:l="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,n.A)(e,i);return(0,a.jsxs)(r.A,(0,s.A)((0,s.A)({variant:t,size:o,type:l,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,a.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var s=o(579);const n=()=>(0,s.jsx)("div",{className:"loader-container",children:(0,s.jsx)("div",{className:"loader"})})},2725:(e,t,o)=>{o.d(t,{A:()=>i});var s=o(9379),n=o(45),r=o(2115);const a=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],i=()=>{const e=e=>{let{message:t,type:o="default",position:i="top-right",autoClose:l=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=r.br}=e,x=(0,n.A)(e,a);(r.oR[o]||r.oR)(t,(0,s.A)({position:i,autoClose:l,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},x))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"warn"},o))}}}},502:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var s=o(5043),n=o(4391),r=(o(2342),o(9555),o(3003)),a=o(2670),i=o(2115),l=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:n,onReset:r}=e;const[a,i]=(0,s.useState)([]),l=()=>{i([]),n&&n([]),r&&r()};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];i(t),n&&n(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:a.length>0?a.map(((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{style:{marginRight:"10px"},children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:l,style:{background:"none",border:"none",cursor:"pointer",color:"red",marginBottom:"10px"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=o(9566),g=o(4282);const x=e=>{let{show:t,onHide:o,title:s,children:n,footerButtons:r}=e;return(0,h.jsxs)(m.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:s||"Modal Title"})}),(0,h.jsx)(m.A.Body,{children:n}),(0,h.jsx)(m.A.Footer,{children:r?r.map(((e,t)=>(0,h.jsx)(g.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,h.jsx)(g.A,{variant:"secondary",onClick:o,children:"Close"})})]})};var y=o(3277);var v=o(2725),b=o(1238);const j=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}');var f=o(6713),w=o(4196),C=o(6509);const A=e=>{let{errors:t}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(C.A,{variant:"info",className:"text-center text-sm-start mb-3",children:[(0,h.jsx)("strong",{children:"Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve below issues, do the required changes in the spreadsheet and re-import."]}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(w.A,{striped:!0,bordered:!0,hover:!0,children:[(0,h.jsx)("thead",{className:"table-light",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Row Number"}),(0,h.jsx)("th",{children:"Error Description"}),(0,h.jsx)("th",{children:"Column Name "})]})}),(0,h.jsx)("tbody",{children:t.length>0?t.map(((e,t)=>{const o=e.match(/Row (\d+):/),s=o?o[1]:"-",n=o?e.split(": ")[1]:e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:s}),(0,h.jsx)("td",{children:n})]},t)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:2,className:"text-center",children:"No Errors Found"})})})]})})]})},N=()=>{const[e,t]=(0,s.useState)(!1),[o,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1),{showErrorToast:i,showSuccessToast:u}=(0,v.A)(),[m,g]=(0,s.useState)(!1),[w,C]=(0,s.useState)(""),[N,P]=(0,s.useState)([]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(l.A,{direction:"horizontal",children:[(0,h.jsxs)(c.A.Select,{"aria-label":"Choose Operations",style:{width:"30%",border:"1px solid #007bff",outline:"none",borderRadius:"8px"},onChange:e=>C(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"Choose Operations"}),(0,h.jsx)("option",{value:"1",children:"Physical Product/Raw Material"}),(0,h.jsx)("option",{value:"2",children:"Physical Product Structure"}),(0,h.jsx)("option",{value:"3",children:"Document"}),(0,h.jsx)("option",{value:"4",children:"Physical Product-Document"})]}),(0,h.jsx)(d.A,{variant:"link ms-auto ",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(y._2)}window.open(o,"_blank")})(i)(w)},text:"Download Template"})]}),(0,h.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:e=>{var t;0!==e.length&&(g(!0),(t=e[0],new Promise(((e,o)=>{const s=new FileReader;s.readAsBinaryString(t),s.onload=t=>{const s=b.LF(t.target.result,{type:"binary"}),n=s.SheetNames[0],r=s.Sheets[n],a=b.Wp.sheet_to_json(r,{header:1})[0];if(!a||0===a.length)return void o(["The uploaded file has no content or Empty."]);const i=b.Wp.sheet_to_json(r,{defval:""});if(console.log("sheetData",i),0===i.length)return void o(["The uploaded file contains only headers but no data. Please add at least one row."]);const l=Object.keys(i[0]),c={};l.forEach((e=>{c[e]=(c[e]||0)+1}));const d=Object.keys(c).filter((e=>c[e]>1));if(d.length>0)return void o(["Duplicate headers found: ".concat(d.join(", "))]);let u=null;for(const[e,o]of Object.entries(j.o))if(o.fileHeaders.every((e=>l.includes(e)))){u=e;break}if(!u)return void o(["File headers do not match any expected template."]);const h=j.o[u].fileHeaders;console.log("Expected Headers",h);const p=j.o[u].mandatoryAttributes;console.log("Mandatory Attributes",p);const m=h.filter((e=>!l.includes(e)));if(m.length>0)return void o(["Missing required headers: ".concat(m.join(", "))]);const g=[];i.forEach(((e,t)=>{p.forEach((o=>{e[o]&&""!==e[o].toString().trim()||g.push("Row ".concat(t+2,': "').concat(o,'" is required but is empty.'))}))})),g.length>0?(console.log("Rejecting with validation errors:",g),o(g)):(console.log("Resolving validation"),e())},s.onerror=()=>o(["File reading failed."])}))).then((()=>{console.log("Validation successful (inside .then)"),P([]),g(!1),u(" No Error File validated successfully!")})).catch((e=>{console.log("Validation failed (inside .catch",e),P(e),g(!1),n(!0)})))},onReset:()=>{t(!1),n(!1),g(!1),C(""),P([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),u("Widget reset successfully!")}}),m&&(0,h.jsx)(f.A,{}),(0,h.jsxs)(l.A,{direction:"horizontal",gap:2,children:[(0,h.jsx)(c.A.Check,{type:"checkbox",label:"Background"}),(0,h.jsxs)("div",{className:"ms-auto d-flex gap-2",children:[N.length>0&&(0,h.jsx)(d.A,{variant:"warning",onClick:()=>a(!0),text:"Content Errors (".concat(N.length,")")}),(0,h.jsx)(d.A,{variant:"primary",onClick:()=>t(!0),text:"Submit"})]})]})]}),(0,h.jsx)(x,{show:r,onHide:()=>a(!1),title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:()=>a(!1)}],children:(0,h.jsx)(A,{errors:N})}),(0,h.jsx)(x,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,h.jsx)("p",{children:"This is a reusable modal component with dynamic content."})})]})};let P=null;function S(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),P||(P=n.createRoot(o)),P.render((0,h.jsxs)(r.Kq,{store:a.A,children:[(0,h.jsx)(N,{}),(0,h.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=502.77ef8de4.chunk.js.map