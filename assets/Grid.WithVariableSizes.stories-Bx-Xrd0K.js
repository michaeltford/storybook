import{j as o}from"./index-DnbSW_dr.js";import{o as i,v as d}from"./index-quj31aQ2.js";import"./iframe-CFX7S7Ts.js";import"./index-CrMj5-ZH.js";import"./client-BUjZUdG5.js";const l=e=>{const{style:n,key:t,...a}=e,s=e.range;return o.jsx(d,{...a,style:{...n,background:`${s.colStart%4===0?"rgba(30, 167, 253, 0.1)":s.rowStart%3===0?"#eee":"transparent"}`},value:`${e.range.rowStart}:${e.range.colStart}`},t)},u=e=>{const{...n}=e;return o.jsx("div",{className:"storybook-container",children:o.jsx(i,{...n,cellRenderer:l,getColumnWidth:t=>t%4===0?180:60,getRowHeight:t=>t%3===0?60:20})})},r=u.bind({});r.args={columnCount:200,rowCount:200};r.storyName="with Variable Sizes";const h={title:"Grid",component:r,parameters:{GridWithVariableSizes:{sort:"requiredFirst"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <Grid {...rest} cellRenderer={sharedCellRenderer} getColumnWidth={(index: number): number => {
      if (index % 4 === 0) return 180;
      return 60;
    }} getRowHeight={(index: number): number => {
      if (index % 3 === 0) return 60;
      return 20;
    }} />
    </div>;
}`,...r.parameters?.docs?.source}}};const x=["GridWithVariableSizes"];export{r as GridWithVariableSizes,x as __namedExportsOrder,h as default};
