"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[364],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),n=o(45),s=(o(5043),o(4282)),l=o(579);const r=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:u,className:d="",title:p,text:m,imageSrc:g}=e,h=(0,n.A)(e,r);return(0,l.jsxs)(s.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:u,className:d,title:p},h),{},{children:[g&&(0,l.jsx)("img",{src:g,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>n});o(5043);var a=o(579);const n=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(4104),n=o(4282),s=o(579);const l=e=>{let{show:t,onHide:o,title:l,children:r,footerButtons:i}=e;return(0,s.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,s.jsx)(a.A.Header,{closeButton:!0,children:(0,s.jsx)(a.A.Title,{children:l||"Modal Title"})}),(0,s.jsx)(a.A.Body,{children:r}),(0,s.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,s.jsx)(n.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,s.jsx)(n.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>r});var a=o(9379),n=o(45),s=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],r=()=>{const e=e=>{let{message:t,type:o="default",position:r="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:u=!0,pauseOnHover:d=!1,pauseOnFocusLoss:p=!1,draggable:m=!0,theme:g="light",transition:h=s.br}=e,b=(0,n.A)(e,l);(s.oR[o]||s.oR)(t,(0,a.A)({position:r,autoClose:i,hideProgressBar:c,closeOnClick:u,pauseOnHover:d,draggable:m,theme:g,transition:h},b))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},3364:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var a=o(5043),n=o(4391),s=(o(2342),o(9555),o(3003)),l=o(2670),r=o(2115),i=(o(8421),o(4050),o(9959),o(9379)),c=o(2327),u=o(3728),d=o(7680),p=o(2725),m=o(579);const g=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:n=!0,onUpload:s,onReset:l,disabled:r=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,u]=(0,a.useState)([]),{showErrorToast:g}=(0,p.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u([]),s&&s([]),l&&l(e)}})));const h=()=>{t.current.handleClearFiles(!1)};return(0,m.jsxs)("div",{className:"file-upload-container ".concat(r?"disabled":""),children:[(0,m.jsx)("h2",{children:r?"Please select an operation first":"Drag & Drop Files"}),(0,m.jsxs)("div",{className:"upload-area",children:[(0,m.jsx)(d.l,{multiple:n,handleChange:e=>{const t=n?[...e]:[e];u(t),s&&s(t)},name:"file",types:o,disabled:r,hoverTitle:r?"":"Drop here"}),(0,m.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,m.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,m.jsx)("button",{onClick:h,style:{background:"none",border:"none",cursor:r?"not-allowed":"pointer",color:"red",opacity:r?.5:1},disabled:r,children:"X"})]},t))):(0,m.jsx)("p",{children:i})})]})]})}));var h=o(3277);var b=o(6713),f=o(1238);const v=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),y=(e,t,o)=>new Promise(((a,n)=>{var s,l;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const r={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(s=v.o[r])||void 0===s?void 0:s.fileHeaders)||[],c=(null===(l=v.o[r])||void 0===l?void 0:l.mandatoryAttributes)||[];if(!o)return void n({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void n({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const u=new FileReader;u.readAsBinaryString(e),u.onload=async e=>{const o=f.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),s=o.SheetNames[0],l=o.Sheets[s],u=f.Wp.sheet_to_json(l,{header:1})[0]||[];if(!i.every((e=>u.includes(e))))return console.error("\u274c Template mismatch detected!"),void n({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:u});const d=f.Wp.sheet_to_json(l,{header:1})[0]||[];if(!d||0===d.length)return void n({errors:["The uploaded file has no content or is empty."],headers:[]});const p=f.Wp.sheet_to_json(l,{defval:""});if(0===p.length)return void n({errors:["The uploaded file contains headers but no data rows."],headers:d});const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(p,1e3),g=[],h=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let b={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};const v=t.map((e=>e.toLowerCase()));for(let t=0;t<m.length;t++){const e=m[t],o=Math.round((t+1)/m.length*100);e.forEach(((e,o)=>{const a=1e3*t+o;if(c.forEach((t=>{(void 0===e[t]||null===e[t]||""===e[t].toString().trim()&&0!==e[t])&&(b.mandatory++,g.push("Row ".concat(a+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===r||"Document"===r){var n;const t=(null===(n=e["Collaborative Space"])||void 0===n?void 0:n.trim().toLowerCase())||"";t&&v.includes(t)||(b.collabSpace++,g.push("Row ".concat(a+2,': "').concat(t?'You are not allowed to create in "Collaborative Space -" ('.concat(t,")"):'Collaborative Space" is Missing or Empty')))}if("Physical Product Structure"===r&&0===a){const e=p[0],t=e.Level,o=String(t).trim();console.log("Validating Level for Physical Product Structure, first row:",e,"Parsed Level:",o),(""===o||"0"!==o&&0!==Number(o))&&(g.push("Row ".concat(a+2,': "Level" value "').concat(t,'"  The first entry in the file should be a level 0 object.')),console.log("Level validation failed - first row Level is not 0:",t))}let s=null,l="";var i;if("Physical Product"===r||"Physical Product Structure"===r)l="EIN Number",s=(null===(i=e[l])||void 0===i?void 0:i.toString().trim())||null,s&&h.some((e=>s.startsWith(e)))&&(b.einPrefix++,g.push("Row ".concat(a+2,': "EIN Number" value "').concat(s,'" has an invalid prefix.')));else if("Physical Product-Document"===r||"Document"===r){var u;l="Document Name",s=(null===(u=e[l])||void 0===u?void 0:u.toString().trim())||null,s&&h.some((e=>s.startsWith(e)))&&(b.docPrefix++,g.push("Row ".concat(a+2,': "Document Name" value "').concat(s,'" has an invalid prefix.')))}if("Physical Product Structure"===r){var d;l="Quantity";const t=null===(d=e[l])||void 0===d?void 0:d.toString().trim();if(t){const e=Number(t);(isNaN(e)||e<=0)&&(g.push("Row ".concat(a+2,': "Quantity" value "').concat(t,'" Quantity should not be 0 or -ve.')),console.log("Quantity validation failed - Quantity is 0 or -ve:",t))}}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(t+1),totalRows:p.length,currentErrors:{mandatory:b.mandatory,collaborativeSpace:b.collabSpace,einPrefix:b.einPrefix,documentPrefix:b.docPrefix,total:g.length}})}if(g.length>0)return console.log("\u274c Validation completed with errors:",{total:g.length,byType:b}),void n({errors:g,headers:d,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:d,sheetData:p,validationErrors:[],mandatoryAttributes:c})},u.onerror=()=>{console.error(" Error reading file"),n({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}}));var w=o(2691);const N=e=>{let{index:t,selectedValue:o,onChange:a,size:n,className:s,disabled:l,options:r}=e;const i=(null===r||void 0===r?void 0:r.defaultLabel)||"Please select",c=(null===r||void 0===r?void 0:r.list)||[],u=Array.isArray(c)&&c.length>0&&c[0]&&"label"in c[0]&&"options"in c[0];return(0,m.jsxs)(w.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?a(t,e.target.value):a(e.target.value)},size:n,className:s,children:[(0,m.jsx)("option",{value:"",children:i})," ",u?c.map(((e,t)=>(0,m.jsx)("optgroup",{label:e.label,children:Array.isArray(e.options)&&e.options.map(((e,o)=>(0,m.jsx)("option",{value:e.value,children:e.label},"option-".concat(t,"-").concat(o))))},"group-".concat(t)))):c.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},"option-".concat(t))))]})};var A=o(314),S=o(6313),x=o(7348),C=o(4005);const L=e=>{let{variant:t="info",message:o,show:a=!0,className:n=""}=e;return a?(0,m.jsx)(C.A,{variant:t,className:n,children:o}):null},j=e=>{let{errors:t}=e;const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),n=t.split(": ").slice(1).join(": "),s=o?o[1]:"N/A",l=a?a[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[s]||(e[s]={rowNumber:s,columns:[],errors:[]}),e[s].columns.push(l),e[s].errors.push(n||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),n=new x.jS({fixedWidth:!0,defaultHeight:50}),s=e=>{let{key:t,index:a,style:s,parent:l}=e;const r=o[a];return(0,m.jsx)(x.dl,{cache:n,columnIndex:0,rowIndex:a,parent:l,children:(0,m.jsxs)("div",{style:s,className:"table-row",children:[(0,m.jsx)("div",{className:"table-cell",style:{width:"15%"},children:r.rowNumber}),(0,m.jsx)("div",{className:"table-cell",style:{width:"25%"},children:r.columns.map(((e,t)=>(0,m.jsx)("div",{children:e},t)))}),(0,m.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,m.jsx)("ul",{className:"error-list",children:r.errors.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})})]})},t)};return(0,m.jsxs)("div",{className:"error-popup-container",children:[(0,m.jsx)(L,{variant:"danger",message:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,m.jsxs)("div",{className:"table-wrapper",children:[(0,m.jsxs)("div",{className:"static-header",children:[(0,m.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,m.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,m.jsx)("div",{className:"table-container",children:(0,m.jsx)(x.t$,{children:e=>{let{height:t,width:a}=e;return(0,m.jsx)(x.B8,{width:a,height:t,rowCount:o.length,rowHeight:n.rowHeight,deferredMeasurementCache:n,rowRenderer:s})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,m.jsx)(S.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,m.jsx)(j,{errors:a})})},M=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,m.jsx)(S.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,m.jsx)("p",{children:"Are you sure you want to submit?"})})};var D=o(4196);const E=e=>{let{columnHeaders:t,handleSelectChange:o,dropdownOptions:a=[]}=e;return(0,m.jsxs)(D.A,{bordered:!0,className:"table-light",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"header-styling",children:"Column Name"}),(0,m.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,m.jsx)("tbody",{children:t.map(((e,t)=>{const{header:n,currentMapping:s,defaultLabel:l,disabled:r}=e,i=a(n);return(0,m.jsxs)("tr",{className:r?"disabled-row":"",children:[(0,m.jsx)("td",{className:r?"disabled-cell":"",children:n}),(0,m.jsx)("td",{className:"dropdown-cell ".concat(r?"disabled-dropdown":""),children:(0,m.jsx)("div",{className:"dropdown-wrapper",children:(0,m.jsx)(N,{index:t,selectedValue:(null===s||void 0===s?void 0:s.uiLabel)||n,onChange:(e,t)=>o(n,t),size:"lg",className:"w-100 ".concat(r?"custom-select-disabled":""),disabled:r,options:{defaultLabel:l,list:i}})})})]},t)}))})]})},O=e=>{let{columnHeaders:t,mandatoryAttributes:o,selectedMappings:a,setSelectedMappings:n,dropdownOptions:s,allNLSValues:l,operationChoice:r}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o),console.log("MappedList - Received dropdownOptions:",s),console.log("MappedList - Received operationChoice:",r),console.log("MappedList - Received allNLSValues:",l);return(0,m.jsx)(E,{columnHeaders:t.map((e=>{const t=(e=>{if(!Array.isArray(l))return console.warn("allNLSValues is not an array:",l),!1;const t=e.toLowerCase().trim(),o=l.some((e=>e.toLowerCase().trim()===t));return console.log("Checking if header '".concat(e,"' matches any NLS value:"),o),o})(e),n=o.includes(e);return{header:e,isMandatory:n,hasNLS:t,currentMapping:a[e],defaultLabel:t?e:"Please select from Drop Down",disabled:t&&n}})),handleSelectChange:(e,t)=>{console.log("Selection changed for column:",e,"to value:",t);const a=(e=>{if(console.log("Finding backend name for UI label:",e),console.log("Current dropdown options:",s),!s||!Array.isArray(s)||0===s.length)return console.warn("No dropdown options available"),e;const t=s.find((t=>t.uiLabel===e));return console.log("Found option:",t),t?t.backendName:e})(t);console.log("Mapped backend name:",a),n((n=>(0,i.A)((0,i.A)({},n),{},{[e]:{columnName:e,uiLabel:t,mappedAttribute:a,isMandatory:o.includes(e)}})))},selectedMappings:a,dropdownOptions:e=>(e=>{if(console.log("Preparing dropdown options for column:",e),!s||!Array.isArray(s)||0===s.length)return console.warn("No dropdown options available for filtering"),[];const t=Object.entries(a).filter((t=>{let[o]=t;return o!==e})).map((e=>{let[t,o]=e;return o.uiLabel||o.mappedAttribute}));if("2"===r){console.log("Using grouped dropdown options for Product Structure operation");const e=[];console.log("All dropdown options:",s);const o=s.filter((e=>("EBOM Attributes"===e.group||"EBOM Attributes"===e.group)&&!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})));console.log("Filtered EBOM attributes:",o),o.length>0&&e.push({label:"EBOM Attributes",options:o});const a=s.filter((e=>"EBOM Attributes"!==e.group&&"System Attributes"!==e.group&&!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})));return console.log("Filtered Part attributes:",a),a.length>0&&e.push({label:"Item Attributes",options:a}),console.log("Final grouped dropdown options:",e),e}return s.filter((e=>!t.includes(e.uiLabel))).map((e=>({value:e.uiLabel,label:e.uiLabel})))})(e)})},k=e=>{let{show:t,onHide:o,columnHeaders:n,mandatoryAttributes:s,onColumnsMapped:l,existingMappings:r={},dropdownOptions:c,allNLSValues:u,operationChoice:d}=e;const[p,g]=(0,a.useState)(r);(0,a.useEffect)((()=>{t&&Object.keys(r).length>0&&g(r)}),[t,r]),console.log("ColumnMappingModal NLS values:",u);console.log("ColumnMappingModal - received dropdownOptions:",c),console.log("ColumnMappingModal - operation choice:",d);const h=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,m.jsxs)(S.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>{console.group("Column Mapping Results"),console.log("Raw Mappings:",p);const e={},t=(0,i.A)({},r),a={"EIN Number":"PartNumber"};n.forEach((o=>{if(p[o]){const a=p[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):(e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:s.includes(o),autoMapped:!1},t[o]=a)}else if(r[o]){const a=r[o];"object"===typeof a&&null!==a?(e[o]=a,t[o]=a.mappedAttribute):e[o]={columnName:o,uiLabel:o,mappedAttribute:a,isMandatory:s.includes(o),autoMapped:!0}}else{const n=(e=>{if(!Array.isArray(u))return!1;const t=e.toLowerCase().trim();return u.some((e=>e.toLowerCase().trim()===t))})(o),l=a[o],r=s.includes(o);if(n||l||r){const n=l?a[o]:(e=>{const t=e.toLowerCase().trim(),o=c.find((e=>e.uiLabel.toLowerCase().trim()===t));return o?o.backendName:e})(o);e[o]={columnName:o,uiLabel:o,mappedAttribute:n,isMandatory:r,autoMapped:!0},t[o]=n}else t[o]=o,e[o]={columnName:o,uiLabel:o,mappedAttribute:o,isMandatory:!1,autoMapped:!1}}}));const d={columnMappings:e,totalColumns:Object.keys(e).length};console.log("Final Mapping Object:",d),console.log("Simplified Mappings for Backend:",t),console.groupEnd(),l&&l(t,d),o()}},{label:"Cancel",variant:"danger",onClick:o},{label:"Reset",variant:"secondary",onClick:()=>g({})}],children:[(0,m.jsx)(L,{variant:"info",message:h,className:"mapped-popup-alert"}),(0,m.jsx)(O,{columnHeaders:n,mandatoryAttributes:s,selectedMappings:p,setSelectedMappings:g,dropdownOptions:c,allNLSValues:u,operationChoice:d})]})};var T=o(3862),R=o(2268),I=o(6047);const F=e=>{const{showErrorToast:t}=(0,p.A)(),[o,n]=(0,a.useState)([]),[s,l]=(0,a.useState)(e),r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia",i=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{var o,a,i,c,u;const d=e||s;if(console.log("Fetching column mapping for operation:",d),!d)return void console.log("No operation specified, skipping fetch");e&&e!==s&&l(e),console.log("Fetching column mapping...");const p=await(0,R.I)();if(!p)return void t(h.rK);const m=await(0,I.ui)("GET","".concat(r,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",p);if(!m||!m.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",m.output.member);const g=null===(o=m.output)||void 0===o||null===(a=o.member)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.id;if(!g)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",g);const b=await(0,I.ui)("POST","".concat(r,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[g]},p);if(!b||!b.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",b.output);const f=(null===(c=b.output.results)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.groupData)||[];console.log("Full Group Data (with all NLS values):",f.map((e=>e.nls)));const v=[{name:"description",nls:"Description",groupNLS:"System Attributes"},{name:"Part Number",nls:"EIN Number",groupNLS:"System Attributes"},{name:"type",nls:"Type",groupNLS:"System Attributes"},{name:"title",nls:"Title",groupNLS:"System Attributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"System Attributes"}];let y=[];"2"===d&&(y=[{name:"MBOMFindNumber__e7ead0d4e78a4d7f99e9e5fd900f8fdf",nls:"Find Number",group:"EBOM Attributes",groupNLS:"EBOM Attributes"},{name:"MBOMComponentLocation__00cc2e44830642d69dd3728d8c279a75",nls:"Component Location",group:"EBOM Attributes",groupNLS:"EBOM Attributes"},{name:"Level",nls:"Level",group:"EBOM Attributes",groupNLS:"EBOM Attributes"}]);const w=f.map((e=>e.groupNLS));console.log("Attribute Groups:",w),"2"!==d||w.includes("EBOM Attributes")||w.push("EBOM Attributes");const N=f.map((e=>e.nls));console.log("API NLS Values:",N);const A=v.map((e=>e.nls));console.log("System NLS Values:",A);let S=[];"2"===d&&(S=y.map((e=>e.nls)),console.log("EBOM NLS Values:",S));const x=[...new Set([...N,...A,...S])];console.log("all nls value with Hardcode :",x);const C=f.filter((e=>"System Attributes"!==e.groupNLS));console.log("Filtered out API system attributes:",f.length-C.length,"items removed");let L=[...C,...v];"2"===d&&(L=[...L,...y],console.log("Added EBOM attributes to merged attributes for operation 2",L));const j=L.filter((e=>!0===e.deploymentExtension||e.groupNLS&&""!==e.groupNLS.trim()||"2"===d&&"EBOM Attributes"===e.group))||[];console.log("Non-system attributes from API:",j.length);const P=j.map((e=>({uiLabel:e.nls,backendName:e.name||e.backendName,group:e.groupNLS||e.group||"General"}))),M=P.filter((e=>"System Attributes"!==e.group));console.log("Mapped Attributes (total):",P),console.log("Dropdown Options (excluding System Attributes):",M);const D={};w.forEach((e=>{D[e]=P.filter((t=>t.group===e))})),console.log("Mapped Attributes:",P),console.log("All available NLS values:",x),console.log("Mapped Attributes (for dropdown) excluding System Attributes:",M),console.log("Attributes By Group:",D),console.log("System Attributes found:",j.filter((e=>"System Attributes"===e.groupNLS)).length),console.log("Sample System Attribute:",j.find((e=>"System Attributes"===e.groupNLS))),"2"===d&&(console.log("EBOM Attributes found:",j.filter((e=>"EBOM Attributes"===e.groupNLS||"EBOM Attributes"===e.group)).length),console.log("Sample EBOM Attribute:",j.find((e=>"EBOM Attributes"===e.groupNLS||"EBOM Attributes"===e.group)))),n({allNLSValues:x,dropdownOptions:M,mappedData:P,attributesByGroup:D,groups:w})}catch(d){console.error("Error fetching column mapping:",d),t(d.message||"Error fetching column mapping.")}};return(0,a.useEffect)((()=>{s&&i()}),[s]),{mappedAttributes:o,refreshMapping:i}},B=e=>{const{showErrorToast:t}=(0,p.A)(),[o,n]=(0,a.useState)(null),[s,l]=(0,a.useState)({allNLSValues:[],dropdownOptions:[],mappedData:[]}),[r,i]=(0,a.useState)(e),c="".concat("https://oi000186152-us1-space.3dexperience.3ds.com/enovia","/resources/v1/collabServices/authoring/createContent/typeInfo?tenant=OI000186152&xrequestedwith=xmlhttprequest"),u=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const o=e||r;if("3"===o){e&&e!==r&&i(e);try{var a;console.log("Fetching document data for operation type:",o);const e=await(0,R.I)();if(!e)return console.error("Failed to fetch CSRF headers."),void t(h.rK);const s={type:"Document",preferedType:"Document",typeName:"Document",subTypes:!0,runUXBL:!0,metrics:{UXName:"New",client_app_domain:"3DEXPERIENCE 3DDashboard",client_app_name:"ENXWDOC_AP"}},r=await(0,I.ui)("POST",c,s,e);if(console.log("API Response for Document template:",r),!0!==r.status)return console.error("Invalid API response structure:",r),void t("Failed to fetch document data. Invalid response structure.");const i=r.output.result[0];console.log("Full documentInfo structure:",JSON.stringify(i,null,2));const u=(null===i||void 0===i?void 0:i.extensionAttributes)||(null===i||void 0===i||null===(a=i.attributes)||void 0===a?void 0:a.extensionAttributes)||[];console.log("Found extensionAttributes:",u);const d=[{name:"description",nls:"Description",groupNLS:"DocumentsAttributes"},{name:"name",nls:"Document Name",groupNLS:"DocumentsAttributes"},{name:"type",nls:"Documentg Type",groupNLS:"DocumentsAttributes"},{name:"title",nls:"Title",groupNLS:"DocumentsAttributes"},{name:"collabspaceTitle",nls:"Collaborative Space",groupNLS:"DocumentsAttributes"}];if(u&&u.length>0){const e=u.map((e=>e.nls));console.log("API NLS Values:",e);const t=d.map((e=>e.nls));console.log("Hardcoded NLS Values:",t);const o=[...new Set([...e,...t])];console.log("Document Operation - All Combined NLS Values:",o);const a=u.map((e=>{const t=e.name,o=t.split("."),a=o.length>1?o[1]:t;return{uiLabel:e.nls,backendName:a,fullName:e.name,group:"API Attributes"}})),n=d.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS}))),s=[...a,...n];console.log("Document Operation - API Dropdown Options:",a),console.log("Document Operation - Combined Mapped Data:",s),l({allNLSValues:o,dropdownOptions:a,mappedData:s})}else{const e=d.map((e=>e.nls)),t=d.map((e=>({uiLabel:e.nls,backendName:e.name,group:e.groupNLS})));l({allNLSValues:e,dropdownOptions:[],mappedData:t})}n(i)}catch(s){console.error("Error fetching document data:",s),t(s.message||"Error fetching document data.")}}else console.log("Not document operation type, skipping fetch")};return(0,a.useEffect)((()=>{"3"===r&&u()}),[r]),{mappedAttributes:s,refreshMapping:u}},H={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},V=(e,t,o,a)=>{if(e.length>0&&(console.log("Actual column names in sheet data:",Object.keys(e[0])),console.log("Sample row values:",e[0]),console.log("Column mappings applied:",t)),!e||!t)return console.error("Missing data or mappings for transformation"),null;console.log("Transforming sheet data with mappings:",t);const n=(null===a||void 0===a?void 0:a.mappedData)||[];if(console.log("Mapped data in Massupload:",n),"3"===o){console.log("Processing document data with operation type 3");const o=e.map((e=>{const o={},a={},s={};return Object.entries(e).forEach((e=>{let[l,r]=e;if(!t[l]||void 0===r||null===r)return;const i=t[l],c=n.find((e=>e.uiLabel===i||e.backendName===i));console.log("Processing column ".concat(l," -> ").concat(i),c),"Document Type"===i?o["Classification Type"]=r:"Collaborative Space"===i||i.toLowerCase().includes("collaborative")||i.toLowerCase().includes("collab")?o.collabspaceTitle=r:"Document Name"===i?a.name=r:c&&"API Attributes"===c.group&&c.fullName?s[c.backendName]=r:(c||i)&&(a[i]=r)})),(0,i.A)((0,i.A)({},o),{},{dataelements:a},s)}));o.length>0&&console.log("Sample document structure:",JSON.stringify(o[0],null,2));const a=1e3,s=[];for(let e=0;e<o.length;e+=a)s.push(o.slice(e,e+a));return{chunks:s,totalChunks:s.length,totalItems:o.length,originalData:e,mappings:t,isDocumentPayload:!0,documents:o}}{console.log("Processing physical product data with operation type:",o);const a={};Array.isArray(n)&&n.forEach((e=>{a[e.backendName]=e.group||"System",e.fullName&&(a["fullName:".concat(e.backendName)]=e.fullName),console.log("Mapping ".concat(e.backendName," to group ").concat(e.group||"System"))}));const s=(e,t)=>{if("title"===e||"type"===e||"classificationType"===e||"collabspaceTitle"===e)return"collabspaceTitle"===e?(console.log("collabspaceTitle mapped to root collabspace"),"collabspaceTitle"):(console.log("".concat(e," placed at root level")),e);if("EIN Number"===t||"PartNumber"===e||"Part Number"===e)return console.log("EIN Number mapped to attributes.dseng:EnterpriseReference.partNumber"),"attributes.dseng:EnterpriseReference.partNumber";if("description"===e)return console.log("Description mapped to attributes.description"),"attributes.description";const o=a[e];return console.log("Attribute: ".concat(e,", Group: ").concat(o||"unknown")),o?"System Attributes"===o?"attributes.".concat(e):"attributes.dseno:EnterpriseAttributes.".concat(e):(console.log("Skipping attribute with unknown group: ".concat(e)),null)},l=e.map((e=>{const a={};if(Object.entries(e).forEach((e=>{var o;let[l,r]=e;if(!t[l])return;const i=t[l],c={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type"}[i]||(null===(o=n.find((e=>e.uiLabel===i)))||void 0===o?void 0:o.backendName)||i,u=s(c,l);if("title"!==c&&"description"!==c&&"collabspace"!==c.toLowerCase()||console.log("Placing ".concat(c," at path: ").concat(u)),!u)return;const d=u.split(".");let p=a;for(let t=0;t<d.length-1;t++){const e=d[t];p[e]||(p[e]={}),p=p[e]}p[d[d.length-1]]=r})),"1"===o){const t=Object.keys(e).find((e=>e.toLowerCase().includes("physical product")||e.toLowerCase().includes("raw material")));if(t&&e[t]){const o=e[t].toLowerCase().trim();a.type=o.includes("physical product")?"VPMReference":o.includes("raw material")?"Raw_Material":"",console.log("Product type determined: ".concat(a.type," from value: ").concat(e[t]))}}return a}));l.length>0&&console.log("Sample transformed item structure:",JSON.stringify(l[0],null,2));const r=1e3,i=[];for(let e=0;e<l.length;e+=r)i.push(l.slice(e,e+r));return{chunks:i,totalChunks:i.length,totalItems:l.length,originalData:e,mappings:t,isDocumentPayload:!1}}},U=(e,t,o)=>{const{allNLSValues:a=[],dropdownOptions:n=[]}=o||{},s={},l={},r={Title:"title",Description:"description","Collaborative Space":"collabspaceTitle","Collab Space":"collabspaceTitle",Type:"type","EIN Number":"Part Number"},i={"EIN Number":"PartNumber"};return e.forEach((e=>{const o=(e=>{if(!Array.isArray(a))return!1;const t=e.toLowerCase().trim();return a.some((e=>e.toLowerCase().trim()===t))})(e),c=i[e],u=t.includes(e);if(c){const t=i[e];s[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:u||!1,autoMapped:!0,isSpecial:!0},l[e]=t}else if(o||u){const t=(e=>{if(r[e])return r[e];const t=e.toLowerCase().trim(),o=Object.keys(r).find((e=>e.toLowerCase()===t));if(o)return r[o];const a=n.find((e=>e.uiLabel.toLowerCase().trim()===t));return a?a.backendName:e})(e);s[e]={columnName:e,uiLabel:e,mappedAttribute:t,isMandatory:u,autoMapped:!0},l[e]=t}})),{completeMappings:s,simplifiedMappings:l,totalColumns:Object.keys(s).length}},_=()=>{const[e,t]=(0,a.useState)([]),[o,n]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),[d,f]=(0,a.useState)(!1),{showErrorToast:v,showSuccessToast:w}=(0,p.A)(),[S,x]=(0,a.useState)(!1),[C,L]=(0,a.useState)(""),[j,D]=(0,a.useState)([]),[E,O]=(0,a.useState)([]),[R,I]=(0,a.useState)([]),_=(0,a.useRef)(),[q,z]=(0,a.useState)(null),{mappedAttributes:X,refreshMapping:G}=F(),{mappedAttributes:W,refreshMapping:Q}=B(C),J=()=>{switch(console.log("Getting active data for operation:",C),C){case"1":case"2":case"4":default:return{mappedAttributes:X,refreshMapping:G};case"3":return{mappedAttributes:W,refreshMapping:Q}}},{mappedAttributes:K,refreshMapping:Y}=J();console.log("Active operation:",C),console.log("Active mappedAttributes:",K);const $=async e=>{try{console.log("Refreshing data for operation:",e);const{refreshMapping:t}=J();await t(e)}catch(t){console.error("Error refreshing data:",t)}};(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",A.oX),Array.isArray(A.oX)?t([...A.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",A.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]),console.log("widget window",window.widget);const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n(!1),l(!1),i(!1),f(!1),x(!1),L(""),D([]),O([]),I([]),z(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||w("Widget reset successfully!")},ee=0===E.length||j.length>0,te=0===E.length;console.log("Errors in Massupload.jsx:",j);const oe=!C;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"container-fluid d-flex justify-content-center",style:{minHeight:"100vh"},children:(0,m.jsx)("div",{className:"w-100",style:{maxWidth:"1200px",maxHeight:"500px"},children:(0,m.jsxs)(c.A,{className:"mt-3",gap:4,children:[(0,m.jsxs)(c.A,{direction:"horizontal",children:[(0,m.jsx)(N,{selectedValue:C,onChange:e=>{console.log("Operation selected:",e),L(e),$(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,m.jsx)("div",{className:"ms-auto",children:(0,m.jsx)(u.A,{variant:"link",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(h._2)}window.open(o,"_blank")})(v)(C)},text:"Download Template"})})]}),(0,m.jsx)("div",{className:oe?"opacity-50":"",children:(0,m.jsx)(g,{ref:_,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{x(!0),console.log("Starting file validation..."),console.log("Selected Operation:",C),console.log("File:",t[0].name);const o=await y(t[0],e,C),{headers:a=[],validationErrors:n=[],mandatoryAttributes:s=[],sheetData:r=[]}=o;O(a),I(s),r.length>0&&(console.log("Sheet Data ",r),z({originalData:r}),await $(C),setTimeout((()=>{if(console.log("Applying automatic column mapping with:",K),K&&Object.keys(K).length>0){const{simplifiedMappings:e}=U(a,s,K);if(console.log("Auto-generated mappings:",e),Object.keys(e).length>0){const t=V(r,e,C,K);z(t),w("Data automatically mapped with ".concat(Object.keys(e).length," columns"))}}}),500)),0===n.length?(D([]),w("File validated successfully!")):(D(n),l(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:n=!1}=o;if(n)return v("The template uploaded and the selected operation do not match"),Z(!0),void(_.current&&_.current.handleClearFiles());D(e),O(t),I(a),l(!0)}finally{x(!1)}},onReset:Z,disabled:oe,message:oe?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),S&&(0,m.jsx)(b.A,{}),(0,m.jsx)(c.A,{direction:"horizontal",gap:2,children:(0,m.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[j.length>0&&(0,m.jsx)(u.A,{variant:"danger",onClick:()=>i(!0),text:"Content Errors (".concat(j.length,")")}),(0,m.jsx)(u.A,{variant:te?"secondary":"info",onClick:()=>{i(!1),f(!0)},text:"Manage Spreadsheet Columns",disabled:te}),(0,m.jsx)(u.A,{variant:ee?"secondary":"primary",disabled:ee,size:"lg",onClick:()=>n(!0),text:"Submit"})]})})]})})}),(0,m.jsx)(P,{show:r,onHide:()=>i(!1),errors:j}),(0,m.jsx)(M,{show:o,onHide:()=>n(!1),onConfirm:async()=>{try{if(!q)return void v("No data to submit");const t=H[C];if(!t)return void v("Invalid operation type");const{chunks:o,totalChunks:a,isDocumentPayload:s,documents:l}=q;let r=0,i=0;if(w("Starting upload of ".concat(a," chunks...")),"3"===C&&s)try{const e=[];for(let t=0;t<l.length;t+=1e3)e.push(l.slice(t,t+1e3));for(let o=0;o<e.length;o++){200===(await T.A.post(t,{documents:e[o]})).status&&(r++,o%5===0&&w("Processed ".concat(o+1," of ").concat(e.length," document chunks...")))}}catch(e){console.error("Document upload failed:",e),i++}else for(let n=0;n<o.length;n++)try{const e=o[n];200===(await T.A.post(t,{items:e})).status&&(r++,n%5===0&&w("Processed ".concat(n+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(n+1," failed:"),e),i++}const c="Upload complete: ".concat(r," chunks successful, ").concat(i," failed");i>0?v(c):(w("Upload successful!"),n(!1),Z())}catch(e){console.error("Upload error:",e),v("Upload failed: ".concat(e.message))}}}),(0,m.jsx)(k,{show:d,onHide:()=>f(!1),columnHeaders:E,mandatoryAttributes:R,existingMappings:null!==q&&void 0!==q&&q.mappings?q.mappings:{},dropdownOptions:null===K||void 0===K?void 0:K.dropdownOptions,allNLSValues:null===K||void 0===K?void 0:K.allNLSValues,operationChoice:C,onColumnsMapped:(e,t)=>{console.log("Column mappings received:",e);const o=e;if(q&&q.originalData){const t=V(q.originalData,o,C,K);z(t),w("Data mapped successfully with ".concat(Object.keys(e).length," columns"))}else v("No sheet data available to transform with mappings")}})]})};let q=null;function z(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),q||(q=n.createRoot(o)),q.render((0,m.jsxs)(s.Kq,{store:l.A,children:[(0,m.jsx)(_,{}),(0,m.jsx)(r.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>n});var a=o(6047);const n=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",n=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),s=n.csrf.name,l=n.csrf.value,r="SecurityContext",i=e;return{[s]:l,[r]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=364.4be7580a.chunk.js.map