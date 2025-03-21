"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[908],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),r=(o(5043),o(4282)),n=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:m,imageSrc:h}=e,g=(0,s.A)(e,l);return(0,n.jsxs)(r.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:p},g),{},{children:[h&&(0,n.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(4104),s=o(4282),r=o(579);const n=e=>{let{show:t,onHide:o,title:n,children:l,footerButtons:i}=e;return(0,r.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(a.A.Header,{closeButton:!0,children:(0,r.jsx)(a.A.Title,{children:n||"Modal Title"})}),(0,r.jsx)(a.A.Body,{children:l}),(0,r.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),s=o(45),r=o(2115);const n=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:h="light",transition:g=r.br}=e,b=(0,s.A)(e,n);(r.oR[o]||r.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:h,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},9908:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var a=o(5043),s=o(4391),r=(o(2342),o(9555),o(3003)),n=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),p=o(2725),m=o(579);const h=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:r,onReset:n,disabled:l=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:h}=(0,p.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),r&&r([]),n&&n(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(l?"disabled":""),children:[(0,m.jsx)("h2",{children:l?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),r&&r(t)},name:"file",types:o,disabled:l,hoverTitle:l?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:l?"not-allowed":"pointer",color:"red",opacity:l?.5:1},disabled:l,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var g=o(3277);var b=o(6713),f=o(1238);const y=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),v=(e,t,o)=>new Promise(((a,s)=>{var r,n;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(r=y.o[l])||void 0===r?void 0:r.fileHeaders)||[],c=(null===(n=y.o[l])||void 0===n?void 0:n.mandatoryAttributes)||[];if(!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=f.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),r=o.SheetNames[0],n=o.Sheets[r],d=f.Wp.sheet_to_json(n,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void s({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=f.Wp.sheet_to_json(n,{header:1})[0]||[];if(!u||0===u.length)return void s({errors:["The uploaded file has no content or is empty."],headers:[]});const p=f.Wp.sheet_to_json(n,{defval:""});if(0===p.length)return void s({errors:["The uploaded file contains headers but no data rows."],headers:u});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),h=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let b={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};for(let a=0;a<m.length;a++){const e=m[a],o=Math.round((a+1)/m.length*100);e.forEach(((e,o)=>{const s=1e3*a+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(b.mandatory++,h.push("Row ".concat(s+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===l||"Document"===l){var r;const o=(null===(r=e["Collaborative Space"])||void 0===r?void 0:r.trim())||"";o&&t.includes(o)||(b.collabSpace++,h.push("Row ".concat(s+2,': "').concat(o?'You are not allowed to create in "Collaborative Space -" ('.concat(o,")"):'Collaborative Space" is Missing or Empty')))}let n=null,i="";var d;if("Physical Product"===l||"Physical Product Structure"===l)i="EIN Number",n=(null===(d=e[i])||void 0===d?void 0:d.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.einPrefix++,h.push("Row ".concat(s+2,': "EIN Number" value "').concat(n,'" has an invalid prefix.')));else if("Physical Product-Document"===l||"Document"===l){var u;i="Document Name",n=(null===(u=e[i])||void 0===u?void 0:u.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.docPrefix++,h.push("Row ".concat(s+2,': "Document Name" value "').concat(n,'" has an invalid prefix.')))}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(a+1),totalRows:p.length,currentErrors:{mandatory:b.mandatory,collaborativeSpace:b.collabSpace,einPrefix:b.einPrefix,documentPrefix:b.docPrefix,total:h.length}})}if(h.length>0)return console.log("\u274c Validation completed with errors:",{total:h.length,byType:b}),void s({errors:h,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:p,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error("\u274c Error reading file"),s({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}})),w=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:r,className:n}=e;return(0,m.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:r,className:n,children:[(0,m.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]})};var x=o(314),N=o(6313),C=o(7348),j=o(4005);const A=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,m.jsx)(j.A,{variant:t,className:s,children:o}):null},S=e=>{let{errors:t}=e;console.log("[ErrorPopup.jsx] errors:",t);const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),s=t.split(": ").slice(1).join(": "),r=o?o[1]:"N/A",n=a?a[1]:t.includes("Collaborative Space")?"Collaborative Space":"N/A";return e[r]||(e[r]={rowNumber:r,columns:[],errors:[]}),e[r].columns.push(n),e[r].errors.push(s||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),s=new C.jS({fixedWidth:!0,defaultHeight:50}),r=e=>{let{key:t,index:a,style:r,parent:n}=e;const l=o[a];return(0,m.jsx)(C.dl,{cache:s,columnIndex:0,rowIndex:a,parent:n,children:(0,m.jsxs)("div",{style:r,className:"table-row",children:[(0,m.jsx)("div",{className:"table-cell",style:{width:"15%"},children:l.rowNumber}),(0,m.jsx)("div",{className:"table-cell",style:{width:"25%"},children:l.columns.map(((e,t)=>(0,m.jsx)("div",{children:e},t)))}),(0,m.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,m.jsx)("ul",{className:"error-list",children:l.errors.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})})]})},t)};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(A,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsxs)("div",{className:"table-wrapper",children:[(0,m.jsxs)("div",{className:"static-header",children:[(0,m.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(C.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsx)(C.B8,{width:a,height:t,rowCount:o.length,rowHeight:s.rowHeight,deferredMeasurementCache:s,rowRenderer:r})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,m.jsx)(N.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(S,{errors:a})})},M=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(N.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var E=o(9379),D=o(4196);const R=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,m.jsxs)(D.A,{bordered:!0,className:"table-light",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const{header:s,hasNLS:r,currentMapping:n,defaultLabel:l}=e;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:s}),(0,m.jsx)("td",{children:(0,m.jsx)(w,{index:t,selectedValue:(null===n||void 0===n?void 0:n.uiLabel)||s,onChange:(e,t)=>{o(s,t)},size:"lg",className:"w-100",disabled:!r,options:{defaultLabel:l,list:a}})})]},t)}))})]})};var k=o(2268),T=o(6047);const I=()=>{const{showErrorToast:e}=(0,p.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",r=async()=>{try{var t,a,r,n,l,i,c,d;console.log("Fetching column mapping...");const u=await(0,k.I)();if(!u)return void e(g.rK);const p=await(0,T.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!p||!p.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",p.output.member);const m=null===(t=p.output)||void 0===t||null===(a=t.member)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id;if(!m)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",m);const h=await(0,T.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[m]},u);if(!h||!h.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",h.output);const b=(null===(n=h.output.results)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.groupData)||[];console.log("Full Group Data (with all NLS values):",b.map((e=>e.nls)));const f=[...new Set(b.map((e=>e.groupNLS)))];console.log("Attribute Groups:",f);const y=b.map((e=>e.nls)),v=((null===(i=h.output.results)||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.groupData)||void 0===d?void 0:d.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS||"General"}))),w={};f.forEach((e=>{w[e]=v.filter((t=>t.group===e))})),console.log("Mapped Attributes:",v),console.log("All available NLS values:",y),console.log("Mapped Attributes (for dropdown):",v),console.log("Attributes By Group:",w),o({allNLSValues:b.map((e=>e.nls)),dropdownOptions:v,attributesByGroup:w,groups:f})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{r()}),[]),{mappedAttributes:t,refreshMapping:r}},O=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:s,setSelectedMappings:r}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:n}=I(),{allNLSValues:l=[],dropdownOptions:i=[]}=n||{};(0,a.useEffect)((()=>{n&&Object.keys(n).length>0&&console.log("Mapped Attributes updated:",n)}),[n]);const c=e=>{if(!Array.isArray(l))return console.warn("allNLSValues is not an array:",l),!1;const t=e.toLowerCase().trim(),o=l.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o};return(0,m.jsx)(R,{columnHeaders:t.map((e=>({header:e,isMandatory:o.includes(e),hasNLS:c(e),currentMapping:s[e],defaultLabel:c(e)?e:"Please select from Drop Down"}))),handleSelectChange:(e,t)=>{const a=(e=>{const t=i.find((t=>t.uiLabel===e));return t?t.backendName:e})(t);r((s=>(0,E.A)((0,E.A)({},s),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:s,dropdownOptions:i.map((e=>({value:e.uiLabel,label:e.uiLabel})))})},L=e=>{let{show:t,onHide:o,columnHeaders:s,mandatoryAttributes:r,onColumnsMapped:n,existingMappings:l={}}=e;const[i,c]=(0,a.useState)(l),{mappedAttributes:d}=I();(0,a.useEffect)((()=>{t&&Object.keys(l).length>0&&c(l)}),[t,l]);const u=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(N.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",i);const e={},{allNLSValues:t=[],dropdownOptions:a=[]}=d||{},l={"EIN Number":"PartNumber"};s.forEach((o=>{if(i[o])e[o]=i[o];else{const s=(e=>{if(!Array.isArray(t))return!1;const o=e.toLowerCase().trim();return t.some((e=>e.toLowerCase().trim()===o))})(o),n=l[o],i=r.includes(o);if(s||i&&n){const t=n?l[o]:(e=>{const t=e.toLowerCase().trim(),o=a.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:t,isMandatory:i,autoMapped:!0}}}}));const c={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",c),console.log("Backend Names Used:",Object.values(e).map((e=>e.mappedAttribute)));const u={};Object.entries(e).forEach((e=>{let[t,o]=e;u[t]=o.mappedAttribute})),console.log("Simplified Mappings for Backend:",u),console.groupEnd(),n&&n(u,c),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>c({})}],children:[(0,m.jsx)(A,{variant:"info",message:u,className:"mapped-popup-alert"}),(0,m.jsx)(O,{columnHeaders:s,mandatoryAttributes:r,selectedMappings:i,setSelectedMappings:c})]})},F="1",H="2",_="3",U="4",V={[F]:e=>{var t,o;const a=(null===(t=e["Physical product/Raw Material"])||void 0===t||null===(o=t.toLowerCase())||void 0===o?void 0:o.trim())||"";let s;return s=a.includes("physical product")?"VPMReference":a.includes("raw material")?"Raw_Material":"",{type:s,title:e.Title||"",attributes:{description:e.Description||"",path:e["Item Catalog Category"]||"","dseno:EnterpriseAttributes":{"XP_VPMReference_Ext.EMR_ERP_PrimaryUOM":e["Unit Of Measure"]||e["Unit of Measure"]||""},"dseng:EnterpriseReference":{partNumber:e["EIN Number"]||""}},classificationType:e.Type||"",collabspace:e["Collaborative Space"]||e.Collabspace||""}},[H]:e=>({parentId:e["Parent EIN"]||"",childId:e["Child EIN"]||"",relationshipType:"Product Structure",attributes:{quantity:e.Quantity||"1",unit:e.Unit||"Each"}}),[_]:e=>({type:"Document",title:e["Document Name"]||"",attributes:{description:e.Description||"","document:attributes":{documentType:e["Document Type"]||"",revision:e.Revision||""}},collabspace:e["Collaborative Space"]||e.Collabspace||""}),[U]:e=>({productId:e["Product EIN"]||"",documentId:e["Document Name"]||"",relationshipType:e["Relationship Type"]||"Reference"})},q=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;if(!Array.isArray(e)||0===e.length)return{items:[],chunks:[],totalItems:0,totalChunks:0};console.log("Raw Sheet Data:",e),console.log("Operation Type:",t);const a=V[t];if(!a)return console.error("No mapper found for operation type: ".concat(t)),{items:[],chunks:[],totalItems:0,totalChunks:0};const s=e.map(((e,t)=>a(e))),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(s,o),n={items:s,chunks:r,totalItems:s.length,totalChunks:r.length,originalData:e};return console.log("Final mapped data:",n),n};var B=o(3862);const z={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},G=(e,t,o)=>{if(!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const a={1:{rootAttributes:["type","title","classificationType","collabspace"],nestedGroups:{attributes:["description","path"],"attributes.dseno:EnterpriseAttributes":["XP_VPMReference_Ext.EMR_ERP_PrimaryUOM"],"attributes.dseng:EnterpriseReference":["partNumber"]}},2:{rootAttributes:["parentId","childId","relationshipType"],nestedGroups:{attributes:["quantity","unit"]}},3:{rootAttributes:["type","title","collabspace"],nestedGroups:{attributes:["description"],"attributes.document:attributes":["documentType","revision"]}},4:{rootAttributes:["productId","documentId","relationshipType"],nestedGroups:{}}},s=a[o]||a[1],r={"EIN Number":"attributes.dseng:EnterpriseReference.partNumber","Unit of Measure":"attributes.dseno:EnterpriseAttributes.XP_VPMReference_Ext.EMR_ERP_PrimaryUOM","Unit Of Measure":"attributes.dseno:EnterpriseAttributes.XP_VPMReference_Ext.EMR_ERP_PrimaryUOM","Document Type":"attributes.document:attributes.documentType",Revision:"attributes.document:attributes.revision"},n={};Object.entries(t).forEach((e=>{let[t,o]=e;if(r[t])n[t]=r[t];else if(s.rootAttributes.includes(o))n[t]=o;else{for(const[e,a]of Object.entries(s.nestedGroups))if(a.includes(o))return void(n[t]="".concat(e,".").concat(o));n[t]="attributes.".concat(o)}})),console.log("Column paths mapping:",n);const l=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{let[o,s]=e;if(!t[o])return;t[o];const r=n[o];if(!r)return;const l=r.split(".");let i=a;for(let t=0;t<l.length-1;t++){const e=l[t];i[e]||(i[e]={}),i=i[e]}i[l[l.length-1]]=s})),"1"===o&&e["Physical product/Raw Material"]){const t=e["Physical product/Raw Material"].toLowerCase().trim();a.type=t.includes("physical product")?"VPMReference":t.includes("raw material")?"Raw_Material":""}return"3"!==o||a.type||(a.type="Document"),a})),i=[];for(let c=0;c<l.length;c+=100)i.push(l.slice(c,c+100));return{chunks:i,totalChunks:i.length,totalItems:l.length,originalData:e,mappings:t}},X=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:s=[]}=o||{},r={},n={},l={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),i=l[e],c=t.includes(e);if(i){const t=l[e];r[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:c||!1,autoMapped:!0,isSpecial:!0},n[e]=t}else if(o||c){const t=(e=>{const t=e.toLowerCase().trim(),o=s.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(e);r[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:c,autoMapped:!0},n[e]=t}})),{completeMappings:r,simplifiedMappings:n,totalColumns:Object.keys(r).length}},W=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),{showErrorToast:N,showSuccessToast:C}=(0,p.A)(),[j,A]=(0,a.useState)(!1),[S,E]=(0,a.useState)(""),[D,R]=(0,a.useState)([]),[k,T]=(0,a.useState)([]),[O,F]=(0,a.useState)([]),H=(0,a.useRef)(),[_,U]=(0,a.useState)(null),{mappedAttributes:V,refreshMapping:W}=I();(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",x.oX),Array.isArray(x.oX)?t([...x.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",x.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const J=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),n(!1),u(!1),y(!1),A(!1),E(""),R([]),T([]),F([]),U(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||C("Widget reset successfully!")};(0,a.useEffect)((()=>{console.log("Operation Choice updated:",S)}),[S]);const Q=0===k.length||D.length>0,K=0===k.length;console.log("Errors in Massupload.jsx:",D);const Y=!S;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(i.A,{direction:"horizontal",children:[(0,m.jsx)(w,{selectedValue:S,onChange:e=>{console.log("Operation selected:",e),E(e),W(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"p-2 ms-auto",children:"3"===S&&(0,m.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,m.jsx)("div",{className:"p-2",children:(0,m.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(N)(S)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:Y?"opacity-50":"",children:(0,m.jsx)(h,{ref:H,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{A(!0),console.log("Starting file validation..."),console.log("Selected Operation:",S),console.log("File:",t[0].name);const o=await v(t[0],e,S),{headers:a=[],validationErrors:s=[],mandatoryAttributes:r=[],sheetData:l=[]}=o;if(T(a),F(r),l.length>0){console.log("Sheet Data ",l);const e=q(l,S);console.log("Mapped JSON data:",e),e.originalData=l,U(e),await W(S),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",V),V&&Object.keys(V).length>0){const{simplifiedMappings:e}=X(a,r,V);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=G(l,e,S);U(t),C("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)}0===s.length?(R([]),C("File validated successfully!")):(R(s),n(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return N("The template uploaded and the selected operation do not match"),J(!0),void(H.current&&H.current.handleClearFiles());R(e),T(t),F(a),n(!0)}finally{A(!1)}},onReset:J,disabled:Y,message:Y?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),j&&(0,m.jsx)(b.A,{}),(0,m.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,m.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[D.length>0&&(0,m.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(D.length,")")}),(0,m.jsx)(d.A,{variant:K?"secondary":"info",onClick:()=>{u(!1),y(!0)},text:"Manage Spreadsheet Columns",disabled:K}),(0,m.jsx)(d.A,{variant:Q?"secondary":"primary",disabled:Q,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,m.jsx)(P,{show:l,onHide:()=>u(!1),errors:D}),(0,m.jsx)(M,{show:o,onHide:()=>s(!1),onConfirm:async()=>{try{if(!_)return void N("No data to submit");const t=z[S];if(!t)return void N("Invalid operation type");const{chunks:o,totalChunks:a}=_;let r=0,n=0;C("Starting upload of ".concat(a," chunks..."));for(let s=0;s<o.length;s++)try{const e=o[s];200===(await B.A.post(t,{items:e})).status&&(r++,s%5===0&&C("Processed ".concat(s+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(s+1," failed:"),e),n++}const l="Upload complete: ".concat(r," chunks successful, ").concat(n," failed");n>0?N(l):(C("Upload successful!"),s(!1),J())}catch(e){console.error("Upload error:",e),N("Upload failed: ".concat(e.message))}}}),(0,m.jsx)(L,{show:f,onHide:()=>y(!1),columnHeaders:k,mandatoryAttributes:O,existingMappings:null!==_&&void 0!==_&&_.mappings?_.mappings:{},onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(_&&_.originalData){const t=G(_.originalData,o,S);U(t),C("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else N("No sheet data available to transform with mappings")}})]})};let J=null;function Q(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),J||(J=s.createRoot(o)),J.render((0,m.jsxs)(r.Kq,{store:n.A,children:[(0,m.jsx)(W,{}),(0,m.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),r=s.csrf.name,n=s.csrf.value,l="SecurityContext",i=e;return{[r]:n,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=908.a27040ce.chunk.js.map