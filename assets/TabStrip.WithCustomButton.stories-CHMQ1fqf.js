import{j as a}from"./index-DnbSW_dr.js";import{r}from"./iframe-CFX7S7Ts.js";import{Y as T}from"./index-D0W7bcSr.js";import{s as f}from"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import{F as g}from"./index-BFBoYvJH.js";import"./index-CrMj5-ZH.js";import"./index-Cd6ACGKX.js";import"./client-BUjZUdG5.js";import"./index-quj31aQ2.js";const v=r.memo(r.forwardRef((d,l)=>{const{children:o,style:c,className:m,value:u,editing:b,editable:p,disabled:t,index:n,selectedIndex:e,background:i,activeColor:h,dragging:x,borderColor:I,borderWidth:y,...S}=d;return a.jsx("div",{ref:l,style:{...c,display:"flex",flexDirection:"column",background:e===n?"lightgray":i,minHeight:"0px",fontFamily:"inherit",fontSize:"16px",fontWeight:e===n?"500":"400",lineHeight:"1",letterSpacing:"0px",textTransform:"none",minWidth:"unset",borderBottom:e===n?`${h} solid 2px`:"none",borderLeft:e===n?`${h} solid 2px`:"none",borderRight:e===n?`${h} solid 2px`:"none",borderBottomLeftRadius:e===n?"4px":void 0,borderBottomRightRadius:e===n?"4px":void 0,cursor:x?void 0:"pointer"},...S,children:a.jsx("div",{style:{flex:"1 1 100%",display:"flex",flexDirection:"row"},children:o})})})),C=d=>{const[l,o]=r.useState(0),[c,m]=r.useState(["Sheet 1","Sheet 2","Sheet 3","Sheet 4","Sheet 5"]),u=r.useCallback(t=>{o(t)},[]),b=r.useCallback((t,n)=>{m(e=>{const i=[...e];return i[t]=n,i})},[]),p=r.useCallback((t,n)=>{m(e=>T.arrayMove(e,t,n)),o(e=>t===e?n:t<e&&n<e||t>e&&n>e?e:t<e?e-1:e+1)},[]);return a.jsx("div",{style:{width:"75%",position:"relative"},children:a.jsx(g,{style:{},...d,selectedTabIndex:l,tabNames:c,onSelectedTabIndexChange:u,onTabNameChange:b,onTabMove:p,createTabButton:t=>a.jsx(v,{...t}),activeColor:new f("red"),editLabelProps:{createInput:t=>a.jsx("input",{...t,style:{...t.style,color:"red"}})}})})},s=C.bind({});s.args={disabled:!1};s.storyName="TabStrip with Custom Tabs";const L={title:"TabStrip",component:s};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  // const {
  //   showMenuSquare,
  //   ...rest
  // } = props as any;

  // This is the selected tab not the focused tab
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sheetNames, setSheetNames] = useState<string[]>(['Sheet 1', 'Sheet 2', 'Sheet 3', 'Sheet 4', 'Sheet 5']);
  const handleSelectedTabIndexChange = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);
  const handleTabNameChange = useCallback((index: number, value: string) => {
    setSheetNames(items => {
      const newItems = [...items];
      newItems[index] = value;
      return newItems;
    });
  }, []);

  // Should the editable label fire the tabindex when the name changes?
  // review when integrating into sheet
  const handleTabMove = useCallback((indexFrom: number, indexTo: number) => {
    setSheetNames(items => CommonUtils.arrayMove(items, indexFrom, indexTo));
    setSelectedIndex(prev => {
      // If moving selected
      if (indexFrom === prev) return indexTo;
      // if to/from don't cross then return previous
      if (indexFrom < prev && indexTo < prev || indexFrom > prev && indexTo > prev) return prev;
      if (indexFrom < prev) return prev - 1;else return prev + 1;
    });
  }, []);
  return <div style={{
    // For Canvas view we want to center @ 75%
    width: '75%',
    position: 'relative'
  }}>
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove} createTabButton={props => {
      return <CustomTab {...props} />;
    }} activeColor={new Color('red')} editLabelProps={{
      createInput: props => {
        return <input {...props} style={{
          ...props.style,
          color: 'red'
        }} />;
      }
    }}>
      </TabStrip>
    </div>;
}`,...s.parameters?.docs?.source}}};const E=["TabStripWithCustomTabs"];export{s as TabStripWithCustomTabs,E as __namedExportsOrder,L as default};
