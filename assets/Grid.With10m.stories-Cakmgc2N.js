import{j as t}from"./index-BfyssYko.js";import{r as d}from"./iframe-CRIo4XTL.js";import{v as i,o as p}from"./index-6FFVDUpU.js";import"./index-BIK-qLz5.js";import"./client-DAipKpd7.js";const m=n=>{const{rowCount:o,...s}=n,a=d.useCallback(e=>{const{key:l,style:c,...u}=e;return t.jsx(i,{...u,style:{...c,background:`rgba(232, 246, 255, ${e.range.rowStart/o})`},value:`${e.range.rowStart}:${e.range.colStart}`},l)},[o]);return t.jsx("div",{className:"storybook-container",children:t.jsx(p,{style:{border:"1px solid grey"},...s,rowCount:o,getColumnWidth:e=>120,cellRenderer:a})})},r=m.bind({});r.args={columnCount:1e6,rowCount:1e6};r.storyName="with 1B Cells";const k={title:"Grid",component:r,parameters:{controls:{sort:"requiredFirst"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    ...rest
  } = props as any;
  const cellRenderer = useCallback((props: CellRendererProps) => {
    const {
      key,
      style: propStyle,
      ...rest
    } = props;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      // We are making the background color a percent of the rowcount base on rowIndex
      background: \`rgba(232, 246, 255, \${props.range.rowStart / rowCount})\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [rowCount]);
  return <div className="storybook-container">
      <Grid style={{
      border: '1px solid grey'
    }} {...rest} rowCount={rowCount} // because we destructured the rowCount for rendering
    getColumnWidth={(index: number): number => {
      return 120; // to be more like google sheets
    }} cellRenderer={cellRenderer} />
    </div>;
}`,...r.parameters?.docs?.source}}};const x=["GridWith10M"];export{r as GridWith10M,x as __namedExportsOrder,k as default};
