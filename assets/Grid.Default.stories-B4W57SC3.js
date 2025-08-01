import{j as r}from"./index-BfyssYko.js";import{O as t}from"./index-6FFVDUpU.js";import"./RelaxedChangeTextField-Cq6sX6ej.js";import{s as i}from"./SimpleCellRenderer-DZgXppjB.js";import"./iframe-CRIo4XTL.js";import"./index-BIK-qLz5.js";import"./client-DAipKpd7.js";import"./index-EmvSMxOY.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./index-B3NY9tdU.js";import"./index-CyaePXdl.js";import"./TextField-CjtT8Vi0.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const b={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div style={{
    // For Canvas view we want to take full area
    width: "100%",
    height: "100%",
    display: "flex",
    border: "green solid 1px"
  }}>
      <Grid {...rest} style={{
      // For Docs view we are 400px by 'full width'
      minHeight: "400px",
      position: "relative",
      flex: "1",
      border: "blue solid 1px"
    }} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const g=["DefaultGrid"];export{e as DefaultGrid,g as __namedExportsOrder,b as default};
