"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[903],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),r=o(45),s=(o(5043),o(4282)),n=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,r.A)(e,l);return(0,n.jsxs)(s.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,n.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>r});o(5043);var a=o(579);const r=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(9566),r=o(4282),s=o(579);const n=e=>{let{show:t,onHide:o,title:n,children:l,footerButtons:i}=e;return(0,s.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,s.jsx)(a.A.Header,{closeButton:!0,children:(0,s.jsx)(a.A.Title,{children:n||"Modal Title"})}),(0,s.jsx)(a.A.Body,{children:l}),(0,s.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,s.jsx)(r.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,s.jsx)(r.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),r=o(45),s=o(2115);const n=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=s.br}=e,b=(0,r.A)(e,n);(s.oR[o]||s.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},4903:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var a=o(5043),r=o(4391),s=(o(2342),o(9555),o(3003)),n=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:r,onReset:s}=e;const[n,l]=(0,a.useState)([]),i=()=>{l([]),r&&r([]),s&&s()};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];l(t),r&&r(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:n.length>0?n.map(((e,t)=>(0,h.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",color:"red"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=o(3277);var g=o(2725),b=o(6713),v=o(1238);const x=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),y=(e,t)=>new Promise(((o,a)=>{if(console.log("Starting file validation for:",e.name),console.log("[validateFile.js] Required Collaborative Space:",t),!Array.isArray(t))return console.error("[validateFile.js] \u274c collabSpaceTitles is not an array!",t),void a({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});console.log("[validateFile.js] Required Collaborative Spaces:",t);const r=new FileReader;r.readAsBinaryString(e),r.onload=e=>{console.log("File successfully read. Parsing...");const r=v.LF(e.target.result,{type:"binary"}),s=r.SheetNames[0];console.log("Detected sheet name:",s);const n=r.Sheets[s],l=v.Wp.sheet_to_json(n,{header:1})[0]||[];if(console.log("Extracted headers:",l),!l||0===l.length)return console.error("\u274c No headers found in the file."),void a({errors:["The uploaded file has no content or is empty."],headers:[]});const i=v.Wp.sheet_to_json(n,{defval:""});if(console.log("Extracted sheet data:",i),0===i.length)return console.error("\u274c No row data found. Only headers exist."),void a({errors:["The uploaded file contains only headers but no data. Please add at least one row."],headers:l});const c=Object.keys(i[0]);console.log("Parsed file headers:",c);let d=null;for(const[t,o]of Object.entries(x.o))if(o.fileHeaders.every((e=>c.includes(e)))){d=t,console.log("Matched operation:",d);break}if(!d)return console.error("\u274c No matching operation found for given headers."),void a({errors:["File headers do not match any expected template."],headers:l});const u=x.o[d].fileHeaders;console.log("Expected Headers:",u);const h=x.o[d].mandatoryAttributes;console.log("Mandatory Attributes:",h);const p=u.filter((e=>!c.includes(e)));if(p.length>0)return console.error("\u274c Missing headers:",p),void a({errors:["Missing required headers: ".concat(p.join(", "))],headers:l,mandatoryAttributes:h});const m=[];if(i.forEach(((e,o)=>{h.forEach((t=>{e[t]&&""!==e[t].toString().trim()||m.push("Row ".concat(o+2,': "').concat(t,'" is required but is empty'))}));const a=e["Collaborative Space"]?e["Collaborative Space"].trim():"";console.log("[validateFile.js] Row ".concat(o+2,": User's Collaborative Space:"),a),a?t.includes(a)||m.push("Row ".concat(o+2,': "Collaborative Space" (').concat(a,") is invalid as Per Security Preferences the user is not allowed to create a Collaborative Space with this name.")):m.push("Row ".concat(o+2,': "Collaborative Space"  Does not match with Security Preferences.'))})),m.length>0)return console.log("Validation errors with mandatory attributes:",{errors:m,headers:l,mandatoryAttributes:h}),void a({errors:m,headers:l,mandatoryAttributes:h});console.log("\u2705 File validation successful. No errors found."),o({headers:l,sheetData:i,validationErrors:[],mandatoryAttributes:h})},r.onerror=()=>{console.error("\u274c Error reading the file."),a({errors:["File reading failed."],headers:[]})}})),f=e=>{let{index:t,selectedValue:o,options:a,onChange:r,size:s,className:n}=e;return(0,h.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?r(t,e.target.value):r(e.target.value)},size:s,className:n,children:[(0,h.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,h.jsx)("option",{value:e.value,children:e.label},t)))]})};var j=o(314),w=o(6313),A=o(4196),C=o(6509);const S=e=>{let{variant:t="info",message:o,show:a=!0,className:r=""}=e;return a?(0,h.jsx)(C.A,{variant:t,className:r,children:o}):null},N=e=>{let{errors:t}=e;console.log("Errors in ErrorPopup:",t);const o=new Map;t.forEach((e=>{const t=e.match(/Row (\d+):/),a=e.match(/"([^"]*)" is required/),r=t?t[1]:"-",s=a?a[1]:e.includes("Collaborative Space")?"Collaborative Space":"-",n=t?e.split(": ")[1]:e;o.has(r)||o.set(r,[]),o.get(r).push({errorMsg:n,columnName:s})}));const a=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import."]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(S,{variant:"danger",message:a,className:"custom-alert"}),(0,h.jsx)("div",{className:"error-table-container",children:(0,h.jsxs)(A.A,{responsive:!0,bordered:!0,className:"custom-error-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Row Number"}),(0,h.jsx)("th",{children:"Error Description"}),(0,h.jsx)("th",{children:"Column Name"})]})}),(0,h.jsx)("tbody",{children:Array.from(o.entries()).length>0?Array.from(o.entries()).map((e=>{let[t,o]=e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"row-number",children:t}),(0,h.jsx)("td",{className:"error-description",children:(0,h.jsx)("ul",{children:o.map(((e,t)=>{let{errorMsg:o}=e;return(0,h.jsx)("li",{children:o},t)}))})}),(0,h.jsx)("td",{className:"column-name",children:o.map((e=>{let{columnName:t}=e;return t})).join(", ")})]},t)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:3,className:"text-center no-errors",children:"No Errors Found"})})})]})})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return(0,h.jsx)(w.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,h.jsx)(N,{errors:a})})},k=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,h.jsx)(w.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,h.jsx)("p",{children:"Are you sure you want to submit?"})})};var E=o(9379);const D=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:a,handleSelectChange:r,selectedAttributes:s,mappedAttributes:n,mandatoryAttributes:l}=e;const{allNLSValues:i=[],dropdownOptions:c=[]}=n||{};console.log("Mapped Attributes prop:",n),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",l),console.log("Dropdown Options :",c);return(0,h.jsxs)(A.A,{bordered:!0,className:"table-light ",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"header-styling",children:" Column Name"}),(0,h.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,h.jsx)("tbody",{children:t.map(((e,t)=>{const o=l.includes(e),a=(e=>{if(!Array.isArray(i))return console.warn("allNLSValues is not an array:",i),!1;const t=i.includes(e);return console.log('Header "'.concat(e,'" NLS match:'),t?"\u2705":"\u274c"),t})(e);return console.log("Row ".concat(t,":"),{header:e,hasNLS:a,isMandatory:o,defaultLabel:a?e:""}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:(0,h.jsx)(f,{index:t,selectedValue:s[t]||e,onChange:r,size:"lg",className:"w-100",disabled:!a,options:{defaultLabel:a?e:"Please select from Drop Down",list:c.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})};var T=o(2268),F=o(6047);const R=()=>{const{showErrorToast:e}=(0,g.A)(),[t,o]=(0,a.useState)([]),r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,a.useEffect)((()=>{(async()=>{try{var t,a,s,n,l,i,c,d;console.log("Fetching column mapping...");const u=await(0,T.I)();if(!u)return void e(m.rK);const h=await(0,F.ui)("GET","".concat(r,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!h||!h.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",h.output.member);const p=null===(t=h.output)||void 0===t||null===(a=t.member)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.id;if(!p)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",p);const g=await(0,F.ui)("POST","".concat(r,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[p]},u);if(!g||!g.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",g.output);const b=(null===(n=g.output.results)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.groupData)||[];console.log("Full Group Data (with all NLS values):",b.map((e=>e.nls)));const v=b.map((e=>e.nls)),x=((null===(i=g.output.results)||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.groupData)||void 0===d?void 0:d.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",x),console.log("All available NLS values:",v),console.log("Mapped Attributes (for dropdown):",x),o({allNLSValues:b.map((e=>e.nls)),dropdownOptions:x})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}},O=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:r}=R(),[s,n]=(0,a.useState)({}),[l,i]=(0,a.useState)({}),[c,d]=(0,a.useState)({allNLSValues:[],dropdownOptions:[]});(0,a.useEffect)((()=>{Array.isArray(r)&&(console.log("Filtered mapped attributes:",r),d({allNLSValues:r.map((e=>e.uiLabel)),dropdownOptions:r}))}),[r]);return(0,h.jsx)(D,{columnHeaders:t,handleCheckboxChange:e=>{n((0,E.A)((0,E.A)({},s),{},{[e]:!s[e]}))},checkedItems:s,handleSelectChange:(e,t)=>{i((0,E.A)((0,E.A)({},l),{},{[e]:t}))},selectedAttributes:l,mappedAttributes:r,mandatoryAttributes:o})},H=e=>{let{show:t,onHide:o,columnHeaders:a,mandatoryAttributes:r}=e;const s=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,h.jsxs)(w.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:o},{label:"Cancel",variant:"danger",onClick:o}],children:[(0,h.jsx)(S,{variant:"info",message:s,className:"mapped-popup-alert"}),(0,h.jsx)(O,{columnHeaders:a,mandatoryAttributes:r})]})},I=()=>{const[e,t]=(0,a.useState)([]),[o,r]=(0,a.useState)(!1),[s,n]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1),[v,x]=(0,a.useState)(!1),{showErrorToast:w,showSuccessToast:A}=(0,g.A)(),[C,S]=(0,a.useState)(!1),[N,E]=(0,a.useState)(""),[D,T]=(0,a.useState)([]),[F,R]=(0,a.useState)([]),[O,I]=(0,a.useState)([]);h.Fragment;(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",j.oX),Array.isArray(j.oX)?t([...j.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",j.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);a.useEffect((()=>{console.log("Operation Choice updated:",N)}),[N]);const L=0===F.length||D.length>0,M=0===F.length;return console.log("Operation Choice:",D),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(i.A,{direction:"horizontal",children:[(0,h.jsx)(f,{selectedValue:N,onChange:e=>{console.log("Operation selected:",e),E(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),"\xa0",(0,h.jsx)("div",{className:"p-2 ms-auto",children:"3"===N&&(0,h.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,h.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,h.jsx)("div",{className:"p-2",children:(0,h.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(m._2)}window.open(o,"_blank")})(w)(N)},text:"Download Template"})})]}),(0,h.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{S(!0),console.log("Starting file validation...");const o=await y(t[0],e);console.log("Validation Result:",o);const{headers:a=[],validationErrors:r=[],mandatoryAttributes:s=[]}=o;console.log("Extracted data:",{headers:a,validationErrors:r,mandatoryAttributes:s}),R(a),I(s),0===r.length?(T([]),A("No Error! File validated successfully!")):(T(r),n(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[]}=o;T(e),R(t),I(a),n(!0)}finally{S(!1)}},onReset:()=>{r(!1),n(!1),u(!1),x(!1),S(!1),E(""),T([]),R([]),I([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),A("Widget reset successfully!")}}),C&&(0,h.jsx)(b.A,{}),(0,h.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,h.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,h.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[D.length>0&&(0,h.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(D.length,")")}),(0,h.jsx)(d.A,{variant:"info",onClick:()=>{u(!1),x(!0)},text:"Manage Spreadsheet Columns",disabled:M}),(0,h.jsx)(d.A,{variant:"primary",disabled:L,size:"lg",onClick:()=>r(!0),text:"Submit"})]})]})]}),(0,h.jsx)(P,{show:l,onHide:()=>u(!1),errors:D}),(0,h.jsx)(k,{show:o,onHide:()=>r(!1),onConfirm:()=>{alert("Confirmed!"),r(!1)}}),(0,h.jsx)(H,{show:v,onHide:()=>x(!1),columnHeaders:F,mandatoryAttributes:O})]})};let L=null;function M(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),L||(L=r.createRoot(o)),L.render((0,h.jsxs)(s.Kq,{store:n.A,children:[(0,h.jsx)(I,{}),(0,h.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>r});var a=o(6047);const r=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",r=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),s=r.csrf.name,n=r.csrf.value,l="SecurityContext",i=e;return{[s]:n,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=903.ea2adf3d.chunk.js.map