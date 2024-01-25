"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7665],{"../../packages/models/src/workbook/IWorkbookModel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>WorkbookFindCellScope,z:()=>SheetVisibility});let WorkbookFindCellScope=function(WorkbookFindCellScope){return WorkbookFindCellScope.Workbook="workbook",WorkbookFindCellScope.Sheet="sheet",WorkbookFindCellScope}({}),SheetVisibility=function(SheetVisibility){return SheetVisibility.Visible="visible",SheetVisibility.Hidden="hidden",SheetVisibility.VeryHidden="veryHidden",SheetVisibility}({})},"../../packages/models/src/workbook/WorkbookModel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>WorkbookModel});var AddressUtils=__webpack_require__("../../packages/models/src/range/AddressUtils.ts"),RangeUtils=__webpack_require__("../../packages/models/src/range/RangeUtils.ts"),SheetStyle=__webpack_require__("../../packages/models/src/cell/SheetStyle.ts"),ISheetModel=__webpack_require__("../../packages/models/src/sheet/ISheetModel.ts"),IWorkbookModel=__webpack_require__("../../packages/models/src/workbook/IWorkbookModel.ts"),SheetModel=__webpack_require__("../../packages/models/src/sheet/SheetModel.ts"),DocThemes=__webpack_require__("../../packages/models/src/theme/DocThemes.ts"),Transaction=__webpack_require__("../../packages/models/src/transaction/Transaction.ts");const defaultWorkbookView={showFormulaBar:!0,showTabs:!0,tabRatio:600,showHorizontalScrollbar:!0,showVerticalScrollbar:!0,showStatusBar:!0,activeSheetId:null};const workbook_WorkbookView=class WorkbookView{_listeners=new Set;constructor(json={}){this.fromJSON(json)}get showFormulaBar(){return this._state.showFormulaBar}set showFormulaBar(newValue){this._state.showFormulaBar=newValue,this.notifyListeners()}get showTabs(){return this._state.showTabs}set showTabs(newValue){this._state.showTabs=newValue,this.notifyListeners()}get tabRatio(){return this._state.tabRatio}set tabRatio(newValue){this._state.tabRatio=newValue,this.notifyListeners()}get showHorizontalScrollbar(){return this._state.showHorizontalScrollbar}set showHorizontalScrollbar(newValue){this._state.showHorizontalScrollbar=newValue,this.notifyListeners()}get showVerticalScrollbar(){return this._state.showVerticalScrollbar}set showVerticalScrollbar(newValue){this._state.showVerticalScrollbar=newValue,this.notifyListeners()}get showStatusBar(){return this._state.showStatusBar}set showStatusBar(newValue){this._state.showStatusBar=newValue,this.notifyListeners()}get activeSheetId(){return this._state.activeSheetId}set activeSheetId(newValue){this._state.activeSheetId=newValue,this.notifyListeners()}notifyListeners(update=void 0){const _self=this;this._listeners.forEach((listener=>{listener.onViewChange?.(update||_self)}))}addListener(listener){const listeners=this._listeners;return listeners.add(listener),()=>{listeners.delete(listener)}}toJSON(){let json={};const keys=Object.keys(this._state);for(let k=0;k<keys.length;k++){const value=this._state[keys[k]];null!=value&&value!==defaultWorkbookView[keys[k]]&&(json[keys[k]]=value)}return 0===Object.keys(json).length&&(json=null),json}fromJSON(json,notify=!0){let view=json||{};this.update(view,notify)}update(view,notify=!0){this._state={...defaultWorkbookView,...this._state,...view},notify&&this.notifyListeners()}};var WorkbookUtils=__webpack_require__("../../packages/models/src/workbook/WorkbookUtils.ts");const MESSAGE_ERROR_INVALID_SHEET_KEY=key=>`Invalid SheetKey: ${key}`,MESSAGE_ERROR_SHEET_ONE="A workbook must contain at least one visible worksheet.",MESSAGE_MODEL_CLOSED="Workbook has been closed. No further operations are allowed.",MESSAGE_ERROR_SHEET_NOT_FOUND=sheetName=>`Sheet '${sheetName}' not found.`,DEFAULT_SHEET_NAME_CREATOR=index=>`Sheet${index}`;class WorkbookModel{_is1904DateSystem=!1;_closed=!1;constructor(initialState,options){const self=this;this._options={...options},this._theme=this._options.theme??DocThemes.sE.getDefaultTheme(),this._sheetStyle=this._options?.sheetStyle??new SheetStyle.I(this._theme),this._sheetStyle.getTheme()||this._sheetStyle.setTheme(this.getTheme()),this._transactionStore=this._options.transactionStore??new Transaction.T1,this._sheetNameCreator=this._options.sheetNameCreator??DEFAULT_SHEET_NAME_CREATOR;let sheetCreatorCallback=this._options.sheetCreator;sheetCreatorCallback||(sheetCreatorCallback=(_name,initialStateSheet,optionsSheet)=>new SheetModel.Z(initialStateSheet,optionsSheet)),this._sheetCreator=(name,initialStateSheet,optionsSheet)=>{const optionsSheetFromWB={sheetStyle:self._sheetStyle,isDate1904System:self.is1904DateSystem(),transactionStore:self._transactionStore,...optionsSheet,getName:model=>self._refsByInstance.get(model)?.name??null};return(this._options.maxColumns||optionsSheet?.maxColumns)&&(optionsSheetFromWB.maxColumns=Math.min(this._options?.maxColumns??optionsSheet?.maxColumns??Number.MAX_SAFE_INTEGER)),(this._options.maxRows||optionsSheet?.maxRows)&&(optionsSheetFromWB.maxRows=Math.min(options.maxRows??optionsSheet?.maxRows??Number.MAX_SAFE_INTEGER)),sheetCreatorCallback(name,initialStateSheet,optionsSheetFromWB)},this._listeners=new Set,this._listenerRanges=new Set,this._listenerRangesAll=new Set,this._listenersSheets=new Map,this._listenersSheetRangesAll=new Map,Array.isArray(initialState)&&(initialState={values:initialState}),initialState?.values?this._fromJSON(null,initialState):this._fromJSON(initialState)}_initialize(){this._listenersSheets.forEach((removeListener=>{removeListener()})),this._listenersSheets.clear(),this._listenersSheetRangesAll.forEach((removeListener=>{removeListener()})),this._listenersSheetRangesAll.clear(),this._sheetRefsAll=[],this._sheetRefsVisibleAndHidden=[],this._sheetRefsVisible=[],this._refsById=new Map,this._sheetsById=new Map,this._refsByName=new Map,this._sheetsByNames=new Map,this._refsByInstance=new Map,this._lastId=0,this._is1904DateSystem=this._options.isDate1904System??!1,this._theme=this._options.theme??DocThemes.sE.getDefaultTheme(),this._activeSheetOffset=0,this._sheetNames=[],this.setView(new workbook_WorkbookView)}getView(){return this._view}setView(view){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);if(!view)throw new Error("View can not be empty.");this._listenerWorkbookView?.(),this._listenerWorkbookView=view.addListener({onViewChange:update=>{this._activeSheetOffset=this._findOffsetForId(this._view.activeSheetId,this._sheetRefsVisible),this.notifyViewChange(update)}}),this._view=view,this.notifyViewChange(this._view)}is1904DateSystem(){return this._is1904DateSystem}set1904DateSystem(is1904Date){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);this._is1904DateSystem=is1904Date,this.notifyAllChange()}sheetStyle(){return this._sheetStyle}getTheme(){return this._theme}getTransactionStore(){return this._transactionStore}setTheme(theme){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);if(!theme)throw new Error("A value must be provided.");const retValue=this._theme;return this._theme=theme,this.sheetStyle().setTheme(theme),this.notifyThemeChange(theme),retValue}getSheetRefs(visibility=IWorkbookModel.z.Visible){return this._closed?[]:visibility===IWorkbookModel.z.Visible?this._sheetRefsVisible:visibility===IWorkbookModel.z.Hidden?this._sheetRefsVisibleAndHidden:visibility===IWorkbookModel.z.VeryHidden?this._sheetRefsAll:[]}getSheet(key){return this._closed?null:this.getSheetRef(key??this.getActiveSheetIndex())?.sheet??null}getSheetRef(key,visibility=IWorkbookModel.z.Visible){let retValue=null;return"number"==typeof key?visibility===IWorkbookModel.z.Visible?retValue=this._sheetRefsVisible[key]:visibility===IWorkbookModel.z.Hidden?retValue=this._sheetRefsVisibleAndHidden[key]:visibility===IWorkbookModel.z.VeryHidden&&(retValue=this._sheetRefsAll[key]):"string"==typeof key?retValue=this._refsByName.get(key):key instanceof SheetModel.Z?retValue=this._refsByInstance.get(key):key?.id&&key.sheet&&(retValue=this._refsById.get(key.id)),retValue}getSheetRefById(id){const retValue=this._refsById.get(id);if(!retValue)throw new Error((id=>`Invalid id: ${id}`)(id));return retValue}_validateSheetName(sheetName,checkDuplicates=!0){if(null==sheetName)return sheetName;if(RangeUtils.FA(sheetName),checkDuplicates&&this._sheetsByNames.has(sheetName))throw new Error("That name is already taken. Try a different one.");return sheetName.substring(0,31)}getSheetNames(){return this._sheetNames}findValidSheetName(str){try{if(this._validateSheetName(str))return str}catch(error){}let template,index,token=new RegExp(RangeUtils.hF,"g").exec(str);for(null!==token?(template=str.substring(0,token.index),index=parseFloat(token[1])):(template=str+" ",index=1);;){index++;const candidate=template+"("+index+")";try{if(this._validateSheetName(candidate))return candidate}catch(error){}}}addSheet(sheetName=null,index=null){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);if(sheetName&&this._sheetsByNames.has(sheetName))throw new Error((sheetName=>`The sheet name '${sheetName}' already exist in workbook.`)(sheetName));for(sheetName=this._validateSheetName(sheetName);!sheetName;){const sheetNameCandidate=this._sheetNameCreator(this._lastId+1);this._sheetsByNames.has(sheetNameCandidate)?this._lastId++:sheetName=sheetNameCandidate}this._lastId++;const sheet=this._sheetCreator(sheetName);if(!sheet)throw new Error(RangeUtils.bH);const sheetRefAdd=Object.freeze({id:this._lastId,name:sheetName,visibility:IWorkbookModel.z.Visible,sheet});return this._addSheetRef(sheetRefAdd,index),this.notifySheetRefsChange(this._sheetRefsVisible),sheetRefAdd.sheet}_updateSheetRefStates(sheetRefs){this._sheetRefsAll=sheetRefs,this._sheetRefsVisible=[],this._sheetRefsVisibleAndHidden=[];for(let i=0;i<this._sheetRefsAll.length;i++)this._sheetRefsAll[i].visibility===IWorkbookModel.z.Visible?(this._sheetRefsVisible.push(this._sheetRefsAll[i]),this._sheetRefsVisibleAndHidden.push(this._sheetRefsAll[i])):this._sheetRefsAll[i].visibility===IWorkbookModel.z.Hidden&&this._sheetRefsVisibleAndHidden.push(this._sheetRefsAll[i])}_addSheetRef(sheetRefAdd,index=null){const indexAdd=Math.max(0,Math.min(this._sheetRefsAll.length,index??this._sheetRefsAll.length));let cloneAdded=[...this._sheetRefsAll.slice(0,indexAdd),sheetRefAdd,...this._sheetRefsAll.slice(indexAdd)];this._updateSheetRefStates(cloneAdded);const sheet=sheetRefAdd.sheet;this._refsById.set(sheetRefAdd.id,sheetRefAdd),this._refsByName.set(sheetRefAdd.name,sheetRefAdd),this._refsByInstance.set(sheet,sheetRefAdd),this._sheetsById.set(sheetRefAdd.id,sheet),this._sheetsByNames.set(sheetRefAdd.name,sheet);const _self=this;if(void 0!==sheet){const removeListener=sheet.addListener({onCellsChange(){_self._refsByInstance.get(sheet)&&_self.notifyCellChange()}});this._listenersSheets.set(sheetRefAdd.id,removeListener);const listenerWrapper=(range,sheet)=>{this._listenerRangesAll.forEach((node=>{if(null==node.sheetRef)try{node.listener(range,sheet)}catch(error){console.warn(error)}}))};this._listenersSheetRangesAll.set(sheetRefAdd.id,sheet.addRangeListener(null,listenerWrapper,{absoluteCoords:!0}))}return this._lastId=Math.max(this._lastId,sheetRefAdd.id),sheetRefAdd}_adjustRemoveSelectionIfRequired(indexRemove,id){if(this._view.activeSheetId===id){let newActiveId;newActiveId=indexRemove<this._sheetRefsVisible.length?this._sheetRefsVisible[indexRemove].id:this._sheetRefsVisible[indexRemove-1].id,this._view.activeSheetId=newActiveId}}removeSheet(key){let ref=this.getSheetRef(key);if(!ref)throw new Error((key=>`Invalid reference for remove: ${key}`)(key));if(1===this._sheetRefsVisible.length&&this._sheetRefsVisible[0].id===ref.id)throw new Error(MESSAGE_ERROR_SHEET_ONE);const indexRemove=this._findOffsetForId(ref.id,this._sheetRefsAll),sheetRefRemove=this._sheetRefsAll[indexRemove];let cloned=[...this._sheetRefsAll];cloned.splice(indexRemove,1),this._updateSheetRefStates(cloned);const sheetRemove=this._sheetsById.get(sheetRefRemove.id);sheetRemove?.close();const notifyListeners=listeners=>{listeners.forEach((node=>{if(node.sheetRef===sheetRefRemove||null==node.sheetRef){try{node.listener(sheetRefRemove.sheet.getRange(node.range??sheetRefRemove.sheet.getMaxCellBounds()),sheetRefRemove.sheet)}catch(error){console.warn(error)}node.removeListener?.()}}))};return notifyListeners(this._listenerRanges),notifyListeners(this._listenerRangesAll),this._refsById.delete(sheetRefRemove.id),this._sheetsById.delete(sheetRefRemove.id),this._refsByName.delete(sheetRefRemove.name),this._sheetsByNames.delete(sheetRefRemove.name),this._refsByInstance.delete(sheetRemove),this._listenersSheets.get(sheetRefRemove.id)(),this._listenersSheets.delete(sheetRefRemove.id),this._listenersSheetRangesAll.get(sheetRefRemove.id)(),this._listenersSheetRangesAll.delete(sheetRefRemove.id),this._adjustRemoveSelectionIfRequired(indexRemove,sheetRefRemove.id),this.notifySheetRefsChange(this._sheetRefsVisible),sheetRefRemove.sheet}_findOffsetForId(id,refs){for(let i=0;i<refs.length;i++)if(refs[i].id===id)return i;throw new Error("Internal error no visible sheetRefs")}getActiveAddressA1(){if(this._closed)throw AddressUtils.wh;const activeSheet=this.getSheet();return AddressUtils.VB(RangeUtils.vu(activeSheet.getActiveAddressCoords()),{...activeSheet.getMaxCellBounds(),sheetName:activeSheet.getName()})}getActiveAddressCoords(){const activeSheet=this.getSheet();return{...activeSheet.getActiveAddressCoords(),sheetName:activeSheet.getName()}}getActiveSheetIndex(){return this._activeSheetOffset}_scanFind(findText,options,onFind){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const isWorkbookScan="workbook"===options.scope,isReverse=options?.isReverse,isWrap=!options?.disableWrap,startSheetIndex=this.getActiveSheetIndex(),startSheet=this.getSheet(),refs=this.getSheetRefs();let found=null,currentSheetIndex=startSheetIndex,currentSheet=startSheet,includeFrom=!1,startFrom=null;const fromAsRange=options?.from?this._parseRangeAddress(options?.from):null;fromAsRange?(startFrom={colIndex:fromAsRange.colStart,rowIndex:fromAsRange.rowStart},includeFrom=!0):startFrom=startSheet.getActiveAddressCoords();const originalStartFrom=startFrom,originalStartSheet=startSheet;let startTo=null,bounds=null;isWorkbookScan||1===currentSheet.getView().selection.ranges.length&&(bounds=currentSheet.getView().selection.ranges[0]);const doFind=()=>{let from=startFrom,to=startTo;for(;!found&&currentSheet;){const sheetOptions={includeFrom,isReverse,...options,disableWrap:isWorkbookScan,bounds,from,to,onFound:pair=>{let shouldBreak=options.onFound?.(pair);return shouldBreak||(shouldBreak=onFind(currentSheet,pair.coords,pair.cell),shouldBreak&&(found=pair),shouldBreak)}};currentSheet?.find(findText,sheetOptions),isWorkbookScan&&(currentSheetIndex+=sheetOptions.isReverse?-1:1,currentSheetIndex<0?currentSheetIndex=refs.length-1:currentSheetIndex>=refs.length&&(currentSheetIndex=0),currentSheet=this.getSheet(refs[currentSheetIndex]),from=null,to=null),currentSheetIndex===startSheetIndex&&(currentSheetIndex=null,currentSheet=null)}};doFind(),!found&&null!==currentSheetIndex&&startFrom&&!startTo&&isWrap&&(currentSheetIndex=0,currentSheet=this.getSheet(refs[currentSheetIndex]),startTo=startFrom,startFrom=currentSheet===originalStartSheet?originalStartFrom:null,doFind())}find(findText,options){let found=null;return this._scanFind(findText,options,((sheet,coords,cell)=>(found={coords:{...coords,sheetName:sheet.getName()},cell},!0))),found}replace(findText,replaceText,options){if(options?.findOptions.fields?.includes(ISheetModel.Eb.Value))throw new Error("Can not replace values. Use formula instead");const optionsFind={...options?.findOptions},startSheet=this.getSheet(),startCoords=startSheet.getActiveAddressCoords(),isReplaceAll=options?.isReplaceAll??!1;optionsFind.from||(optionsFind.from=startSheet.getActiveAddressCoords());let next=null,count=0;const transReplace=this._transactionStore.pushTransaction("Replace");let lastSheet=startSheet,pairs=[],firstCommit=null;const commitReplaces=()=>{0!==pairs.length&&null!==lastSheet&&(lastSheet.setCellPairs(pairs,{parseTextAsValue:!0,...options}),pairs=[])};try{if(this._scanFind(findText,optionsFind,((sheet,coords,_cell)=>{if(next={...coords,sheetName:sheet.getName()},firstCommit){if(RangeUtils.dX(firstCommit,coords))return!0}else firstCommit=coords;return count++,lastSheet!==sheet&&commitReplaces(),lastSheet=sheet,!isReplaceAll&&pairs.length>0||(pairs.push({address:coords,update:replaceText}),options?.onReplaceText?.(coords,replaceText),(startSheet!==sheet||!RangeUtils.dX(startCoords,coords))&&!isReplaceAll)})),commitReplaces(),next&&!isReplaceAll){let updateSelection=!1,coords=next;const activeSelection=lastSheet.getView().selection;let selection=activeSelection;const isCoordsSame=RangeUtils.dX(coords,activeSelection.activeCoords);let inRangeIndex=-1;for(let i=0;-1===inRangeIndex&&i<activeSelection.ranges.length;i++)RangeUtils.tt(coords,activeSelection.ranges[i])&&(inRangeIndex=i);if(-1===inRangeIndex)updateSelection=!0;else if(!isCoordsSame){const newSelection={...activeSelection,activeCoords:coords,activeRangeIndex:inRangeIndex};selection=newSelection}!0===updateSelection&&(selection={activeCoords:coords}),this._transactionStore.peekTransaction().updateState({record:lastSheet,state:prevValue=>prevValue,inputs:prevValue=>({...prevValue,selectionView:Object.freeze(selection)})})}transReplace.commit()}catch(e){throw transReplace.rollback(),e}return{next:isReplaceAll?null:next,count}}_nextSheetIndex(index,refs=this.getSheetRefs()){return 1===refs.length||index>=refs.length-1?0:index+1}_prevSheetIndex(index,refs=this.getSheetRefs()){return 1===refs.length?0:index<=0?refs.length-1:index-1}activateNextSheet(){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const refs=this.getSheetRefs();return this.setActiveSheet(refs[this._nextSheetIndex(this.getActiveSheetIndex(),refs)]??null)}activatePreviousSheet(){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const refs=this.getSheetRefs();return this.setActiveSheet(refs[this._prevSheetIndex(this.getActiveSheetIndex(),refs)]??null)}duplicateSheet(key){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const refs=this.getSheetRefs(),currentOffset=this.getActiveSheetIndex();let ref=null;if(key){if(ref=this.getSheetRef(key),!ref)throw new Error(MESSAGE_ERROR_INVALID_SHEET_KEY(ref))}else ref=refs[currentOffset];if(!ref)return null;const sheetModel=ref.sheet,currentRef=this._refsByInstance.get(sheetModel),persistScope=this.sheetStyle().beginPersist();try{const asJson=sheetModel.toJSON(),newId=refs.length+1,newName=this.findValidSheetName(currentRef.name),sheetNew=this._sheetCreator(newName,asJson),newRef=this._addSheetRef(Object.freeze({name:newName,id:newId,visibility:currentRef.visibility||IWorkbookModel.z.Visible,sheet:sheetNew}),currentOffset);return this.notifySheetRefsChange(this._sheetRefsVisible),newRef.sheet}catch(error){throw error}finally{persistScope.endPersist()}}getCell(address){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const rangeParsed=this._parseRangeAddress(address??this.getActiveAddressA1()),sheetRef=this.getSheetRef(rangeParsed.sheetName,IWorkbookModel.z.VeryHidden);if(!sheetRef)throw new Error(MESSAGE_ERROR_SHEET_NOT_FOUND(rangeParsed.sheetName));const retValue=sheetRef.sheet.getCell({colIndex:rangeParsed.colStart,rowIndex:rangeParsed.rowStart});return this._options.onGetCellAt?.(rangeParsed.sheetName,AddressUtils.BK({colIndex:rangeParsed.colStart,rowIndex:rangeParsed.rowStart}),retValue),retValue}setCell(address,value,options){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const rangeParsed=this._parseRangeAddress(address??this.getActiveAddressA1()),sheetRef=this.getSheetRef(rangeParsed.sheetName,IWorkbookModel.z.VeryHidden);if(!sheetRef)throw new Error(MESSAGE_ERROR_SHEET_NOT_FOUND(rangeParsed.sheetName));return sheetRef.sheet.setCell({colIndex:rangeParsed.colStart,rowIndex:rangeParsed.rowStart},value,options)}getRange(address){let rangeSheet,sheet,rangeParsed;if(address){rangeParsed=this._parseRangeAddress(address);const sheetRef=this.getSheetRef(rangeParsed.sheetName,IWorkbookModel.z.VeryHidden);if(!sheetRef){const activeSheet=this.getSheet();return delete rangeParsed.sheetName,((address,defaultRange)=>address?Object.freeze({...WorkbookUtils.X,toString:()=>AddressUtils.VB(address,defaultRange)}):WorkbookUtils.X)(rangeParsed,{sheetName:AddressUtils.wh,...activeSheet.getMaxCellBounds()})}rangeSheet=sheetRef.sheet.getRange(rangeParsed),sheet=sheetRef.sheet}else sheet=this.getSheet(),rangeSheet=sheet.getRange();return this._sheetRangeToWorkbookRange(rangeSheet,sheet)}_updateSheetRef(refOriginal,refNew){let refsNew=[...this._sheetRefsAll];refsNew[this._findOffsetForId(refOriginal.id,this._sheetRefsAll)]=refNew,this._updateSheetRefStates(refsNew),this._refsById.set(refOriginal.id,refNew),this._refsByName.delete(refOriginal.name),this._refsByName.set(refNew.name,refNew);let refSheet=this._sheetsByNames.get(refOriginal.name);return this._sheetsByNames.delete(refOriginal.name),this._sheetsByNames.set(refNew.name,refSheet),this._refsByInstance.set(refSheet,refNew),refNew}setSheetName(key,sheetName){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const refOriginal=this.getSheetRef(key);if(!refOriginal)throw new Error(MESSAGE_ERROR_INVALID_SHEET_KEY(key));if(sheetName===refOriginal.name)return refOriginal.sheet;sheetName=this._validateSheetName(sheetName);const refNew=Object.freeze({...refOriginal,name:sheetName}),newSheetRef=this._updateSheetRef(refOriginal,refNew);this.notifySheetRefsChange(this._sheetRefsVisible);const notifyListeners=listeners=>{listeners.forEach((node=>{if(node.sheetRef===refOriginal||null===node.sheetRef){null!==node.sheetRef&&(node.sheetRef=refNew);try{node.listener(refNew.sheet.getRange(node.range??refNew.sheet.getMaxCellBounds()),refNew.sheet)}catch(error){console.warn(error)}}}))};return notifyListeners(this._listenerRanges),notifyListeners(this._listenerRangesAll),newSheetRef.sheet}setSheetVisibility(key,visibility){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const refOriginal=this.getSheetRef(key);if(!refOriginal)return null;if(visibility===refOriginal.visibility)return;if(visibility!==IWorkbookModel.z.Visible&&1===this._sheetRefsVisible.length&&this._sheetRefsVisible[0].id===refOriginal.id)throw new Error(MESSAGE_ERROR_SHEET_ONE);const refNew={...refOriginal,visibility};let indexHidden=-1;visibility!==IWorkbookModel.z.Visible&&(indexHidden=this._findOffsetForId(refOriginal.id,this._sheetRefsVisible));const newSheetRef=this._updateSheetRef(refOriginal,refNew);return visibility!==IWorkbookModel.z.Visible&&this._adjustRemoveSelectionIfRequired(indexHidden,refOriginal.id),this.notifySheetRefsChange(this._sheetRefsVisible),newSheetRef.sheet}moveSheet(indexFrom,indexTo){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);if(indexFrom===indexTo)return;if(!this._sheetRefsVisible[indexFrom])throw new Error(`No sheet at index: ${indexFrom}`);if(indexTo<0||indexTo>this._sheetRefsVisible.length-1)throw new Error(`Invalid to index: ${indexTo}`);const indexFromActual=this._findOffsetForId(this._sheetRefsVisible[indexFrom].id,this._sheetRefsAll),indexToActual=this._findOffsetForId(this._sheetRefsVisible[indexTo].id,this._sheetRefsAll);if(indexFromActual===indexToActual)return;const refFrom=this._sheetRefsAll[indexFromActual];if(!refFrom)throw new Error(`Invalid from index: ${indexFrom}`);let cloned=[...this._sheetRefsAll];return cloned.splice(indexFromActual,1),cloned.splice(indexToActual,0,refFrom),this._updateSheetRefStates(cloned),this.notifySheetRefsChange(this._sheetRefsVisible),refFrom.sheet}setActiveSheet(key){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const ref=this.getSheetRef(key);if(!ref)throw new Error(MESSAGE_ERROR_INVALID_SHEET_KEY(key));return ref.visibility!==IWorkbookModel.z.Visible&&this.setSheetVisibility(ref,IWorkbookModel.z.Visible),this._view.activeSheetId=ref.id,ref.sheet}notifyCellChange(){this._listeners.forEach((listener=>{listener.onCellsChange?.()}))}notifySheetRefsChange(update=null){this._sheetNames=this._sheetRefsVisible.map((ref=>ref.name)),this._activeSheetOffset=this._findOffsetForId(this._view.activeSheetId,this._sheetRefsVisible),this._listeners.forEach((listener=>{listener.onSheetsRefsChange?.(update)}))}notifyThemeChange(update=null){const _self=this;this._listeners.forEach((listener=>{listener.onThemeChange?.(update??_self._theme)}))}notifyViewChange(update=null){this._listeners.forEach((listener=>{listener.onViewChange?.(update??this._view)}))}notifyAllChange(){this.notifyCellChange(),this.notifySheetRefsChange(this._sheetRefsVisible),this.notifyViewChange(),this._listeners.forEach((listener=>{listener.onAllChange?.()}))}addListener(listener){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const listeners=this._listeners;return listeners.add(listener),function(){listeners.delete(listener)}}_sheetRangeToWorkbookRange(range,sheet){const bounds=range.bounds()&&sheet?{...range.bounds(),sheetName:sheet.getName()}:null;return{...range,bounds:()=>bounds,toString:()=>AddressUtils.VB(bounds,{...sheet.getMaxCellBounds(),sheetName:sheet.getName()}),sheet:()=>sheet,isWorkbookRange:!0}}_parseRangeAddress(address){const range=WorkbookUtils.Q(address,{...this.getSheet().getMaxCellBounds(),sheetName:this.getSheetNames()[this.getActiveSheetIndex()]});if(!range)throw new Error(AddressUtils.sV(address));return this._validateSheetName(range.sheetName,!1),range}addRangeListener(address,listener,options){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const rangeWorkbook=address?this._parseRangeAddress(address):null,sheetRef=rangeWorkbook?this.getSheetRef(rangeWorkbook.sheetName,IWorkbookModel.z.VeryHidden):null,self=this;let range=null;if(rangeWorkbook){if(!sheetRef)return()=>{};range={...rangeWorkbook}}delete range?.sheetName;let removeListener=null;const listenerWrapper=(range,sheet)=>{listener(this._sheetRangeToWorkbookRange(range,sheet),sheet,self)};sheetRef&&(removeListener=sheetRef.sheet.addRangeListener(range,listenerWrapper,options));const refListener={listener:listenerWrapper,sheetRef,range,removeListener};address?this._listenerRanges.add(refListener):this._listenerRangesAll.add(refListener);return()=>(self._listenerRanges.delete(refListener),self._listenerRangesAll.delete(refListener),void removeListener?.())}fromJSON(json){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);this._fromJSON(json)}_fromJSON(json,rangeUpdate){let oldSheetRefs=this.getSheetRefs();for(let i=oldSheetRefs&&oldSheetRefs.length-1;i>=0;i--);this._initialize();const parsedJson=JSON.parse(JSON.stringify(json||{sheets:[{name:this._sheetNameCreator(1),sheet:{cells:{}}}]}));if(!parsedJson.sheets||0===parsedJson.sheets.length)throw new Error(MESSAGE_ERROR_SHEET_ONE);parsedJson.theme&&(this._theme=new DocThemes.Qj(parsedJson.theme),this._sheetStyle.setTheme(this._theme));const persistScope=this._sheetStyle.beginPersist();try{persistScope.fromJSON(parsedJson.style),parsedJson.date1904&&(this._is1904DateSystem=!0),parsedJson.view||(parsedJson.view={});let activeSheetId=parsedJson.view.activeSheetId??null;null!==activeSheetId&&(activeSheetId=Math.min(Math.max(1,activeSheetId),parsedJson.sheets.length));let lastVisibleId=null;for(let i=0;i<parsedJson.sheets.length;i++){const sheetRefJSON=parsedJson.sheets[i],sheet=this._sheetCreator(sheetRefJSON.name,rangeUpdate??sheetRefJSON.sheet),visibility=sheetRefJSON.visibility||IWorkbookModel.z.Visible,id=i+1;visibility===IWorkbookModel.z.Visible?lastVisibleId=id:null!==activeSheetId&&activeSheetId===id&&(activeSheetId=null),sheetRefJSON.sheet&&this._addSheetRef(Object.freeze({name:sheetRefJSON.name,id,visibility,sheet}))}parsedJson.view.activeSheetId=activeSheetId??lastVisibleId,this._view.fromJSON(parsedJson.view,!1)}finally{persistScope.endPersist()}this.notifyAllChange()}toJSON(){if(this._closed)throw new Error(MESSAGE_MODEL_CLOSED);const json={sheets:[]},jsonTheme=this._theme.toJSON();(jsonTheme?Object.keys(jsonTheme).length:0)>0&&(json.theme=jsonTheme);const persistScope=this._sheetStyle.beginPersist();try{const originalActiveSheetId=this.getSheetRef(this.getActiveSheetIndex()).id;let activeSheetId=originalActiveSheetId,lastVisibleId=null;for(let i=0;i<this._sheetRefsAll.length;i++){const sheetRef=this._sheetRefsAll[i],id=i+1,sheetRefJson={name:sheetRef.name,sheet:this._sheetsById.get(sheetRef.id).toJSON()};sheetRef.visibility===IWorkbookModel.z.Visible?lastVisibleId=id:sheetRefJson.visibility=sheetRef.visibility,sheetRef.id===originalActiveSheetId&&(activeSheetId=id),json.sheets.push(sheetRefJson)}const sheetStyle=persistScope.toJSON();sheetStyle&&Object.keys(sheetStyle).length>0&&(json.style=sheetStyle);const jsonView=this._view.toJSON();jsonView&&(activeSheetId!==lastVisibleId?jsonView.activeSheetId=activeSheetId:delete jsonView.activeSheetId,Object.keys(jsonView).length>0&&(json.view=jsonView))}finally{persistScope.endPersist()}return this._is1904DateSystem&&(json.date1904=!0),json}close(){if(!this._closed){this._listeners.forEach((listener=>{listener.onClose?.()})),this._closed=!0,this._listenersSheets.forEach((removeListener=>{removeListener()})),this._listenersSheets.clear(),this._listenersSheetRangesAll.forEach((removeListener=>{removeListener()})),this._listenersSheetRangesAll.clear();for(let i=this._sheetRefsAll.length-1;i>=0;i--)try{this._sheetRefsAll[i].sheet.close()}catch(error){console.warn("error on close",error)}this._listeners.clear()}}get options(){return this._options}get isIWorkbookModel(){return!0}}},"../../packages/models/src/workbook/WorkbookUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>decodeWorkbookRange,X:()=>RANGE_INVALID_REF});var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/models/src/range/RangeUtils.ts"),_range_AddressUtils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/models/src/range/AddressUtils.ts"),_sheet_SheetUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/models/src/sheet/SheetUtils.ts");const RANGE_INVALID_REF=Object.freeze({..._sheet_SheetUtils__WEBPACK_IMPORTED_MODULE_0__.X$,bounds:()=>null,sheet:()=>null,isWorkbookRange:!0}),decodeWorkbookRange=(range,defaultRange,rangeLookup)=>{if(!range)return null;if("string"==typeof range){const decoded=_range_AddressUtils__WEBPACK_IMPORTED_MODULE_1__.Kx(range,defaultRange);return decoded||rangeLookup?.(range)}let rangeAny=range;if(void 0!==rangeAny.rowIndex&&void 0!==rangeAny.colIndex){const cellCoords=___WEBPACK_IMPORTED_MODULE_2__.Qw(rangeAny),retValue={...defaultRange,...cellCoords};return rangeAny.sheetName&&(retValue.sheetName=rangeAny.sheetName),retValue}return void 0!==rangeAny.rowStart||void 0!==rangeAny.colStart||void 0!==rangeAny.rowEnd||void 0!==rangeAny.colEnd?{...defaultRange,...rangeAny}:null}}}]);