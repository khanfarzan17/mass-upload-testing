"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[364],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),n=(o(5043),o(4282)),l=o(579);const r=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:m,imageSrc:h}=e,g=(0,s.A)(e,r);return(0,l.jsxs)(n.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:p},g),{},{children:[h&&(0,l.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(4104),s=o(4282),n=o(579);const l=e=>{let{show:t,onHide:o,title:l,children:r,footerButtons:i}=e;return(0,n.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,n.jsx)(a.A.Header,{closeButton:!0,children:(0,n.jsx)(a.A.Title,{children:l||"Modal Title"})}),(0,n.jsx)(a.A.Body,{children:r}),(0,n.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,n.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,n.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>r});var a=o(9379),s=o(45),n=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],r=()=>{const e=e=>{let{message:t,type:o="default",position:r="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:h="light",transition:g=n.br}=e,b=(0,s.A)(e,l);(n.oR[o]||n.oR)(t,(0,a.A)({position:r,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:h,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},3364:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var a=o(5043),s=o(4391),n=(o(2342),o(9555),o(3003)),l=o(2670),r=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),p=o(2725),m=o(579);const h=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:n,onReset:l,disabled:r=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:h}=(0,p.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),n&&n([]),l&&l(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(r?"disabled":""),children:[(0,m.jsx)("h2",{children:r?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),n&&n(t)},name:"file",types:o,disabled:r,hoverTitle:r?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:r?"not-allowed":"pointer",color:"red",opacity:r?.5:1},disabled:r,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var g=o(3277);var b=o(6713),f=o(1238);const y=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),v=(e,t,o)=>new Promise(((a,s)=>{var n,l;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const r={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(n=y.o[r])||void 0===n?void 0:n.fileHeaders)||[],c=(null===(l=y.o[r])||void 0===l?void 0:l.mandatoryAttributes)||[];if(!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=f.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),n=o.SheetNames[0],l=o.Sheets[n],d=f.Wp.sheet_to_json(l,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void s({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=f.Wp.sheet_to_json(l,{header:1})[0]||[];if(!u||0===u.length)return void s({errors:["The uploaded file has no content or is empty."],headers:[]});const p=f.Wp.sheet_to_json(l,{defval:""});if(0===p.length)return void s({errors:["The uploaded file contains headers but no data rows."],headers:u});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),h=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let b={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};const y=t.map((e=>e.toLowerCase()));for(let t=0;t<m.length;t++){const e=m[t],o=Math.round((t+1)/m.length*100);e.forEach(((e,o)=>{const a=1e3*t+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(b.mandatory++,h.push("Row ".concat(a+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===r||"Document"===r){var s;const t=(null===(s=e["Collaborative Space"])||void 0===s?void 0:s.trim().toLowerCase())||"";t&&y.includes(t)||(b.collabSpace++,h.push("Row ".concat(a+2,': "').concat(t?'You are not allowed to create in "Collaborative Space -" ('.concat(t,")"):'Collaborative Space" is Missing or Empty')))}if("Physical Product Structure"===r&&0===a){const e=p[0],t=e.Level,o=String(t).trim();console.log("Validating Level for Physical Product Structure, first row:",e,"Parsed Level:",o),(""===o||"0"!==o&&0!==Number(o))&&(h.push("Row ".concat(a+2,': "Level" value "').concat(t,'"  The first entry in the file should be a level 0 object.')),console.log("Level validation failed - first row Level is not 0:",t))}let n=null,l="";var i;if("Physical Product"===r||"Physical Product Structure"===r)l="EIN Number",n=(null===(i=e[l])||void 0===i?void 0:i.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.einPrefix++,h.push("Row ".concat(a+2,': "EIN Number" value "').concat(n,'" has an invalid prefix.')));else if("Physical Product-Document"===r||"Document"===r){var d;l="Document Name",n=(null===(d=e[l])||void 0===d?void 0:d.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.docPrefix++,h.push("Row ".concat(a+2,': "Document Name" value "').concat(n,'" has an invalid prefix.')))}if("Physical Product Structure"===r){var u;l="Quantity";const t=null===(u=e[l])||void 0===u?void 0:u.toString().trim();if(t){const e=Number(t);(isNaN(e)||e<=0)&&(h.push("Row ".concat(a+2,': "Quantity" value "').concat(t,'" Quantity should not be 0 or -ve.')),console.log("Quantity validation failed - Quantity is 0 or -ve:",t))}}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(t+1),totalRows:p.length,currentErrors:{mandatory:b.mandatory,collaborativeSpace:b.collabSpace,einPrefix:b.einPrefix,documentPrefix:b.docPrefix,total:h.length}})}if(h.length>0)return console.log("\u274c Validation completed with errors:",{total:h.length,byType:b}),void s({errors:h,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:p,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error(" Error reading file"),s({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}})),w=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:n,className:l}=e;return(0,m.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:n,className:l,children:[(0,m.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]})};var N=o(314),S=o(6313),A=o(7348),x=o(4005);const C=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,m.jsx)(x.A,{variant:t,className:s,children:o}):null},j=e=>{let{errors:t}=e;const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),s=t.split(": ").slice(1).join(": "),n=o?o[1]:"N/A",l=a?a[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[n]||(e[n]={rowNumber:n,columns:[],errors:[]}),e[n].columns.push(l),e[n].errors.push(s||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),s=new A.jS({fixedWidth:!0,defaultHeight:50}),n=e=>{let{key:t,index:a,style:n,parent:l}=e;const r=o[a];return(0,m.jsx)(A.dl,{cache:s,columnIndex:0,rowIndex:a,parent:l,children:(0,m.jsxs)("div",{style:n,className:"table-row",children:[(0,m.jsx)("div",{className:"table-cell",style:{width:"15%"},children:r.rowNumber}),(0,m.jsx)("div",{className:"table-cell",style:{width:"25%"},children:r.columns.map(((e,t)=>(0,m.jsx)("div",{children:e},t)))}),(0,m.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,m.jsx)("ul",{className:"error-list",children:r.errors.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})})]})},t)};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(C,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsxs)("div",{className:"table-wrapper",children:[(0,m.jsxs)("div",{className:"static-header",children:[(0,m.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(A.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsx)(A.B8,{width:a,height:t,rowCount:o.length,rowHeight:s.rowHeight,deferredMeasurementCache:s,rowRenderer:n})}})})]})]})},L=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,m.jsx)(S.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(j,{errors:a})})},P=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(S.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var D=o(9379),M=o(4196);const k=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,m.jsxs)(M.A,{bordered:!0,className:"table-light",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const{header:s,currentMapping:n,defaultLabel:l,disabled:r}=e,i=a(s);return(0,m.jsxs)("tr",{className:r?"disabled-row":"",children:[(0,m.jsx)("td",{className:r?"disabled-cell":"",children:s}),(0,m.jsx)("td",{className:"dropdown-cell ".concat(r?"disabled-dropdown":""),children:(0,m.jsx)("div",{className:"dropdown-wrapper",children:(0,m.jsx)(w,{index:t,selectedValue:(null===n||void 0===n?void 0:n.uiLabel)||s,onChange:(e,t)=>o(s,t),size:"lg",className:"w-100 ".concat(r?"custom-select-disabled":""),disabled:r,options:{defaultLabel:l,list:i}})})})]},t)}))})]})},T=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:a,setSelectedMappings:s,dropdownOptions:n,allNLSValues:l,operationChoice:r}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o),console.log("MappedList - Received dropdownOptions:",n),console.log("MappedList - Received operationChoice:",r),console.log("MappedList - Received allNLSValues:",l);return(0,m.jsx)(k,{columnHeaders:t.map((e=>{const t=(e=>{if(!Array.isArray(l))return console.warn("allNLSValues is not an array:",l),!1;const t=e.toLowerCase().trim(),o=l.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o})(e),s=o.includes(e);return{header:e,isMandatory:s,hasNLS:t,currentMapping:a[e],defaultLabel:t?e:"Please select from Drop Down",disabled:t&&s}})),handleSelectChange:(e,t)=>{console.log("Selection changed for column:",e,"to value:",t);const a=(e=>{if(console.log("Finding backend name for UI label:",e),console.log("Current dropdown options:",n),!n||!Array.isArray(n)||0===n.length)return console.warn("No dropdown options available"),e;const t=n.find((t=>t.uiLabel===e));return console.log("Found option:",t),t?t.backendName:e})(t);console.log("Mapped backend name:",a),s((s=>(0,D.A)((0,D.A)({},s),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:a,dropdownOptions:e=>(e=>{if(console.log("Preparing dropdown options for column:",e),!n||!Array.isArray(n)||0===n.length)return console.warn("No dropdown options available for filtering"),[];const t=Object.entries(a).filter((t=>{let[o]=t;return o!==e})).map((e=>{let[t,o]=e;return o.uiLabel||o.mappedAttribute}));return n.filter((e=>!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})))})(e)})},E=e=>{let{show:t,onHide:o,columnHeaders:s,mandatoryAttributes:n,onColumnsMapped:l,existingMappings:r={},dropdownOptions:i,allNLSValues:c,operationChoice:d}=e;const[u,p]=(0,a.useState)(r);(0,a.useEffect)((()=>{t&&Object.keys(r).length>0&&p(r)}),[t,r]),console.log("ColumnMappingModal NLS values:",c);console.log("ColumnMappingModal - received dropdownOptions:",i),console.log("ColumnMappingModal - operation choice:",d);const h=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(S.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",u);const e={},t=(0,D.A)({},r),a={"EIN Number":"PartNumber"};s.forEach((o=>{if(u[o]){const a=u[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):(e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:n.includes(o),autoMapped:!1},t[o]=a)}else if(r[o]){const a=r[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:n.includes(o),autoMapped:!0}}else{const s=(e=>{if(!Array.isArray(c))return!1;const t=e.toLowerCase().trim();return c.some((e=>e.toLowerCase().trim()===t))})(o),l=a[o],r=n.includes(o);if(s||l||r){const s=l?a[o]:(e=>{const t=e.toLowerCase().trim(),o=i.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:s,isMandatory:r,autoMapped:!0},t[o]=s}else t[o]=o,e[o]={columnName:o,uiLabel:o,mappedAttribute:o,isMandatory:!1,autoMapped:!1}}}));const d={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",d),console.log("Simplified Mappings for Backend:",t),console.groupEnd(),l&&l(t,d),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>p({})}],children:[(0,m.jsx)(C,{variant:"info",message:h,className:"mapped-popup-alert"}),(0,m.jsx)(T,{columnHeaders:s,mandatoryAttributes:n,selectedMappings:u,setSelectedMappings:p,dropdownOptions:i,allNLSValues:c,operationChoice:d})]})};var O=o(3862),R=o(2268),I=o(6047);const F=e=>{const{showErrorToast:t}=(0,p.A)(),[o,s]=(0,a.useState)([]),[n,l]=(0,a.useState)(e),r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",i=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{var o,a,i,c,d;const u=e||n;if(console.log("Fetching column mapping for operation:",u),!u)return void console.log("No operation specified, skipping fetch");e&&e!==n&&l(e),console.log("Fetching column mapping...");const p=await(0,R.I)();if(!p)return void t(g.rK);const m=await(0,I.ui)("GET","".concat(r,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",p);if(!m||!m.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",m.output.member);const h=null===(o=m.output)||void 0===o||null===(a=o.member)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.id;if(!h)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",h);const b=await(0,I.ui)("POST","".concat(r,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[h]},p);if(!b||!b.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",b.output);const f=(null===(c=b.output.results)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.groupData)||[];console.log("Full Group Data (with all NLS values):",f.map((e=>e.nls)));const y=[{name:"description",nls:"Description",groupNLS:"System Attributes"},{name:"Part Number",nls:"EIN Number",groupNLS:"System Attributes"},{name:"type",nls:"Type",groupNLS:"System Attributes"},{name:"title",nls:"Title",groupNLS:"System Attributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"System Attributes"}],v=f.map((e=>e.groupNLS));console.log("Attribute Groups:",v);const w=f.map((e=>e.nls));console.log("API NLS Values:",w);const N=y.map((e=>e.nls));console.log("System NLS Values:",N);const S=[...new Set([...w,...N])];console.log("all nls value with Hardcode :",S);const A=f.filter((e=>"System Attributes"!==e.groupNLS));console.log("Filtered out API system attributes:",f.length-A.length,"items removed");const x=[...A,...y].filter((e=>!0===e.deploymentExtension||e.groupNLS&&""!==e.groupNLS.trim()))||[];console.log("Non-system attributes from API:",x.length);const C=x.map((e=>({uiLabel:e.nls,backendName:e.name||e.backendName,group:e.groupNLS||"General"}))),j=C.filter((e=>"System Attributes"!==e.group));console.log("Mapped Attributes (total):",C),console.log("Dropdown Options (excluding System Attributes):",j);const L={};v.forEach((e=>{L[e]=C.filter((t=>t.group===e))})),console.log("Mapped Attributes:",C),console.log("All available NLS values:",S),console.log("Mapped Attributes (for dropdown) excluding System Attributes:",j),console.log("Attributes By Group:",L),console.log("System Attributes found:",x.filter((e=>"System Attributes"===e.groupNLS)).length),console.log("Sample System Attribute:",x.find((e=>"System Attributes"===e.groupNLS))),s({allNLSValues:S,dropdownOptions:j,mappedData:C,attributesByGroup:L,groups:v})}catch(u){console.error("Error fetching column mapping:",u),t(u.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{n&&i()}),[n]),{mappedAttributes:o,refreshMapping:i}},H=e=>{const{showErrorToast:t}=(0,p.A)(),[o,s]=(0,a.useState)(null),[n,l]=(0,a.useState)({allNLSValues:[],dropdownOptions:[],mappedData:[]}),[r,i]=(0,a.useState)(e),c="".concat("https://oi000186152-us1-space.3dexperience.3ds.com/enovia","/resources/v1/collabServices/authoring/createContent/typeInfo?tenant=OI000186152&xrequestedwith=xmlhttprequest"),d=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const o=e||r;if("3"===o){e&&e!==r&&i(e);try{var a;console.log("Fetching document data for operation type:",o);const e=await(0,R.I)();if(!e)return console.error("Failed to fetch CSRF headers."),void t(g.rK);const n={type:"Document",preferedType:"Document",typeName:"Document",subTypes:!0,runUXBL:!0,metrics:{UXName:"New",client_app_domain:"3DEXPERIENCE 3DDashboard",client_app_name:"ENXWDOC_AP"}},r=await(0,I.ui)("POST",c,n,e);if(console.log("API Response for Document template:",r),!0!==r.status)return console.error("Invalid API response structure:",r),void t("Failed to fetch document data. Invalid response structure.");const i=r.output.result[0];console.log("Full documentInfo structure:",JSON.stringify(i,null,2));const d=(null===i||void 0===i?void 0:i.extensionAttributes)||(null===i||void 0===i||null===(a=i.attributes)||void 0===a?void 0:a.extensionAttributes)||[];console.log("Found extensionAttributes:",d);const u=[{name:"description",nls:"Description",groupNLS:"DocumentsAttributes"},{name:"name",nls:"Document Name",groupNLS:"DocumentsAttributes"},{name:"type",nls:"Documentg Type",groupNLS:"DocumentsAttributes"},{name:"title",nls:"Title",groupNLS:"DocumentsAttributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"DocumentsAttributes"}];if(d&&d.length>0){const e=d.map((e=>e.nls));console.log("API NLS Values:",e);const t=u.map((e=>e.nls));console.log("Hardcoded NLS Values:",t);const o=[...new Set([...e,...t])];console.log("Document Operation - All Combined NLS Values:",o);const a=d.map((e=>{const t=e.name,o=t.split("."),a=o.length>1?o[1]:t;return{uiLabel:e.nls,backendName:a,fullName:e.name,group:"API Attributes"}})),s=u.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS}))),n=[...a,...s];console.log("Document Operation - Combined Dropdown Options:",n),l({allNLSValues:o,dropdownOptions:n,mappedData:n})}else{const e=u.map((e=>e.nls)),t=u.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS})));l({allNLSValues:e,dropdownOptions:t,mappedData:t})}s(i)}catch(n){console.error("Error fetching document data:",n),t(n.message||"Error fetching document data.")}}else console.log("Not document operation type, skipping fetch")};return(0,a.useEffect)((()=>{"3"===r&&d()}),[r]),{mappedAttributes:n,refreshMapping:d}},V={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},B=(e,t,o,a)=>{if(e.length>0&&(console.log("Actual column names in sheet data:",Object.keys(e[0])),console.log("Sample row values:",e[0]),console.log("Column mappings applied:",t)),!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const s=(null===a||void 0===a?void 0:a.mappedData)||[];console.log("Mapped attributes data in mass upload:",a),console.log("Mapped data in massupload:",a.mappedData),console.log("Full mapped attributes structure:",a);const n={};Array.isArray(s)&&s.forEach((e=>{n[e.backendName]=e.group||"System",console.log("Mapping ".concat(e.backendName," to group ").concat(e.group||"System"))})),console.log("Backend name mapping for title:",s.find((e=>"title"===e.backendName))),console.log("Backend name mapping for description:",s.find((e=>"description"===e.backendName))),console.log("Backend name mapping for collabspaceTitle:",s.find((e=>"collabspaceTitle"===e.backendName)));const l=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{var o;let[l,r]=e;if(!t[l])return;const i=t[l],c={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type"}[i]||(null===(o=s.find((e=>e.uiLabel===i)))||void 0===o?void 0:o.backendName)||i,d=((e,t)=>{if("title"===e||"type"===e||"classificationType"===e||"collabspaceTitle"===e)return"collabspaceTitle"===e?(console.log("collabspaceTitle mapped to root collabspace"),"collabspaceTitle"):(console.log("".concat(e," placed at root level")),e);if("EIN Number"===t||"PartNumber"===e||"Part Number"===e)return console.log("EIN Number mapped to attributes.dseng:EnterpriseReference.partNumber"),"attributes.dseng:EnterpriseReference.partNumber";if("description"===e)return console.log("Description mapped to attributes.description"),"attributes.description";const o=n[e];return console.log("Attribute: ".concat(e,", Group: ").concat(o||"unknown")),o?"System Attributes"===o?"attributes.".concat(e):"attributes.dseno:EnterpriseAttributes.".concat(e):(console.log("Skipping attribute with unknown group: ".concat(e)),null)})(c,l);if("title"!==c&&"description"!==c&&"collabspace"!==c.toLowerCase()||console.log("Placing ".concat(c," at path: ").concat(d)),!d)return;const u=d.split(".");let p=a;for(let t=0;t<u.length-1;t++){const e=u[t];p[e]||(p[e]={}),p=p[e]}p[u[u.length-1]]=r})),"1"===o){const t=Object.keys(e).find((e=>e.toLowerCase().includes("physical product")||e.toLowerCase().includes("raw material")));if(t&&e[t]){const o=e[t].toLowerCase().trim();a.type=o.includes("physical product")?"VPMReference":o.includes("raw material")?"Raw_Material":"",console.log("Product type determined: ".concat(a.type," from value: ").concat(e[t]))}}return"3"!==o||a.type||(a.type="Document"),a}));l.length>0&&console.log("Sample transformed item structure:",JSON.stringify(l[0],null,2));const r=[];for(let i=0;i<l.length;i+=1e3)r.push(l.slice(i,i+1e3));return{chunks:r,totalChunks:r.length,totalItems:l.length,originalData:e,mappings:t}},U=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:s=[]}=o||{},n={},l={},r={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type","EIN Number":"Part Number"},i={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),c=i[e],d=t.includes(e);if(c){const t=i[e];n[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d||!1,autoMapped:!0,isSpecial:!0},l[e]=t}else if(o||d){const t=(e=>{if(r[e])return r[e];const t=e.toLowerCase().trim(),o=Object.keys(r).find((e=>e.toLowerCase()===t));if(o)return r[o];const a=s.find((e=>e.uiLabel.toLowerCase().trim()===t));return a?a.backendName:e})(e);n[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d,autoMapped:!0},l[e]=t}})),{completeMappings:n,simplifiedMappings:l,totalColumns:Object.keys(n).length}},q=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),[r,u]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),{showErrorToast:S,showSuccessToast:A}=(0,p.A)(),[x,C]=(0,a.useState)(!1),[j,D]=(0,a.useState)(""),[M,k]=(0,a.useState)([]),[T,R]=(0,a.useState)([]),[I,q]=(0,a.useState)([]),_=(0,a.useRef)(),[z,G]=(0,a.useState)(null),{mappedAttributes:X,refreshMapping:W}=F(),{mappedAttributes:Q,refreshMapping:J}=H(j),K=()=>{switch(console.log("Getting active data for operation:",j),j){case"1":case"2":case"4":default:return{mappedAttributes:X,refreshMapping:W};case"3":return{mappedAttributes:Q,refreshMapping:J}}},{mappedAttributes:Y,refreshMapping:$}=K();console.log("Active operation:",j),console.log("Active mappedAttributes:",Y);const Z=async e=>{try{console.log("Refreshing data for operation:",e);const{refreshMapping:t}=K();await t(e)}catch(t){console.error("Error refreshing data:",t)}};(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",N.oX),Array.isArray(N.oX)?t([...N.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",N.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]),console.log("widget window",window.widget);const ee=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),l(!1),u(!1),y(!1),C(!1),D(""),k([]),R([]),q([]),G(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||A("Widget reset successfully!")},te=0===T.length||M.length>0,oe=0===T.length;console.log("Errors in Massupload.jsx:",M);const ae=!j;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(i.A,{direction:"horizontal",children:[(0,m.jsx)(w,{selectedValue:j,onChange:e=>{console.log("Operation selected:",e),D(e),Z(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"p-2 ms-auto",children:"3"===j&&(0,m.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,m.jsx)("div",{className:"p-2",children:(0,m.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(S)(j)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:ae?"opacity-50":"",children:(0,m.jsx)(h,{ref:_,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{C(!0),console.log("Starting file validation..."),console.log("Selected Operation:",j),console.log("File:",t[0].name);const o=await v(t[0],e,j),{headers:a=[],validationErrors:s=[],mandatoryAttributes:n=[],sheetData:r=[]}=o;R(a),q(n),r.length>0&&(console.log("Sheet Data ",r),G({originalData:r}),await Z(j),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",Y),Y&&Object.keys(Y).length>0){const{simplifiedMappings:e}=U(a,n,Y);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=B(r,e,j,Y);G(t),A("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)),0===s.length?(k([]),A("File validated successfully!")):(k(s),l(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return S("The template uploaded and the selected operation do not match"),ee(!0),void(_.current&&_.current.handleClearFiles());k(e),R(t),q(a),l(!0)}finally{C(!1)}},onReset:ee,disabled:ae,message:ae?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),x&&(0,m.jsx)(b.A,{}),(0,m.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,m.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[M.length>0&&(0,m.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(M.length,")")}),(0,m.jsx)(d.A,{variant:oe?"secondary":"info",onClick:()=>{u(!1),y(!0)},text:"Manage Spreadsheet Columns",disabled:oe}),(0,m.jsx)(d.A,{variant:te?"secondary":"primary",disabled:te,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,m.jsx)(L,{show:r,onHide:()=>u(!1),errors:M}),(0,m.jsx)(P,{show:o,onHide:()=>s(!1),onConfirm:async()=>{try{if(!z)return void S("No data to submit");const t=V[j];if(!t)return void S("Invalid operation type");const{chunks:o,totalChunks:a}=z;let n=0,l=0;A("Starting upload of ".concat(a," chunks..."));for(let s=0;s<o.length;s++)try{const e=o[s];200===(await O.A.post(t,{items:e})).status&&(n++,s%5===0&&A("Processed ".concat(s+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(s+1," failed:"),e),l++}const r="Upload complete: ".concat(n," chunks successful, ").concat(l," failed");l>0?S(r):(A("Upload successful!"),s(!1),ee())}catch(e){console.error("Upload error:",e),S("Upload failed: ".concat(e.message))}}}),(0,m.jsx)(E,{show:f,onHide:()=>y(!1),columnHeaders:T,mandatoryAttributes:I,existingMappings:null!==z&&void 0!==z&&z.mappings?z.mappings:{},dropdownOptions:null===Y||void 0===Y?void 0:Y.dropdownOptions,allNLSValues:null===Y||void 0===Y?void 0:Y.allNLSValues,operationChoice:j,onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(z&&z.originalData){const t=B(z.originalData,o,j,Y);G(t),A("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else S("No sheet data available to transform with mappings")}})]})};let _=null;function z(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),_||(_=s.createRoot(o)),_.render((0,m.jsxs)(n.Kq,{store:l.A,children:[(0,m.jsx)(q,{}),(0,m.jsx)(r.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),n=s.csrf.name,l=s.csrf.value,r="SecurityContext",i=e;return{[n]:l,[r]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=364.9c26ae85.chunk.js.map