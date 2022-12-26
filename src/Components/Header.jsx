import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Face3Icon from "@mui/icons-material/Face3";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "../styles.scss"

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const location = useLocation();
  return (
    <div>
      <nav className={location.pathname==="/" ? "navbar transparent" : "navbar"}>
        <div className="navbar-container">
            <Link to={"/"} className="navbar-container-logo">
                <Face3Icon className="navbar-icon"/>
            </Link>
            <ul className={click ? "navbar-container-menu active transparent" : "navbar-container-menu transparent"}>
                <li className="navbar-container-menu-item"><Link to={"/"} className='navbar-container-menu-item-link'>HOME</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/about"} className='navbar-container-menu-item-link'>ABOUT ME</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/resume"} className='navbar-container-menu-item-link'>RESUME</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/skills"} className='navbar-container-menu-item-link'>SKILLS</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/portfolio"} className='navbar-container-menu-item-link'>PORTFOLIO</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/contact"} className='navbar-container-menu-item-link'>CONTACT</Link></li> 
            </ul>
            <div className="navbar-container-icon" onClick={handleClick}>
            { 
                click ? <CloseIcon className="navbar-icon"/> : <MenuIcon className="navbar-icon"/>
            }
            </div>
        </div>
      </nav>
    </div>
  );
}
