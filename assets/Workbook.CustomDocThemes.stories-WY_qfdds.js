import{j as o}from"./index-J-Hv9Xln.js";import{r as m}from"./iframe-CBk8unIv.js";import{d as r,N as n,H as h,D as u}from"./index-ZiyYtj3X.js";import{_ as c}from"./index-NVek8bTy.js";import"./index-CMiH3ff9.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DvhsF04y.js";import"./client-vjV3QKWK.js";import"./index--CXhSu_I.js";import"./TextField-DhMfhqoy.js";import"./Tooltip-BpPbRQQ7.js";const p=()=>{const s=m.useMemo(()=>new r({name:"Holiday",colors:{dk1:n.Named.Red,dk2:n.Named.Green,accent1:n.Named.LtGreen,accent2:n.Named.LtPink,accent3:"blue",accent4:"#ff6e40"}}),[]),a=m.useMemo(()=>{const t=new h,d=new r({name:"Halloween",colors:{dk1:"#130912",dk2:"#42331E",lt1:"#FFEFC9",lt2:"#E9Cb95",accent1:"#FFC502",accent2:"#F56F16",accent3:"#B14624",accent4:"#602749",accent5:"#5A7E5A",accent6:"#A21A00"}});return t.setCustomTheme(d),t.setDefaultTheme(s),t},[s]),l=()=>o.jsx(u,{themes:a,children:o.jsx(c,{square:!1,sx:{flex:"1 1 100%"}})});return o.jsx(l,{})},e=p.bind({});e.args={};e.storyName="Custom DocThemes";const b={title:"Workbook/Custom DocThemes",component:c};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const N=["WorkbookAppCustomDocThemes"];export{e as WorkbookAppCustomDocThemes,N as __namedExportsOrder,b as default};
