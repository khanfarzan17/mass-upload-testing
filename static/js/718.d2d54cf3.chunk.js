"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[718],{3728:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(9379),n=s(45),l=(s(5043),s(4282)),o=s(579);const r=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:s="md",type:i="button",disabled:c=!1,onClick:d,className:g="",title:u,text:m,imageSrc:h}=e,p=(0,n.A)(e,r);return(0,o.jsxs)(l.A,(0,a.A)((0,a.A)({variant:t,size:s,type:i,disabled:c,onClick:d,className:g,title:u},p),{},{children:[h&&(0,o.jsx)("img",{src:h,alt:m,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",m]}))}},4816:(e,t,s)=>{s.d(t,{A:()=>g});var a=s(5043),n=(s(8611),s(4220)),l=s(5284),o=s(3637),r=s(6047),i=s(3003),c=s(579);const d=e=>{let{data:t,isColumn:s,onDragStart:n,onDragEnd:l}=e;const o=(0,a.useRef)(null),d=(0,i.d4)((e=>e.droppedObject.droppedObjectData.initialDraggedData));return(0,a.useEffect)((()=>{o.current&&d&&(0,r.eB)(o.current,d,n,l)}),[t,d,n,l]),t?(0,c.jsxs)("div",{className:"d-flex ".concat(s?"flex-column":"flex-row"),children:[(0,c.jsx)("h5",{ref:o,className:"mb-1 text-start title ".concat(s?"":"me-2"),children:t.title}),(0,c.jsxs)("ul",{className:"list-group d-flex flex-row flex-sm-row flex-wrap justify-content-between pb-3 pb-md-0 ".concat(s?"":"w-75"),children:[(0,c.jsxs)("li",{className:"list-group-item flex-grow-1 text-start mx-0 ps-0 pb-0 ".concat(s?"":"d-flex flex-row justify-content-around"),style:{border:"0"},children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Type:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.type,children:t.type})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Owner:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.owner,children:t.owner})]}),s&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Maturity State:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Maturity State"],children:t["Maturity State"]})]})]}),s&&(0,c.jsxs)("li",{className:"list-group-item flex-grow-1 text-start mx-0 pt-0",style:{border:"0",paddingLeft:"0"},children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Dropped Revision :"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Dropped Revision"],children:t["Dropped Revision"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Latest Released Revision:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Latest Released Revision"],children:t["Latest Released Revision"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Collabspace:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Collaborative Space Title"],children:t["Collaborative Space Title"]})]})]}),(0,c.jsx)("li",{className:"list-group-item flex-grow-1 text-start mx-0 ".concat(s?"":"d-flex flex-row"),style:{border:"0",paddingLeft:"0"},children:"Document"!==t.type&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"CAD Format:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["CAD Format"],children:t["CAD Format"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"EIN:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.EIN,children:t.EIN})]})]})}),(0,c.jsx)("div",{className:"d-none d-md-flex align-items-stretch",children:(0,c.jsx)("div",{className:"vr"})}),(0,c.jsx)("div",{className:"d-flex d-md-none w-100",children:(0,c.jsx)("hr",{className:"w-100"})}),(0,c.jsx)("li",{className:"list-group-item flex-grow-1 text-start mx-0",style:{border:"0"},children:(0,c.jsx)("p",{className:"description-container",title:t.Description,children:t.Description})})]})]}):null},g=e=>{let{data:t,onDragStart:s,onDragEnd:r}=e;const[i,g]=(0,a.useState)(!0);return(0,c.jsxs)(n.A,{className:"d-flex flex-row mt-4 border-0 ",style:{width:"100%"},children:[(0,c.jsx)("div",{className:"pb-3 d-none d-md-block me-5 ms-4",children:(0,c.jsx)(n.A.Img,{className:"".concat(i?"img-thumbnail":"image-resize img-thumbnail"," "),src:t.imageURL,alt:"Card image"})}),(0,c.jsx)(l.A,{className:"".concat(i?"p-0":"p-0 layout-change"," "),children:(0,c.jsx)(d,{data:t,isColumn:i,onDragStart:s,onDragEnd:r})}),(0,c.jsx)("button",{className:"me-2 p-0 btn btn-link accordion-toggle",onClick:()=>{g(!i)},children:(0,c.jsx)(o.A,{src:"https://khanfarzan17.github.io/tedting-revision-float/images/arrow.png",alt:"downArrow",className:"rotatable ".concat(i?"rotated":"")})})]})}},759:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(5043),n=(s(4119),s(3637)),l=s(8012),o=s(579);const r=()=>{const{initializeDroppableArea:e}=(0,l.A)(),t=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{t.current||(e(),t.current=!0)}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"droppable-container mt-4",children:[(0,o.jsx)(n.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,o.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,o.jsxs)("div",{className:"divider-container",children:[(0,o.jsx)("hr",{className:"divider"}),(0,o.jsx)("span",{className:"divider-text",children:"or"}),(0,o.jsx)("hr",{className:"divider"})]})]})})};var i=s(4816);const c=e=>{let{data:t}=e;const[s,n]=(0,a.useState)(!1);return(0,o.jsxs)("div",{className:"card-with-drag-and-drop ".concat(s?"dragging":""),children:[(0,o.jsx)(r,{}),(0,o.jsx)(i.A,{data:t,onDragStart:()=>{n(!0)},onDragEnd:()=>{n(!1)}})]})}},6713:(e,t,s)=>{s.d(t,{A:()=>n});s(5043);var a=s(579);const n=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},1397:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(5043),n=s(1666),l=s(2691),o=s(4282),r=s(3910),i=s(7929),c=s(579);const d=e=>{let{onSearch:t,disabled:s}=e;const[d,g]=(0,a.useState)(""),u=(0,a.useRef)(null);return(0,c.jsxs)("div",{className:"search-content-container d-flex align-items-center",children:[(0,c.jsx)(r.g,{icon:i.$UM,onClick:()=>{d.trim()&&t(d)},className:"search-icon"}),(0,c.jsx)("span",{className:"ms-4 drag-and-drop-text flex-grow-1",children:(0,c.jsxs)(n.A,{children:[(0,c.jsx)(l.A.Control,{type:"text",ref:u,value:d,onChange:e=>{const t=e.target.value;g(t)},onKeyDown:e=>{"Enter"===e.key&&d.trim()&&t(d)},placeholder:"Search...",disabled:s}),d&&(0,c.jsx)(o.A,{variant:"btn-link",onClick:()=>{g(""),u.current.focus()},className:"clear-button",children:"\u2716"})]})})]})}},768:(e,t,s)=>{s.d(t,{A:()=>j});var a=s(9379),n=s(5043),l=s(8931),o=s(7111),r=s(3585),i=s(6800),c=s(1648),d=s(3003),g=s(3728),u=s(5645),m=s(6047),h=s(1024),p=s(579);const x=e=>{let{header:t,columns:s,table:n}=e;const o="selection"===t.column.id,r=n.getState().columnPinning.left.includes(t.column.id),i=o?"is-fixed":r?"is-pinned":"",d=(0,c.gl)({id:t.column.id,disabled:"selection"===t.column.id||"EIN"===t.column.id}),{attributes:g,listeners:u,setNodeRef:m,transform:x,isDragging:f}=o?{attributes:{},listeners:{},setNodeRef:null,transform:null,isDragging:!1}:d,v={opacity:f?.8:1,position:"sticky",top:0,left:o?0:r?"var(--pinned-left)":"auto",transform:h.Ks.Transform.toString(x),transition:"width transform 0.2s ease-in-out",width:t.getSize(),zIndex:o?5:r?4:3,cursor:o?"default":"move",backgroundColor:"#f2f2f2"};return(0,p.jsxs)("th",{ref:m,style:v,"data-fixed":o,"data-pinned":r,className:i,children:[(0,p.jsx)("div",(0,a.A)((0,a.A)({className:"d-flex align-items-center header-content"},o?{}:(0,a.A)((0,a.A)({},g),u)),{},{children:(0,p.jsxs)("div",{className:"flex-grow-1",onClick:t.column.getToggleSortingHandler(),children:[t.isPlaceholder?null:(0,l.Kv)(t.column.columnDef.header,t.getContext()),"asc"===t.column.getIsSorted()?(0,p.jsx)("span",{className:"icon",children:"\u2191"}):"desc"===t.column.getIsSorted()?(0,p.jsx)("span",{className:"icon",children:"\u2193"}):null]})})),(0,p.jsx)("div",{onDoubleClick:()=>t.column.resetSize(),onMouseDown:t.getResizeHandler(),onTouchStart:t.getResizeHandler(),className:"Resizer ".concat(t.column.getIsResizing()?"isResizing":"")})]})},f=e=>{let{cell:t,columns:s,changedCells:a}=e;const n="selection"===t.column.id,o=t.column.getIsPinned(),r=n?"is-fixed":o?"is-pinned":"",i=(0,l.Kv)(t.column.columnDef.cell,t.getContext()),d=t.column.id.split("_").slice(1).join("_")||t.column.id,g=null===a||void 0===a?void 0:a[d],u=(0,c.gl)({id:t.column.id,disabled:n}),{setNodeRef:m,transform:x,isDragging:f}=n?{setNodeRef:null,transform:null,isDragging:!1}:u,v={opacity:f?.8:1,position:n||o?"sticky":"relative",left:n?0:"auto",transform:h.Ks.Transform.toString(x),transition:"width transform 0.2s ease-in-out",width:t.column.getSize(),zIndex:n?2:f?1:o?2:0};return(0,p.jsx)("td",{ref:m,style:v,className:r,title:n?"":"".concat(t.getValue()),children:n?i:(0,p.jsxs)("div",{className:"cell-content",style:{color:g?"red":"inherit",fontWeight:g?"bold":"normal"},children:[i,(0,p.jsx)("style",{children:"\n        .cell-content select {\n          color: ".concat(g?"red":"inherit"," !important;\n          font-weight: ").concat(g?"bold":"normal"," !important;\n        }\n      ")})]})})},v=e=>(console.log("Widget Type:",e),e?"tableColumnOrder_".concat(e):(console.warn("Widget type is missing, using default key"),"tableColumnOrder_default")),j=e=>{let{columns:t,data:s,editable:h=!1,meta:j,widgetType:b}=e;const w=(0,d.wA)(),[S,y]=(0,n.useState)(s),[N,A]=(0,n.useState)({}),[C,D]=(0,n.useState)(null),R=(0,n.useRef)(null),[E,k]=(0,n.useState)(!1);if((0,n.useEffect)((()=>{const e=e=>{k(e.target.scrollTop>0)},t=R.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[]),"Revision_FLoat_Widget"!==b)var{updateTableData:I}=j;const[T,z]=(0,n.useState)((()=>{const e=v(b),s=localStorage.getItem(e);if(s)try{const e=JSON.parse(s);if(e.every((e=>"selection"===e||t.some((t=>(t.id||t.accessorKey)===e)))))return e}catch(l){console.error("Failed to parse column order for ".concat(b,":"),l)}const a=["selection"],n=t.map((e=>e.id||e.accessorKey));return a.push(...n),a}));(0,n.useEffect)((()=>{const e=v(b);localStorage.setItem(e,JSON.stringify(T))}),[T,b]),console.log("Column Order:",T);const _=(0,n.useMemo)((()=>{const e=["selection"],s=t.map((e=>e.id||e.accessorKey));return e.push(...s),e}),[t]),O=(0,n.useMemo)((()=>{const e={left:["selection","EIN "]};return t.forEach((t=>{t.columnPinning&&e.left.push(t.id||t.accessorKey)})),e}),[t]),M=(0,n.useMemo)((()=>{const e={id:"selection",header:e=>{let{table:t}=e;return(0,p.jsx)("input",{type:"checkbox",ref:e=>{e&&(e.indeterminate=t.getIsSomeRowsSelected())},checked:t.getIsAllRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()})},cell:e=>{let{row:t}=e;return(0,p.jsx)("input",{type:"checkbox",checked:t.getIsSelected(),onChange:t.getToggleSelectedHandler()})}};return[e,...h?t.map((e=>(0,a.A)((0,a.A)({},e),{},{cell:e.editable?t=>{let{row:s,getValue:n}=t;return(0,p.jsx)("input",{className:"input-cell",value:n(),onChange:t=>((e,t,s)=>{const n=S.map(((n,l)=>l===e?(0,a.A)((0,a.A)({},n),{},{[t]:s}):n));console.log("[Table] Updated Table Data:",n),null!==j&&void 0!==j&&j.updateTableData&&j.updateTableData(n),y(n)})(s.index,e.accessorKey,t.target.value)})}:e.cell}))):t]}),[t,h]),F=(0,r.FR)((0,r.MS)(r.cA,{activationConstraint:{distance:8}}),(0,r.MS)(r.IG,{activationConstraint:{delay:200,tolerance:5}}),(0,r.MS)(r.uN,{})),P=(0,l.N4)({data:S,columns:M,state:{rowSelection:N,columnOrder:T,columnPinning:O},onRowSelectionChange:A,onColumnOrderChange:z,getCoreRowModel:(0,o.HT)(),getSortedRowModel:(0,o.h5)(),enableRowSelection:!0,defaultColumn:{size:165,minSize:50,maxSize:500},columnResizeMode:"onChange",meta:{updateTableData:I}});(0,n.useEffect)((()=>{const e=P.getSelectedRowModel().flatRows.map((e=>e.original));w((0,u.dT)(e))}),[N,w]);const H=(0,n.useMemo)((()=>{const e=P.getFlatHeaders(),t={};console.log("table.getTotalSize()",P.getTotalSize());for(let s=0;s<e.length;s++){const a=e[s];t["--header-".concat(a.id,"-size")]=a.getSize(),t["--col-".concat(a.column.id,"-size")]=a.column.getSize()}return t}),[P.getState().columnSizingInfo,P.getState().columnSizing]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"toolkit my-3",children:(0,p.jsx)("div",{className:"d-flex justify-content-end button-container",children:(0,p.jsxs)("div",{className:"d-flex",children:[(0,p.jsx)(g.A,{variant:"outline-primary",size:"lg",onClick:()=>{P.getToggleAllRowsSelectedHandler()({target:{checked:!0}})},className:"m-2",text:"Select All"}),(0,p.jsx)(g.A,{variant:"outline-secondary",size:"lg",onClick:()=>{P.getToggleAllRowsSelectedHandler()({target:{checked:!1}})},className:"m-2",text:"Deselect  All"}),(0,p.jsx)(g.A,{variant:"outline-success",size:"lg",onClick:()=>{console.log("Export button clicked"),console.log("Widget Type in handleExport:",b),"Revision_FLoat_Widget"===b?(console.log("Exporting for Revision_FLoat_Widget"),(0,m.E1)(s,"Where Used Details.xlsx")):"Plant_Assignment_Widget"===b?(console.log("Exporting for Plant_Assignment_Widget"),(0,m.E1)(s,"EAN_Manufacturing.xlsx")):"Bos_Attribute_Widget"===b?(console.log("Exporting for Bos_Attribute_Widget"),(0,m.E1)(s,"Bos_Attribute_Widget.xlsx")):(console.log("Exporting with default filename for widgetType:",b),(0,m.E1)(s,"table-data.xlsx"))},className:"m-2 border-bottom-10px",text:"Export to CSV "}),(0,p.jsx)(g.A,{variant:"outline-warning",size:"lg",onClick:()=>{const e=v(b);localStorage.removeItem(e),z(_)},className:"m-2",text:"Reset Columns"})]})})}),(0,p.jsx)("div",{className:"table-info",children:(0,p.jsxs)("p",{children:[S.length," Items"]})}),(0,p.jsx)(r.Mp,{sensors:F,collisionDetection:r.fp,modifiers:[i.dU],onDragEnd:e=>{const{active:t,over:s}=e;t&&s&&t.id!==s.id&&"selection"!==t.id&&"EIN"!==t.id&&z((e=>{const a=e.indexOf(t.id),n=e.indexOf(s.id);return(0,c.be)(e,a,n)}))},children:(0,p.jsx)("div",{ref:R,className:"table-responsive ".concat(E?"is-scrolled":""),children:(0,p.jsxs)("table",{className:"table custom-table table-hover",style:(0,a.A)((0,a.A)({},H),{},{width:P.getTotalSize()}),children:[(0,p.jsx)("thead",{children:P.getHeaderGroups().map((e=>(0,p.jsx)("tr",{children:(0,p.jsx)(c.gB,{items:P.getVisibleLeafColumns().map((e=>e.id)),strategy:c.m$,children:e.headers.map((e=>(0,p.jsx)(x,{header:e,columns:t,table:P},e.id)))})},e.id)))}),(0,p.jsx)("tbody",{children:P.getRowModel().rows.length>0?P.getRowModel().rows.map((e=>(0,p.jsx)("tr",{onClick:t=>((e,t)=>{const{rows:s,rowsById:a}=P.getRowModel();if(t.shiftKey&&C)try{const t=(0,m.EC)(s,e.id,C),n=a[C].getIsSelected();t.forEach((e=>e.toggleSelected(n)))}catch(n){console.error("Multi-select with shift+click failed:",n)}else e.toggleSelected(!e.getIsSelected());D(e.id)})(e,t),className:N[e.id]?"row-selected":"",children:(0,p.jsx)(c.gB,{items:P.getVisibleLeafColumns().map((e=>e.id)),strategy:c.m$,children:e.getVisibleCells().map((s=>(0,p.jsx)(f,{cell:s,columns:t,changedCells:e.original.changedCells},s.id)))})},e.id))):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:P.getHeaderGroups()[0].headers.length,className:"no-data p-2",children:"No Table Data"})})})]})})})]})}},8012:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(5043),n=s(3003),l=s(5645),o=s(360),r=s(314),i=s(2725),c=s(3277);const d=()=>{const{showErrorToast:e}=(0,i.A)(),{fetchRevisionsAndParents:t}=(0,o.A)(),s=(0,n.wA)(),d=(0,n.d4)((e=>e.droppedObject.isDropped)),g=(0,n.d4)((e=>e.droppedObject.loading)),u=(0,a.useCallback)((async a=>{try{const i=await(0,r.Sj)({dataItems:a});if(i.success){var n,o;const e=i.data.cardData.relativePath,[r]=await Promise.all([t(null===(n=a[0])||void 0===n?void 0:n.objectId,null===(o=a[0])||void 0===o?void 0:o.objectType,e)]);s((0,l.um)({cardData:i.data.cardData,parentDetails:r||[]})),console.log("[fetchObjectDetails] \u2705 Redux store updated.")}else e(c.wX)}catch(i){console.error("[FetchObjectDetails] Error fetching details:",i),e(c.wX)}finally{console.log("[fetchObjectDetails] \ud83c\udfc1 Ensuring loading is reset."),s((0,l.r1)(!1))}}),[s,t,e]),m=(0,a.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const n=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material"].includes(n))return void e(c.Zo);s((0,l.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,l.r1)(!1)),setTimeout((()=>s((0,l.r1)(!0))),0),await u(t)}else console.warn("[handleDrop] No data items to process.")}catch(n){console.error("[Drop] Error in handleDrop:",n),s((0,l.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(c.nz)}}),[u,e]);return{initializeDroppableArea:(0,a.useCallback)((()=>{d?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,l.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,r.pn)(a,m,s,e))}),100);return()=>clearInterval(t)}),[m,s]),loading:g,handleDrop:m}}},4675:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(9379),n=s(5043),l=s(6047);const o=()=>{const[e,t]=(0,n.useState)(null),[s,o]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{const e=await(0,l.qZ)();o(e)}catch(e){console.error("[useInterComSearch] Error initializing InterCom:",e)}})()}),[]),(0,n.useEffect)((()=>()=>{e&&e.disconnect()}),[e]);return{performSearch:(0,n.useCallback)(((e,n,l)=>{var o;if(!s)return void console.warn("[useInterComSearch] InterCom is not loaded yet.");const r="socket"+(new Date).toISOString().replace(/[-:]/g,""),i=new s.Socket(r,{dispatchRetryInternal:0});i.subscribeServer("SearchComServer"),t(i),console.log("[useInterComSearch] performSearch called with:",e,n);const c=null===(o=window.widget)||void 0===o?void 0:o.id,d=(0,a.A)((0,a.A)({},n),{},{widget_id:c,app_socket_id:r,default_search_criteria:e});console.log("[useInterComSearch] Dispatching RegisterContext event with:",d),i.dispatchEvent("RegisterContext",d),i.dispatchEvent("InContextSearch",d);console.log("[useInterComSearch] Adding listener for Selected_Objects_search"),i.addListener("Selected_Objects_search",(e=>{console.log("[useInterComSearch] Search results received:",e),l&&l(e)}))}),[s])}}},360:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(2725),n=s(3862),l=s(3277);const o=()=>{const{showSuccessToast:e,showErrorToast:t}=(0,a.A)();return{fetchRevisionsAndParents:async(e,t,s)=>{if(!s)return void console.error("[Fetch Revisions] \u274c Missing relative path.");try{const a=await n.A.post("/revFloat/getParents",{data:{id:e,type:t,relativePath:s}});if(200===a.status){return a.data}throw new Error("[Fetch Revisions] HTTP error! status: ".concat(a.status))}catch(a){return console.error("[Fetch Revisions] \u274c Error occurred:",a),null}},replaceRevisions:async(s,a,o)=>{try{const t=await n.A.post("/revFloat/floatRevisions",{SelectedParents:s,DroppedData:a,userEmail:o});if(200===t.status)return console.log("Replacement successful:",t.data),e(l.hG),{success:!0};throw new Error("[Replacement API] HTTP error! status: ".concat(t.status))}catch(r){return console.error("Error during replacement:",r),t(l.mK),{success:!1,error:r.message}}}}}},2725:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(9379),n=s(45),l=s(2115);const o=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],r=()=>{const e=e=>{let{message:t,type:s="default",position:r="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:g=!1,pauseOnFocusLoss:u=!1,draggable:m=!0,theme:h="light",transition:p=l.br}=e,x=(0,n.A)(e,o);(l.oR[s]||l.oR)(t,(0,a.A)({position:r,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:g,draggable:m,theme:h,transition:p},x))};return{showToast:e,showSuccessToast:function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},s))},showErrorToast:function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},s))},showInfoToast:function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},s))},showWarningToast:function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},s))}}}},174:(e,t,s)=>{s.d(t,{M:()=>a});const a=async(e,t)=>{if(console.log("[refreshWidgetData] called with dataItems:",e),e&&0!==e.length)try{if("function"!==typeof t)throw new Error("[Refresh] handleDrop is not a function.");await t(e)}catch(s){console.error("[Refresh] Error during handleDrop execution:",s)}else console.warn("[Refresh] No dropped data available to refresh.")}},4050:()=>{},4119:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=718.d2d54cf3.chunk.js.map