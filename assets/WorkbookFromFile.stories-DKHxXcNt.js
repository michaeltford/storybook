import{j as i}from"./index-BfyssYko.js";import{r as c}from"./iframe-CRIo4XTL.js";import{Y as k}from"./index-CyaePXdl.js";import{n as b,q as h}from"./index-D4CkGHfr.js";import{B as f}from"./TextField-CjtT8Vi0.js";import"./index-BIK-qLz5.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./client-DAipKpd7.js";import"./Tooltip-CtWaulHw.js";const x=c.createContext(null),p={didCatch:!1,error:null};class y extends c.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=p}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var t,o,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];(t=(o=this.props).onReset)===null||t===void 0||t.call(o,{args:s,reason:"imperative-api"}),this.setState(p)}}componentDidCatch(e,t){var o,r;(o=(r=this.props).onError)===null||o===void 0||o.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:o}=this.state,{resetKeys:r}=this.props;if(o&&t.error!==null&&g(e.resetKeys,r)){var s,n;(s=(n=this.props).onReset)===null||s===void 0||s.call(n,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(p)}}render(){const{children:e,fallbackRender:t,FallbackComponent:o,fallback:r}=this.props,{didCatch:s,error:n}=this.state;let l=e;if(s){const u={error:n,resetErrorBoundary:this.resetErrorBoundary};if(typeof t=="function")l=t(u);else if(o)l=c.createElement(o,u);else if(r!==void 0)l=r;else throw n}return c.createElement(x.Provider,{value:{didCatch:s,error:n,resetErrorBoundary:this.resetErrorBoundary}},l)}}function g(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return d.length!==e.length||d.some((t,o)=>!Object.is(t,e[o]))}const w=d=>{const{...e}=d,t={source:null},[o,r]=c.useState(null),s=async(l=null)=>{const u=l??await k.openFileDialog(h.getAllReadFormatTypeAsString().join(", "));if(!u)return;const m=await h.read({...t,source:u});if(m===null){r(null);return}r(m)},n={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return i.jsx(y,{fallback:i.jsx("div",{children:"failing at storybook"}),children:i.jsx(f,{sx:{minHeight:"560px",display:"flex",position:"relative"},children:o?i.jsx(i.Fragment,{children:i.jsx(b,{sx:{...n,position:"absolute"},...e,workbook:o})}):i.jsx(f,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...n},children:i.jsx("button",{onClick:()=>s(),children:"Open Workbook"})})})})},a=w.bind({});a.args={};a.storyName="From File";const T={title:"Models/From File",component:a};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: ReadWorkbookOptions = {
    source: null // Will be set when fetching
    // maxColumns: 20,
    // maxRows: 100
  };
  const [workbook, setWorkbook] = useState<WorkbookHandle | Promise<WorkbookHandle>>(null);

  /**
   * This example reads a file from the local filesystem by showing a file input field until
   * a file is selected and then it will show the StandaloneWorkbook widget.
   */
  const openFile = async (input: File | Promise<File> | string = null) => {
    const sourceResolve = input ?? (await CommonUtils.openFileDialog(WorkbookIO.getAllReadFormatTypeAsString().join(', ')));
    if (!sourceResolve) return; // was a cancel
    /*
      The Standalone Workbook will show a loading indicator if a workbook promise is passed.
      Additionally we want to set the title to the name of the file.
    */
    const loadResults: WorkbookHandle = await WorkbookIO.read({
      ...optionsLoad,
      source: sourceResolve
    });
    if (loadResults === null) {
      // cancelled
      setWorkbook(null);
      return;
    }
    setWorkbook(loadResults);
  };
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%'
  };

  /**
   * Show an input control until we select a file, then show the workbook.
   */
  return <ErrorBoundary fallback={<div>failing at storybook</div>}>
    <Box sx={{
      minHeight: "560px",
      // arbitrary min height to layout nicely.
      display: 'flex',
      position: 'relative'
    }}>
    {workbook ? <>
      <StandaloneWorkbook sx={{
          ...style,
          position: 'absolute'
        }} {...rest} workbook={workbook} />
    </> : <Box style={{
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'start',
        ...style
      }}>
        {/* - Traditional file input but we also have a file input utility that easily attaches to any event that provides input choices.
         <input
          style={{
            minWidth: '360px'
          }}
          name: \`from-file\`,
          autoComplete: "off",
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            if (e.target?.files?.length > 0)
              openFile(e.target.files[0]);
          }}
         />
         */}
        <button onClick={() => openFile()}>
          Open Workbook
        </button>
      </Box>}
    </Box>
    </ErrorBoundary>;
}`,...a.parameters?.docs?.source}}};const A=["WorkbookFromFile"];export{a as WorkbookFromFile,A as __namedExportsOrder,T as default};
