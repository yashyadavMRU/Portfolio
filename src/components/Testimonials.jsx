import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


import { FaQuoteLeft } from 'react-icons/fa6';
import { reviews } from '../export';


const Testimonials = () => {

   useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
  

  return (
    <div id='testimonials' className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-sans font-semibold'>Testiomonials</h1>
            <div data-aos="zoom-in" data-aos-delay="200" className='bg-themered h-[3px] w-[20px]'>
      </div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-center font-sans lg:w-[70%] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo debitis sunt dolore ad expedita quasi ratione harum magni dolorem, soluta facere, id alias accusamus eum optio ex, libero doloribus?</p>

      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-6 mt-10'>
        {
          reviews.map((items,index)=>(
            <div data-aos="zoom-in" data-aos-delay="600" key={index} className='bg-[#2f2f2f] flex flex-col justify-center items-center gap-6 px-5 py-8'>
                <FaQuoteLeft className='fill-themered size-10 transition-all duration-300 ease-in-out hover:scale-110'/>
                <p className='text-gray-300 italic font-sans text-center'>{items.about}</p>
                <img src={items.img} alt="" className='transition-all duration-300 ease-in-out hover:scale-110'/>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-white text-xl font-sans'>{items.name}</h1>
                  <h1 className='text-gray-300 text-[14px] uppercase font-sans'>{items.post}</h1>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials;