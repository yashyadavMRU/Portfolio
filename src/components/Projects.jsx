import React, { useEffect } from 'react'


import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowRightLong } from 'react-icons/fa6';


import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'



const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);


  return (
    <div id='pricing' className='w-full lg:px-[200px] px-8 py-[40px] h-full flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-sans font-semibold'>Projects</h1>
      <div data-aos="zoom-in" data-aos-delay="200" className='bg-themered h-[3px] w-[20px]'>
      </div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-center font-sans lg:w-[70%] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo debitis sunt dolore ad expedita quasi ratione harum magni dolorem, soluta facere, id alias accusamus eum optio ex, libero doloribus?</p>

      <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Ecommerce Platform project</h1>
            <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-300 text-[17px] font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo dolorum incidunt nesciunt. Quisquam, totam odit veniam harum doloribus inventore ratione! Assumenda voluptatibus sequi autem itaque exercitationem modi quis facere.</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-sans flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
          <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]'></div>
          <img src={project1} alt="" className='relative z-20 rounded-lg' />

        </div>


      </div>


      <div className='w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Food website</h1>
            <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-300 text-[17px] font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo dolorum incidunt nesciunt. Quisquam, totam odit veniam harum doloribus inventore ratione! Assumenda voluptatibus sequi autem itaque exercitationem modi quis facere.</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-sans flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
          <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]'></div>
          <img src={project2} alt="" className='relative z-20 rounded-lg' />

        </div>

      </div>



    </div>

  )
}

export default Projects;