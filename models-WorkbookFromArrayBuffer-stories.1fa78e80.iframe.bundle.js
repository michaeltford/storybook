"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1426],{"./src/models/WorkbookFromArrayBuffer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookFromArrayBuffer:()=>WorkbookFromArrayBuffer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/sheet-mui/src/io/Registry.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props,optionsImport={},[fetchUrl,setFetchUrl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("https://www.sheetxl.com/excel/Feature_Checklist.xlsx"),[workbookModel,setWorkbookModel]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[workbookTitle,setWorkbookTitle]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),style={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{minHeight:"460px",display:"flex"},children:workbookModel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_5__.M,{sx:style,...rest,model:workbookModel,title:workbookTitle})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{style:{minWidth:"360px"},value:fetchUrl,onChange:e=>{setFetchUrl(e.target.value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:_e=>{const promiseFetch=fetch(fetchUrl),promiseWorkbook=new Promise((async(resolve,reject)=>{const response=await promiseFetch;if(response.ok)try{const workbook=await _sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_2__.yV.importFromArrayBuffer(response.arrayBuffer(),"xlsx",optionsImport);setWorkbookTitle(_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__.eb(fetchUrl)),resolve(workbook)}catch(error){reject(error)}else reject(`Unable to fetch: ${response.url}`)}));setWorkbookModel(promiseWorkbook),Promise.resolve(promiseWorkbook).catch((error=>{console.warn("error",error),setTimeout((()=>{setWorkbookModel(null)}),3e3)}))},children:"Fetch"})]})})};Template.displayName="Template";const WorkbookFromArrayBuffer=Template.bind({});WorkbookFromArrayBuffer.args={},WorkbookFromArrayBuffer.storyName="From ArrayBuffer";const __WEBPACK_DEFAULT_EXPORT__={title:"Models/From ArrayBuffer",component:WorkbookFromArrayBuffer};WorkbookFromArrayBuffer.parameters={...WorkbookFromArrayBuffer.parameters,docs:{...WorkbookFromArrayBuffer.parameters?.docs,source:{originalSource:"props => {\n  const {\n    ...rest\n  } = (props as any);\n  const optionsImport: XLSXImportWorkbookOptions = {\n    // maxColumns: 20,\n    // maxRows: 100\n  };\n  const [fetchUrl, setFetchUrl] = useState<string>(`https://www.sheetxl.com/excel/Feature_Checklist.xlsx`);\n  const [workbookModel, setWorkbookModel] = useState<IWorkbookModel | Promise<IWorkbookModel>>(null);\n  const [workbookTitle, setWorkbookTitle] = useState<string>('');\n\n  /**\r\n   * This example reads a an ArrayBuffer from a fetch but could get the ArrayBuffer\r\n   * from any source. If then displays this in the StandaloneWorkbook widget.\r\n   */\n  const handleClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {\n    // Note - We are using a fetch to get an ArrayBuffer but this could be any source.\n    const promiseFetch = fetch(fetchUrl);\n    const promiseWorkbook: Promise<IWorkbookModel> = new Promise<IWorkbookModel>(async (resolve, reject) => {\n      const response = await promiseFetch;\n      if (!response.ok) {\n        reject(`Unable to fetch: ${response.url}`);\n        return;\n      }\n      try {\n        const workbook: IWorkbookModel = await DefaultIORegistry.importFromArrayBuffer(response.arrayBuffer(), \"xlsx\", optionsImport);\n        setWorkbookTitle(CommonUtils.getBaseName(fetchUrl));\n        resolve(workbook);\n      } catch (error) {\n        reject(error);\n      }\n    });\n    setWorkbookModel(promiseWorkbook);\n    Promise.resolve(promiseWorkbook).catch(error => {\n      console.warn('error', error);\n      setTimeout(() => {\n        setWorkbookModel(null);\n      }, 3000);\n    });\n  };\n  const style: CSSProperties = {\n    border: 'blue solid 2px',\n    borderRadius: '8px',\n    flex: '1 1 100%'\n  };\n\n  /**\r\n   * Show an input control until we type a url a file, then show the workbook.\r\n   */\n  return <Box sx={{\n    minHeight: \"460px\",\n    // arbitrary min height to layout nicely.\n    display: 'flex'\n  }}>\r\n    {workbookModel ? <>\r\n      <StandaloneWorkbook sx={style} {...rest} model={workbookModel} title={workbookTitle} />\r\n    </> : <Box style={{\n      padding: '8px 16px',\n      display: 'flex',\n      flexDirection: 'row',\n      gap: '8px',\n      alignItems: 'start',\n      ...style\n    }}>\r\n        <input style={{\n        minWidth: '360px'\n      }} value={fetchUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {\n        setFetchUrl(e.target.value);\n      }} />\r\n        <button onClick={handleClick}>\r\n          Fetch\r\n        </button>\r\n      </Box>}\r\n    </Box>;\n}",...WorkbookFromArrayBuffer.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookFromArrayBuffer"]},"../../packages/sheet-mui/src/io/Registry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yV:()=>DefaultIORegistry});var CommonUtils=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts");const DEFAULT_IMPORT_TYPES=[{key:"SheetXL",mimeType:".sxlj",description:"SheetXL JSON",exts:["sxlj"],handler:"importWorkbookFromJSON",isDefault:!0},{key:"CSV",mimeType:"text/csv",description:"Comma Delimited",exts:["csv"],handler:"importWorkbookFromCSV"},{key:"Excel",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",description:"Excel Workbook",exts:["xlsx","xls"],handler:"importWorkbookFromXLSX"}],DEFAULT_EXPORT_TYPES=[{key:"SheetXL",mimeType:"application/vnd.sheetxl.sheet",description:"SheetXL JSON",ext:"sxlj",handler:"exportWorkbookToJSON",isDefault:!0},{key:"CSV",mimeType:"text/csv",description:"Comma Delimited",ext:"csv",handler:"exportWorkbookToCSV"},{key:"Excel",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",description:"Excel Workbook",ext:"xlsx",tags:["SheetJS Pro"],handler:"exportWorkbookToXLSX"}];const DefaultIORegistry=new class IORegistry{_importTypes=[];_exportTypes=[];constructor(importTypes=DEFAULT_IMPORT_TYPES,exportTypes=DEFAULT_EXPORT_TYPES){this._importTypes=Object.freeze([...importTypes]),this._exportTypes=Object.freeze([...exportTypes])}getImportTypes(){return this._importTypes}getExportTypes(){return this._exportTypes}getImportTypeForKey(key){return this._importTypes.find((type=>type.key.includes(key)))??null}getImportTypeForExt(ext){return this._importTypes.find((type=>type.exts.includes(ext)))??null}getImportTypeForMimeType(mimeType){return this._importTypes.find((type=>type.mimeType===mimeType))??null}getExportTypeForExt(ext){return this._exportTypes.find((type=>type.ext===ext))??null}getAllInputTypeAsString(){const inputTypes=[];for(let i=0;i<this._importTypes.length;i++)inputTypes.push(this._importTypes[i].mimeType);return inputTypes}async importFromFile(input=null,options=null,notifier){let inputResolve,inputFile=null,inputInputs=null;return"string"==typeof input?inputInputs=input:inputFile=input,inputResolve=inputFile?input:await CommonUtils.ep(inputInputs??this.getAllInputTypeAsString().join(", ")),new Promise(((resolve,reject)=>{const resolves=[inputResolve,Promise.all([__webpack_require__.e(3089),__webpack_require__.e(6006),__webpack_require__.e(1206),__webpack_require__.e(2473),__webpack_require__.e(2873),__webpack_require__.e(2853),__webpack_require__.e(7665),__webpack_require__.e(4934)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts"))],showBusy=notifier?.showBusy?.("Opening...");Promise.resolve(showBusy).then((hideBusy=>{Promise.all(resolves).then((results=>{if(!results[0])return hideBusy?.(),void resolve(null);const file=results[0],showHideReading=notifier?.showBusy?.(`Opening ${file?.name?` '${file?.name}'`:""}...`);Promise.resolve(showHideReading).then((hideBusyReading=>{const type=this.getImportTypeForExt(CommonUtils.MZ(file?.name));let error=null;type||(error=new Error(`Unknown file type: ${CommonUtils.MZ(file?.name)??file?.name??"(empty)"}.`));let handlerImport=null;if("string"==typeof type?.handler?results[1][type.handler]&&(handlerImport=results[1][type.handler]):"function"==typeof type?.handler&&(handlerImport=type.handler),handlerImport||(error=new Error(`Unable to resolve handler for type: ${type?.description??CommonUtils.MZ(file?.name)??file?.name??"(empty)"}.`)),error)return hideBusyReading?.(),void reject(error);var promiseOrFile;(promiseOrFile=file,new Promise((async(resolve,reject)=>{try{const file=await Promise.resolve(promiseOrFile);if(!file)throw new Error("No file was provided.");const reader=new FileReader;reader.readAsArrayBuffer(file),reader.onload=()=>{resolve(reader.result)},reader.onerror=()=>{reject(reader.error)}}catch(error){reject(error)}}))).then((buffer=>{const array=new Uint8Array(buffer),optionsTyped={...options,...options?.typedOptions?.[type.key]};delete optionsTyped.typedOptions,Promise.resolve(handlerImport(array,optionsTyped)).then((newWorkbookModel=>{hideBusyReading?.(),resolve({workbookModel:newWorkbookModel,fileName:file.name,type})})).catch((error=>{hideBusyReading?.(),reject(new Error(error.message,{cause:error}))}))})).catch((error=>{hideBusyReading?.(),reject(new Error("Unable to open file.",{cause:error}))}))}))})).catch((error=>{hideBusy?.(),reject(new Error("Unable to open! Unable to load IO library.",{cause:error}))})).finally((()=>{hideBusy?.()}))}))}))}async importFromArrayBuffer(arrayBuffer,key,options=null){return new Promise(((resolve,reject)=>{let importType=this.getImportTypeForKey(key)??this.getImportTypeForExt(key)??this.getImportTypeForMimeType(key);if(!arrayBuffer||!importType)return void(arrayBuffer?key?key||reject(new Error(`Unable to resolve key: '${key}'.`)):reject(new Error("Key must be specified.")):reject(new Error("ArrayBuffer must be specified.")));const resolves=[arrayBuffer,Promise.all([__webpack_require__.e(3089),__webpack_require__.e(6006),__webpack_require__.e(1206),__webpack_require__.e(2473),__webpack_require__.e(2873),__webpack_require__.e(2853),__webpack_require__.e(7665),__webpack_require__.e(4934)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts"))];Promise.all(resolves).then((results=>{let handlerImport=null;"string"==typeof importType?.handler?results[1][importType.handler]&&(handlerImport=results[1][importType.handler]):"function"==typeof importType?.handler&&(handlerImport=importType.handler);let error=null;if(handlerImport||(error=new Error(`Unable to resolve handler for type: ${importType?.description??key}.`)),error)return void reject(error);const optionsTyped={...options,...options?.typedOptions?.[key]};delete optionsTyped.typedOptions,handlerImport(results[0],optionsTyped).then((workbookModel=>{resolve(workbookModel)})).catch((error=>{reject(error)}))})).catch((error=>{reject(error)}))}))}exportToFile(workbookModel,fileName,exportType){return new Promise(((resolve,reject)=>{if(!workbookModel||!fileName)return void reject(new Error("workbook model or file name must be provided."));const fileExt=CommonUtils.MZ(fileName);fileExt&&(fileName=fileName.substring(0,fileName.length-fileExt.length-1));for(let i=0;!exportType&&i<this._exportTypes.length;i++)(this._exportTypes[i].ext===fileExt||!fileExt&&this._exportTypes[i].isDefault)&&(exportType=this._exportTypes[i]);if(!exportType)return void reject(new Error(`Unable to determine export type for '${fileName}'.`));const fileNameWithExt=fileName+"."+exportType.ext;Promise.all([__webpack_require__.e(3089),__webpack_require__.e(6006),__webpack_require__.e(1206),__webpack_require__.e(2473),__webpack_require__.e(2873),__webpack_require__.e(2853),__webpack_require__.e(7665),__webpack_require__.e(4934)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts")).then((module=>{let handlerExport=null;"string"==typeof exportType.handler?module[exportType.handler]&&(handlerExport=module[exportType.handler]):"function"==typeof exportType.handler&&(handlerExport=exportType.handler),handlerExport?Promise.resolve(handlerExport(workbookModel)).then((array=>{__webpack_require__.e(6782).then(__webpack_require__.t.bind(__webpack_require__,"../../node_modules/file-saver/dist/FileSaver.min.js",23)).then((FileSaver=>{const blob=new Blob([array],{type:"application/octet-stream"});try{FileSaver.default.saveAs(blob,fileNameWithExt)}catch(e){return void reject(e)}resolve(!0)})).catch((error=>{reject(new Error("Unable to export! Not able to load file-saver library.",{cause:error}))}))})).catch((error=>{reject(new Error("Unable to export!",{cause:error}))})):reject(new Error(`Unable to resolve handler for type: ${exportType.description??exportType.ext??fileNameWithExt}.`))})).catch((error=>{reject(new Error("Unable to export! Not able to load io library.",{cause:error}))}))}))}importFromFetch(fetchUrl,options=null){const promiseFetch=fetch(fetchUrl);return{model:new Promise((async(resolve,reject)=>{try{const response=await promiseFetch,type=this.getImportTypeForExt(CommonUtils.MZ(fetchUrl));if(!type)throw new Error(`Unknown file type: ${fetchUrl}`);resolve(await DefaultIORegistry.importFromArrayBuffer(response.arrayBuffer(),type.key,options))}catch(error){reject(error)}})),title:CommonUtils.eb(fetchUrl)??null}}}},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(2483),__webpack_require__.e(9146),__webpack_require__.e(2470),__webpack_require__.e(3089),__webpack_require__.e(9524),__webpack_require__.e(379),__webpack_require__.e(9266),__webpack_require__.e(9866),__webpack_require__.e(4878),__webpack_require__.e(2836),__webpack_require__.e(6372),__webpack_require__.e(9098),__webpack_require__.e(1206),__webpack_require__.e(3053),__webpack_require__.e(2473),__webpack_require__.e(2873),__webpack_require__.e(2853),__webpack_require__.e(7117),__webpack_require__.e(9168),__webpack_require__.e(5271),__webpack_require__.e(7665),__webpack_require__.e(5477),__webpack_require__.e(6534),__webpack_require__.e(8065)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.f_,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookModel\n * snackbar\n * export/import to local file system\n * workbook title\n * Material-ui theme width light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is explicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneWorkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},showHorizontalScrollbar:{defaultValue:null,description:"",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},notifier:{defaultValue:null,description:"",name:"notifier",required:!1,type:{name:"Notifier"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderToolbar:{defaultValue:null,description:"Allow for custom toolbars\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specific material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}}}]);