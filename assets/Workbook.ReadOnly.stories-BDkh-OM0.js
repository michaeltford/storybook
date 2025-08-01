import{j as n}from"./index-BfyssYko.js";import{n as o}from"./index-D4CkGHfr.js";import{B as r}from"./TextField-CjtT8Vi0.js";import"./iframe-CRIo4XTL.js";import"./index-BIK-qLz5.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./client-DAipKpd7.js";import"./Tooltip-CtWaulHw.js";const s=()=>{const t=()=>n.jsx(r,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:n.jsx(o,{sx:{flex:"1 1 100%"},renderContextMenu:()=>n.jsx(n.Fragment,{}),tabsProps:{renderContextMenu:()=>n.jsx(n.Fragment,{}),readOnly:!0}})});return n.jsx(t,{})},e=s.bind({});e.args={};e.storyName="Disable ContextMenu";const c={title:"Workbook/Disable ContextMenu",component:o};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const App = () => {
    return <Box sx={{
      width: '100%',
      // to layout in storybook
      height: '100%',
      // to layout in storybook
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: '4px'
    }}>
        <StandaloneWorkbook sx={{
        flex: '1 1 100%'
      }} renderContextMenu={() => <></>} tabsProps={{
        renderContextMenu: () => <></>,
        readOnly: true
      }} />
      </Box>;
  };
  return <App />;
}`,...e.parameters?.docs?.source}}};const y=["WorkbookReadOnly"];export{e as WorkbookReadOnly,y as __namedExportsOrder,c as default};
