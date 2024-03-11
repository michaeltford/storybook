"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4364],{"../../packages/sheet-mui/src/dialogs/NumberFormatDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NumberFormatDialog:()=>NumberFormatDialog,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@mui/material/styles/getOverlayAlpha.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/InputLabel/InputLabel.js"),_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),_mui_material_Select__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@mui/material/Select/Select.js"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/models/src/utils/NumberFormatStyles.ts"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/models/src/utils/NumberFormatType.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/common-mui/src/dialogs/OptionsDialog.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DEFAULT_INPUT_OPTIONS=["Ok","Cancel"],NumberFormatDialog=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(((props,_forwardedRef)=>{const{initialValue,context,onOption,onValidateOption,onInputOption,onDone,options=DEFAULT_INPUT_OPTIONS,defaultOption=options?.[0],cancelOption="Cancel",sx:propSx,...rest}=props,[input,setInput]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),[firstFocus,setFirstFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),onValidateInputOption=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((async(_input,_option)=>!0),[]),handleInput=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Y)((async option=>{onInputOption?.(input,option),onOption?.(option,option===cancelOption,option===defaultOption),onDone?.()}),[input,onInputOption,onDone,onOption,cancelOption,defaultOption]),handleKeyDown=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Y)((async e=>{if(e.keyCode===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.ox.Enter){!1!==await(onValidateInputOption?.(input,null))&&handleInput(defaultOption)}}),[input,handleInput]),handleOnChange=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Y)((e=>{setInput(e.target.value),onValidateInputOption?.(e.target.value,null)}),[onValidateOption]),handleValidateOption=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Y)((async option=>{let result=await Promise.resolve(onValidateOption?.(option));try{!1!==result&&(result=await Promise.resolve(onValidateInputOption?.(input,option))??!0)}catch(e){}return result??!0}),[onValidateOption]),[formatCategory,setFormatCategory]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_sheetxl_models__WEBPACK_IMPORTED_MODULE_4__.Se(input).formatType??_sheetxl_models__WEBPACK_IMPORTED_MODULE_5__.S.Custom);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFormatCategory(_sheetxl_models__WEBPACK_IMPORTED_MODULE_4__.Se(input).formatType??_sheetxl_models__WEBPACK_IMPORTED_MODULE_5__.S.Custom)}),[input]);const categoryOptions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const formats=_sheetxl_models__WEBPACK_IMPORTED_MODULE_4__.G8(),createOption=value=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__.c,{value,children:value},value),options=Object.keys(formats).map((key=>createOption(formats[key].formatType)));return options.push(createOption(_sheetxl_models__WEBPACK_IMPORTED_MODULE_5__.S.Custom)),options}),[]),handleCategoryChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const category=event.target.value;setFormatCategory(category);const formatCode=_sheetxl_models__WEBPACK_IMPORTED_MODULE_4__._u(category);formatCode&&setInput(formatCode)}),[]),previewCell=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const contextValue=context();return contextValue.cloneWithUpdate({value:contextValue.value??12345,style:{numberFormat:input}})}),[formatCategory,input,context]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_7__.OptionsDialog,{title:"Number Format",options,onDone,onOption:option=>handleInput(option),onValidateOption:handleValidateOption,defaultOption,cancelOption,autoFocusSel:".autoFocus",sx:{width:"580px",...propSx},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.c,{sx:{paddingTop:theme=>theme.spacing(1),paddingBottom:theme=>theme.spacing(0),rowGap:theme=>theme.spacing(1),display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__.c,{sx:{minWidth:135},size:"small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__.c,{children:"Category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_11__.c,{value:formatCategory,label:"Category",onChange:handleCategoryChange,sx:{backgroundImage:`linear-gradient(${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.W4)("#fff",parseFloat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.c)(5)))}, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.W4)("#fff",parseFloat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.c)(5)))})`},children:categoryOptions})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__.c,{sx:{paddingTop:theme=>theme.spacing(1.5),minWidth:135,width:"100%"},size:"small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__.c,{label:"Code",onFocus:e=>{firstFocus||e.target?.select(),setFirstFocus(!0)},sx:{"& .MuiFormHelperText-root":{marginTop:theme=>theme.spacing(.5)}},InputLabelProps:{shrink:!0},InputProps:{inputProps:{className:"autoFocus",spellCheck:!1,autoComplete:"off",sx:{paddingTop:theme=>theme.spacing(1.25),paddingBottom:theme=>theme.spacing(.75),backgroundImage:`linear-gradient(${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.W4)("#fff",parseFloat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.c)(5)))}, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.W4)("#fff",parseFloat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.c)(5)))})`}}},value:input,onChange:handleOnChange,onKeyDown:handleKeyDown,onContextMenu:e=>{e.stopPropagation()}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__.c,{variant:"caption",component:"div",sx:{paddingLeft:theme=>theme.spacing(2)},children:"Preview"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__.c,{variant:"body2",component:"div",sx:{borderRadius:theme=>`${theme.shape.borderRadius}px`,padding:theme=>theme.spacing(1),border:theme=>`1px solid ${theme.palette.grey[400]}`},children:previewCell.formattedValue.displayText??"(empty)"})]})]})})})),__WEBPACK_DEFAULT_EXPORT__=NumberFormatDialog;try{NumberFormatDialog.displayName="NumberFormatDialog",NumberFormatDialog.__docgenInfo={description:"",displayName:"NumberFormatDialog",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"() => ICellModel"}},onInputOption:{defaultValue:null,description:"",name:"onInputOption",required:!1,type:{name:"(input?: string, option?: string) => void"}},options:{defaultValue:null,description:"The options as a list of strings",name:"options",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"The title of the options panel",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Display text information for the user to make a decision.",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Display an icon next to the description for additional context\n@remarks Not yet implemented",name:"icon",required:!1,type:{name:"ReactNode"}},defaultOption:{defaultValue:null,description:"Allows for the option will be the default selected option and the enter key trigger.\n@defaultValue The first option",name:"defaultOption",required:!1,type:{name:"string"}},cancelOption:{defaultValue:null,description:"Allows for the cancel option to be specified. Allow for special styling.\n@defaultValue 'Cancel'",name:"cancelOption",required:!1,type:{name:"string"}},onOption:{defaultValue:null,description:"Call when an option is selected.\n@remarks It is possible that the option can be both a cancel and a default option.",name:"onOption",required:!1,type:{name:"(option: string, isCancel: boolean, isDefault: boolean) => void"}},createOptionsButton:{defaultValue:null,description:"Hook for create custom options buttons\n@param props\n@remarks The option is passed as the `children` prop and as the second argument",name:"createOptionsButton",required:!1,type:{name:"(option: string, props: HTMLAttributes<HTMLButtonElement> & Attributes, isDefaultOption: boolean) => ReactNode"}},onValidateOption:{defaultValue:null,description:"Call when an option is selected. If false is returned, the the\ndialog will not close. Notification is not provided but can\nbe supplied via the textFieldProps helperText property.",name:"onValidateOption",required:!1,type:{name:"(option?: string) => boolean | Promise<boolean>"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/dialogs/NumberFormatDialog.tsx#NumberFormatDialog"]={docgenInfo:NumberFormatDialog.__docgenInfo,name:"NumberFormatDialog",path:"../../packages/sheet-mui/src/dialogs/NumberFormatDialog.tsx#NumberFormatDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);