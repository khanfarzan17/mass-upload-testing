"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[0],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var s=o(9379),a=o(45),r=(o(5043),o(4282)),n=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:d=!1,onClick:c,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,a.A)(e,l);return(0,n.jsxs)(r.A,(0,s.A)((0,s.A)({variant:t,size:o,type:i,disabled:d,onClick:c,className:u,title:h},g),{},{children:[m&&(0,n.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>a});o(5043);var s=o(579);const a=()=>(0,s.jsx)("div",{className:"loader-container",children:(0,s.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var s=o(9566),a=o(4282),r=o(579);const n=e=>{let{show:t,onHide:o,title:n,children:l,footerButtons:i}=e;return(0,r.jsxs)(s.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(s.A.Header,{closeButton:!0,children:(0,r.jsx)(s.A.Title,{children:n||"Modal Title"})}),(0,r.jsx)(s.A.Body,{children:l}),(0,r.jsx)(s.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(a.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(a.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(9379),a=o(45),r=o(2115);const n=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:d=!1,closeOnClick:c=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=r.br}=e,b=(0,a.A)(e,n);(r.oR[o]||r.oR)(t,(0,s.A)({position:l,autoClose:i,hideProgressBar:d,closeOnClick:c,pauseOnHover:u,draggable:p,theme:m,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"warn"},o))}}}},4e3:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var s=o(5043),a=o(4391),r=(o(2342),o(9555),o(3003)),n=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),d=o(2691),c=o(3728),u=o(7680),h=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:a,onReset:r}=e;const[n,l]=(0,s.useState)([]),i=()=>{l([]),a&&a([]),r&&r()};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];l(t),a&&a(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:n.length>0?n.map(((e,t)=>(0,h.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",color:"red"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=o(6313),g=o(3277);var b=o(2725),x=o(6713),v=o(4196),f=o(6509);const y=e=>{let{variant:t="info",message:o,show:s=!0,className:a=""}=e;return s?(0,h.jsx)(f.A,{variant:t,className:a,children:o}):null},j=e=>{let{errors:t}=e;console.log("Errors in ErrorPopup:",t);const o=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),s=o?o[1]:"-",a=t.match(/"([^"]*)" is required/),r=a?a[1]:"-",n=o?t.split(": ")[1]:t;return e[s]||(e[s]={errorMessages:[],columnNames:[]}),e[s].errorMessages.push(n),e[s].columnNames.push(r),e}),{}),s=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("strong",{children:"Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve below issues, do the required changes in the spreadsheet and re-import."]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{variant:"danger",message:s,className:"text-left-align text-sm-start mb-3"}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(v.A,{striped:!0,bordered:!0,hover:!0,children:[(0,h.jsx)("thead",{className:"table-light",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Row Number"}),(0,h.jsx)("th",{children:"Error Description"}),(0,h.jsx)("th",{children:"Column Name"})]})}),(0,h.jsx)("tbody",{children:Object.entries(o).length>0?Object.entries(o).map((e=>{let[t,{errorMessages:o,columnNames:s}]=e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:t}),(0,h.jsx)("td",{children:o.join(",")}),(0,h.jsx)("td",{children:s.join(", ")})]},t)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:3,className:"text-center",children:"No Errors Found"})})})]})})]})};var w=o(2268),A=o(6047);const N=()=>{const{showErrorToast:e}=(0,b.A)(),[t,o]=(0,s.useState)([]),a="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,s.useEffect)((()=>{(async()=>{try{var t,s,r,n,l,i,d,c;console.log("Fetching column mapping...");const u=await(0,w.I)();if(!u)return void e(g.rK);const h=await(0,A.ui)("GET","".concat(a,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!h||!h.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",h.output.member);const p=null===(t=h.output)||void 0===t||null===(s=t.member)||void 0===s||null===(r=s[0])||void 0===r?void 0:r.id;if(!p)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",p);const m=await(0,A.ui)("POST","".concat(a,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[p]},u);if(!m||!m.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",m.output);const b=(null===(n=m.output.results)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.groupData)||[];console.log("Full Group Data (with all NLS values):",b.map((e=>e.nls)));const x=b.map((e=>e.nls)),v=((null===(i=m.output.results)||void 0===i||null===(d=i[0])||void 0===d||null===(c=d.groupData)||void 0===c?void 0:c.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",v),console.log("All available NLS values:",x),console.log("Mapped Attributes (for dropdown):",v),o({allNLSValues:b.map((e=>e.nls)),dropdownOptions:v})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}};var C=o(9379);const S=e=>{let{index:t,selectedValue:o,options:s,onChange:a,size:r,className:n}=e;return(0,h.jsxs)(d.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?a(t,e.target.value):a(e.target.value)},size:r,className:n,children:[(0,h.jsx)("option",{value:"",children:s.defaultLabel})," ",s.list.map(((e,t)=>(0,h.jsx)("option",{value:e.value,children:e.label},t)))]})},k=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:s,handleSelectChange:a,selectedAttributes:r,mappedAttributes:n,mandatoryAttributes:l}=e;const{allNLSValues:i=[],dropdownOptions:d=[]}=n||{};console.log("Mapped Attributes prop:",n),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",l),console.log("Dropdown Options :",d);return(0,h.jsxs)(v.A,{bordered:!0,className:"table-light ",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"header-styling",children:" Column Name"}),(0,h.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,h.jsx)("tbody",{children:t.map(((e,t)=>{const o=l.includes(e),s=(e=>{if(!Array.isArray(i))return console.warn("allNLSValues is not an array:",i),!1;const t=i.includes(e);return console.log('Header "'.concat(e,'" NLS match:'),t?"\u2705":"\u274c"),t})(e);return console.log("Row ".concat(t,":"),{header:e,hasNLS:s,isMandatory:o,defaultLabel:s?e:""}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:(0,h.jsx)(S,{index:t,selectedValue:r[t]||e,onChange:a,size:"lg",className:"w-100",disabled:!s,options:{defaultLabel:s?e:"Please select from Drop Down",list:d.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})},P=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:a}=N(),[r,n]=(0,s.useState)({}),[l,i]=(0,s.useState)({}),[d,c]=(0,s.useState)({allNLSValues:[],dropdownOptions:[]});(0,s.useEffect)((()=>{Array.isArray(a)&&(console.log("Filtered mapped attributes:",a),c({allNLSValues:a.map((e=>e.uiLabel)),dropdownOptions:a}))}),[a]);return(0,h.jsx)(k,{columnHeaders:t,handleCheckboxChange:e=>{n((0,C.A)((0,C.A)({},r),{},{[e]:!r[e]}))},checkedItems:r,handleSelectChange:(e,t)=>{i((0,C.A)((0,C.A)({},l),{},{[e]:t}))},selectedAttributes:l,mappedAttributes:a,mandatoryAttributes:o})};var E=o(1238);const D=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),T=e=>new Promise(((t,o)=>{console.log("Starting file validation for:",e.name);const s=new FileReader;s.readAsBinaryString(e),s.onload=e=>{console.log("File successfully read. Parsing...");const s=E.LF(e.target.result,{type:"binary"}),a=s.SheetNames[0];console.log("Detected sheet name:",a);const r=s.Sheets[a],n=E.Wp.sheet_to_json(r,{header:1})[0]||[];if(console.log("Extracted headers:",n),!n||0===n.length)return console.error("\u274c No headers found in the file."),void o({errors:["The uploaded file has no content or is empty."],headers:[]});const l=E.Wp.sheet_to_json(r,{defval:""});if(console.log("Extracted sheet data:",l),0===l.length)return console.error("\u274c No row data found. Only headers exist."),void o({errors:["The uploaded file contains only headers but no data. Please add at least one row."],headers:n});const i=Object.keys(l[0]);console.log("Parsed file headers:",i);let d=null;for(const[t,o]of Object.entries(D.o))if(o.fileHeaders.every((e=>i.includes(e)))){d=t,console.log("Matched operation:",d);break}if(!d)return console.error("\u274c No matching operation found for given headers."),void o({errors:["File headers do not match any expected template."],headers:n});const c=D.o[d].fileHeaders;console.log("Expected Headers:",c);const u=D.o[d].mandatoryAttributes;console.log("Mandatory Attributes:",u);const h=c.filter((e=>!i.includes(e)));if(h.length>0)return console.error("\u274c Missing headers:",h),void o({errors:["Missing required headers: ".concat(h.join(", "))],headers:n,mandatoryAttributes:u});const p=[];if(l.forEach(((e,t)=>{u.forEach((o=>{e[o]&&""!==e[o].toString().trim()||p.push("Row ".concat(t+2,': "').concat(o,'" is required but is empty.'))}))})),p.length>0)return console.error("\u274c Validation errors found:",p),void o({errors:p,headers:n});console.log("\u2705 File validation successful. No errors found."),t({headers:n,sheetData:l,validationErrors:[],mandatoryAttributes:u})},s.onerror=()=>{console.error("\u274c Error reading the file."),o({errors:["File reading failed."],headers:[]})}})),F=()=>{const[e,t]=(0,s.useState)(!1),[o,a]=(0,s.useState)(!1),[r,n]=(0,s.useState)(!1),[l,u]=(0,s.useState)(!1),{showErrorToast:v,showSuccessToast:f}=(0,b.A)(),[w,A]=(0,s.useState)(!1),[N,C]=(0,s.useState)(""),[k,E]=(0,s.useState)([]),[D,F]=(0,s.useState)([]),[O,R]=(0,s.useState)([]);s.useEffect((()=>{console.log("Operation Choice updated:",N)}),[N]);const L=0===D.length||k.length>0;return console.log("Operation Choice:",k),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(i.A,{direction:"horizontal",children:[(0,h.jsx)(S,{selectedValue:N,onChange:e=>{console.log("Operation selected:",e),C(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),"\xa0",(0,h.jsx)("div",{className:"p-2 ms-auto",children:"3"===N&&(0,h.jsx)(d.A.Group,{controlId:"formFileMultiple",children:(0,h.jsx)(d.A.Control,{type:"file",multiple:!0})})}),(0,h.jsx)("div",{className:"p-2",children:(0,h.jsx)(c.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(v)(N)},text:"Download Template"})})]}),(0,h.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:async e=>{if(0!==e.length)try{A(!0),console.log("Starting file validation...");const{headers:t=[],validationErrors:o=[],mandatoryAttributes:s=[]}=await T(e[0]);console.log("Extracted Headers:",t),console.log("Validation Errors:",o),console.log("MassUpload - Received mandatory attributes:",s),F(t),R(s),0===o.length?(E([]),f("No Error! File validated successfully!")):(E(o),console.warn("Validation Errors:",o),a(!0))}catch(t){console.error("Validation failed:",t.errors),E(t.errors||["Unknown validation error."]),F(t.headers||[]),R(t.mandatoryAttributes||[]),a(!0)}finally{A(!1)}},onReset:()=>{t(!1),a(!1),n(!1),u(!1),A(!1),C(""),E([]),F([]),R([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),f("Widget reset successfully!")}}),w&&(0,h.jsx)(x.A,{}),(0,h.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,h.jsx)(d.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,h.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[k.length>0&&(0,h.jsx)(c.A,{variant:"danger",onClick:()=>n(!0),text:"Content Errors (".concat(k.length,")")}),(0,h.jsx)(c.A,{variant:"info",onClick:()=>{n(!1),u(!0)},text:"Manage Spreadsheet Columns"}),(0,h.jsx)(c.A,{variant:L?"secondary":"primary",disabled:L,size:"lg",onClick:()=>t(!0),text:"Submit"})]})]})]}),(0,h.jsx)(m.A,{show:r,onHide:()=>n(!1),title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:()=>n(!1)}],children:(0,h.jsx)(j,{errors:k})}),(0,h.jsx)(m.A,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,h.jsx)("p",{children:"This is a reusable modal component with dynamic content."})}),(0,h.jsxs)(m.A,{show:l,onHide:()=>u(!1),title:"Manage Spreadshet Column",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>u(!1)},{label:"Cancel",variant:"danger",onClick:()=>u(!1)}],children:[(0,h.jsx)(y,{variant:"info",message:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("strong",{children:"Note:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]})}),(0,h.jsx)(P,{columnHeaders:D,mandatoryAttributes:O})]})]})};let O=null;function R(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),O||(O=a.createRoot(o)),O.render((0,h.jsxs)(r.Kq,{store:n.A,children:[(0,h.jsx)(F,{}),(0,h.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>a});var s=o(6047);const a=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,s.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",a=await new Promise(((e,s)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:s})})),r=a.csrf.name,n=a.csrf.value,l="SecurityContext",i=e;return{[r]:n,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=0.e27870e7.chunk.js.map