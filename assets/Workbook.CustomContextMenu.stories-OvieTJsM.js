import{j as t}from"./index-BfyssYko.js";import{n as e}from"./index-D4CkGHfr.js";import{B as n}from"./TextField-CjtT8Vi0.js";import"./iframe-CRIo4XTL.js";import"./index-BIK-qLz5.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./client-DAipKpd7.js";import"./Tooltip-CtWaulHw.js";const s=()=>{const r=()=>t.jsx(n,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:t.jsx(e,{sx:{flex:"1 1 100%"}})});return t.jsx(r,{})},o=s.bind({});o.storyName="Custom Context Menu";o.args={};const d={title:"Workbook/Custom Context Menu",component:e,tags:["experimental","draft","!dev"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
      }}
      // insertCommands={{
      //   "customCommand": {
      //     label: "Custom Command",
      //     execute: (context) => {
      //       console.log("Custom Command", context);
      //     },
      //     // when?
      //   }
      // }}
      // insertCommandButtons={{
      //   'toolbar.home.format': {
      //     command: string or OCommand
      //     render: function that returns a widget // default to a commandButton
      //     after: false // before or after entry point. @defaultValue false
      //   }
      // }}
      />
      </Box>;
  };
  return <App />;
}`,...o.parameters?.docs?.source}}};const f=["WorkbookAppCustomContextMenu"];export{o as WorkbookAppCustomContextMenu,f as __namedExportsOrder,d as default};
