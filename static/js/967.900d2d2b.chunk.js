"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[967],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),r=(o(5043),o(4282)),n=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:d=!1,onClick:c,className:u="",title:h,text:m,imageSrc:p}=e,g=(0,s.A)(e,l);return(0,n.jsxs)(r.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:d,onClick:c,className:u,title:h},g),{},{children:[p&&(0,n.jsx)("img",{src:p,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(9566),s=o(4282),r=o(579);const n=e=>{let{show:t,onHide:o,title:n,children:l,footerButtons:i}=e;return(0,r.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(a.A.Header,{closeButton:!0,children:(0,r.jsx)(a.A.Title,{children:n||"Modal Title"})}),(0,r.jsx)(a.A.Body,{children:l}),(0,r.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),s=o(45),r=o(2115);const n=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:d=!1,closeOnClick:c=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:m=!0,theme:p="light",transition:g=r.br}=e,b=(0,s.A)(e,n);(r.oR[o]||r.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:d,closeOnClick:c,pauseOnHover:u,draggable:m,theme:p,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},5967:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var a=o(5043),s=o(4391),r=(o(2342),o(9555),o(3003)),n=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),d=o(2691),c=o(3728),u=o(7680),h=o(579);const m=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:s,onReset:r}=e;const[n,l]=(0,a.useState)([]),i=()=>{l([]),s&&s([]),r&&r()};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];l(t),s&&s(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:n.length>0?n.map(((e,t)=>(0,h.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",color:"red"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var p=o(6313),g=o(3277);var b=o(2725),x=o(6713),v=o(4196),f=o(6509);const y=e=>{let{errors:t}=e;return console.log("Errors in ErrorPopup:",t),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f.A,{variant:"danger",className:"text-left-align  text-sm-start mb-3",children:[(0,h.jsx)("strong",{children:"Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve below issues, do the required changes in the spreadsheet and re-import."]}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(v.A,{striped:!0,bordered:!0,hover:!0,children:[(0,h.jsx)("thead",{className:"table-light",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Row Number"}),(0,h.jsx)("th",{children:"Error Description"}),(0,h.jsx)("th",{children:"Column Name "})]})}),(0,h.jsx)("tbody",{children:t.length>0?t.map(((e,t)=>{const o=e.match(/Row (\d+):/),a=o?o[1]:"-",s=e.match(/"([^"]*)" is required/),r=s?s[1]:"-",n=o?e.split(": ")[1]:e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:a}),(0,h.jsx)("td",{children:n}),(0,h.jsx)("td",{children:r})]},t)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:2,className:"text-center",children:"No Errors Found"})})})]})})]})};var j=o(2268),w=o(6047);const A=()=>{const{showErrorToast:e}=(0,b.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,a.useEffect)((()=>{(async()=>{try{var t,a,r,n,l,i;console.log("Fetching column mapping...");const d=await(0,j.I)();if(!d)return void e(g.rK);const c=await(0,w.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",d);if(!c||!c.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",c.output.member);const u=null===(t=c.output)||void 0===t||null===(a=t.member)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id;if(!u)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",u);const h=await(0,w.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[u]},d);if(!h||!h.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",h.output);const m=((null===(n=h.output.results)||void 0===n||null===(l=n[0])||void 0===l||null===(i=l.groupData)||void 0===i?void 0:i.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",m),o(m)}catch(d){console.error("Error fetching column mapping:",d),e(d.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}};var C=o(9379);const N=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:r,className:n}=e;return(0,h.jsxs)(d.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:r,className:n,children:[(0,h.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,h.jsx)("option",{value:e.value,children:e.label},t)))]})},S=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:a,handleSelectChange:s,selectedAttributes:r,mappedAttributes:n,mandatoryAttributes:l}=e;return console.log("Mapped Attributes prop:",n),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",l),(0,h.jsxs)(v.A,{bordered:!0,className:"table-light ",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"Column Name"}),(0,h.jsx)("th",{children:"Attribute Name"})]})}),(0,h.jsx)("tbody",{children:t.map(((e,t)=>{const o=l.includes(e);return(0,h.jsxs)("tr",{className:o?"":"disabled-row",children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:(0,h.jsx)(N,{index:t,selectedValue:r[t]||e,onChange:s,size:"lg",className:"w-100",disabled:!o,options:{defaultLabel:e,list:n.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})},k=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:s}=A(),[r,n]=(0,a.useState)({}),[l,i]=(0,a.useState)({});return(0,h.jsx)(S,{columnHeaders:t,handleCheckboxChange:e=>{n((0,C.A)((0,C.A)({},r),{},{[e]:!r[e]}))},checkedItems:r,handleSelectChange:(e,t)=>{i((0,C.A)((0,C.A)({},l),{},{[e]:t}))},selectedAttributes:l,mappedAttributes:s,mandatoryAttributes:o})};var P=o(1238);const E=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),T=e=>new Promise(((t,o)=>{console.log("Starting file validation for:",e.name);const a=new FileReader;a.readAsBinaryString(e),a.onload=e=>{console.log("File successfully read. Parsing...");const a=P.LF(e.target.result,{type:"binary"}),s=a.SheetNames[0];console.log("Detected sheet name:",s);const r=a.Sheets[s],n=P.Wp.sheet_to_json(r,{header:1})[0]||[];if(console.log("Extracted headers:",n),!n||0===n.length)return console.error("\u274c No headers found in the file."),void o({errors:["The uploaded file has no content or is empty."],headers:[]});const l=P.Wp.sheet_to_json(r,{defval:""});if(console.log("Extracted sheet data:",l),0===l.length)return console.error("\u274c No row data found. Only headers exist."),void o({errors:["The uploaded file contains only headers but no data. Please add at least one row."],headers:n});const i=Object.keys(l[0]);console.log("Parsed file headers:",i);let d=null;for(const[t,o]of Object.entries(E.o))if(o.fileHeaders.every((e=>i.includes(e)))){d=t,console.log("Matched operation:",d);break}if(!d)return console.error("\u274c No matching operation found for given headers."),void o({errors:["File headers do not match any expected template."],headers:n});const c=E.o[d].fileHeaders;console.log("Expected Headers:",c);const u=E.o[d].mandatoryAttributes;console.log("Mandatory Attributes:",u);const h=c.filter((e=>!i.includes(e)));if(h.length>0)return console.error("\u274c Missing headers:",h),void o({errors:["Missing required headers: ".concat(h.join(", "))],headers:n,mandatoryAttributes:u});const m=[];if(l.forEach(((e,t)=>{u.forEach((o=>{e[o]&&""!==e[o].toString().trim()||m.push("Row ".concat(t+2,': "').concat(o,'" is required but is empty.'))}))})),m.length>0)return console.error("\u274c Validation errors found:",m),void o({errors:m,headers:n});console.log("\u2705 File validation successful. No errors found."),t({headers:n,sheetData:l,validationErrors:[],mandatoryAttributes:u})},a.onerror=()=>{console.error("\u274c Error reading the file."),o({errors:["File reading failed."],headers:[]})}})),D=()=>{const[e,t]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1),{showErrorToast:v,showSuccessToast:f}=(0,b.A)(),[j,w]=(0,a.useState)(!1),[A,C]=(0,a.useState)(""),[S,P]=(0,a.useState)([]),[E,D]=(0,a.useState)([]),[F,R]=(0,a.useState)([]);return a.useEffect((()=>{console.log("Operation Choice updated:",A)}),[A]),console.log("Operation Choice:",S),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(i.A,{direction:"horizontal",children:[(0,h.jsx)(N,{selectedValue:A,onChange:e=>{console.log("Operation selected:",e),C(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),"\xa0",(0,h.jsx)("div",{className:"p-2 ms-auto",children:"3"===A&&(0,h.jsx)(d.A.Group,{controlId:"formFileMultiple",children:(0,h.jsx)(d.A.Control,{type:"file",multiple:!0})})}),(0,h.jsx)("div",{className:"p-2",children:(0,h.jsx)(c.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(v)(A)},text:"Download Template"})})]}),(0,h.jsx)(m,{fileTypes:["XLSX"],multiple:!1,onUpload:async e=>{if(0!==e.length)try{w(!0),console.log("Starting file validation...");const{headers:t=[],validationErrors:o=[],mandatoryAttributes:a=[]}=await T(e[0]);console.log("Extracted Headers:",t),console.log("Validation Errors:",o),console.log("MassUpload - Received mandatory attributes:",a),D(t),R(a),0===o.length?(P([]),f("No Error! File validated successfully!")):(P(o),console.warn("Validation Errors:",o),s(!0))}catch(t){console.error("Validation failed:",t.errors),P(t.errors||["Unknown validation error."]),D(t.headers||[]),R(t.mandatoryAttributes||[]),s(!0)}finally{w(!1)}},onReset:()=>{t(!1),s(!1),n(!1),u(!1),w(!1),C(""),P([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),f("Widget reset successfully!")}}),j&&(0,h.jsx)(x.A,{}),(0,h.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,h.jsx)(d.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,h.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[S.length>0&&(0,h.jsx)(c.A,{variant:"danger",onClick:()=>n(!0),text:"Content Errors (".concat(S.length,")")}),(0,h.jsx)(c.A,{variant:"info",onClick:()=>{n(!1),u(!0)},text:"Manage Spreadsheet Columns"}),(0,h.jsx)(c.A,{variant:"primary",size:"lg",onClick:()=>t(!0),text:"Submit"})]})]})]}),(0,h.jsx)(p.A,{show:r,onHide:()=>n(!1),title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:()=>n(!1)}],children:(0,h.jsx)(y,{errors:S})}),(0,h.jsx)(p.A,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,h.jsx)("p",{children:"This is a reusable modal component with dynamic content."})}),(0,h.jsxs)(p.A,{show:l,onHide:()=>u(!1),title:"Manage Spreadshet Column",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>u(!1)},{label:"Cancel",variant:"danger",onClick:()=>u(!1)}],children:[(0,h.jsx)("p",{children:"All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name"}),(0,h.jsx)(k,{columnHeaders:E,mandatoryAttributes:F})]})]})};let F=null;function R(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),F||(F=s.createRoot(o)),F.render((0,h.jsxs)(r.Kq,{store:n.A,children:[(0,h.jsx)(D,{}),(0,h.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),r=s.csrf.name,n=s.csrf.value,l="SecurityContext",i=e;return{[r]:n,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=967.900d2d2b.chunk.js.map