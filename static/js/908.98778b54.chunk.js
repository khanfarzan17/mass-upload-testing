"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[908],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),r=(o(5043),o(4282)),n=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:m,imageSrc:h}=e,g=(0,s.A)(e,l);return(0,n.jsxs)(r.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:p},g),{},{children:[h&&(0,n.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(4104),s=o(4282),r=o(579);const n=e=>{let{show:t,onHide:o,title:n,children:l,footerButtons:i}=e;return(0,r.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(a.A.Header,{closeButton:!0,children:(0,r.jsx)(a.A.Title,{children:n||"Modal Title"})}),(0,r.jsx)(a.A.Body,{children:l}),(0,r.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),s=o(45),r=o(2115);const n=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:h="light",transition:g=r.br}=e,b=(0,s.A)(e,n);(r.oR[o]||r.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:h,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},9908:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var a=o(5043),s=o(4391),r=(o(2342),o(9555),o(3003)),n=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),p=o(2725),m=o(579);const h=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:r,onReset:n,disabled:l=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:h}=(0,p.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),r&&r([]),n&&n(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(l?"disabled":""),children:[(0,m.jsx)("h2",{children:l?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),r&&r(t)},name:"file",types:o,disabled:l,hoverTitle:l?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:l?"not-allowed":"pointer",color:"red",opacity:l?.5:1},disabled:l,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var g=o(3277);var b=o(6713),y=o(1238);const f=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),v=(e,t,o)=>new Promise(((a,s)=>{var r,n;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(r=f.o[l])||void 0===r?void 0:r.fileHeaders)||[],c=(null===(n=f.o[l])||void 0===n?void 0:n.mandatoryAttributes)||[];if(!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=y.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),r=o.SheetNames[0],n=o.Sheets[r],d=y.Wp.sheet_to_json(n,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void s({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=y.Wp.sheet_to_json(n,{header:1})[0]||[];if(!u||0===u.length)return void s({errors:["The uploaded file has no content or is empty."],headers:[]});const p=y.Wp.sheet_to_json(n,{defval:""});if(0===p.length)return void s({errors:["The uploaded file contains headers but no data rows."],headers:u});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),h=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let b={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};for(let a=0;a<m.length;a++){const e=m[a],o=Math.round((a+1)/m.length*100);e.forEach(((e,o)=>{const s=1e3*a+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(b.mandatory++,h.push("Row ".concat(s+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===l||"Document"===l){var r;const o=(null===(r=e["Collaborative Space"])||void 0===r?void 0:r.trim())||"";o&&t.includes(o)||(b.collabSpace++,h.push("Row ".concat(s+2,': "').concat(o?'You are not allowed to create in "Collaborative Space -" ('.concat(o,")"):'Collaborative Space" is Missing or Empty')))}let n=null,i="";var d;if("Physical Product"===l||"Physical Product Structure"===l)i="EIN Number",n=(null===(d=e[i])||void 0===d?void 0:d.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.einPrefix++,h.push("Row ".concat(s+2,': "EIN Number" value "').concat(n,'" has an invalid prefix.')));else if("Physical Product-Document"===l||"Document"===l){var u;i="Document Name",n=(null===(u=e[i])||void 0===u?void 0:u.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.docPrefix++,h.push("Row ".concat(s+2,': "Document Name" value "').concat(n,'" has an invalid prefix.')))}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(a+1),totalRows:p.length,currentErrors:{mandatory:b.mandatory,collaborativeSpace:b.collabSpace,einPrefix:b.einPrefix,documentPrefix:b.docPrefix,total:h.length}})}if(h.length>0)return console.log("\u274c Validation completed with errors:",{total:h.length,byType:b}),void s({errors:h,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:p,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error("\u274c Error reading file"),s({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}})),w=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:r,className:n}=e;return(0,m.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:r,className:n,children:[(0,m.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]})};var N=o(314),A=o(6313),x=o(7348),S=o(4005);const C=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,m.jsx)(S.A,{variant:t,className:s,children:o}):null},j=e=>{let{errors:t}=e;console.log("[ErrorPopup.jsx] errors:",t);const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),s=t.split(": ").slice(1).join(": "),r=o?o[1]:"N/A",n=a?a[1]:t.includes("Collaborative Space")?"Collaborative Space":"N/A";return e[r]||(e[r]={rowNumber:r,columns:[],errors:[]}),e[r].columns.push(n),e[r].errors.push(s||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),s=new x.jS({fixedWidth:!0,defaultHeight:50}),r=e=>{let{key:t,index:a,style:r,parent:n}=e;const l=o[a];return(0,m.jsx)(x.dl,{cache:s,columnIndex:0,rowIndex:a,parent:n,children:(0,m.jsxs)("div",{style:r,className:"table-row",children:[(0,m.jsx)("div",{className:"table-cell",style:{width:"15%"},children:l.rowNumber}),(0,m.jsx)("div",{className:"table-cell",style:{width:"25%"},children:l.columns.map(((e,t)=>(0,m.jsx)("div",{children:e},t)))}),(0,m.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,m.jsx)("ul",{className:"error-list",children:l.errors.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})})]})},t)};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(C,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsxs)("div",{className:"table-wrapper",children:[(0,m.jsxs)("div",{className:"static-header",children:[(0,m.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(x.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsx)(x.B8,{width:a,height:t,rowCount:o.length,rowHeight:s.rowHeight,deferredMeasurementCache:s,rowRenderer:r})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,m.jsx)(A.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(j,{errors:a})})},D=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(A.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var E=o(9379),M=o(4196);const k=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,m.jsxs)(M.A,{bordered:!0,className:"table-light",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const{header:s,hasNLS:r,currentMapping:n,defaultLabel:l}=e;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:s}),(0,m.jsx)("td",{children:(0,m.jsx)(w,{index:t,selectedValue:(null===n||void 0===n?void 0:n.uiLabel)||s,onChange:(e,t)=>{o(s,t)},size:"lg",className:"w-100",disabled:!r,options:{defaultLabel:l,list:a}})})]},t)}))})]})};var L=o(2268),T=o(6047);const R=()=>{const{showErrorToast:e}=(0,p.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",r=async()=>{try{var t,a,r,n,l;console.log("Fetching column mapping...");const i=await(0,L.I)();if(!i)return void e(g.rK);const c=await(0,T.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",i);if(!c||!c.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",c.output.member);const d=null===(t=c.output)||void 0===t||null===(a=t.member)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id;if(!d)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",d);const u=await(0,T.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[d]},i);if(!u||!u.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",u.output);const p=(null===(n=u.output.results)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.groupData)||[];console.log("Full Group Data (with all NLS values):",p.map((e=>e.nls)));const m=[{name:"description",nls:"Description",groupNLS:"System Attributes"},{name:"Part Number",nls:"EIN Number",groupNLS:"System Attributes"},{name:"type",nls:"Type",groupNLS:"System Attributes"},{name:"title",nls:"Title",groupNLS:"System Attributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"System Attributes"}],h=p.map((e=>e.groupNLS));console.log("Attribute Groups:",h);const b=p.map((e=>e.nls));console.log("API NLS Values:",b);const y=m.map((e=>e.nls));console.log("System NLS Values:",y);const f=[...new Set([...b,...y])];console.log("all nls value with Hardcode :",f);const v=p.filter((e=>"System Attributes"!==e.groupNLS));console.log("Filtered out API system attributes:",p.length-v.length,"items removed");const w=[...v,...m].filter((e=>!0===e.deploymentExtension||e.groupNLS&&""!==e.groupNLS.trim()))||[];console.log("Non-system attributes from API:",w.length);const N=w.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS||"General"}))),A=N.filter((e=>"System Attributes"!==e.group));console.log("Mapped Attributes (total):",N),console.log("Dropdown Options (excluding System Attributes):",A);const x={};h.forEach((e=>{x[e]=N.filter((t=>t.group===e))})),console.log("Mapped Attributes:",N),console.log("All available NLS values:",f),console.log("Mapped Attributes (for dropdown) excluding System Attributes:",A),console.log("Attributes By Group:",x),console.log("System Attributes found:",w.filter((e=>"System Attributes"===e.groupNLS)).length),console.log("Sample System Attribute:",w.find((e=>"System Attributes"===e.groupNLS))),o({allNLSValues:f,dropdownOptions:A,mappedData:N,attributesByGroup:x,groups:h})}catch(i){console.error("Error fetching column mapping:",i),e(i.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{r()}),[]),{mappedAttributes:t,refreshMapping:r}},I=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:s,setSelectedMappings:r}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:n}=R(),{allNLSValues:l=[],dropdownOptions:i=[]}=n||{};(0,a.useEffect)((()=>{n&&Object.keys(n).length>0&&console.log("Mapped Attributes updated:",n)}),[n]);const c=e=>{if(!Array.isArray(l))return console.warn("allNLSValues is not an array:",l),!1;const t=e.toLowerCase().trim(),o=l.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o};return(0,m.jsx)(k,{columnHeaders:t.map((e=>({header:e,isMandatory:o.includes(e),hasNLS:c(e),currentMapping:s[e],defaultLabel:c(e)?e:"Please select from Drop Down"}))),handleSelectChange:(e,t)=>{const a=(e=>{const t=i.find((t=>t.uiLabel===e));return t?t.backendName:e})(t);r((s=>(0,E.A)((0,E.A)({},s),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:s,dropdownOptions:i.map((e=>({value:e.uiLabel,label:e.uiLabel})))})},O=e=>{let{show:t,onHide:o,columnHeaders:s,mandatoryAttributes:r,onColumnsMapped:n,existingMappings:l={}}=e;const[i,c]=(0,a.useState)(l),{mappedAttributes:d}=R();(0,a.useEffect)((()=>{t&&Object.keys(l).length>0&&c(l)}),[t,l]);const u=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(A.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",i);const e={},t=(0,E.A)({},l),{allNLSValues:a=[],dropdownOptions:c=[]}=d||{},u={"EIN Number":"PartNumber"};s.forEach((o=>{if(i[o]){const a=i[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):(e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:r.includes(o),autoMapped:!1},t[o]=a)}else if(l[o]){const a=l[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:r.includes(o),autoMapped:!0}}else{const s=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(o),n=u[o],l=r.includes(o);if(s||n||l){const a=n?u[o]:(e=>{const t=e.toLowerCase().trim(),o=c.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:l,autoMapped:!0},t[o]=a}else t[o]=o,e[o]={columnName:o,uiLabel:o,mappedAttribute:o,isMandatory:!1,autoMapped:!1}}}));const p={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",p),console.log("Simplified Mappings for Backend:",t),console.groupEnd(),n&&n(t,p),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>c({})}],children:[(0,m.jsx)(C,{variant:"info",message:u,className:"mapped-popup-alert"}),(0,m.jsx)(I,{columnHeaders:s,mandatoryAttributes:r,selectedMappings:i,setSelectedMappings:c})]})},F="1",H="2",U="3",V="4",_={[F]:e=>{var t,o;const a=(null===(t=e["Physical product/Raw Material"])||void 0===t||null===(o=t.toLowerCase())||void 0===o?void 0:o.trim())||"";let s;return s=a.includes("physical product")?"VPMReference":a.includes("raw material")?"Raw_Material":"",{type:s,title:e.Title||"",attributes:{description:e.Description||"",path:e["Item Catalog Category"]||"","dseno:EnterpriseAttributes":{"XP_VPMReference_Ext.EMR_ERP_PrimaryUOM":e["Unit Of Measure"]||e["Unit of Measure"]||""},"dseng:EnterpriseReference":{partNumber:e["EIN Number"]||""}},classificationType:e.Type||"",collabspace:e["Collaborative Space"]||e.Collabspace||""}},[H]:e=>({parentId:e["Parent EIN"]||"",childId:e["Child EIN"]||"",relationshipType:"Product Structure",attributes:{quantity:e.Quantity||"1",unit:e.Unit||"Each"}}),[U]:e=>({type:"Document",title:e["Document Name"]||"",attributes:{description:e.Description||"","document:attributes":{documentType:e["Document Type"]||"",revision:e.Revision||""}},collabspace:e["Collaborative Space"]||e.Collabspace||""}),[V]:e=>({productId:e["Product EIN"]||"",documentId:e["Document Name"]||"",relationshipType:e["Relationship Type"]||"Reference"})},q=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;if(!Array.isArray(e)||0===e.length)return{items:[],chunks:[],totalItems:0,totalChunks:0};console.log("Raw Sheet Data:",e),console.log("Operation Type:",t);const a=_[t];if(!a)return console.error("No mapper found for operation type: ".concat(t)),{items:[],chunks:[],totalItems:0,totalChunks:0};const s=e.map(((e,t)=>a(e))),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(s,o),n={items:s,chunks:r,totalItems:s.length,totalChunks:r.length,originalData:e};return console.log("Final mapped data:",n),n};var B=o(3862);const z={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},G=(e,t,o,a)=>{var s;if(e.length>0&&(console.log("Actual column names in sheet data:",Object.keys(e[0])),console.log("Sample row values:",e[0]),console.log("Column mappings applied:",t)),!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const{dropdownOptions:r=[],attributesByGroup:n={}}=a||{},l={};Array.isArray(r)&&r.forEach((e=>{l[e.backendName]=e.group||"System"})),console.log("Attribute to group mapping:",l);const i=(null===(s={1:{rootAttributes:["type","title","classificationType","collabspace"]},2:{rootAttributes:["parentId","childId","relationshipType"]},3:{rootAttributes:["type","title","collabspace"]},4:{rootAttributes:["productId","documentId","relationshipType"]}}[o])||void 0===s?void 0:s.rootAttributes)||["type","title"],c={"EIN Number":"attributes.dseng:EnterpriseReference.partNumber"},d=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{let[o,s]=e;if(!t[o])return;const r=t[o],n=((e,t)=>{if("type"===e&&"physical product/raw material"!==t.toLowerCase())return console.log('Column "'.concat(t,'" with backend name "type" is mapped to "classificationType"')),"classificationType";if("title"===e||"description"===e||"collabspace"===e.toLowerCase())return console.log("".concat(e," is placed at root level")),e;if(c[t])return c[t];if(i.includes(e))return e;const o=l[e];return console.log("Determining path for attribute: ".concat(e,", Group: ").concat(o||"unknown")),"EIN Number"===t||"PartNumber"===e?"attributes.dseng:EnterpriseReference.partNumber":o?"System Attributes"===o?(console.log("".concat(e," is a System Attribute - placed directly under attributes")),"attributes.".concat(e)):"Object Attributes"===o?(console.log("".concat(e," is an Object Attribute - placed under dseno:EnterpriseAttributes")),"attributes.dseno:EnterpriseAttributes.".concat(e)):"Packaging Weight and Dimensions"===o?(console.log("".concat(e," is a Packaging Attribute - placed under dseno:EnterpriseAttributes")),"attributes.dseno:EnterpriseAttributes.".concat(e)):o.includes("EnterpriseReference")||o.includes("dseng:")?(console.log("".concat(e," contains EnterpriseReference in group - placed under dseng:EnterpriseReference")),"attributes.dseng:EnterpriseReference.".concat(e)):o.includes("EnterpriseAttributes")||o.includes("dseno:")||o.includes("XP_VPMReference_Ext")?(console.log("".concat(e," contains EnterpriseAttributes in group - placed under dseno:EnterpriseAttributes")),"attributes.dseno:EnterpriseAttributes.".concat(e)):o.includes("document")||"document:attributes"===o?(console.log("".concat(e," is a Document Attribute - placed under document:attributes")),"attributes.document:attributes.".concat(e)):(console.log("".concat(e," has unknown group: ").concat(o," - defaulting to System Attribute")),"attributes.".concat(e)):(console.log("".concat(e," has no group information - defaulting to System Attribute")),"attributes.".concat(e))})(r,o);if("title"!==r&&"description"!==r&&"collabspace"!==r.toLowerCase()||console.log("Placing ".concat(r," at path: ").concat(n)),!n)return;const d=n.split(".");let u=a;for(let t=0;t<d.length-1;t++){const e=d[t];u[e]||(u[e]={}),u=u[e]}u[d[d.length-1]]=s})),"1"===o){const t=Object.keys(e).find((e=>e.toLowerCase().includes("physical product")||e.toLowerCase().includes("raw material")));if(t&&e[t]){const o=e[t].toLowerCase().trim();a.type=o.includes("physical product")?"VPMReference":o.includes("raw material")?"Raw_Material":"",console.log("Product type determined: ".concat(a.type," from value: ").concat(e[t]))}}return"3"!==o||a.type||(a.type="Document"),a}));d.length>0&&console.log("Sample transformed item structure:",JSON.stringify(d[0],null,2));const u=[];for(let p=0;p<d.length;p+=1e3)u.push(d.slice(p,p+1e3));return{chunks:u,totalChunks:u.length,totalItems:d.length,originalData:e,mappings:t}},X=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:s=[]}=o||{},r={},n={},l={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),i=l[e],c=t.includes(e);if(i){const t=l[e];r[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:c||!1,autoMapped:!0,isSpecial:!0},n[e]=t}else if(o||c){const t=(e=>{const t=e.toLowerCase().trim(),o=s.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(e);r[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:c,autoMapped:!0},n[e]=t}})),{completeMappings:r,simplifiedMappings:n,totalColumns:Object.keys(r).length}},W=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1),[y,f]=(0,a.useState)(!1),{showErrorToast:A,showSuccessToast:x}=(0,p.A)(),[S,C]=(0,a.useState)(!1),[j,E]=(0,a.useState)(""),[M,k]=(0,a.useState)([]),[L,T]=(0,a.useState)([]),[I,F]=(0,a.useState)([]),H=(0,a.useRef)(),[U,V]=(0,a.useState)(null),{mappedAttributes:_,refreshMapping:W}=R();(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",N.oX),Array.isArray(N.oX)?t([...N.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",N.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const J=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),n(!1),u(!1),f(!1),C(!1),E(""),k([]),T([]),F([]),V(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||x("Widget reset successfully!")};(0,a.useEffect)((()=>{console.log("Operation Choice updated:",j)}),[j]);const Q=0===L.length||M.length>0,K=0===L.length;console.log("Errors in Massupload.jsx:",M);const Y=!j;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(i.A,{direction:"horizontal",children:[(0,m.jsx)(w,{selectedValue:j,onChange:e=>{console.log("Operation selected:",e),E(e),W(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"p-2 ms-auto",children:"3"===j&&(0,m.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,m.jsx)("div",{className:"p-2",children:(0,m.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(A)(j)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:Y?"opacity-50":"",children:(0,m.jsx)(h,{ref:H,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{C(!0),console.log("Starting file validation..."),console.log("Selected Operation:",j),console.log("File:",t[0].name);const o=await v(t[0],e,j),{headers:a=[],validationErrors:s=[],mandatoryAttributes:r=[],sheetData:l=[]}=o;if(T(a),F(r),l.length>0){console.log("Sheet Data ",l);const e=q(l,j);console.log("Mapped JSON data:",e),e.originalData=l,V(e),await W(j),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",_),_&&Object.keys(_).length>0){const{simplifiedMappings:e}=X(a,r,_);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=G(l,e,j,_);V(t),x("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)}0===s.length?(k([]),x("File validated successfully!")):(k(s),n(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return A("The template uploaded and the selected operation do not match"),J(!0),void(H.current&&H.current.handleClearFiles());k(e),T(t),F(a),n(!0)}finally{C(!1)}},onReset:J,disabled:Y,message:Y?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),S&&(0,m.jsx)(b.A,{}),(0,m.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,m.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[M.length>0&&(0,m.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(M.length,")")}),(0,m.jsx)(d.A,{variant:K?"secondary":"info",onClick:()=>{u(!1),f(!0)},text:"Manage Spreadsheet Columns",disabled:K}),(0,m.jsx)(d.A,{variant:Q?"secondary":"primary",disabled:Q,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,m.jsx)(P,{show:l,onHide:()=>u(!1),errors:M}),(0,m.jsx)(D,{show:o,onHide:()=>s(!1),onConfirm:async()=>{try{if(!U)return void A("No data to submit");const t=z[j];if(!t)return void A("Invalid operation type");const{chunks:o,totalChunks:a}=U;let r=0,n=0;x("Starting upload of ".concat(a," chunks..."));for(let s=0;s<o.length;s++)try{const e=o[s];200===(await B.A.post(t,{items:e})).status&&(r++,s%5===0&&x("Processed ".concat(s+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(s+1," failed:"),e),n++}const l="Upload complete: ".concat(r," chunks successful, ").concat(n," failed");n>0?A(l):(x("Upload successful!"),s(!1),J())}catch(e){console.error("Upload error:",e),A("Upload failed: ".concat(e.message))}}}),(0,m.jsx)(O,{show:y,onHide:()=>f(!1),columnHeaders:L,mandatoryAttributes:I,existingMappings:null!==U&&void 0!==U&&U.mappings?U.mappings:{},onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(U&&U.originalData){const t=G(U.originalData,o,j,_);V(t),x("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else A("No sheet data available to transform with mappings")}})]})};let J=null;function Q(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),J||(J=s.createRoot(o)),J.render((0,m.jsxs)(r.Kq,{store:n.A,children:[(0,m.jsx)(W,{}),(0,m.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),r=s.csrf.name,n=s.csrf.value,l="SecurityContext",i=e;return{[r]:n,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=908.98778b54.chunk.js.map