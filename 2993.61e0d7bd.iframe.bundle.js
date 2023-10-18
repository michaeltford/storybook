"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2993],{"../../packages/grid/src/hooks/useEditor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useEditor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-react/src/types/types.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/common-react/src/command/CommandMap.ts"),_utils_RangeUtils_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/grid/src/utils/RangeUtils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const defaultCanEdit=_cellCoords=>!0,EditorContainer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{cellBounds,cellCoords,fill,isInBounds,borderStrokeFill,borderStrokeWidth,autoFocusSel=!1,getCellEditor,propEditor,stateAndCoords,refEditor,onMount,onUnmount,onFocus:propOnFocus,style:propStyle,...rest}=props;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(refIsActivated.current)return()=>{onUnmount()}}),[]);const refCellCoords=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refIsActivated=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),refLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onFocus=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((e=>{refEditor?.current??refLocal.current,(refEditor?.current??refLocal.current)?.focus(),propOnFocus?.(e),refIsActivated.current||(refIsActivated.current=!0,onMount())}),[propOnFocus]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{refCellCoords.current&&cellCoords&&refCellCoords.current.rowIndex===cellCoords.rowIndex&&refCellCoords.current.colIndex===cellCoords.colIndex||(refCellCoords.current=cellCoords,autoFocusSel?(refEditor??refLocal).current?.focus():(refIsActivated.current=!0,onMount()))}),[cellCoords?.rowIndex,cellCoords?.colIndex]);const editor=getCellEditor({...propEditor,ref:refEditor??refLocal},stateAndCoords.coords);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{tabIndex:0,style:{background:`${fill||"white"}`,...propStyle,position:"absolute",boxSizing:"border-box",top:cellBounds.y,left:cellBounds.x,width:cellBounds.width,height:cellBounds.height,opacity:isInBounds?propStyle?.opacity??1:0},onFocus,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",boxSizing:"border-box",left:"1px",top:"1px",width:"calc(100% - 2px)",height:"calc(100% - 2px)",outline:`${borderStrokeWidth}px ${borderStrokeFill} solid`,boxShadow:"rgba(60,64,67,.35) 2px 2px 6px 3px",maxHeight:"100%",overflow:"hidden",display:"flex"},children:editor})})})),useEditor=({stateAndCoords:propStateAndCoords,onChange,gridRef,canEdit:propCanEdit=defaultCanEdit,getInitialEditState:propGetInitialEditState,getCellEditor,onStart,onDone,onSubmit:propOnSubmit,onCancel:propOnCancel,containerProps,onNavigate,onNavigateSelection,activeCoords,hideOnBlur=!0,borderStrokeFill,borderStrokeWidth=2,fill="white",alignment=_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Kx.Left})=>{const editorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),onSubmit=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(propOnSubmit,[propOnSubmit]),onCancel=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(propOnCancel,[propOnCancel]),[editorNaturalSize,setEditorNaturalSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),refActivating=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[activating,setActivating]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),refLoading=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[loaded,setLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),refUnloading=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[editing,setEditing]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),canEdit=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(propCanEdit,[]),focusGrid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{gridRef.current&&gridRef.current.focus()}),[]),recalcBounds=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(((view,coords,width,height,alignment)=>{if(!coords)return null;const cellRange=gridRef.current.getCoordsAsRange(coords),rangeBounds=view.getCellRangeBounds(cellRange),cellBounds=rangeBounds;if(!view.clipBounds(rangeBounds))return null;width&&(width*=view.zoom),height&&(height*=view.zoom);let effectiveBounds=cellBounds,maxWidth=!1;if(void 0!==width){let measureRange={...cellRange};for(;!maxWidth&&effectiveBounds.width<=width;)alignment===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Kx.Left?measureRange.colEnd+1<gridRef.current.columnCount?measureRange.colEnd=view.cellLayout.getColIndex(effectiveBounds.x+width):maxWidth=!0:alignment===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Kx.Right?measureRange.colStart-1>=0?measureRange.colStart=view.cellLayout.getColIndex(effectiveBounds.x-(width-effectiveBounds.width)):maxWidth=!0:alignment===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.Kx.Center&&(measureRange.colEnd+1<gridRef.current.columnCount&&measureRange.colStart-1>=0?(measureRange.colStart=view.cellLayout.getColIndex(effectiveBounds.x-(width-effectiveBounds.width)/2),measureRange.colEnd=view.cellLayout.getColIndex(effectiveBounds.x+effectiveBounds.width+(width-effectiveBounds.width)/2)):maxWidth=!0),maxWidth||(effectiveBounds=view.getCellRangeBounds(measureRange))}effectiveBounds.height=cellBounds.height,void 0!==height&&(effectiveBounds.height=Math.max(height+1,cellBounds.height));const{containerWidth,containerHeight}=gridRef.current.getDimensions();return{x:effectiveBounds.x??0,y:effectiveBounds.y??0,height:Math.min(containerHeight-effectiveBounds.y,effectiveBounds.height)+1,width:Math.min(containerWidth-effectiveBounds.x,effectiveBounds.width)+1}}),[]),startEditor=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(((coords,e,externalStateAndCoords)=>{if(!gridRef.current)return;const range=gridRef.current.getCoordsAsRange(coords),topLeftCoords={rowIndex:range.rowStart,colIndex:range.colStart};if(!canEdit(topLeftCoords))return;let activeEvent=Object.freeze({autoFocus:!0,editMode:!1,...e});if(refActivating.current&&!(0,_utils_RangeUtils_ts__WEBPACK_IMPORTED_MODULE_4__.dX)(topLeftCoords,refActivating.current.stateAndCoords.coords)&&(setActivating(null),refActivating.current=null,setEditing(null)),editing){if((0,_utils_RangeUtils_ts__WEBPACK_IMPORTED_MODULE_4__.dX)(topLeftCoords,editing.coords))return;cancelEditor()}setEditorNaturalSize(void 0);const editStateCoords=externalStateAndCoords??{editState:getInitialEditState(topLeftCoords,activeEvent),coords:topLeftCoords},newActivation=Object.freeze({event:activeEvent,stateAndCoords:editStateCoords});setActivating(newActivation),refActivating.current=newActivation,requestAnimationFrame((()=>gridRef.current&&gridRef.current.scrollCellIntoView(topLeftCoords).then((()=>{}))))}),[canEdit,editing,activating,loaded]),handleUnload=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((()=>{setLoaded(!1),refUnloading.current=!1,refLoading.current=!1}),[]),handleEditorLoad=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((stateAndCoords=>{document.activeElement?.nodeName,setLoaded(!0),onStart?.(stateAndCoords),refUnloading.current=!1,refLoading.current=!0}),[onStart]),getInitialEditState=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(propGetInitialEditState,[propGetInitialEditState]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentStateAndCoords=refActivating.current?.stateAndCoords??editing;propStateAndCoords!==currentStateAndCoords&&(propStateAndCoords&&canEdit(propStateAndCoords.coords)?loaded||null!==refActivating.current?(refActivating.current&&(refActivating.current={...refActivating.current,stateAndCoords:propStateAndCoords}),setEditing(propStateAndCoords)):startEditor(propStateAndCoords.coords,{autoFocus:!1},propStateAndCoords):propStateAndCoords||editorRef.current?.cancel())}),[propStateAndCoords]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentStateAndCoords=refActivating.current?.stateAndCoords??editing;if(currentStateAndCoords&&!(0,_utils_RangeUtils_ts__WEBPACK_IMPORTED_MODULE_4__.dX)(activeCoords,currentStateAndCoords.coords)){const editState=currentStateAndCoords.editState;currentStateAndCoords.coords;try{editorRef.current,currentStateAndCoords.coords,handleEditorSubmit?.(editState)}catch(error){console.warn("could not commit value",error),editorRef.current?.cancel()}}}),[activeCoords]);const handleStateAndCoordsChange=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((stateAndCoords=>{setEditing(stateAndCoords),onChange?.(stateAndCoords)}),[onChange,canEdit]),handleEditorSubmit=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((editState=>{refActivating.current?.stateAndCoords;const stateAndCoords=refActivating.current?.stateAndCoords??editing;stateAndCoords&&(onDone?.(),focusGrid(),handleStateAndCoordsChange(null),setActivating(null),refActivating.current=null,refUnloading.current=!0,void 0===editState.dirty?onCancel?.(stateAndCoords):(onSubmit?.({coords:stateAndCoords.coords,editState}),gridRef.current.invalidate(stateAndCoords?.coords)))}),[onDone,editing]),handlePointerDown=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((_e=>{hideOnBlur&&editorRef.current?.submit()}),[hideOnBlur]),handleEditorChange=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((editState=>{const stateAndCoords=editing??activating?.stateAndCoords;if(!stateAndCoords)return;const newStateAndCoords={editState,coords:stateAndCoords.coords};handleStateAndCoordsChange(newStateAndCoords)}),[onChange,editing,activating]),handleEditorCancel=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((()=>{const stateAndCoords=editing??refActivating.current?.stateAndCoords;stateAndCoords&&(onDone?.(),handleStateAndCoordsChange(null),refUnloading.current=!0,onCancel?.(stateAndCoords))}),[onDone,editing]),handleDoubleClick=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((e=>{if(!gridRef.current)return;const coords=gridRef.current.getViewFromOffset(e.nativeEvent.clientX,e.nativeEvent.clientY)?.getCellCoordsFromOffset(e.nativeEvent.clientX,e.nativeEvent.clientY);coords&&startEditor(coords,{...refActivating.current?.event,editMode:!0})}),[activating]),handleKeyDown=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((e=>{if(!activeCoords)return;const keyCode=e.nativeEvent.keyCode;if(e.isDefaultPrevented()||(keyCode=>[_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Right,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Left,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Up,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Down,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Tab,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Enter,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Home,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.End,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Delete,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Meta,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Escape,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.CapsLock,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.PageDown,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.PageUp,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.ScrollLock,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.NumLock,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Insert,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Pause,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Clear,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.F1].includes(keyCode)||keyCode>=_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.F3&&keyCode<=_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.F12)(keyCode))return;if(e.nativeEvent.ctrlKey||e.nativeEvent.shiftKey&&("Shift"===e.nativeEvent.key||e.nativeEvent.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Space)||e.nativeEvent.metaKey||e.nativeEvent.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.Alt)return;let activateEvent={};refActivating.current&&(0,_utils_RangeUtils_ts__WEBPACK_IMPORTED_MODULE_4__.dX)(activeCoords,refActivating.current.stateAndCoords.coords)?(refActivating.current,activateEvent={...refActivating.current.event}):activateEvent={editMode:!1,autoFocus:!0},e.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.F2?activateEvent.editMode=!0:(activateEvent.text||(activateEvent.text=""),e.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_2__.mW.BackSpace?activateEvent.text&&(activateEvent.text=activateEvent.text.substring(0,activateEvent.text.length-1)):e.key&&(activateEvent.text+=e.key)),e.key,startEditor(activeCoords,activateEvent),e.preventDefault()}),[activeCoords]),{width:naturalWidth,height:naturalHeight}=editorNaturalSize??{width:0,height:0},[overlays,setOverlays]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),renderEditor=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)((view=>{const stateAndCoords=refActivating.current?.stateAndCoords??activating?.stateAndCoords??editing;if(!stateAndCoords)return refActivating.current,null;let cellBounds=recalcBounds(view,activeCoords,naturalWidth,naturalHeight,alignment),isInBounds=!0;cellBounds&&0!==cellBounds.width&&0!==cellBounds.height||(cellBounds={x:0,y:0,width:naturalWidth,height:naturalWidth},isInBounds=!1);const refGrid=gridRef.current,startView=refGrid.getViewFromCoords(stateAndCoords.coords),isPrimaryPane=startView?.anchor===view.anchor,propEditor={containerBounds:{x:0,y:0,width:cellBounds.width/view.zoom,height:cellBounds.height/view.zoom},onSubmit:handleEditorSubmit,onChange:handleEditorChange,onCancel:handleEditorCancel,onNavigate,onNavigateSelection,setNaturalSize:setEditorNaturalSize,editState:stateAndCoords.editState,initialSelection:refActivating.current?.event.initialSelection,zoom:view.zoom};return refActivating.current,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorContainer,{cellBounds,borderStrokeWidth,borderStrokeFill,fill,isInBounds,cellCoords:stateAndCoords.coords,getCellEditor,propEditor,stateAndCoords,refEditor:isPrimaryPane?editorRef:null,autoFocusSel:!!isPrimaryPane,onMount:()=>{view.anchor,refGrid&&isPrimaryPane&&(view.anchor,handleEditorLoad(stateAndCoords))},onUnmount:handleUnload,onKeyDown:e=>{refUnloading.current&&(e.key,e.isPropagationStopped(),e.isDefaultPrevented(),handleKeyDown(e))},...containerProps},"editor:"+view.anchor)}),[editing,getCellEditor]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{gridRef.current&&getCellEditor&&(refActivating.current?.stateAndCoords??editing)?setOverlays([renderEditor]):setOverlays([])}),[naturalWidth,naturalHeight,alignment,editing,activating,borderStrokeWidth,borderStrokeFill,fill]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{refActivating.current,refLoading.current,editing||refActivating.current?refActivating.current?.stateAndCoords&&refLoading.current&&(refActivating.current?.stateAndCoords?.editState,handleStateAndCoordsChange(refActivating.current?.stateAndCoords),setActivating(null),editorRef.current?.activate?.(),refActivating.current=null):focusGrid()}),[editing,activating,loaded]);const submitEditor=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{editorRef.current?.submit()}),[]),cancelEditor=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(refActivating.current)return onCancel?.(refActivating.current.stateAndCoords),setActivating(null),void(refActivating.current=null);editorRef.current?.cancel()}),[]),commandsInline=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new _sheetxl_common_react__WEBPACK_IMPORTED_MODULE_5__.QQ([])),[]),[commands,setCommands]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(commandsInline);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(editing){const newCommands=editorRef.current?.commands?editorRef.current.commands.merge(commandsInline):commandsInline;setCommands(newCommands)}else setCommands(commandsInline)}),[editing]);const sbStartEditor=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(startEditor,[]),sbHandleKeyDown=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(handleKeyDown,[]),sbHandlePointerDown=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(handlePointerDown,[]),sbHandleDoubleClick=(0,_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.W)(handleDoubleClick,[]);return{overlays,startEditor:sbStartEditor,submitEditor,cancelEditor,onKeyDown:sbHandleKeyDown,onPointerDown:sbHandlePointerDown,onDoubleClick:sbHandleDoubleClick,stateAndCoords:editing,commands}};try{useEditor.displayName="useEditor",useEditor.__docgenInfo={description:"Hook to make grid editable",displayName:"useEditor",props:{containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:'() => Omit<HTMLAttributes<HTMLDivElement>, "onScroll">'}},gridRef:{defaultValue:null,description:"Access grid methods",name:"gridRef",required:!0,type:{name:"MutableRefObject<GridElement>"}},canEdit:{defaultValue:null,description:"Callback fired before editing. Can be used to prevent editing. Do not use it, Can be removed in next release.",name:"canEdit",required:!1,type:{name:"(coords: CellCoords) => boolean"}},getInitialEditState:{defaultValue:null,description:"If the editor is being started via the startEditor\nmethod then an initial edit state need to be provided.\n@remarks It is possible that this can be called multiple times\ncurring activation",name:"getInitialEditState",required:!1,type:{name:"(coords: CellCoords, event?: ActivateEditorEvent) => EditState<CT, DT>"}},getCellEditor:{defaultValue:null,description:"Inject custom editors based on a cell.\nThis should not return null but rather can canEdit.\nThis is called during placement after scrolling and other bookkeeping has occurred",name:"getCellEditor",required:!0,type:{name:"(props: CellEditorProps<CT, DT> & CellEditorRefAttribute, coords: CellCoords) => ReactElement<CellEditorProps<CT, DT> & CellEditorRefAttribute, string | JSXElementConstructor<...>>"}},stateAndCoords:{defaultValue:null,description:"Inject an existing or shared EditingCell instance.\nIf this is specified than the grid is in a controlled edit",name:"stateAndCoords",required:!1,type:{name:"EditStateAndCoords<CT, DT>"}},onStart:{defaultValue:null,description:"Callback when user start editing",name:"onStart",required:!1,type:{name:"(stateAndCoords: EditStateAndCoords<CT, DT>) => void"}},onDone:{defaultValue:null,description:"Callback when user is done editing, either a submit or a cancel",name:"onDone",required:!1,type:{name:"() => void"}},onChange:{defaultValue:null,description:"Callback when user changes a value in editor",name:"onChange",required:!1,type:{name:"(stateAndCoords: EditStateAndCoords<CT, DT>) => void"}},onSubmit:{defaultValue:null,description:"Callback when user submits a value. Use this to update state",name:"onSubmit",required:!1,type:{name:"(stateAndCoords: EditStateAndCoords<CT, DT>) => void"}},onCancel:{defaultValue:null,description:"Callback when user cancels editing",name:"onCancel",required:!1,type:{name:"(stateAndCoords: EditStateAndCoords<CT, DT>) => void"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"(direction: CartesianDirection) => void"}},onNavigateSelection:{defaultValue:null,description:"",name:"onNavigateSelection",required:!1,type:{name:"(direction: CartesianDirection) => void"}},onCommandsChange:{defaultValue:null,description:"Key down listeners",name:"onCommandsChange",required:!1,type:{name:"(commands: CommandMap) => void"}},activeCoords:{defaultValue:null,description:"Active selected cell. This can change, if the user is in formula mode\nThis is used as a trigger",name:"activeCoords",required:!1,type:{name:"CellCoords"}},hideOnBlur:{defaultValue:{value:"true"},description:"Hide editor on blur",name:"hideOnBlur",required:!1,type:{name:"boolean"}},borderStrokeFill:{defaultValue:null,description:"",name:"borderStrokeFill",required:!1,type:{name:"string"}},borderStrokeWidth:{defaultValue:{value:"2"},description:"",name:"borderStrokeWidth",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"white"},description:"",name:"fill",required:!1,type:{name:"string"}},alignment:{defaultValue:{value:"HorizontalAlignment.Left"},description:"The editor alignment. Use primary for expanding on overflow",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"general"'},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'},{value:'"fill"'},{value:'"distributed"'},{value:'"centerContinuous"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/hooks/useEditor.tsx#useEditor"]={docgenInfo:useEditor.__docgenInfo,name:"useEditor",path:"../../packages/grid/src/hooks/useEditor.tsx#useEditor"})}catch(__react_docgen_typescript_loader_error){}}}]);