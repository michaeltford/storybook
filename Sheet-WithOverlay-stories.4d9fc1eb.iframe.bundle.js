"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1595],{"../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized})},"../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"../../node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiSvgIcon",slot)}(0,generateUtilityClasses.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],styles[`fontSize${(0,capitalize.A)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette2,_palette3;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:ownerState.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2=_theme$transitions2.duration)?void 0:_theme$transitions2.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette=_palette[ownerState.color])?void 0:_palette.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2=_palette2.action)?void 0:_palette2.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3=_palette3.action)?void 0:_palette3.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),hasSvgAsChild=react.isValidElement(children)&&"svg"===children.type,ownerState=(0,esm_extends.A)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox,hasSvgAsChild}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.A)(color)}`,`fontSize${(0,capitalize.A)(fontSize)}`]};return(0,composeClasses.A)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.A)({as:component,className:(0,clsx.A)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,hasSvgAsChild&&children.props,{ownerState,children:[hasSvgAsChild?children.props.children:children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./src/Sheet.WithOverlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SheetWithOverlays:()=>SheetWithOverlays,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/models/src/sheet/SheetModel.ts"),_sheetxl_models__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/models/src/range/RangeUtils.ts"),_sheetxl_sheet_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/sheet-react/src/components/sheet/Sheet.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=props=>{const{maxColumns,maxRows,showRowHeaders,showColumnHeaders,...rest}=props,[sheetModel]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>new _sheetxl_models__WEBPACK_IMPORTED_MODULE_2__.V({},{maxColumns,maxRows}))),overlays=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[view=>{const range={colStart:4,rowStart:15,colEnd:14,rowEnd:20};if(!_sheetxl_models__WEBPACK_IMPORTED_MODULE_3__.mT(range,view.visibleCellRange))return;const bounds=view.getCellRangeBounds(range);let{x:left,y:top,width,height}=bounds;return 0!==width&&0!==height?(1!==view.zoom&&(width/=view.zoom,height/=view.zoom),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",willChange:"top, left, width, height",left,top,width,height,clipPath:"inset(0px)",transform:1!==view.zoom?`translate(-50%, -50%) scale(${view.zoom}) translate(50%, 50%)`:void 0,display:"flex",alignItems:"stretch",justifyContent:"stretch",overflow:"none",pointerEvents:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:{flex:"1"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"Floating Button; click me and I will do nothing"})})},"testing")):void 0}]),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_react__WEBPACK_IMPORTED_MODULE_4__.c,{style:{flex:"1",minHeight:"400px",width:"100%",height:"100%"},model:sheetModel,overlays,showRowHeaders,showColumnHeaders,...rest})};Template.displayName="Template";const SheetWithOverlays=Template.bind({});SheetWithOverlays.args={maxRows:200,maxColumns:200,showRowHeaders:!0,showColumnHeaders:!0},SheetWithOverlays.storyName="with overlays";const __WEBPACK_DEFAULT_EXPORT__={title:"Sheet",component:_sheetxl_sheet_react__WEBPACK_IMPORTED_MODULE_4__.c,parameters:{controls:{sort:"requiredFirst"}}};SheetWithOverlays.parameters={...SheetWithOverlays.parameters,docs:{...SheetWithOverlays.parameters?.docs,source:{originalSource:"props => {\n  const {\n    maxColumns,\n    maxRows,\n    showRowHeaders,\n    showColumnHeaders,\n    ...rest\n  } = (props as any);\n  const [sheetModel] = useState(() => {\n    return new SheetModel({}, {\n      maxColumns,\n      maxRows\n    });\n  });\n  const overlays: ((view: GridOverlayView) => React.ReactNode)[] = useMemo(() => {\n    return [(view: GridOverlayView): React.ReactNode => {\n      const range = {\n        colStart: 4,\n        rowStart: 15,\n        colEnd: 14,\n        rowEnd: 20\n      };\n\n      // Ouf of range don't show\n      if (!RangeUtils.isRangeWithinRange(range, view.visibleCellRange)) {\n        return;\n      }\n      const bounds = view.getCellRangeBounds(range);\n      let {\n        x: left,\n        y: top,\n        width,\n        height\n      } = bounds;\n      if (width === 0 || height === 0)\n        // hidden row/column\n        return;\n\n      // Coordinates are provided in zoomed coordinates but the grid does not\n      // auto zoom. This allows the grid to decide the logic itself.\n      // TODO - provide a HOC that wraps the logic here.\n      if (view.zoom !== 1) {\n        width = width / view.zoom;\n        height = height / view.zoom;\n      }\n      return <div style={{\n        position: 'absolute',\n        willChange: 'top, left, width, height',\n        left,\n        top,\n        width,\n        height,\n        clipPath: 'inset(0px)',\n        // prevent overflow (if desired)\n        transform: view.zoom !== 1 ? `translate(-50%, -50%) scale(${view.zoom}) translate(50%, 50%)` : undefined,\n        display: 'flex',\n        alignItems: 'stretch',\n        justifyContent: 'stretch',\n        overflow: 'none',\n        pointerEvents: 'auto'\n      }} key={\"testing\"}>\r\n            <button style={{\n          flex: '1'\n        }}>\r\n              <span>\r\n                Floating Button; click me and I will do nothing\r\n              </span>\r\n            </button>\r\n          </div>;\n    }];\n  }, []);\n  return <Sheet style={{\n    // For Docs view we are 400px by 'full width'\n    flex: \"1\",\n    minHeight: \"400px\",\n    width: \"100%\",\n    height: \"100%\"\n  }} model={sheetModel} // Required\n  overlays={overlays} showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;\n}",...SheetWithOverlays.parameters?.docs?.source}}};const __namedExportsOrder=["SheetWithOverlays"]},"../../packages/common-react/src/utils/Notifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>NotificationType,c:()=>DefaultNotifier});let NotificationType=function(NotificationType){return NotificationType.Default="default",NotificationType.Error="error",NotificationType.Success="success",NotificationType.Warning="warning",NotificationType.Info="info",NotificationType}({});const DefaultNotifier={inform:(message,options)=>{let out=console.log;options?.type!==NotificationType.Warning&&options?.type!==NotificationType.Error||(out=console.warn),out(message)},showBusy:(_message,_options)=>new Promise((resolve=>{resolve((()=>{}))}))}},"../../node_modules/react-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(f){return r=>{f.forEach((n=>{"function"==typeof n?n(r):null!=n&&(n.current=r)}))}}__webpack_require__.d(__webpack_exports__,{P:()=>o})},"../../node_modules/react-singleton-hook/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pf:()=>singletonHook});var react=__webpack_require__("../../node_modules/react/index.js"),SingleItemContainer=function SingleItemContainer(_ref){var initValue=_ref.initValue,useHookBody=_ref.useHookBody,applyStateChange=_ref.applyStateChange,lastState=(0,react.useRef)(initValue);if("function"!=typeof useHookBody)throw new Error("function expected as hook body parameter. got "+typeof useHookBody);var val=useHookBody();return(0,react.useLayoutEffect)((function(){lastState.current!==val&&(lastState.current=val,applyStateChange(val))}),[applyStateChange,val]),null},client=__webpack_require__("../../node_modules/react-dom/client.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),warning=function warning(message){console&&console.warn&&console.warn(message)},globalObject="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var nextKey=1,automaticRender=!1,manualRender=!1,workingSet=[],renderedContainers=[],notifyContainersAsync=function notifyContainersAsync(){renderedContainers.forEach((function(updateRenderedHooks){return updateRenderedHooks()}))},SingletonHooksContainer=function SingletonHooksContainer(_ref){var automaticContainerInternalUseOnly=_ref.automaticContainerInternalUseOnly,_useState=(0,react.useState)([]),hooks=_useState[0],setHooks=_useState[1],currentHooksRef=(0,react.useRef)();return currentHooksRef.current=hooks,automaticContainerInternalUseOnly||!1!==automaticRender||(manualRender=!0),(0,react.useEffect)((function(){var mounted=!0;function updateRenderedHooks(){if(mounted)return renderedContainers[0]!==updateRenderedHooks?(automaticContainerInternalUseOnly||!0!==automaticRender||warning("SingletonHooksContainer is mounted after some singleton hook has been used.Your SingletonHooksContainer will not be used in favor of internal one."),void setHooks((function(_){return[]}))):void setHooks([].concat(workingSet))}return renderedContainers.push(updateRenderedHooks),notifyContainersAsync(),function(){mounted=!1,currentHooksRef.current.length>0&&warning("SingletonHooksContainer is unmounted, but it has active singleton hooks. They will be reevaluated once SingletonHooksContainer is mounted again"),renderedContainers.splice(renderedContainers.indexOf(updateRenderedHooks),1),notifyContainersAsync()}}),[automaticContainerInternalUseOnly]),react.createElement(react.Fragment,null,hooks.map((function(_ref2){var hook=_ref2.hook,key=_ref2.key;return react.createElement(SingleItemContainer,_extends({},hook,{key}))})))},addHook=function addHook(hook){var key=nextKey++;return workingSet.push({hook,key}),0===renderedContainers.length&&!1===manualRender&&(automaticRender=!0,function mount(C){if(globalObject.document&&globalObject.document.createElement){var container=globalObject.document.createElement("div");(0,client.createRoot)(container).render(react.createElement(C,{automaticContainerInternalUseOnly:!0}))}else warning("Can not mount SingletonHooksContainer on server side. Did you manage to run useEffect on server? Please mount SingletonHooksContainer into your components tree manually.")}(SingletonHooksContainer)),notifyContainersAsync(),function(){workingSet.splice(workingSet.findIndex((function(h){return h.key===key})),1),notifyContainersAsync()}},singletonHook=function singletonHook(initValue,useHookBody,options){void 0===options&&(options={});var mounted=!1,removeHook=void 0,initStateCalculated=!1,lastKnownState=void 0,consumers=[],_options$unmountIfNoC=options.unmountIfNoConsumers,unmountIfNoConsumers=void 0!==_options$unmountIfNoC&&_options$unmountIfNoC,applyStateChange=function applyStateChange(newState){lastKnownState=newState,function batch(cb){(0,react_dom.unstable_batchedUpdates)(cb)}((function(){return consumers.forEach((function(c){return c(newState)}))}))},stateInitializer=function stateInitializer(){return initStateCalculated||(lastKnownState="function"==typeof initValue?initValue():initValue,initStateCalculated=!0),lastKnownState};return function(){var _useState=(0,react.useState)(stateInitializer),state=_useState[0],setState=_useState[1];return(0,react.useEffect)((function(){return mounted||(mounted=!0,removeHook=addHook({initValue,useHookBody,applyStateChange})),consumers.push(setState),lastKnownState!==state&&setState(lastKnownState),function(){consumers.splice(consumers.indexOf(setState),1),0===consumers.length&&unmountIfNoConsumers&&(removeHook(),mounted=!1)}}),[]),state}}},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>isBrowser,lQ:()=>noop});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").Bd?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"../../node_modules/rooks/dist/esm/hooks/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}function useForkRef(refA,refB){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>null===refA&&null===refB?null:refValue=>{setRef(refA,refValue),setRef(refB,refValue)}),[refA,refB])}}}]);