"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4464],{"../../packages/common-mui/src/dialogs/InternalWindow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>InternalWindow,c:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js"),clsx__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react_merge_refs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-merge-refs/dist/index.mjs"),focus_trap_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_2__),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),_mui_system__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/Fade/Fade.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/Backdrop/Backdrop.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/Paper/Paper.js"),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../node_modules/@mui/icons-material/Close.js"),react_draggable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-draggable/build/cjs/cjs.js"),react_draggable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/common-react/src/hooks/useImperativeHandleElement.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../packages/common-react/src/types/types.ts"),_button__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../packages/common-mui/src/button/ExhibitTooltip.tsx"),_theming__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../packages/common-mui/src/theming/ScrollbarTheming.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ZERO_POINT={x:0,y:0},DraggablePaperComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{defaultPosition=ZERO_POINT,PaperComponent=_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.c,onDragStop,rootSel:_rootSel=".MuiModal-root",handleSel=".draggable-title",titleSize,rootSize,...rest}=props,refLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),dragBounds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>titleSize&&rootSize?{left:0,top:0,right:rootSize.width-titleSize.width,bottom:rootSize.height-titleSize.height}:null),[titleSize,rootSize]),[position,setPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[boundedPosition,setBoundedPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!position&&defaultPosition&&setPosition(defaultPosition??ZERO_POINT)}),[defaultPosition]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{dragBounds&&position&&setBoundedPosition({x:Math.max(0,Math.min(position.x,dragBounds.right)),y:Math.max(0,Math.min(position.y,dragBounds.bottom))})}),[position,dragBounds]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_draggable__WEBPACK_IMPORTED_MODULE_3___default(),{nodeRef:refLocal,handle:handleSel,cancel:'[class*="MuiDialogContent-root"]',position:boundedPosition,bounds:dragBounds??".MuiModal-root",onStop:onDragStop,onDrag:(e,data)=>{setPosition({x:data.x,y:data.y})},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaperComponent,{ref:(0,react_merge_refs__WEBPACK_IMPORTED_MODULE_6__.w)([refLocal,refForwarded]),...rest})})}))),DEFAULT_POSITION={x:"50",y:"50"},InternalWindow=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((inProps=>{const props=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.c)({props:inProps,name:"MuiDialog"}),theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.c)(),defaultTransitionDuration={enter:.66*theme.transitions.duration.enteringScreen,exit:.66*theme.transitions.duration.leavingScreen},{title="SheetXL",key="draggable-window",onCancel,onDone,onShow,onHide,refWindow,open,autoFocusSel,children,TransitionComponent=_mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__.c,TransitionProps:propTransitionProps,transitionDuration=defaultTransitionDuration,BackdropComponent=_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_10__.c,BackdropProps:propBackdropProps,PaperComponent=_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.c,PaperProps:propPaperProps,onBackdropClick,sx:propSx,className:propClassName,onMouseDown:propOnMouseDown,initialPosition:propInitialPosition=DEFAULT_POSITION,isModal=!1,...rest}=props,refFocusTrap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[initialPosition,setInitialPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[active,setActive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),refRipple=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[refRootMeasure,rootRect]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__.c)(),refWindowLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[refTitleMeasure,titleRect]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__.c)(),refPaperComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{initialPosition&&setVisible(open)}),[open,initialPosition]);const handleCancel=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_12__.Y)((()=>{onCancel?.(),setVisible(!1)}),[onCancel]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(0===rootRect.width&&0===rootRect.height||initialPosition)return;const paperBounds=refPaperComponent.current?.getBoundingClientRect(),remainingHeight=rootRect.height-paperBounds.height,remainingWidth=rootRect.width-paperBounds.width;let x=.5*remainingWidth,y=.5*remainingHeight;"number"==typeof propInitialPosition?.x?x=propInitialPosition.x:"string"==typeof propInitialPosition?.x&&(x=remainingWidth*(parseFloat(propInitialPosition.x)/100)),"number"==typeof propInitialPosition?.y?y=propInitialPosition.y:"string"==typeof propInitialPosition?.y&&(y=remainingHeight*(parseFloat(propInitialPosition.y)/100)),setInitialPosition({x,y})}),[rootRect,titleRect]);const[hasFocus,setHasFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[lastFocus,setLastFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[relatedFocus,setRelatedFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),autoFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((options=>{if(lastFocus)return lastFocus.focus(options),!0;if(autoFocusSel){const autoFocus=refWindowLocal.current?.querySelectorAll?.(autoFocusSel);if(autoFocus&&autoFocus.length>0)return autoFocus[0]?.focus?.(options),!0}return refWindowLocal.current?.focus?.(options),!1}),[lastFocus,autoFocusSel]),refLocal=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_13__.O)(refWindow,(()=>({focus:options=>{autoFocus(options)}})),[]),transitionProps={...propTransitionProps,onExited:node=>{onDone?.(null),propTransitionProps?.onExited?.(node)},onExit:node=>{const closureRelatedFocus=relatedFocus;closureRelatedFocus&&requestAnimationFrame((()=>{refLocal.current?.contains(document.activeElement)&&closureRelatedFocus.focus()})),onHide?.(),setActive(!1),propTransitionProps?.onExit?.(node)},onEntered:(node,isAppearing)=>{onShow?.(),propTransitionProps?.onEntered?.(node,isAppearing)},onEntering:(_node,_isAppearing)=>{setActive(!0)}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{active&&autoFocus()}),[active]);const elemWindow=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default(),{focusTrapOptions:{escapeDeactivates:!1,allowOutsideClick:!0,initialFocus:!1},ref:refFocusTrap,active,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent,{in:visible,timeout:transitionDuration,role:"presentation",...transitionProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.c,{className:"MuiDialog-container",ref:refWindowLocal,tabIndex:0,sx:{outline:"none",position:"relative"},onKeyDown:e=>{e.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_15__.ox.Escape&&(handleCancel(),refRipple.current?.start(e,{center:!1}),setTimeout((()=>refRipple.current?.stop(e)),180))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DraggablePaperComponent,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_16__.default)({"Mui-focusVisible":hasFocus},propClassName),sx:{"& *":theme=>(0,_theming__WEBPACK_IMPORTED_MODULE_17__.m)(theme),pointerEvents:"auto",userSelect:"none","&:hover:not([disabled]):not(.Mui-focusVisible)":{outline:theme=>`solid ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.W4)(theme.palette.text?.primary,.2)} 1px`},"&.Mui-focusVisible":{outline:theme=>`solid ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.W4)(theme.palette.text?.primary,.2)} 1px`},position:"absolute",maxWidth:"100%",...propSx},defaultPosition:initialPosition,ref:refPaperComponent,titleSize:titleRect,rootSize:rootRect,PaperComponent,...rest,...propPaperProps,children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_19__.c,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_16__.default)({"Mui-selected":hasFocus},"draggable-title"),sx:{cursor:"move",display:"flex",color:theme=>theme.palette.text.secondary,boxSizing:"border-box",padding:"0 0",transitionProperty:"opacity",transitionDuration:theme=>`${theme.transitions.duration.shortest}ms`,opacity:.7,"&.Mui-selected":{opacity:1,transitionDuration:theme=>theme.transitions.duration.shortest/2+"ms"},backgroundColor:theme=>(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.W4)(theme.palette.action.hover,.03)},ref:refTitleMeasure,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.c,{sx:{display:"flex",flex:"1 1 10%",flexDirection:"row",alignItems:"center",marginTop:theme=>theme.spacing(1),marginLeft:theme=>theme.spacing(1),marginRight:theme=>theme.spacing(1)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.c,{sx:{flex:"1 1 100%",paddingLeft:theme=>theme.spacing(1)},children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_button__WEBPACK_IMPORTED_MODULE_20__.AF,{label:"Close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_21__.c,{"aria-label":"close",sx:{color:theme=>theme.palette.text.icon??theme.palette.action.active},touchRippleRef:refRipple,onPointerDown:e=>{refRipple.current?.start(e,{center:!1}),e.stopPropagation(),e.preventDefault()},onPointerUp:handleCancel,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_22__.c,{})})})]})}):null,children]})})})});let backdrop=null;return isModal&&(backdrop=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BackdropComponent,{...propBackdropProps,open:visible,onMouseDown:e=>{handleCancel(),propBackdropProps?.onMouseDown?.(e)},onClick:e=>{onBackdropClick?.(e),propBackdropProps?.onClick?.(e)},sx:{pointerEvents:"auto",...propBackdropProps?.sx}})),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.c,{className:"MuiModal-root",sx:{position:"fixed",zIndex:"1300",right:"0",bottom:"0",top:"0",left:"0",outline:"0",display:"block",pointerEvents:"none"},ref:(0,react_merge_refs__WEBPACK_IMPORTED_MODULE_6__.w)([refLocal,refRootMeasure]),onMouseDown:e=>{hasFocus&&(e.target===refWindowLocal.current||e.target.tabIndex<0)&&refWindowLocal.current?.contains(document.activeElement)&&e.preventDefault()},onContextMenu:e=>{e.isPropagationStopped()||e.preventDefault()},onFocus:e=>{!hasFocus&&(e.target===refWindowLocal.current||e.target.tabIndex<0)&&setTimeout((()=>{autoFocus()}),100),refFocusTrap.current?.focusTrap?.unpause(),setHasFocus(!0),refWindowLocal.current?.contains(e.target)&&e.target!==refWindowLocal.current&&setLastFocus(e.target),e.relatedTarget&&!relatedFocus&&setRelatedFocus(e.relatedTarget)},onBlur:e=>{refLocal?.current?.contains(e.relatedTarget)||(setRelatedFocus(null),refFocusTrap.current?.focusTrap?.pause(),setHasFocus(!1))},children:[backdrop,elemWindow]}),document.body,key+"")})),__WEBPACK_DEFAULT_EXPORT__=InternalWindow;try{InternalWindow.displayName="InternalWindow",InternalWindow.__docgenInfo={description:"",displayName:"InternalWindow",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The dialog title",name:"title",required:!1,type:{name:"string"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-mui/src/dialogs/InternalWindow.tsx#InternalWindow"]={docgenInfo:InternalWindow.__docgenInfo,name:"InternalWindow",path:"../../packages/common-mui/src/dialogs/InternalWindow.tsx#InternalWindow"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/common-mui/src/dialogs/OptionsDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OptionsDialog:()=>OptionsDialog,default:()=>dialogs_OptionsDialog});var react=__webpack_require__("../../node_modules/react/index.js"),detect_it_esm=__webpack_require__("../../node_modules/detect-it/dist/detect-it.esm.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),DialogContent=__webpack_require__("../../node_modules/@mui/material/DialogContent/DialogContent.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDialogActionsUtilityClass(slot){return(0,generateUtilityClass.cp)("MuiDialogActions",slot)}(0,generateUtilityClasses.c)("MuiDialogActions",["root","spacing"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","disableSpacing"],DialogActionsRoot=(0,styled.cp)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disableSpacing&&styles.spacing]}})((({ownerState})=>(0,esm_extends.c)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!ownerState.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),DialogActions_DialogActions=react.forwardRef((function DialogActions(inProps,ref){const props=(0,useThemeProps.c)({props:inProps,name:"MuiDialogActions"}),{className,disableSpacing=!1}=props,other=(0,objectWithoutPropertiesLoose.c)(props,_excluded),ownerState=(0,esm_extends.c)({},props,{disableSpacing}),classes=(ownerState=>{const{classes,disableSpacing}=ownerState,slots={root:["root",!disableSpacing&&"spacing"]};return(0,composeClasses.c)(slots,getDialogActionsUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(DialogActionsRoot,(0,esm_extends.c)({className:(0,clsx.c)(classes.root,className),ownerState,ref},other))}));var Button=__webpack_require__("../../node_modules/@mui/material/Button/Button.js"),useCallbackRef=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),InternalWindow=__webpack_require__("../../packages/common-mui/src/dialogs/InternalWindow.tsx");const DEFAULT_OPTIONS=["Ok","Cancel"],OptionsDialog=props=>{const{description,icon,onOption,onDone,onValidateOption,createOptionsButton:propCreateOptionsButton,options=DEFAULT_OPTIONS,autoFocusSel=".defaultOption",defaultOption,cancelOption="Cancel",children,...rest}=props,[disabled,setDisabled]=(0,react.useState)(!1),handleOptionSelect=(0,useCallbackRef.Y)((async option=>{let result;setDisabled(!0);try{result=await Promise.resolve(onValidateOption?.(option))??!0}catch(e){}setDisabled(!1),!0===result&&(onOption?.(option,option===cancelOption,option===defaultOption),onDone?.(option))}),[onOption,onDone,onValidateOption,cancelOption,defaultOption]),handleCancel=(0,useCallbackRef.Y)((()=>{onOption?.(cancelOption,!0,!1),onDone?.(null)}),[onOption,cancelOption,onDone]),createOptionsButton=(0,useCallbackRef.Y)(((option,isDefaultOption)=>{const isCancelButton=option===cancelOption,propsButton={key:`action:${option}`,className:isDefaultOption?"defaultOption":"action",style:{minWidth:"75px"},onClick:()=>{isCancelButton?handleCancel():handleOptionSelect(option)}};if(propCreateOptionsButton)return propCreateOptionsButton(option,propsButton,isDefaultOption);const propsMui={key:`action:${option}`,className:isDefaultOption?"defaultOption":"action",variant:isDefaultOption?"contained":"outlined",size:"small",disabled,color:"primary",...propsButton};return(0,jsx_runtime.jsx)(Button.c,{...propsMui,children:(0,jsx_runtime.jsx)("div",{style:{paddingTop:"3px"},children:option})})}),[options,defaultOption,cancelOption,propCreateOptionsButton]),optionActions=(0,react.useMemo)((()=>{const retValue=[];for(let i=0;i<options.length;i++){const option=options[i],isDefaultOption=defaultOption?option===defaultOption:0===i;retValue.push(createOptionsButton(option,isDefaultOption))}return retValue}),[options,defaultOption]);return(0,jsx_runtime.jsxs)(InternalWindow.c,{onCancel:handleCancel,initialPosition:{y:"touch"===detect_it_esm.primaryInput?"15":"35"},onDone,autoFocusSel,isModal:!0,PaperProps:{},...rest,children:[(0,jsx_runtime.jsx)(DialogContent.c,{dividers:!0,children:(0,jsx_runtime.jsxs)(Box.c,{sx:{display:"flex",flexDirection:"column",rowGap:theme=>theme.spacing(icon||description?1.5:0)},children:[(0,jsx_runtime.jsxs)(Box.c,{sx:{display:"flex",flexDirection:"column"},children:[icon,description]}),children]})}),(0,jsx_runtime.jsx)(DialogActions_DialogActions,{sx:{paddingTop:theme=>theme.spacing(1),paddingBottom:theme=>theme.spacing(1),paddingLeft:theme=>theme.spacing(1),paddingRight:theme=>theme.spacing(1),backgroundColor:theme=>(0,colorManipulator.W4)(theme.palette.action.hover,.03)},children:optionActions})]})};OptionsDialog.displayName="OptionsDialog";const dialogs_OptionsDialog=OptionsDialog;try{OptionsDialog.displayName="OptionsDialog",OptionsDialog.__docgenInfo={description:"",displayName:"OptionsDialog",props:{options:{defaultValue:null,description:"The options as a list of strings",name:"options",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"The title of the options panel",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Display text information for the user to make a decision.",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Display an icon next to the description for additional context\n@remarks Not yet implemented",name:"icon",required:!1,type:{name:"ReactNode"}},defaultOption:{defaultValue:null,description:"Allows for the option will be the default selected option and the enter key trigger.\n@defaultValue The first option",name:"defaultOption",required:!1,type:{name:"string"}},cancelOption:{defaultValue:null,description:"Allows for the cancel option to be specified. Allow for special styling.\n@defaultValue 'Cancel'",name:"cancelOption",required:!1,type:{name:"string"}},onOption:{defaultValue:null,description:"Call when an option is selected.\n@remarks It is possible that the option can be both a cancel and a default option.",name:"onOption",required:!1,type:{name:"(option: string, isCancel: boolean, isDefault: boolean) => void"}},createOptionsButton:{defaultValue:null,description:"Hook for create custom options buttons\n@param props\n@remarks The option is passed as the `children` prop and as the second argument",name:"createOptionsButton",required:!1,type:{name:"(option: string, props: HTMLAttributes<HTMLButtonElement> & Attributes, isDefaultOption: boolean) => ReactNode"}},onValidateOption:{defaultValue:null,description:"Call when an option is selected. If false is returned, the the\ndialog will not close. Notification is not provided but can\nbe supplied via the textFieldProps helperText property.",name:"onValidateOption",required:!1,type:{name:"(option?: string) => boolean | Promise<boolean>"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-mui/src/dialogs/OptionsDialog.tsx#OptionsDialog"]={docgenInfo:OptionsDialog.__docgenInfo,name:"OptionsDialog",path:"../../packages/common-mui/src/dialogs/OptionsDialog.tsx#OptionsDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);