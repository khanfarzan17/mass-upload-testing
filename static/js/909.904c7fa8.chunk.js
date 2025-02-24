"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[909],{9020:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var o=n(5043),i=n(4391),a=(n(2342),n(9555),n(3003)),r=n(2670),s=n(2115),c=n(5740),d=n(759),l=n(3637),p=n(8012),g=n(6713),u=n(768),h=n(5645),f=n(9379),m=n(3910),w=n(7929),v=n(579);const D=()=>(0,v.jsx)(m.g,{icon:w.e68,className:"green-icon"}),y=()=>(0,v.jsx)(m.g,{icon:w.Jyw,className:"cross-icon"}),A=[{accessorKey:"EIN",header:"EIN",columnPinning:!0},{accessorKey:"Title",header:"Title"},{accessorKey:"Description",header:"Description"},{accessorKey:"Type",header:"Type"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"Connected Child Revision",header:"Connected Revision"},{accessorKey:"Latest child connected",header:"latest Revision Connected",cell:e=>{let{cell:t}=e;return t.getValue()?(0,v.jsx)(D,{}):(0,v.jsx)(y,{})}},{accessorKey:"To-Be child connected",header:"Revision to-be Connected"},{accessorKey:"relationship",header:"Relationship"},{accessorKey:"State",header:"State"},{accessorKey:"Owner",header:"Owner"},{accessorKey:"CAD Format",header:"CAD Format"},{accessorKey:"Collabspace",header:"Collabspace"}];var R=n(3728),j=n(360),C=n(2725),b=n(3277),N=n(2073);var x=n(174);const T=()=>{const{handleDrop:e}=(0,p.A)(),{showSuccessToast:t,showErrorToast:n}=(0,C.A)(),[i,a]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.log("[WidgetLifecycle] \ud83d\udccc Registering `onRefresh` event...");console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,i;const s=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(s)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");console.log("[WidgetLifecycle] \ud83d\udd04 `onRefresh` triggered!"),sessionStorage.removeItem("userClickedRefresh"),console.log("Stored Flag in widgt lifecycle:",sessionStorage.getItem("userClickedRefresh")),a(!0);const d=r.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===d||void 0===d||null===(o=d.data)||void 0===o||null===(i=o.items)||void 0===i||!i.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",d),void a(!1);try{console.log("[WidgetLifecycle] \ud83d\ude80 Refreshing widget with latest data..."),await(0,x.M)(d.data.items,e)}catch(l){console.error("[WidgetLifecycle] \u274c Error during refresh:",l),n(b.H6)}finally{a(!1),t(b._l)}})),console.log("[WidgetLifecycle] \u2705 `onRefresh` event registered successfully")}),[]),i?(0,v.jsx)(g.A,{}):null},S=()=>{const{replaceRevisions:e}=(0,j.A)(),{showErrorToast:t}=(0,C.A)(),n=(0,a.d4)((e=>e.droppedObject.droppedObjectData)),o=(0,a.d4)((e=>e.droppedObject.selectedTableRows));return(0,v.jsx)("div",{className:"d-flex cta-absolute",children:(0,v.jsx)(R.A,{variant:"outline-secondary",className:"m-2",size:"lg",text:"Replace",onClick:async()=>{var i;if(!o||0===o.length)return void t(b.M9);const a=null===(i=n.parentDetails)||void 0===i?void 0:i.data;if(!a||0===a.length)return void t("No parent details available.");const r=o.filter((e=>"-"!==e["To-Be child connected"]));if(0===r.length)return void t(b.nm);const s=r.map((e=>a.find((t=>t["Dropped Revision ID"]===e["Dropped Revision ID"]))));if(s.some((e=>!e)))return void t("Could not find all corresponding parent details.");const c=await async function(){try{const e=await(0,N._3)();return(await e.getUser()).email}catch(e){return console.error("Error getting user email:",e),null}}();if(!c)throw new Error("User email not found.");const d=n.cardData;(await e(s,d,c)).success}})})},E=()=>{const{initializeDroppableArea:e,loading:t}=(0,p.A)(),n=(0,o.useRef)(0),i=(0,a.wA)(),{cardData:r,parentDetails:s,isDropped:m,initialDraggedData:w}=(0,a.d4)((e=>({cardData:e.droppedObject.droppedObjectData.cardData,parentDetails:e.droppedObject.droppedObjectData.parentDetails,isDropped:e.droppedObject.isDropped,initialDraggedData:e.droppedObject.droppedObjectData.initialDraggedData})),a.bN),D=(0,o.useRef)(!1);(0,o.useEffect)((()=>{m||D.current||(e(),D.current=!0)}),[m,e]);const y=(0,o.useMemo)((()=>((e,t)=>e&&Array.isArray(e.data)?e.data.map((e=>(0,f.A)({EIN:e.EIN||"N/A",Title:e.Title||"N/A",Description:e.Description||"N/A",Type:e.Type||"N/A",Revision:e["Dropped Revision"]||"N/A","Dropped Revision ID":e["Dropped Revision ID"]||"N/A","Connected Child Revision":e.connectedChildRev||"N/A","Latest child connected":!e.toBeChildRevConnected,"To-Be child connected":e.toBeChildRevConnected||"-",State:e["Maturity State"]||"N/A",Owner:e.Owner||"N/A","CAD Format":e["CAD Format"]||"N/A",Collabspace:e["Collaborative Space Title"]||"N/A"},"Document"===(null===t||void 0===t?void 0:t.Type)&&{relationship:e.relationship||"N/A"}))):(console.warn("[getTableData] \u26a0\ufe0f No parent details available. Returning empty array."),[]))(s,r)),[s,r]);(0,o.useEffect)((()=>{y.length>0&&console.log("[RevisionFloat] \ud83d\udcca optimizedTableData Updated:",y)}),[y]);const R=(0,o.useMemo)((()=>(e=>e&&"object"===typeof e?(0,f.A)({title:e.Title||"N/A",type:e.Type||"N/A","Maturity State":e["Maturity State"]||"N/A",owner:e.Owner||"N/A","Collaborative Space Title":e["Collaborative Space Title"]||"N/A",Description:e.Description||"N/A","Dropped Revision":e["Dropped Revision"]||"N/A","Latest Released Revision":e["Latest Released Revision"]||"N/A","CAD Format":e["CAD Format"]||"N/A",imageURL:e.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"},"Document"!==e.Type&&{EIN:e.EIN||"N/A","CAD Format":e["CAD Format"]||"N/A"}):null)(r)),[r]),j=(0,o.useCallback)((()=>{m&&(w.length||e(),i((0,h.Rr)(!1)),(r||s.length||w.length)&&(console.log("[handleHomeClick] \ud83d\uddd1 Dispatching reset action..."),i((0,h.um)({cardData:{},parentDetails:[],initialDraggedData:[]}))))}),[i,e,m,w,r,s]),C=(0,o.useMemo)((()=>"Document"===(null===r||void 0===r?void 0:r.Type)?A:A.filter((e=>"relationship"!==e.accessorKey))),[r]);return(0,v.jsxs)(v.Fragment,{children:[!m&&!t&&(0,v.jsx)(c.A,{}),t&&(0,v.jsx)(g.A,{}),m&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)("div",{className:"p-0 pt-4",children:(0,v.jsx)(l.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:j})}),R&&(0,v.jsx)(d.A,{data:R})]})}),y.length>0?(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(S,{}),(0,v.jsx)(u.A,{data:y,columns:C,widgetType:"Revision_FLoat_Widget"},n.current)]}):(0,v.jsx)("div",{className:"no-data-banner",children:"No Parent object(s) found"})]})]})};n(8421),n(4050),n(9959);let I=null;function L(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let n=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");n||(n=document.createElement("div"),n.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(n):document.body.appendChild(n)),I||(I=i.createRoot(n)),I.render((0,v.jsxs)(a.Kq,{store:r.A,children:[(0,v.jsx)(T,{}),(0,v.jsx)(E,{}),(0,v.jsx)(s.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(console.log("\ud83c\udf0d [index.js] Injecting refresh listener into parent window..."),window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e),console.log("\u2705 [index.js] Script successfully injected and executed in parent!")}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=909.904c7fa8.chunk.js.map