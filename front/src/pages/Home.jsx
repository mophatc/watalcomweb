import React, { useEffect } from 'react'
import { homeImg } from '../assets/assets'
import { Link } from 'react-router-dom'
import Servicessection from './Servicessection'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
useEffect(() => {
 AOS.init({
 duration: 1000,  
 offset:100,
 easing: 'ease-in-out'
 });
 AOS.refresh()
 }, []);

  return (
    <>
    
    
    
    <div id="home" className='h-[80vh] flex-col md:flex-row flex items-center  ' style={{
      background:`url(${homeImg})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      
    }} >

      <div  className='flex-1'>
        <h1 data-aos="zoom-in" data-aous-delay="100" className='text-4xl text-center pt-20 px-10 md:text-6xl font-bold text-white '>
        To empower businesses of all sizes with innovative, high-performing web Solutions
      </h1>
     
      </div>
      
      <div className='flex-1    '> 

        <div className=' flex w-full justify-center'>

        <Link data-aos="zoom-in" data-aous-delay="300" to={"/services"} className='px-10 py-2 mt-10 bg-amber-400 md:text-4xl text-black rounded-xl font-bold hover:bg-yellow-300 hover:scale-110 transition-all'>Get Started </Link>
          
           </div>
      </div>
      

    </div>

    <Servicessection/>
    </>
  )
}

export default Home
