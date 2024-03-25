"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9475],{"./src/components/BoundedWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoundedWidget});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("../../node_modules/@mui/material/Link/Link.js"),IconButton=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),DatasetLinked=__webpack_require__("../../node_modules/@mui/icons-material/DatasetLinked.js"),FormControl=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),FormHelperText=__webpack_require__("../../node_modules/@mui/material/FormHelperText/FormHelperText.js");const useWorkbookRange=(model,address,listener,options)=>{const listenerRef=(0,react.useRef)(listener);listenerRef.current=listener;const fireOnAddressChange=options?.fireOnAddressChange??!0;(0,react.useEffect)((()=>{if(!model||!address||!listenerRef.current){const event={getWorkbook:()=>null,getSheet:()=>null,getRange:()=>null,trigger:"remove"};return void listenerRef.current?.(event)}const stableListener=event=>{listenerRef.current?.(event)},unlistener=model.addRangeListener(address,stableListener,options);if(fireOnAddressChange){const range=model.getRange(address);stableListener({getWorkbook:()=>model,getSheet:()=>range.sheet(),getRange:()=>range,trigger:"modelChange"})}return()=>{unlistener?.()}}),[model,address])};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BoundedWidget=(0,react.memo)((props=>{const{initialAddress,createWidget,workbookModel,refWorkbookElement,children,...rest}=props,[address,setAddress]=(0,react.useState)(null),[range,setRange]=(0,react.useState)(null);useWorkbookRange(workbookModel,address,(event=>{setRange(event.getRange())}));const widget=(0,react.useMemo)((()=>createWidget({range,refWorkbookElement})),[range]);return(0,jsx_runtime.jsxs)(FormControl.A,{...rest,children:[(0,jsx_runtime.jsxs)(Box.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",rowGap:theme=>theme.spacing(.25)},children:[widget,(0,jsx_runtime.jsx)(IconButton.A,{sx:{my:-2},onClick:()=>{setAddress(null===address?workbookModel.getActiveAddressCoordsA1():null)},children:(0,jsx_runtime.jsx)(DatasetLinked.A,{})})]}),(0,jsx_runtime.jsx)(FormHelperText.A,{children:(0,jsx_runtime.jsx)(Link.A,{component:"button",underline:"hover",variant:"body2",disabled:!range?.isValid(),sx:{"&:not(:hover)":{color:"inherit"},"&[disabled]":{color:theme=>theme.palette.text.disabled,cursor:"default","&:hover":{textDecoration:"none"}}},onClick:()=>{refWorkbookElement.current?.goto?.(range)},children:range?`${range.toString()}`:"Unlinked"})})]})}));try{BoundedWidget.displayName="BoundedWidget",BoundedWidget.__docgenInfo={description:"2-way binding between a widget (children) and a cell range.",displayName:"BoundedWidget",props:{workbookModel:{defaultValue:null,description:"",name:"workbookModel",required:!0,type:{name:"IWorkbookModel"}},refWorkbookElement:{defaultValue:null,description:"",name:"refWorkbookElement",required:!0,type:{name:"MutableRefObject<WorkbookElement>"}},initialAddress:{defaultValue:null,description:"",name:"initialAddress",required:!1,type:{name:"string"}},createWidget:{defaultValue:null,description:"",name:"createWidget",required:!0,type:{name:"(props: BoundedWidgetElementProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundedWidget.tsx#BoundedWidget"]={docgenInfo:BoundedWidget.__docgenInfo,name:"BoundedWidget",path:"src/components/BoundedWidget.tsx#BoundedWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RelaxedChangeTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>RelaxedChangeTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelaxedChangeTextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value:propValue,onChange:propOnChange,onKeyDown:propOnKeyDown,onBlur:propOnBlur,...rest}=props,[lastChangeEvent,setLastChangeEvent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setLastChangeEvent(null)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.A,{...rest,value:lastChangeEvent?.target.value??propValue??"",onKeyDown:event=>{event.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.cK.Enter&&lastChangeEvent&&(setLastChangeEvent(null),propOnChange?.(lastChangeEvent),propOnKeyDown?.(event))},onBlur:event=>{setLastChangeEvent(null),propOnChange?.(event),propOnBlur?.(event)},onChange:event=>{setLastChangeEvent(event)}})}));try{RelaxedChangeTextField.displayName="RelaxedChangeTextField",RelaxedChangeTextField.__docgenInfo={description:"Simple component that delays firing onChange until enter or blur.",displayName:"RelaxedChangeTextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"]={docgenInfo:RelaxedChangeTextField.__docgenInfo,name:"RelaxedChangeTextField",path:"src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FT:()=>sharedCellRenderer});__webpack_require__("./src/components/BoundedWidget.tsx"),__webpack_require__("./src/components/RelaxedChangeTextField.tsx");var DefaultCellRenderer=__webpack_require__("../../packages/grid/src/DefaultCellRenderer.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sharedCellRenderer=props=>(0,jsx_runtime.jsx)(DefaultCellRenderer.d,{...props,value:`${props.range.rowStart}:${props.range.colStart}`});sharedCellRenderer.displayName="sharedCellRenderer";try{sharedCellRenderer.displayName="sharedCellRenderer",sharedCellRenderer.__docgenInfo={description:"",displayName:"sharedCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!0,type:{name:"any"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!1,type:{name:"CellRangeCoords"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!1,type:{name:"GridOverlayView"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SimpleCellRenderer.tsx#sharedCellRenderer"]={docgenInfo:sharedCellRenderer.__docgenInfo,name:"sharedCellRenderer",path:"src/components/SimpleCellRenderer.tsx#sharedCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/Grid.SplitScrollable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SplitScrollable:()=>SplitScrollable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/common-react/src/scroll/ScrollPane.tsx"),_sheetxl_grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/grid/src/Grid.tsx"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/storybook-panels.css"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const Template=props=>{const{...rest}=props,[viewportTopLeft,setViewPortTopLeft]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[viewportTopRight,setViewPortTopRight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),gridRefTopLeft=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),gridRefTopRight=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"storybook-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_4__.Gr,{style:{border:"grey solid 1px",flex:"1 1 50%"},viewport:viewportTopLeft,showVerticalScrollbar:!1,onScrollViewport:scrollPosition=>{gridRefTopLeft.current?.scrollTo(scrollPosition),gridRefTopRight.current?.scrollTo({top:scrollPosition.top})},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_5__.x,{...rest,style:{width:"100%",height:"100%"},onViewportChange:v=>{setViewPortTopLeft(v),setViewPortTopRight((prev=>({...prev,top:v.top})))},ref:gridRefTopLeft,cellRenderer:_components__WEBPACK_IMPORTED_MODULE_1__.FT})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_4__.Gr,{style:{border:"grey solid 1px",flex:"1 1 50%"},viewport:viewportTopRight,onScrollViewport:scrollPosition=>{gridRefTopLeft.current?.scrollTo({top:scrollPosition.top}),gridRefTopRight.current?.scrollTo(scrollPosition)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_5__.x,{style:{width:"100%",height:"100%"},...rest,onViewportChange:v=>{setViewPortTopLeft((prev=>({...prev,top:v.top}))),setViewPortTopRight(v)},ref:gridRefTopRight,cellRenderer:_components__WEBPACK_IMPORTED_MODULE_1__.FT})})]})})};Template.displayName="Template";const SplitScrollable=Template.bind({});SplitScrollable.args={columnCount:200,rowCount:200};const __WEBPACK_DEFAULT_EXPORT__={title:"Scrollable Grid",parameters:{controls:{sort:"requiredFirst"}}};SplitScrollable.parameters={...SplitScrollable.parameters,docs:{...SplitScrollable.parameters?.docs,source:{originalSource:"props => {\n  const {\n    ...rest\n  } = (props as any);\n  const [viewportTopLeft, setViewPortTopLeft] = useState<ScrollableViewport>(null);\n  const [viewportTopRight, setViewPortTopRight] = useState<ScrollableViewport>(null);\n  const gridRefTopLeft = useRef<GridElement>(null);\n  const gridRefTopRight = useRef<GridElement>(null);\n  return <div className=\"storybook-container\">\r\n      <div style={{\n      display: \"flex\"\n    }}>\r\n      <ScrollPane style={{\n        border: 'grey solid 1px',\n        flex: \"1 1 50%\"\n      }} viewport={viewportTopLeft} showVerticalScrollbar={false} // We don't show the first vertical scroll bar\n      onScrollViewport={scrollPosition => {\n        gridRefTopLeft.current?.scrollTo(scrollPosition); // scroll ourself\n        gridRefTopRight.current?.scrollTo({\n          top: scrollPosition.top\n        });\n      }}>\r\n        <Grid {...rest} style={{\n          width: '100%',\n          height: '100%'\n        }} onViewportChange={v => {\n          setViewPortTopLeft(v);\n          setViewPortTopRight(prev => {\n            return {\n              ...prev,\n              top: v.top\n            };\n          });\n        }} ref={gridRefTopLeft} cellRenderer={sharedCellRenderer} />\r\n      </ScrollPane>\r\n      <ScrollPane style={{\n        border: 'grey solid 1px',\n        flex: \"1 1 50%\"\n      }} viewport={viewportTopRight} onScrollViewport={scrollPosition => {\n        gridRefTopLeft.current?.scrollTo({\n          top: scrollPosition.top\n        });\n        gridRefTopRight.current?.scrollTo(scrollPosition); // scroll ourself\n      }}>\r\n        <Grid style={{\n          width: '100%',\n          height: '100%'\n        }} {...rest} onViewportChange={v => {\n          setViewPortTopLeft(prev => {\n            return {\n              ...prev,\n              top: v.top\n            };\n          });\n          setViewPortTopRight(v);\n        }} ref={gridRefTopRight} cellRenderer={sharedCellRenderer} />\r\n      </ScrollPane>\r\n      </div>\r\n    </div>;\n}",...SplitScrollable.parameters?.docs?.source}}};const __namedExportsOrder=["SplitScrollable"]},"../../packages/common-react/src/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OD:()=>HorizontalAlignment,Uq:()=>KeyModifiers,cK:()=>KeyCodes,eZ:()=>MouseButtonCodes,sY:()=>EMPTY_CSS_PROPERTIES});let HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.General="general",HorizontalAlignment.Left="left",HorizontalAlignment.Right="right",HorizontalAlignment.Center="center",HorizontalAlignment.Justify="justify",HorizontalAlignment.Fill="fill",HorizontalAlignment.Distributed="distributed",HorizontalAlignment.CenterContinuous="centerContinuous",HorizontalAlignment}({}),KeyModifiers=function(KeyModifiers){return KeyModifiers.Shift="shift",KeyModifiers.Alt="alt",KeyModifiers.Ctrl="ctrl",KeyModifiers.Meta="meta",KeyModifiers}({}),KeyCodes=function(KeyCodes){return KeyCodes[KeyCodes.BackSpace=8]="BackSpace",KeyCodes[KeyCodes.Tab=9]="Tab",KeyCodes[KeyCodes.Clear=12]="Clear",KeyCodes[KeyCodes.Enter=13]="Enter",KeyCodes[KeyCodes.Shift=16]="Shift",KeyCodes[KeyCodes.Control=17]="Control",KeyCodes[KeyCodes.Alt=18]="Alt",KeyCodes[KeyCodes.Pause=19]="Pause",KeyCodes[KeyCodes.CapsLock=20]="CapsLock",KeyCodes[KeyCodes.Escape=27]="Escape",KeyCodes[KeyCodes.Space=32]="Space",KeyCodes[KeyCodes.PageUp=33]="PageUp",KeyCodes[KeyCodes.PageDown=34]="PageDown",KeyCodes[KeyCodes.End=35]="End",KeyCodes[KeyCodes.Home=36]="Home",KeyCodes[KeyCodes.Left=37]="Left",KeyCodes[KeyCodes.Up=38]="Up",KeyCodes[KeyCodes.Right=39]="Right",KeyCodes[KeyCodes.Down=40]="Down",KeyCodes[KeyCodes.Insert=45]="Insert",KeyCodes[KeyCodes.Delete=46]="Delete",KeyCodes[KeyCodes.Digit_8=56]="Digit_8",KeyCodes[KeyCodes.Y=89]="Y",KeyCodes[KeyCodes.Z=90]="Z",KeyCodes[KeyCodes.Meta=91]="Meta",KeyCodes[KeyCodes.F1=112]="F1",KeyCodes[KeyCodes.F2=113]="F2",KeyCodes[KeyCodes.F3=114]="F3",KeyCodes[KeyCodes.F4=115]="F4",KeyCodes[KeyCodes.F5=116]="F5",KeyCodes[KeyCodes.F6=117]="F6",KeyCodes[KeyCodes.F7=118]="F7",KeyCodes[KeyCodes.F8=119]="F8",KeyCodes[KeyCodes.F9=120]="F9",KeyCodes[KeyCodes.F10=121]="F10",KeyCodes[KeyCodes.F11=122]="F11",KeyCodes[KeyCodes.F12=123]="F12",KeyCodes[KeyCodes.NumLock=144]="NumLock",KeyCodes[KeyCodes.ScrollLock=145]="ScrollLock",KeyCodes[KeyCodes.BackSlash=220]="BackSlash",KeyCodes[KeyCodes.Slash=191]="Slash",KeyCodes[KeyCodes.BracketRight=221]="BracketRight",KeyCodes[KeyCodes.BracketLeft=219]="BracketLeft",KeyCodes}({}),MouseButtonCodes=function(MouseButtonCodes){return MouseButtonCodes[MouseButtonCodes.Left=1]="Left",MouseButtonCodes[MouseButtonCodes.Middle=2]="Middle",MouseButtonCodes[MouseButtonCodes.Right=3]="Right",MouseButtonCodes}({});const EMPTY_CSS_PROPERTIES={}},"../../packages/grid/src/DefaultCellRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>DefaultCellRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultCellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value,view,bounds,range,zoom,children,style:propStyle,...rest}=props,fontSize=propStyle?.fontSize||1056/72;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"2px 4px",fontFamily:"Calibri",letterSpacing:-.25,lineHeight:1.2,fontSize,...propStyle},...rest,children:value})}));try{DefaultCellRenderer.displayName="DefaultCellRenderer",DefaultCellRenderer.__docgenInfo={description:"Default cell component capable of rendering a value",displayName:"DefaultCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!0,type:{name:"any"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!1,type:{name:"CellRangeCoords"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!1,type:{name:"GridOverlayView"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"]={docgenInfo:DefaultCellRenderer.__docgenInfo,name:"DefaultCellRenderer",path:"../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/grid/src/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_BaseGrid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/BaseGrid.tsx"),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Grid=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{width:propWidth,height:propHeight,style:propStyle={},className:propClassName,...rest}=props,[refMeasure,{width,height}]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_2__.A)(),realizedWidth=propWidth??width,realizedHeight=propHeight??height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:propClassName,style:{...propStyle},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",top:"0px",left:"0px",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",boxSizing:"content-box"},ref:refMeasure,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BaseGrid__WEBPACK_IMPORTED_MODULE_3__.Ay,{ref:refForwarded,width:realizedWidth,height:realizedHeight,...rest})})})})));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{width:{defaultValue:null,description:"Width of the grid container",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the grid container",name:"height",required:!1,type:{name:"number"}},columnCount:{defaultValue:null,description:"Number of columns in the grid",name:"columnCount",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"Number of rows in the grid",name:"rowCount",required:!0,type:{name:"number"}},defaultColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultColumnWidth",required:!1,type:{name:"number"}},defaultRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"defaultRowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getRowHeight",required:!1,type:{name:"ItemSizer"}},getColumnWidth:{defaultValue:null,description:"Passed through to\n@see useCellLayoutHook. If cellLayout property is provided this is ignored",name:"getColumnWidth",required:!1,type:{name:"ItemSizer"}},cellLayout:{defaultValue:null,description:"",name:"cellLayout",required:!1,type:{name:"CellLayout"}},onViewportScroll:{defaultValue:null,description:"Called on scroll, subject to debouncing. Used for programmatic changes. Called even on load",name:"onViewportScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onImmediateScroll:{defaultValue:null,description:"Called immediately on scroll. Used for programmatic changes. Called even on load",name:"onImmediateScroll",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},onViewportChange:{defaultValue:null,description:"Fired when the view port changes.\nThis is in pixel coordinates and is slightly different than viewable cells because off screen location range could change",name:"onViewportChange",required:!1,type:{name:"(viewport: ScrollableViewport) => void"}},enableMouseWheel:{defaultValue:null,description:"Enable dragging active cell and selections",name:"enableMouseWheel",required:!1,type:{name:"boolean"}},onWheelScroll:{defaultValue:null,description:"When wheel mouse is called. If return false then wheelMouse will not be processed",name:"onWheelScroll",required:!1,type:{name:"(event: WheelEvent) => boolean | void"}},scrollPoint:{defaultValue:null,description:"The location of the top left scroll corner",name:"scrollPoint",required:!1,type:{name:"Partial<TopLeft>"}},mergedRanges:{defaultValue:null,description:"Is either an array of merged cells or a CellRangeLookup",name:"mergedRanges",required:!1,type:{name:"CellRangeCoords[] | CellRangeLookup"}},freezeLeft:{defaultValue:null,description:"Number of frozen left",name:"freezeLeft",required:!1,type:{name:"number | FrozenEdge"}},freezeTop:{defaultValue:null,description:"Number of frozen top",name:"freezeTop",required:!1,type:{name:"number | FrozenEdge"}},freezeLeftProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeLeftProps",required:!1,type:{name:"Partial<LineProps>"}},freezeTopProps:{defaultValue:null,description:"Allow for customization of freezeTopDivider",name:"freezeTopProps",required:!1,type:{name:"Partial<LineProps>"}},onFirstRender:{defaultValue:null,description:"Call only once when the renders for the first time.",name:"onFirstRender",required:!1,type:{name:"(grid: GridElement) => void"}},cellRenderer:{defaultValue:null,description:"Return the actual element to render\n@remarks There can be many cells so care should be taken\nto ensure these are as performant as possible. By default\nthe pointerEvents are set to none. To enable interaction this should be\noverwritten.",name:"cellRenderer",required:!1,type:{name:"(props: CellRendererProps<any>) => ReactNode"}},cellInsets:{defaultValue:null,description:"Allow for cells to be inset. This is a way to account for borders. By default this is 1, 1, 1,x",name:"cellInsets",required:!1,type:{name:"Rectangle"}},overlays:{defaultValue:null,description:"Render elements for the view. This will be called whenever the viewport changes",name:"overlays",required:!1,type:{name:"((view: GridOverlayView) => ReactNode)[]"}},overlaysProps:{defaultValue:null,description:"Props called to overlays",name:"overlaysProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},allowOverlaysOverflow:{defaultValue:null,description:"Overlays are generally clipped to fit in the viewport but\nthis allows for the properties to be overridden.",name:"allowOverlaysOverflow",required:!1,type:{name:"boolean"}},stageWrapper:{defaultValue:null,description:"Allows users to Wrap stage children in Top level Context",name:"stageWrapper",required:!1,type:{name:"(children: ReactNode) => ReactNode"}},stageProps:{defaultValue:null,description:"Props that can be injected to stage",name:"stageProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},showGridLines:{defaultValue:null,description:"Show grid lines.\nUseful for spreadsheets\nNOTE - should we just allow gridline renderers to be null?",name:"showGridLines",required:!1,type:{name:"boolean | DirectionOptions"}},gridLineColor:{defaultValue:null,description:"Customize grid line color\n@remarks This is overwritten by gridlinePropsVertical and gridlinePropsHorizontal",name:"gridLineColor",required:!1,type:{name:"string"}},gridLineRowsProps:{defaultValue:null,description:"Gridline props for rows",name:"gridLineRowsProps",required:!1,type:{name:"SVGProps<SVGPathElement>"}},gridLineColumnsProps:{defaultValue:null,description:"Gridline props for columns",name:"gridLineColumnsProps",required:!1,type:{name:"SVGProps<SVGPathElement>"}},hiddenRowsAt:{defaultValue:null,description:"Will skip rendering for this row and the adjacent rows in the given direction.",name:"hiddenRowsAt",required:!1,type:{name:"(rowIndex: number, forward: boolean) => number"}},hiddenColumnsAt:{defaultValue:null,description:"Will skip rendering for this columns and the adjacent columns in the given direction.",name:"hiddenColumnsAt",required:!1,type:{name:"(colIndex: number, forward: boolean) => number"}},hiddenCellAt:{defaultValue:null,description:"This will skip rendering.\nNote - This is superseded by hiddenRowsAt and hiddenColumnsAt.\nThis is typically used for cells that have nothing to render",name:"hiddenCellAt",required:!1,type:{name:"(coords: CellCoords) => boolean"}},getVisibleCells:{defaultValue:null,description:"Allows for optimization of rendering.\nThis will allow for quick skipping of cells that have nothing to render.\nIf this is not specified then all cells within the visible range will be\niterated and if hiddenCellAt does not return false a then cell renderer will be\ncalled.\n@param cellRange\n@returns either a CellCoord that should be rendered or an object with a coord and value. Note - the value is passed to the cell renderer",name:"getVisibleCells",required:!1,type:{name:"(view: GridOverlayView) => (CellCoords | { coords: CellCoords; value?: any; range?: CellRangeCoords; })[]"}},zoom:{defaultValue:null,description:"Zoom. 1 means no zoom\n@defaultValue 1 or none.",name:"zoom",required:!1,type:{name:"number"}},cursor:{defaultValue:null,description:"Cursor used for grid",name:"cursor",required:!1,type:{name:"string"}},clipCells:{defaultValue:null,description:"Clip overflow of cells unless explicitly provided",name:"clipCells",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<GridElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"../../packages/grid/src/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/storybook-panels.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  /* border: green solid 3px; */\n}\n\n.storybook-container > *:first-child {\n  border: blue solid 1px;\n\n  position: relative;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.innerZoomElementWrapper .storybook-container > *:first-child {\n  border: purple solid 1px;\n  min-height: 400px;\n  position: 'relative';\n}\n",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>isBrowser,lQ:()=>noop});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").Bd?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/storybook-panels.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/storybook-panels.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_storybook_panels_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);