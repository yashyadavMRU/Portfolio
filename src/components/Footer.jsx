import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaFacebookF } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';



const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);


  return (
    <div id='contact' className='bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5'>
      <h1 data-aos="zoom-in" className='capitalize text-white text-[25px] font-semibold font-sans'>Connect with me </h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-300 text-[16px] text-center font-sans leading-8'>Victoria Street No 1, London <br /> contactinfo@bdef.test <br /> +0195854115358 </p>
      <div data-aos="zoom-in" data-aos-delay="400" id="social-icons" className='w-full flex justify-center items-center gap-3 mt-6'>
        <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
          <FaFacebookF className='fill-white size-6'/>

        </div>

        <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
          <RiInstagramFill className='fill-white size-6'/>

        </div>

        <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
          <FaTwitter className='fill-white size-6'/>

        </div>

         <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
          <FaLinkedin className='fill-white size-6'/>

        </div>
      </div>

      <p className='text-gray-300 text-[15px] text-center font-sans'>Copyright 2025, All Rights Reserved</p>

      <div id="icon-box" className='bg-themered text-white p-3 rounded-full hover:bg-black hover:text-themered cursor-pointer fixed bottom-7 right-7'>
        <Link to='hero' spy={true} offset={-100} smooth={true}><FiArrowUp className='size-7' /></Link>
      </div>
    </div>
  )
}

export default Footer;