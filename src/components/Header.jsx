import React, { useEffect, useState } from 'react'


import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'



const Headers = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const menuLinks = [
    { name: "Home", to: 'home' },
    { name: "About", to: 'about' },
    { name: "Services", to: 'services' },
    { name: "Pricing", to: 'pricing' },
    { name: "Testimonials", to: 'testimonials' },
    { name: "Contact", to: 'contact' }
  ]


  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    };
  }, [menuOpen])

  return (
    <header className='bg-themeblack py-4 lg:px-[100px] px-7 fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center'>
        <div className='text-themered font-bold text-left text-4xl'>
          Yash Yadav <span className='text-white'>.</span>
        </div>

        <button className='text-white text-2xl md:hidden ' onClick={()=> setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseSharp />: <FaBars />}
        </button>

        <nav className='hidden md:block'>
          <ul className='flex space-x-10 text-lg font-sans text-white'>
            {menuLinks.map((link)=>(
              <li key={link.to}>
                <Link to={link.to} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-themered' : 'hover:text-themered transition-colors'}`}>
                {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${menuOpen ? 'translate-x-0': '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-hidden`}>
            <IoCloseSharp className='fixed top-3 right-6 text-3xl cursor-pointer' onClick={()=> setMenuOpen(false)}/>
              <ul className='flex flex-col space-y-6 text-2xl text-center'>
                {menuLinks.map((link)=>(
                  <li key={link.to}>
                      <Link to={link.to} smooth={true} duration={500} className={`cursor-pointer ${link.name === "Home" ? 'text-themered' : 'hover:text-themered transition-colors font-sans'}`} onClick={()=> setMenuOpen(false)}>{link.name}</Link>
                  </li>
                ))}

              </ul>
      </div>

    </header>
  )
}

export default Headers;