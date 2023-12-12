"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6130],{"./src/components/BoundedWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>BoundedWidget});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("../../node_modules/@mui/material/Link/Link.js"),IconButton=__webpack_require__("../../node_modules/@mui/material/IconButton/IconButton.js"),DatasetLinked=__webpack_require__("../../node_modules/@mui/icons-material/DatasetLinked.js"),FormControl=__webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js"),FormHelperText=__webpack_require__("../../node_modules/@mui/material/FormHelperText/FormHelperText.js"),useCallbackRef=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts");const useWorkbookRange=(model,address,listener,options)=>{const listenerRef=(0,react.useRef)(listener);listenerRef.current=listener;const fireOnAddressChange=options?.fireOnAddressChange??!0;(0,react.useEffect)((()=>{if(!model||!address||!listenerRef.current)return;const stableListener=(range,sheet,workbook)=>{listenerRef.current?.(range,sheet,workbook)},unlistener=model.addRangeListener(address,stableListener,options);if(fireOnAddressChange){const range=model.getRange(address);stableListener(range,range.sheet(),model)}return()=>{unlistener?.()}}),[model,address])};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BoundedWidget=(0,react.memo)((props=>{const{initialAddress,createWidget:propCreateWidget,workbookModel,refWorkbookElement,children,...rest}=props,createWidget=(0,useCallbackRef.W6)(propCreateWidget,[propCreateWidget]),[address,setAddress]=(0,react.useState)(null),[range,setRange]=(0,react.useState)(null);useWorkbookRange(workbookModel,address,(range=>{range&&setRange(range)}));const widget=(0,react.useMemo)((()=>createWidget({range,refWorkbookElement})),[range]);return(0,jsx_runtime.jsxs)(FormControl.Z,{...rest,children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",rowGap:theme=>theme.spacing(.25)},children:[widget,(0,jsx_runtime.jsx)(IconButton.Z,{sx:{my:-2},onClick:()=>{setAddress(workbookModel.getActiveAddressA1())},children:(0,jsx_runtime.jsx)(DatasetLinked.Z,{})})]}),(0,jsx_runtime.jsx)(FormHelperText.Z,{children:(0,jsx_runtime.jsx)(Link.Z,{component:"button",underline:"hover",variant:"body2",disabled:!range?.isValid(),sx:{"&:not(:hover)":{color:"inherit"},"&[disabled]":{color:theme=>theme.palette.text.disabled,cursor:"default","&:hover":{textDecoration:"none"}}},onClick:()=>{refWorkbookElement.current?.goto?.(range,!0)},children:range?`${range.toString()}`:"Unlinked"})})]})}));try{BoundedWidget.displayName="BoundedWidget",BoundedWidget.__docgenInfo={description:"2-way binding between a widget (children) and a cell range.",displayName:"BoundedWidget",props:{workbookModel:{defaultValue:null,description:"",name:"workbookModel",required:!0,type:{name:"IWorkbookModel"}},refWorkbookElement:{defaultValue:null,description:"",name:"refWorkbookElement",required:!0,type:{name:"MutableRefObject<WorkbookElement>"}},initialAddress:{defaultValue:null,description:"",name:"initialAddress",required:!1,type:{name:"string"}},createWidget:{defaultValue:null,description:"",name:"createWidget",required:!0,type:{name:"(props: BoundedWidgetElementProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundedWidget.tsx#BoundedWidget"]={docgenInfo:BoundedWidget.__docgenInfo,name:"BoundedWidget",path:"src/components/BoundedWidget.tsx#BoundedWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RelaxedChangeTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>RelaxedChangeTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/types/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelaxedChangeTextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value:propValue,onChange:propOnChange,onKeyDown:propOnKeyDown,onBlur:propOnBlur,...rest}=props,[lastChangeEvent,setLastChangeEvent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setLastChangeEvent(null)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.Z,{...rest,value:lastChangeEvent?.target.value??propValue??"",onKeyDown:event=>{event.which===_sheetxl_common_react__WEBPACK_IMPORTED_MODULE_3__.mW.Enter&&lastChangeEvent&&(setLastChangeEvent(null),propOnChange?.(lastChangeEvent),propOnKeyDown?.(event))},onBlur:event=>{setLastChangeEvent(null),propOnChange?.(event),propOnBlur?.(event)},onChange:event=>{setLastChangeEvent(event)}})}));try{RelaxedChangeTextField.displayName="RelaxedChangeTextField",RelaxedChangeTextField.__docgenInfo={description:"Simple component that delays firing onChange until enter or blur.",displayName:"RelaxedChangeTextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"]={docgenInfo:RelaxedChangeTextField.__docgenInfo,name:"RelaxedChangeTextField",path:"src/components/RelaxedChangeTextField.tsx#RelaxedChangeTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OX:()=>sharedCellRenderer});__webpack_require__("./src/components/BoundedWidget.tsx"),__webpack_require__("./src/components/RelaxedChangeTextField.tsx");var DefaultCellRenderer=__webpack_require__("../../packages/grid/src/DefaultCellRenderer.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sharedCellRenderer=props=>(0,jsx_runtime.jsx)(DefaultCellRenderer.h,{...props,value:`${props.range.rowStart}:${props.range.colStart}`});sharedCellRenderer.displayName="sharedCellRenderer";try{sharedCellRenderer.displayName="sharedCellRenderer",sharedCellRenderer.__docgenInfo={description:"",displayName:"sharedCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!1,type:{name:"any"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!0,type:{name:"GridOverlayView"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!0,type:{name:"CellRangeCoords"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!0,type:{name:"number"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SimpleCellRenderer.tsx#sharedCellRenderer"]={docgenInfo:sharedCellRenderer.__docgenInfo,name:"sharedCellRenderer",path:"src/components/SimpleCellRenderer.tsx#sharedCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/Grid.Base.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseGridStory:()=>BaseGridStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/grid/src/BaseGrid.tsx"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.w$,{...rest,style:{minHeight:"400px",flex:"1",border:"blue solid 1px",position:"relative"},cellRenderer:_components__WEBPACK_IMPORTED_MODULE_1__.OX})})};Template.displayName="Template";const BaseGridStory=Template.bind({});BaseGridStory.args={width:800,height:600,columnCount:200,rowCount:200},BaseGridStory.storyName="Base";const __WEBPACK_DEFAULT_EXPORT__={title:"Grid",component:_sheetxl_grid__WEBPACK_IMPORTED_MODULE_3__.w$,parameters:{controls:{sort:"requiredFirst"}}};BaseGridStory.parameters={...BaseGridStory.parameters,docs:{...BaseGridStory.parameters?.docs,source:{originalSource:'props => {\n  const {\n    ...rest\n  } = (props as any);\n  return <div style={{\n    // For Canvas view we want to take full area\n    width: "100%",\n    height: "100%",\n    display: "flex",\n    border: "green solid 1px"\n  }}>\r\n      <BaseGrid {...rest} style={{\n      // For Docs view we are 400px by \'full width\'\n      minHeight: \'400px\',\n      flex: "1",\n      border: \'blue solid 1px\',\n      position: \'relative\'\n    }} cellRenderer={sharedCellRenderer} />\r\n    </div>;\n}',...BaseGridStory.parameters?.docs?.source}}};const __namedExportsOrder=["BaseGridStory"]},"../../packages/common-react/src/hooks/useCallbackRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>useCallbackRef,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,lz:()=>useCallbackRef2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const useCallbackRef=(callback,deps)=>{const refCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();refCB.current=callback;const unstableCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>refCB.current?.(...args)),deps);if(refCB.current)return unstableCB},useCallbackRef2=(callback,deps)=>{const cbCurrent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>callback?.(...args)),deps),refCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();refCB.current=cbCurrent;const stableCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>refCB.current?.(...args)),[]);if(refCB.current)return stableCB},__WEBPACK_DEFAULT_EXPORT__=useCallbackRef},"../../packages/common-react/src/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kx:()=>HorizontalAlignment,az:()=>MouseButtonCodes,mW:()=>KeyCodes,n9:()=>EMPTY_CSS_PROPERTIES,rh:()=>KeyModifiers});let HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.General="general",HorizontalAlignment.Left="left",HorizontalAlignment.Right="right",HorizontalAlignment.Center="center",HorizontalAlignment.Justify="justify",HorizontalAlignment.Fill="fill",HorizontalAlignment.Distributed="distributed",HorizontalAlignment.CenterContinuous="centerContinuous",HorizontalAlignment}({}),KeyModifiers=function(KeyModifiers){return KeyModifiers.Shift="shift",KeyModifiers.Alt="alt",KeyModifiers.Ctrl="ctrl",KeyModifiers.Meta="meta",KeyModifiers}({}),KeyCodes=function(KeyCodes){return KeyCodes[KeyCodes.BackSpace=8]="BackSpace",KeyCodes[KeyCodes.Tab=9]="Tab",KeyCodes[KeyCodes.Clear=12]="Clear",KeyCodes[KeyCodes.Enter=13]="Enter",KeyCodes[KeyCodes.Shift=16]="Shift",KeyCodes[KeyCodes.Control=17]="Control",KeyCodes[KeyCodes.Alt=18]="Alt",KeyCodes[KeyCodes.Pause=19]="Pause",KeyCodes[KeyCodes.CapsLock=20]="CapsLock",KeyCodes[KeyCodes.Escape=27]="Escape",KeyCodes[KeyCodes.Space=32]="Space",KeyCodes[KeyCodes.PageUp=33]="PageUp",KeyCodes[KeyCodes.PageDown=34]="PageDown",KeyCodes[KeyCodes.End=35]="End",KeyCodes[KeyCodes.Home=36]="Home",KeyCodes[KeyCodes.Left=37]="Left",KeyCodes[KeyCodes.Up=38]="Up",KeyCodes[KeyCodes.Right=39]="Right",KeyCodes[KeyCodes.Down=40]="Down",KeyCodes[KeyCodes.Insert=45]="Insert",KeyCodes[KeyCodes.Delete=46]="Delete",KeyCodes[KeyCodes.Digit_8=56]="Digit_8",KeyCodes[KeyCodes.Y=89]="Y",KeyCodes[KeyCodes.Z=90]="Z",KeyCodes[KeyCodes.Meta=91]="Meta",KeyCodes[KeyCodes.F1=112]="F1",KeyCodes[KeyCodes.F2=113]="F2",KeyCodes[KeyCodes.F3=114]="F3",KeyCodes[KeyCodes.F4=115]="F4",KeyCodes[KeyCodes.F5=116]="F5",KeyCodes[KeyCodes.F6=117]="F6",KeyCodes[KeyCodes.F7=118]="F7",KeyCodes[KeyCodes.F8=119]="F8",KeyCodes[KeyCodes.F9=120]="F9",KeyCodes[KeyCodes.F10=121]="F10",KeyCodes[KeyCodes.F11=122]="F11",KeyCodes[KeyCodes.F12=123]="F12",KeyCodes[KeyCodes.NumLock=144]="NumLock",KeyCodes[KeyCodes.ScrollLock=145]="ScrollLock",KeyCodes[KeyCodes.BackSlash=220]="BackSlash",KeyCodes}({}),MouseButtonCodes=function(MouseButtonCodes){return MouseButtonCodes[MouseButtonCodes.Left=1]="Left",MouseButtonCodes[MouseButtonCodes.Middle=2]="Middle",MouseButtonCodes[MouseButtonCodes.Right=3]="Right",MouseButtonCodes}({});const EMPTY_CSS_PROPERTIES={}},"../../packages/grid/src/DefaultCellRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>DefaultCellRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultCellRenderer=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{value,view,bounds,range,zoom,children,style:propStyle,...rest}=props,fontSize=propStyle?.fontSize||1056/72;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"2px 4px",fontFamily:"Calibri",letterSpacing:-.25,lineHeight:1.2,fontSize,...propStyle},...rest,children:value})}));try{DefaultCellRenderer.displayName="DefaultCellRenderer",DefaultCellRenderer.__docgenInfo={description:"Default cell component capable of rendering a value",displayName:"DefaultCellRenderer",props:{value:{defaultValue:null,description:"A value to render",name:"value",required:!1,type:{name:"any"}},view:{defaultValue:null,description:"The view that is rendering a collection of cells",name:"view",required:!0,type:{name:"GridOverlayView"}},range:{defaultValue:null,description:"The CellRangeCoords that is being rendering",name:"range",required:!0,type:{name:"CellRangeCoords"}},zoom:{defaultValue:null,description:"If there is a zoom scale.\n@defaultValue 1",name:"zoom",required:!0,type:{name:"number"}},bounds:{defaultValue:null,description:"The range bounds relative to the current viewport and zoom",name:"bounds",required:!0,type:{name:"Bounds"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"]={docgenInfo:DefaultCellRenderer.__docgenInfo,name:"DefaultCellRenderer",path:"../../packages/grid/src/DefaultCellRenderer.tsx#DefaultCellRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../../node_modules/detect-it/dist/detect-it.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{deviceType:()=>deviceType,primaryInput:()=>primaryInput,supportsPassiveEvents:()=>supportsPassiveEvents,supportsPointerEvents:()=>supportsPointerEvents,supportsTouchEvents:()=>supportsTouchEvents});var w="undefined"!=typeof window?window:{screen:{},navigator:{}},matchMedia=(w.matchMedia||function(){return{matches:!1}}).bind(w),passiveOptionAccessed=!1,options={get passive(){return passiveOptionAccessed=!0}},noop=function(){};w.addEventListener&&w.addEventListener("p",noop,options),w.removeEventListener&&w.removeEventListener("p",noop,!1);var supportsPassiveEvents=passiveOptionAccessed,supportsPointerEvents="PointerEvent"in w,onTouchStartInWindow="ontouchstart"in w,supportsTouchEvents=onTouchStartInWindow||"TouchEvent"in w&&matchMedia("(any-pointer: coarse)").matches,hasTouch=(w.navigator.maxTouchPoints||0)>0||supportsTouchEvents,userAgent=w.navigator.userAgent||"",isIPad=matchMedia("(pointer: coarse)").matches&&/iPad|Macintosh/.test(userAgent)&&Math.min(w.screen.width||0,w.screen.height||0)>=768,hasCoarsePrimaryPointer=(matchMedia("(pointer: coarse)").matches||!matchMedia("(pointer: fine)").matches&&onTouchStartInWindow)&&!/Windows.*Firefox/.test(userAgent),hasAnyHoverOrAnyFinePointer=matchMedia("(any-pointer: fine)").matches||matchMedia("(any-hover: hover)").matches||isIPad||!onTouchStartInWindow,deviceType=!hasTouch||!hasAnyHoverOrAnyFinePointer&&hasCoarsePrimaryPointer?hasTouch?"touchOnly":"mouseOnly":"hybrid",primaryInput="mouseOnly"===deviceType?"mouse":"touchOnly"===deviceType||hasCoarsePrimaryPointer?"touch":"mouse"},"../../node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);