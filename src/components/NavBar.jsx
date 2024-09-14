import React, {useState} from "react";
import {
//   FaFacebookF,
//   FaTwitter,
//   FaGooglePlusG,
//   FaInstagram,
  FaBars
} from 'react-icons/fa'

const NavBar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
            <div className="container flex items-center justify-between">
                <div>
                    {/* <a href="/">
                        <img src="/images/logo.svg" className="w-24 lg:w-48" alt="logo" />
                    </a> */}
                </div>
                <div className="hidden lg:block">
                    <ul className="flex items-center">
                        <li className="group pl-6">
                            <a href='#about' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                About
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                        {/* <li className="group pl-6">
                            <a href='#services' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Services
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li> */}                        
                        {/* <li className="group pl-6">
                            <a href='#clients' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Clients
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li> */}
                        <li className="group pl-6">
                            <a href='#skills' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Skills
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                        <li className="group pl-6">
                            <a href='#portfolio' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Portfolio
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                        <li className="group pl-6">
                            <a href='#education' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Education
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                        <li className="group pl-6">
                            <a href='#work' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Work
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                        {/* <li className="group pl-6">
                            <a href='#statistics' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Statistics
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li> */}
                        {/* <li className="group pl-6">
                            <a href='#blog' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Blog
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li> */}
                        <li className="group pl-6">
                            <a href='#contact' className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                Contact
                            </a>
                            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                        </li>
                    </ul>
                </div>
                {/* Hamburger Icon */}
                <div onClick={handleNav} className='sm:hidden z-10'>
                    <FaBars size={20} className='mr-4 cursor-pointer text-white' />
                </div>
                {/* Mobile Menu */}
                <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                    <ul className='h-full w-full text-center pt-12'>
                        <li className='text-2xl py-6'>
                            <a href="/">Home</a>
                        </li>
                        <li className='text-2xl py-6'>
                            <a href="#about">About</a>
                        </li>
                        {/* <li className='text-2xl py-4'>
                            <a href="#services">Services</a>
                        </li> */}
                        {/* <li className='text-2xl py-4'>
                            <a href="#portfolio">Portfolio</a>
                        </li> */}
                        {/* <li className='text-2xl py-4'>
                            <a href="#clients">Clients</a>
                        </li> */}
                        <li className='text-2xl py-6'>
                            <a href="#skills">Skills</a>
                        </li>
                        <li className='text-2xl py-6'>
                            <a href="#education">Education</a>
                        </li>
                        <li className='text-2xl py-6'>
                            <a href="#work">Work</a>
                        </li>
                        {/* <li className='text-2xl py-4'>
                            <a href="#statistics">Statistics</a>
                        </li> */}
                        {/* <li className='text-2xl py-4'>
                            <a href="#blog">Blog</a>
                        </li> */}
                        <li className='text-2xl py-6'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* end Mobile Menu */}
            </div>
        </div>
    )
}

export default NavBar;