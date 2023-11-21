/*! For license information please see TabStrip-Basic-stories.a3f74045.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2851],{"./src/TabStrip.Basic.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TabStripBasic:()=>TabStripBasic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_sheetxl_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),_sheetxl_sheet_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/sheet-react/src/components/tabStrip/TabStrip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const createScrollMenuButton=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{background:"grey",marginLeft:"4px",marginRight:"4px",minHeight:"24px",minWidth:"24px",padding:"0",display:"flex",justifyContent:"center",alignItems:"center"}})};createScrollMenuButton.displayName="createScrollMenuButton";const Template=props=>{const{showMenuSquare,...rest}=props,[selectedIndex,setSelectedIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[sheetNames,setSheetNames]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Sheet 1","Sheet 2"]),handleSelectedTabIndexChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index=>{setSelectedIndex(index)}),[]),handleTabNameChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((index,value)=>{setSheetNames((items=>{const newItems=[...items];return newItems[index]=value,newItems}))}),[]),handleTabMove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((indexFrom,indexTo)=>{setSheetNames((items=>_sheetxl_common__WEBPACK_IMPORTED_MODULE_2__.Rp(items,indexFrom,indexTo))),setSelectedIndex((prev=>indexFrom===prev?indexTo:indexFrom<prev&&indexTo<prev||indexFrom>prev&&indexTo>prev?prev:indexFrom<prev?prev-1:prev+1))}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"75%",position:"relative"},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sheetxl_sheet_react__WEBPACK_IMPORTED_MODULE_3__.k,{style:{},...props,selectedTabIndex:selectedIndex,tabNames:sheetNames,onSelectedTabIndexChange:handleSelectedTabIndexChange,onTabNameChange:handleTabNameChange,onTabMove:handleTabMove,children:showMenuSquare?createScrollMenuButton():(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{})})})};Template.displayName="Template";const TabStripBasic=Template.bind({});TabStripBasic.args={disabled:!1,showMenuSquare:!0},TabStripBasic.storyName="TabStrip";const __WEBPACK_DEFAULT_EXPORT__={title:"TabStrip",component:TabStripBasic};TabStripBasic.parameters={...TabStripBasic.parameters,docs:{...TabStripBasic.parameters?.docs,source:{originalSource:"props => {\n  const {\n    showMenuSquare,\n    ...rest\n  } = (props as any);\n\n  // This is the selected tab not the focused tab\n  const [selectedIndex, setSelectedIndex] = useState<number>(0);\n  const [sheetNames, setSheetNames] = useState<string[]>(['Sheet 1', 'Sheet 2'\n  // 'Sheet 3',\n  // 'Sheet 4',\n  // '1',\n  // 'A     ',\n  // 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',\n  // 'Sheet 6',\n  // 'Sheet a',\n  // 'Sheet b',\n  // 'Sheet c',\n  // 'Sheet d',\n  // 'Sheet e',\n  // 'Sheet f',\n  // 'Sheet g',\n  // 'Sheet h',\n  // 'Sheet i',\n  // 'Sheet j',\n  // 'Sheet k',\n  // 'Sheet l',\n  // 'Sheet m',\n  // 'Sheet n',\n  // 'Sheet o',\n  // 'Sheet p',\n  // 'Sheet q',\n  // 'Sheet r',\n  // 'Sheet s',\n  // 'Sheet t',\n  // 'Sheet u',\n  // 'Sheet v',\n  ]);\n\n  const handleSelectedTabIndexChange = useCallback((index: number) => {\n    setSelectedIndex(index);\n  }, []);\n  const handleTabNameChange = useCallback((index: number, value: string) => {\n    setSheetNames(items => {\n      const newItems = [...items];\n      newItems[index] = value;\n      return newItems;\n    });\n  }, []);\n\n  // Should the editable label fire the tabindex and when the name changes?\n  // review when integrating into sheetModel\n  const handleTabMove = useCallback((indexFrom: number, indexTo: number) => {\n    setSheetNames(items => CommonUtils.arrayMove(items, indexFrom, indexTo));\n    setSelectedIndex(prev => {\n      // If moving selected\n      if (indexFrom === prev) return indexTo;\n      // if to/from don't cross then return previous\n      if (indexFrom < prev && indexTo < prev || indexFrom > prev && indexTo > prev) return prev;\n      if (indexFrom < prev) return prev - 1;else return prev + 1;\n    });\n  }, []);\n  return <div style={{\n    // For Canvas view we want to center @ 75%\n    width: '75%',\n    position: 'relative'\n  }} {...rest}>\r\n      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove}>\r\n        {showMenuSquare ? createScrollMenuButton() : <></>}\r\n      </TabStrip>\r\n    </div>;\n}",...TabStripBasic.parameters?.docs?.source}}};const __namedExportsOrder=["TabStripBasic"]},"../../node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{clsx:()=>clsx,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"../../node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}},"../../node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZT:()=>noop,jU:()=>isBrowser});var noop=function(){};var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js").jU?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"../../node_modules/react-use/esm/useMeasure.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js"),_misc_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js"),defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const __WEBPACK_DEFAULT_EXPORT__=_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU&&void 0!==window.ResizeObserver?function useMeasure(){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),element=_a[0],ref=_a[1],_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState),rect=_b[0],setRect=_b[1],observer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return new window.ResizeObserver((function(entries){if(entries[0]){var _a=entries[0].contentRect,x=_a.x,y=_a.y,width=_a.width,height=_a.height,top_1=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;setRect({x,y,width,height,top:top_1,left,bottom,right})}}))}),[]);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((function(){if(element)return observer.observe(element),function(){observer.disconnect()}}),[element]),[ref,rect]}:function(){return[_misc_util__WEBPACK_IMPORTED_MODULE_2__.ZT,defaultState]}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);