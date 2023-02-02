
import './header.css'
// import mode from './moon-2304.svg'
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/themeContext";
function Header() {
  const {theme ,setTheme} = useContext(ThemeContext)


    return(
        <header className={`header ${theme}` } key={theme} >
        <h1>Country</h1>
        <select defaultValue={theme} onChange={(evt) => setTheme(evt.target.value)} >
          <option value="dark"> dark</option>
          <option value="light"> light</option>
        </select>
        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark") } className='mode'>{theme === "dark" ? "light" : "dark"}-mode</button>

      {/* <button className={`mode `} >
      <img className='mode-img' src={mode} alt="mode" ></img>

      {theme === "dark" ? "light" : "dark"}-mode</button> */}
        </header>
    )
}
export default Header;