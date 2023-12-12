"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3125],{"./src/components/BoundedWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>BoundedWidget});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("../../node_modules/@mui/material/Link/Link.js"),IconButton=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),DatasetLinked=__webpack_require__("../../node_modules/@mui/icons-material/DatasetLinked.js"),FormControl=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),FormHelperText=__webpack_require__("../../node_modules/@mui/material/FormHelperText/FormHelperText.js"),useCallbackRef=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts");const useWorkbookRange=(model,address,listener,options)=>{const listenerRef=(0,react.useRef)(listener);listenerRef.current=listener;const fireOnAddressChange=options?.fireOnAddressChange??!0;(0,react.useEffect)((()=>{if(!model||!address||!listenerRef.current)return;const stableListener=(range,sheet,workbook)=>{listenerRef.current?.(range,sheet,workbook)},unlistener=model.addRangeListener(address,stableListener,options);if(fireOnAddressChange){const range=model.getRange(address);stableListener(range,range.sheet(),model)}return()=>{unlistener?.()}}),[model,address])};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BoundedWidget=(0,react.memo)((props=>{const{initialAddress,createWidget:propCreateWidget,workbookModel,refWorkbookElement,children,...rest}=props,createWidget=(0,useCallbackRef.W6)(propCreateWidget,[propCreateWidget]),[address,setAddress]=(0,react.useState)(null),[range,setRange]=(0,react.useState)(null);useWorkbookRange(workbookModel,address,(range=>{range&&setRange(range)}));const widget=(0,react.useMemo)((()=>createWidget({range,refWorkbookElement})),[range]);return(0,jsx_runtime.jsxs)(FormControl.Z,{...rest,children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",rowGap:theme=>theme.spacing(.25)},children:[widget,(0,jsx_runtime.jsx)(IconButton.Z,{sx:{my:-2},onClick:()=>{setAddress(workbookModel.getActiveAddressA1())},children:(0,jsx_runtime.jsx)(DatasetLinked.Z,{})})]}),(0,jsx_runtime.jsx)(FormHelperText.Z,{children:(0,jsx_runtime.jsx)(Link.Z,{component:"button",underline:"hover",variant:"body2",disabled:!range?.isValid(),sx:{"&:not(:hover)":{color:"inherit"},"&[disabled]":{color:theme=>theme.palette.text.disabled,cursor:"default","&:hover":{textDecoration:"none"}}},onClick:()=>{refWorkbookElement.current?.goto?.(range,!0)},children:range?`${range.toString()}`:"Unlinked"})})]})}));try{BoundedWidget.displayName="BoundedWidget",BoundedWidget.__docgenInfo={description:"2-way binding between a widget (children) and a cell range.",displayName:"BoundedWidget",props:{workbookModel:{defaultValue:null,description:"",name:"workbookModel",required:!0,type:{name:"IWorkbookModel"}},refWorkbookElement:{defaultValue:null,description:"",name:"refWorkbookElement",required:!0,type:{name:"MutableRefObject<WorkbookElement>"}},initialAddress:{defaultValue:null,description:"",name:"initialAddress",required:!1,type:{name:"string"}},createWidget:{defaultValue:null,description:"",name:"createWidget",required:!0,type:{name:"(props: BoundedWidgetElementProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundedWidget.tsx#BoundedWidget"]={docgenInfo:BoundedWidget.__docgenInfo,name:"BoundedWidget",path:"src/components/BoundedWidget.tsx#BoundedWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RelaxedChangeTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>RelaxedChangeTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelaxedChangeTextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value:propValue,onChange:propOnChange,onKeyDown:propOnKeyDown,onBlur:propOnBlur,...rest}=props,[lastChangeEvent,setLastChangeEvent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setLastChangeEvent(null)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.Z,{...rest,value:lastChangeEvent?.target.value??propValue??"",onKeyDown:event=>{event.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.mW.Enter&&lastChangeEvent&&(setLastChangeEvent(null),propOnChange?.(lastChangeEvent),propOnKeyDown?.(event))},onBlur:event=>{setLastChangeEvent(null),propOnChange?.(event),propOnBlur?.(event)},onChange:event=>{setLastChangeEvent(event)}})}));try{RelaxedChangeTextField.displayName="RelaxedChangeTextField",RelaxedChangeTextField.__docgenInfo={description:"Simple component that delays firing onChange until enter or blur.",displayName:"RelaxedChangeTextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"]={docgenInfo:RelaxedChangeTextField.__docgenInfo,name:"RelaxedChangeTextField",path:"src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OX:()=>sharedCellRenderer});__webpack_require__("./src/components/BoundedWidget.tsx"),__webpack_require__("./src/components/RelaxedChangeTextField.tsx");var DefaultCellRenderer=__webpack_require__("../../packages/grid/src/DefaultCellRenderer.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sharedCellRenderer=props=>(0,jsx_runtime.jsx)(DefaultCellRenderer.h,{...props,value:`${props.range.rowStart}:${props.range.colStart}`});sharedCellRenderer.displayName="sharedCellRenderer";try{sharedCellRenderer.displayName="sharedCellRenderer",sharedCellRenderer.__docgenInfo={description:"",displayName:"sharedCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!1,type:{name:"any"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!0,type:{name:"GridOverlayView"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!0,type:{name:"CellRangeCoords"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!0,type:{name:"number"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SimpleCellRenderer.tsx#sharedCellRenderer"]={docgenInfo:sharedCellRenderer.__docgenInfo,name:"sharedCellRenderer",path:"src/components/SimpleCellRenderer.tsx#sharedCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/Grid.Default.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultGrid:()=>DefaultGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/Grid.tsx"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.r,{...rest,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:_components__WEBPACK_IMPORTED_MODULE_1__.OX})})};Template.displayName="Template";const DefaultGrid=Template.bind({});DefaultGrid.args={columnCount:200,rowCount:200},DefaultGrid.storyName="Default";const __WEBPACK_DEFAULT_EXPORT__={title:"Grid",component:_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.r,parameters:{controls:{sort:"requiredFirst"}}};DefaultGrid.parameters={...DefaultGrid.parameters,docs:{...DefaultGrid.parameters?.docs,source:{originalSource:'props => {\n  const {\n    ...rest\n  } = (props as any);\n  return <div style={{\n    // For Canvas view we want to take full area\n    width: "100%",\n    height: "100%",\n    display: "flex",\n    border: "green solid 1px"\n  }}>\r\n      <Grid {...rest} style={{\n      // For Docs view we are 400px by \'full width\'\n      minHeight: "400px",\n      position: "relative",\n      flex: "1",\n      border: "blue solid 1px"\n    }} cellRenderer={sharedCellRenderer} />\r\n    </div>;\n}',...DefaultGrid.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultGrid"]},"../../packages/common-react/src/hooks/useCallbackRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>useCallbackRef,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,lz:()=>useCallbackRef2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const useCallbackRef=(callback,deps)=>{const refCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();refCB.current=callback;const unstableCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>refCB.current?.(...args)),deps);if(refCB.current)return unstableCB},useCallbackRef2=(callback,deps)=>{const cbCurrent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>callback?.(...args)),deps),refCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();refCB.current=cbCurrent;const stableCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>refCB.current?.(...args)),[]);if(refCB.current)return stableCB},__WEBPACK_DEFAULT_EXPORT__=useCallbackRef},"../../packages/common-react/src/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kx:()=>HorizontalAlignment,az:()=>MouseButtonCodes,mW:()=>KeyCodes,n9:()=>EMPTY_CSS_PROPERTIES,rh:()=>KeyModifiers});let HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.General="general",HorizontalAlignment.Left="left",HorizontalAlignment.Right="right",HorizontalAlignment.Center="center",HorizontalAlignment.Justify="justify",HorizontalAlignment.Fill="fill",HorizontalAlignment.Distributed="distributed",HorizontalAlignment.CenterContinuous="centerContinuous",HorizontalAlignment}({}),KeyModifiers=function(KeyModifiers){return KeyModifiers.Shift="shift",KeyModifiers.Alt="alt",KeyModifiers.Ctrl="ctrl",KeyModifiers.Meta="meta",KeyModifiers}({}),KeyCodes=function(KeyCodes){return KeyCodes[KeyCodes.BackSpace=8]="BackSpace",KeyCodes[KeyCodes.Tab=9]="Tab",KeyCodes[KeyCodes.Clear=12]="Clear",KeyCodes[KeyCodes.Enter=13]="Enter",KeyCodes[KeyCodes.Shift=16]="Shift",KeyCodes[KeyCodes.Control=17]="Control",KeyCodes[KeyCodes.Alt=18]="Alt",KeyCodes[KeyCodes.Pause=19]="Pause",KeyCodes[KeyCodes.CapsLock=20]="CapsLock",KeyCodes[KeyCodes.Escape=27]="Escape",KeyCodes[KeyCodes.Space=32]="Space",KeyCodes[KeyCodes.PageUp=33]="PageUp",KeyCodes[KeyCodes.PageDown=34]="PageDown",KeyCodes[KeyCodes.End=35]="End",KeyCodes[KeyCodes.Home=36]="Home",KeyCodes[KeyCodes.Left=37]="Left",KeyCodes[KeyCodes.Up=38]="Up",KeyCodes[KeyCodes.Right=39]="Right",KeyCodes[KeyCodes.Down=40]="Down",KeyCodes[KeyCodes.Insert=45]="Insert",KeyCodes[KeyCodes.Delete=46]="Delete",KeyCodes[KeyCodes.Digit_8=56]="Digit_8",KeyCodes[KeyCodes.Y=89]="Y",KeyCodes[KeyCodes.Z=90]="Z",KeyCodes[KeyCodes.Meta=91]="Meta",KeyCodes[KeyCodes.F1=112]="F1",KeyCodes[KeyCodes.F2=113]="F2",KeyCodes[KeyCodes.F3=114]="F3",KeyCodes[KeyCodes.F4=115]="F4",KeyCodes[KeyCodes.F5=116]="F5",KeyCodes[KeyCodes.F6=117]="F6",KeyCodes[KeyCodes.F7=118]="F7",KeyCodes[KeyCodes.F8=119]="F8",KeyCodes[KeyCodes.F9=120]="F9",KeyCodes[KeyCodes.F10=121]="F10",KeyCodes[KeyCodes.F11=122]="F11",KeyCodes[KeyCodes.F12=123]="F12",KeyCodes[KeyCodes.NumLock=144]="NumLock",KeyCodes[KeyCodes.ScrollLock=145]="ScrollLock",KeyCodes[KeyCodes.BackSlash=220]="BackSlash",KeyCodes}({}),MouseButtonCodes=function(MouseButtonCodes){return MouseButtonCodes[MouseButtonCodes.Left=1]="Left",MouseButtonCodes[MouseButtonCodes.Middle=2]="Middle",MouseButtonCodes[MouseButtonCodes.Right=3]="Right",MouseButtonCodes}({});const EMPTY_CSS_PROPERTIES={}},"../../packages/grid/src/DefaultCellRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>DefaultCellRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultCellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value,view,bounds,range,zoom,children,style:propStyle,...rest}=props,fontSize=propStyle?.fontSize||1056/72;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"2px 4px",fontFamily:"Calibri",letterSpacing:-.25,lineHeight:1.2,fontSize,...propStyle},...rest,children:value})}));try{DefaultCellRenderer.displayName="DefaultCellRenderer",DefaultCellRenderer.__docgenInfo={description:"Default cell component capable of rendering a value",displayName:"DefaultCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!1,type:{name:"any"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!0,type:{name:"GridOverlayView"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!0,type:{name:"CellRangeCoords"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!0,type:{name:"number"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"]={docgenInfo:DefaultCellRenderer.__docgenInfo,name:"DefaultCellRenderer",path:"../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/grid/src/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_BaseGrid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/BaseGrid.tsx"),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Grid=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{width:propWidth,height:propHeight,style:propStyle={},className:propClassName,...rest}=props,[refMeasure,{width,height}]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__.Z)(),realizedWidth=propWidth??width,realizedHeight=propHeight??height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:propClassName,style:{...propStyle},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",top:"0px",left:"0px",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",boxSizing:"content-box"},ref:refMeasure,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BaseGrid__WEBPACK_IMPORTED_MODULE_3__.ZP,{ref:refForwarded,width:realizedWidth,height:realizedHeight,...rest})})})})));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{width:{defaultValue:null,description:"Width of the grid container",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the grid container",name:"height",required:!1,type:{name:"number"}},columnCount:{defaultValue:null,description:"Number of columns in the grid",name:"columnCount",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"Number of rows in the grid",name:"rowCount",required:!0,type:{name:"number"}},defaultColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultColumnWidth",required:!1,type:{name:"number"}},defaultRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultRowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getRowHeight",required:!1,type:{name:"ItemSizer"}},getColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getColumnWidth",required:!1,type:{name:"ItemSizer"}},cellLayout:{defaultValue:null,description:"",name:"cellLayout",required:!1,type:{name:"CellLayout"}},onViewportScroll:{defaultValue:null,description:"Called on scroll, subject to debouncing. Used for programmatic changes. Called even on load",name:"onViewportScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onImmediateScroll:{defaultValue:null,description:"Called immediately on scroll. Used for programmatic changes. Called even on load",name:"onImmediateScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onViewportChange:{defaultValue:null,description:"Fired when the view port changes.\nThis is in pixel coordinates and is slightly different than viewable cells because off screen location range could change",name:"onViewportChange",required:!1,type:{name:"(viewport: ScrollableViewport) => void"}},enableMouseWheel:{defaultValue:null,description:"Enable dragging active cell and selections",name:"enableMouseWheel",required:!1,type:{name:"boolean"}},onWheelScroll:{defaultValue:null,description:"When wheel mouse is called. If return false then wheelMouse will not be processed",name:"onWheelScroll",required:!1,type:{name:"(event: WheelEvent) => boolean | void"}},scrollPoint:{defaultValue:null,description:"The location of the top left scroll corner",name:"scrollPoint",required:!1,type:{name:"Partial<TopLeft>"}},mergedRanges:{defaultValue:null,description:"Is either an array of merged cells or a CellRangeLookup",name:"mergedRanges",required:!1,type:{name:"CellRangeCoords[] | CellRangeLookup"}},freezeLeft:{defaultValue:null,description:"Number of frozen left",name:"freezeLeft",required:!1,type:{name:"number | FrozenEdge"}},freezeTop:{defaultValue:null,description:"Number of frozen top",name:"freezeTop",required:!1,type:{name:"number | FrozenEdge"}},freezeLeftProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeLeftProps",required:!1,type:{name:"Partial<LineProps>"}},freezeTopProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeTopProps",required:!1,type:{name:"Partial<LineProps>"}},onFirstRender:{defaultValue:null,description:"Call only once when the renders for the first time.",name:"onFirstRender",required:!1,type:{name:"(grid: GridElement) => void"}},cellRenderer:{defaultValue:null,description:"Return the actual element to render\n@remarks There can be many cells so care should be taken\nto ensure these are as performant as possible. By default\nthe pointerEvents are set to none. To enable interaction this should be\noverwritten.",name:"cellRenderer",required:!1,type:{name:"(props: CellRendererProps<any>) => ReactNode"}},cellInsets:{defaultValue:null,description:"Allow for cells to be inset. This is a way to account for borders. By default this is 1, 1, 1,x",name:"cellInsets",required:!1,type:{name:"Rectangle"}},overlays:{defaultValue:null,description:"Render elements for the view. This will be called whenever the viewport changes",name:"overlays",required:!1,type:{name:"((view: GridOverlayView) => ReactNode)[]"}},overlaysProps:{defaultValue:null,description:"Props called to overlays",name:"overlaysProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},allowOverlaysOverflow:{defaultValue:null,description:"Overlays are generally clipped to fit in the viewport but\nthis allows for the properties to be overridden.",name:"allowOverlaysOverflow",required:!1,type:{name:"boolean"}},stageWrapper:{defaultValue:null,description:"Allows users to Wrap stage children in Top level Context",name:"stageWrapper",required:!1,type:{name:"(children: ReactNode) => ReactNode"}},stageProps:{defaultValue:null,description:"Props that can be injected to stage",name:"stageProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},showGridLines:{defaultValue:null,description:"Show grid lines.\nUseful for spreadsheets\nNOTE - should we just allow gridline renderers to be null?",name:"showGridLines",required:!1,type:{name:"boolean | DirectionOptions"}},gridLineColor:{defaultValue:null,description:"Customize grid line color\n@remarks This is overwritten by gridlinePropsVertical and gridlinePropsHorizontal",name:"gridLineColor",required:!1,type:{name:"string"}},gridLinePropsRows:{defaultValue:null,description:"Gridline props for rows",name:"gridLinePropsRows",required:!1,type:{name:"SVGProps<SVGPathElement>"}},gridLinePropsColumns:{defaultValue:null,description:"Gridline props for columns",name:"gridLinePropsColumns",required:!1,type:{name:"SVGProps<SVGPathElement>"}},hiddenRowsAt:{defaultValue:null,description:"Will skip rendering for this row and the adjacent rows in the given direction.",name:"hiddenRowsAt",required:!1,type:{name:"(rowIndex: number, forward: boolean) => number"}},hiddenColumnsAt:{defaultValue:null,description:"Will skip rendering for this columns and the adjacent columns in the given direction.",name:"hiddenColumnsAt",required:!1,type:{name:"(colIndex: number, forward: boolean) => number"}},hiddenCellAt:{defaultValue:null,description:"This will skip rendering.\nNote - This is superseded by hiddenRowsAt and hiddenColumnsAt.\nThis is typically used for cells that have nothing to render",name:"hiddenCellAt",required:!1,type:{name:"(coords: CellCoords) => boolean"}},getVisibleCells:{defaultValue:null,description:"Allows for optimization of rendering.\nThis will allow for quick skipping of cells that have nothing to render.\nIf this is not specified then all cells within the visible range will be\niterated and if hiddenCellAt does not return false a then cell renderer will be\ncalled.\n@param cellRange\n@returns either a CellCoord that should be rendered or an object with a coord and value. Note - the value is passed to the cell renderer",name:"getVisibleCells",required:!1,type:{name:"(view: GridOverlayView) => (CellCoords | { coords: CellCoords; value?: any; range?: CellRangeCoords; })[]"}},zoom:{defaultValue:null,description:"Zoom. 1 means no zoom\n@defaultValue 1 or none.",name:"zoom",required:!1,type:{name:"number"}},cursor:{defaultValue:null,description:"Cursor used for grid",name:"cursor",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"Background color. Can we be to transparent",name:"fill",required:!1,type:{name:"string"}},clipCells:{defaultValue:null,description:"Clip overflow of cells unless explicitly provided",name:"clipCells",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<GridElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"../../packages/grid/src/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../../node_modules/detect-it/dist/detect-it.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{deviceType:()=>deviceType,primaryInput:()=>primaryInput,supportsPassiveEvents:()=>supportsPassiveEvents,supportsPointerEvents:()=>supportsPointerEvents,supportsTouchEvents:()=>supportsTouchEvents});var w="undefined"!=typeof window?window:{screen:{},navigator:{}},matchMedia=(w.matchMedia||function(){return{matches:!1}}).bind(w),passiveOptionAccessed=!1,options={get passive(){return passiveOptionAccessed=!0}},noop=function(){};w.addEventListener&&w.addEventListener("p",noop,options),w.removeEventListener&&w.removeEventListener("p",noop,!1);var supportsPassiveEvents=passiveOptionAccessed,supportsPointerEvents="PointerEvent"in w,onTouchStartInWindow="ontouchstart"in w,supportsTouchEvents=onTouchStartInWindow||"TouchEvent"in w&&matchMedia("(any-pointer: coarse)").matches,hasTouch=(w.navigator.maxTouchPoints||0)>0||supportsTouchEvents,userAgent=w.navigator.userAgent||"",isIPad=matchMedia("(pointer: coarse)").matches&&/iPad|Macintosh/.test(userAgent)&&Math.min(w.screen.width||0,w.screen.height||0)>=768,hasCoarsePrimaryPointer=(matchMedia("(pointer: coarse)").matches||!matchMedia("(pointer: fine)").matches&&onTouchStartInWindow)&&!/Windows.*Firefox/.test(userAgent),hasAnyHoverOrAnyFinePointer=matchMedia("(any-pointer: fine)").matches||matchMedia("(any-hover: hover)").matches||isIPad||!onTouchStartInWindow,deviceType=!hasTouch||!hasAnyHoverOrAnyFinePointer&&hasCoarsePrimaryPointer?hasTouch?"touchOnly":"mouseOnly":"hybrid",primaryInput="mouseOnly"===deviceType?"mouse":"touchOnly"===deviceType||hasCoarsePrimaryPointer?"touch":"mouse"},"../../node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZT:()=>noop,jU:()=>isBrowser});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").jU?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"../../node_modules/react-use/esm/useMeasure.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js"),_misc_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js"),defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const __WEBPACK_DEFAULT_EXPORT__=_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU&&void 0!==window.ResizeObserver?function useMeasure(){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),element=_a[0],ref=_a[1],_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState),rect=_b[0],setRect=_b[1],observer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return new window.ResizeObserver((function(entries){if(entries[0]){var _a=entries[0].contentRect,x=_a.x,y=_a.y,width=_a.width,height=_a.height,top_1=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;setRect({x,y,width,height,top:top_1,left,bottom,right})}}))}),[]);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((function(){if(element)return observer.observe(element),function(){observer.disconnect()}}),[element]),[ref,rect]}:function(){return[_misc_util__WEBPACK_IMPORTED_MODULE_2__.ZT,defaultState]}}}]);