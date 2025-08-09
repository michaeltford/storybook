import{j as t}from"./index-DnbSW_dr.js";import{r as c}from"./iframe-CFX7S7Ts.js";import{w as v,v as P,o as S}from"./index-quj31aQ2.js";import"./index-CrMj5-ZH.js";import"./client-BUjZUdG5.js";const g=i=>{const{freezeTop:o,freezeLeft:n,...p}=i,s=c.useRef(null),{selection:R,overlay:f,...d}=v({gridRef:s}),u=c.useCallback(r=>{const{key:m,style:y,...z}=r,a=r.range;return t.jsx(P,{...z,style:{...y,color:`${a.rowStart<o||a.colStart<n?"blue":void 0}`},value:`${r.range.rowStart}:${r.range.colStart}`},m)},[o,n]),l={pathProps:{stroke:"blue"}};return t.jsx("div",{className:"storybook-container",children:t.jsx(S,{...p,ref:s,cellRenderer:u,freezeTop:o,freezeLeft:n,freezeLeftProps:l,freezeTopProps:l,onPointerDown:r=>{d.onPointerDown(r)},overlays:[f]})})},e=g.bind({});e.args={columnCount:200,rowCount:200,freezeTop:5,freezeLeft:4};e.storyName="with Frozen Cells";const C={title:"Grid",component:e,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    freezeTop,
    freezeLeft,
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const {
    selection,
    // commands: commandsSelection,
    overlay: overlaySelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  const cellRenderer = useCallback((props: CellRendererProps) => {
    const {
      key,
      style: propStyle,
      ...rest
    } = props;
    const range = props.range;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      color: \`\${range.rowStart < freezeTop || range.colStart < freezeLeft ? 'blue' : undefined}\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [freezeTop, freezeLeft]);
  const freezeDividerProps = {
    pathProps: {
      stroke: 'blue'
    }
  };
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} cellRenderer={cellRenderer} freezeTop={freezeTop} freezeLeft={freezeLeft} freezeLeftProps={freezeDividerProps} freezeTopProps={freezeDividerProps}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      selectionProps.onPointerDown(e);
    }} overlays={[overlaySelection]} />
    </div>;
}`,...e.parameters?.docs?.source}}};const L=["GridWithFrozenCells"];export{e as GridWithFrozenCells,L as __namedExportsOrder,C as default};
