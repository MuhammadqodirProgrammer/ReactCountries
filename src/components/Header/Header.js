
import './header.css'
import mode from './moon-2304.svg'
function Header() {

  const handleDarkMode =(evt)=>{


    document.body.classList.toggle("dark_mode")

  }
    return(
        <header className="header" >
        <h1>Country</h1>
      <button className='mode' onClick={handleDarkMode}>
      <img className='mode-img' src={mode} alt="mode" ></img>

      Dark-mode</button>
        </header>
    )
}
export default Header;