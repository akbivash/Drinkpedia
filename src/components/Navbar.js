import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'
import { useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

function handleClick(){
  setIsMenuOpen(!isMenuOpen)

 
}
let nav = document.querySelector('.navbar')
window.onscroll = () => {
  setIsMenuOpen(false)

if(window.pageYOffset >= '200'){


  nav.classList.add('fixed')
}else{
  nav.classList.remove('fixed')

}
}
window.onresize  = () => {
  setIsMenuOpen(false)
}
  return (
    <>
    <div className="navbar">
        <div className="logo">myCocktails</div>
      <div className="menu_toggle" onClick={handleClick}>
       {isMenuOpen ? <FaTimes/> :  <BiMenu/>}
      </div>
      <div className="nav-links">
      <li onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
              <Link to='/'>Home</Link> 
            </li>
            <li onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
              <Link to='/about'>About</Link> 
                
               
            </li>
      </div>

      
    </div>

    <div className="nav-mobile">
{isMenuOpen && (
<div>
<li onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
              <Link to='/'>Home</Link> 
            </li>
            <li onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
              <Link to='/about'>About</Link> 
                
               
            </li>
</div>
)}
    </div>
    </>
  )
}

export default Navbar