const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BZt2RkqBUWX13O85-BFhlICsc.js","./preload-helper-D9Z9MdNV.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-D9Z9MdNV.js";import{X as u}from"./index-DvhsF04y.js";import"./index-J-Hv9Xln.js";import"./iframe-CBk8unIv.js";import"./index-CMiH3ff9.js";import"./client-vjV3QKWK.js";/**
 * @license @sheetxl/scripting - Scripting - Scripting engine for Macros and formulas; includes TypeScript and EsBuild. - v0.6.6
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */let o=null,i=null,t=null;const w=Object.freeze({compileTypescript:async function(r){if(!(r?.source??null))return null;if(i&&u.deepEqual(i,r))return o;const n=await async function(){if(t)return t;const{TypeScriptCompiler:p}=await c(async()=>{const{TypeScriptCompiler:l}=await import("./BZt2RkqBUWX13O85-BFhlICsc.js");return{TypeScriptCompiler:l}},__vite__mapDeps([0,1]),import.meta.url);return t=new p,t}(),e=await n.compileModule(r);return o=e,i=r,e}});export{w as ScriptingUtils};
