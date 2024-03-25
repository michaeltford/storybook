"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6603],{"../../node_modules/@mui/icons-material/DatasetLinked.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("../../node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("../../node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)([(0,_jsxRuntime.jsx)("path",{d:"M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z"},"0"),(0,_jsxRuntime.jsx)("path",{d:"M12 18c0-1.1.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2h-2c-1.1 0-2-.9-2-2m8-4h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4"},"1"),(0,_jsxRuntime.jsx)("path",{d:"M14 17h6v2h-6z"},"2")],"DatasetLinked")},"../../node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),useIsFocusVisible=__webpack_require__("../../node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("../../node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("../../node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.Yn)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.Yn)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.X4)(color,.4)};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.Ay)(Typography.A,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.A)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.A)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.A)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.A)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.A)(ref,focusVisibleRef),ownerState=(0,esm_extends.A)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.A)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.A)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.A)({color,className:(0,clsx.A)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./src/components/BoundedWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoundedWidget});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("../../node_modules/@mui/material/Link/Link.js"),IconButton=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),DatasetLinked=__webpack_require__("../../node_modules/@mui/icons-material/DatasetLinked.js"),FormControl=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),FormHelperText=__webpack_require__("../../node_modules/@mui/material/FormHelperText/FormHelperText.js");const useWorkbookRange=(model,address,listener,options)=>{const listenerRef=(0,react.useRef)(listener);listenerRef.current=listener;const fireOnAddressChange=options?.fireOnAddressChange??!0;(0,react.useEffect)((()=>{if(!model||!address||!listenerRef.current){const event={getWorkbook:()=>null,getSheet:()=>null,getRange:()=>null,trigger:"remove"};return void listenerRef.current?.(event)}const stableListener=event=>{listenerRef.current?.(event)},unlistener=model.addRangeListener(address,stableListener,options);if(fireOnAddressChange){const range=model.getRange(address);stableListener({getWorkbook:()=>model,getSheet:()=>range.sheet(),getRange:()=>range,trigger:"modelChange"})}return()=>{unlistener?.()}}),[model,address])};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BoundedWidget=(0,react.memo)((props=>{const{initialAddress,createWidget,workbookModel,refWorkbookElement,children,...rest}=props,[address,setAddress]=(0,react.useState)(null),[range,setRange]=(0,react.useState)(null);useWorkbookRange(workbookModel,address,(event=>{setRange(event.getRange())}));const widget=(0,react.useMemo)((()=>createWidget({range,refWorkbookElement})),[range]);return(0,jsx_runtime.jsxs)(FormControl.A,{...rest,children:[(0,jsx_runtime.jsxs)(Box.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",rowGap:theme=>theme.spacing(.25)},children:[widget,(0,jsx_runtime.jsx)(IconButton.A,{sx:{my:-2},onClick:()=>{setAddress(null===address?workbookModel.getActiveAddressCoordsA1():null)},children:(0,jsx_runtime.jsx)(DatasetLinked.A,{})})]}),(0,jsx_runtime.jsx)(FormHelperText.A,{children:(0,jsx_runtime.jsx)(Link.A,{component:"button",underline:"hover",variant:"body2",disabled:!range?.isValid(),sx:{"&:not(:hover)":{color:"inherit"},"&[disabled]":{color:theme=>theme.palette.text.disabled,cursor:"default","&:hover":{textDecoration:"none"}}},onClick:()=>{refWorkbookElement.current?.goto?.(range)},children:range?`${range.toString()}`:"Unlinked"})})]})}));try{BoundedWidget.displayName="BoundedWidget",BoundedWidget.__docgenInfo={description:"2-way binding between a widget (children) and a cell range.",displayName:"BoundedWidget",props:{workbookModel:{defaultValue:null,description:"",name:"workbookModel",required:!0,type:{name:"IWorkbookModel"}},refWorkbookElement:{defaultValue:null,description:"",name:"refWorkbookElement",required:!0,type:{name:"MutableRefObject<WorkbookElement>"}},initialAddress:{defaultValue:null,description:"",name:"initialAddress",required:!1,type:{name:"string"}},createWidget:{defaultValue:null,description:"",name:"createWidget",required:!0,type:{name:"(props: BoundedWidgetElementProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundedWidget.tsx#BoundedWidget"]={docgenInfo:BoundedWidget.__docgenInfo,name:"BoundedWidget",path:"src/components/BoundedWidget.tsx#BoundedWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RelaxedChangeTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>RelaxedChangeTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelaxedChangeTextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value:propValue,onChange:propOnChange,onKeyDown:propOnKeyDown,onBlur:propOnBlur,...rest}=props,[lastChangeEvent,setLastChangeEvent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setLastChangeEvent(null)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.A,{...rest,value:lastChangeEvent?.target.value??propValue??"",onKeyDown:event=>{event.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.cK.Enter&&lastChangeEvent&&(setLastChangeEvent(null),propOnChange?.(lastChangeEvent),propOnKeyDown?.(event))},onBlur:event=>{setLastChangeEvent(null),propOnChange?.(event),propOnBlur?.(event)},onChange:event=>{setLastChangeEvent(event)}})}));try{RelaxedChangeTextField.displayName="RelaxedChangeTextField",RelaxedChangeTextField.__docgenInfo={description:"Simple component that delays firing onChange until enter or blur.",displayName:"RelaxedChangeTextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"]={docgenInfo:RelaxedChangeTextField.__docgenInfo,name:"RelaxedChangeTextField",path:"src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/Workbook.WithWidgets.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookAppWithWidgets:()=>WorkbookAppWithWidgets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/Paper/Paper.js"),_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/Checkbox/Checkbox.js"),_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),_components_RelaxedChangeTextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RelaxedChangeTextField.tsx"),_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BoundedWidget.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=()=>{const[workbookModel,setWorkbookModel]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),refWorkbookElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{flex:"0",display:"flex",alignItems:"center",flexDirection:"row",m:.5,px:2,py:1,gap:2,rowGap:1},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__.A,{workbookModel,refWorkbookElement,createWidget:({range})=>{const cell=range?.cells()[0][0],update=range?.update;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_RelaxedChangeTextField__WEBPACK_IMPORTED_MODULE_1__.V,{sx:{width:"200px",...cell?.style.fill.asCSS()},size:"small",InputProps:{inputProps:{sx:{paddingTop:"3.5px",paddingBottom:"3.5px",color:cell?.style.font.fill.asCSS()}}},disabled:!range?.isValid()||cell.isReadOnly(),value:cell?.formattedValue.displayText??"",onChange:event=>{update({value:event.target.value},{parseTextAsValue:!0,autoFit:{fullContent:!0},description:`Type '${event.target.value}' from Widget`})}})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__.A,{workbookModel,refWorkbookElement,createWidget:({range})=>{const cell=range?.cells()[0][0],update=range?.update;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.A,{disabled:!range?.isValid()||cell.isReadOnly(),control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{padding:"1px",marginRight:"8px"},checked:!!cell?.value,onChange:()=>{update?.({value:!cell?.value},{autoFit:{fullContent:!0},description:"Toggle from Widget"})}}),label:"Is Checked",labelPlacement:"end"})}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{position:"relative",flex:"1",m:.5,display:"flex",alignItems:"stretch"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__.a,{model:workbookModel,onModelChange:model=>setWorkbookModel(model),ref:refWorkbookElement,titleProps:{placeHolder:"Untitled Widget Workbook"},sx:{flex:"1 1 100%"}})})]})};Template.displayName="Template";const WorkbookAppWithWidgets=Template.bind({});WorkbookAppWithWidgets.args={},WorkbookAppWithWidgets.storyName="With Widgets";const __WEBPACK_DEFAULT_EXPORT__={title:"Workbook/With Widgets",component:_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__.a};WorkbookAppWithWidgets.parameters={...WorkbookAppWithWidgets.parameters,docs:{...WorkbookAppWithWidgets.parameters?.docs,source:{originalSource:"() => {\n  const [workbookModel, setWorkbookModel] = useState<IWorkbookModel>(null);\n  // The widgets don't bind to the UI element but this is required for the goto link\n  const refWorkbookElement = useRef<WorkbookElement>();\n  return <Box sx={{\n    width: \"100%\",\n    height: \"100%\",\n    display: 'flex',\n    flexDirection: 'column'\n  }}>\r\n      <Paper sx={{\n      flex: '0',\n      display: 'flex',\n      alignItems: 'center',\n      flexDirection: 'row',\n      m: 0.5,\n      px: 2,\n      py: 1,\n      gap: 2,\n      rowGap: 1\n    }}>\r\n        <BoundedWidget workbookModel={workbookModel} refWorkbookElement={refWorkbookElement} createWidget={({\n        range\n      }) => {\n        const cell = range?.cells()[0][0]; // guaranteed to be non null\n        const update = range?.update;\n        return <RelaxedChangeTextField // only fires onChange on enter or blur\n        sx={{\n          width: '200px',\n          ...cell?.style.fill.asCSS()\n        }} size=\"small\" InputProps={{\n          inputProps: {\n            sx: {\n              paddingTop: '3.5px',\n              paddingBottom: '3.5px',\n              color: cell?.style.font.fill.asCSS()\n            }\n          }\n        }} disabled={!range?.isValid() || cell.isReadOnly()} value={cell?.formattedValue.displayText ?? ''} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {\n          update({\n            value: event.target.value\n          }, {\n            parseTextAsValue: true,\n            // try to parse the text as a value, uses Excel cell parsing logic by default, a function can be provided for more customizations\n            autoFit: {\n              fullContent: true\n            },\n            // true acts like excel by default. fullContent: true autofit for text and decimals also.\n            description: `Type '${event.target.value}' from Widget` // for undo/redo/collaboration\n          });\n        }} />;\n      }} />\r\n        <BoundedWidget workbookModel={workbookModel} refWorkbookElement={refWorkbookElement} createWidget={({\n        range\n      }) => {\n        const cell = range?.cells()[0][0]; // guaranteed to be non null\n        const update = range?.update;\n        return <FormControlLabel disabled={!range?.isValid() || cell.isReadOnly()} control={<Checkbox sx={{\n          padding: '1px',\n          marginRight: '8px'\n        }} checked={!!cell?.value} // truthy check\n        onChange={() => {\n          update?.({\n            value: !cell?.value\n          }, {\n            autoFit: {\n              fullContent: true\n            },\n            // true acts like excel by default. fullContent: true autofit for text and decimals also.\n            description: `Toggle from Widget` // for undo/redo/collaboration\n          });\n        }} />} label=\"Is Checked\" labelPlacement=\"end\" />;\n      }} />\r\n      </Paper>\r\n      <Paper sx={{\n      position: \"relative\",\n      flex: \"1\",\n      m: 0.5,\n      display: 'flex',\n      alignItems: 'stretch'\n    }}>\r\n        <StandaloneWorkbook model={workbookModel} onModelChange={model => setWorkbookModel(model)} ref={refWorkbookElement} titleProps={{\n        placeHolder: 'Untitled Widget Workbook'\n      }} sx={{\n        flex: '1 1 100%'\n      }} />\r\n      </Paper>\r\n    </Box>;\n}",...WorkbookAppWithWidgets.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookAppWithWidgets"]},"../../packages/common-react/src/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OD:()=>HorizontalAlignment,Uq:()=>KeyModifiers,cK:()=>KeyCodes,eZ:()=>MouseButtonCodes,sY:()=>EMPTY_CSS_PROPERTIES});let HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.General="general",HorizontalAlignment.Left="left",HorizontalAlignment.Right="right",HorizontalAlignment.Center="center",HorizontalAlignment.Justify="justify",HorizontalAlignment.Fill="fill",HorizontalAlignment.Distributed="distributed",HorizontalAlignment.CenterContinuous="centerContinuous",HorizontalAlignment}({}),KeyModifiers=function(KeyModifiers){return KeyModifiers.Shift="shift",KeyModifiers.Alt="alt",KeyModifiers.Ctrl="ctrl",KeyModifiers.Meta="meta",KeyModifiers}({}),KeyCodes=function(KeyCodes){return KeyCodes[KeyCodes.BackSpace=8]="BackSpace",KeyCodes[KeyCodes.Tab=9]="Tab",KeyCodes[KeyCodes.Clear=12]="Clear",KeyCodes[KeyCodes.Enter=13]="Enter",KeyCodes[KeyCodes.Shift=16]="Shift",KeyCodes[KeyCodes.Control=17]="Control",KeyCodes[KeyCodes.Alt=18]="Alt",KeyCodes[KeyCodes.Pause=19]="Pause",KeyCodes[KeyCodes.CapsLock=20]="CapsLock",KeyCodes[KeyCodes.Escape=27]="Escape",KeyCodes[KeyCodes.Space=32]="Space",KeyCodes[KeyCodes.PageUp=33]="PageUp",KeyCodes[KeyCodes.PageDown=34]="PageDown",KeyCodes[KeyCodes.End=35]="End",KeyCodes[KeyCodes.Home=36]="Home",KeyCodes[KeyCodes.Left=37]="Left",KeyCodes[KeyCodes.Up=38]="Up",KeyCodes[KeyCodes.Right=39]="Right",KeyCodes[KeyCodes.Down=40]="Down",KeyCodes[KeyCodes.Insert=45]="Insert",KeyCodes[KeyCodes.Delete=46]="Delete",KeyCodes[KeyCodes.Digit_8=56]="Digit_8",KeyCodes[KeyCodes.Y=89]="Y",KeyCodes[KeyCodes.Z=90]="Z",KeyCodes[KeyCodes.Meta=91]="Meta",KeyCodes[KeyCodes.F1=112]="F1",KeyCodes[KeyCodes.F2=113]="F2",KeyCodes[KeyCodes.F3=114]="F3",KeyCodes[KeyCodes.F4=115]="F4",KeyCodes[KeyCodes.F5=116]="F5",KeyCodes[KeyCodes.F6=117]="F6",KeyCodes[KeyCodes.F7=118]="F7",KeyCodes[KeyCodes.F8=119]="F8",KeyCodes[KeyCodes.F9=120]="F9",KeyCodes[KeyCodes.F10=121]="F10",KeyCodes[KeyCodes.F11=122]="F11",KeyCodes[KeyCodes.F12=123]="F12",KeyCodes[KeyCodes.NumLock=144]="NumLock",KeyCodes[KeyCodes.ScrollLock=145]="ScrollLock",KeyCodes[KeyCodes.BackSlash=220]="BackSlash",KeyCodes[KeyCodes.Slash=191]="Slash",KeyCodes[KeyCodes.BracketRight=221]="BracketRight",KeyCodes[KeyCodes.BracketLeft=219]="BracketLeft",KeyCodes}({}),MouseButtonCodes=function(MouseButtonCodes){return MouseButtonCodes[MouseButtonCodes.Left=1]="Left",MouseButtonCodes[MouseButtonCodes.Middle=2]="Middle",MouseButtonCodes[MouseButtonCodes.Right=3]="Right",MouseButtonCodes}({});const EMPTY_CSS_PROPERTIES={}},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(9729),__webpack_require__.e(4574),__webpack_require__.e(9500),__webpack_require__.e(7747),__webpack_require__.e(7065),__webpack_require__.e(4892),__webpack_require__.e(2188),__webpack_require__.e(2007),__webpack_require__.e(4640),__webpack_require__.e(9781),__webpack_require__.e(669),__webpack_require__.e(7594),__webpack_require__.e(3663),__webpack_require__.e(8503),__webpack_require__.e(1964),__webpack_require__.e(422),__webpack_require__.e(7343),__webpack_require__.e(9374),__webpack_require__.e(8674),__webpack_require__.e(6533),__webpack_require__.e(1629),__webpack_require__.e(9418),__webpack_require__.e(9363),__webpack_require__.e(584)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,className:propClassName,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.ld,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,className:propClassName,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookModel\n * snackbar\n * export/import to local file system\n * workbook title\n * Material-ui theme width light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is explicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);\nonForceLightImagesChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneWorkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"MUI SX props\n@see {@link https://mui.com/system/getting-started/the-sx-prop/}",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},showHorizontalScrollbar:{defaultValue:null,description:"Show the horizontal scrollbar",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"Show the vertical scrollbar",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},onElementLoad:{defaultValue:null,description:"Callback for when the workbook is loaded. Useful for hiding/showing\nloading panels",name:"onElementLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},notifier:{defaultValue:null,description:"Configure the notifier to use for alerts",name:"notifier",required:!1,type:{name:"Notifier"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},formulaBarProps:{defaultValue:null,description:"Allow for customizations on FormulaBar",name:"formulaBarProps",required:!1,type:{name:"FormulaBarProps"}},renderFormulaBar:{defaultValue:null,description:"Render FormulaBar\n@param props\n@returns",name:"renderFormulaBar",required:!1,type:{name:"(props: FormulaBarProps, ref: Ref<FormulaBarElement>) => ReactElement<any, string | JSXElementConstructor<any>>"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},tabsProps:{defaultValue:null,description:"Allow for customizations on tabs",name:"tabsProps",required:!1,type:{name:"WorkbookStripProps"}},renderTabs:{defaultValue:null,description:"Render custom tabs\n@param props\n@returns",name:"renderTabs",required:!1,type:{name:"(props: WorkbookStripProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"Customizations for the status bar",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderStatusBar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderStatusBar",required:!1,type:{name:"(props: StatusBarProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},toolbarProps:{defaultValue:null,description:"Props for the toolbar.",name:"toolbarProps",required:!1,type:{name:"WorkbookToolbarsProps"}},renderToolbar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},contextMenuProps:{defaultValue:null,description:"Allow for customizations on context menu",name:"contextMenuProps",required:!1,type:{name:"WorkbookContextMenuProps"}},renderContextMenu:{defaultValue:null,description:"Render custom context menu\n@param props\n@returns",name:"renderContextMenu",required:!1,type:{name:"(props: WorkbookContextMenuProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},loadingPanelProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"loadingPanelProps",required:!1,type:{name:"LoadingPanelProps"}},renderLoadingPanel:{defaultValue:null,description:"Render custom loading panel\n@param props\n@returns",name:"renderLoadingPanel",required:!1,type:{name:"(props: LoadingPanelProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},sheetProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"sheetProps",required:!1,type:{name:"SheetProps"}},renderSheet:{defaultValue:null,description:"Render Sheet\n@param props\n@returns",name:"renderSheet",required:!1,type:{name:"(props: SheetProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specific material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}},forceLightImages:{defaultValue:null,description:"If dark theme then the images will invert unless true.\n@defaultValue false",name:"forceLightImages",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}}}]);