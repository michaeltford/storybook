import{j as a}from"./index-BfyssYko.js";import{E as m,e as p}from"./index-B3NY9tdU.js";import{o as d}from"./index-6FFVDUpU.js";import"./RelaxedChangeTextField-Cq6sX6ej.js";import{s as u}from"./SimpleCellRenderer-DZgXppjB.js";import"./iframe-CRIo4XTL.js";import"./index-BIK-qLz5.js";import"./index-CyaePXdl.js";import"./client-DAipKpd7.js";import"./index-EmvSMxOY.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./TextField-CjtT8Vi0.js";const c=r=>{const{showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,...b}=r;return a.jsx("div",{className:"storybook-container",children:a.jsx(d,{...b,showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,cellRenderer:u})})},o=c.bind({});o.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};o.storyName="Scrollable Grid";const t=r=>a.jsx(p,{style:{border:"red solid 3px"},...r}),h=({width:r,height:l})=>a.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${l}px`,height:`${l}px`,background:"green",border:"blue solid 2px"}}),e=c.bind({});e.args={createHorizontalScrollbar:t,createVerticalScrollbar:t,createScrollCorner:h,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const v={title:"Scrollable Grid",component:m,parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
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
