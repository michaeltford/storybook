import{j as a}from"./index-J-Hv9Xln.js";import{T as m,t as d}from"./index-DvhsF04y.js";import{c as p}from"./index--CXhSu_I.js";import"./RelaxedChangeTextField-CBdtF1wT.js";import{s as u}from"./SimpleCellRenderer-TpzYKbFh.js";import"./iframe-CBk8unIv.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CMiH3ff9.js";import"./client-vjV3QKWK.js";import"./index-ZiyYtj3X.js";import"./TextField-DhMfhqoy.js";const c=r=>{const{showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,...b}=r;return a.jsx("div",{className:"storybook-container",children:a.jsx(p,{...b,showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,cellRenderer:u})})},o=c.bind({});o.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};o.storyName="Scrollable Grid";const t=r=>a.jsx(d,{style:{border:"red solid 3px"},...r}),h=({width:r,height:l})=>a.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${l}px`,height:`${l}px`,background:"green",border:"blue solid 2px"}}),e=c.bind({});e.args={createHorizontalScrollbar:t,createVerticalScrollbar:t,createScrollCorner:h,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const v={title:"Scrollable Grid",component:m,parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    createHorizontalScrollbar,
    createVerticalScrollbar,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} createHorizontalScrollbar={createHorizontalScrollbar} createVerticalScrollbar={createVerticalScrollbar} createScrollCorner={createScrollCorner} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    createHorizontalScrollbar,
    createVerticalScrollbar,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} createHorizontalScrollbar={createHorizontalScrollbar} createVerticalScrollbar={createVerticalScrollbar} createScrollCorner={createScrollCorner} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const k=["Scrollable","CustomScrollElements"];export{e as CustomScrollElements,o as Scrollable,k as __namedExportsOrder,v as default};
