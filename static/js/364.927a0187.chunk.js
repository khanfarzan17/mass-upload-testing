"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[364],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),n=o(45),s=(o(5043),o(4282)),r=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:m,imageSrc:h}=e,g=(0,n.A)(e,l);return(0,r.jsxs)(s.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:p},g),{},{children:[h&&(0,r.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(579);const n=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>r});o(5043);var a=o(4104),n=o(4282),s=o(579);const r=e=>{let{show:t,onHide:o,title:r,children:l,footerButtons:i}=e;return(0,s.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,s.jsx)(a.A.Header,{closeButton:!0,children:(0,s.jsx)(a.A.Title,{children:r||"Modal Title"})}),(0,s.jsx)(a.A.Body,{children:l}),(0,s.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,s.jsx)(n.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,s.jsx)(n.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),n=o(45),s=o(2115);const r=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:h="light",transition:g=s.br}=e,b=(0,n.A)(e,r);(s.oR[o]||s.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:h,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},3364:(e,t,o)=>{o.r(t),o.d(t,{default:()=>X});var a=o(5043),n=o(4391),s=(o(2342),o(9555),o(3003)),r=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(3728),d=o(7680),u=o(2725),p=o(579);const m=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:n=!0,onUpload:s,onReset:r,disabled:l=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,m]=(0,a.useState)([]),{showErrorToast:h}=(0,u.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m([]),s&&s([]),r&&r(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,p.jsxs)("div",{className:"file-upload-container ".concat(l?"disabled":""),children:[(0,p.jsx)("h2",{children:l?"Please select an operation first":"Drag & Drop Files"}),(0,p.jsxs)("div",{className:"upload-area",children:[(0,p.jsx)(d.l,{multiple:n,handleChange:e=>{const t=n?[...e]:[e];m(t),s&&s(t)},name:"file",types:o,disabled:l,hoverTitle:l?"":"Drop here"}),(0,p.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,p.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,p.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:l?"not-allowed":"pointer",color:"red",opacity:l?.5:1},disabled:l,children:"X"})]},t))):(0,p.jsx)("p",{children:i})})]})]})}));var h=o(3277);var g=o(6713),b=o(1238);const f=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),y=(e,t,o)=>new Promise(((a,n)=>{var s,r;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(s=f.o[l])||void 0===s?void 0:s.fileHeaders)||[],c=(null===(r=f.o[l])||void 0===r?void 0:r.mandatoryAttributes)||[];if(!o)return void n({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void n({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=b.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),s=o.SheetNames[0],r=o.Sheets[s],d=b.Wp.sheet_to_json(r,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void n({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=b.Wp.sheet_to_json(r,{header:1})[0]||[];if(!u||0===u.length)return void n({errors:["The uploaded file has no content or is empty."],headers:[]});const p=b.Wp.sheet_to_json(r,{defval:""});if(0===p.length)return void n({errors:["The uploaded file contains headers but no data rows."],headers:u});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),h=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let f={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};const y=t.map((e=>e.toLowerCase()));for(let t=0;t<m.length;t++){const e=m[t],o=Math.round((t+1)/m.length*100);e.forEach(((e,o)=>{const a=1e3*t+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(f.mandatory++,h.push("Row ".concat(a+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===l||"Document"===l){var n;const t=(null===(n=e["Collaborative Space"])||void 0===n?void 0:n.trim().toLowerCase())||"";t&&y.includes(t)||(f.collabSpace++,h.push("Row ".concat(a+2,': "').concat(t?'You are not allowed to create in "Collaborative Space -" ('.concat(t,")"):'Collaborative Space" is Missing or Empty')))}if("Physical Product Structure"===l&&0===a){const e=p[0],t=e.Level,o=String(t).trim();console.log("Validating Level for Physical Product Structure, first row:",e,"Parsed Level:",o),(""===o||"0"!==o&&0!==Number(o))&&(h.push("Row ".concat(a+2,': "Level" value "').concat(t,'"  The first entry in the file should be a level 0 object.')),console.log("Level validation failed - first row Level is not 0:",t))}let s=null,r="";var i;if("Physical Product"===l||"Physical Product Structure"===l)r="EIN Number",s=(null===(i=e[r])||void 0===i?void 0:i.toString().trim())||null,s&&g.some((e=>s.startsWith(e)))&&(f.einPrefix++,h.push("Row ".concat(a+2,': "EIN Number" value "').concat(s,'" has an invalid prefix.')));else if("Physical Product-Document"===l||"Document"===l){var d;r="Document Name",s=(null===(d=e[r])||void 0===d?void 0:d.toString().trim())||null,s&&g.some((e=>s.startsWith(e)))&&(f.docPrefix++,h.push("Row ".concat(a+2,': "Document Name" value "').concat(s,'" has an invalid prefix.')))}if("Physical Product Structure"===l){var u;r="Quantity";const t=null===(u=e[r])||void 0===u?void 0:u.toString().trim();if(t){const e=Number(t);(isNaN(e)||e<=0)&&(h.push("Row ".concat(a+2,': "Quantity" value "').concat(t,'" Quantity should not be 0 or -ve.')),console.log("Quantity validation failed - Quantity is 0 or -ve:",t))}}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(t+1),totalRows:p.length,currentErrors:{mandatory:f.mandatory,collaborativeSpace:f.collabSpace,einPrefix:f.einPrefix,documentPrefix:f.docPrefix,total:h.length}})}if(h.length>0)return console.log("\u274c Validation completed with errors:",{total:h.length,byType:f}),void n({errors:h,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:p,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error(" Error reading file"),n({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}}));var v=o(2691);const w=e=>{let{index:t,selectedValue:o,options:a,onChange:n,size:s,className:r}=e;return(0,p.jsxs)(v.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?n(t,e.target.value):n(e.target.value)},size:s,className:r,children:[(0,p.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,p.jsx)("option",{value:e.value,children:e.label},t)))]})};var N=o(314),S=o(6313),A=o(7348),x=o(4005);const C=e=>{let{variant:t="info",message:o,show:a=!0,className:n=""}=e;return a?(0,p.jsx)(x.A,{variant:t,className:n,children:o}):null},j=e=>{let{errors:t}=e;const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),n=t.split(": ").slice(1).join(": "),s=o?o[1]:"N/A",r=a?a[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[s]||(e[s]={rowNumber:s,columns:[],errors:[]}),e[s].columns.push(r),e[s].errors.push(n||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),n=new A.jS({fixedWidth:!0,defaultHeight:50}),s=e=>{let{key:t,index:a,style:s,parent:r}=e;const l=o[a];return(0,p.jsx)(A.dl,{cache:n,columnIndex:0,rowIndex:a,parent:r,children:(0,p.jsxs)("div",{style:s,className:"table-row",children:[(0,p.jsx)("div",{className:"table-cell",style:{width:"15%"},children:l.rowNumber}),(0,p.jsx)("div",{className:"table-cell",style:{width:"25%"},children:l.columns.map(((e,t)=>(0,p.jsx)("div",{children:e},t)))}),(0,p.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,p.jsx)("ul",{className:"error-list",children:l.errors.map(((e,t)=>(0,p.jsx)("li",{children:e},t)))})})]})},t)};return(0,p.jsxs)("div",{className:"error-popup-container",children:[(0,p.jsx)(C,{variant:"danger",message:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,p.jsxs)("div",{className:"table-wrapper",children:[(0,p.jsxs)("div",{className:"static-header",children:[(0,p.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,p.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,p.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,p.jsx)("div",{className:"table-container",children:(0,p.jsx)(A.t$,{children:e=>{let{height:t,width:a}=e;return(0,p.jsx)(A.B8,{width:a,height:t,rowCount:o.length,rowHeight:n.rowHeight,deferredMeasurementCache:n,rowRenderer:s})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,p.jsx)(S.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,p.jsx)(j,{errors:a})})},L=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,p.jsx)(S.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,p.jsx)("p",{children:"Are you sure you want to submit?"})})};var D=o(9379),M=o(4196);const k=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,p.jsxs)(M.A,{bordered:!0,className:"table-light",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,p.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,p.jsx)("tbody",{children:t.map(((e,t)=>{const{header:n,currentMapping:s,defaultLabel:r,disabled:l}=e,i=a(n);return(0,p.jsxs)("tr",{className:l?"disabled-row":"",children:[(0,p.jsx)("td",{className:l?"disabled-cell":"",children:n}),(0,p.jsx)("td",{className:"dropdown-cell ".concat(l?"disabled-dropdown":""),children:(0,p.jsx)("div",{className:"dropdown-wrapper",children:(0,p.jsx)(w,{index:t,selectedValue:(null===s||void 0===s?void 0:s.uiLabel)||n,onChange:(e,t)=>o(n,t),size:"lg",className:"w-100 ".concat(l?"custom-select-disabled":""),disabled:l,options:{defaultLabel:r,list:i}})})})]},t)}))})]})},T=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:a,setSelectedMappings:n,dropdownOptions:s,allNLSValues:r,operationChoice:l}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o),console.log("MappedList - Received dropdownOptions:",s),console.log("MappedList - Received operationChoice:",l),console.log("MappedList - Received allNLSValues:",r);return(0,p.jsx)(k,{columnHeaders:t.map((e=>{const t=(e=>{if(!Array.isArray(r))return console.warn("allNLSValues is not an array:",r),!1;const t=e.toLowerCase().trim(),o=r.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o})(e),n=o.includes(e);return{header:e,isMandatory:n,hasNLS:t,currentMapping:a[e],defaultLabel:t?e:"Please select from Drop Down",disabled:t&&n}})),handleSelectChange:(e,t)=>{console.log("Selection changed for column:",e,"to value:",t);const a=(e=>{if(console.log("Finding backend name for UI label:",e),console.log("Current dropdown options:",s),!s||!Array.isArray(s)||0===s.length)return console.warn("No dropdown options available"),e;const t=s.find((t=>t.uiLabel===e));return console.log("Found option:",t),t?t.backendName:e})(t);console.log("Mapped backend name:",a),n((n=>(0,D.A)((0,D.A)({},n),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:a,dropdownOptions:e=>(e=>{if(console.log("Preparing dropdown options for column:",e),!s||!Array.isArray(s)||0===s.length)return console.warn("No dropdown options available for filtering"),[];const t=Object.entries(a).filter((t=>{let[o]=t;return o!==e})).map((e=>{let[t,o]=e;return o.uiLabel||o.mappedAttribute}));return s.filter((e=>!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})))})(e)})},E=e=>{let{show:t,onHide:o,columnHeaders:n,mandatoryAttributes:s,onColumnsMapped:r,existingMappings:l={},dropdownOptions:i,allNLSValues:c,operationChoice:d}=e;const[u,m]=(0,a.useState)(l);(0,a.useEffect)((()=>{t&&Object.keys(l).length>0&&m(l)}),[t,l]),console.log("ColumnMappingModal NLS values:",c);console.log("ColumnMappingModal - received dropdownOptions:",i),console.log("ColumnMappingModal - operation choice:",d);const h=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,p.jsxs)(S.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",u);const e={},t=(0,D.A)({},l),a={"EIN Number":"PartNumber"};n.forEach((o=>{if(u[o]){const a=u[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):(e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:s.includes(o),autoMapped:!1},t[o]=a)}else if(l[o]){const a=l[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:s.includes(o),autoMapped:!0}}else{const n=(e=>{if(!Array.isArray(c))return!1;const t=e.toLowerCase().trim();return c.some((e=>e.toLowerCase().trim()===t))})(o),r=a[o],l=s.includes(o);if(n||r||l){const n=r?a[o]:(e=>{const t=e.toLowerCase().trim(),o=i.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:n,isMandatory:l,autoMapped:!0},t[o]=n}else t[o]=o,e[o]={columnName:o,uiLabel:o,mappedAttribute:o,isMandatory:!1,autoMapped:!1}}}));const d={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",d),console.log("Simplified Mappings for Backend:",t),console.groupEnd(),r&&r(t,d),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>m({})}],children:[(0,p.jsx)(C,{variant:"info",message:h,className:"mapped-popup-alert"}),(0,p.jsx)(T,{columnHeaders:n,mandatoryAttributes:s,selectedMappings:u,setSelectedMappings:m,dropdownOptions:i,allNLSValues:c,operationChoice:d})]})};var O=o(3862),R=o(2268),I=o(6047);const F=e=>{const{showErrorToast:t}=(0,u.A)(),[o,n]=(0,a.useState)([]),[s,r]=(0,a.useState)(e),l="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",i=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{var o,a,i,c,d;const u=e||s;if(console.log("Fetching column mapping for operation:",u),!u)return void console.log("No operation specified, skipping fetch");e&&e!==s&&r(e),console.log("Fetching column mapping...");const p=await(0,R.I)();if(!p)return void t(h.rK);const m=await(0,I.ui)("GET","".concat(l,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",p);if(!m||!m.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",m.output.member);const g=null===(o=m.output)||void 0===o||null===(a=o.member)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.id;if(!g)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",g);const b=await(0,I.ui)("POST","".concat(l,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[g]},p);if(!b||!b.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",b.output);const f=(null===(c=b.output.results)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.groupData)||[];console.log("Full Group Data (with all NLS values):",f.map((e=>e.nls)));const y=[{name:"description",nls:"Description",groupNLS:"System Attributes"},{name:"Part Number",nls:"EIN Number",groupNLS:"System Attributes"},{name:"type",nls:"Type",groupNLS:"System Attributes"},{name:"title",nls:"Title",groupNLS:"System Attributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"System Attributes"}],v=f.map((e=>e.groupNLS));console.log("Attribute Groups:",v);const w=f.map((e=>e.nls));console.log("API NLS Values:",w);const N=y.map((e=>e.nls));console.log("System NLS Values:",N);const S=[...new Set([...w,...N])];console.log("all nls value with Hardcode :",S);const A=f.filter((e=>"System Attributes"!==e.groupNLS));console.log("Filtered out API system attributes:",f.length-A.length,"items removed");const x=[...A,...y].filter((e=>!0===e.deploymentExtension||e.groupNLS&&""!==e.groupNLS.trim()))||[];console.log("Non-system attributes from API:",x.length);const C=x.map((e=>({uiLabel:e.nls,backendName:e.name||e.backendName,group:e.groupNLS||"General"}))),j=C.filter((e=>"System Attributes"!==e.group));console.log("Mapped Attributes (total):",C),console.log("Dropdown Options (excluding System Attributes):",j);const P={};v.forEach((e=>{P[e]=C.filter((t=>t.group===e))})),console.log("Mapped Attributes:",C),console.log("All available NLS values:",S),console.log("Mapped Attributes (for dropdown) excluding System Attributes:",j),console.log("Attributes By Group:",P),console.log("System Attributes found:",x.filter((e=>"System Attributes"===e.groupNLS)).length),console.log("Sample System Attribute:",x.find((e=>"System Attributes"===e.groupNLS))),n({allNLSValues:S,dropdownOptions:j,mappedData:C,attributesByGroup:P,groups:v})}catch(u){console.error("Error fetching column mapping:",u),t(u.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{s&&i()}),[s]),{mappedAttributes:o,refreshMapping:i}},H=e=>{const{showErrorToast:t}=(0,u.A)(),[o,n]=(0,a.useState)(null),[s,r]=(0,a.useState)({allNLSValues:[],dropdownOptions:[],mappedData:[]}),[l,i]=(0,a.useState)(e),c="".concat("https://oi000186152-us1-space.3dexperience.3ds.com/enovia","/resources/v1/collabServices/authoring/createContent/typeInfo?tenant=OI000186152&xrequestedwith=xmlhttprequest"),d=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const o=e||l;if("3"===o){e&&e!==l&&i(e);try{var a;console.log("Fetching document data for operation type:",o);const e=await(0,R.I)();if(!e)return console.error("Failed to fetch CSRF headers."),void t(h.rK);const s={type:"Document",preferedType:"Document",typeName:"Document",subTypes:!0,runUXBL:!0,metrics:{UXName:"New",client_app_domain:"3DEXPERIENCE 3DDashboard",client_app_name:"ENXWDOC_AP"}},l=await(0,I.ui)("POST",c,s,e);if(console.log("API Response for Document template:",l),!0!==l.status)return console.error("Invalid API response structure:",l),void t("Failed to fetch document data. Invalid response structure.");const i=l.output.result[0];console.log("Full documentInfo structure:",JSON.stringify(i,null,2));const d=(null===i||void 0===i?void 0:i.extensionAttributes)||(null===i||void 0===i||null===(a=i.attributes)||void 0===a?void 0:a.extensionAttributes)||[];console.log("Found extensionAttributes:",d);const u=[{name:"description",nls:"Description",groupNLS:"DocumentsAttributes"},{name:"name",nls:"Document Name",groupNLS:"DocumentsAttributes"},{name:"type",nls:"Documentg Type",groupNLS:"DocumentsAttributes"},{name:"title",nls:"Title",groupNLS:"DocumentsAttributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"DocumentsAttributes"}];if(d&&d.length>0){const e=d.map((e=>e.nls));console.log("API NLS Values:",e);const t=u.map((e=>e.nls));console.log("Hardcoded NLS Values:",t);const o=[...new Set([...e,...t])];console.log("Document Operation - All Combined NLS Values:",o);const a=d.map((e=>{const t=e.name,o=t.split("."),a=o.length>1?o[1]:t;return{uiLabel:e.nls,backendName:a,fullName:e.name,group:"API Attributes"}})),n=u.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS}))),s=[...a,...n];console.log("Document Operation - API Dropdown Options:",a),console.log("Document Operation - Combined Mapped Data:",s),r({allNLSValues:o,dropdownOptions:a,mappedData:s})}else{const e=u.map((e=>e.nls)),t=u.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS})));r({allNLSValues:e,dropdownOptions:[],mappedData:t})}n(i)}catch(s){console.error("Error fetching document data:",s),t(s.message||"Error fetching document data.")}}else console.log("Not document operation type, skipping fetch")};return(0,a.useEffect)((()=>{"3"===l&&d()}),[l]),{mappedAttributes:s,refreshMapping:d}},V={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},_=(e,t,o,a)=>{if(e.length>0&&(console.log("Actual column names in sheet data:",Object.keys(e[0])),console.log("Sample row values:",e[0]),console.log("Column mappings applied:",t)),!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const n=(null===a||void 0===a?void 0:a.mappedData)||[];console.log("Mapped attributes data in mass upload:",a),console.log("Mapped data in massupload:",a.mappedData),console.log("Full mapped attributes structure:",a);const s={};Array.isArray(n)&&n.forEach((e=>{s[e.backendName]=e.group||"System",e.fullName&&(s["fullName:".concat(e.backendName)]=e.fullName),console.log("Mapping ".concat(e.backendName," to group ").concat(e.group||"System"))})),console.log("Backend name mapping for title:",n.find((e=>"title"===e.backendName))),console.log("Backend name mapping for description:",n.find((e=>"description"===e.backendName))),console.log("Backend name mapping for collabspaceTitle:",n.find((e=>"collabspaceTitle"===e.backendName)));const r=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{var r;let[l,i]=e;if(!t[l])return;const c=t[l],d={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type"}[c]||(null===(r=n.find((e=>e.uiLabel===c)))||void 0===r?void 0:r.backendName)||c,u=((e,t)=>{if("3"===o){if("title"===e||"type"===e||"collabspaceTitle"===e)return e;const t=s["fullName:".concat(e)];if(t)return"attributes.".concat(t);if("description"===e)return"attributes.description";const o=s[e];return"DocumentsAttributes"===o?"attributes.".concat(e):"API Attributes"===o?"attributes.XP_Document_Ext.".concat(e):"attributes.".concat(e)}if("title"===e||"type"===e||"classificationType"===e||"collabspaceTitle"===e)return"collabspaceTitle"===e?(console.log("collabspaceTitle mapped to root collabspace"),"collabspaceTitle"):(console.log("".concat(e," placed at root level")),e);if("EIN Number"===t||"PartNumber"===e||"Part Number"===e)return console.log("EIN Number mapped to attributes.dseng:EnterpriseReference.partNumber"),"attributes.dseng:EnterpriseReference.partNumber";if("description"===e)return console.log("Description mapped to attributes.description"),"attributes.description";const a=s[e];return console.log("Attribute: ".concat(e,", Group: ").concat(a||"unknown")),a?"System Attributes"===a?"attributes.".concat(e):"attributes.dseno:EnterpriseAttributes.".concat(e):(console.log("Skipping attribute with unknown group: ".concat(e)),null)})(d,l);if("title"!==d&&"description"!==d&&"collabspace"!==d.toLowerCase()||console.log("Placing ".concat(d," at path: ").concat(u)),!u)return;const p=u.split(".");let m=a;for(let t=0;t<p.length-1;t++){const e=p[t];m[e]||(m[e]={}),m=m[e]}m[p[p.length-1]]=i})),"1"===o){const t=Object.keys(e).find((e=>e.toLowerCase().includes("physical product")||e.toLowerCase().includes("raw material")));if(t&&e[t]){const o=e[t].toLowerCase().trim();a.type=o.includes("physical product")?"VPMReference":o.includes("raw material")?"Raw_Material":"",console.log("Product type determined: ".concat(a.type," from value: ").concat(e[t]))}}return"3"!==o||a.type||(a.type="Document",a.attributes||(a.attributes={}),a.attributes.hasOwnProperty("XP_Document_Ext.documentType")||(a.attributes["XP_Document_Ext.documentType"]="Drawing")),a}));r.length>0&&console.log("Sample transformed item structure:",JSON.stringify(r[0],null,2));const l=[];for(let i=0;i<r.length;i+=1e3)l.push(r.slice(i,i+1e3));return{chunks:l,totalChunks:l.length,totalItems:r.length,originalData:e,mappings:t}},U=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:n=[]}=o||{},s={},r={},l={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type","EIN Number":"Part Number"},i={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),c=i[e],d=t.includes(e);if(c){const t=i[e];s[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d||!1,autoMapped:!0,isSpecial:!0},r[e]=t}else if(o||d){const t=(e=>{if(l[e])return l[e];const t=e.toLowerCase().trim(),o=Object.keys(l).find((e=>e.toLowerCase()===t));if(o)return l[o];const a=n.find((e=>e.uiLabel.toLowerCase().trim()===t));return a?a.backendName:e})(e);s[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d,autoMapped:!0},r[e]=t}})),{completeMappings:s,simplifiedMappings:r,totalColumns:Object.keys(s).length}},B=()=>{const[e,t]=(0,a.useState)([]),[o,n]=(0,a.useState)(!1),[s,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1),{showErrorToast:v,showSuccessToast:S}=(0,u.A)(),[A,x]=(0,a.useState)(!1),[C,j]=(0,a.useState)(""),[D,M]=(0,a.useState)([]),[k,T]=(0,a.useState)([]),[R,I]=(0,a.useState)([]),B=(0,a.useRef)(),[q,X]=(0,a.useState)(null),{mappedAttributes:z,refreshMapping:G}=F(),{mappedAttributes:W,refreshMapping:Q}=H(C),J=()=>{switch(console.log("Getting active data for operation:",C),C){case"1":case"2":case"4":default:return{mappedAttributes:z,refreshMapping:G};case"3":return{mappedAttributes:W,refreshMapping:Q}}},{mappedAttributes:K,refreshMapping:Y}=J();console.log("Active operation:",C),console.log("Active mappedAttributes:",K);const $=async e=>{try{console.log("Refreshing data for operation:",e);const{refreshMapping:t}=J();await t(e)}catch(t){console.error("Error refreshing data:",t)}};(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",N.oX),Array.isArray(N.oX)?t([...N.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",N.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]),console.log("widget window",window.widget);const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n(!1),r(!1),d(!1),f(!1),x(!1),j(""),M([]),T([]),I([]),X(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||S("Widget reset successfully!")},ee=0===k.length||D.length>0,te=0===k.length;console.log("Errors in Massupload.jsx:",D);const oe=!C;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,p.jsxs)(i.A,{direction:"horizontal",children:[(0,p.jsx)(w,{selectedValue:C,onChange:e=>{console.log("Operation selected:",e),j(e),$(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,p.jsx)("div",{className:"ms-auto",children:(0,p.jsx)(c.A,{variant:"link",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(h._2)}window.open(o,"_blank")})(v)(C)},text:"Download Template"})})]}),(0,p.jsx)("div",{className:oe?"opacity-50":"",children:(0,p.jsx)(m,{ref:B,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{x(!0),console.log("Starting file validation..."),console.log("Selected Operation:",C),console.log("File:",t[0].name);const o=await y(t[0],e,C),{headers:a=[],validationErrors:n=[],mandatoryAttributes:s=[],sheetData:l=[]}=o;T(a),I(s),l.length>0&&(console.log("Sheet Data ",l),X({originalData:l}),await $(C),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",K),K&&Object.keys(K).length>0){const{simplifiedMappings:e}=U(a,s,K);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=_(l,e,C,K);X(t),S("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)),0===n.length?(M([]),S("File validated successfully!")):(M(n),r(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:n=!1}=o;if(n)return v("The template uploaded and the selected operation do not match"),Z(!0),void(B.current&&B.current.handleClearFiles());M(e),T(t),I(a),r(!0)}finally{x(!1)}},onReset:Z,disabled:oe,message:oe?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),A&&(0,p.jsx)(g.A,{}),(0,p.jsx)(i.A,{direction:"horizontal",gap:2,children:(0,p.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[D.length>0&&(0,p.jsx)(c.A,{variant:"danger",onClick:()=>d(!0),text:"Content Errors (".concat(D.length,")")}),(0,p.jsx)(c.A,{variant:te?"secondary":"info",onClick:()=>{d(!1),f(!0)},text:"Manage Spreadsheet Columns",disabled:te}),(0,p.jsx)(c.A,{variant:ee?"secondary":"primary",disabled:ee,size:"lg",onClick:()=>n(!0),text:"Submit"})]})})]}),(0,p.jsx)(P,{show:l,onHide:()=>d(!1),errors:D}),(0,p.jsx)(L,{show:o,onHide:()=>n(!1),onConfirm:async()=>{try{if(!q)return void v("No data to submit");const t=V[C];if(!t)return void v("Invalid operation type");const{chunks:o,totalChunks:a}=q;let s=0,r=0;S("Starting upload of ".concat(a," chunks..."));for(let n=0;n<o.length;n++)try{const e=o[n];200===(await O.A.post(t,{items:e})).status&&(s++,n%5===0&&S("Processed ".concat(n+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(n+1," failed:"),e),r++}const l="Upload complete: ".concat(s," chunks successful, ").concat(r," failed");r>0?v(l):(S("Upload successful!"),n(!1),Z())}catch(e){console.error("Upload error:",e),v("Upload failed: ".concat(e.message))}}}),(0,p.jsx)(E,{show:b,onHide:()=>f(!1),columnHeaders:k,mandatoryAttributes:R,existingMappings:null!==q&&void 0!==q&&q.mappings?q.mappings:{},dropdownOptions:null===K||void 0===K?void 0:K.dropdownOptions,allNLSValues:null===K||void 0===K?void 0:K.allNLSValues,operationChoice:C,onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(q&&q.originalData){const t=_(q.originalData,o,C,K);X(t),S("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else v("No sheet data available to transform with mappings")}})]})};let q=null;function X(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),q||(q=n.createRoot(o)),q.render((0,p.jsxs)(s.Kq,{store:r.A,children:[(0,p.jsx)(B,{}),(0,p.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>n});var a=o(6047);const n=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",n=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),s=n.csrf.name,r=n.csrf.value,l="SecurityContext",i=e;return{[s]:r,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=364.927a0187.chunk.js.map