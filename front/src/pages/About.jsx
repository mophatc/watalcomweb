import React, { useEffect } from 'react'
import { about } from '../assets/assets'
import Team from './team'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';


const About = () => {
  useEffect(() => {
   Aos.init({
   duration: 1000,  
   offset:100,
   easing: 'ease-in-out'
   });
   AOS.refresh()
   }, []);
  return (
    <div className='bg-gray-200 '>
      <div className='py-20 px-10 w-[90vw  mx-auto'>
        <h1 className='text-center md:text-7xl font-black text-amber-400' data-aos="zoom-in" data-aous-delay="100">About Us</h1>
        <div className='flex gap-10 text-justify py-7 flex-col-reverse md:flex-row '>
          <div className="flex-1 p-3 text-xl text-slate-700" data-aos="zoom-in" data-aous-delay="200">
            <p>

              Watalcom Centre was established in the year 2020 with a vision to be a one-stop solution for all your digital, creative, and technical needs. Since our inception, we have remained committed to delivering high-quality services that blend innovation, efficiency, and professionalism. We take pride in offering a diverse range of services under one roof to meet the ever-evolving needs of individuals, businesses, and organizations.</p>

              <p>At Watalcom Centre, we specialize in website design and development, phone repair (both hardware and software), photography and videography, graphic design, and document services such as printing, scanning, and typing. We are also involved in the sale of phones, computers, and accessories, along with CCTV installation and electronic solutions. Our team is made up of skilled professionals passionate about technology, creativity, and customer satisfaction.</p>

              <p>Located at Ebenezer Building, Wataalam Road off Ruiru Kamiti Road, Ground Floor Office Number 7, we are easily accessible and always ready to serve. Whether you are an individual in need of quick phone repair or a company looking for a powerful online presence, Watalcom Centre is your reliable partner. Visit us today and experience quality you can trust!
            </p>
          </div>

          <div className="flex-1" data-aos="zoom-in" data-aous-delay="400">
            <img src={about} alt="" className='w-full rounded-4xl h-100' />
          </div>

        </div>

        

        <Team />


      </div>
    </div>
  )
}

export default About
