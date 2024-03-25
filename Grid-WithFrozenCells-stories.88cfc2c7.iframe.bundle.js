/*! For license information please see Grid-WithFrozenCells-stories.88cfc2c7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2657],{"./src/Grid.WithFrozenCells.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GridWithFrozenCells:()=>GridWithFrozenCells,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/hooks/useSelection.tsx"),_sheetxl_grid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/grid/src/DefaultCellRenderer.tsx"),_sheetxl_grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/grid/src/ScrollableGrid.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/storybook-panels.css"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const Template=props=>{const{freezeTop,freezeLeft,...rest}=props,gridRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{selection,commands:commandsSelection,overlay:overlaySelection,...selectionProps}=(0,_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.Cd)({gridRef}),cellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props=>{const{style:propStyle,...rest}=props,range=props.range;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_4__.d,{...rest,style:{...propStyle,color:`${range.rowStart<freezeTop||range.colStart<freezeLeft?"blue":void 0}`},value:`${props.range.rowStart}:${props.range.colStart}`})}),[]),freezeDividerProps={pathProps:{stroke:"blue"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"storybook-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_5__.y,{...rest,ref:gridRef,cellRenderer,freezeTop,freezeLeft,freezeLeftProps:freezeDividerProps,freezeTopProps:freezeDividerProps,onKeyDown:e=>{commandsSelection.onKeyDown(e)},onPointerDown:e=>{selectionProps.onPointerDown(e)},overlays:[overlaySelection]})})};Template.displayName="Template";const GridWithFrozenCells=Template.bind({});GridWithFrozenCells.args={columnCount:200,rowCount:200,freezeTop:5,freezeLeft:4},GridWithFrozenCells.storyName="with Frozen Cells";const __WEBPACK_DEFAULT_EXPORT__={title:"Grid",component:GridWithFrozenCells,parameters:{controls:{sort:"requiredFirst"}}};GridWithFrozenCells.parameters={...GridWithFrozenCells.parameters,docs:{...GridWithFrozenCells.parameters?.docs,source:{originalSource:"props => {\n  const {\n    freezeTop,\n    freezeLeft,\n    ...rest\n  } = (props as any);\n  const gridRef = useRef<GridElement>(null);\n  const {\n    selection,\n    commands: commandsSelection,\n    overlay: overlaySelection,\n    ...selectionProps // used for callbacks\n  } = useSelection({\n    gridRef\n  });\n  const cellRenderer = useCallback((props: CellRendererProps) => {\n    const {\n      style: propStyle,\n      ...rest\n    } = props;\n    const range = props.range;\n    return <DefaultCellRenderer {...rest} style={{\n      ...propStyle,\n      color: `${range.rowStart < freezeTop || range.colStart < freezeLeft ? 'blue' : undefined}`\n    }} value={`${props.range.rowStart}:${props.range.colStart}`} />;\n  }, []);\n  const freezeDividerProps = {\n    pathProps: {\n      stroke: 'blue'\n    }\n  };\n  return <div className=\"storybook-container\">\r\n      <Grid {...rest} ref={gridRef} cellRenderer={cellRenderer} freezeTop={freezeTop} freezeLeft={freezeLeft} freezeLeftProps={freezeDividerProps} freezeTopProps={freezeDividerProps} onKeyDown={(e: React.KeyboardEvent<any>) => {\n      commandsSelection.onKeyDown(e);\n    }} onPointerDown={(e: React.PointerEvent<any>) => {\n      selectionProps.onPointerDown(e);\n    }} overlays={[overlaySelection]} />\r\n    </div>;\n}",...GridWithFrozenCells.parameters?.docs?.source}}};const __namedExportsOrder=["GridWithFrozenCells"]},"../../packages/grid/src/DefaultCellRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>DefaultCellRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultCellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value,view,bounds,range,zoom,children,style:propStyle,...rest}=props,fontSize=propStyle?.fontSize||1056/72;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"2px 4px",fontFamily:"Calibri",letterSpacing:-.25,lineHeight:1.2,fontSize,...propStyle},...rest,children:value})}));try{DefaultCellRenderer.displayName="DefaultCellRenderer",DefaultCellRenderer.__docgenInfo={description:"Default cell component capable of rendering a value",displayName:"DefaultCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!0,type:{name:"any"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!1,type:{name:"CellRangeCoords"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!1,type:{name:"GridOverlayView"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"]={docgenInfo:DefaultCellRenderer.__docgenInfo,name:"DefaultCellRenderer",path:"../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/grid/src/ScrollableGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>ScrollableGrid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),tiny_invariant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/scroll/ScrollPane.tsx"),_Grid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/grid/src/Grid.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ScrollableGrid=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardRef)=>{const{showVerticalScrollbar,showHorizontalScrollbar,createHorizontalScrollbar,createVerticalScrollbar,createScrollCorner,viewport:propViewport,onScrollViewport:propsOnScrollViewport,style:propStyle={},className:propClassName,onScroll,...rest}=props,[viewport,setViewPort]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),scrollRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),gridRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__.A)(!propViewport,"Viewport can not be specified"),(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardRef,(()=>gridRef.current&&scrollRef.current?Object.assign(gridRef.current,scrollRef.current):null));const onScrollViewport=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((scrollPoint=>{gridRef.current?.scrollTo(scrollPoint),propsOnScrollViewport?.(scrollPoint)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.Gr,{className:propClassName,style:propStyle,ref:scrollRef,showVerticalScrollbar,showHorizontalScrollbar,createHorizontalScrollbar,createVerticalScrollbar,createScrollCorner,viewport,onScrollViewport,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__.x,{style:{width:"100%",height:"100%"},...rest,onViewportChange:v=>setViewPort(v),ref:gridRef})})})));try{ScrollableGrid.displayName="ScrollableGrid",ScrollableGrid.__docgenInfo={description:"ScrollableGrid. This wraps BaseGrid and manages bounds to create consistent css behavior for consumers",displayName:"ScrollableGrid",props:{onScrollViewport:{defaultValue:null,description:"Optional callback\n@param scrollPoint\n@returns",name:"onScrollViewport",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},width:{defaultValue:null,description:"Width of the grid container",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the grid container",name:"height",required:!1,type:{name:"number"}},columnCount:{defaultValue:null,description:"Number of columns in the grid",name:"columnCount",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"Number of rows in the grid",name:"rowCount",required:!0,type:{name:"number"}},defaultColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultColumnWidth",required:!1,type:{name:"number"}},defaultRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultRowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getRowHeight",required:!1,type:{name:"ItemSizer"}},getColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getColumnWidth",required:!1,type:{name:"ItemSizer"}},cellLayout:{defaultValue:null,description:"",name:"cellLayout",required:!1,type:{name:"CellLayout"}},onViewportScroll:{defaultValue:null,description:"Called on scroll, subject to debouncing. Used for programmatic changes. Called even on load",name:"onViewportScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onImmediateScroll:{defaultValue:null,description:"Called immediately on scroll. Used for programmatic changes. Called even on load",name:"onImmediateScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onViewportChange:{defaultValue:null,description:"Fired when the view port changes.\nThis is in pixel coordinates and is slightly different than viewable cells because off screen location range could change",name:"onViewportChange",required:!1,type:{name:"(viewport: ScrollableViewport) => void"}},enableMouseWheel:{defaultValue:null,description:"Enable dragging active cell and selections",name:"enableMouseWheel",required:!1,type:{name:"boolean"}},onWheelScroll:{defaultValue:null,description:"When wheel mouse is called. If return false then wheelMouse will not be processed",name:"onWheelScroll",required:!1,type:{name:"(event: WheelEvent) => boolean | void"}},scrollPoint:{defaultValue:null,description:"The location of the top left scroll corner",name:"scrollPoint",required:!1,type:{name:"Partial<TopLeft>"}},mergedRanges:{defaultValue:null,description:"Is either an array of merged cells or a CellRangeLookup",name:"mergedRanges",required:!1,type:{name:"CellRangeCoords[] | CellRangeLookup"}},freezeLeft:{defaultValue:null,description:"Number of frozen left",name:"freezeLeft",required:!1,type:{name:"number | FrozenEdge"}},freezeTop:{defaultValue:null,description:"Number of frozen top",name:"freezeTop",required:!1,type:{name:"number | FrozenEdge"}},freezeLeftProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeLeftProps",required:!1,type:{name:"Partial<LineProps>"}},freezeTopProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeTopProps",required:!1,type:{name:"Partial<LineProps>"}},onFirstRender:{defaultValue:null,description:"Call only once when the renders for the first time.",name:"onFirstRender",required:!1,type:{name:"(grid: GridElement) => void"}},cellRenderer:{defaultValue:null,description:"Return the actual element to render\n@remarks There can be many cells so care should be taken\nto ensure these are as performant as possible. By default\nthe pointerEvents are set to none. To enable interaction this should be\noverwritten.",name:"cellRenderer",required:!1,type:{name:"(props: CellRendererProps<any>) => ReactNode"}},cellInsets:{defaultValue:null,description:"Allow for cells to be inset. This is a way to account for borders. By default this is 1, 1, 1,x",name:"cellInsets",required:!1,type:{name:"Rectangle"}},overlays:{defaultValue:null,description:"Render elements for the view. This will be called whenever the viewport changes",name:"overlays",required:!1,type:{name:"((view: GridOverlayView) => ReactNode)[]"}},overlaysProps:{defaultValue:null,description:"Props called to overlays",name:"overlaysProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},allowOverlaysOverflow:{defaultValue:null,description:"Overlays are generally clipped to fit in the viewport but\nthis allows for the properties to be overridden.",name:"allowOverlaysOverflow",required:!1,type:{name:"boolean"}},stageWrapper:{defaultValue:null,description:"Allows users to Wrap stage children in Top level Context",name:"stageWrapper",required:!1,type:{name:"(children: ReactNode) => ReactNode"}},stageProps:{defaultValue:null,description:"Props that can be injected to stage",name:"stageProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},showGridLines:{defaultValue:null,description:"Show grid lines.\nUseful for spreadsheets\nNOTE - should we just allow gridline renderers to be null?",name:"showGridLines",required:!1,type:{name:"boolean | DirectionOptions"}},gridLineColor:{defaultValue:null,description:"Customize grid line color\n@remarks This is overwritten by gridlinePropsVertical and gridlinePropsHorizontal",name:"gridLineColor",required:!1,type:{name:"string"}},gridLineRowsProps:{defaultValue:null,description:"Gridline props for rows",name:"gridLineRowsProps",required:!1,type:{name:"SVGProps<SVGPathElement>"}},gridLineColumnsProps:{defaultValue:null,description:"Gridline props for columns",name:"gridLineColumnsProps",required:!1,type:{name:"SVGProps<SVGPathElement>"}},hiddenRowsAt:{defaultValue:null,description:"Will skip rendering for this row and the adjacent rows in the given direction.",name:"hiddenRowsAt",required:!1,type:{name:"(rowIndex: number, forward: boolean) => number"}},hiddenColumnsAt:{defaultValue:null,description:"Will skip rendering for this columns and the adjacent columns in the given direction.",name:"hiddenColumnsAt",required:!1,type:{name:"(colIndex: number, forward: boolean) => number"}},hiddenCellAt:{defaultValue:null,description:"This will skip rendering.\nNote - This is superseded by hiddenRowsAt and hiddenColumnsAt.\nThis is typically used for cells that have nothing to render",name:"hiddenCellAt",required:!1,type:{name:"(coords: CellCoords) => boolean"}},getVisibleCells:{defaultValue:null,description:"Allows for optimization of rendering.\nThis will allow for quick skipping of cells that have nothing to render.\nIf this is not specified then all cells within the visible range will be\niterated and if hiddenCellAt does not return false a then cell renderer will be\ncalled.\n@param cellRange\n@returns either a CellCoord that should be rendered or an object with a coord and value. Note - the value is passed to the cell renderer",name:"getVisibleCells",required:!1,type:{name:"(view: GridOverlayView) => (CellCoords | { coords: CellCoords; value?: any; range?: CellRangeCoords; })[]"}},zoom:{defaultValue:null,description:"Zoom. 1 means no zoom\n@defaultValue 1 or none.",name:"zoom",required:!1,type:{name:"number"}},cursor:{defaultValue:null,description:"Cursor used for grid",name:"cursor",required:!1,type:{name:"string"}},clipCells:{defaultValue:null,description:"Clip overflow of cells unless explicitly provided",name:"clipCells",required:!1,type:{name:"boolean"}},viewport:{defaultValue:null,description:"",name:"viewport",required:!0,type:{name:"ScrollableViewport"}},showHorizontalScrollbar:{defaultValue:null,description:"",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},createScrollCorner:{defaultValue:null,description:"",name:"createScrollCorner",required:!1,type:{name:"(size: Size) => ReactNode"}},createHorizontalScrollbar:{defaultValue:null,description:"",name:"createHorizontalScrollbar",required:!1,type:{name:"(props: ScrollbarRefProps) => ReactNode"}},createVerticalScrollbar:{defaultValue:null,description:"",name:"createVerticalScrollbar",required:!1,type:{name:"(props: ScrollbarRefProps) => ReactNode"}},touchElement:{defaultValue:null,description:"By default the ScrollPane will listen for events on all of the children of the ScrollPane but this\nallows for a custom element to be specified. This is useful when the ScrollPane has some elements\nthat should not be touch enabled (for example headers)",name:"touchElement",required:!1,type:{name:"HTMLElement"}},disableTouch:{defaultValue:null,description:"If touch is disabled.\n@defaultValue false unless no touch events are detected",name:"disableTouch",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<GridElement | ScrollPaneElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/ScrollableGrid.tsx#ScrollableGrid"]={docgenInfo:ScrollableGrid.__docgenInfo,name:"ScrollableGrid",path:"../../packages/grid/src/ScrollableGrid.tsx#ScrollableGrid"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/storybook-panels.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  /* border: green solid 3px; */\n}\n\n.storybook-container > *:first-child {\n  border: blue solid 1px;\n\n  position: relative;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.innerZoomElementWrapper .storybook-container > *:first-child {\n  border: purple solid 1px;\n  min-height: 400px;\n  position: 'relative';\n}\n",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}},"../../node_modules/react-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(f){return r=>{f.forEach((n=>{"function"==typeof n?n(r):null!=n&&(n.current=r)}))}}__webpack_require__.d(__webpack_exports__,{P:()=>o})},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>isBrowser,lQ:()=>noop});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").Bd?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/storybook-panels.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/storybook-panels.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A.locals},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);