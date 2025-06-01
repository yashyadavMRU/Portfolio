import React, { useEffect } from 'react'
import hero from '../assets/images/hero.png'
import design from '../assets/images/design.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    return (
        <div id='hero' className="w-full lg:px-[200px] px-8 lg:pb-20 pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]">
            <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-8">
                <h1 data-aos="zoom-in" className="text-themered lg:text-3xl text-xl font-semibold font-sans">
                    Hi, I am Yash Yadav
                </h1>
                <h1 data-aos="zoom-in" data-aos-delay="200" className="text-white text-5xl font-semibold font-sans">
                    Front End Developer
                </h1>
                <p data-aos="zoom-in" data-aos-delay="400" className="text-gra-300 lg:text-xl text-lg font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio a officia asperiores optio quasi in sit maxime tempore quam quia assumenda enim atque ad itaque, omnis voluptatem neque repellat. Quasi.
                </p>
                <button data-aos="zoom-in" data-aos-delay="600" className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 mt-5 font-sans">
                    Contact Me
                </button>
            </div>

            <div data-aos="zoom-in" data-aos-delay="600" className="lg:w-2/5 w-full relative">
                <div className="bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[500px] h-[450px] rounded-lg absolute top-[30px] -left-[30px] -z-10" > </div>
                <img src={hero} alt="hero image" className="lg:w-[520px] w-full lg:h-[500px] h-[450px] rounded-lg realtive z-20" />
                <img src={design} alt="" className="absolute -top-7 -right-7 rounded-lg z-10" />
            </div>
        </div>
    )
}

export default Hero;