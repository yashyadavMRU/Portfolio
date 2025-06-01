import React, { useEffect } from 'react'



import { HiBadgeCheck } from 'react-icons/hi'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BsFillInboxFill } from 'react-icons/bs'
import { FaBoxesPacking } from 'react-icons/fa6'


import AOS from 'aos';
import 'aos/dist/aos.css';



const Pricing = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='pricing' className='w-full lg:px-[200px] px-8 py-[40px] h-full flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-sans font-semibold'>Pricing</h1>
      <div data-aos="zoom-in" data-aos-delay="200" className='bg-themered h-[3px] w-[20px]'>
      </div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-center font-sans lg:w-[70%] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo debitis sunt dolore ad expedita quasi ratione harum magni dolorem, soluta facere, id alias accusamus eum optio ex, libero doloribus?</p>
      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-8'>

        <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex flex-col justify-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
          <h1 className='text-white font-semibold text-[24px] font-sans'>Silver</h1>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <HiBadgeCheck className='fill-white size-9' />
          </div>
          <h1 className='text-white font-semibold text-5xl font-sans'>$34</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
          </ul>
          <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-sans flex justify-center items-center gap-2'>
            Select Plan <span><FaArrowRightLong className='text-white'/></span>
          </button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="600" className='w-full bg-[#2f2f2f] flex flex-col justify-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
          <h1 className='text-white font-semibold text-[24px] font-sans'>Gold</h1>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <HiBadgeCheck className='fill-white size-9' />
          </div>
          <h1 className='text-white font-semibold text-5xl font-sans'>$34</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
          </ul>
          <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-sans flex justify-center items-center gap-2'>
            Select Plan <span><FaArrowRightLong className='text-white'/></span>
          </button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex flex-col justify-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
          <h1 className='text-white font-semibold text-[24px] font-sans'>Platinum</h1>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <HiBadgeCheck className='fill-white size-9' />
          </div>
          <h1 className='text-white font-semibold text-5xl font-sans'>$34</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-sans'><span><IoMdArrowDroprightCircle className='size-7' /></span>Lorem ipsum dolor sit amet consectetur?</li>
          </ul>
          <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-sans flex justify-center items-center gap-2'>
            Select Plan <span><FaArrowRightLong className='text-white'/></span>
          </button>
        </div>



      </div>
    </div>
  )
}

export default Pricing;