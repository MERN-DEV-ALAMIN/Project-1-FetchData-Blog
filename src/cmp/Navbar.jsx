import React from 'react'
import { Link } from 'react-router-dom'
import { SiHomeadvisor } from "react-icons/si";
import { FaMicroblog } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
    <div className="navbar  bg-yellow-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={"/"}> <SiHomeadvisor />Home</Link></li>
      <li><Link to={"/blog"}>Blog</Link></li>
      <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">The Fusion</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/"}> <SiHomeadvisor className='text-xl pt-1' />Home</Link></li>
      <li><Link to={"/blog"} > <FaMicroblog className='text-xl pt-1'/>Blog</Link></li>
      <li><Link to={"/contact"}>  <MdConnectWithoutContact  className='text-xl pt-1'/>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar