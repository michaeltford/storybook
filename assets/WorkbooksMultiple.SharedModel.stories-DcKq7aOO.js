import{j as e}from"./index-BfyssYko.js";import{Z as n}from"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import{J as s}from"./index-D4CkGHfr.js";import"./iframe-CRIo4XTL.js";import"./index-BIK-qLz5.js";import"./client-DAipKpd7.js";import"./TextField-CjtT8Vi0.js";import"./Tooltip-CtWaulHw.js";const p=r=>{const{workbook:t=new n,...i}=r,l=()=>e.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx(s,{style:{flex:"1"},workbook:t,...i}),e.jsxs("div",{style:{flex:"none",width:"100%",display:"flex",alignItems:"center",padding:"6px 4px"},children:[e.jsx("div",{style:{flex:"none",paddingRight:"10px"},children:"We have one shared model:"}),e.jsx("input",{style:{flex:"1 1 100%"},name:"input-copy",defaultValue:"You can copy/paste text here but this is just for demoing..."}),e.jsx("div",{style:{flex:"1 1 50%"}})]}),e.jsx(s,{style:{flex:"1"},workbook:t})]});return e.jsx(l,{})},o=p.bind({});o.storyName="Shared Models";const y={title:"Workbook/Multiple/Shared Models",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook = new Workbook(),
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
        }}>We have one shared model:</div>
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
}`,...o.parameters?.docs?.source}}};const k=["multipleWorkbooksSharedModel"];export{k as __namedExportsOrder,y as default,o as multipleWorkbooksSharedModel};
