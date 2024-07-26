import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll"
import menu_icon from "../../assets/menu-icon.png"
import logo from '../../assets/logo.png'

const Navbar = () => {
  const[sticky, setSticky]=useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true): setSticky(false);
      })
  },[]);

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
                <div div className="logoDiv">
                    <a href="#" className="logo flex" >
                        <img src={logo} alt="" className='logo' />
                    </a>
                </div>
        

      <ul className={mobileMenu ? '' :'hide-mobile-menu'}>
            <li><Link to="/" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='product' smooth={true} offset={-260} duration={500}>Product</Link></li>
            <li><Link to='review' smooth={true} offset={-150} duration={500}>Review</Link> </li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
