import{j as f}from"./index-J-Hv9Xln.js";import{r as b}from"./iframe-CBk8unIv.js";import{g as y,N as o,M as k}from"./index-ZiyYtj3X.js";import{_ as w,O as g}from"./index-NVek8bTy.js";import"./index-CMiH3ff9.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DvhsF04y.js";import"./client-vjV3QKWK.js";import"./index--CXhSu_I.js";import"./TextField-DhMfhqoy.js";import"./Tooltip-BpPbRQQ7.js";const h=`"Hello World", 3.5%, ,$4.25,
 10/23/95,"Hello O'Universe"
,true, -100
July-04`,S=i=>{const{...u}=i,d=b.useMemo(()=>(async()=>{const a=new y;a.setNamed({name:"Off Year",style:{fill:o.Named.Yellow,font:{fill:o.Named.Brown},numberFormat:"Short Date"}}),a.setNamed({name:"Negative Value",style:{fill:o.Named.LtPink,font:{fill:o.Named.DkRed}}});const c={source:new TextEncoder().encode(h).buffer,formatType:"csv",createWorkbookOptions:{styles:a},setValuesOptions:{textParser:{parse:(x,p)=>{const s=p.getCell();let r;if(s.getType()===k.Number){const n=s.toDate();n?n.getFullYear()!==new Date().getFullYear()&&(r={style:{named:"Off Year"}}):s.getValue()<0&&(r={style:{named:"Negative Value"}})}return r}}}},l=await g.read(c),t=l.workbook;return t.getView().setShowFormulaBar(!1),t.getView().setShowTabs(!1),t.getSelectedSheet().setName("CSVData"),t.getSelectedSheet().getUsedRange().autoFit(),l})(),[]),m={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"};return f.jsx(w,{sx:m,...u,workbook:d,title:"From CSV",titleProps:{readOnly:!0},importExportDisabled:!0})},e=S.bind({});e.args={};e.storyName="From CSV";const Y={title:"Models/From CSV",component:e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  /*
   * Example that uses a CSV string to create a workbook.
   * We also create a custom cell styles so we can illustrate
   * setting cell styles based on values.
   */
  const loadResults: Promise<WorkbookHandle> = useMemo(() => {
    // make async for each of use
    const doLoad = async (): Promise<WorkbookHandle> => {
      /**
       * Create a StyleCollection. This is not needed but
       * allows us to create Named Styles that then also appear in the styles menu
       */
      const customStyles: StyleCollection = new StyleCollection();
      customStyles.setNamed({
        name: 'Off Year',
        style: {
          fill: IColor.Named.Yellow,
          font: {
            fill: IColor.Named.Brown
          },
          numberFormat: "Short Date"
        }
      });
      customStyles.setNamed({
        name: 'Negative Value',
        style: {
          fill: IColor.Named.LtPink,
          font: {
            fill: IColor.Named.DkRed
          }
        }
      });

      // For illustration purposes we are are doing to color negative values and dates not from this year with a different color.
      const csvOptions: ReadCSVOptions = {
        source: new TextEncoder().encode(csv).buffer,
        formatType: 'csv',
        createWorkbookOptions: {
          styles: customStyles
        },
        setValuesOptions: {
          textParser: {
            // csv defaults this to true, set to false if every value should remain as text
            parse: (_text: string, context: ICell.IteratorContext): ICell.Modifiers => {
              /* cell is available but will make importing **much** slower */
              const cell: ICell = context.getCell();
              let updateValue: ICell.Modifiers = undefined; // undefined means use default parser; null means clear
              if (cell.getType() === ScalarType.Number) {
                // dates are numbers with special formatting. if toDate return a date object then it is safe to treat it as a date.
                const asDate = cell.toDate();
                if (asDate) {
                  if (asDate.getFullYear() !== new Date().getFullYear()) {
                    updateValue = {
                      style: {
                        named: 'Off Year'
                      }
                    };
                  }
                } else {
                  if (cell.getValue() as number < 0) {
                    // updateValue = Math.abs(preParsed.value as number); // as a value
                    // updateValue = preParsed.createTemporaryCell({ value: 123 }); // as a new cell
                    // updateValue = { style: { fill: IColor.Named.LtPink, font: IColor.Named.DkRed } }; /// as an update that is styled
                    updateValue = {
                      style: {
                        named: 'Negative Value'
                      }
                    }; // as a named style
                  }
                }
              }
              return updateValue;
            }
          }
        }
        // papaParseConfig: {} //ParseConfig // https://www.papaparse.com/docs#config additional options for papa parse.
      };

      // import from array buffer using csv type
      const handle: WorkbookHandle = await WorkbookIO.read(csvOptions);
      const workbook: IWorkbook = handle.workbook;
      ;

      // Since this is just a csv file
      workbook.getView().setShowFormulaBar(false);
      workbook.getView().setShowTabs(false);
      // We just hid the tabs so you won't see it but will still export with this name and if user re-shows tabs from the ui.
      workbook.getSelectedSheet().setName('CSVData'); // set the sheet name
      workbook.getSelectedSheet().getUsedRange().autoFit();
      return handle;
    };
    return doLoad();
  }, []);
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%',
    minHeight: "460px" // arbitrary min height to layout nicely.
  };

  /*
   * For illustration purposes we are setting attribute so that this acts like a 'passive component'.
   */
  return <Studio sx={style} {...rest} workbook={loadResults} title='From CSV' titleProps={{
    readOnly: true
  }} importExportDisabled={true} />;
}`,...e.parameters?.docs?.source}}};const E=["WorkbookFromCSV"];export{e as WorkbookFromCSV,E as __namedExportsOrder,Y as default};
