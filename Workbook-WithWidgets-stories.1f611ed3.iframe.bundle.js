"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2574],{"./src/components/BoundedWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>BoundedWidget});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("../../node_modules/@mui/material/Link/Link.js"),IconButton=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),DatasetLinked=__webpack_require__("../../node_modules/@mui/icons-material/DatasetLinked.js"),FormControl=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),FormHelperText=__webpack_require__("../../node_modules/@mui/material/FormHelperText/FormHelperText.js");const useWorkbookRange=(model,address,listener,options)=>{const listenerRef=(0,react.useRef)(listener);listenerRef.current=listener;const fireOnAddressChange=options?.fireOnAddressChange??!0;(0,react.useEffect)((()=>{if(!model||!address||!listenerRef.current)return;const stableListener=(range,sheet,workbook)=>{listenerRef.current?.(range,sheet,workbook)},unlistener=model.addRangeListener(address,stableListener,options);if(fireOnAddressChange){const range=model.getRange(address);stableListener(range,range.sheet(),model)}return()=>{unlistener?.()}}),[model,address])};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BoundedWidget=(0,react.memo)((props=>{const{initialAddress,createWidget,workbookModel,refWorkbookElement,children,...rest}=props,[address,setAddress]=(0,react.useState)(null),[range,setRange]=(0,react.useState)(null);useWorkbookRange(workbookModel,address,(range=>{range&&setRange(range)}));const widget=(0,react.useMemo)((()=>createWidget({range,refWorkbookElement})),[range]);return(0,jsx_runtime.jsxs)(FormControl.Z,{...rest,children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",rowGap:theme=>theme.spacing(.25)},children:[widget,(0,jsx_runtime.jsx)(IconButton.Z,{sx:{my:-2},onClick:()=>{setAddress(workbookModel.getActiveAddressA1())},children:(0,jsx_runtime.jsx)(DatasetLinked.Z,{})})]}),(0,jsx_runtime.jsx)(FormHelperText.Z,{children:(0,jsx_runtime.jsx)(Link.Z,{component:"button",underline:"hover",variant:"body2",disabled:!range?.isValid(),sx:{"&:not(:hover)":{color:"inherit"},"&[disabled]":{color:theme=>theme.palette.text.disabled,cursor:"default","&:hover":{textDecoration:"none"}}},onClick:()=>{refWorkbookElement.current?.goto?.(range,!0)},children:range?`${range.toString()}`:"Unlinked"})})]})}));try{BoundedWidget.displayName="BoundedWidget",BoundedWidget.__docgenInfo={description:"2-way binding between a widget (children) and a cell range.",displayName:"BoundedWidget",props:{workbookModel:{defaultValue:null,description:"",name:"workbookModel",required:!0,type:{name:"IWorkbookModel"}},refWorkbookElement:{defaultValue:null,description:"",name:"refWorkbookElement",required:!0,type:{name:"MutableRefObject<WorkbookElement>"}},initialAddress:{defaultValue:null,description:"",name:"initialAddress",required:!1,type:{name:"string"}},createWidget:{defaultValue:null,description:"",name:"createWidget",required:!0,type:{name:"(props: BoundedWidgetElementProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundedWidget.tsx#BoundedWidget"]={docgenInfo:BoundedWidget.__docgenInfo,name:"BoundedWidget",path:"src/components/BoundedWidget.tsx#BoundedWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RelaxedChangeTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>RelaxedChangeTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelaxedChangeTextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value:propValue,onChange:propOnChange,onKeyDown:propOnKeyDown,onBlur:propOnBlur,...rest}=props,[lastChangeEvent,setLastChangeEvent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setLastChangeEvent(null)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.Z,{...rest,value:lastChangeEvent?.target.value??propValue??"",onKeyDown:event=>{event.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.mW.Enter&&lastChangeEvent&&(setLastChangeEvent(null),propOnChange?.(lastChangeEvent),propOnKeyDown?.(event))},onBlur:event=>{setLastChangeEvent(null),propOnChange?.(event),propOnBlur?.(event)},onChange:event=>{setLastChangeEvent(event)}})}));try{RelaxedChangeTextField.displayName="RelaxedChangeTextField",RelaxedChangeTextField.__docgenInfo={description:"Simple component that delays firing onChange until enter or blur.",displayName:"RelaxedChangeTextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"]={docgenInfo:RelaxedChangeTextField.__docgenInfo,name:"RelaxedChangeTextField",path:"src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/Workbook.WithWidgets.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookAppWithWidgets:()=>WorkbookAppWithWidgets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/Paper/Paper.js"),_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/Checkbox/Checkbox.js"),_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),_components_RelaxedChangeTextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RelaxedChangeTextField.tsx"),_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BoundedWidget.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=()=>{const[workbookModel,setWorkbookModel]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),refWorkbookElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{flex:"0",display:"flex",alignItems:"center",flexDirection:"row",m:.5,px:2,py:1,gap:2,rowGap:1},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__.l,{workbookModel,refWorkbookElement,createWidget:({range})=>{const cell=range?.cells()[0][0],update=range?.update;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_RelaxedChangeTextField__WEBPACK_IMPORTED_MODULE_1__.B,{sx:{width:"200px",...cell?.style.fill.asCSS()},size:"small",InputProps:{inputProps:{sx:{paddingTop:"3.5px",paddingBottom:"3.5px",color:cell?.style.font.fill.asCSS()}}},disabled:!range?.isValid()||cell.isReadOnly(),value:cell?.formattedValue.displayText??"",onChange:event=>{update({value:event.target.value},{parseTextAsValue:!0,autoFit:{fullContent:!0},description:`Type '${event.target.value}' from Widget`})}})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_BoundedWidget__WEBPACK_IMPORTED_MODULE_2__.l,{workbookModel,refWorkbookElement,createWidget:({range})=>{const cell=range?.cells()[0][0],update=range?.update;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.Z,{disabled:!range?.isValid()||cell.isReadOnly(),control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__.Z,{sx:{padding:"1px",marginRight:"8px"},checked:!!cell?.value,onChange:()=>{update?.({value:!cell?.value},{autoFit:{fullContent:!0},description:"Toggle from Widget"})}}),label:"Is Checked",labelPlacement:"end"})}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{position:"relative",flex:"1",m:.5,display:"flex",alignItems:"stretch"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__.M,{model:workbookModel,onModelChange:model=>setWorkbookModel(model),ref:refWorkbookElement,titleProps:{placeHolder:"Untitled Widget Workbook"},sx:{flex:"1 1 100%"}})})]})};Template.displayName="Template";const WorkbookAppWithWidgets=Template.bind({});WorkbookAppWithWidgets.args={},WorkbookAppWithWidgets.storyName="With Widgets";const __WEBPACK_DEFAULT_EXPORT__={title:"Workbook/With Widgets",component:_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_8__.M};WorkbookAppWithWidgets.parameters={...WorkbookAppWithWidgets.parameters,docs:{...WorkbookAppWithWidgets.parameters?.docs,source:{originalSource:"() => {\n  const [workbookModel, setWorkbookModel] = useState<IWorkbookModel>(null);\n  // The widgets don't bind to the UI element but this is required for the goto link\n  const refWorkbookElement = useRef<WorkbookElement>();\n  return <Box sx={{\n    width: \"100%\",\n    height: \"100%\",\n    display: 'flex',\n    flexDirection: 'column'\n  }}>\r\n      <Paper sx={{\n      flex: '0',\n      display: 'flex',\n      alignItems: 'center',\n      flexDirection: 'row',\n      m: 0.5,\n      px: 2,\n      py: 1,\n      gap: 2,\n      rowGap: 1\n    }}>\r\n        <BoundedWidget workbookModel={workbookModel} refWorkbookElement={refWorkbookElement} createWidget={({\n        range\n      }) => {\n        const cell = range?.cells()[0][0]; // guaranteed to be non null\n        const update = range?.update;\n        return <RelaxedChangeTextField // only fires onChange on enter or blur\n        sx={{\n          width: '200px',\n          ...cell?.style.fill.asCSS()\n        }} size=\"small\" InputProps={{\n          inputProps: {\n            sx: {\n              paddingTop: '3.5px',\n              paddingBottom: '3.5px',\n              color: cell?.style.font.fill.asCSS()\n            }\n          }\n        }} disabled={!range?.isValid() || cell.isReadOnly()} value={cell?.formattedValue.displayText ?? ''} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {\n          update({\n            value: event.target.value\n          }, {\n            parseTextAsValue: true,\n            // try to parse the text as a value, uses Excel cell parsing logic by default, a function can be provided for more customizations\n            autoFit: {\n              fullContent: true\n            },\n            // true acts like excel by default. fullContent: true autofit for text and decimals also.\n            description: `Type '${event.target.value}' from Widget` // for undo/redo/collaboration\n          });\n        }} />;\n      }} />\r\n        <BoundedWidget workbookModel={workbookModel} refWorkbookElement={refWorkbookElement} createWidget={({\n        range\n      }) => {\n        const cell = range?.cells()[0][0]; // guaranteed to be non null\n        const update = range?.update;\n        return <FormControlLabel disabled={!range?.isValid() || cell.isReadOnly()} control={<Checkbox sx={{\n          padding: '1px',\n          marginRight: '8px'\n        }} checked={!!cell?.value} // truthy check\n        onChange={() => {\n          update?.({\n            value: !cell?.value\n          }, {\n            autoFit: {\n              fullContent: true\n            },\n            // true acts like excel by default. fullContent: true autofit for text and decimals also.\n            description: `Toggle from Widget` // for undo/redo/collaboration\n          });\n        }} />} label=\"Is Checked\" labelPlacement=\"end\" />;\n      }} />\r\n      </Paper>\r\n      <Paper sx={{\n      position: \"relative\",\n      flex: \"1\",\n      m: 0.5,\n      display: 'flex',\n      alignItems: 'stretch'\n    }}>\r\n        <StandaloneWorkbook model={workbookModel} onModelChange={model => setWorkbookModel(model)} ref={refWorkbookElement} titleProps={{\n        placeHolder: 'Untitled Widget Workbook'\n      }} sx={{\n        flex: '1 1 100%'\n      }} />\r\n      </Paper>\r\n    </Box>;\n}",...WorkbookAppWithWidgets.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookAppWithWidgets"]},"../../packages/common-react/src/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kx:()=>HorizontalAlignment,az:()=>MouseButtonCodes,mW:()=>KeyCodes,n9:()=>EMPTY_CSS_PROPERTIES,rh:()=>KeyModifiers});let HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.General="general",HorizontalAlignment.Left="left",HorizontalAlignment.Right="right",HorizontalAlignment.Center="center",HorizontalAlignment.Justify="justify",HorizontalAlignment.Fill="fill",HorizontalAlignment.Distributed="distributed",HorizontalAlignment.CenterContinuous="centerContinuous",HorizontalAlignment}({}),KeyModifiers=function(KeyModifiers){return KeyModifiers.Shift="shift",KeyModifiers.Alt="alt",KeyModifiers.Ctrl="ctrl",KeyModifiers.Meta="meta",KeyModifiers}({}),KeyCodes=function(KeyCodes){return KeyCodes[KeyCodes.BackSpace=8]="BackSpace",KeyCodes[KeyCodes.Tab=9]="Tab",KeyCodes[KeyCodes.Clear=12]="Clear",KeyCodes[KeyCodes.Enter=13]="Enter",KeyCodes[KeyCodes.Shift=16]="Shift",KeyCodes[KeyCodes.Control=17]="Control",KeyCodes[KeyCodes.Alt=18]="Alt",KeyCodes[KeyCodes.Pause=19]="Pause",KeyCodes[KeyCodes.CapsLock=20]="CapsLock",KeyCodes[KeyCodes.Escape=27]="Escape",KeyCodes[KeyCodes.Space=32]="Space",KeyCodes[KeyCodes.PageUp=33]="PageUp",KeyCodes[KeyCodes.PageDown=34]="PageDown",KeyCodes[KeyCodes.End=35]="End",KeyCodes[KeyCodes.Home=36]="Home",KeyCodes[KeyCodes.Left=37]="Left",KeyCodes[KeyCodes.Up=38]="Up",KeyCodes[KeyCodes.Right=39]="Right",KeyCodes[KeyCodes.Down=40]="Down",KeyCodes[KeyCodes.Insert=45]="Insert",KeyCodes[KeyCodes.Delete=46]="Delete",KeyCodes[KeyCodes.Digit_8=56]="Digit_8",KeyCodes[KeyCodes.Y=89]="Y",KeyCodes[KeyCodes.Z=90]="Z",KeyCodes[KeyCodes.Meta=91]="Meta",KeyCodes[KeyCodes.F1=112]="F1",KeyCodes[KeyCodes.F2=113]="F2",KeyCodes[KeyCodes.F3=114]="F3",KeyCodes[KeyCodes.F4=115]="F4",KeyCodes[KeyCodes.F5=116]="F5",KeyCodes[KeyCodes.F6=117]="F6",KeyCodes[KeyCodes.F7=118]="F7",KeyCodes[KeyCodes.F8=119]="F8",KeyCodes[KeyCodes.F9=120]="F9",KeyCodes[KeyCodes.F10=121]="F10",KeyCodes[KeyCodes.F11=122]="F11",KeyCodes[KeyCodes.F12=123]="F12",KeyCodes[KeyCodes.NumLock=144]="NumLock",KeyCodes[KeyCodes.ScrollLock=145]="ScrollLock",KeyCodes[KeyCodes.BackSlash=220]="BackSlash",KeyCodes}({}),MouseButtonCodes=function(MouseButtonCodes){return MouseButtonCodes[MouseButtonCodes.Left=1]="Left",MouseButtonCodes[MouseButtonCodes.Middle=2]="Middle",MouseButtonCodes[MouseButtonCodes.Right=3]="Right",MouseButtonCodes}({});const EMPTY_CSS_PROPERTIES={}},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(2483),__webpack_require__.e(9146),__webpack_require__.e(5640),__webpack_require__.e(3089),__webpack_require__.e(9524),__webpack_require__.e(379),__webpack_require__.e(9266),__webpack_require__.e(9866),__webpack_require__.e(4878),__webpack_require__.e(2836),__webpack_require__.e(9098),__webpack_require__.e(4443),__webpack_require__.e(1206),__webpack_require__.e(5102),__webpack_require__.e(2473),__webpack_require__.e(2873),__webpack_require__.e(2853),__webpack_require__.e(7117),__webpack_require__.e(7381),__webpack_require__.e(5188),__webpack_require__.e(7665),__webpack_require__.e(5477),__webpack_require__.e(6585),__webpack_require__.e(8065)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.f_,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookModel\n * snackbar\n * export/import to local file system\n * workbook title\n * Material-ui theme width light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is explicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneWorkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},showHorizontalScrollbar:{defaultValue:null,description:"",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},notifier:{defaultValue:null,description:"",name:"notifier",required:!1,type:{name:"Notifier"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderToolbar:{defaultValue:null,description:"Allow for custom toolbars\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specific material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(f){return r=>{f.forEach((n=>{"function"==typeof n?n(r):null!=n&&(n.current=r)}))}}__webpack_require__.d(__webpack_exports__,{l:()=>o})},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZT:()=>noop,jU:()=>isBrowser});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").jU?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect}}]);