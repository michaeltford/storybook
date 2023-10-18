"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7066],{"../../packages/sheet-mui/src/dialogs/SortDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SortDialog:()=>SortDialog,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/Checkbox/Checkbox.js"),_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-mui/src/dialog/OptionsDialog.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SortDialog=({sortOptions,onDone:propOnDone,...props})=>{const[isAscending,setIsAscending]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>sortOptions?.options?.ascending??!1)),[hasHeader,setHasHeader]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>sortOptions?.options?.hasHeader??!1)),[isCaseSensitive,setIsCaseSensitive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleDone=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.W)((option=>{if("Sort"!==option)return;const options={...sortOptions?.options,ascending:isAscending,hasHeader},updatedSortOptions={...sortOptions,options};propOnDone?.(updatedSortOptions)}),[isAscending,hasHeader,isCaseSensitive,sortOptions,propOnDone,sortOptions]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_common_mui__WEBPACK_IMPORTED_MODULE_3__.OptionsDialog,{title:"Sort",options:["Sort","Cancel"],onDone:handleDone,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__.Z,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{checked:isAscending,onChange:()=>setIsAscending(!isAscending)}),label:"Is Ascending",labelPlacement:"end"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__.Z,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{checked:hasHeader,onChange:()=>setHasHeader(!hasHeader)}),label:"Has Header",labelPlacement:"end"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__.Z,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{checked:isCaseSensitive,onChange:()=>setIsCaseSensitive(!isCaseSensitive)}),label:"Case Sensitive",labelPlacement:"end"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__.Z,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{}),label:"Row Sort",labelPlacement:"end"})]})})};SortDialog.displayName="SortDialog";const __WEBPACK_DEFAULT_EXPORT__=SortDialog;try{SortDialog.displayName="SortDialog",SortDialog.__docgenInfo={description:"",displayName:"SortDialog",props:{sortOptions:{defaultValue:null,description:"",name:"sortOptions",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The dialog title",name:"title",required:!1,type:{name:"string"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Modal.\nEither a string to use a HTML element or a component.",name:"slots",required:!1,type:{name:"ModalSlots"}},container:{defaultValue:null,description:"An HTML element or function that returns one.\nThe `container` will have the portal children appended to it.\n\nBy default, it uses the body of the top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:"Always keep the children in the DOM.\nThis prop can be useful in SEO situation or\nwhen you want to maximize the responsiveness of the Modal.",name:"keepMounted",required:!1,type:{name:"boolean"}},BackdropComponent:{defaultValue:{value:"styled(Backdrop, {\nname: 'MuiModal',\nslot: 'Backdrop',\noverridesResolver: (props, styles) => {\nreturn styles.backdrop;\n},\n})({\nzIndex: -1,\n})"},description:"A backdrop component. This prop enables custom backdrop rendering.\n@deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.\nUse the `slots.backdrop` prop to make your application ready for the next version of Material UI.",name:"BackdropComponent",required:!1,type:{name:"ElementType<BackdropProps>"}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.\n@deprecated Use `slotProps.backdrop` instead.",name:"BackdropProps",required:!1,type:{name:"Partial<BackdropProps>"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not prevent focus from leaving the modal while open.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/dialogs/SortDialog.tsx#SortDialog"]={docgenInfo:SortDialog.__docgenInfo,name:"SortDialog",path:"../../packages/sheet-mui/src/dialogs/SortDialog.tsx#SortDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);