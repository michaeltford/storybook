"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8912],{"./src/models/WorkbookFrom2DArray.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookFrom2DArray:()=>WorkbookFrom2DArray,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/models/src/workbook/WorkbookModel.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props,options={maxColumns:20,maxRows:100},workbookModel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new _sheetxl_models__WEBPACK_IMPORTED_MODULE_2__.$([[1,2,3],[4,5,6],[7,8,9]],options)),[]),refWorkbookElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_3__.M,{sx:{border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"},ref:refWorkbookElement,onLoad:e=>{const wbElement1=refWorkbookElement.current,wbElement2=e.source;wbElement1.getWorkbook(),wbElement2.getWorkbook()},...rest,model:workbookModel,title:"From 2D Array"})};Template.displayName="Template";const WorkbookFrom2DArray=Template.bind({});WorkbookFrom2DArray.args={},WorkbookFrom2DArray.storyName="From 2D Array";const __WEBPACK_DEFAULT_EXPORT__={title:"Models/From 2D Array",component:WorkbookFrom2DArray};WorkbookFrom2DArray.parameters={...WorkbookFrom2DArray.parameters,docs:{...WorkbookFrom2DArray.parameters?.docs,source:{originalSource:"props => {\n  const {\n    ...rest\n  } = (props as any);\n  const options = {\n    maxColumns: 20,\n    maxRows: 100\n  };\n\n  /*\r\n   * Create a simple workbook. Wrap in a memo so that it is only created once.\r\n   */\n  // Simple workbook model\n  const workbookModel: IWorkbookModel = useMemo(() => {\n    return new WorkbookModel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], options);\n  }, []);\n  const style: CSSProperties = {\n    border: 'blue solid 2px',\n    borderRadius: '8px',\n    flex: '1 1 100%',\n    minHeight: \"460px\" // arbitrary min height to layout nicely.\n  };\n\n  // Note used but for illustration purposes.\n  const refWorkbookElement = useRef<WorkbookElement>();\n  return <StandaloneWorkbook sx={style} ref={refWorkbookElement} onLoad={(e: WorkbookLoadEvent) => {\n    // The on load source has the workbookElement and so does the ref.\n    // From a workbook element you can\n    const wbElement1 = refWorkbookElement.current;\n    const wbElement2 = e.source;\n    const _wbModel1 = wbElement1.getWorkbook();\n    const _wbModel2 = wbElement2.getWorkbook();\n  }} {...rest} model={workbookModel} title='From 2D Array' />;\n}",...WorkbookFrom2DArray.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookFrom2DArray"]},"../../packages/common/src/types/Primitives.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CB:()=>EMPTY_BOUNDS,CY:()=>EMPTY_SCROLL_POINT,Do:()=>EMPTY_RECT,G2:()=>CartesianDirection,HY:()=>MimeType,J3:()=>AnchorLocation});let CartesianDirection=function(CartesianDirection){return CartesianDirection.Up="up",CartesianDirection.Down="down",CartesianDirection.Left="left",CartesianDirection.Right="right",CartesianDirection}({}),AnchorLocation=function(AnchorLocation){return AnchorLocation.TopLeft="tl",AnchorLocation.Top="t",AnchorLocation.TopRight="tr",AnchorLocation.Left="l",AnchorLocation.Center="c",AnchorLocation.Right="r",AnchorLocation.BottomLeft="bl",AnchorLocation.Bottom="b",AnchorLocation.BottomRight="br",AnchorLocation}({});const EMPTY_SCROLL_POINT=Object.freeze({scrollLeft:0,scrollTop:0}),EMPTY_RECT=Object.freeze({left:0,top:0,bottom:0,right:0}),EMPTY_BOUNDS=Object.freeze({x:0,y:0,width:0,height:0});let MimeType=function(MimeType){return MimeType.html="text/html",MimeType.csv="text/csv",MimeType.plain="text/plain",MimeType}({})},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(6883),__webpack_require__.e(3089),__webpack_require__.e(284),__webpack_require__.e(9894),__webpack_require__.e(379),__webpack_require__.e(6273),__webpack_require__.e(2470),__webpack_require__.e(7942),__webpack_require__.e(9378),__webpack_require__.e(4878),__webpack_require__.e(5853),__webpack_require__.e(2063),__webpack_require__.e(2576),__webpack_require__.e(9108),__webpack_require__.e(9465),__webpack_require__.e(3924),__webpack_require__.e(974),__webpack_require__.e(1440),__webpack_require__.e(9362),__webpack_require__.e(2993),__webpack_require__.e(8652),__webpack_require__.e(2418),__webpack_require__.e(8312),__webpack_require__.e(7199),__webpack_require__.e(2091)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.f_,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookmodel\n * snackbar\n * export/import to local file system\n * workbook title\n * material-ui theme and light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is exiplicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneworkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},showHorizontalScrollbar:{defaultValue:null,description:"",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},notifier:{defaultValue:null,description:"",name:"notifier",required:!1,type:{name:"Notifier"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderToolbar:{defaultValue:null,description:"Allow for custom toolbars\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specifc material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}}}]);