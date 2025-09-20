import React from 'react'
import Service from './Service'
import { useSelector } from 'react-redux'

const Servicessection = () => {
 
      const services = useSelector((state)=>state.service.filteredService)

  return (
    <div>
        <div className="container mx-auto">
            <div className="">
                <h1 data-aos="fade-left" data-aous-delay="100" className='pt-20 text-4xl font-bold text-center py-8 text-gray-900 md:text-7xl '>Discover the Power of Graphic Design and Web Development</h1>
                <p data-aos="fade-right" data-aous-delay="100" className='text-slate-600 text-xl px-3 py-4'>Unlock your brands full potential with stunning graphic design and dynamic web development. From logos to landing pages, we craft visual stories and digital solutions that captivate, connect, and convert</p>
            </div>
            <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-3">

                    {services.map((service, index)=>(


                <Service service={service} key={index}  />
                    ))}

               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicessection