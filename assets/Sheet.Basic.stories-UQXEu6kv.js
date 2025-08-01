import{j as p}from"./index-BfyssYko.js";import{r as l}from"./iframe-CRIo4XTL.js";import{J as u}from"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import{f as s}from"./index-EmvSMxOY.js";import"./index-BIK-qLz5.js";import"./index-B3NY9tdU.js";import"./index-CyaePXdl.js";import"./client-DAipKpd7.js";import"./index-6FFVDUpU.js";const d=o=>{const{maxColumns:r,maxRows:t,showRowHeaders:a,showColumnHeaders:m,...n}=o,[i]=l.useState(()=>new u({maxColumns:r,maxRows:t}));return p.jsx(s,{style:{minHeight:"100%",border:"blue solid 2px",borderRadius:"8px",flex:"1"},sheet:i,showRowHeaders:a,showColumnHeaders:m,...n})},e=d.bind({});e.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0};e.storyName="Base";const b={title:"Sheet",component:s};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
