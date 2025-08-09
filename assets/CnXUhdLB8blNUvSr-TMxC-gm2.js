import{O as J}from"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import"./iframe-CFX7S7Ts.js";/**
 * @license @sheetxl/studio-mui - Studio - Spreadsheet UI built with SheetXL SDK using React & MUI. - v0.4.15
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */const z=async(w,l)=>{const u=await w.toJSON(),b=l?.whiteSpace??0;let g;l?.beforeWrite?.(w,u),g=b===0?JSON.stringify(u):function(f,n=2){const r=[];function i(o){const e=n*o;return r[e]===void 0&&(r[e]=" ".repeat(e)),r[e]}return function o(e,a,s,m){if(e==null||typeof e!="object")return JSON.stringify(e);const A=i(a),d=i(a+1);if(Array.isArray(e)){const c=e.length;if(c===0)return"[]";if(s!==0)return JSON.stringify(e);let y=`[
`;for(let h=0;h<c;h++)y+=d+o(e[h],a+1,s+1,!0),h<c-1&&(y+=`,
`);return y+=`
`+A+"]",y}const B=Object.keys(e),O=B.length;if(O===0)return"{}";if(!(s<2))return JSON.stringify(e);let S=`{
`;m||(s=0);for(let c=0;c<O;c++){const y=B[c];S+=d+JSON.stringify(y)+": "+o(e[y],a+1,s,!1),c<O-1&&(S+=`,
`)}return S+=`
`+A+"}",S}(f,0,0,!1)}(u,b);let p=new TextEncoder().encode(g).buffer;const t=l?.compress??!0;return t&&(p=await async function(f,n="gzip"){let r;typeof SharedArrayBuffer<"u"&&f instanceof SharedArrayBuffer?(r=new ArrayBuffer(f.byteLength),new Uint8Array(r).set(new Uint8Array(f))):r=f;const i=new ReadableStream({start(a){a.enqueue(r),a.close()}}),o=new CompressionStream(n),e=i.pipeThrough(o);return(await new Response(e).blob()).arrayBuffer()}(p,typeof t=="string"?t:void 0)),p},U=async(w,l)=>{let u=w;(function(t){if(t.byteLength<4)return!1;const f=new Uint8Array(t),n={gzip:[31,139],zip:[80,75,3,4],bz2:[66,90,104],br:[206,178,207,129]},r=Object.keys(n);for(let i=0;i<r.length;i++){const o=r[i],e=n[o];let a=!0;for(let s=0;s<e.length;s++)if(f[s]!==e[s]){a=!1;break}if(a)return o}return!1})(u)&&(u=await async function(t,f="gzip"){let n;typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer?(n=new ArrayBuffer(t.byteLength),new Uint8Array(n).set(new Uint8Array(t))):n=t;const r=new Blob([n]).stream(),i=new DecompressionStream(f),o=r.pipeThrough(i);return(await new Response(o).blob()).arrayBuffer()}(u));let b=new TextDecoder().decode(u);const g=JSON.parse(b),p={...l?.createWorkbookOptions??{},json:g};return new J(p)};export{U as fromBufferJSON,z as toBufferJSON};
