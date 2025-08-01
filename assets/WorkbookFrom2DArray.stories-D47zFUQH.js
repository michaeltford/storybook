import{j as u}from"./index-BfyssYko.js";import{r as a}from"./iframe-CRIo4XTL.js";import{Z as i,J as p}from"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import{n as w}from"./index-D4CkGHfr.js";import"./index-BIK-qLz5.js";import"./client-DAipKpd7.js";import"./TextField-CjtT8Vi0.js";import"./Tooltip-CtWaulHw.js";const d=m=>{const{maxColumns:t,maxRows:s,...l}=m,k=a.useMemo(()=>{const e=new i({createSheetCallback:r=>new p({...r,maxRows:s,maxColumns:t})});return e.getSelectedSheet().getRange("A1:C3").setValues([[1,2,3],[4,5,6],[7,8,9]]),e},[s,t]),b={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"},n=a.useRef(null);return u.jsx(w,{sx:b,ref:n,onElementLoad:e=>{const r=n.current,c=e.source;r.getWorkbook(),c.getWorkbook()},...l,workbook:k,title:"From 2D Array"})},o=d.bind({});o.args={maxRows:100,maxColumns:20};o.storyName="From 2D Array";const S={title:"Models/From 2D Array",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    ...rest
  } = props as any;

  /*
   * Create a simple workbook. Wrap in a memo so that it is only created once.
   */
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook({
      createSheetCallback: (options: ISheet.ConstructorOptions) => {
        return new Sheet({
          ...options,
          maxRows,
          maxColumns
        });
      }
    });
    wb.getSelectedSheet().getRange('A1:C3').setValues([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    return wb;
  }, [maxRows, maxColumns]);
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%',
    minHeight: "460px" // arbitrary min height to layout nicely.
  };

  // Note used but for illustration purposes.
  const refIWorkbookElement = useRef<IWorkbookElement>(null);
  return <StandaloneWorkbook sx={style} ref={refIWorkbookElement} onElementLoad={(e: WorkbookLoadEvent) => {
    // The on load source has the workbookElement and so does the ref.
    // From a workbook element you can
    const wbElement1 = refIWorkbookElement.current;
    const wbElement2 = e.source;
    const _wb1 = wbElement1.getWorkbook();
    const _wb2 = wbElement2.getWorkbook();
  }} {...rest} workbook={workbook} title='From 2D Array' />;
}`,...o.parameters?.docs?.source}}};const C=["WorkbookFrom2DArray"];export{o as WorkbookFrom2DArray,C as __namedExportsOrder,S as default};
