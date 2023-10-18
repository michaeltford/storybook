"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3125],{"./src/Grid.Default.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultGrid:()=>DefaultGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _sheetxl_grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/grid/src/DefaultCellRenderer.tsx"),_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/Grid.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sharedCellRenderer=(props,range)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_2__.h,{...props,value:`${range.rowStart}:${range.colStart}`});sharedCellRenderer.displayName="sharedCellRenderer";const Template=props=>{const{...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.r,{...rest,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:sharedCellRenderer})})};Template.displayName="Template";const DefaultGrid=Template.bind({});DefaultGrid.args={columnCount:200,rowCount:200},DefaultGrid.storyName="Default";const __WEBPACK_DEFAULT_EXPORT__={title:"Grid",component:_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.r,parameters:{controls:{sort:"requiredFirst"}}};DefaultGrid.parameters={...DefaultGrid.parameters,docs:{...DefaultGrid.parameters?.docs,source:{originalSource:'props => {\n  const {\n    ...rest\n  } = (props as any);\n  return <div style={{\n    // For Canvas view we want to take full area\n    width: "100%",\n    height: "100%",\n    display: "flex",\n    border: "green solid 1px"\n  }}>\r\n      <Grid {...rest} style={{\n      // For Docs view we are 400px by \'full width\'\n      minHeight: "400px",\n      position: "relative",\n      flex: "1",\n      border: "blue solid 1px"\n    }} cellRenderer={sharedCellRenderer} />\r\n    </div>;\n}',...DefaultGrid.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultGrid"]},"../../packages/common-react/src/hooks/useCallbackRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>useCallbackRef,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const useCallbackRef=(callback,deps)=>{const refCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();refCB.current=callback;const unstableCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>refCB.current?.(...args)),deps);if(refCB.current)return unstableCB},__WEBPACK_DEFAULT_EXPORT__=useCallbackRef},"../../packages/grid/src/DefaultCellRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>DefaultCellRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_konva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-konva/es/ReactKonva.js"),_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultCellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{x=0,y=0,width,height,value,strokeWidth=1,children,alpha=1,isOverlay,fill,textProperties,rangeBounds,...rest}=props;if(isOverlay)return null;const fillEnabled=!!fill,textAlign=textProperties?.align||"left",textVAlign=textProperties?.vAlign||"middle",textColor=textProperties?.fill||"#040404",textWrap=textProperties?.wrap||"wrap",textDecoration=textProperties?.decoration,fontFamily=textProperties?.fontFamily||"Calibri",fontSize=textProperties?.fontSize||11,fontWeight=textProperties?.fontWeight||"400",fontStyle=textProperties?.fontStyle||"normal",letterSpacing=textProperties?.letterSpacing||-.5,textWidth=textProperties?.width||width,fontSizeEffective=96*fontSize/72,textStyle=`${fontWeight} ${fontStyle}`,lineHeight=1.2*fontSize;let textWidthAligned=textWidth?textWidth-1-4:void 0,textOffset=x+1+2;return textWidth&&"right"===textAlign?textOffset=width-textWidthAligned-textOffset:textWidth&&"center"===textAlign&&(textOffset=(width-textWidthAligned)/2-textOffset),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_konva__WEBPACK_IMPORTED_MODULE_1__.ZA,{...rest,children:[_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__.Ft(fill)&&_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__.Ft(undefined)?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.UL,{x,y,imageSmoothingEnabled:!1,height:height+1?height:void 0,width:width+1?width:void 0,fill,stroke:undefined,strokeWidth,shadowForStrokeEnabled:!1,strokeScaleEnabled:!1,hitStrokeWidth:0,alpha,fillEnabled,strokeEnabled:!0}),_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__.Ft(value)?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.xv,{x:textOffset,y:y+1,height:height?height-1:void 0,width:textWidthAligned,fill:textColor,text:value,fontFamily,fontSize:fontSizeEffective,fontStyle:textStyle,lineHeight,letterSpacing,textDecoration,align:textAlign,verticalAlign:textVAlign,wrap:textWrap,hitStrokeWidth:0}),children]})}));try{DefaultCellRenderer.displayName="DefaultCellRenderer",DefaultCellRenderer.__docgenInfo={description:"Default cell component Capable of rendering a string",displayName:"DefaultCellRenderer",props:{textProperties:{defaultValue:null,description:"",name:"textProperties",required:!1,type:{name:"PaintableText"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"Key"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: KonvaEventObject<MouseEvent>) => void"}},zoom:{defaultValue:null,description:"",name:"zoom",required:!1,type:{name:"number"}},rangeBounds:{defaultValue:null,description:"",name:"rangeBounds",required:!1,type:{name:"Bounds"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"]={docgenInfo:DefaultCellRenderer.__docgenInfo,name:"DefaultCellRenderer",path:"../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/grid/src/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_BaseGrid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/BaseGrid.tsx"),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Grid=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{width:propWidth,height:propHeight,style:propStyle={},className:propClassName,...rest}=props,[refMeasure,{width,height}]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__.Z)(),realizedWidth=propWidth??width,realizedHeight=propHeight??height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:propClassName,style:{...propStyle},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",top:"0px",left:"0px",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",boxSizing:"content-box"},ref:refMeasure,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BaseGrid__WEBPACK_IMPORTED_MODULE_3__.ZP,{ref:refForwarded,width:realizedWidth,height:realizedHeight,...rest})})})})));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{width:{defaultValue:null,description:"Width of the grid container",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the grid container",name:"height",required:!1,type:{name:"number"}},columnCount:{defaultValue:null,description:"Number of columns in the grid",name:"columnCount",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"Number of rows in the grid",name:"rowCount",required:!0,type:{name:"number"}},defaultColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultColumnWidth",required:!1,type:{name:"number"}},defaultRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultRowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getRowHeight",required:!1,type:{name:"ItemSizer"}},getColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getColumnWidth",required:!1,type:{name:"ItemSizer"}},cellLayout:{defaultValue:null,description:"",name:"cellLayout",required:!1,type:{name:"CellLayout"}},renderFromBottomRight:{defaultValue:null,description:"For overlapping purposes we can have the grid render from top/Left (the default) or from bottom/right (if true)",name:"renderFromBottomRight",required:!1,type:{name:"boolean"}},onScroll:{defaultValue:null,description:"Called on scroll, subject to debouncing. Used for programmatic changes. Called even on load",name:"onScroll",required:!1,type:{name:"(scrollPoint: Partial<ScrollPoint>) => void"}},onImmediateScroll:{defaultValue:null,description:"Called immediately on scroll. Used for programmatic changes. Called even on load",name:"onImmediateScroll",required:!1,type:{name:"(scrollPoint: Partial<ScrollPoint>) => void"}},onViewportChange:{defaultValue:null,description:"Fired when the view port changes.\nThis is in pixel coordinates and is slightly different than viewable cells because off screen location range could change",name:"onViewportChange",required:!1,type:{name:"(viewport: ScrollableViewport) => void"}},enableMouseWheel:{defaultValue:null,description:"Enable dragging active cell and selections",name:"enableMouseWheel",required:!1,type:{name:"boolean"}},onWheelScroll:{defaultValue:null,description:"When wheel mouse is called. If return false then wheelMouse will not be processed",name:"onWheelScroll",required:!1,type:{name:"(event: WheelEvent) => boolean | void"}},scrollPoint:{defaultValue:null,description:"The location of the top left corner",name:"scrollPoint",required:!1,type:{name:"Partial<ScrollPoint>"}},mergedRanges:{defaultValue:null,description:"Is either an array of merged cells or a CellRangeLookup",name:"mergedRanges",required:!1,type:{name:"CellRangeCoords[] | CellRangeLookup"}},overflowCells:{defaultValue:null,description:"The overflow Cells.\n@see OverflowCellCoords",name:"overflowCells",required:!1,type:{name:"OverflowCellCoords[] | OverflowCellsLookup"}},isContentfulCell:{defaultValue:null,description:"Used for detecting content for overflow.\nIf there is no value. Note - This is slightly different than isEmpty because it may still have logical render (like fill, border, etc)\n@see overflowCells",name:"isContentfulCell",required:!1,type:{name:"(coords: CellCoords) => boolean"}},contentfulCellFinder:{defaultValue:null,description:"Used for detecting content for overflow.\nThis allows for additional optimizations beyond scanning isContentfulCell\nIf this is used then isContentfulCell is ignore.\n@see overflowCells",name:"contentfulCellFinder",required:!1,type:{name:"CellFinder"}},freezeLeft:{defaultValue:null,description:"Number of frozen left",name:"freezeLeft",required:!1,type:{name:"number | FrozenEdge"}},freezeTop:{defaultValue:null,description:"Number of frozen top",name:"freezeTop",required:!1,type:{name:"number | FrozenEdge"}},freezeLeftProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeLeftProps",required:!1,type:{name:"Partial<LineProps>"}},freezeTopProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeTopProps",required:!1,type:{name:"Partial<LineProps>"}},onBeforeRenderRow:{defaultValue:null,description:"Called right before a row is being rendered.\nWill be called for frozen cells and merged cells",name:"onBeforeRenderRow",required:!1,type:{name:"(rowIndex: number) => void"}},onFirstRender:{defaultValue:null,description:"Call only once when the renders for the first time.",name:"onFirstRender",required:!1,type:{name:"() => void"}},cellRenderer:{defaultValue:null,description:"cellRenderer. Must be a Konva Component eg: Group, Rect etc",name:"cellRenderer",required:!1,type:{name:"(props: CellRendererProps, range: CellRangeCoords) => ReactNode"}},overlays:{defaultValue:null,description:"Render elements for the view. This will be called whenever the viewport changes",name:"overlays",required:!1,type:{name:"((view: CellOverlayView) => ReactNode)[]"}},overlaysProps:{defaultValue:null,description:"",name:"overlaysProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},allowOverlaysOverflow:{defaultValue:null,description:"",name:"allowOverlaysOverflow",required:!1,type:{name:"boolean"}},stageWrapper:{defaultValue:null,description:"Allows users to Wrap stage children in Top level Context",name:"stageWrapper",required:!1,type:{name:"(children: ReactNode) => ReactNode"}},enabledCanvasEvents:{defaultValue:null,description:"",name:"enabledCanvasEvents",required:!1,type:{name:"boolean"}},stageProps:{defaultValue:null,description:"Props that can be injected to Konva stage",name:"stageProps",required:!1,type:{name:'Omit<StageConfig, "container">'}},showGridLines:{defaultValue:null,description:"Show grid lines.\nUseful for spreadsheets\nNOTE - should we just allow gridline renderers to be null?",name:"showGridLines",required:!1,type:{name:"boolean | DirectionOptions"}},gridLineColor:{defaultValue:null,description:"Customize grid line color",name:"gridLineColor",required:!1,type:{name:"string"}},gridLineRendererVertical:{defaultValue:null,description:"Gridline component",name:"gridLineRendererVertical",required:!1,type:{name:"(props: ShapeConfig) => ReactNode"}},gridLineRendererHorizontal:{defaultValue:null,description:"",name:"gridLineRendererHorizontal",required:!1,type:{name:"(props: ShapeConfig) => ReactNode"}},hiddenRowsAt:{defaultValue:null,description:"Will skip rendering for this row and the adjacent rows in the given direction.",name:"hiddenRowsAt",required:!1,type:{name:"(rowIndex: number, forward: boolean) => number"}},hiddenColumnsAt:{defaultValue:null,description:"Will skip rendering for this columns and the adjacent columns in the given direction.",name:"hiddenColumnsAt",required:!1,type:{name:"(colIndex: number, forward: boolean) => number"}},hiddenCellAt:{defaultValue:null,description:"This will skip rendering. Note - This is superseded by hiddenRowsAt and hiddenColumnsAt.\nThis is typically used for cells that have nothing to render",name:"hiddenCellAt",required:!1,type:{name:"(coords: CellCoords) => boolean"}},zoom:{defaultValue:null,description:"Zoom. 1 means no zoom\n@defaultValue 1 or none.",name:"zoom",required:!1,type:{name:"number"}},cursor:{defaultValue:null,description:"Cursor used for grid",name:"cursor",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"Background color. Transparent grids are not supported due to an optimizations with gridlines",name:"fill",required:!1,type:{name:"string"}},clipCells:{defaultValue:null,description:"Clip overflow of cells unless explicitly provided",name:"clipCells",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<GridElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"../../packages/grid/src/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}}}]);