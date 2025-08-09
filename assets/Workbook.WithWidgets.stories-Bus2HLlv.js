import{j as e}from"./index-DnbSW_dr.js";import{r as a}from"./iframe-CFX7S7Ts.js";import{U as g,F as x,C as k}from"./index-B7DS8934.js";import{B as d,R as m}from"./RelaxedChangeTextField-CSwWidTQ.js";import{B as u,P as p}from"./TextField-Cy8kN4Kh.js";import"./index-CrMj5-ZH.js";import"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import"./client-BUjZUdG5.js";import"./Tooltip-BRziopUZ.js";import"./index-BFBoYvJH.js";import"./index-Cd6ACGKX.js";import"./index-D0W7bcSr.js";import"./index-quj31aQ2.js";const b=()=>{const[n,c]=a.useState(null),i=a.useRef(null);return e.jsxs(u,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(p,{sx:{flex:"0",display:"flex",alignItems:"center",flexDirection:"row",m:.5,px:2,py:1,gap:2,rowGap:1},children:[e.jsx(d,{workbook:n,refIWorkbookElement:i,createWidget:o=>{const{range:t}=o,r=t?.getCells()[0][0];return e.jsx(m,{sx:{width:"200px",...r?.getStyle().getFill().toCSS()},size:"small",InputProps:{inputProps:{sx:{paddingTop:"3.5px",paddingBottom:"3.5px",color:r?.getStyle().getFont().getFill().toCSS()}}},disabled:t?.isInvalid()||!r?.isEditAllowed(),value:r?.toText(),onChange:s=>{t.setValue(s.target.value,{autoFit:!0,description:`Type '${s.target.value}' from Widget`})}})}}),e.jsx(d,{workbook:n,refIWorkbookElement:i,createWidget:({range:o})=>{const t=o?.getCells()[0][0];return e.jsx(x,{disabled:o?.isInvalid()||!t?.isEditAllowed(),control:e.jsx(k,{sx:{padding:"1px",marginRight:"8px"},checked:!!t?.getValue(),onChange:()=>{o.setValue(!t.getValue(),{autoFit:!0,description:"Toggle from Widget"})}}),label:"Is Checked",labelPlacement:"end"})}})]}),e.jsx(p,{sx:{position:"relative",flex:"1",m:.5,display:"flex",alignItems:"stretch"},children:e.jsx(g,{workbook:n,onWorkbookChange:o=>c(o),ref:i,titleProps:{placeHolder:"Untitled Widget Workbook"},sx:{flex:"1 1 100%"}})})]})},l=b.bind({});l.args={};l.storyName="With Widgets";const j={title:"Workbook/With Widgets",component:g};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [workbook, setWorkbook] = useState<IWorkbook>(null);
  // The widgets don't bind to the UI element but this is required for the goto link
  const refIWorkbookElement = useRef<IWorkbookElement>(null);
  return <Box sx={{
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column'
  }}>
      <Paper sx={{
      flex: '0',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      m: 0.5,
      px: 2,
      py: 1,
      gap: 2,
      rowGap: 1
    }}>
        <BoundedWidget workbook={workbook} refIWorkbookElement={refIWorkbookElement} createWidget={(props: BoundedWidgetElementProps) => {
        const {
          range
        } = props;
        const cell: ICell = range?.getCells()[0][0]; // guaranteed to be non null
        return <RelaxedChangeTextField // only fires onChange on enter or blur
        sx={{
          width: '200px',
          ...cell?.getStyle().getFill().toCSS()
        }} size="small" InputProps={{
          inputProps: {
            sx: {
              paddingTop: '3.5px',
              paddingBottom: '3.5px',
              color: cell?.getStyle().getFont().getFill().toCSS()
            }
          }
        }} disabled={range?.isInvalid() || !cell?.isEditAllowed()} value={cell?.toText()} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          range.setValue(event.target.value, {
            autoFit: true,
            description: \`Type '\${event.target.value}' from Widget\`
          });
        }} />;
      }} />
        <BoundedWidget workbook={workbook} refIWorkbookElement={refIWorkbookElement} createWidget={({
        range
      }) => {
        const cell = range?.getCells()[0][0]; // guaranteed to be non null
        // const update = range?.update;
        return <FormControlLabel disabled={range?.isInvalid() || !cell?.isEditAllowed()} control={<Checkbox sx={{
          padding: '1px',
          marginRight: '8px'
        }} checked={!!cell?.getValue()} // truthy check
        onChange={() => {
          range.setValue(!cell.getValue(), {
            autoFit: true,
            description: \`Toggle from Widget\`
          });
        }} />} label="Is Checked" labelPlacement="end" />;
      }} />
      </Paper>
      <Paper sx={{
      position: "relative",
      flex: "1",
      m: 0.5,
      display: 'flex',
      alignItems: 'stretch'
    }}>
        <Studio workbook={workbook} onWorkbookChange={(model: IWorkbook) => setWorkbook(model)} ref={refIWorkbookElement} titleProps={{
        placeHolder: 'Untitled Widget Workbook'
      }} sx={{
        flex: '1 1 100%'
      }} />
      </Paper>
    </Box>;
}`,...l.parameters?.docs?.source}}};const B=["WorkbookAppWithWidgets"];export{l as WorkbookAppWithWidgets,B as __namedExportsOrder,j as default};
