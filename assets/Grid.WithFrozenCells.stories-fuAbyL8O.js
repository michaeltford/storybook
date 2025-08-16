import{j as t}from"./index-Xhm29a53.js";import{r as c}from"./iframe-CaYotimM.js";import{w as v,v as P,t as S}from"./index-BXTp2-po.js";import"./index-cworlLnn.js";import"./preload-helper-D9Z9MdNV.js";import"./index-awv0QDyE.js";import"./client-CzTnkZmB.js";const g=i=>{const{freezeTop:o,freezeLeft:n,...p}=i,s=c.useRef(null),{selection:R,overlay:f,...d}=v({gridRef:s}),m=c.useCallback(r=>{const{key:u,style:y,...z}=r,a=r.range;return t.jsx(P,{...z,style:{...y,color:`${a.rowStart<o||a.colStart<n?"blue":void 0}`},value:`${r.range.rowStart}:${r.range.colStart}`},u)},[o,n]),l={pathProps:{stroke:"blue"}};return t.jsx("div",{className:"storybook-container",children:t.jsx(S,{...p,ref:s,cellRenderer:m,freezeTop:o,freezeLeft:n,freezeLeftProps:l,freezeTopProps:l,onPointerDown:r=>{d.onPointerDown(r)},overlays:[f]})})},e=g.bind({});e.args={columnCount:200,rowCount:200,freezeTop:5,freezeLeft:4};e.storyName="with Frozen Cells";const x={title:"Grid",component:e,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
}`,...e.parameters?.docs?.source}}};const h=["GridWithFrozenCells"];export{e as GridWithFrozenCells,h as __namedExportsOrder,x as default};
