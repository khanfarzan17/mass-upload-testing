"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[903],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),r=o(45),s=(o(5043),o(4282)),l=o(579);const n=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,r.A)(e,n);return(0,l.jsxs)(s.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,l.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>r});o(5043);var a=o(579);const r=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(9566),r=o(4282),s=o(579);const l=e=>{let{show:t,onHide:o,title:l,children:n,footerButtons:i}=e;return(0,s.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,s.jsx)(a.A.Header,{closeButton:!0,children:(0,s.jsx)(a.A.Title,{children:l||"Modal Title"})}),(0,s.jsx)(a.A.Body,{children:n}),(0,s.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,s.jsx)(r.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,s.jsx)(r.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(9379),r=o(45),s=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],n=()=>{const e=e=>{let{message:t,type:o="default",position:n="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=s.br}=e,b=(0,r.A)(e,l);(s.oR[o]||s.oR)(t,(0,a.A)({position:n,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},4903:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var a=o(5043),r=o(4391),s=(o(2342),o(9555),o(3003)),l=o(2670),n=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(2725),p=o(579);const m=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:r,onReset:s,disabled:l=!1,message:n="Drag & Drop your files here or Click to browse"}=e;const[i,c]=(0,a.useState)([]),{showErrorToast:d}=(0,h.A)(),m=()=>{c([]),r&&r([]),s&&s()};return(0,p.jsxs)("div",{className:"file-upload-container ".concat(l?"disabled":""),onDragOver:e=>{l&&(e.preventDefault(),e.stopPropagation(),d("Please choose operation from the drop down first"))},children:[(0,p.jsx)("h2",{children:l?"Please select an operation first":"Drag & Drop Files"}),(0,p.jsxs)("div",{className:"upload-area",children:[(0,p.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];c(t),r&&r(t)},name:"file",types:t,disabled:l,hoverTitle:l?"":"Drop here"}),(0,p.jsx)("div",{className:"file-list",children:i.length>0?i.map(((e,t)=>(0,p.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,p.jsx)("button",{onClick:m,style:{background:"none",border:"none",cursor:l?"not-allowed":"pointer",color:"red",opacity:l?.5:1},disabled:l,children:"X"})]},t))):(0,p.jsx)("p",{children:n})})]})]})};var g=o(3277);var b=o(6713),v=o(1238);const x=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),y=(e,t,o)=>new Promise(((a,r)=>{console.log("Starting file validation for:",e.name,o),console.log("Selected Operation:",o),console.log("File Name:",e.name),console.log("[validateFile.js] Required Collaborative Space:",t);const s={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"};if(!o)return void r({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("[validateFile.js] \u274c collabSpaceTitles is not an array!",t),void r({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});console.log("[validateFile.js] Required Collaborative Spaces:",t);const l=new FileReader;l.readAsBinaryString(e),l.onload=e=>{var l;console.log("File successfully read. Parsing...");const n=v.LF(e.target.result,{type:"binary"}),i=n.SheetNames[0];console.log("Detected sheet name:",i);const c=n.Sheets[i],d=v.Wp.sheet_to_json(c,{header:1})[0]||[];if(console.log("Extracted headers:",d),!d||0===d.length)return console.error("\u274c No headers found in the file."),void r({errors:["The uploaded file has no content or is empty."],headers:[]});const u=v.Wp.sheet_to_json(c,{defval:""});if(console.log("Extracted sheet data:",u),0===u.length)return console.error("\u274c No row data found. Only headers exist."),void r({errors:["The uploaded file contains only headers but no data. Please add at least one row."],headers:d});const h=Object.keys(u[0]);console.log("Parsed file headers:",h);const p=null===(l=x.o[s[o]])||void 0===l?void 0:l.fileHeaders;if(console.log("Expected headers for selected operation:",p),!p)return console.error("\u274c No template configuration found for selected operation"),void r({errors:["Invalid operation selected."],headers:[],isTemplateMismatch:!0});if(!p.every((e=>h.includes(e))))return console.error("\u274c Template does not match selected operation"),void r({errors:["The uploaded template does not match the selected operation: ".concat(s[o])],headers:h,isTemplateMismatch:!0});let m=null;for(const[t,o]of Object.entries(x.o))if(o.fileHeaders.every((e=>h.includes(e)))){m=t,console.log("Matched operation:",m);break}if(!m)return console.error("\u274c No matching operation found for given headers."),void r({errors:["File headers do not match any expected template."],headers:d});const g=x.o[m].fileHeaders;console.log("Expected Headers:",g);const b=x.o[m].mandatoryAttributes;console.log("Mandatory Attributes:",b);const y=g.filter((e=>!h.includes(e)));if(y.length>0)return console.error("\u274c Missing headers:",y),void r({errors:["Missing required headers: ".concat(y.join(", "))],headers:d,mandatoryAttributes:b});const f=[];if(u.forEach(((e,o)=>{b.forEach((t=>{e[t]&&""!==e[t].toString().trim()||f.push("Row ".concat(o+2,': "').concat(t,'" is required but is empty'))}));const a=e["Collaborative Space"]?e["Collaborative Space"].trim():"";console.log("[validateFile.js] Row ".concat(o+2,": User's Collaborative Space:"),a),a?t.includes(a)||f.push("Row ".concat(o+2,': You are not allowed to create in  "Collaborative Space -" (').concat(a,") ")):f.push("Row ".concat(o+2,': "Collaborative Space"  is Missing or Empty'))})),f.length>0)return console.log("Validation errors with mandatory attributes:",{errors:f,headers:d,mandatoryAttributes:b}),void r({errors:f,headers:d,mandatoryAttributes:b});console.log("\u2705 File validation successful. No errors found."),a({headers:d,sheetData:u,validationErrors:[],mandatoryAttributes:b})},l.onerror=()=>{console.error("\u274c Error reading the file."),r({errors:["File reading failed."],headers:[]})}})),f=e=>{let{index:t,selectedValue:o,options:a,onChange:r,size:s,className:l}=e;return(0,p.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?r(t,e.target.value):r(e.target.value)},size:s,className:l,children:[(0,p.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,p.jsx)("option",{value:e.value,children:e.label},t)))]})};var w=o(314),j=o(6313),A=o(4196),C=o(6509);const N=e=>{let{variant:t="info",message:o,show:a=!0,className:r=""}=e;return a?(0,p.jsx)(C.A,{variant:t,className:r,children:o}):null},S=e=>{let{errors:t}=e;console.log("Errors in ErrorPopup:",t);const o=new Map;t.forEach((e=>{const t=e.match(/Row (\d+):/),a=e.match(/"([^"]*)" is required/),r=t?t[1]:"",s=a?a[1]:e.includes("Collaborative Space")?"Collaborative Space":"",l=t?e.split(": ")[1]:e;o.has(r)||o.set(r,[]),o.get(r).push({errorMsg:l,columnName:s})}));const a=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import."]});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N,{variant:"danger",message:a,className:"custom-alert"}),(0,p.jsx)("div",{className:"error-table-container",children:(0,p.jsxs)(A.A,{responsive:!0,bordered:!0,className:"custom-error-table",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Row Number"}),(0,p.jsx)("th",{children:"Column Name"}),(0,p.jsx)("th",{children:"Error Description"})]})}),(0,p.jsx)("tbody",{children:Array.from(o.entries()).length>0?Array.from(o.entries()).map((e=>{let[t,o]=e;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"row-number",children:t}),(0,p.jsx)("td",{children:(0,p.jsx)("ul",{children:o.map(((e,t)=>{let{columnName:o}=e;return(0,p.jsx)("li",{className:o?"column-name":"no-column-style",children:o||"N/A"},t)}))})}),(0,p.jsx)("td",{className:"error-description",children:(0,p.jsx)("ul",{children:o.map(((e,t)=>{let{errorMsg:o}=e;return(0,p.jsx)("li",{children:o},t)}))})})]},t)})):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:3,className:"text-center no-errors",children:"No Errors Found"})})})]})})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return(0,p.jsx)(j.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,p.jsx)(S,{errors:a})})},D=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,p.jsx)(j.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,p.jsx)("p",{children:"Are you sure you want to submit?"})})};var T=o(9379);const k=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:a,handleSelectChange:r,selectedAttributes:s,mappedAttributes:l,mandatoryAttributes:n}=e;const{allNLSValues:i=[],dropdownOptions:c=[]}=l||{};console.log("Mapped Attributes prop:",l),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",n),console.log("Dropdown Options :",c);return(0,p.jsxs)(A.A,{bordered:!0,className:"table-light ",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{className:"header-styling",children:" Column Name"}),(0,p.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,p.jsx)("tbody",{children:t.map(((e,t)=>{const o=n.includes(e),a=(e=>{if(!Array.isArray(i))return console.warn("allNLSValues is not an array:",i),!1;const t=i.includes(e);return console.log('Header "'.concat(e,'" NLS match:'),t?"\u2705":"\u274c"),t})(e);return console.log("Row ".concat(t,":"),{header:e,hasNLS:a,isMandatory:o,defaultLabel:a?e:""}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e}),(0,p.jsx)("td",{children:(0,p.jsx)(f,{index:t,selectedValue:s[t]||e,onChange:r,size:"lg",className:"w-100",disabled:!a,options:{defaultLabel:a?e:"Please select from Drop Down",list:c.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})};var E=o(2268),F=o(6047);const R=()=>{const{showErrorToast:e}=(0,h.A)(),[t,o]=(0,a.useState)([]),r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,a.useEffect)((()=>{(async()=>{try{var t,a,s,l,n,i,c,d;console.log("Fetching column mapping...");const u=await(0,E.I)();if(!u)return void e(g.rK);const h=await(0,F.ui)("GET","".concat(r,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!h||!h.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",h.output.member);const p=null===(t=h.output)||void 0===t||null===(a=t.member)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.id;if(!p)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",p);const m=await(0,F.ui)("POST","".concat(r,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[p]},u);if(!m||!m.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",m.output);const b=(null===(l=m.output.results)||void 0===l||null===(n=l[0])||void 0===n?void 0:n.groupData)||[];console.log("Full Group Data (with all NLS values):",b.map((e=>e.nls)));const v=b.map((e=>e.nls)),x=((null===(i=m.output.results)||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.groupData)||void 0===d?void 0:d.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",x),console.log("All available NLS values:",v),console.log("Mapped Attributes (for dropdown):",x),o({allNLSValues:b.map((e=>e.nls)),dropdownOptions:x})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}},O=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:r}=R(),[s,l]=(0,a.useState)({}),[n,i]=(0,a.useState)({}),[c,d]=(0,a.useState)({allNLSValues:[],dropdownOptions:[]});(0,a.useEffect)((()=>{Array.isArray(r)&&(console.log("Filtered mapped attributes:",r),d({allNLSValues:r.map((e=>e.uiLabel)),dropdownOptions:r}))}),[r]);return(0,p.jsx)(k,{columnHeaders:t,handleCheckboxChange:e=>{l((0,T.A)((0,T.A)({},s),{},{[e]:!s[e]}))},checkedItems:s,handleSelectChange:(e,t)=>{i((0,T.A)((0,T.A)({},n),{},{[e]:t}))},selectedAttributes:n,mappedAttributes:r,mandatoryAttributes:o})},H=e=>{let{show:t,onHide:o,columnHeaders:a,mandatoryAttributes:r}=e;const s=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,p.jsxs)(j.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:o},{label:"Cancel",variant:"danger",onClick:o}],children:[(0,p.jsx)(N,{variant:"info",message:s,className:"mapped-popup-alert"}),(0,p.jsx)(O,{columnHeaders:a,mandatoryAttributes:r})]})},M=()=>{const[e,t]=(0,a.useState)([]),[o,r]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[n,u]=(0,a.useState)(!1),[v,x]=(0,a.useState)(!1),{showErrorToast:j,showSuccessToast:A}=(0,h.A)(),[C,N]=(0,a.useState)(!1),[S,T]=(0,a.useState)(""),[k,E]=(0,a.useState)([]),[F,R]=(0,a.useState)([]),[O,M]=(0,a.useState)([]);p.Fragment;(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",w.oX),Array.isArray(w.oX)?t([...w.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",w.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const I=()=>{r(!1),l(!1),u(!1),x(!1),N(!1),T(""),E([]),R([]),M([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),A("Widget reset successfully!")};a.useEffect((()=>{console.log("Operation Choice updated:",S)}),[S]);const L=0===F.length||k.length>0,q=0===F.length;console.log("Operation Choice:",k);const z=!S;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,p.jsxs)(i.A,{direction:"horizontal",children:[(0,p.jsx)(f,{selectedValue:S,onChange:e=>{console.log("Operation selected:",e),T(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,p.jsx)("div",{className:"p-2 ms-auto",children:"3"===S&&(0,p.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,p.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,p.jsx)("div",{className:"p-2",children:(0,p.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(j)(S)},text:"Download Template"})})]}),(0,p.jsx)("div",{className:z?"opacity-50":"",children:(0,p.jsx)(m,{fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{N(!0),console.log("Starting file validation...");const o=await y(t[0],e,S);console.log("Validation Result:",o);const{headers:a=[],validationErrors:r=[],mandatoryAttributes:s=[]}=o;console.log("Extracted data:",{headers:a,validationErrors:r,mandatoryAttributes:s}),R(a),M(s),0===r.length?(E([]),A("No Error! File validated successfully!")):(E(r),l(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:r=!1}=o;if(r)return j("The template uploaded and the selected operation do not match"),void I();E(e),R(t),M(a),l(!0)}finally{N(!1)}},onReset:I,disabled:z,message:z?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),C&&(0,p.jsx)(b.A,{}),(0,p.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,p.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,p.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[k.length>0&&(0,p.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(k.length,")")}),(0,p.jsx)(d.A,{variant:q?"secondary":"info",onClick:()=>{u(!1),x(!0)},text:"Manage Spreadsheet Columns",disabled:q}),(0,p.jsx)(d.A,{variant:L?"secondary":"primary",disabled:L,size:"lg",onClick:()=>r(!0),text:"Submit"})]})]})]}),(0,p.jsx)(P,{show:n,onHide:()=>u(!1),errors:k}),(0,p.jsx)(D,{show:o,onHide:()=>r(!1),onConfirm:()=>{alert("Confirmed!"),r(!1)}}),(0,p.jsx)(H,{show:v,onHide:()=>x(!1),columnHeaders:F,mandatoryAttributes:O})]})};let I=null;function L(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),I||(I=r.createRoot(o)),I.render((0,p.jsxs)(s.Kq,{store:l.A,children:[(0,p.jsx)(M,{}),(0,p.jsx)(n.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>r});var a=o(6047);const r=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",r=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),s=r.csrf.name,l=r.csrf.value,n="SecurityContext",i=e;return{[s]:l,[n]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=903.3fd05c6a.chunk.js.map