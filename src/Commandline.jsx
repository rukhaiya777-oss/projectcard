import {themes} from "./themes.js"
function Commandline(){
    const themeName=import.meta.env.VITE_THEME;
    const theme=themes[themeName];
    return(
      <>
      <div style={{backgroundColor:theme.background,color:theme.text}}>Hello everyone !!</div>
      <button style={{backgroundColor:theme.button,color:theme.text}}>Click</button>
      </>
    )
}

export default Commandline