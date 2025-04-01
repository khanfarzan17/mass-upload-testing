"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[364],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),n=(o(5043),o(4282)),r=o(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:m,imageSrc:h}=e,g=(0,s.A)(e,l);return(0,r.jsxs)(n.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:p},g),{},{children:[h&&(0,r.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>r});o(5043);var a=o(4104),s=o(4282),n=o(579);const r=e=>{let{show:t,onHide:o,title:r,children:l,footerButtons:i}=e;return(0,n.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,n.jsx)(a.A.Header,{closeButton:!0,children:(0,n.jsx)(a.A.Title,{children:r||"Modal Title"})}),(0,n.jsx)(a.A.Body,{children:l}),(0,n.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,n.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,n.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(9379),s=o(45),n=o(2115);const r=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:o="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:h="light",transition:g=n.br}=e,b=(0,s.A)(e,r);(n.oR[o]||n.oR)(t,(0,a.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:m,theme:h,transition:g},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},3364:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var a=o(5043),s=o(4391),n=(o(2342),o(9555),o(3003)),r=o(2670),l=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),p=o(2725),m=o(579);const h=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:n,onReset:r,disabled:l=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:h}=(0,p.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),n&&n([]),r&&r(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(l?"disabled":""),children:[(0,m.jsx)("h2",{children:l?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),n&&n(t)},name:"file",types:o,disabled:l,hoverTitle:l?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:l?"not-allowed":"pointer",color:"red",opacity:l?.5:1},disabled:l,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var g=o(3277);var b=o(6713),f=o(1238);const y=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),v=(e,t,o)=>new Promise(((a,s)=>{var n,r;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const l={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(n=y.o[l])||void 0===n?void 0:n.fileHeaders)||[],c=(null===(r=y.o[l])||void 0===r?void 0:r.mandatoryAttributes)||[];if(!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=f.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),n=o.SheetNames[0],r=o.Sheets[n],d=f.Wp.sheet_to_json(r,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void s({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=f.Wp.sheet_to_json(r,{header:1})[0]||[];if(!u||0===u.length)return void s({errors:["The uploaded file has no content or is empty."],headers:[]});const p=f.Wp.sheet_to_json(r,{defval:""});if(0===p.length)return void s({errors:["The uploaded file contains headers but no data rows."],headers:u});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),h=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let b={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};const y=t.map((e=>e.toLowerCase()));for(let t=0;t<m.length;t++){const e=m[t],o=Math.round((t+1)/m.length*100);e.forEach(((e,o)=>{const a=1e3*t+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(b.mandatory++,h.push("Row ".concat(a+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===l||"Document"===l){var s;const t=(null===(s=e["Collaborative Space"])||void 0===s?void 0:s.trim().toLowerCase())||"";t&&y.includes(t)||(b.collabSpace++,h.push("Row ".concat(a+2,': "').concat(t?'You are not allowed to create in "Collaborative Space -" ('.concat(t,")"):'Collaborative Space" is Missing or Empty')))}if("Physical Product Structure"===l&&0===a){const e=p[0],t=e.Level,o=String(t).trim();console.log("Validating Level for Physical Product Structure, first row:",e,"Parsed Level:",o),(""===o||"0"!==o&&0!==Number(o))&&(h.push("Row ".concat(a+2,': "Level" value "').concat(t,'"  The first entry in the file should be a level 0 object.')),console.log("Level validation failed - first row Level is not 0:",t))}let n=null,r="";var i;if("Physical Product"===l||"Physical Product Structure"===l)r="EIN Number",n=(null===(i=e[r])||void 0===i?void 0:i.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.einPrefix++,h.push("Row ".concat(a+2,': "EIN Number" value "').concat(n,'" has an invalid prefix.')));else if("Physical Product-Document"===l||"Document"===l){var d;r="Document Name",n=(null===(d=e[r])||void 0===d?void 0:d.toString().trim())||null,n&&g.some((e=>n.startsWith(e)))&&(b.docPrefix++,h.push("Row ".concat(a+2,': "Document Name" value "').concat(n,'" has an invalid prefix.')))}if("Physical Product Structure"===l){var u;r="Quantity";const t=null===(u=e[r])||void 0===u?void 0:u.toString().trim();if(t){const e=Number(t);(isNaN(e)||e<=0)&&(h.push("Row ".concat(a+2,': "Quantity" value "').concat(t,'" Quantity should not be 0 or -ve.')),console.log("Quantity validation failed - Quantity is 0 or -ve:",t))}}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(t+1),totalRows:p.length,currentErrors:{mandatory:b.mandatory,collaborativeSpace:b.collabSpace,einPrefix:b.einPrefix,documentPrefix:b.docPrefix,total:h.length}})}if(h.length>0)return console.log("\u274c Validation completed with errors:",{total:h.length,byType:b}),void s({errors:h,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:p,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error(" Error reading file"),s({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}})),w=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:n,className:r}=e;return(0,m.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:n,className:r,children:[(0,m.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]})};var N=o(314),x=o(6313),S=o(7348),A=o(4005);const C=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,m.jsx)(A.A,{variant:t,className:s,children:o}):null},j=e=>{let{errors:t}=e;const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),s=t.split(": ").slice(1).join(": "),n=o?o[1]:"N/A",r=a?a[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[n]||(e[n]={rowNumber:n,columns:[],errors:[]}),e[n].columns.push(r),e[n].errors.push(s||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),s=new S.jS({fixedWidth:!0,defaultHeight:50}),n=e=>{let{key:t,index:a,style:n,parent:r}=e;const l=o[a];return(0,m.jsx)(S.dl,{cache:s,columnIndex:0,rowIndex:a,parent:r,children:(0,m.jsxs)("div",{style:n,className:"table-row",children:[(0,m.jsx)("div",{className:"table-cell",style:{width:"15%"},children:l.rowNumber}),(0,m.jsx)("div",{className:"table-cell",style:{width:"25%"},children:l.columns.map(((e,t)=>(0,m.jsx)("div",{children:e},t)))}),(0,m.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,m.jsx)("ul",{className:"error-list",children:l.errors.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})})]})},t)};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(C,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsxs)("div",{className:"table-wrapper",children:[(0,m.jsxs)("div",{className:"static-header",children:[(0,m.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(S.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsx)(S.B8,{width:a,height:t,rowCount:o.length,rowHeight:s.rowHeight,deferredMeasurementCache:s,rowRenderer:n})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,m.jsx)(x.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(j,{errors:a})})},D=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(x.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var k=o(9379),L=o(4196);const M=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,m.jsxs)(L.A,{bordered:!0,className:"table-light",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const{header:s,currentMapping:n,defaultLabel:r,disabled:l}=e,i=a(s);return(0,m.jsxs)("tr",{className:l?"disabled-row":"",children:[(0,m.jsx)("td",{className:l?"disabled-cell":"",children:s}),(0,m.jsx)("td",{className:"dropdown-cell ".concat(l?"disabled-dropdown":""),children:(0,m.jsx)("div",{className:"dropdown-wrapper",children:(0,m.jsx)(w,{index:t,selectedValue:(null===n||void 0===n?void 0:n.uiLabel)||s,onChange:(e,t)=>o(s,t),size:"lg",className:"w-100 ".concat(l?"custom-select-disabled":""),disabled:l,options:{defaultLabel:r,list:i}})})})]},t)}))})]})};var T=o(2268),E=o(6047);const O=()=>{const{showErrorToast:e}=(0,p.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",n=async()=>{try{var t,a,n,r,l;console.log("Fetching column mapping...");const i=await(0,T.I)();if(!i)return void e(g.rK);const c=await(0,E.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",i);if(!c||!c.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",c.output.member);const d=null===(t=c.output)||void 0===t||null===(a=t.member)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.id;if(!d)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",d);const u=await(0,E.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[d]},i);if(!u||!u.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",u.output);const p=(null===(r=u.output.results)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.groupData)||[];console.log("Full Group Data (with all NLS values):",p.map((e=>e.nls)));const m=[{name:"description",nls:"Description",groupNLS:"System Attributes"},{name:"Part Number",nls:"EIN Number",groupNLS:"System Attributes"},{name:"type",nls:"Type",groupNLS:"System Attributes"},{name:"title",nls:"Title",groupNLS:"System Attributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"System Attributes"}],h=p.map((e=>e.groupNLS));console.log("Attribute Groups:",h);const b=p.map((e=>e.nls));console.log("API NLS Values:",b);const f=m.map((e=>e.nls));console.log("System NLS Values:",f);const y=[...new Set([...b,...f])];console.log("all nls value with Hardcode :",y);const v=p.filter((e=>"System Attributes"!==e.groupNLS));console.log("Filtered out API system attributes:",p.length-v.length,"items removed");const w=[...v,...m].filter((e=>!0===e.deploymentExtension||e.groupNLS&&""!==e.groupNLS.trim()))||[];console.log("Non-system attributes from API:",w.length);const N=w.map((e=>({uiLabel:e.nls,backendName:e.name||e.backendName,group:e.groupNLS||"General"}))),x=N.filter((e=>"System Attributes"!==e.group));console.log("Mapped Attributes (total):",N),console.log("Dropdown Options (excluding System Attributes):",x);const S={};h.forEach((e=>{S[e]=N.filter((t=>t.group===e))})),console.log("Mapped Attributes:",N),console.log("All available NLS values:",y),console.log("Mapped Attributes (for dropdown) excluding System Attributes:",x),console.log("Attributes By Group:",S),console.log("System Attributes found:",w.filter((e=>"System Attributes"===e.groupNLS)).length),console.log("Sample System Attribute:",w.find((e=>"System Attributes"===e.groupNLS))),o({allNLSValues:y,dropdownOptions:x,mappedData:N,attributesByGroup:S,groups:h})}catch(i){console.error("Error fetching column mapping:",i),e(i.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{n()}),[]),{mappedAttributes:t,refreshMapping:n}},R=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:s,setSelectedMappings:n,dropdownOptions:r,operationChoice:l}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o),console.log("MappedList - Received dropdownOptions:",r),console.log("MappedList - Received operationChoice:",l);const{mappedAttributes:i}=O(),{allNLSValues:c=[],dropdownOptions:d=[]}=i||{};(0,a.useEffect)((()=>{i&&Object.keys(i).length>0&&console.log("Mapped Attributes updated:",i)}),[i]);return(0,m.jsx)(M,{columnHeaders:t.map((e=>{const t=(e=>{if(!Array.isArray(c))return console.warn("allNLSValues is not an array:",c),!1;const t=e.toLowerCase().trim(),o=c.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o})(e),a=o.includes(e);return{header:e,isMandatory:a,hasNLS:t,currentMapping:s[e],defaultLabel:t?e:"Please select from Drop Down",disabled:t&&a}})),handleSelectChange:(e,t)=>{console.log("Selection changed for column:",e,"to value:",t);const a=(e=>{if(console.log("Finding backend name for UI label:",e),console.log("Current dropdown options:",r),!r||!Array.isArray(r)||0===r.length)return console.warn("No dropdown options available"),e;const t=r.find((t=>t.uiLabel===e));return console.log("Found option:",t),t?t.backendName:e})(t);console.log("Mapped backend name:",a),n((s=>(0,k.A)((0,k.A)({},s),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:s,dropdownOptions:e=>(e=>{if(console.log("Preparing dropdown options for column:",e),!r||!Array.isArray(r)||0===r.length)return console.warn("No dropdown options available for filtering"),[];const t=Object.entries(s).filter((t=>{let[o]=t;return o!==e})).map((e=>{let[t,o]=e;return o.uiLabel||o.mappedAttribute}));console.log("Currently selected values:",t);const o=r.filter((e=>!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})));return console.log("Filtered dropdown options:",o),o})(e)})},I=e=>{let{show:t,onHide:o,columnHeaders:s,mandatoryAttributes:n,onColumnsMapped:r,existingMappings:l={},dropdownOptions:i,operationChoice:c}=e;const[d,u]=(0,a.useState)(l),{mappedAttributes:p}=O();(0,a.useEffect)((()=>{t&&Object.keys(l).length>0&&u(l)}),[t,l]);console.log("ColumnMappingModal - received dropdownOptions:",i),console.log("ColumnMappingModal - operation choice:",c);const h=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(x.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",d);const e={},t=(0,k.A)({},l),{allNLSValues:a=[],dropdownOptions:i=[]}=p||{},c={"EIN Number":"PartNumber"};s.forEach((o=>{if(d[o]){const a=d[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):(e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:n.includes(o),autoMapped:!1},t[o]=a)}else if(l[o]){const a=l[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:n.includes(o),autoMapped:!0}}else{const s=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(o),r=c[o],l=n.includes(o);if(s||r||l){const a=r?c[o]:(e=>{const t=e.toLowerCase().trim(),o=i.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:l,autoMapped:!0},t[o]=a}else t[o]=o,e[o]={columnName:o,uiLabel:o,mappedAttribute:o,isMandatory:!1,autoMapped:!1}}}));const u={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",u),console.log("Simplified Mappings for Backend:",t),console.groupEnd(),r&&r(t,u),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>u({})}],children:[(0,m.jsx)(C,{variant:"info",message:h,className:"mapped-popup-alert"}),(0,m.jsx)(R,{columnHeaders:s,mandatoryAttributes:n,selectedMappings:d,setSelectedMappings:u,dropdownOptions:i,operationChoice:c})]})};var F=o(3862);const H=e=>{const{showErrorToast:t}=(0,p.A)(),[o,s]=(0,a.useState)(null),[n,r]=(0,a.useState)([]),l="".concat("https://oi000186152-us1-space.3dexperience.3ds.com/enovia","/resources/v1/collabServices/authoring/createContent/typeInfo?tenant=OI000186152&xrequestedwith=xmlhttprequest"),i=async()=>{if("3"===e)try{var o;console.log("Fetching document data for operation type:",e);const a=await(0,T.I)();if(!a)return console.error("Failed to fetch CSRF headers."),void t(g.rK);const n={type:"Document",preferedType:"Document",typeName:"Document",subTypes:!0,runUXBL:!0,metrics:{UXName:"New",client_app_domain:"3DEXPERIENCE 3DDashboard",client_app_name:"ENXWDOC_AP"}},i=await(0,E.ui)("POST",l,n,a);if(console.log("API Response for Document template:",i),!0!==i.status)return console.error("Invalid API response structure:",i),void t("Failed to fetch document data. Invalid response structure.");const c=i.output.result[0];console.log("Full documentInfo structure:",JSON.stringify(c,null,2));const d=(null===c||void 0===c?void 0:c.extensionAttributes)||(null===c||void 0===c||null===(o=c.attributes)||void 0===o?void 0:o.extensionAttributes)||[];if(console.log("Found extensionAttributes:",d),d&&d.length>0){const e=d.map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Document Operation - Extracted Dropdown Options:",e),r(e)}else console.warn("No extensionAttributes found in the response"),r([]);s(c)}catch(a){console.error("Error fetching document data:",a),t(a.message||"Error fetching document data.")}};return(0,a.useEffect)((()=>{i()}),[e]),{documentData:o,dropdownOptions:n,refreshData:i}},U={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},B=(e,t,o,a)=>{if(e.length>0&&(console.log("Actual column names in sheet data:",Object.keys(e[0])),console.log("Sample row values:",e[0]),console.log("Column mappings applied:",t)),!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const s=(null===a||void 0===a?void 0:a.mappedData)||[];console.log("Mapped attributes data in mass upload:",a),console.log("Mapped data in massupload:",a.mappedData),console.log("Full mapped attributes structure:",a);const n={};Array.isArray(s)&&s.forEach((e=>{n[e.backendName]=e.group||"System",console.log("Mapping ".concat(e.backendName," to group ").concat(e.group||"System"))})),console.log("Backend name mapping for title:",s.find((e=>"title"===e.backendName))),console.log("Backend name mapping for description:",s.find((e=>"description"===e.backendName))),console.log("Backend name mapping for collabspaceTitle:",s.find((e=>"collabspaceTitle"===e.backendName)));const r=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{var o;let[r,l]=e;if(!t[r])return;const i=t[r],c={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type"}[i]||(null===(o=s.find((e=>e.uiLabel===i)))||void 0===o?void 0:o.backendName)||i,d=((e,t)=>{if("title"===e||"type"===e||"classificationType"===e||"collabspaceTitle"===e)return"collabspaceTitle"===e?(console.log("collabspaceTitle mapped to root collabspace"),"collabspaceTitle"):(console.log("".concat(e," placed at root level")),e);if("EIN Number"===t||"PartNumber"===e||"Part Number"===e)return console.log("EIN Number mapped to attributes.dseng:EnterpriseReference.partNumber"),"attributes.dseng:EnterpriseReference.partNumber";if("description"===e)return console.log("Description mapped to attributes.description"),"attributes.description";const o=n[e];return console.log("Attribute: ".concat(e,", Group: ").concat(o||"unknown")),o?"System Attributes"===o?"attributes.".concat(e):"attributes.dseno:EnterpriseAttributes.".concat(e):(console.log("Skipping attribute with unknown group: ".concat(e)),null)})(c,r);if("title"!==c&&"description"!==c&&"collabspace"!==c.toLowerCase()||console.log("Placing ".concat(c," at path: ").concat(d)),!d)return;const u=d.split(".");let p=a;for(let t=0;t<u.length-1;t++){const e=u[t];p[e]||(p[e]={}),p=p[e]}p[u[u.length-1]]=l})),"1"===o){const t=Object.keys(e).find((e=>e.toLowerCase().includes("physical product")||e.toLowerCase().includes("raw material")));if(t&&e[t]){const o=e[t].toLowerCase().trim();a.type=o.includes("physical product")?"VPMReference":o.includes("raw material")?"Raw_Material":"",console.log("Product type determined: ".concat(a.type," from value: ").concat(e[t]))}}return"3"!==o||a.type||(a.type="Document"),a}));r.length>0&&console.log("Sample transformed item structure:",JSON.stringify(r[0],null,2));const l=[];for(let i=0;i<r.length;i+=1e3)l.push(r.slice(i,i+1e3));return{chunks:l,totalChunks:l.length,totalItems:r.length,originalData:e,mappings:t}},q=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:s=[]}=o||{},n={},r={},l={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type","EIN Number":"Part Number"},i={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),c=i[e],d=t.includes(e);if(c){const t=i[e];n[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d||!1,autoMapped:!0,isSpecial:!0},r[e]=t}else if(o||d){const t=(e=>{if(l[e])return l[e];const t=e.toLowerCase().trim(),o=Object.keys(l).find((e=>e.toLowerCase()===t));if(o)return l[o];const a=s.find((e=>e.uiLabel.toLowerCase().trim()===t));return a?a.backendName:e})(e);n[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:d,autoMapped:!0},r[e]=t}})),{completeMappings:n,simplifiedMappings:r,totalColumns:Object.keys(n).length}},V=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),{showErrorToast:x,showSuccessToast:S}=(0,p.A)(),[A,C]=(0,a.useState)(!1),[j,k]=(0,a.useState)(""),[L,M]=(0,a.useState)([]),[T,E]=(0,a.useState)([]),[R,V]=(0,a.useState)([]),_=(0,a.useRef)(),[z,X]=(0,a.useState)(null),{mappedAttributes:G,refreshMapping:W}=O(),{documentData:Q,dropdownOptions:J,refreshData:K}=H(j),Y="3"===j?J:null===G||void 0===G?void 0:G.dropdownOptions;console.log("Operation Choice:",j),console.log("Document Dropdown Options:",J),console.log("MassUpload Dropdown Options:",null===G||void 0===G?void 0:G.dropdownOptions),console.log("Active Dropdown Options:",Y),(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",N.oX),Array.isArray(N.oX)?t([...N.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",N.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const $=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),r(!1),u(!1),y(!1),C(!1),k(""),M([]),E([]),V([]),X(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||S("Widget reset successfully!")};(0,a.useEffect)((()=>{console.log("Operation Choice updated:",j)}),[j]);const Z=0===T.length||L.length>0,ee=0===T.length;console.log("Errors in Massupload.jsx:",L);const te=!j;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(i.A,{direction:"horizontal",children:[(0,m.jsx)(w,{selectedValue:j,onChange:e=>{console.log("Operation selected:",e),k(e),W(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"p-2 ms-auto",children:"3"===j&&(0,m.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,m.jsx)("div",{className:"p-2",children:(0,m.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(x)(j)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:te?"opacity-50":"",children:(0,m.jsx)(h,{ref:_,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{C(!0),console.log("Starting file validation..."),console.log("Selected Operation:",j),console.log("File:",t[0].name);const o=await v(t[0],e,j),{headers:a=[],validationErrors:s=[],mandatoryAttributes:n=[],sheetData:l=[]}=o;E(a),V(n),l.length>0&&(console.log("Sheet Data ",l),X({originalData:l}),await W(j),await K(j),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",G),G&&Object.keys(G).length>0){const{simplifiedMappings:e}=q(a,n,G);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=B(l,e,j,G);X(t),S("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)),0===s.length?(M([]),S("File validated successfully!")):(M(s),r(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return x("The template uploaded and the selected operation do not match"),$(!0),void(_.current&&_.current.handleClearFiles());M(e),E(t),V(a),r(!0)}finally{C(!1)}},onReset:$,disabled:te,message:te?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),A&&(0,m.jsx)(b.A,{}),(0,m.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,m.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[L.length>0&&(0,m.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(L.length,")")}),(0,m.jsx)(d.A,{variant:ee?"secondary":"info",onClick:()=>{u(!1),y(!0)},text:"Manage Spreadsheet Columns",disabled:ee}),(0,m.jsx)(d.A,{variant:Z?"secondary":"primary",disabled:Z,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,m.jsx)(P,{show:l,onHide:()=>u(!1),errors:L}),(0,m.jsx)(D,{show:o,onHide:()=>s(!1),onConfirm:async()=>{try{if(!z)return void x("No data to submit");const t=U[j];if(!t)return void x("Invalid operation type");const{chunks:o,totalChunks:a}=z;let n=0,r=0;S("Starting upload of ".concat(a," chunks..."));for(let s=0;s<o.length;s++)try{const e=o[s];200===(await F.A.post(t,{items:e})).status&&(n++,s%5===0&&S("Processed ".concat(s+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(s+1," failed:"),e),r++}const l="Upload complete: ".concat(n," chunks successful, ").concat(r," failed");r>0?x(l):(S("Upload successful!"),s(!1),$())}catch(e){console.error("Upload error:",e),x("Upload failed: ".concat(e.message))}}}),(0,m.jsx)(I,{show:f,onHide:()=>y(!1),columnHeaders:T,mandatoryAttributes:R,existingMappings:null!==z&&void 0!==z&&z.mappings?z.mappings:{},dropdownOptions:Y,operationChoice:j,onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(z&&z.originalData){const t=B(z.originalData,o,j,G);X(t),S("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else x("No sheet data available to transform with mappings")}})]})};let _=null;function z(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),_||(_=s.createRoot(o)),_.render((0,m.jsxs)(n.Kq,{store:r.A,children:[(0,m.jsx)(V,{}),(0,m.jsx)(l.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),n=s.csrf.name,r=s.csrf.value,l="SecurityContext",i=e;return{[n]:r,[l]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=364.49df4066.chunk.js.map