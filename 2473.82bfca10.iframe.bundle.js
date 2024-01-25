"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2473],{"../../packages/models/src/theme/DocThemes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sE:()=>DEFAULT_DOC_THEMES,Qj:()=>DocTheme,Dt:()=>DocThemes,fA:()=>sortDocThemes});var CommonUtils=__webpack_require__("../../packages/common/src/utils/CommonUtils.ts"),SchemeColors=__webpack_require__("../../packages/models/src/colors/SchemeColors.ts"),AdjustedColor=__webpack_require__("../../packages/models/src/colors/AdjustedColor.ts");let GetThemeType=function(GetThemeType){return GetThemeType.BuiltIn="builtIn",GetThemeType.All="all",GetThemeType.Custom="custom",GetThemeType}({});const BuiltInColorSchemes=[["Office","windowText","window","0E2841","E8E8E8","156082","E97132","196B24","0F9ED5","A02B93","4EA72E","467886","96607D"],["Office 2013-2022","windowText","window","44546A","E7E6E6","4472C4","ED7D31","A5A5A5","FFC000","5B9BD5","70AD47","0563C1","954F72"],["Office 2007-2010","windowText","window","1F497D","EEECE1","4F81BD","C0504D","9BBB59","8064A2","4BACC6","F79646","0000FF","800080"],["Grayscale","windowText","window","000000","F8F8F8","DDDDDD","B2B2B2","969696","808080","5F5F5F","4D4D4D","5F5F5F","919191"],["Atlas","windowText","window","454545","E0E0E0","F81B02","FC7715","AFBF41","50C49F","3B95C4","B560D4","FC5A1A","B49E74"],["Banded","2C2C2C","FFFFFF","099BDD","F2F2F2","FFC000","A5D028","08CC78","F24099","828288","F56617","005DBA","6C606A"],["Basis","000000","FFFFFF","565349","DDDDDD","A6B727","DF5327","FE9E00","418AB3","D7D447","818183","F59E00","B2B2B2"],["Berlin","windowText","window","9D360E","E7E6E6","F09415","C1B56B","4BAF73","5AA6C0","D17DF9","FA7E5C","FFAE3E","FCC77E"],["Celestial","windowText","window","18276C","EBEBEB","AC3EC1","477BD1","46B298","90BA4C","DD9D31","E25247","C573D2","CCAEE8"],["Circuit","windowText","window","134770","82FFFF","9ACD4C","FAA93A","D35940","B258D3","63A0CC","8AC4A7","B8FA56","7AF8CC"],["Damask","windowText","window","2A5B7F","ABDAFC","9EC544","50BEA3","4A9CCC","9A66CA","C54F71","DE9C3C","6BA9DA","A0BCD3"],["Depth","windowText","window","455F51","94D7E4","41AEBD","97E9D5","A2CF49","608F3D","F4DE3A","FCB11C","FBCA98","D3B86D"],["Dividend","windowText","window","3D3D3D","EBEBEB","4D1434","903163","B2324B","969FA7","66B1CE","40619D","828282","A5A5A5"],["Droplet","windowText","window","355071","AABED7","2FA3EE","4BCAAD","86C157","D99C3F","CE6633","A35DD1","56BCFE","97C5E3"],["Facet","windowText","window","2C3C43","EBEBEB","90C226","54A021","E6B91E","E76618","C42F1A","918655","99CA3C","B9D181"],["Frame","000000","FFFFFF","545454","BFBFBF","40BAD2","FAB900","90BB23","EE7008","1AB39F","D5393D","90BB23","EE7008"],["Gallery","windowText","window","454545","DFDBD5","B71E42","DE478E","BC72F0","795FAF","586EA6","6892A0","FA2B5C","BC658E"],["Integral","windowText","window","335B74","DFE3E5","1CADE4","2683C6","27CED7","42BA97","3E8853","62A39F","6B9F25","B26B02"],["Ion Boardroom","windowText","window","3B3059","EBEBEB","B31166","E33D6F","E45F3C","E9943A","9B6BF2","D53DD0","8F8F8F","A5A5A5"],["Ion","windowText","window","1E5155","EBEBEB","B01513","EA6312","E6B729","6AAC90","54849A","9E5E9B","58C1BA","9DFFCB"],["Madison","windowText","window","1F2D29","C5FAEB","A1D68B","5EC795","4DADCF","CDB756","E29C36","8EC0C1","6D9D9B","6D8583"],["Main Event","windowText","window","424242","C8C8C8","B80E0F","A6987D","7F9A71","64969F","9B75B2","80737A","F21213","B6A394"],["Mesh","windowText","window","363D46","EBEBEB","6F6F6F","BFBFA5","DCD084","E7BF5F","E9A039","CF7133","F28943","F1B76C"],["Metropolitan","windowText","window","162F33","EAF0E0","50B4C8","A8B97F","9B9256","657689","7A855D","84AC9D","2370CD","877589"],["Organic","windowText","window","212121","DADADA","83992A","3C9770","44709D","A23C33","D97828","DEB340","A8BF4D","B4CA80"],["Parallax","windowText","window","212121","CDD0D1","30ACEC","80C34F","E29D3E","D64A3B","D64787","A666E1","3085ED","82B6F4"],["Parcel","000000","FFFFFF","4A5356","E8E3CE","F6A21D","9BAFB5","C96731","9CA383","87795D","A0988C","00B0F0","738F97"],["Quotable","windowText","window","212121","636363","00C6BB","6FEBA0","B6DF5E","EFB251","EF755F","ED515C","8F8F8F","A5A5A5"],["Retrospect","000000","window","637052","CCDDEA","E48312","BD582C","865640","9B8357","C2BC80","94A088","2998E3","8C8C8C"],["Savon","windowText","window","1485A4","E3DED1","1CADE4","2683C6","27CED7","42BA97","3E8853","62A39F","F49100","739D9B"],["Slate","windowText","window","212123","DADADA","BC451B","D3BA68","BB8640","AD9277","A55A43","AD9D7B","E98052","F4B69B"],["Slice","windowText","window","146194","76DBF4","052F61","A50E82","14967C","6A9E1F","E87D37","C62324","0D2E46","356A95"],["Vapor Trail","windowText","window","454545","DADADA","DF2E28","FE801A","E9BF35","81BB42","32C7A9","4A9BDC","F0532B","F38B53"],["View","000000","FFFFFF","46464A","D6D3CC","6F6F74","92A9B9","A7B789","B9A489","8D6374","9B7362","67AABF","ABAFA5"],["Wisp","windowText","window","766F54","E3EACF","A53010","DE7E18","9F8351","728653","92AA4C","6AAC91","FB4A18","FB9318"],["Wood Type","windowText","window","696464","E9E5DC","D34817","9B2D1F","A28E6A","956251","918485","855D5D","CC9900","96A9A9"]],BuiltInFontSchemes=[["Office","Calibri Light","Calibri"],["Office 2013-2022","Calibri Light","Calibri"],["Office 2007-2010","Calibri Light","Calibri"],["Grayscale","Calibri Light","Calibri"],["Atlas","Calibri Light","Rockwell"],["Banded","Corbel","Corbel"],["Basis","Corbel","Corbel"],["Berlin","Trebuchet MS","Trebuchet MS"],["Celestial","Calibri Light","Calibri"],["Circuit","Tw Cen MT","Tw Cen MT"],["Damask","Bookman Old Style","Rockwell"],["Depth","Corbel","Corbel"],["Madison","Arial","Arial"],["Main Event","Impact","Impact"],["Mesh","Century Gothic","Century Gothic"],["Metropolitan","Calibri Light","Calibri Light"],["Organic","Garamond","Garamond"],["Parallax","Corbel","Corbel"],["Parcel","Gill Sans MT","Gill Sans MT"],["Quotable","Century Gothic","Century Gothic"],["Retrospect","Calibri Light","Calibri"],["Savon","Century Gothic","Century Gothic"],["Slate","Calisto MT","Calisto MT"],["Slice","Century Gothic","Century Gothic"],["Vapor Trail","Century Gothic","Century Gothic"],["View","Century Schoolbook","Century Schoolbook"],["Wisp","Century Gothic","Century Gothic"],["Wood Type","Rockwell Condensed","Rockwell"]],BuiltInThemes=[["Office","Office","Office"],["2013-2022","Office 2013-2022","Office 2013-2022"],["Atlas","Atlas","Atlas"],["Banded","Banded","Banded"],["Basis","Basis","Basis"],["Berlin","Berlin","Berlin"],["Celestial","Celestial","Celestial"],["Circuit","Circuit","Circuit"],["Damask","Damask","Damask"],["Depth","Depth","Depth"],["Dividend","Dividend","Dividend"],["Droplet","Droplet","Droplet"],["Facet","Facet","Facet"],["Frame","Frame","Frame"],["Gallery","Gallery","Gallery"],["Grayscale","Grayscale","Grayscale"],["Integral","Integral","Integral"],["Ion Boardroom","Ion Boardroom","Ion Boardroom"],["Ion","Ion","Ion"],["Madison","Madison","Madison"],["Main Event","Main Event","Main Event"],["Mesh","Mesh","Mesh"],["Metropolitan","Metropolitan","Metropolitan"],["Organic","Organic","Organic"],["Parallax","Parallax","Parallax"],["Parcel","Parcel","Parcel"],["Quotable","Quotable","Quotable"],["Retrospect","Retrospect","Retrospect"],["Savon","Savon","Savon"],["Slate","Slate","Slate"],["Slice","Slice","Slice"],["Vapor Trail","Vapor Trail","Vapor Trail"],["View","View","View"],["Wisp","Wisp","Wisp"],["Wood Type","Wood Type","Wood Type"],["Office 2007-2010","Office 2007-2010","Office 2007-2010"]],ERROR_MESSAGE_READONLY="Themes is readonly. To make modifications create a new DocsThemes instance.",defaultColorMap={[SchemeColors.f$.Bg1]:"lt1",[SchemeColors.f$.Bg2]:"lt2",[SchemeColors.f$.Tx1]:"dk1",[SchemeColors.f$.Tx2]:"dk2",[SchemeColors.f$.Accent1]:"accent1",[SchemeColors.f$.Accent2]:"accent2",[SchemeColors.f$.Accent3]:"accent3",[SchemeColors.f$.Accent4]:"accent4",[SchemeColors.f$.Accent5]:"accent5",[SchemeColors.f$.Accent6]:"accent6",[SchemeColors.f$.Hlink]:"hlink",[SchemeColors.f$.FolHlink]:"folHlink"},DEFAULT_FONT_SCHEME_ARRAY=["Office","Calibri Light","Calibri"],generateColorSchemesFromArray=colorSchemes=>{const retValue={};for(let i=0;i<colorSchemes.length;i++){const colorScheme=colorSchemes[i],name=colorScheme[0],value={};value.name=name,value.dk1=colorScheme[1]?(0,AdjustedColor.Sy)(colorScheme[1]):null,value.lt1=colorScheme[2]?(0,AdjustedColor.Sy)(colorScheme[2]):null,value.dk2=colorScheme[3]?(0,AdjustedColor.Sy)(colorScheme[3]):null,value.lt2=colorScheme[4]?(0,AdjustedColor.Sy)(colorScheme[4]):null,value.accent1=colorScheme[5]?(0,AdjustedColor.Sy)(colorScheme[5]):null,value.accent2=colorScheme[6]?(0,AdjustedColor.Sy)(colorScheme[6]):null,value.accent3=colorScheme[7]?(0,AdjustedColor.Sy)(colorScheme[7]):null,value.accent4=colorScheme[8]?(0,AdjustedColor.Sy)(colorScheme[8]):null,value.accent5=colorScheme[9]?(0,AdjustedColor.Sy)(colorScheme[9]):null,value.accent6=colorScheme[10]?(0,AdjustedColor.Sy)(colorScheme[10]):null,value.hlink=colorScheme[11]?(0,AdjustedColor.Sy)(colorScheme[11]):null,value.folHlink=colorScheme[12]?(0,AdjustedColor.Sy)(colorScheme[12]):null,retValue[name]=value}return retValue},generateFontSchemesFromArray=fontSchemes=>{const retValue={};for(let i=0;i<fontSchemes.length;i++){const fontScheme=fontSchemes[i],name=fontScheme[0],value={};value.name=name,value.majorFont=fontScheme[1]??DEFAULT_FONT_SCHEME_ARRAY[1],value.minorFont=fontScheme[2]??DEFAULT_FONT_SCHEME_ARRAY[2],retValue[name]=value}return retValue},DEFAULT_COLOR_SCHEMES=generateColorSchemesFromArray([["Office","windowText","window","44546A","E7E6E6","4472C4","ED7D31","A5A5A5","FFC000","5B9BD5","70AD47","0563C1","954F72"]]),DEFAULT_FONT_SCHEMES=generateFontSchemesFromArray([DEFAULT_FONT_SCHEME_ARRAY]),DEFAULT_THEME_VALUES_name="Office";DEFAULT_COLOR_SCHEMES.Office,DEFAULT_FONT_SCHEMES.Office;class ColorScheme{constructor(override={},delegate=null){this._overrides={},this._delegate=delegate;const keys=Object.keys(override);if(0===keys.length)return null;for(const key of keys)this._overrides[key]="name"===key?override[key]:(0,AdjustedColor.pT)(override[key])}_value(field){return this._overrides&&null!==this._overrides[field]&&void 0!==this._overrides[field]?this._overrides[field]:this._delegate?.[field]}get name(){return this._value("name")}get dk1(){return this._value("dk1")}get lt1(){return this._value("lt1")}get dk2(){return this._value("dk2")}get lt2(){return this._value("lt2")}get accent1(){return this._value("accent1")}get accent2(){return this._value("accent2")}get accent3(){return this._value("accent3")}get accent4(){return this._value("accent4")}get accent5(){return this._value("accent5")}get accent6(){return this._value("accent6")}get hlink(){return this._value("hlink")}get folHlink(){return this._value("folHlink")}toJSON(){const json={},keys=Object.keys(this._overrides);if(0===keys.length)return json;for(const key of keys)json[key]=this._overrides[key].toString();return json}}class FontScheme{constructor(overrides={},delegate=null){this._overrides={},this._delegate=delegate;const keys=Object.keys(overrides);if(0===keys.length)return null;for(const key of keys)"string"==typeof overrides[key]&&(this._overrides[key]=overrides[key])}_value(field){return this._overrides&&null!==this._overrides[field]&&void 0!==this._overrides[field]?this._overrides[field]:this._delegate?.[field]}get name(){return this._value("name")}get majorFont(){return this._value("majorFont")}get minorFont(){return this._value("minorFont")}toJSON(){const json={},keys=Object.keys(this._overrides);if(0===keys.length)return json;for(const key of keys)json[key]=this._overrides[key];return json}}class DocTheme{_cacheColors=new Map;constructor(override={},delegate=null,builtIn=null){if(!delegate&&override?.name&&(delegate=DEFAULT_DOC_THEMES.getTheme(override?.name)),delegate||(delegate=DEFAULT_DOC_THEMES.getTheme(DEFAULT_THEME_VALUES_name)),this._name=override?.name??delegate?.name,!this._name)throw new Error("DocTheme must have a name");this._builtInID=builtIn,this._delegate=delegate,this._colorScheme=new ColorScheme(override?.colorScheme,this._delegate?.colorScheme),this._fontScheme=new FontScheme(override?.fontScheme,this._delegate?.fontScheme),this._colorMap=defaultColorMap;const _self=this;this._schemeLookup=schemeKey=>{let retValue=_self._cacheColors[schemeKey];if(retValue)return retValue;let lookupKey="folhlink"===schemeKey?"folHlink":schemeKey;const mappedKey=_self._colorMap[lookupKey]??lookupKey;lookupKey="folhlink"===mappedKey?"folHlink":mappedKey;const colorKey=_self.colorScheme[mappedKey];return retValue=new AdjustedColor.GR(colorKey).toRGBA(),_self._cacheColors[schemeKey]=retValue,retValue}}get name(){return this._name??this._delegate?.name??null}get builtInID(){return this._builtInID??null}isCustom(){return null!==this._builtInID&&void 0!==this._builtInID}get colorScheme(){return this._colorScheme}get fontScheme(){return this._fontScheme}schemeLookup(){return this._schemeLookup}parseColor(str){return(0,AdjustedColor.Sy)(str,this._schemeLookup)}toJSON(){const json={},jsonColorScheme=this._colorScheme.toJSON();jsonColorScheme&&Object.keys(jsonColorScheme).length>0&&(json.colorScheme=jsonColorScheme);const jsonFontScheme=this._fontScheme.toJSON();return jsonFontScheme&&Object.keys(jsonFontScheme).length>0&&(json.fontScheme=jsonFontScheme),!this._name||"Office"===this._name&&0===Object.keys(json).length||(json.name=this._name),json}}class DocThemes{constructor(_json=null,isReadOnly=!1){this._initializeBuiltIns(),this._isReadOnly=isReadOnly,this._customMap=new Map,this._defaultTheme=this.getTheme("Office")}_initializeBuiltIns(){const builtIns=generateThemesValuesFromArray(BuiltInThemes,generateColorSchemesFromArray(BuiltInColorSchemes),generateFontSchemesFromArray(BuiltInFontSchemes));this._builtInsMap=new Map;for(let i=0;i<builtIns.length;i++){const theme=new DocTheme(null,builtIns[i],i+1);this._builtInsMap.set(theme.name.toLowerCase(),theme)}}getDefaultTheme(){return this._defaultTheme}setDefaultTheme(theme){if(this._isReadOnly)throw new Error(ERROR_MESSAGE_READONLY);if(!theme)throw new Error("Theme cannot be null.");const retValue=this.getDefaultTheme();return this.getTheme(theme.name)||this.setCustomTheme(theme),this._defaultTheme=theme,retValue}getTheme(name){name=name.toLowerCase();const retValue=this._customMap.get(name);return retValue||(this._builtInsMap.get(name)??null)}getThemes(type=GetThemeType.All){let asMap=new Map;return type!==GetThemeType.BuiltIn&&type!==GetThemeType.All||this._builtInsMap.forEach(((value,key)=>asMap.set(key,value))),type!==GetThemeType.Custom&&type!==GetThemeType.All||this._customMap.forEach(((value,key)=>asMap.set(key,value))),asMap}setCustomTheme(theme){if(this._isReadOnly)throw new Error(ERROR_MESSAGE_READONLY);const name=theme.name.toLowerCase(),retValue=this._customMap.get(name);return this._customMap.set(name,theme),retValue??null}deleteCustomTheme(theme){if(this._isReadOnly)throw new Error(ERROR_MESSAGE_READONLY);let key=null;key="string"==typeof theme?theme.toLowerCase():theme.name?.toLowerCase();const retValue=this._customMap.get(key);return this._customMap.delete(key),retValue??null}toJSON(){return[]}fromJSON(_json){return null}}const generateThemesValuesFromArray=(themes,colorSchemes,fontSchemes)=>{const retValue=[];for(let i=0;i<themes.length;i++){const theme=themes[i],name=theme[0],colorScheme=colorSchemes[theme[1]]??DEFAULT_COLOR_SCHEMES[0],fontScheme=fontSchemes[theme[2]]??DEFAULT_FONT_SCHEMES[0];retValue.push({name,colorScheme,fontScheme})}return retValue},sortDocThemes=themes=>{const retValue=[...themes];return retValue.sort(((a,b)=>CommonUtils.$K(a.builtInID)&&!CommonUtils.$K(b.builtInID)?1:!CommonUtils.$K(a.builtInID)&&CommonUtils.$K(b.builtInID)?-1:CommonUtils.$K(a.builtInID)&&CommonUtils.$K(b.builtInID)?a.builtInID-b.builtInID:a.name.localeCompare(b.name))),retValue},DEFAULT_DOC_THEMES=new DocThemes(null,!0)}}]);