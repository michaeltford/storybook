import{j as i}from"./index-DnbSW_dr.js";import{r as p}from"./iframe-CFX7S7Ts.js";import{d as l}from"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import{f as s}from"./index-BFBoYvJH.js";import"./index-CrMj5-ZH.js";import"./index-Cd6ACGKX.js";import"./index-D0W7bcSr.js";import"./client-BUjZUdG5.js";import"./index-quj31aQ2.js";const u=o=>{const{maxColumns:r,maxRows:t,showRowHeaders:a,showColumnHeaders:m,...n}=o,[d]=p.useState(()=>new l({maxColumns:r,maxRows:t}));return i.jsx(s,{style:{minHeight:"100%",border:"blue solid 2px",borderRadius:"8px",flex:"1"},sheet:d,showRowHeaders:a,showColumnHeaders:m,...n})},e=u.bind({});e.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0};e.storyName="Base";const b={title:"Sheet",component:s};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    return new Sheet({
      maxColumns,
      maxRows
    });
  });
  return <SheetElement style={{
    // minHeight: '400px',
    minHeight: '100%',
    border: 'blue solid 2px',
    borderRadius: '8px',
    // note - the scrollbars will overflow. To fix this set the w
    flex: "1"
  }} sheet={sheet} // Required
  showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;
}`,...e.parameters?.docs?.source}}};const g=["BaseSheet"];export{e as BaseSheet,g as __namedExportsOrder,b as default};
