import{j as n}from"./index-DnbSW_dr.js";import{r as d}from"./iframe-CFX7S7Ts.js";import{w as f,o as v}from"./index-quj31aQ2.js";import"./RelaxedChangeTextField-CSwWidTQ.js";import{s as w}from"./SimpleCellRenderer-CI5X5_Bq.js";import"./index-CrMj5-ZH.js";import"./client-BUjZUdG5.js";import"./index-BFBoYvJH.js";import"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import"./index-Cd6ACGKX.js";import"./index-D0W7bcSr.js";import"./TextField-Cy8kN4Kh.js";const C=({left:i,top:s,rowIndex:o,colIndex:r})=>n.jsx("div",{style:{left:i,top:s,position:"absolute",padding:8,background:"white",boxShadow:"0 1px 2px 3px rgba(0,0,0,0.2)"},children:n.jsxs("div",{children:["You selected ",o,": ",r]})}),g=i=>{const{...s}=i,o=d.useRef(null),[r,l]=d.useState(null),{overlay:u,selection:y,...m}=f({gridRef:o});return n.jsxs("div",{className:"storybook-container",children:[n.jsx(v,{...s,ref:o,cellRenderer:w,onContextMenu:e=>{const c=o.current.getViewFromClient(e.clientX,e.clientY),a=o.current.getRelativePointFromClient(e.clientX,e.clientY);if(!c)return;const{rowIndex:p,colIndex:x}=c.getCellCoordsFromClient(e.clientX,e.clientY);l({left:a.x+3,top:a.y+3,rowIndex:p,colIndex:x}),e.preventDefault()},onPointerDown:e=>{l(null),m.onPointerDown(e)},overlays:[u]}),r&&n.jsx(C,{...r})]})},t=g.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Context Menu";const X={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const {
    // commands: commandsSelection,
    overlay: overlaySelection,
    selection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} cellRenderer={sharedCellRenderer}
    // context menu here
    onContextMenu={e => {
      // We get the view
      const view = gridRef.current.getViewFromClient(e.clientX, e.clientY);
      // now we get the offset since we are adding menu as absolute
      const relativePoint = gridRef.current.getRelativePointFromClient(e.clientX, e.clientY);
      if (!view) return;
      // get the coords to display
      const {
        rowIndex,
        colIndex
      } = view.getCellCoordsFromClient(e.clientX, e.clientY);
      setContextMenuPosition({
        left: relativePoint.x + 3,
        // offset by our current border
        top: relativePoint.y + 3,
        rowIndex,
        colIndex
      });
      e.preventDefault();
    }}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      setContextMenuPosition(null); // context menu here, notice it's before we pass to selection
      selectionProps.onPointerDown(e);
    }} overlays={[overlaySelection]} />
      {contextMenuPosition && <ContextMenu {...contextMenuPosition} /> /* note - that this sits outsize of grid */}
    </div>;
}`,...t.parameters?.docs?.source}}};const G=["GridWithContextMenu"];export{t as GridWithContextMenu,G as __namedExportsOrder,X as default};
