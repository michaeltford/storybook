(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9729],{"../../node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../../node_modules/detect-it/dist/detect-it.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{deviceType:()=>deviceType,primaryInput:()=>primaryInput,supportsPassiveEvents:()=>supportsPassiveEvents,supportsPointerEvents:()=>supportsPointerEvents,supportsTouchEvents:()=>supportsTouchEvents});var w="undefined"!=typeof window?window:{screen:{},navigator:{}},matchMedia=(w.matchMedia||function(){return{matches:!1}}).bind(w),passiveOptionAccessed=!1,options={get passive(){return passiveOptionAccessed=!0}},noop=function(){};w.addEventListener&&w.addEventListener("p",noop,options),w.removeEventListener&&w.removeEventListener("p",noop,!1);var supportsPassiveEvents=passiveOptionAccessed,supportsPointerEvents="PointerEvent"in w,onTouchStartInWindow="ontouchstart"in w,supportsTouchEvents=onTouchStartInWindow||"TouchEvent"in w&&matchMedia("(any-pointer: coarse)").matches,hasTouch=(w.navigator.maxTouchPoints||0)>0||supportsTouchEvents,userAgent=w.navigator.userAgent||"",isIPad=matchMedia("(pointer: coarse)").matches&&/iPad|Macintosh/.test(userAgent)&&Math.min(w.screen.width||0,w.screen.height||0)>=768,hasCoarsePrimaryPointer=(matchMedia("(pointer: coarse)").matches||!matchMedia("(pointer: fine)").matches&&onTouchStartInWindow)&&!/Windows.*Firefox/.test(userAgent),hasAnyHoverOrAnyFinePointer=matchMedia("(any-pointer: fine)").matches||matchMedia("(any-hover: hover)").matches||isIPad||!onTouchStartInWindow,deviceType=!hasTouch||!hasAnyHoverOrAnyFinePointer&&hasCoarsePrimaryPointer?hasTouch?"touchOnly":"mouseOnly":"hybrid",primaryInput="mouseOnly"===deviceType?"mouse":"touchOnly"===deviceType||hasCoarsePrimaryPointer?"touch":"mouse"},"../../node_modules/fast-deep-equal/es6/index.js":module=>{"use strict";module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"../../node_modules/react-use/esm/useMeasure.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-use/esm/useIsomorphicLayoutEffect.js"),_misc_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js"),defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const __WEBPACK_DEFAULT_EXPORT__=_misc_util__WEBPACK_IMPORTED_MODULE_2__.Bd&&void 0!==window.ResizeObserver?function useMeasure(){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),element=_a[0],ref=_a[1],_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState),rect=_b[0],setRect=_b[1],observer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return new window.ResizeObserver((function(entries){if(entries[0]){var _a=entries[0].contentRect,x=_a.x,y=_a.y,width=_a.width,height=_a.height,top_1=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;setRect({x,y,width,height,top:top_1,left,bottom,right})}}))}),[]);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.A)((function(){if(element)return observer.observe(element),function(){observer.disconnect()}}),[element]),[ref,rect]}:function(){return[_misc_util__WEBPACK_IMPORTED_MODULE_2__.lQ,defaultState]}},"../../node_modules/scroller/index.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__("../../node_modules/scroller/lib/animate.js"),__webpack_require__("../../node_modules/scroller/lib/Scroller.js")],__WEBPACK_AMD_DEFINE_FACTORY__=function(exports,animate,Scroller){exports.animate=animate,exports.Scroller=Scroller},void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"../../node_modules/scroller/lib/Scroller.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("../../node_modules/scroller/lib/animate.js")],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(animate){var NOOP=function(){},Scroller=function(callback,options){for(var key in this.__callback=callback,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:NOOP,penetrationDeceleration:.03,penetrationAcceleration:.08},options)this.options[key]=options[key]},easeOutCubic=function(pos){return Math.pow(pos-1,3)+1},easeInOutCubic=function(pos){return(pos/=.5)<1?.5*Math.pow(pos,3):.5*(Math.pow(pos-2,3)+2)};return Scroller.prototype={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(clientWidth,clientHeight,contentWidth,contentHeight){null!==clientWidth&&(this.__clientWidth=clientWidth),null!==clientHeight&&(this.__clientHeight=clientHeight),null!==contentWidth&&(this.__contentWidth=contentWidth),null!==contentHeight&&(this.__contentHeight=contentHeight),this.__computeScrollMax(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},setPosition:function(left,top){this.__clientLeft=left||0,this.__clientTop=top||0},setSnapSize:function(width,height){this.__snapWidth=width,this.__snapHeight=height},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,right:this.__scrollLeft+this.__clientWidth/this.__zoomLevel,bottom:this.__scrollTop+this.__clientHeight/this.__zoomLevel,zoom:this.__zoomLevel}},getPoint:function(scrollLeft,scrollTop){var values=this.getValues();return{left:scrollLeft/values.zoom,top:scrollTop/values.zoom}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(level,isAnimated,fixedLeft,fixedTop,callback){if(!this.options.zooming)throw new Error("Zooming is not enabled!");callback&&(this.__zoomComplete=callback),this.__isDecelerating&&(animate.stop(this.__isDecelerating),this.__isDecelerating=!1);var oldLevel=this.__zoomLevel;void 0===fixedLeft&&(fixedLeft=this.__clientWidth/2),void 0===fixedTop&&(fixedTop=this.__clientHeight/2),level=Math.max(Math.min(level,this.options.maxZoom),this.options.minZoom),this.__computeScrollMax(level);var k=level/oldLevel,left=k*(this.__scrollLeft+fixedLeft)-fixedLeft,top=k*(this.__scrollTop+fixedTop)-fixedTop;left>this.__maxScrollLeft?left=this.__maxScrollLeft:left<0&&(left=0),top>this.__maxScrollTop?top=this.__maxScrollTop:top<0&&(top=0),this.__publish(left,top,level,isAnimated)},zoomBy:function(factor,isAnimated,originLeft,originTop,callback){this.zoomTo(this.__zoomLevel*factor,isAnimated,originLeft,originTop,callback)},scrollTo:function(left,top,isAnimated,zoom){if(this.__isDecelerating&&(animate.stop(this.__isDecelerating),this.__isDecelerating=!1),void 0!==zoom&&zoom!==this.__zoomLevel){if(!this.options.zooming)throw new Error("Zooming is not enabled!");left*=zoom,top*=zoom,this.__computeScrollMax(zoom)}else zoom=this.__zoomLevel;this.options.scrollingX?this.options.paging?left=Math.round(left/this.__clientWidth)*this.__clientWidth:this.options.snapping&&(left=Math.round(left/this.__snapWidth)*this.__snapWidth):left=this.__scrollLeft,this.options.scrollingY?this.options.paging?top=Math.round(top/this.__clientHeight)*this.__clientHeight:this.options.snapping&&(top=Math.round(top/this.__snapHeight)*this.__snapHeight):top=this.__scrollTop,left=Math.max(Math.min(this.__maxScrollLeft,left),0),top=Math.max(Math.min(this.__maxScrollTop,top),0),left===this.__scrollLeft&&top===this.__scrollTop&&(isAnimated=!1),this.__publish(left,top,zoom,isAnimated)},scrollBy:function(left,top,isAnimated){var startLeft=this.__isAnimating?this.__scheduledLeft:this.__scrollLeft,startTop=this.__isAnimating?this.__scheduledTop:this.__scrollTop;this.scrollTo(startLeft+(left||0),startTop+(top||0),isAnimated)},doMouseZoom:function(wheelDelta,timeStamp,pageX,pageY){var change=wheelDelta>0?.97:1.03;return this.zoomTo(this.__zoomLevel*change,!1,pageX-this.__clientLeft,pageY-this.__clientTop)},doTouchStart:function(touches,timeStamp){if(void 0===touches.length)throw new Error("Invalid touch list: "+touches);if(timeStamp instanceof Date&&(timeStamp=timeStamp.valueOf()),"number"!=typeof timeStamp)throw new Error("Invalid timestamp value: "+timeStamp);var currentTouchLeft,currentTouchTop;this.__interruptedAnimation=!0,this.__isDecelerating&&(animate.stop(this.__isDecelerating),this.__isDecelerating=!1,this.__interruptedAnimation=!0),this.__isAnimating&&(animate.stop(this.__isAnimating),this.__isAnimating=!1,this.__interruptedAnimation=!0);var isSingleTouch=1===touches.length;isSingleTouch?(currentTouchLeft=touches[0].pageX,currentTouchTop=touches[0].pageY):(currentTouchLeft=Math.abs(touches[0].pageX+touches[1].pageX)/2,currentTouchTop=Math.abs(touches[0].pageY+touches[1].pageY)/2),this.__initialTouchLeft=currentTouchLeft,this.__initialTouchTop=currentTouchTop,this.__zoomLevelStart=this.__zoomLevel,this.__lastTouchLeft=currentTouchLeft,this.__lastTouchTop=currentTouchTop,this.__lastTouchMove=timeStamp,this.__lastScale=1,this.__enableScrollX=!isSingleTouch&&this.options.scrollingX,this.__enableScrollY=!isSingleTouch&&this.options.scrollingY,this.__isTracking=!0,this.__didDecelerationComplete=!1,this.__isDragging=!isSingleTouch,this.__isSingleTouch=isSingleTouch,this.__positions=[]},doTouchMove:function(touches,timeStamp,scale){if(void 0===touches.length)throw new Error("Invalid touch list: "+touches);if(timeStamp instanceof Date&&(timeStamp=timeStamp.valueOf()),"number"!=typeof timeStamp)throw new Error("Invalid timestamp value: "+timeStamp);if(this.__isTracking){var currentTouchLeft,currentTouchTop;2===touches.length?(currentTouchLeft=Math.abs(touches[0].pageX+touches[1].pageX)/2,currentTouchTop=Math.abs(touches[0].pageY+touches[1].pageY)/2):(currentTouchLeft=touches[0].pageX,currentTouchTop=touches[0].pageY);var positions=this.__positions;if(this.__isDragging){var moveX=currentTouchLeft-this.__lastTouchLeft,moveY=currentTouchTop-this.__lastTouchTop,scrollLeft=this.__scrollLeft,scrollTop=this.__scrollTop,level=this.__zoomLevel;if(void 0!==scale&&this.options.zooming){var oldLevel=level;if(level=level/this.__lastScale*scale,oldLevel!==(level=Math.max(Math.min(level,this.options.maxZoom),this.options.minZoom))){var currentTouchLeftRel=currentTouchLeft-this.__clientLeft,currentTouchTopRel=currentTouchTop-this.__clientTop;scrollLeft=(currentTouchLeftRel+scrollLeft)*level/oldLevel-currentTouchLeftRel,scrollTop=(currentTouchTopRel+scrollTop)*level/oldLevel-currentTouchTopRel,this.__computeScrollMax(level)}}if(this.__enableScrollX){scrollLeft-=moveX*this.options.speedMultiplier;var maxScrollLeft=this.__maxScrollLeft;(scrollLeft>maxScrollLeft||scrollLeft<0)&&(this.options.bouncing?scrollLeft+=moveX/2*this.options.speedMultiplier:scrollLeft=scrollLeft>maxScrollLeft?maxScrollLeft:0)}if(this.__enableScrollY){scrollTop-=moveY*this.options.speedMultiplier;var maxScrollTop=this.__maxScrollTop;(scrollTop>maxScrollTop||scrollTop<0)&&(this.options.bouncing?scrollTop+=moveY/2*this.options.speedMultiplier:scrollTop=scrollTop>maxScrollTop?maxScrollTop:0)}positions.length>60&&positions.splice(0,30),positions.push(scrollLeft,scrollTop,timeStamp),this.__publish(scrollLeft,scrollTop,level)}else{var minimumTrackingForScroll=this.options.locking?3:0,minimumTrackingForDrag=5,distanceX=Math.abs(currentTouchLeft-this.__initialTouchLeft),distanceY=Math.abs(currentTouchTop-this.__initialTouchTop);this.__enableScrollX=this.options.scrollingX&&distanceX>=minimumTrackingForScroll,this.__enableScrollY=this.options.scrollingY&&distanceY>=minimumTrackingForScroll,positions.push(this.__scrollLeft,this.__scrollTop,timeStamp),this.__isDragging=(this.__enableScrollX||this.__enableScrollY)&&(distanceX>=minimumTrackingForDrag||distanceY>=minimumTrackingForDrag),this.__isDragging&&(this.__interruptedAnimation=!1)}this.__lastTouchLeft=currentTouchLeft,this.__lastTouchTop=currentTouchTop,this.__lastTouchMove=timeStamp,this.__lastScale=scale}},doTouchEnd:function(timeStamp){if(timeStamp instanceof Date&&(timeStamp=timeStamp.valueOf()),"number"!=typeof timeStamp)throw new Error("Invalid timestamp value: "+timeStamp);if(this.__isTracking){if(this.__isTracking=!1,this.__isDragging)if(this.__isDragging=!1,this.__isSingleTouch&&this.options.animating&&timeStamp-this.__lastTouchMove<=100){for(var positions=this.__positions,endPos=positions.length-1,startPos=endPos,i=endPos;i>0&&positions[i]>this.__lastTouchMove-100;i-=3)startPos=i;if(startPos!==endPos){var timeOffset=positions[endPos]-positions[startPos],movedLeft=this.__scrollLeft-positions[startPos-2],movedTop=this.__scrollTop-positions[startPos-1];this.__decelerationVelocityX=movedLeft/timeOffset*(1e3/60),this.__decelerationVelocityY=movedTop/timeOffset*(1e3/60);var minVelocityToStartDeceleration=this.options.paging||this.options.snapping?4:1;(Math.abs(this.__decelerationVelocityX)>minVelocityToStartDeceleration||Math.abs(this.__decelerationVelocityY)>minVelocityToStartDeceleration)&&this.__startDeceleration(timeStamp)}else this.options.scrollingComplete()}else timeStamp-this.__lastTouchMove>100&&this.options.scrollingComplete();this.__isDecelerating||((this.__interruptedAnimation||this.__isDragging)&&this.options.scrollingComplete(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0,this.__zoomLevel)),this.__positions.length=0}},__publish:function(left,top,zoom,isAnimated){var wasAnimating=this.__isAnimating;if(wasAnimating&&(animate.stop(wasAnimating),this.__isAnimating=!1),isAnimated&&this.options.animating){this.__scheduledLeft=left,this.__scheduledTop=top,this.__scheduledZoom=zoom;var oldLeft=this.__scrollLeft,oldTop=this.__scrollTop,oldZoom=this.__zoomLevel,diffLeft=left-oldLeft,diffTop=top-oldTop,diffZoom=zoom-oldZoom,step=function(percent,now,render){render&&(this.__scrollLeft=oldLeft+diffLeft*percent,this.__scrollTop=oldTop+diffTop*percent,this.__zoomLevel=oldZoom+diffZoom*percent,this.__callback&&this.__callback(this.__scrollLeft,this.__scrollTop,this.__zoomLevel))}.bind(this),verify=function(id){return this.__isAnimating===id}.bind(this),completed=function(renderedFramesPerSecond,animationId,wasFinished){animationId===this.__isAnimating&&(this.__isAnimating=!1),(this.__didDecelerationComplete||wasFinished)&&this.options.scrollingComplete(),this.options.zooming&&(this.__computeScrollMax(),this.__zoomComplete&&(this.__zoomComplete(),this.__zoomComplete=null))}.bind(this);this.__isAnimating=animate.start(step,verify,completed,this.options.animationDuration,wasAnimating?easeOutCubic:easeInOutCubic)}else this.__scheduledLeft=this.__scrollLeft=left,this.__scheduledTop=this.__scrollTop=top,this.__scheduledZoom=this.__zoomLevel=zoom,this.__callback&&this.__callback(left,top,zoom),this.options.zooming&&(this.__computeScrollMax(),this.__zoomComplete&&(this.__zoomComplete(),this.__zoomComplete=null))},__computeScrollMax:function(zoomLevel){void 0===zoomLevel&&(zoomLevel=this.__zoomLevel),this.__maxScrollLeft=Math.max(this.__contentWidth*zoomLevel-this.__clientWidth,0),this.__maxScrollTop=Math.max(this.__contentHeight*zoomLevel-this.__clientHeight,0)},__startDeceleration:function(timeStamp){if(this.options.paging){var scrollLeft=Math.max(Math.min(this.__scrollLeft,this.__maxScrollLeft),0),scrollTop=Math.max(Math.min(this.__scrollTop,this.__maxScrollTop),0),clientWidth=this.__clientWidth,clientHeight=this.__clientHeight;this.__minDecelerationScrollLeft=Math.floor(scrollLeft/clientWidth)*clientWidth,this.__minDecelerationScrollTop=Math.floor(scrollTop/clientHeight)*clientHeight,this.__maxDecelerationScrollLeft=Math.ceil(scrollLeft/clientWidth)*clientWidth,this.__maxDecelerationScrollTop=Math.ceil(scrollTop/clientHeight)*clientHeight}else this.__minDecelerationScrollLeft=0,this.__minDecelerationScrollTop=0,this.__maxDecelerationScrollLeft=this.__maxScrollLeft,this.__maxDecelerationScrollTop=this.__maxScrollTop;var step=function(percent,now,render){this.__stepThroughDeceleration(render)}.bind(this),minVelocityToKeepDecelerating=this.options.snapping?4:.1,verify=function(){var shouldContinue=Math.abs(this.__decelerationVelocityX)>=minVelocityToKeepDecelerating||Math.abs(this.__decelerationVelocityY)>=minVelocityToKeepDecelerating;return shouldContinue||(this.__didDecelerationComplete=!0),shouldContinue}.bind(this),completed=function(renderedFramesPerSecond,animationId,wasFinished){this.__isDecelerating=!1,this.__didDecelerationComplete&&this.options.scrollingComplete(),this.scrollTo(this.__scrollLeft,this.__scrollTop,this.options.snapping)}.bind(this);this.__isDecelerating=animate.start(step,verify,completed)},__stepThroughDeceleration:function(render){var scrollLeft=this.__scrollLeft+this.__decelerationVelocityX,scrollTop=this.__scrollTop+this.__decelerationVelocityY;if(!this.options.bouncing){var scrollLeftFixed=Math.max(Math.min(this.__maxDecelerationScrollLeft,scrollLeft),this.__minDecelerationScrollLeft);scrollLeftFixed!==scrollLeft&&(scrollLeft=scrollLeftFixed,this.__decelerationVelocityX=0);var scrollTopFixed=Math.max(Math.min(this.__maxDecelerationScrollTop,scrollTop),this.__minDecelerationScrollTop);scrollTopFixed!==scrollTop&&(scrollTop=scrollTopFixed,this.__decelerationVelocityY=0)}if(render?this.__publish(scrollLeft,scrollTop,this.__zoomLevel):(this.__scrollLeft=scrollLeft,this.__scrollTop=scrollTop),!this.options.paging){var frictionFactor=.95;this.__decelerationVelocityX*=frictionFactor,this.__decelerationVelocityY*=frictionFactor}if(this.options.bouncing){var scrollOutsideX=0,scrollOutsideY=0,penetrationDeceleration=this.options.penetrationDeceleration,penetrationAcceleration=this.options.penetrationAcceleration;scrollLeft<this.__minDecelerationScrollLeft?scrollOutsideX=this.__minDecelerationScrollLeft-scrollLeft:scrollLeft>this.__maxDecelerationScrollLeft&&(scrollOutsideX=this.__maxDecelerationScrollLeft-scrollLeft),scrollTop<this.__minDecelerationScrollTop?scrollOutsideY=this.__minDecelerationScrollTop-scrollTop:scrollTop>this.__maxDecelerationScrollTop&&(scrollOutsideY=this.__maxDecelerationScrollTop-scrollTop),0!==scrollOutsideX&&(scrollOutsideX*this.__decelerationVelocityX<=0?this.__decelerationVelocityX+=scrollOutsideX*penetrationDeceleration:this.__decelerationVelocityX=scrollOutsideX*penetrationAcceleration),0!==scrollOutsideY&&(scrollOutsideY*this.__decelerationVelocityY<=0?this.__decelerationVelocityY+=scrollOutsideY*penetrationDeceleration:this.__decelerationVelocityY=scrollOutsideY*penetrationAcceleration)}}},Scroller})?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"../../node_modules/scroller/lib/animate.js":function(module,exports){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[exports],__WEBPACK_AMD_DEFINE_FACTORY__=function(exports){var global="undefined"==typeof window?this:window,time=Date.now||function(){return+new Date},desiredFrames=60,millisecondsPerSecond=1e3,running={},counter=1;exports.requestAnimationFrame=function(){var requestFrame=global.requestAnimationFrame||global.webkitRequestAnimationFrame||global.mozRequestAnimationFrame||global.oRequestAnimationFrame,isNative=!!requestFrame;if(requestFrame&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())&&(isNative=!1),isNative)return function(callback,root){requestFrame(callback,root)};var TARGET_FPS=60,requests={},rafHandle=1,intervalHandle=null,lastActive=+new Date;return function(callback,root){var callbackHandle=rafHandle++;return requests[callbackHandle]=callback,null===intervalHandle&&(intervalHandle=setInterval((function(){var time=+new Date,currentRequests=requests;for(var key in requests={},currentRequests)currentRequests.hasOwnProperty(key)&&(currentRequests[key](time),lastActive=time);time-lastActive>2500&&(clearInterval(intervalHandle),intervalHandle=null)}),1e3/TARGET_FPS)),callbackHandle}}(),exports.stop=function(id){var cleared=null!==running[id];return cleared&&(running[id]=null),cleared},exports.isRunning=function(id){return null!==running[id]},exports.start=function(stepCallback,verifyCallback,completedCallback,duration,easingMethod,root){var start=time(),lastFrame=start,percent=0,dropCounter=0,id=counter++;if(id%20==0){var newRunning={};for(var usedId in running)newRunning[usedId]=!0;running=newRunning}var step=function(virtual){var render=!0!==virtual,now=time();if(!running[id]||verifyCallback&&!verifyCallback(id))return running[id]=null,void completedCallback(desiredFrames-dropCounter/((now-start)/millisecondsPerSecond),id,!1);if(render)for(var droppedFrames=Math.round((now-lastFrame)/(millisecondsPerSecond/desiredFrames))-1,j=0;j<Math.min(droppedFrames,4);j++)step(!0),dropCounter++;duration&&(percent=(now-start)/duration)>1&&(percent=1);var value=easingMethod?easingMethod(percent):percent;!1!==stepCallback(value,now,render)&&1!==percent||!render?render&&(lastFrame=now,exports.requestAnimationFrame(step,root)):(running[id]=null,completedCallback(desiredFrames-dropCounter/((now-start)/millisecondsPerSecond),id,1===percent||void 0===duration))};return running[id]=!0,exports.requestAnimationFrame(step,root),id}},void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"../../packages/common-react/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);