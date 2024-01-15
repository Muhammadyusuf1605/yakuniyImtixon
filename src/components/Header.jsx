// rrd impotr
import { Link, NavLink } from "react-router-dom"
// react-icons import
import { GoSun } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosMoon } from "react-icons/io";


import { useState } from "react";


function Header() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode'))) || true
  const togleMode = () => {
    if (mode) {
      JSON.stringify(localStorage.setItem('mode', false))
      document.querySelector('html').classList.remove('dark')
    } else {
      JSON.stringify(localStorage.setItem('mode', true))
      document.querySelector('html').classList.add('dark')
    }
    setMode(!mode)
  }
  if (mode) {
    document.querySelector('html').classList.remove('dark')
  } else {
    document.querySelector('html').classList.add('dark')
  }
  console.log(mode);
  return (
    <div className="header-container dark:bg-[#181920]">
      <div className="container flex justify-between items-center">
        <div className="navbar-start responsive-nav">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to="/" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Home</NavLink>
          <NavLink to="about" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">About</NavLink>
          <NavLink to="products" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Products</NavLink>
          <NavLink to="card" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Card</NavLink>
          <NavLink to="checkout" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Checkout</NavLink>
            </ul>
          </div>
        </div>
        <Link to='/' className="header-logo dark:bg-[#f9719c] dark:text-[#301C27]">C</Link>
        <nav className="flex justify-center items-center gap-1 header-navbar">
          <NavLink to="/" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Home</NavLink>
          <NavLink to="about" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">About</NavLink>
          <NavLink to="products" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Products</NavLink>
          <NavLink to="card" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Card</NavLink>
          <NavLink to="checkout" className="header-link dark:text-[#F8F8F2] text-[#394E6A]">Checkout</NavLink>
        </nav>
        <div className="flex gap-2 justify-center items-center text-2xl">
          {mode ? <IoIosMoon className="cursor-pointer" onClick={togleMode} /> : <GoSun color="#D6D7DB" className="cursor-pointer" onClick={togleMode} />}
          <div className="header-shop-con">
          <PiShoppingCartLight className="cursor-pointer header-shop text-5xl dark:text-[#D6D7DB]" />
          <div className="Shop-number dark:bg-[#f9719c] dark:text-[#301C27]"><h2>0</h2></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
