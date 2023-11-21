"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9199],{"../../packages/common-mui/src/dialog/InternalWindow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>InternalWindow,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js"),clsx__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react_merge_refs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-merge-refs/dist/index.mjs"),focus_trap_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_2__),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),_mui_system__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),_mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/Fade/Fade.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/Backdrop/Backdrop.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/Paper/Paper.js"),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../node_modules/@mui/icons-material/Close.js"),react_draggable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-draggable/build/cjs/cjs.js"),react_draggable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/common-react/src/hooks/useImperativeHandleElement.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../packages/common-react/src/types/types.ts"),_buttons__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../packages/common-mui/src/buttons/ExhibitTooltip.tsx"),_theming__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../packages/common-mui/src/theming/ScrollbarTheming.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ZERO_POINT={x:0,y:0},DraggablePaperComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForwarded)=>{const{defaultPosition=ZERO_POINT,PaperComponent=_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.Z,onDragStop,rootSel:_rootSel=".MuiModal-root",handleSel=".draggable-title",titleSize,rootSize,...rest}=props,refLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),dragBounds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>titleSize&&rootSize?{left:0,top:0,right:rootSize.width-titleSize.width,bottom:rootSize.height-titleSize.height}:null),[titleSize,rootSize]),[position,setPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[boundedPosition,setBoundedPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!position&&defaultPosition&&setPosition(defaultPosition??ZERO_POINT)}),[defaultPosition]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{dragBounds&&position&&setBoundedPosition({x:Math.max(0,Math.min(position.x,dragBounds.right)),y:Math.max(0,Math.min(position.y,dragBounds.bottom))})}),[position,dragBounds]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_draggable__WEBPACK_IMPORTED_MODULE_3___default(),{nodeRef:refLocal,handle:handleSel,cancel:'[class*="MuiDialogContent-root"]',position:boundedPosition,bounds:dragBounds??".MuiModal-root",onStop:onDragStop,onDrag:(e,data)=>{setPosition({x:data.x,y:data.y})},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaperComponent,{ref:(0,react_merge_refs__WEBPACK_IMPORTED_MODULE_6__.l)([refLocal,refForwarded]),...rest})})}))),DEFAULT_POSITION={x:"50",y:"50"},InternalWindow=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((inProps=>{const props=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiDialog"}),theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.Z)(),defaultTransitionDuration={enter:.66*theme.transitions.duration.enteringScreen,exit:.66*theme.transitions.duration.leavingScreen},{title="SheetXL",key="draggable-window",onCancel,onDone,onShow,onHide,refWindow,open,autoFocusSel,children,TransitionComponent=_mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__.Z,TransitionProps:propTransitionProps,transitionDuration=defaultTransitionDuration,BackdropComponent=_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_10__.Z,BackdropProps:propBackdropProps,PaperComponent=_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.Z,PaperProps:propPaperProps,onBackdropClick,sx:propSx,className:propClassName,onMouseDown:propOnMouseDown,initialPosition:propInitialPosition=DEFAULT_POSITION,isModal=!1,...rest}=props,refFocusTrap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[initialPosition,setInitialPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[active,setActive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),refRipple=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[refRootMeasure,rootRect]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__.Z)(),refWindowLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[refTitleMeasure,titleRect]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_11__.Z)(),refPaperComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{initialPosition&&setVisible(open)}),[open,initialPosition]);const handleCancel=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_12__.W6)((()=>{onCancel?.(),setVisible(!1)}),[onCancel]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(0===rootRect.width&&0===rootRect.height||initialPosition)return;const paperBounds=refPaperComponent.current?.getBoundingClientRect(),remainingHeight=rootRect.height-paperBounds.height,remainingWidth=rootRect.width-paperBounds.width;let x=.5*remainingWidth,y=.5*remainingHeight;"number"==typeof propInitialPosition?.x?x=propInitialPosition.x:"string"==typeof propInitialPosition?.x&&(x=remainingWidth*(parseFloat(propInitialPosition.x)/100)),"number"==typeof propInitialPosition?.y?y=propInitialPosition.y:"string"==typeof propInitialPosition?.y&&(y=remainingHeight*(parseFloat(propInitialPosition.y)/100)),setInitialPosition({x,y})}),[rootRect,titleRect]);const[hasFocus,setHasFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[lastFocus,setLastFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[relatedFocus,setRelatedFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),autoFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((options=>{if(lastFocus)return lastFocus.focus(options),!0;if(autoFocusSel){const autoFocus=refWindowLocal.current?.querySelectorAll?.(autoFocusSel);if(autoFocus&&autoFocus.length>0)return autoFocus[0]?.focus?.(options),!0}return refWindowLocal.current?.focus?.(options),!1}),[lastFocus,autoFocusSel]),refLocal=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_13__.b)(refWindow,(()=>({focus:options=>{autoFocus(options)}})),[]),transitionProps={...propTransitionProps,onExited:node=>{onDone?.(null),propTransitionProps?.onExited?.(node)},onExit:node=>{const closureRelatedFocus=relatedFocus;closureRelatedFocus&&requestAnimationFrame((()=>{refLocal.current?.contains(document.activeElement)&&closureRelatedFocus.focus()})),onHide?.(),setActive(!1),propTransitionProps?.onExit?.(node)},onEntered:(node,isAppearing)=>{onShow?.(),propTransitionProps?.onEntered?.(node,isAppearing)},onEntering:(_node,_isAppearing)=>{setActive(!0)}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{active&&autoFocus()}),[active]);const elemWindow=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default(),{focusTrapOptions:{escapeDeactivates:!1,allowOutsideClick:!0,initialFocus:!1},ref:refFocusTrap,active,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent,{in:visible,timeout:transitionDuration,role:"presentation",...transitionProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"MuiDialog-container",ref:refWindowLocal,tabIndex:0,sx:{outline:"none",position:"relative"},onKeyDown:e=>{e.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_15__.mW.Escape&&(handleCancel(),refRipple.current?.start(e,{center:!1}),setTimeout((()=>refRipple.current?.stop(e)),180))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DraggablePaperComponent,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_16__.default)({"Mui-focusVisible":hasFocus},propClassName),sx:{"& *":theme=>(0,_theming__WEBPACK_IMPORTED_MODULE_17__.T)(theme),pointerEvents:"auto",userSelect:"none","&:hover:not([disabled]):not(.Mui-focusVisible)":{outline:theme=>`solid ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.Fq)(theme.palette.text?.primary,.2)} 1px`},"&.Mui-focusVisible":{outline:theme=>`solid ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.Fq)(theme.palette.text?.primary,.2)} 1px`},position:"absolute",maxWidth:"100%",...propSx},defaultPosition:initialPosition,ref:refPaperComponent,titleSize:titleRect,rootSize:rootRect,PaperComponent,...rest,...propPaperProps,children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_19__.Z,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_16__.default)({"Mui-selected":hasFocus},"draggable-title"),sx:{cursor:"move",display:"flex",color:theme=>theme.palette.text.secondary,boxSizing:"border-box",padding:"0 0",transitionProperty:"opacity",transitionDuration:theme=>`${theme.transitions.duration.shortest}ms`,opacity:.7,"&.Mui-selected":{opacity:1,transitionDuration:theme=>theme.transitions.duration.shortest/2+"ms"},backgroundColor:theme=>(0,_mui_system__WEBPACK_IMPORTED_MODULE_18__.Fq)(theme.palette.action.hover,.03)},ref:refTitleMeasure,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.Z,{sx:{display:"flex",flex:"1 1 10%",flexDirection:"row",alignItems:"center",marginTop:theme=>theme.spacing(1),marginBottom:theme=>theme.spacing(.5),marginLeft:theme=>theme.spacing(1),marginRight:theme=>theme.spacing(1)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.Z,{sx:{flex:"1 1 100%",paddingLeft:theme=>theme.spacing(1)},children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_buttons__WEBPACK_IMPORTED_MODULE_20__.Q_,{label:"Close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_21__.Z,{"aria-label":"close",sx:{color:theme=>theme.palette.text.icon??theme.palette.action.active},touchRippleRef:refRipple,onPointerDown:e=>{e.stopPropagation(),e.preventDefault()},onPointerUp:handleCancel,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_22__.Z,{})})})]})}):null,children]})})})});let backdrop=null;return isModal&&(backdrop=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BackdropComponent,{...propBackdropProps,open:visible,onMouseDown:e=>{handleCancel(),propBackdropProps?.onMouseDown?.(e)},onClick:e=>{onBackdropClick?.(e),propBackdropProps?.onClick?.(e)},sx:{pointerEvents:"auto",...propBackdropProps?.sx}})),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"MuiModal-root",sx:{position:"fixed",zIndex:"1300",right:"0",bottom:"0",top:"0",left:"0",outline:"0",display:"block",pointerEvents:"none"},ref:(0,react_merge_refs__WEBPACK_IMPORTED_MODULE_6__.l)([refLocal,refRootMeasure]),onMouseDown:e=>{hasFocus&&(e.target===refWindowLocal.current||e.target.tabIndex<0)&&refWindowLocal.current?.contains(document.activeElement)&&e.preventDefault()},onContextMenu:e=>{e.isPropagationStopped()||e.preventDefault()},onFocus:e=>{!hasFocus&&(e.target===refWindowLocal.current||e.target.tabIndex<0)&&setTimeout((()=>{autoFocus()}),100),refFocusTrap.current?.focusTrap?.unpause(),setHasFocus(!0),refWindowLocal.current?.contains(e.target)&&e.target!==refWindowLocal.current&&setLastFocus(e.target),e.relatedTarget&&!relatedFocus&&setRelatedFocus(e.relatedTarget)},onBlur:e=>{refLocal?.current?.contains(e.relatedTarget)||(setRelatedFocus(null),refFocusTrap.current?.focusTrap?.pause(),setHasFocus(!1))},children:[backdrop,elemWindow]}),document.body,key+"")})),__WEBPACK_DEFAULT_EXPORT__=InternalWindow;try{InternalWindow.displayName="InternalWindow",InternalWindow.__docgenInfo={description:"",displayName:"InternalWindow",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The dialog title",name:"title",required:!1,type:{name:"string"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-mui/src/dialog/InternalWindow.tsx#InternalWindow"]={docgenInfo:InternalWindow.__docgenInfo,name:"InternalWindow",path:"../../packages/common-mui/src/dialog/InternalWindow.tsx#InternalWindow"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/sheet-mui/src/dialogs/ShortcutKeysDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>dialogs_ShortcutKeysDialog});var react=__webpack_require__("../../node_modules/react/index.js"),DialogContent=__webpack_require__("../../node_modules/@mui/material/DialogContent/DialogContent.js"),types=__webpack_require__("../../packages/common-react/src/types/types.ts"),InternalWindow=__webpack_require__("../../packages/common-mui/src/dialog/InternalWindow.tsx"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),TableCell=__webpack_require__("../../node_modules/@mui/material/TableCell/TableCell.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Checkbox=__webpack_require__("../../node_modules/@mui/material/Checkbox/Checkbox.js"),FormControlLabel=__webpack_require__("../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),es=__webpack_require__("../../node_modules/react-virtualized/dist/es/index.js"),ExhibitTooltip=__webpack_require__("../../packages/common-mui/src/buttons/ExhibitTooltip.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classes_flexContainer="ReactVirtualizedDemo-flexContainer",classes_tableRow="ReactVirtualizedDemo-tableRow",classes_tableRowHover="ReactVirtualizedDemo-tableRowHover",classes_tableCell="ReactVirtualizedDemo-tableCell",classes_noClick="ReactVirtualizedDemo-noClick";class MuiVirtualizedTable extends react.PureComponent{static defaultProps={headerHeight:40,rowHeight:48};getRowClassName=({index})=>{const{onRowClick}=this.props;return(0,clsx_m.default)(classes_tableRow,classes_flexContainer,{[classes_tableRowHover]:-1!==index&&null!=onRowClick})};cellRenderer=({cellData,columnIndex,dataKey})=>{const{columns,rowHeight,onRowClick}=this.props;let dataRender=cellData,styling={height:rowHeight,paddingRight:"2px",paddingTop:"0px",paddingBottom:"0px"};return"shortcut"===dataKey?dataRender=(0,ExhibitTooltip.El)(cellData):"description"===dataKey&&(styling={...styling,fontSize:".75rem",display:"block",paddingTop:"4px",whiteSpace:"pre-line"}),(0,jsx_runtime.jsx)(TableCell.Z,{component:"div",className:(0,clsx_m.default)(classes_tableCell,classes_flexContainer,{[classes_noClick]:null==onRowClick}),variant:"body",style:styling,align:null!=columnIndex&&columns[columnIndex].numeric?"right":"left",children:dataRender})};headerRenderer=({label,columnIndex})=>{const{headerHeight,columns}=this.props;return(0,jsx_runtime.jsx)(TableCell.Z,{component:"div",className:(0,clsx_m.default)(classes_tableCell,classes_flexContainer,classes_noClick),variant:"head",sx:{height:headerHeight,backgroundColor:theme=>theme.palette.grey[300]},align:columns[columnIndex].numeric?"right":"left",children:(0,jsx_runtime.jsx)("span",{children:label})})};render(){const{columns,rowHeight,headerHeight,...tableProps}=this.props;return(0,jsx_runtime.jsx)(es.qj,{children:({height,width})=>(0,jsx_runtime.jsx)(es.iA,{height,width,rowHeight,gridStyle:{direction:"inherit"},headerHeight,...tableProps,rowClassName:this.getRowClassName,children:columns.map((({dataKey,width:colWidth,widthLess,...other},index)=>{const renderWidth=widthLess?width-widthLess:colWidth;return(0,jsx_runtime.jsx)(es.sg,{headerRenderer:headerProps=>this.headerRenderer({...headerProps,columnIndex:index}),className:classes_flexContainer,cellRenderer:this.cellRenderer,dataKey,width:renderWidth,...other},dataKey)}))})})}}MuiVirtualizedTable.displayName="MuiVirtualizedTable";const VirtualizedTable=(0,styled.ZP)(MuiVirtualizedTable)((({theme})=>({"& .ReactVirtualized__Table__headerRow":{..."rtl"===theme.direction&&{paddingLeft:"0 !important"},..."rtl"!==theme.direction&&{paddingRight:void 0}},"& .ReactVirtualized__Table__Grid":{outline:"none"},[`& .${classes_flexContainer}`]:{display:"flex",alignItems:"center",boxSizing:"border-box"},[`& .${classes_tableRow}`]:{cursor:"pointer"},[`& .${classes_tableRowHover}`]:{"&:hover:not([disabled])":{backgroundColor:theme.palette.grey[200]}},[`& .${classes_tableCell}`]:{flex:1},[`& .${classes_noClick}`]:{cursor:"initial"}})));function ShortcutKeysPanel(props){const{commands,...rest}=props,[showAll,setShowAll]=(0,react.useState)(!1),rows=(0,react.useMemo)((()=>{let commandArray=commands.asArray();showAll||(commandArray=commandArray.filter((command=>command.shortcut()))),commandArray.sort(((a,b)=>a.label().localeCompare(b.label())));const retValue=[],replaceDoubleNewLines=str=>str.replace(/\n\n/g,"\n");for(let i=0;i<commandArray.length;i++){const command=commandArray[i],shortcut=command.shortcut();if(Array.isArray(shortcut)){const shortcuts=shortcut;for(let j=0;j<shortcuts.length;j++)retValue.push({label:command.label(),description:replaceDoubleNewLines(command.description()),shortcut:shortcuts[j]})}else retValue.push({label:command.label(),description:replaceDoubleNewLines(command.description()),shortcut:command.shortcut()})}return retValue}),[showAll,commands]);return(0,jsx_runtime.jsxs)(Box.Z,{style:{height:440,width:"100%",display:"flex",flexDirection:"column"},...rest,children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"end",color:theme=>theme.palette.text.secondary},children:(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Checkbox.Z,{checked:showAll,onChange:()=>setShowAll(!showAll)}),label:"Show actions without key bindings",labelPlacement:"start"})}),(0,jsx_runtime.jsx)(Box.Z,{sx:{flex:"1 1 100%",borderRadius:theme=>`${theme.shape.borderRadius}px`,border:theme=>`solid ${theme.palette.divider} 1px`,paddingRight:"1px",overflow:"hidden"},children:(0,jsx_runtime.jsx)(VirtualizedTable,{rowCount:rows.length,rowGetter:row=>rows[row.index],columns:[{width:180,label:"Command",dataKey:"label"},{width:260,label:"Key Binding",dataKey:"shortcut"},{width:240,label:"Description",dataKey:"description",widthLess:440}]})})]})}ShortcutKeysPanel.displayName="ShortcutKeysPanel";try{ShortcutKeysPanel.displayName="ShortcutKeysPanel",ShortcutKeysPanel.__docgenInfo={description:"",displayName:"ShortcutKeysPanel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/dialogs/ShortcutKeysPanel.tsx#ShortcutKeysPanel"]={docgenInfo:ShortcutKeysPanel.__docgenInfo,name:"ShortcutKeysPanel",path:"../../packages/sheet-mui/src/dialogs/ShortcutKeysPanel.tsx#ShortcutKeysPanel"})}catch(__react_docgen_typescript_loader_error){}const ShortcutKeysDialog=props=>{const{title:propTitle="Shortcut Keys",commands,sx:propSx,...rest}=props;return(0,jsx_runtime.jsx)(InternalWindow.N,{isModal:!0,onKeyDown:e=>{e.keyCode===types.mW.F1&&e.preventDefault()},sx:{minWidth:"780px",...propSx},title:propTitle,...rest,children:(0,jsx_runtime.jsx)(DialogContent.Z,{dividers:!0,children:(0,jsx_runtime.jsx)(ShortcutKeysPanel,{commands,sx:{marginBottom:"8px"}})})})};ShortcutKeysDialog.displayName="ShortcutKeysDialog";const dialogs_ShortcutKeysDialog=ShortcutKeysDialog;try{ShortcutKeysDialog.displayName="ShortcutKeysDialog",ShortcutKeysDialog.__docgenInfo={description:"",displayName:"ShortcutKeysDialog",props:{commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"CommandMap"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The dialog title",name:"title",required:!1,type:{name:"string"}},autoFocusSel:{defaultValue:null,description:"Query selector for the element to focus on show.\n@remarks It would be better to honor autoFocus attribute but React is 'hiding' it",name:"autoFocusSel",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!1,type:{name:"(results?: any) => void"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"() => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"() => void"}},refWindow:{defaultValue:null,description:"We couldn't use the forwardRef? Revisit this.\nIt seemed to be due to the createPortal returns a ReactPortal not an HTMLElement",name:"refWindow",required:!1,type:{name:"Ref<InternalWindowElement>"}},isModal:{defaultValue:null,description:"If true this will show a backdrop\n@remarks Our floating menu achieve modality without a background by listens to global clicks (and focus)\n@defaultValue false",name:"isModal",required:!1,type:{name:"boolean"}},initialPosition:{defaultValue:null,description:"A default position for the window. The default is center at %50, %50.",name:"initialPosition",required:!1,type:{name:"RelativePoint"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/sheet-mui/src/dialogs/ShortcutKeysDialog.tsx#ShortcutKeysDialog"]={docgenInfo:ShortcutKeysDialog.__docgenInfo,name:"ShortcutKeysDialog",path:"../../packages/sheet-mui/src/dialogs/ShortcutKeysDialog.tsx#ShortcutKeysDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);