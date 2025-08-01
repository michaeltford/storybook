import{j as r}from"./index-BfyssYko.js";import{r as t}from"./iframe-CRIo4XTL.js";import{v as y,w as g,o as v}from"./index-6FFVDUpU.js";import"./index-BIK-qLz5.js";import"./client-DAipKpd7.js";const C=a=>{const{rowCount:o,...l}=a,s=t.useRef(null),[c,i]=t.useState(()=>({cell:{colIndex:2,rowIndex:2},ranges:[{colStart:2,rowStart:2,colEnd:3,rowEnd:20}]})),d=t.useCallback(e=>{const{style:S,key:m,...w}=e;return r.jsx(y,{...w,style:{...S,background:`rgba(232, 246, 255, ${e.range.rowStart/o})`},value:`${e.range.rowStart}:${e.range.colStart}`},m)},[o]),{overlay:u,...p}=g({selection:c,onSelectionChange:e=>i(e),gridRef:s});return r.jsx("div",{className:"storybook-container",children:r.jsx(v,{...l,rowCount:o,ref:s,cellRenderer:d,onPointerDown:e=>{p.onPointerDown(e)},overlays:[u]})})},n=C.bind({});n.args={columnCount:200,rowCount:1e5};n.storyName="with Selection";const E={title:"Grid",component:n,parameters:{controls:{sort:"requiredFirst"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [selection, setSelection] = useState<SelectionCoords>(() => {
    return {
      cell: {
        colIndex: 2,
        rowIndex: 2
      },
      ranges: [{
        colStart: 2,
        rowStart: 2,
        colEnd: 3,
        rowEnd: 20
      }]
    };
  });
  const cellRenderer = useCallback((props: CellRendererProps) => {
    const {
      style: propStyle,
      key,
      ...rest
    } = props;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      // We are making the background color a percent of the rowcount base on rowIndex
      background: \`rgba(232, 246, 255, \${props.range.rowStart / rowCount})\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [rowCount]);
  const {
    // commands: commandsSelection,
    overlay: overlaySelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    selection,
    onSelectionChange: (selection: SelectionCoords) => setSelection(selection),
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} rowCount={rowCount} ref={gridRef} cellRenderer={cellRenderer}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      selectionProps.onPointerDown(e);
    }} overlays={[overlaySelection]} />
    </div>;
}`,...n.parameters?.docs?.source}}};const P=["GridWithSelection"];export{n as GridWithSelection,P as __namedExportsOrder,E as default};
