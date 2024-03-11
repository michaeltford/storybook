(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[160],{"../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{c:()=>_assertThisInitialized})},"../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{c:()=>_setPrototypeOf})},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/models/WorkbookFrom2DArray.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookFrom2DArray:()=>WorkbookFrom2DArray,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/models/src/workbook/WorkbookModel.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props,options={maxColumns:20,maxRows:100},workbookModel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new _sheetxl_models__WEBPACK_IMPORTED_MODULE_2__.U([[1,2,3],[4,5,6],[7,8,9]],options)),[]),refWorkbookElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_3__.W,{sx:{border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"},ref:refWorkbookElement,onElementLoad:e=>{const wbElement1=refWorkbookElement.current,wbElement2=e.source;wbElement1.getModel(),wbElement2.getModel()},...rest,model:workbookModel,title:"From 2D Array"})};Template.displayName="Template";const WorkbookFrom2DArray=Template.bind({});WorkbookFrom2DArray.args={},WorkbookFrom2DArray.storyName="From 2D Array";const __WEBPACK_DEFAULT_EXPORT__={title:"Models/From 2D Array",component:WorkbookFrom2DArray};WorkbookFrom2DArray.parameters={...WorkbookFrom2DArray.parameters,docs:{...WorkbookFrom2DArray.parameters?.docs,source:{originalSource:"props => {\n  const {\n    ...rest\n  } = (props as any);\n  const options = {\n    maxColumns: 20,\n    maxRows: 100\n  };\n\n  /*\r\n   * Create a simple workbook. Wrap in a memo so that it is only created once.\r\n   */\n  // Simple workbook model\n  const workbookModel: IWorkbookModel = useMemo(() => {\n    return new WorkbookModel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], options);\n  }, []);\n  const style: CSSProperties = {\n    border: 'blue solid 2px',\n    borderRadius: '8px',\n    flex: '1 1 100%',\n    minHeight: \"460px\" // arbitrary min height to layout nicely.\n  };\n\n  // Note used but for illustration purposes.\n  const refWorkbookElement = useRef<WorkbookElement>();\n  return <StandaloneWorkbook sx={style} ref={refWorkbookElement} onElementLoad={(e: WorkbookLoadEvent) => {\n    // The on load source has the workbookElement and so does the ref.\n    // From a workbook element you can\n    const wbElement1 = refWorkbookElement.current;\n    const wbElement2 = e.source;\n    const _wbModel1 = wbElement1.getModel();\n    const _wbModel2 = wbElement2.getModel();\n  }} {...rest} model={workbookModel} title='From 2D Array' />;\n}",...WorkbookFrom2DArray.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookFrom2DArray"]},"../../packages/common/src/types/Primitives.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AJ:()=>EMPTY_RECT,MV:()=>MimeType,U:()=>EMPTY_TOP_LEFT,Uh:()=>AnchorLocation,iq:()=>CartesianDirection,ym:()=>EMPTY_BOUNDS});let CartesianDirection=function(CartesianDirection){return CartesianDirection.Up="up",CartesianDirection.Down="down",CartesianDirection.Left="left",CartesianDirection.Right="right",CartesianDirection}({}),AnchorLocation=function(AnchorLocation){return AnchorLocation.TopLeft="tl",AnchorLocation.Top="t",AnchorLocation.TopRight="tr",AnchorLocation.Left="l",AnchorLocation.Center="c",AnchorLocation.Right="r",AnchorLocation.BottomLeft="bl",AnchorLocation.Bottom="b",AnchorLocation.BottomRight="br",AnchorLocation}({});const EMPTY_TOP_LEFT=Object.freeze({left:0,top:0}),EMPTY_RECT=Object.freeze({left:0,top:0,bottom:0,right:0}),EMPTY_BOUNDS=Object.freeze({x:0,y:0,width:0,height:0});let MimeType=function(MimeType){return MimeType.html="text/html",MimeType.csv="text/csv",MimeType.plain="text/plain",MimeType}({})},"../../packages/common/src/utils/IOUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>fileToArrayBuffer});const fileToArrayBuffer=promiseOrFile=>new Promise((async(resolve,reject)=>{try{const file=await Promise.resolve(promiseOrFile);if(!file)throw new Error("No file was provided.");const reader=new FileReader;reader.readAsArrayBuffer(file),reader.onload=()=>{resolve(reader.result)},reader.onerror=()=>{reject(reader.error)}}catch(error){reject(error)}}))},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(4936),__webpack_require__.e(2564),__webpack_require__.e(8624),__webpack_require__.e(6140),__webpack_require__.e(6956),__webpack_require__.e(2412),__webpack_require__.e(6156),__webpack_require__.e(7992),__webpack_require__.e(1140),__webpack_require__.e(9212),__webpack_require__.e(5352),__webpack_require__.e(5440),__webpack_require__.e(5208),__webpack_require__.e(7552),__webpack_require__.e(9978),__webpack_require__.e(4112),__webpack_require__.e(1692),__webpack_require__.e(752),__webpack_require__.e(5744),__webpack_require__.e(4600),__webpack_require__.e(2173),__webpack_require__.e(4632),__webpack_require__.e(1976),__webpack_require__.e(3944)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.mS,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookModel\n * snackbar\n * export/import to local file system\n * workbook title\n * Material-ui theme width light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is explicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneWorkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"MUI SX props\n@see {@link https://mui.com/system/getting-started/the-sx-prop/}",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},showHorizontalScrollbar:{defaultValue:null,description:"Show the horizontal scrollbar",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"Show the vertical scrollbar",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},onElementLoad:{defaultValue:null,description:"Callback for when the workbook is loaded. Useful for hiding/showing\nloading panels",name:"onElementLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},notifier:{defaultValue:null,description:"Configure the notifier to use for alerts",name:"notifier",required:!1,type:{name:"Notifier"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},formulaBarProps:{defaultValue:null,description:"Allow for customizations on FormulaBar",name:"formulaBarProps",required:!1,type:{name:"FormulaBarProps"}},renderFormulaBar:{defaultValue:null,description:"Render FormulaBar\n@param props\n@returns",name:"renderFormulaBar",required:!1,type:{name:"(props: FormulaBarProps, ref: Ref<FormulaBarElement>) => ReactElement<any, string | JSXElementConstructor<any>>"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},tabsProps:{defaultValue:null,description:"Allow for customizations on tabs",name:"tabsProps",required:!1,type:{name:"WorkbookStripProps"}},renderTabs:{defaultValue:null,description:"Render custom tabs\n@param props\n@returns",name:"renderTabs",required:!1,type:{name:"(props: WorkbookStripProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"Customizations for the status bar",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderStatusBar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderStatusBar",required:!1,type:{name:"(props: StatusBarProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},toolbarProps:{defaultValue:null,description:"Props for the toolbar.",name:"toolbarProps",required:!1,type:{name:"WorkbookToolbarsProps"}},renderToolbar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},contextMenuProps:{defaultValue:null,description:"Allow for customizations on context menu",name:"contextMenuProps",required:!1,type:{name:"WorkbookContextMenuProps"}},renderContextMenu:{defaultValue:null,description:"Render custom context menu\n@param props\n@returns",name:"renderContextMenu",required:!1,type:{name:"(props: WorkbookContextMenuProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},loadingPanelProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"loadingPanelProps",required:!1,type:{name:"LoadingPanelProps"}},renderLoadingPanel:{defaultValue:null,description:"Render custom loading panel\n@param props\n@returns",name:"renderLoadingPanel",required:!1,type:{name:"(props: LoadingPanelProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},sheetProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"sheetProps",required:!1,type:{name:"SheetProps"}},renderSheet:{defaultValue:null,description:"Render Sheet\n@param props\n@returns",name:"renderSheet",required:!1,type:{name:"(props: SheetProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specific material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../../node_modules/fast-deep-equal/es6/index.js":module=>{"use strict";module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);