"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4443],{"../../packages/common-react/src/hooks/useImperativeHandleElement.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>useImperativeHandleElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const EMPTY_DEPS=[];function useImperativeHandleElement(refForwarded,attributeFn,deps=EMPTY_DEPS){const refLocal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(refForwarded,(()=>{if(!refLocal.current)return;const attributes=attributeFn?.(),keys=Object.keys(attributes??{});for(let k=0;k<keys.length;k++)refLocal.current[keys[k]]=attributes[keys[k]];return refLocal.current}),deps),refLocal}},"../../packages/common-react/src/scroll/ScrollButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>defaultCreateScrollStartButton,Hi:()=>defaultCreateScrollEdgeButton,z3:()=>defaultCreateScrollEndButton});__webpack_require__("../../node_modules/react/index.js");var _Scrollbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common-react/src/scroll/Scrollbar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const defaultCreateScrollStartButton=function(props){const{style,orientation=_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,...rest}=props,isVertical=orientation===_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,path=isVertical?"m 3.7274761,0.68060577 1.11969,1.93863003 1.12075,1.93912 c 0.0895,0.155 0.12152,0.33658 0.0904,0.51283 -0.0311,0.17625 -0.12336,0.33591 -0.26054,0.45091 -0.13715,0.11495 -0.31044,0.17793 -0.4894,0.17781 H 0.83095614 c -0.20186,0 -0.39542,-0.0802 -0.53814,-0.2229 -0.14272,-0.14272 -0.22291,-0.33629 -0.22291,-0.53814 -3e-4,-0.13308 0.0347,-0.26385 0.10147,-0.379 l 1.11872996,-1.94066 1.11921,-1.93864003 c 0.13594,-0.23541 0.38717,-0.38047 0.65905,-0.38047 0.27188,0 0.52311,0.14506 0.65905,0.38047 z":"m 0.75051,2.3424298 1.93863,-1.11969 1.93912,-1.12075 c 0.155,-0.0895 0.33658,-0.12152 0.51283,-0.0904 0.17625,0.0311 0.33591,0.12336 0.45091,0.26054 0.11495,0.13715 0.17793,0.31044 0.17781,0.4894 v 4.47742 c 0,0.20186 -0.0802,0.39542 -0.2229,0.53814 -0.14272,0.14272 -0.33629,0.22291 -0.53814,0.22291 -0.13308,3e-4 -0.26385,-0.0347 -0.379,-0.10147 L 2.68911,4.7797998 0.75047,3.6605898 C 0.51506,3.5246498 0.37,3.2734198 0.37,3.0015398 c 0,-0.27188 0.14506,-0.52311 0.38047,-0.65905 z";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingBottom:"0px",paddingRight:"0px",paddingLeft:isVertical?"0px":"3px",paddingTop:isVertical?"3px":"0px",display:"flex",alignItems:"center",justifyContent:"center",...style},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:{padding:"0",display:"flex",alignItems:"center",justifyContent:"center",border:"none"},className:`scrollbar-button ${isVertical?"vertical":"horizontal"} single-button start`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"9",height:"9",viewBox:"0 0 6 6",style:{opacity:"inherit"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:path})})})})};defaultCreateScrollStartButton.displayName="defaultCreateScrollStartButton";const defaultCreateScrollEndButton=props=>{const{style,orientation=_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,...rest}=props,isVertical=orientation===_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,path=isVertical?"M 2.412334,5.319396 1.292644,3.3807659 0.17189405,1.4416459 c -0.0895,-0.155 -0.12152,-0.33658 -0.0904,-0.51282998 0.0311,-0.17625 0.12336,-0.33591 0.26054,-0.45091 0.13715,-0.11495 0.31044,-0.17793 0.4894,-0.17781 H 5.308854 c 0.20186,0 0.39542,0.0802 0.53814,0.2229 0.14272,0.14272 0.22291,0.33629 0.22291,0.53813998 3e-4,0.13308 -0.0347,0.26385 -0.10147,0.379 l -1.11873,1.94066 -1.11921,1.9386401 c -0.13594,0.23541 -0.38717,0.38047 -0.65905,0.38047 -0.27188,0 -0.52311,-0.14506 -0.65905,-0.38047 z":"m 5.3893002,3.6575719 -1.9386301,1.11969 -1.93912,1.12075 c -0.155,0.0895 -0.33658,0.12152 -0.51282997,0.0904 -0.17625,-0.0311 -0.33591,-0.12336 -0.45091,-0.26054 -0.11495,-0.13715 -0.17793,-0.31044 -0.17781,-0.4894 V 0.76105195 c 0,-0.20186 0.0802,-0.39542 0.2229,-0.53814 C 0.73562013,0.08019195 0.92919013,1.9467784e-6 1.1310401,1.9467784e-6 1.2641201,-2.9805322e-4 1.3948901,0.03470195 1.5100401,0.10147195 l 1.94066,1.11872995 1.9386401,1.11921 c 0.23541,0.13594 0.38047,0.38717 0.38047,0.65905 0,0.27188 -0.14506,0.52311 -0.38047,0.65905 z";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingLeft:"0px",paddingTop:"0px",paddingRight:isVertical?"0px":"3px",paddingBottom:isVertical?"3px":"0px",display:"flex",alignItems:"center",justifyContent:"center",...style},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:{padding:"0",display:"flex",alignItems:"center",justifyContent:"center",border:"none"},className:`scrollbar-button ${isVertical?"vertical":"horizontal"} single-button end`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"9",height:"9",viewBox:"0 0 6 6",style:{opacity:"inherit"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:path})})})})};defaultCreateScrollEndButton.displayName="defaultCreateScrollEndButton";const defaultCreateScrollEdgeButton=function(props){const{style,orientation=_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,...rest}=props,isVertical=orientation===_Scrollbar__WEBPACK_IMPORTED_MODULE_2__.q2.Vertical,transform=(isVertical?"rotate(90) ":"")+" scale(1.5,1.5)";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{marginLeft:"4px",marginRight:"4px",minHeight:"20px",minWidth:"14px",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",display:"flex",justifyContent:"center",alignItems:"end",transition:"fill-opacity 1s",zIndex:1,...style},className:`scrollbar-button ${isVertical?"vertical":"horizontal"} edge`,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"8",height:"2",viewBox:"0 0 8 2",transform,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{style:{transition:"opacity 240ms ease 0s",opacity:props.disabled?0:1},d:"M 8,0.99212 C 8,1.45719 7.62295,1.83424 7.15788,1.83424 6.69281,1.83424 6.31576,1.45719 6.31576,0.99212 6.31576,0.52705 6.69281,0.15 7.15788,0.15 7.62295,0.15 8,0.52705 8,0.99212 m -6.31576,0 c 0,0.46507 -0.37705,0.84212 -0.84212,0.84212 C 0.37705,1.83424 0,1.45719 0,0.99212 0,0.52705 0.37705,0.15 0.84212,0.15 c 0.46507,0 0.84212,0.37705 0.84212,0.84212 m 3.15788,0 C 4.84212,1.45719 4.46507,1.83424 4,1.83424 3.53493,1.83424 3.15788,1.45719 3.15788,0.99212 3.15788,0.52705 3.53493,0.15 4,0.15 c 0.46507,0 0.84212,0.37705 0.84212,0.84212"})})})};defaultCreateScrollEdgeButton.displayName="defaultCreateScrollEdgeButton";try{defaultCreateScrollStartButton.displayName="defaultCreateScrollStartButton",defaultCreateScrollStartButton.__docgenInfo={description:"Relies on external styling. Follows the styling of scrollbars pattern.",displayName:"defaultCreateScrollStartButton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollStartButton"]={docgenInfo:defaultCreateScrollStartButton.__docgenInfo,name:"defaultCreateScrollStartButton",path:"../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollStartButton"})}catch(__react_docgen_typescript_loader_error){}try{defaultCreateScrollEndButton.displayName="defaultCreateScrollEndButton",defaultCreateScrollEndButton.__docgenInfo={description:"Relies on external styling. Follows the styling of scrollbars pattern.",displayName:"defaultCreateScrollEndButton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollEndButton"]={docgenInfo:defaultCreateScrollEndButton.__docgenInfo,name:"defaultCreateScrollEndButton",path:"../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollEndButton"})}catch(__react_docgen_typescript_loader_error){}try{defaultCreateScrollEdgeButton.displayName="defaultCreateScrollEdgeButton",defaultCreateScrollEdgeButton.__docgenInfo={description:"TODO - implement styling support similar to other scroll buttons. Currently hardcoded",displayName:"defaultCreateScrollEdgeButton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!0,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: MouseEvent<HTMLElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollEdgeButton"]={docgenInfo:defaultCreateScrollEdgeButton.__docgenInfo,name:"defaultCreateScrollEdgeButton",path:"../../packages/common-react/src/scroll/ScrollButton.tsx#defaultCreateScrollEdgeButton"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/common-react/src/scroll/ScrollPane.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Es:()=>ScrollPane});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),scroller__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/scroller/index.js"),_Scrollbar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/common-react/src/scroll/Scrollbar.tsx"),_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),_utils_ReactUtils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/common-react/src/utils/ReactUtils.ts"),_hooks_useImperativeHandleElement__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/common-react/src/hooks/useImperativeHandleElement.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const defaultCreateScrollbar=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Scrollbar__WEBPACK_IMPORTED_MODULE_3__.ZP,{...props});defaultCreateScrollbar.displayName="defaultCreateScrollbar";const defaultCreateScrollCorner=({width,height})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"corner",style:{minWidth:`${width}px`,width:`${width}px`,minHeight:`${height}px`,height:`${height}px`}});defaultCreateScrollCorner.displayName="defaultCreateScrollCorner";const ScrollPane=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,refForward)=>{const{children,viewport,onScrollViewport:propOnScrollViewport,showHorizontalScrollbar=!0,showVerticalScrollbar=!0,createScrollCorner=defaultCreateScrollCorner,createHorizontalScrollbar=defaultCreateScrollbar,createVerticalScrollbar=defaultCreateScrollbar,style:propsStyle,touchElement,...rest}=props,onScrollViewport=(0,_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_4__.W)(propOnScrollViewport,[propOnScrollViewport]),refLocal=(0,_hooks_useImperativeHandleElement__WEBPACK_IMPORTED_MODULE_5__.b)(refForward,(()=>({isScrollPane:()=>!0})),[]),scrollerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{scrollerRef.current&&(scrollerRef.current.__scrollTop===viewport?.top&&scrollerRef.current.__scrollLeft!==!viewport?.left||scrollerRef.current?.scrollTo(viewport?.left,viewport?.top,!1))}),[viewport?.left,viewport?.top,touchElement]);const handleScroller=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((left,top)=>{onScrollViewport?.({left,top})}),[]),handleTouchStart=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{scrollerRef.current?.doTouchStart(e.touches,e.timeStamp)}),[]),handleTouchMove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{e.preventDefault(),scrollerRef.current?.doTouchMove(e.touches,e.timeStamp)}),[]),handleTouchEnd=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{scrollerRef.current?.doTouchEnd(e.timeStamp)}),[]),updateScrollDimensions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((({containerWidth,containerHeight,totalWidth,totalHeight})=>{scrollerRef.current.setDimensions(containerWidth,containerHeight,totalWidth,totalHeight)}),[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listenElement=touchElement??refLocal.current;if((0,_utils_ReactUtils__WEBPACK_IMPORTED_MODULE_6__.cd)().supportsTouchEvents&&listenElement&&viewport){if(!scrollerRef.current){const options={scrollingX:!0,scrollingY:!0,decelerationRate:.95,penetrationAcceleration:.08};scrollerRef.current=new scroller__WEBPACK_IMPORTED_MODULE_1__.Scroller(handleScroller,options)}(0,_utils_ReactUtils__WEBPACK_IMPORTED_MODULE_6__.cd)().supportsTouchEvents&&(listenElement.addEventListener("touchstart",handleTouchStart),listenElement.addEventListener("touchend",handleTouchEnd),listenElement.addEventListener("touchmove",handleTouchMove)),updateScrollDimensions({containerWidth:viewport?.width,containerHeight:viewport?.height,totalWidth:viewport?.totalWidth,totalHeight:viewport?.totalHeight})}return()=>{listenElement?.removeEventListener("touchstart",handleTouchStart),listenElement?.removeEventListener("touchend",handleTouchEnd),listenElement?.removeEventListener("touchmove",handleTouchMove)}}),[viewport?.width,viewport?.height,viewport?.totalWidth,viewport?.totalHeight,touchElement]);const[refMeasureVert,{width:vertWidth}]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_7__.Z)(),[refMeasureHorz,{height:horzHeight}]=(0,react_use_esm_useMeasure__WEBPACK_IMPORTED_MODULE_7__.Z)(),verticalScroll=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const scrollbar=createVerticalScrollbar({orientation:_Scrollbar__WEBPACK_IMPORTED_MODULE_3__.q2.Vertical,offset:viewport?.top,viewportSize:viewport?.height,totalSize:viewport?.totalHeight,onScrollOffset:offset=>{onScrollViewport?.({top:offset})}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",flex:"0"},ref:refMeasureVert,children:scrollbar})}),[createVerticalScrollbar,viewport?.top,viewport?.height,viewport?.totalHeight]),horizontalScroll=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const scrollbar=createHorizontalScrollbar({orientation:_Scrollbar__WEBPACK_IMPORTED_MODULE_3__.q2.Horizontal,offset:viewport?.left,viewportSize:viewport?.width,totalSize:viewport?.totalWidth,onScrollOffset:offset=>onScrollViewport?.({left:offset})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",flex:"none",flexDirection:"row",alignItems:"stretch",justifyContent:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",flex:"1 1 100%",flexDirection:"column",width:`calc(100% - ${vertWidth}px)`},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:refMeasureHorz,className:"sizer",children:scrollbar})}),showVerticalScrollbar?createScrollCorner({width:vertWidth,height:horzHeight}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{})]})}),[createHorizontalScrollbar,viewport?.left,viewport?.width,viewport?.totalWidth,showVerticalScrollbar,createScrollCorner,vertWidth,horzHeight]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{position:"relative",display:"flex",minWidth:showVerticalScrollbar?`${vertWidth}px`:void 0,minHeight:showHorizontalScrollbar?`${horzHeight}px`:void 0,...propsStyle},...rest,ref:refLocal,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{position:"relative",width:"100%",flex:"1 1 100%",display:"flex",flexDirection:"column",boxSizing:"border-box"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",flex:"1 1 100%",overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",flex:"1 1 100%",overflow:"hidden"},children}),showVerticalScrollbar?verticalScroll:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{})]}),showHorizontalScrollbar?horizontalScroll:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{})]})})})));try{defaultCreateScrollbar.displayName="defaultCreateScrollbar",defaultCreateScrollbar.__docgenInfo={description:"",displayName:"defaultCreateScrollbar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},offset:{defaultValue:null,description:"",name:"offset",required:!0,type:{name:"number"}},totalSize:{defaultValue:null,description:"",name:"totalSize",required:!0,type:{name:"number"}},viewportSize:{defaultValue:null,description:"",name:"viewportSize",required:!0,type:{name:"number"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onScrollOffset:{defaultValue:null,description:"",name:"onScrollOffset",required:!0,type:{name:"(offset: number, viewportSize: number, totalSize: number) => void"}},showCustomScrollButtons:{defaultValue:null,description:"This will add custom scrollButtons.\nThis should only be set to true if you have used css styling to hide the default scrollButtons\nusing:\n::-webkit-scrollbar-button\": {\n display: 'none'\n}\n@defaultValue false",name:"showCustomScrollButtons",required:!1,type:{name:"boolean"}},scrollButtonIncrement:{defaultValue:null,description:"",name:"scrollButtonIncrement",required:!1,type:{name:"number"}},scrollButtonInitialRepeatDelay:{defaultValue:null,description:"",name:"scrollButtonInitialRepeatDelay",required:!1,type:{name:"number"}},scrollButtonAdditionalRepeatDelay:{defaultValue:null,description:"",name:"scrollButtonAdditionalRepeatDelay",required:!1,type:{name:"number"}},createScrollStartButton:{defaultValue:null,description:"",name:"createScrollStartButton",required:!1,type:{name:"(props: ScrollButtonProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},createScrollEndButton:{defaultValue:null,description:"",name:"createScrollEndButton",required:!1,type:{name:"(props: ScrollButtonProps) => ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollPane.tsx#defaultCreateScrollbar"]={docgenInfo:defaultCreateScrollbar.__docgenInfo,name:"defaultCreateScrollbar",path:"../../packages/common-react/src/scroll/ScrollPane.tsx#defaultCreateScrollbar"})}catch(__react_docgen_typescript_loader_error){}try{defaultCreateScrollCorner.displayName="defaultCreateScrollCorner",defaultCreateScrollCorner.__docgenInfo={description:"",displayName:"defaultCreateScrollCorner",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"any"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollPane.tsx#defaultCreateScrollCorner"]={docgenInfo:defaultCreateScrollCorner.__docgenInfo,name:"defaultCreateScrollCorner",path:"../../packages/common-react/src/scroll/ScrollPane.tsx#defaultCreateScrollCorner"})}catch(__react_docgen_typescript_loader_error){}try{ScrollPane.displayName="ScrollPane",ScrollPane.__docgenInfo={description:"",displayName:"ScrollPane",props:{viewport:{defaultValue:null,description:"",name:"viewport",required:!0,type:{name:"ScrollableViewport"}},onScrollViewport:{defaultValue:null,description:"",name:"onScrollViewport",required:!1,type:{name:"(scrollPoint: Partial<TopLeft>) => void"}},showHorizontalScrollbar:{defaultValue:null,description:"",name:"showHorizontalScrollbar",required:!1,type:{name:"boolean"}},showVerticalScrollbar:{defaultValue:null,description:"",name:"showVerticalScrollbar",required:!1,type:{name:"boolean"}},createScrollCorner:{defaultValue:null,description:"",name:"createScrollCorner",required:!1,type:{name:"(size: Size) => ReactNode"}},createHorizontalScrollbar:{defaultValue:null,description:"",name:"createHorizontalScrollbar",required:!1,type:{name:"(props: ScrollbarRefProps) => ReactNode"}},createVerticalScrollbar:{defaultValue:null,description:"",name:"createVerticalScrollbar",required:!1,type:{name:"(props: ScrollbarRefProps) => ReactNode"}},touchElement:{defaultValue:null,description:"By default the ScrollPane will listen for events on all of the children of the ScrollPane but this\nallows for a custom element to be specified. This is useful when the ScrollPane has some elements\nthat should not be touch enabled (for example headers)",name:"touchElement",required:!1,type:{name:"HTMLElement"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<ScrollPaneElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/common-react/src/scroll/ScrollPane.tsx#ScrollPane"]={docgenInfo:ScrollPane.__docgenInfo,name:"ScrollPane",path:"../../packages/common-react/src/scroll/ScrollPane.tsx#ScrollPane"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/common-react/src/scroll/Scrollbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LW:()=>Scrollbar,q2:()=>ScrollbarOrientation,ZP:()=>scroll_Scrollbar});var react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),useMeasure=__webpack_require__("../../node_modules/react-use/esm/useMeasure.js"),useCallbackRef=__webpack_require__("../../packages/common-react/src/hooks/useCallbackRef.ts"),ScrollButton=__webpack_require__("../../packages/common-react/src/scroll/ScrollButton.tsx"),scrollUtils=__webpack_require__("../../packages/common-react/src/scroll/scrollUtils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Scrollbar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../packages/common-react/src/scroll/Scrollbar.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Scrollbar_module.Z,options);const scroll_Scrollbar_module=Scrollbar_module.Z&&Scrollbar_module.Z.locals?Scrollbar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");let ScrollbarOrientation=function(ScrollbarOrientation){return ScrollbarOrientation.Horizontal="horizontal",ScrollbarOrientation.Vertical="vertical",ScrollbarOrientation}({});const Scrollbar=(0,react.memo)((0,react.forwardRef)(((props,refForwarded)=>{const{offset:propOffset=0,totalSize:propTotalSize=0,viewportSize:propViewportSize=0,style:propStyle,className:propClassName,orientation=ScrollbarOrientation.Vertical,onScrollOffset,onScroll:propOnScroll,showCustomScrollButtons=!1,scrollButtonIncrement=200,scrollButtonInitialRepeatDelay=260,scrollButtonAdditionalRepeatDelay=120,createScrollStartButton=ScrollButton.C6,createScrollEndButton=ScrollButton.z3,...rest}=props,onScroll=(0,useCallbackRef.W)(propOnScroll,[propOnScroll]),refScrollPane=(0,react.useRef)(null),[refMeasureContainer,{width:widthContainer,height:heightContainer}]=(0,useMeasure.Z)(),[refMeasureViewport,{width:widthViewport,height:heightViewport}]=(0,useMeasure.Z)(),isVertical=orientation===ScrollbarOrientation.Vertical,dimStart=isVertical?"top":"left",dimScrollStart=isVertical?"scrollTop":"scrollLeft",lengthContainer=isVertical?heightContainer:widthContainer,lengthViewport=isVertical?heightViewport:widthViewport,[scrollScrolling,setScrollScrolling]=(0,react.useState)(null);(0,react.useEffect)((()=>{null!==scrollScrolling&&refScrollPane.current&&refScrollPane.current.scrollTo({behavior:"smooth",[dimStart]:scrollScrolling})}),[scrollScrolling,isVertical]);const scrollStart=(0,react.useCallback)(((jumpTo,isJump=!1)=>{if(!refScrollPane.current)return 0;const firstChild=refScrollPane.current.querySelector(".scrollbar-viewport"),refLocation=firstChild.getBoundingClientRect(),children=firstChild.children,newStart=isJump?0:(0,scrollUtils.r)(jumpTo,refLocation[dimStart],children,!0,Math.max(0,jumpTo-scrollButtonIncrement));return setScrollScrolling(newStart),Math.max(0,newStart)}),[]),scrollEnd=(0,react.useCallback)(((jumpTo,isJump=!1)=>{if(!refScrollPane.current)return 0;const firstChild=refScrollPane.current.querySelector(".scrollbar-viewport"),refLocation=firstChild.getBoundingClientRect(),children=firstChild.children,max=Math.ceil(lengthViewport-lengthContainer),newEnd=isJump?max:(0,scrollUtils.r)(jumpTo,refLocation[dimStart],children,!1,Math.max(0,jumpTo+scrollButtonIncrement));return setScrollScrolling(newEnd),Math.min(max,newEnd)}),[lengthViewport,lengthContainer]),refOffsetInFlight=(0,react.useRef)(null),handleScroll=(0,react.useCallback)((e=>{refOffsetInFlight.current=propOffset;const newScrollOffset=e.target[dimScrollStart];onScrollOffset(newScrollOffset,propViewportSize,propTotalSize),onScroll?.(e)}),[onScrollOffset,propViewportSize,propTotalSize,propOffset]);(0,react.useEffect)((()=>{const lastPropInFlight=refOffsetInFlight.current;refOffsetInFlight.current=null,propOffset!==lastPropInFlight&&(refScrollPane.current[dimScrollStart]=propOffset)}),[propOffset,dimScrollStart]);const timerRef=(0,react.useRef)(null),scrollingToRef=(0,react.useRef)(null),stopScrolling=(0,react.useCallback)((()=>{timerRef.current&&(clearTimeout(timerRef.current),timerRef.current=null,scrollingToRef.current=null)}),[]),startScrolling=(0,react.useCallback)(((start,isFirst,scrollToStart,delay=scrollButtonInitialRepeatDelay)=>{scrollingToRef.current=start,timerRef.current=setTimeout((()=>{const newScroll=scrollToStart?scrollStart(scrollingToRef.current||start):scrollEnd(scrollingToRef.current||start);newScroll!==scrollingToRef.current?startScrolling(newScroll,!1,scrollToStart,scrollButtonAdditionalRepeatDelay):stopScrolling()}),isFirst?0:delay)}),[scrollStart,scrollEnd,stopScrolling]);(0,react.useEffect)((()=>()=>stopScrolling()),[stopScrolling]);const scrollOffset=propOffset,scrollStartButton=(0,react.useMemo)((()=>{if(!showCustomScrollButtons)return null;const props={orientation,disabled:Math.floor(scrollOffset)<=0||0===Math.floor(lengthViewport-lengthContainer),onMouseUp:stopScrolling,onMouseLeave:stopScrolling,onMouseDown:()=>startScrolling(scrollOffset,!0,!0)};return createScrollStartButton?.(props)}),[showCustomScrollButtons,orientation,scrollOffset,scrollScrolling,lengthViewport,lengthContainer]),scrollEndButton=(0,react.useMemo)((()=>{if(!showCustomScrollButtons)return null;const props={orientation,disabled:Math.floor(lengthViewport-lengthContainer)<=Math.ceil(scrollOffset),onMouseUp:stopScrolling,onMouseLeave:stopScrolling,onMouseDown:()=>startScrolling(scrollOffset,!0,!1)};return createScrollEndButton?.(props)}),[showCustomScrollButtons,orientation,scrollOffset,scrollScrolling,lengthViewport,lengthContainer]);return(0,jsx_runtime.jsxs)("div",{ref:refForwarded,style:{display:"flex",flex:"1",flexDirection:isVertical?"column":"row",padding:"0",...propStyle},className:(0,clsx_m.default)(scroll_Scrollbar_module["sheetxl-scrollbar"],propClassName),...rest,children:[scrollStartButton,(0,jsx_runtime.jsx)("div",{style:{flex:"1 1 100%",display:"flex",boxSizing:"content-box",flexDirection:isVertical?"row":"column",justifyContent:"stretch"},ref:refMeasureContainer,children:(0,jsx_runtime.jsx)("div",{tabIndex:-1,style:{display:"flex 1 100%",overflowY:isVertical?"scroll":"hidden",overflowX:isVertical?"hidden":"scroll",position:"relative",willChange:"transform"},onScroll:handleScroll,ref:refScrollPane,children:(0,jsx_runtime.jsx)("div",{ref:refMeasureViewport,style:{position:"absolute",height:isVertical?propTotalSize-propViewportSize+heightContainer:1,width:isVertical?1:propTotalSize-propViewportSize+widthContainer},className:"scrollbar-viewport"})})}),scrollEndButton]})}))),scroll_Scrollbar=Scrollbar},"../../packages/common-react/src/scroll/scrollUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>getScrollTo});const getScrollTo=(currentLocation,boundary,children,isLeft,defaultValue=0)=>{for(let i=0;i<children.length;i++){const childBounds=children[i].getBoundingClientRect();let relativeLeft=childBounds.left-boundary,relativeRight=relativeLeft+childBounds.width;if(isLeft){if(relativeLeft<currentLocation&&relativeRight>=currentLocation)return relativeLeft}else if(Math.ceil(relativeRight)>Math.ceil(currentLocation)+2)return relativeRight}return defaultValue}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../packages/common-react/src/scroll/Scrollbar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * CSS files with the .module.css suffix will be treated as CSS modules\n * and scoped locally.\n  Note - this isn't working but was meant to enabled default scrollbuttons to play nicely with rounded corners\n */\n.kVSVx_FnaDWX_J8jXSBQ {\n  /* & ::-webkit-scrollbar {\n    background: gre;\n  } */\n  & ::-webkit-scrollbar-button {\n    background: transparent;\n  }\n\n}",""]),___CSS_LOADER_EXPORT___.locals={"sheetxl-scrollbar":"kVSVx_FnaDWX_J8jXSBQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);