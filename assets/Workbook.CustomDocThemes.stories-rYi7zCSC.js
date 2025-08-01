import{j as o}from"./index-BfyssYko.js";import{r}from"./iframe-CRIo4XTL.js";import{O as m,T as n,w as d}from"./B9X7uTS0U1rpUI8n-DURM2_XP.js";import{k as p}from"./index-EmvSMxOY.js";import{n as a}from"./index-D4CkGHfr.js";import"./index-BIK-qLz5.js";import"./index-B3NY9tdU.js";import"./index-CyaePXdl.js";import"./client-DAipKpd7.js";import"./index-6FFVDUpU.js";import"./TextField-CjtT8Vi0.js";import"./Tooltip-CtWaulHw.js";const u=()=>{const s=r.useMemo(()=>new m({name:"Holiday",colors:{dk1:n.Named.Red,dk2:n.Named.Green,accent1:n.Named.LtGreen,accent2:n.Named.LtPink,accent3:"blue",accent4:"#ff6e40"}}),[]),c=r.useMemo(()=>{const t=new d,h=new m({name:"Halloween",colors:{dk1:"#130912",dk2:"#42331E",lt1:"#FFEFC9",lt2:"#E9Cb95",accent1:"#FFC502",accent2:"#F56F16",accent3:"#B14624",accent4:"#602749",accent5:"#5A7E5A",accent6:"#A21A00"}});return t.setCustomTheme(h),t.setDefaultTheme(s),t},[s]),l=()=>o.jsx(p,{themes:c,children:o.jsx(a,{square:!1,sx:{flex:"1 1 100%"}})});return o.jsx(l,{})},e=u.bind({});e.args={};e.storyName="Custom DocThemes";const N={title:"Workbook/Custom DocThemes",component:a};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // For new workbooks
  const defaultDocTheme = useMemo(() => {
    return new Theme({
      name: 'Holiday',
      colors: {
        dk1: IColor.Named.Red,
        dk2: IColor.Named.Green,
        accent1: IColor.Named.LtGreen,
        accent2: IColor.Named.LtPink,
        accent3: 'blue',
        accent4: '#ff6e40'
      }
    });
  }, []);

  // For themes select dropdown
  const customThemes = useMemo(() => {
    const themes: IThemeCollection = new ThemeCollection();

    /**
     * Add Halloween as option theme in ThemesSelector
     */
    const theme = new Theme({
      name: 'Halloween',
      colors: {
        dk1: '#130912',
        dk2: '#42331E',
        lt1: '#FFEFC9',
        // yellow
        lt2: '#E9Cb95',
        // light orange
        accent1: '#FFC502',
        // yellow
        accent2: '#F56F16',
        // orange
        accent3: '#B14624',
        // brown
        accent4: '#602749',
        // purple
        accent5: '#5A7E5A',
        // green
        accent6: '#A21A00' // red
      }
    });
    themes.setCustomTheme(theme);
    /**
     * Set a default custom theme.
     *
     * @remarks
     * * Adds the theme to the themes collection.
     * * Redundant with passing the theme via attachWorkbookOptions.
     * * Another Example that also updates the available themes in the drop down.
     */
    themes.setDefaultTheme(defaultDocTheme);
    return themes;
  }, [defaultDocTheme]);
  const App = () => {
    return <DocThemesProvider themes={customThemes}>
        <StandaloneWorkbook square={false} sx={{
        flex: '1 1 100%'
      }} />
      </DocThemesProvider>;
  };
  return <App />;
}`,...e.parameters?.docs?.source}}};const g=["WorkbookAppCustomDocThemes"];export{e as WorkbookAppCustomDocThemes,g as __namedExportsOrder,N as default};
