export function changeTheme(mode) {
  const currentTheme = !mode ? "light" : "dark";
  const commonPrefix = "--selected-theme-"
  console.log("currentTheme: ", currentTheme);

  const selectedCssProps = Array.from(document.styleSheets)
  .reduce((prevStyleSheet, currStyleSheet)=>(
    prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currStyleSheet.cssRules)
        .reduce((prevCssRule,currCssRule)=>{
            prevCssRule = currCssRule["selectorText"] === ":root" ? [
                ...prevCssRule,
                ...Array.from(currCssRule["style"]).filter(item => item.startsWith(commonPrefix))
            ] : prevCssRule;
            return prevCssRule;
        },[])
    ]
  ),[])
  console.log()
  selectedCssProps.forEach(value => {
    let cssRule = `var(--${currentTheme}-theme-${value.substring(17)})`
    //console.log(cssRule);
    document.documentElement.style.setProperty(value, cssRule)
  })
  
}
