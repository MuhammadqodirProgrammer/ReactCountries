
import './header.css'
import mode from './moon-2304.svg'
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { lang } from '../../lang/lang';
import { LangContext } from '../../context/LangContext';
function Header() {
  const {theme ,setTheme} = useContext(ThemeContext)
  const {lang : til , setLang} = useContext(LangContext)



    return(
        <header className={`header ${theme}` } key={theme} >
        <h1>{lang[til].header.logo} </h1>
        <select 
        onChange={(evt) => setLang(evt.target.value)}
         >
          <option value="uz"> UZ</option>
          <option value="en"> EN</option>
        </select>
        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark") } className='mode'> 
      <img className='mode-img' src={mode} alt="mode" ></img>
        {lang[til].header.change} 
        </button>



        </header>
    )
}
export default Header;