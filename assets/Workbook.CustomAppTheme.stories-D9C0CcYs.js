import{j as o}from"./index-BfyssYko.js";import{r as p,y as h}from"./iframe-CRIo4XTL.js";import{Z as u,a0 as d,n as f,R as c,J as x}from"./index-D4CkGHfr.js";import{p as a,q as m,r as y,t as T,B as g,P as k}from"./TextField-CjtT8Vi0.js";import"./index-BIK-qLz5.js";import"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import"./client-DAipKpd7.js";import"./Tooltip-CtWaulHw.js";function C({theme:e,...r}){const t=a in e?e[a]:void 0;return o.jsx(u,{...r,themeId:t?a:void 0,theme:t||e})}const i={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:S}=d({themeId:a,theme:()=>m({cssVariables:!0}),colorSchemeStorageKey:i.colorSchemeStorageKey,modeStorageKey:i.modeStorageKey,defaultColorScheme:{light:i.defaultLightColorScheme,dark:i.defaultDarkColorScheme},resolveTheme:e=>{const r={...e,typography:y(e.palette,e.typography)};return r.unstable_sx=function(n){return T({sx:n,theme:this})},r}}),P=S;function b({theme:e,...r}){const t=p.useMemo(()=>{if(typeof e=="function")return e;const n=a in e?e[a]:e;return"colorSchemes"in n?null:"vars"in n?e:{...e,vars:null}},[e]);return t?o.jsx(C,{theme:t,...r}):o.jsx(P,{theme:e,...r})}const l=m({palette:{primary:{main:"#ffc107"},secondary:{main:"#ff6e40"},info:{main:"#9c27b0"}}}),j=m({palette:{mode:"dark",primary:{main:"#ffa000"},secondary:{main:"#ff7043"},info:{main:"#b388ff"}}}),v=()=>{const[e,r]=h.useState(l),t=()=>o.jsx(b,{theme:e,children:o.jsxs(g,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:[o.jsxs(k,{sx:{padding:"4px"},children:[o.jsx(c,{onClick:()=>r(l),color:"primary",children:"Light"}),o.jsx(c,{onClick:()=>r(j),color:"primary",children:"Dark"})]}),o.jsx(x,{sx:{flex:"1 1 100%"}})]})});return o.jsx(t,{})},s=v.bind({});s.args={};s.storyName="Custom AppTheme";const I={title:"Workbook/Custom AppTheme",component:f};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(lightTheme);
  const App = () => {
    return <ThemeProvider theme={currentTheme}>
      <Box sx={{
        width: '100%',
        // to layout in storybook
        height: '100%',
        // to layout in storybook
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        rowGap: '4px'
      }}>
        <Paper sx={{
          padding: '4px'
        }}>
          <Button onClick={() => setCurrentTheme(lightTheme)} color="primary">
            Light
          </Button>
          <Button onClick={() => setCurrentTheme(darkTheme)} color="primary">
            Dark
          </Button>
        </Paper>
        {/* <StandaloneWorkbook
          square={false}
          sx={{
            flex: '1 1 100%'
          }}
         /> */}
        <WorkbookElement sx={{
          flex: '1 1 100%'
        }} />
      </Box>
      </ThemeProvider>;
  };
  return <App />;
}`,...s.parameters?.docs?.source}}};const L=["WorkbookAppCustomAppThemes"];export{s as WorkbookAppCustomAppThemes,L as __namedExportsOrder,I as default};
