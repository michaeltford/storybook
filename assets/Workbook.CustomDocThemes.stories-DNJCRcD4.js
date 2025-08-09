import{j as o}from"./index-DnbSW_dr.js";import{r as m}from"./iframe-CFX7S7Ts.js";import{n as r,N as n,H as h}from"./QkxRNX4E_VTO1B3P-DKjXYKjB.js";import{k as u}from"./index-BFBoYvJH.js";import{U as c}from"./index-B7DS8934.js";import"./index-CrMj5-ZH.js";import"./index-Cd6ACGKX.js";import"./index-D0W7bcSr.js";import"./client-BUjZUdG5.js";import"./index-quj31aQ2.js";import"./TextField-Cy8kN4Kh.js";import"./Tooltip-BRziopUZ.js";const p=()=>{const s=m.useMemo(()=>new r({name:"Holiday",colors:{dk1:n.Named.Red,dk2:n.Named.Green,accent1:n.Named.LtGreen,accent2:n.Named.LtPink,accent3:"blue",accent4:"#ff6e40"}}),[]),a=m.useMemo(()=>{const t=new h,d=new r({name:"Halloween",colors:{dk1:"#130912",dk2:"#42331E",lt1:"#FFEFC9",lt2:"#E9Cb95",accent1:"#FFC502",accent2:"#F56F16",accent3:"#B14624",accent4:"#602749",accent5:"#5A7E5A",accent6:"#A21A00"}});return t.setCustomTheme(d),t.setDefaultTheme(s),t},[s]),l=()=>o.jsx(u,{themes:a,children:o.jsx(c,{square:!1,sx:{flex:"1 1 100%"}})});return o.jsx(l,{})},e=p.bind({});e.args={};e.storyName="Custom DocThemes";const N={title:"Workbook/Custom DocThemes",component:c};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
     * * Redundant with passing the theme via attachStudioOptions.
     * * Another Example that also updates the available themes in the drop down.
     */
    themes.setDefaultTheme(defaultDocTheme);
    return themes;
  }, [defaultDocTheme]);
  const App = () => {
    return <DocThemesProvider themes={customThemes}>
        <Studio square={false} sx={{
        flex: '1 1 100%'
      }} />
      </DocThemesProvider>;
  };
  return <App />;
}`,...e.parameters?.docs?.source}}};const g=["WorkbookAppCustomDocThemes"];export{e as WorkbookAppCustomDocThemes,g as __namedExportsOrder,N as default};
