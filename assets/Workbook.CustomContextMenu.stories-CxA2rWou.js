import{j as t}from"./index-DnbSW_dr.js";import{U as e}from"./index-B7DS8934.js";import{B as n}from"./TextField-Cy8kN4Kh.js";import"./iframe-CFX7S7Ts.js";import"./index-CrMj5-ZH.js";import"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import"./client-BUjZUdG5.js";import"./Tooltip-BRziopUZ.js";const s=()=>{const r=()=>t.jsx(n,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:t.jsx(e,{sx:{flex:"1 1 100%"}})});return t.jsx(r,{})},o=s.bind({});o.storyName="Custom Context Menu";o.args={};const d={title:"Workbook/Custom Context Menu",component:e,tags:["experimental","draft","!dev"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
        <Studio sx={{
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
