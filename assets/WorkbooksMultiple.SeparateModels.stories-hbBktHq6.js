import{j as e}from"./index-J-Hv9Xln.js";import{w as s}from"./index-NVek8bTy.js";import"./iframe-CBk8unIv.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CMiH3ff9.js";import"./index-DvhsF04y.js";import"./client-vjV3QKWK.js";import"./index-ZiyYtj3X.js";import"./index--CXhSu_I.js";import"./TextField-DhMfhqoy.js";import"./Tooltip-BpPbRQQ7.js";const p=r=>{const{workbook:o,...i}=r,l=()=>e.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx(s,{style:{flex:"1"},workbook:o,...i}),e.jsxs("div",{style:{flex:"none",width:"100%",display:"flex",alignItems:"center",padding:"6px 4px"},children:[e.jsx("div",{style:{flex:"none",paddingRight:"10px"},children:"We have two separate models:"}),e.jsx("input",{style:{flex:"1 1 100%"},name:"input-copy",defaultValue:"You can copy/paste text here but this is just for demoing..."}),e.jsx("div",{style:{flex:"1 1 50%"}})]}),e.jsx(s,{style:{flex:"1"},workbook:o})]});return e.jsx(l,{})},t=p.bind({});t.storyName="Separate Models";const g={title:"Workbook/Multiple/Separate Models",component:t};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook,
    ...rest
  } = props as any;
  const App = () => {
    return <div style={{
      // We want to take full area
      width: "100%",
      height: "100%",
      minHeight: "400px",
      position: "relative",
      display: "flex",
      flexDirection: 'column'
    }}>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} {...rest} />
        <div style={{
        flex: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '6px 4px'
      }}>
          <div style={{
          flex: 'none',
          paddingRight: '10px'
        }}>We have two separate models:</div>
          <input style={{
          flex: '1 1 100%'
        }} name="input-copy" defaultValue={"You can copy/paste text here but this is just for demoing..."} />
          <div style={{
          flex: '1 1 50%'
        }} />
        </div>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} />
      </div>;
  };
  return <App />;
}`,...t.parameters?.docs?.source}}};const v=["multipleWorkbooksSeparateModels"];export{v as __namedExportsOrder,g as default,t as multipleWorkbooksSeparateModels};
