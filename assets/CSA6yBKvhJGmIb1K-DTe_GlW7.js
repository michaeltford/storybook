import{Z as J}from"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./iframe-CRIo4XTL.js";/**
 * @license @sheetxl/studio-mui - Studio - Spreadsheet UI built with SheetXL SDK using React & MUI. - v0.3.20
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */const U=async(p,l)=>{const u=await p.toJSON(),g=l?.whiteSpace??0;let b;l?.beforeWrite?.(p,u),b=g===0?JSON.stringify(u):function(s,n=2){const r=[];function i(o){const e=n*o;return r[e]===void 0&&(r[e]=" ".repeat(e)),r[e]}return function o(e,f,a,B){if(e==null||typeof e!="object")return JSON.stringify(e);const m=i(f),A=i(f+1);if(Array.isArray(e)){const c=e.length;if(c===0)return"[]";if(a!==0)return JSON.stringify(e);let y=`[
`;for(let h=0;h<c;h++)y+=A+o(e[h],f+1,a+1,!0),h<c-1&&(y+=`,
`);return y+=`
`+m+"]",y}const d=Object.keys(e),O=d.length;if(O===0)return"{}";if(!(a<2))return JSON.stringify(e);let S=`{
`;B||(a=0);for(let c=0;c<O;c++){const y=d[c];S+=A+JSON.stringify(y)+": "+o(e[y],f+1,a,!1),c<O-1&&(S+=`,
`)}return S+=`
`+m+"}",S}(s,0,0,!1)}(u,g);let w=new TextEncoder().encode(b).buffer;const t=l?.compress??!0;return t&&(w=await async function(s,n="gzip"){let r;s instanceof SharedArrayBuffer?(r=new ArrayBuffer(s.byteLength),new Uint8Array(r).set(new Uint8Array(s))):r=s;const i=new ReadableStream({start(f){f.enqueue(r),f.close()}}),o=new CompressionStream(n),e=i.pipeThrough(o);return(await new Response(e).blob()).arrayBuffer()}(w,typeof t=="string"?t:void 0)),w},j=async(p,l)=>{let u=p;(function(t){if(t.byteLength<4)return!1;const s=new Uint8Array(t),n={gzip:[31,139],zip:[80,75,3,4],bz2:[66,90,104],br:[206,178,207,129]},r=Object.keys(n);for(let i=0;i<r.length;i++){const o=r[i],e=n[o];let f=!0;for(let a=0;a<e.length;a++)if(s[a]!==e[a]){f=!1;break}if(f)return o}return!1})(u)&&(u=await async function(t,s="gzip"){let n;t instanceof SharedArrayBuffer?(n=new ArrayBuffer(t.byteLength),new Uint8Array(n).set(new Uint8Array(t))):n=t;const r=new Blob([n]).stream(),i=new DecompressionStream(s),o=r.pipeThrough(i);return(await new Response(o).blob()).arrayBuffer()}(u));let g=new TextDecoder().decode(u);const b=JSON.parse(g),w={...l?.constructorOptions??{},json:b};return new J(w)};export{j as fromBufferJSON,U as toBufferJSON};
