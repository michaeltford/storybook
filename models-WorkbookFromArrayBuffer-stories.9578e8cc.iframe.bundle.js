"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9619],{"./src/models/WorkbookFromArrayBuffer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkbookFromArrayBuffer:()=>WorkbookFromArrayBuffer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/sheet-mui/src/io/Registry.ts"),_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props,optionsImport={},[fetchUrl,setFetchUrl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("https://www.sheetxl.com/examples/features-checklist.xlsx"),[workbookModel,setWorkbookModel]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[workbookTitle,setWorkbookTitle]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),style={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{minHeight:"560px",display:"flex",position:"relative"},children:workbookModel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_5__.a,{sx:{...style,position:"absolute"},...rest,model:workbookModel,title:workbookTitle})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{style:{minWidth:"360px"},name:"input-url",autoComplete:"off",value:fetchUrl,onChange:e=>{setFetchUrl(e.target.value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:_e=>{const promiseFetch=fetch(fetchUrl),promiseWorkbook=new Promise((async(resolve,reject)=>{const response=await promiseFetch;if(response.ok)try{const workbook=await _sheetxl_sheet_mui__WEBPACK_IMPORTED_MODULE_2__.lk.importFromArrayBuffer(response.arrayBuffer(),"xlsx",optionsImport);setWorkbookTitle(_sheetxl_common__WEBPACK_IMPORTED_MODULE_3__.J(fetchUrl)),resolve(workbook)}catch(error){reject(error)}else reject(`Unable to fetch: ${response.url}`)}));setWorkbookModel(promiseWorkbook),Promise.resolve(promiseWorkbook).catch((error=>{console.warn("error",error),setTimeout((()=>{setWorkbookModel(null)}),3e3)}))},children:"Fetch"})]})})};Template.displayName="Template";const WorkbookFromArrayBuffer=Template.bind({});WorkbookFromArrayBuffer.args={},WorkbookFromArrayBuffer.storyName="From ArrayBuffer";const __WEBPACK_DEFAULT_EXPORT__={title:"Models/From ArrayBuffer",component:WorkbookFromArrayBuffer};WorkbookFromArrayBuffer.parameters={...WorkbookFromArrayBuffer.parameters,docs:{...WorkbookFromArrayBuffer.parameters?.docs,source:{originalSource:"props => {\n  const {\n    ...rest\n  } = (props as any);\n  const optionsImport: XLSXImportWorkbookOptions = {\n    // maxColumns: 20,\n    // maxRows: 100\n  };\n  const [fetchUrl, setFetchUrl] = useState<string>(`https://www.sheetxl.com/examples/features-checklist.xlsx`);\n  const [workbookModel, setWorkbookModel] = useState<IWorkbookModel | Promise<IWorkbookModel>>(null);\n  const [workbookTitle, setWorkbookTitle] = useState<string>('');\n\n  /**\r\n   * This example reads a an ArrayBuffer from a fetch but could get the ArrayBuffer\r\n   * from any source. If then displays this in the StandaloneWorkbook widget.\r\n   *\r\n   * The StandaloneWorkbook widget requires an IWorkbookModel or a Promise<IWorkbookModel>\r\n   * In this example we:\r\n   * 1. fetch from a url to get an array buffer\r\n   * 2. use the DefaultIORegistry.importFromArrayBuffer method to convert a ArrayBuffer to an IWorkbookModel\r\n   * 3. replace the null workbookModel with the resolved workbook model\r\n   */\n  const handleClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {\n    // Note - We are using a fetch to get an ArrayBuffer but this could be any source.\n    const promiseFetch = fetch(fetchUrl);\n    const promiseWorkbook: Promise<IWorkbookModel> = new Promise<IWorkbookModel>(async (resolve, reject) => {\n      const response = await promiseFetch;\n      if (!response.ok) {\n        reject(`Unable to fetch: ${response.url}`);\n        return;\n      }\n      try {\n        const workbook: IWorkbookModel = await DefaultIORegistry.importFromArrayBuffer(response.arrayBuffer(), \"xlsx\", optionsImport);\n\n        /* not needed but we want to show a title for the workbook too */\n        setWorkbookTitle(CommonUtils.getBaseName(fetchUrl));\n        resolve(workbook);\n      } catch (error) {\n        reject(error);\n      }\n    });\n    setWorkbookModel(promiseWorkbook);\n\n    /* this handles timeout for the fetch */\n    Promise.resolve(promiseWorkbook).catch(error => {\n      console.warn('error', error);\n      setTimeout(() => {\n        setWorkbookModel(null);\n      }, 3000);\n    });\n  };\n  const style: CSSProperties = {\n    border: 'blue solid 2px',\n    borderRadius: '8px',\n    flex: '1 1 100%'\n  };\n\n  /**\r\n   * Show an input control until we type a url a file, then show the workbook.\r\n   */\n  return <Box sx={{\n    minHeight: \"560px\",\n    // arbitrary min height to layout nicely.\n    display: 'flex',\n    position: 'relative'\n  }}>\r\n    {workbookModel ? <>\r\n      <StandaloneWorkbook sx={{\n        ...style,\n        position: 'absolute' /* to place correctly in storybook */\n      }} {...rest} model={workbookModel} /* if null a default model is used. If set will use the model. If a promise of a model it will show a load until the promise resolves */ title={workbookTitle} /* optional title to show in the header */ />\r\n    </> : <Box style={{\n      padding: '8px 16px',\n      display: 'flex',\n      flexDirection: 'row',\n      gap: '8px',\n      alignItems: 'start',\n      ...style\n    }}>\r\n        <input style={{\n        minWidth: '360px'\n      }} name=\"input-url\" autoComplete=\"off\" value={fetchUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {\n        setFetchUrl(e.target.value);\n      }} />\r\n        <button onClick={handleClick}>\r\n          Fetch\r\n        </button>\r\n      </Box>}\r\n    </Box>;\n}",...WorkbookFromArrayBuffer.parameters?.docs?.source}}};const __namedExportsOrder=["WorkbookFromArrayBuffer"]},"../../packages/common/src/utils/IOUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>fileToArrayBuffer,M:()=>loadImageDetails});const fileToArrayBuffer=promiseOrFile=>new Promise((async(resolve,reject)=>{try{const file=await Promise.resolve(promiseOrFile);if(!file)throw new Error("No file was provided.");const reader=new FileReader;reader.readAsArrayBuffer(file),reader.onload=()=>{resolve(reader.result)},reader.onerror=()=>{reject(reader.error)}}catch(error){reject(error)}})),findNaturalSize=asUrl=>new Promise((async(resolve,reject)=>{let elemImg=null;try{elemImg=new Image,elemImg.src=asUrl,elemImg.addEventListener("load",(function(){resolve({width:elemImg.naturalWidth,height:elemImg.naturalHeight})}),{once:!0}),elemImg.addEventListener("error",(function(){URL.revokeObjectURL(asUrl),reject("Invalid Image")}),{once:!0}),await elemImg.decode("sync")}catch(error){elemImg?.src&&URL.revokeObjectURL(elemImg.src)}elemImg||reject("Unable to resolve image.")})),loadImageDetails=async(arrayBuffer,mimeType=null)=>{let details=null;const loadImage=async()=>{try{const resolveMimeType=mimeType??"image/*",asUrl=URL.createObjectURL(new Blob([arrayBuffer],{type:resolveMimeType})),naturalSize=await findNaturalSize(asUrl);details={mimeType:resolveMimeType,naturalSize,asUrl}}catch(error){}},loadSvg=async()=>{try{const asSVGText=(new TextDecoder).decode(arrayBuffer),asUrl=URL.createObjectURL(new Blob([asSVGText],{type:"image/svg+xml"})),naturalSize=await findNaturalSize(asUrl);details={mimeType:mimeType??"image/svg+xml",naturalSize,asUrl,asSVGText}}catch(error){}};if("image/svg+xml"===mimeType?await loadSvg():mimeType.startsWith("image/")?await loadImage():(await loadImage(),details||await loadSvg()),!details)throw new Error("Failed to load image");return details}},"../../packages/sheet-mui/src/io/Registry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lk:()=>DefaultIORegistry});var _sheetxl_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),_sheetxl_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/common/src/utils/IOUtils.ts");const DEFAULT_IMPORT_TYPES=[{key:"SheetXL",mimeType:".sxlj",description:"SheetXL JSON",exts:["sxlj"],handler:"importWorkbookFromJSON",isDefault:!0},{key:"CSV",mimeType:"text/csv",description:"Comma Delimited",exts:["csv"],handler:"importWorkbookFromCSV"},{key:"Excel",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",description:"Excel Workbook",exts:["xlsx","xls"],handler:"importWorkbookFromXLSX"}],DEFAULT_EXPORT_TYPES=[{key:"SheetXL",mimeType:"application/vnd.sheetxl.sheet",description:"SheetXL JSON",ext:"sxlj",handler:"exportWorkbookToJSON",isDefault:!0},{key:"CSV",mimeType:"text/csv",description:"Comma Delimited",ext:"csv",handler:"exportWorkbookToCSV"},{key:"Excel",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",description:"Excel Workbook",ext:"xlsx",tags:["SheetJS Pro"],handler:"exportWorkbookToXLSX"}];const DefaultIORegistry=new class IORegistry{_importTypes=[];_exportTypes=[];constructor(importTypes=DEFAULT_IMPORT_TYPES,exportTypes=DEFAULT_EXPORT_TYPES){this._importTypes=Object.freeze([...importTypes]),this._exportTypes=Object.freeze([...exportTypes])}getImportTypes(){return this._importTypes}getExportTypes(){return this._exportTypes}getImportTypeForKey(key){return this._importTypes.find((type=>type.key.includes(key)))??null}getImportTypeForExt(ext){return this._importTypes.find((type=>type.exts.includes(ext)))??null}getImportTypeForMimeType(mimeType){return this._importTypes.find((type=>type.mimeType===mimeType))??null}getExportTypeForExt(ext){return this._exportTypes.find((type=>type.ext===ext))??null}getAllInputTypeAsString(){const inputTypes=[];for(let i=0;i<this._importTypes.length;i++)inputTypes.push(this._importTypes[i].mimeType);return inputTypes}async importFromFile(input=null,options=null,notifier){let inputResolve,inputFile=null,inputInputs=null;return"string"==typeof input?inputInputs=input:inputFile=input,inputResolve=inputFile?input:await _sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.FR(inputInputs??this.getAllInputTypeAsString().join(", ")),new Promise(((resolve,reject)=>{const resolves=[inputResolve,Promise.all([__webpack_require__.e(7747),__webpack_require__.e(3567),__webpack_require__.e(3663),__webpack_require__.e(1964),__webpack_require__.e(422),__webpack_require__.e(7343),__webpack_require__.e(1629),__webpack_require__.e(3886)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts"))],showBusy=notifier?.showBusy?.("Opening...");Promise.resolve(showBusy).then((hideBusy=>{Promise.all(resolves).then((results=>{if(!results[0])return hideBusy?.(),void resolve(null);const file=results[0],showHideReading=notifier?.showBusy?.(`Opening ${file?.name?` '${file?.name}'`:""}...`);Promise.resolve(showHideReading).then((hideBusyReading=>{const type=this.getImportTypeForExt(_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.$M(file?.name));let error=null;type||(error=new Error(`Unknown file type: ${_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.$M(file?.name)??file?.name??"(empty)"}.`));let handlerImport=null;if("string"==typeof type?.handler?results[1][type.handler]&&(handlerImport=results[1][type.handler]):"function"==typeof type?.handler&&(handlerImport=type.handler),handlerImport||(error=new Error(`Unable to resolve handler for type: ${type?.description??_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.$M(file?.name)??file?.name??"(empty)"}.`)),error)return hideBusyReading?.(),void reject(error);_sheetxl_common__WEBPACK_IMPORTED_MODULE_1__.D(file).then((buffer=>{const array=new Uint8Array(buffer),optionsTyped={...options,...options?.typedOptions?.[type.key]};delete optionsTyped.typedOptions,Promise.resolve(handlerImport(array,optionsTyped)).then((newWorkbookModel=>{hideBusyReading?.(),resolve({workbookModel:newWorkbookModel,fileName:file.name,type})})).catch((error=>{hideBusyReading?.(),console.warn("Unable to open file.",error),reject(new Error(error.message,{cause:error}))}))})).catch((error=>{hideBusyReading?.(),console.warn("Unable to open file.",error),reject(new Error("Unable to open file.",{cause:error}))}))}))})).catch((error=>{hideBusy?.(),console.warn("Unable to open file.",error),reject(new Error("Unable to open! Unable to load IO library.",{cause:error}))})).finally((()=>{hideBusy?.()}))}))}))}async importFromArrayBuffer(arrayBuffer,key,options=null){return new Promise(((resolve,reject)=>{let importType=this.getImportTypeForKey(key)??this.getImportTypeForExt(key)??this.getImportTypeForMimeType(key);if(!arrayBuffer||!importType)return void(arrayBuffer?key?key||reject(new Error(`Unable to resolve key: '${key}'.`)):reject(new Error("Key must be specified.")):reject(new Error("ArrayBuffer must be specified.")));const resolves=[arrayBuffer,Promise.all([__webpack_require__.e(7747),__webpack_require__.e(3567),__webpack_require__.e(3663),__webpack_require__.e(1964),__webpack_require__.e(422),__webpack_require__.e(7343),__webpack_require__.e(1629),__webpack_require__.e(3886)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts"))];Promise.all(resolves).then((results=>{let handlerImport=null;"string"==typeof importType?.handler?results[1][importType.handler]&&(handlerImport=results[1][importType.handler]):"function"==typeof importType?.handler&&(handlerImport=importType.handler);let error=null;if(handlerImport||(error=new Error(`Unable to resolve handler for type: ${importType?.description??key}.`)),error)return void reject(error);const optionsTyped={...options,...options?.typedOptions?.[key]};delete optionsTyped.typedOptions,handlerImport(results[0],optionsTyped).then((workbookModel=>{resolve(workbookModel)})).catch((error=>{reject(error)}))})).catch((error=>{reject(error)}))}))}exportToFile(workbookModel,fileName,exportType){return new Promise(((resolve,reject)=>{if(!workbookModel||!fileName)return void reject(new Error("workbook model or file name must be provided."));const fileExt=_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.$M(fileName);fileExt&&(fileName=fileName.substring(0,fileName.length-fileExt.length-1));for(let i=0;!exportType&&i<this._exportTypes.length;i++)(this._exportTypes[i].ext===fileExt||!fileExt&&this._exportTypes[i].isDefault)&&(exportType=this._exportTypes[i]);if(!exportType)return void reject(new Error(`Unable to determine export type for '${fileName}'.`));const fileNameWithExt=fileName+"."+exportType.ext;Promise.all([__webpack_require__.e(7747),__webpack_require__.e(3567),__webpack_require__.e(3663),__webpack_require__.e(1964),__webpack_require__.e(422),__webpack_require__.e(7343),__webpack_require__.e(1629),__webpack_require__.e(3886)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/io/src/index.ts")).then((module=>{let handlerExport=null;"string"==typeof exportType.handler?module[exportType.handler]&&(handlerExport=module[exportType.handler]):"function"==typeof exportType.handler&&(handlerExport=exportType.handler),handlerExport?Promise.resolve(handlerExport(workbookModel)).then((array=>{__webpack_require__.e(5060).then(__webpack_require__.t.bind(__webpack_require__,"../../node_modules/file-saver/dist/FileSaver.min.js",23)).then((FileSaver=>{const blob=new Blob([array],{type:"application/octet-stream"});try{FileSaver.default.saveAs(blob,fileNameWithExt)}catch(e){return void reject(e)}resolve(!0)})).catch((error=>{reject(new Error("Unable to export! Not able to load file-saver library.",{cause:error}))}))})).catch((error=>{reject(new Error("Unable to export!",{cause:error}))})):reject(new Error(`Unable to resolve handler for type: ${exportType.description??exportType.ext??fileNameWithExt}.`))})).catch((error=>{reject(new Error("Unable to export! Not able to load io library.",{cause:error}))}))}))}importFromFetch(fetchUrl,options=null){const promiseFetch=fetch(fetchUrl);return{model:new Promise((async(resolve,reject)=>{try{const response=await promiseFetch,type=this.getImportTypeForExt(_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.$M(fetchUrl));if(!type)throw new Error(`Unknown file type: ${fetchUrl}`);resolve(await DefaultIORegistry.importFromArrayBuffer(response.arrayBuffer(),type.key,options))}catch(error){reject(error)}})),title:_sheetxl_common__WEBPACK_IMPORTED_MODULE_0__.J(fetchUrl)??null}}}},"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>StandaloneWorkbook});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-mui/src/components/LoadingPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EagerStandaloneWorkbook=react__WEBPACK_IMPORTED_MODULE_0__.lazy((()=>Promise.all([__webpack_require__.e(9729),__webpack_require__.e(4574),__webpack_require__.e(9500),__webpack_require__.e(7747),__webpack_require__.e(7065),__webpack_require__.e(4892),__webpack_require__.e(2188),__webpack_require__.e(2007),__webpack_require__.e(4640),__webpack_require__.e(9781),__webpack_require__.e(669),__webpack_require__.e(7594),__webpack_require__.e(3663),__webpack_require__.e(8503),__webpack_require__.e(1964),__webpack_require__.e(422),__webpack_require__.e(7343),__webpack_require__.e(9374),__webpack_require__.e(8674),__webpack_require__.e(6533),__webpack_require__.e(1629),__webpack_require__.e(9418),__webpack_require__.e(9363),__webpack_require__.e(584)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/sheet-mui/src/standalone/EagerStandaloneWorkbook.tsx")))),StandaloneWorkbook=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{sx:propSx,style:propStyle,className:propClassName,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_2__.ld,{transitionDelay:"160ms",transparentBackground:!1,sx:propSx,style:propStyle}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EagerStandaloneWorkbook,{...rest,className:propClassName,sx:propSx,style:propStyle,ref:refForwarded})})})})));try{StandaloneWorkbook.displayName="StandaloneWorkbook",StandaloneWorkbook.__docgenInfo={description:"Standalone Workbook\n\nFully featured workbook component.\n * controlled/uncontrolled workbookModel\n * snackbar\n * export/import to local file system\n * workbook title\n * Material-ui theme width light/dark toggle\n * lazy loading\n\nDemos:\n\n- [SheetXL](https://storybook.sheetxl.com/)\n\nAPI:\n\n- [StandaloneWorkbook](https://api.sheetxl.com/functions/sheet_mui_src.StandaloneWorkbook.html)",displayName:"StandaloneWorkbook",props:{model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"IWorkbookModel | Promise<IWorkbookModel>"}},onModelChange:{defaultValue:null,description:"Called if the model changes\n@param model\n@returns",name:"onModelChange",required:!1,type:{name:"(model: IWorkbookModel) => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},onError:{defaultValue:null,description:"Called if the workbook model is a promise that fails to load\n@param event",name:"onError",required:!1,type:{name:"(error: any) => void"}},errorPanel:{defaultValue:null,description:"Allow for a custom error panel to be used for errors\n@defaultValue ErrorPanel",name:"errorPanel",required:!1,type:{name:"ComponentType<ErrorPanelProps>"}},title:{defaultValue:null,description:"Title to display.\n@remarks If title is null then it is hidden but if it is '' then it is shown with placeholder\n@defaultValue none",name:"title",required:!1,type:{name:"string"}},onTitleChange:{defaultValue:null,description:"Call if the title changes\n@param title\n@returns",name:"onTitleChange",required:!1,type:{name:"(title: string) => void"}},titleProps:{defaultValue:null,description:"Additional WorkbookTitle properties\n@remarks If onTitleChange or title is provided then the prop versions are ignored",name:"titleProps",required:!1,type:{name:"WorkbookTitleProps"}},importExportDisabled:{defaultValue:null,description:"",name:"importExportDisabled",required:!1,type:{name:"boolean"}},themeOptions:{defaultValue:null,description:"Standalone workbook will inherit the theme unless this is explicitly set.\n@remarks If this is set then there are two additional options that can be provided\nonForceModeChange(mode: ThemeMode);\nonForceLightGridChange(force: boolean);\nonForceLightImagesChange(force: boolean);",name:"themeOptions",required:!1,type:{name:"ThemeOptions"}},autoFocusDisabled:{defaultValue:null,description:"Autofocus on load. If loading multiple workbooks or using an a secondary component this\nshould be set to false.\n@remarks\n@defaultValue false",name:"autoFocusDisabled",required:!1,type:{name:"boolean"}},undoManager:{defaultValue:null,description:"Allow for a custom undo manager\n@defaultValue a new undo manager for each standaloneWorkbook",name:"undoManager",required:!1,type:{name:"UndoManager"}},sx:{defaultValue:null,description:"MUI SX props\n@see {@link https://mui.com/system/getting-started/the-sx-prop/}",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> & Ref<WorkbookElement>"}},autoFocus:{defaultValue:null,description:"Will autofocus to the sheet.\n@defaultValue false",name:"autoFocus",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},showHorizontalScrollbar:{defaultValue:null,description:"Show the horizontal scrollbar",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"Show the vertical scrollbar",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},commands:{defaultValue:null,description:"Additional commands provided by application",name:"commands",required:!1,type:{name:"CommandMap"}},createWorkbookOptions:{defaultValue:null,description:"Options to use when a new WorkbookModel is created.\n@remarks This is ignored if the model is provided externally.\nThe default behavior is to use the options from the current workbook if provided.",name:"createWorkbookOptions",required:!1,type:{name:"IWorkbookModelOptions"}},onElementLoad:{defaultValue:null,description:"Callback for when the workbook is loaded. Useful for hiding/showing\nloading panels",name:"onElementLoad",required:!1,type:{name:"(event: WorkbookLoadEvent) => void"}},notifier:{defaultValue:null,description:"Configure the notifier to use for alerts",name:"notifier",required:!1,type:{name:"Notifier"}},onCommandsChange:{defaultValue:null,description:"Notify that there is a new map of commands",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},onRepeatCommandChange:{defaultValue:null,description:"Notify that there is a new repeatable command",name:"onRepeatCommandChange",required:!1,type:{name:"(command: ICommand<any, any>) => void"}},showFormulaBar:{defaultValue:null,description:"@defaultValue 'workbook model but can be overridden'",name:"showFormulaBar",required:!1,type:{name:"boolean"}},formulaBarProps:{defaultValue:null,description:"Allow for customizations on FormulaBar",name:"formulaBarProps",required:!1,type:{name:"FormulaBarProps"}},renderFormulaBar:{defaultValue:null,description:"Render FormulaBar\n@param props\n@returns",name:"renderFormulaBar",required:!1,type:{name:"(props: FormulaBarProps, ref: Ref<FormulaBarElement>) => ReactElement<any, string | JSXElementConstructor<any>>"}},showTabs:{defaultValue:null,description:"This doesn't influence # of tabs just the visibility of the widget.\n@defaultValue 'workbook model but can be overridden'",name:"showTabs",required:!1,type:{name:"boolean"}},tabsProps:{defaultValue:null,description:"Allow for customizations on tabs",name:"tabsProps",required:!1,type:{name:"WorkbookStripProps"}},renderTabs:{defaultValue:null,description:"Render custom tabs\n@param props\n@returns",name:"renderTabs",required:!1,type:{name:"(props: WorkbookStripProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},showStatusBar:{defaultValue:null,description:"Shows the statusbar\n@defaultValue 'workbook model but can be overridden'",name:"showStatusBar",required:!1,type:{name:"boolean"}},statusBarProps:{defaultValue:null,description:"Customizations for the status bar",name:"statusBarProps",required:!1,type:{name:"StatusBarProps"}},renderStatusBar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderStatusBar",required:!1,type:{name:"(props: StatusBarProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},toolbarProps:{defaultValue:null,description:"Props for the toolbar.",name:"toolbarProps",required:!1,type:{name:"WorkbookToolbarsProps"}},renderToolbar:{defaultValue:null,description:"Pass in a custom toolbar\n@param props\n@returns",name:"renderToolbar",required:!1,type:{name:"(props: WorkbookToolbarsProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},contextMenuProps:{defaultValue:null,description:"Allow for customizations on context menu",name:"contextMenuProps",required:!1,type:{name:"WorkbookContextMenuProps"}},renderContextMenu:{defaultValue:null,description:"Render custom context menu\n@param props\n@returns",name:"renderContextMenu",required:!1,type:{name:"(props: WorkbookContextMenuProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},loadingPanelProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"loadingPanelProps",required:!1,type:{name:"LoadingPanelProps"}},renderLoadingPanel:{defaultValue:null,description:"Render custom loading panel\n@param props\n@returns",name:"renderLoadingPanel",required:!1,type:{name:"(props: LoadingPanelProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},sheetProps:{defaultValue:null,description:"Allow for customizations on loading panel",name:"sheetProps",required:!1,type:{name:"SheetProps"}},renderSheet:{defaultValue:null,description:"Render Sheet\n@param props\n@returns",name:"renderSheet",required:!1,type:{name:"(props: SheetProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},gridTheme:{defaultValue:null,description:"Allow you to specify a specific material ui theme for the grid\n@remarks This is useful if you want to decorate the application with a single theme (such as dark mode). But render\nthe main grid using a different theme (for example light mode).\n@defaultValue the current Theme",name:"gridTheme",required:!1,type:{name:"Theme"}},forceLightImages:{defaultValue:null,description:"If dark theme then the images will invert unless true.\n@defaultValue false",name:"forceLightImages",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"]={docgenInfo:StandaloneWorkbook.__docgenInfo,name:"StandaloneWorkbook",path:"../../packages/sheet-mui/src/standalone/StandaloneWorkbook.tsx#StandaloneWorkbook"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../../node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);