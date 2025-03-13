"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[903],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),r=(o(5043),o(4282)),l=o(579);const n=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:h,text:m,imageSrc:p}=e,g=(0,s.A)(e,n);return(0,l.jsxs)(r.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:h},g),{},{children:[p&&(0,l.jsx)("img",{src:p,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(4104),s=o(4282),r=o(579);const l=e=>{let{show:t,onHide:o,title:l,children:n,footerButtons:i}=e;return(0,r.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(a.A.Header,{closeButton:!0,children:(0,r.jsx)(a.A.Title,{children:l||"Modal Title"})}),(0,r.jsx)(a.A.Body,{children:n}),(0,r.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(9379),s=o(45),r=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],n=()=>{const e=e=>{let{message:t,type:o="default",position:n="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:m=!0,theme:p="light",transition:g=r.br}=e,v=(0,s.A)(e,l);(r.oR[o]||r.oR)(t,(0,a.A)({position:n,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:p,transition:g},v))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},4903:(e,t,o)=>{o.r(t),o.d(t,{default:()=>q});var a=o(5043),s=o(4391),r=(o(2342),o(9555),o(3003)),l=o(2670),n=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(2725),m=o(579);const p=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:r,onReset:l,disabled:n=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:p}=(0,h.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),r&&r([]),l&&l(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(n?"disabled":""),children:[(0,m.jsx)("h2",{children:n?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),r&&r(t)},name:"file",types:o,disabled:n,hoverTitle:n?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:n?"not-allowed":"pointer",color:"red",opacity:n?.5:1},disabled:n,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var g=o(3277);var v=o(6713),b=o(1238);const y=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),x=(e,t,o)=>new Promise(((a,s)=>{var r;console.log("Starting file validation for:",e.name,o),console.log("Selected Operation:",o),console.log("File Name:",e.name),console.log("[validateFile.js] Required Collaborative Space:",t);const l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o];console.log("Matched Operation:",l);const n=(null===(r=y.o[l])||void 0===r?void 0:r.mandatoryAttributes)||[];if(console.log("Mandatory Attributes:",n),!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("[validateFile.js] \u274c collabSpaceTitles is not an array!",t),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});console.log("[validateFile.js] Required Collaborative Spaces:",t);const i=new FileReader;i.readAsBinaryString(e),i.onload=async e=>{console.log("File successfully read. Parsing...");const o=b.LF(e.target.result,{type:"binary"}),r=o.SheetNames[0];console.log("Detected sheet name:",r);const i=o.Sheets[r],c=b.Wp.sheet_to_json(i,{header:1})[0]||[];if(console.log("Extracted headers:",c),!c||0===c.length)return console.error("\u274c No headers found in the file."),void s({errors:["The uploaded file has no content or is empty."],headers:[]});const d=b.Wp.sheet_to_json(i,{defval:""});console.log("Total rows in sheet: ".concat(d.length));const u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(d,1e3);console.log("Split data into ".concat(u.length," chunks of 1000 rows each"));const h=[],m=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];for(let a=0;a<u.length;a++){const e=u[a];console.log("Processing chunk ".concat(a+1," of ").concat(u.length," (").concat(e.length," rows)")),e.forEach(((e,o)=>{const s=1e3*a+o;if(n.forEach((t=>{e[t]&&""!==e[t].toString().trim()||h.push("Row ".concat(s+2,': "').concat(t,'" is required but is empty'))})),"Physical Product"===l||"Document"===l){const o=e["Collaborative Space"]?e["Collaborative Space"].trim():"";console.log("[validateFile.js] Row ".concat(s+2,": User's Collaborative Space:"),o),o?t.includes(o)||h.push("Row ".concat(s+2,': You are not allowed to create in "Collaborative Space -" (').concat(o,")")):h.push("Row ".concat(s+2,': "Collaborative Space" is Missing or Empty'))}let r=null,i="";if("Physical Product"===l||"Physical Product Structure"===l?(i="EIN Number",r=e[i]?e[i].toString().trim():null,console.log("[validateFile.js] Row ".concat(s+2,": Checking EIN Number:"),r)):"Physical Product-Document"!==l&&"Document"!==l||(i="Document Name",r=e[i]?e[i].toString().trim():null,console.log("[validateFile.js] Row ".concat(s+2,": Checking Document Name:"),r)),r){m.some((e=>r.startsWith(e)))&&(console.error("[validateFile.js] \u274c Invalid prefix found in ".concat(r)),h.push("Row ".concat(s+2,': "').concat(i,'" value "').concat(r,'" has an invalid prefix. Not allowed prefixes: ').concat(m.join(", "))))}else console.warn("[validateFile.js] \ud83d\udea8 Row ".concat(s+2,": ").concat(i," is missing."))})),console.log("Completed chunk ".concat(a+1," validation"))}if(h.length>0)return console.log("Found ".concat(h.length," validation errors across all chunks")),void s({errors:h,headers:c,mandatoryAttributes:n});console.log("\u2705 File validation successful. No errors found in any chunk."),a({headers:c,sheetData:d,validationErrors:[],mandatoryAttributes:n})},i.onerror=()=>{console.error("\u274c Error reading the file."),s({errors:["File reading failed."],headers:[]})}})),f=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:r,className:l}=e;return(0,m.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:r,className:l,children:[(0,m.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]})};var w=o(314),A=o(6313),j=o(5664),C=o(4005);const N=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,m.jsx)(C.A,{variant:t,className:s,children:o}):null},S=e=>{let{errors:t}=e;const o=(0,a.useMemo)((()=>t.map((e=>{const t=e.match(/Row (\d+):/),o=e.match(/"([^"]*)" (?:is required|value)/);return{rowNumber:t?t[1]:"N/A",columnName:o?o[1]:e.includes("Collaborative Space")?"Collaborative Space":"N/A",errorDescription:t?e.split(": ")[1]:e}}))),[t]),s=e=>{let{cellData:t,columnIndex:o}=e;return(0,m.jsx)("div",{className:"custom-cell-content",children:t})},r=e=>{let{label:t}=e;return(0,m.jsx)("div",{className:"custom-header-content",children:t})};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(N,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(j.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsxs)(j.XI,{width:a,height:t,headerHeight:40,rowHeight:50,rowCount:o.length,rowGetter:e=>{let{index:t}=e;return o[t]},headerClassName:"custom-header",rowClassName:e=>{let{index:t}=e;return t%2===0?"custom-row-even":"custom-row-odd"},children:[(0,m.jsx)(j.VP,{label:"Row Number",dataKey:"rowNumber",width:.15*a,className:"custom-cell",headerRenderer:r,cellRenderer:s}),(0,m.jsx)(j.VP,{label:"Column Name",dataKey:"columnName",width:.25*a,className:"custom-cell",headerRenderer:r,cellRenderer:s}),(0,m.jsx)(j.VP,{label:"Error Description",dataKey:"errorDescription",width:.6*a,className:"custom-cell",headerRenderer:r,cellRenderer:s})]})}})})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return(0,m.jsx)(A.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(S,{errors:a})})},D=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(A.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var k=o(9379),R=o(4196);const F=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:a,handleSelectChange:s,selectedAttributes:r,mappedAttributes:l,mandatoryAttributes:n}=e;const{allNLSValues:i=[],dropdownOptions:c=[]}=l||{};console.log("Mapped Attributes prop:",l),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",n),console.log("Dropdown Options :",c);return(0,m.jsxs)(R.A,{bordered:!0,className:"table-light ",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:" Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const o=n.includes(e),a=(e=>{if(!Array.isArray(i))return console.warn("allNLSValues is not an array:",i),!1;const t=i.includes(e);return console.log('Header "'.concat(e,'" NLS match:'),t?"\u2705":"\u274c"),t})(e);return console.log("Row ".concat(t,":"),{header:e,hasNLS:a,isMandatory:o,defaultLabel:a?e:""}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e}),(0,m.jsx)("td",{children:(0,m.jsx)(f,{index:t,selectedValue:r[t]||e,onChange:s,size:"lg",className:"w-100",disabled:!a,options:{defaultLabel:a?e:"Please select from Drop Down",list:c.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})};var T=o(2268),E=o(6047);const I=()=>{const{showErrorToast:e}=(0,h.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,a.useEffect)((()=>{(async()=>{try{var t,a,r,l,n,i,c,d;console.log("Fetching column mapping...");const u=await(0,T.I)();if(!u)return void e(g.rK);const h=await(0,E.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!h||!h.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",h.output.member);const m=null===(t=h.output)||void 0===t||null===(a=t.member)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id;if(!m)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",m);const p=await(0,E.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[m]},u);if(!p||!p.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",p.output);const v=(null===(l=p.output.results)||void 0===l||null===(n=l[0])||void 0===n?void 0:n.groupData)||[];console.log("Full Group Data (with all NLS values):",v.map((e=>e.nls)));const b=v.map((e=>e.nls)),y=((null===(i=p.output.results)||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.groupData)||void 0===d?void 0:d.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",y),console.log("All available NLS values:",b),console.log("Mapped Attributes (for dropdown):",y),o({allNLSValues:v.map((e=>e.nls)),dropdownOptions:y})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}},O=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:s}=I(),[r,l]=(0,a.useState)({}),[n,i]=(0,a.useState)({}),[c,d]=(0,a.useState)({allNLSValues:[],dropdownOptions:[]});(0,a.useEffect)((()=>{Array.isArray(s)&&(console.log("Filtered mapped attributes:",s),d({allNLSValues:s.map((e=>e.uiLabel)),dropdownOptions:s}))}),[s]);return(0,m.jsx)(F,{columnHeaders:t,handleCheckboxChange:e=>{l((0,k.A)((0,k.A)({},r),{},{[e]:!r[e]}))},checkedItems:r,handleSelectChange:(e,t)=>{i((0,k.A)((0,k.A)({},n),{},{[e]:t}))},selectedAttributes:n,mappedAttributes:s,mandatoryAttributes:o})},H=e=>{let{show:t,onHide:o,columnHeaders:a,mandatoryAttributes:s}=e;const r=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(A.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:o},{label:"Cancel",variant:"danger",onClick:o}],children:[(0,m.jsx)(N,{variant:"info",message:r,className:"mapped-popup-alert"}),(0,m.jsx)(O,{columnHeaders:a,mandatoryAttributes:s})]})},M=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!1),[n,u]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1),{showErrorToast:A,showSuccessToast:j}=(0,h.A)(),[C,N]=(0,a.useState)(!1),[S,k]=(0,a.useState)(""),[R,F]=(0,a.useState)([]),[T,E]=(0,a.useState)([]),[I,O]=(0,a.useState)([]),M=(0,a.useRef)();m.Fragment;(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",w.oX),Array.isArray(w.oX)?t([...w.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",w.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const L=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),l(!1),u(!1),y(!1),N(!1),k(""),F([]),E([]),O([]);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||j("Widget reset successfully!")};(0,a.useEffect)((()=>{console.log("Operation Choice updated:",S)}),[S]);const q=0===T.length||R.length>0,z=0===T.length;console.log("Operation Choice:",R);const V=!S;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(i.A,{direction:"horizontal",children:[(0,m.jsx)(f,{selectedValue:S,onChange:e=>{console.log("Operation selected:",e),k(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"p-2 ms-auto",children:"3"===S&&(0,m.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,m.jsx)("div",{className:"p-2",children:(0,m.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(A)(S)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:V?"opacity-50":"",children:(0,m.jsx)(p,{ref:M,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{N(!0),console.log("Starting file validation...");const o=await x(t[0],e,S);console.log("Validation Result:",o);const{headers:a=[],validationErrors:s=[],mandatoryAttributes:r=[]}=o;console.log("Extracted data:",{headers:a,validationErrors:s,mandatoryAttributes:r}),E(a),O(r),0===s.length?(F([]),j("No Error! File validated successfully!")):(F(s),l(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return A("The template uploaded and the selected operation do not match"),L(!0),void(M.current&&M.current.handleClearFiles());F(e),E(t),O(a),l(!0)}finally{N(!1)}},onReset:L,disabled:V,message:V?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),C&&(0,m.jsx)(v.A,{}),(0,m.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,m.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[R.length>0&&(0,m.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(R.length,")")}),(0,m.jsx)(d.A,{variant:z?"secondary":"info",onClick:()=>{u(!1),y(!0)},text:"Manage Spreadsheet Columns",disabled:z}),(0,m.jsx)(d.A,{variant:q?"secondary":"primary",disabled:q,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,m.jsx)(P,{show:n,onHide:()=>u(!1),errors:R}),(0,m.jsx)(D,{show:o,onHide:()=>s(!1),onConfirm:()=>{alert("Confirmed!"),s(!1)}}),(0,m.jsx)(H,{show:b,onHide:()=>y(!1),columnHeaders:T,mandatoryAttributes:I})]})};let L=null;function q(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),L||(L=s.createRoot(o)),L.render((0,m.jsxs)(r.Kq,{store:l.A,children:[(0,m.jsx)(M,{}),(0,m.jsx)(n.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),r=s.csrf.name,l=s.csrf.value,n="SecurityContext",i=e;return{[r]:l,[n]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=903.549e2453.chunk.js.map