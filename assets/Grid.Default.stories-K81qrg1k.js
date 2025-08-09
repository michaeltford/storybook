import{j as r}from"./index-DnbSW_dr.js";import{O as t}from"./index-quj31aQ2.js";import"./RelaxedChangeTextField-CSwWidTQ.js";import{s as i}from"./SimpleCellRenderer-CI5X5_Bq.js";import"./iframe-CFX7S7Ts.js";import"./index-CrMj5-ZH.js";import"./client-BUjZUdG5.js";import"./index-BFBoYvJH.js";import"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import"./index-Cd6ACGKX.js";import"./index-D0W7bcSr.js";import"./TextField-Cy8kN4Kh.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const b={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
