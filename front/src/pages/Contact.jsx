import React, { useEffect } from 'react'
import { conta } from '../assets/assets'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
     AOS.init({
     duration: 1000,  
     offset:100,
     easing: 'ease-in-out'
     });
     AOS.refresh()
     }, []);
   
  
  
  
  return (
    <div className='bg-slate-900/100 py-20 h-auto px-10 ' style={{
      background: `url(${conta})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div>
        <div className='flex flex-col   items-center'  >
          <h1 className='md:text-6xl py-4 font-black text-amber-400' data-aos="zoom-in" data-aous-delay="100" >Contact us </h1>
          <p className='text-center text-white font-bold md:text-xl' data-aos="zoom-in" data-aous-delay="200" >Get in touch with Watalcom Centre today for all your digital and tech solutions! Visit us at Ebenezer Building, Wataalam Road off Ruiru Kamiti Road, Ground Floor, Office No. 7. Whether you need expert website design, phone repair, printing, photography, or electronics services, we’re here to help. We look forward to serving you!
          </p>
        </div>

        {/* start here */}
        <section className="  mt-20 py-1 dark:bg-gray-900" data-aos="zoom-in" data-aous-delay="5900" >
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
           
            <form action="#"  className="space-y-8 px-20 py-20 rounded-2xl bg-white" data-aos="zoom-in" data-aous-delay="400" >
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-aos="zoom-in" data-aous-delay="300" >Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-1 px-5 text-sm font-medium text-center text-black outline-2 rounded-xl cursor-pointer hover:bg-red-300 ">Send message</button>
            </form>
            
          </div>
         
        </section>

        {/* end here */}
      
      </div>
    <div className='py-5 bg-lime-300/30 rounded-2xl px-10' data-aos="zoom-in" data-aous-delay="600" >
      <div className=" flex md:flex-row flex-col text-center" data-aos="zoom-in" data-aous-delay="100" >
        <div className=" flex flex-col items-center gap-3 p-3 ">
          <div className='bg-gray-100 w-10 h-10 p-3 rounded-xl '><MdEmail/></div>
          <h1 className='font-bold text-2xl'>Email Us:</h1>
          <h2 className='text-xl'>Email us for general queries, including marketing and partnership opportunities.</h2>
          <Link className='text-sm text-white'>equiries@watalcomcentre.co.ke</Link>
        </div>
        <div className=" flex flex-col items-center gap-3 p-3 ">
          <div className='bg-gray-100 w-10 h-10 p-3 rounded-xl '><MdEmail/></div>
          <h1 className='font-bold text-2xl'>Call us:</h1>
          <h2 className='text-xl'>Call us to speak to a member of our team. We are always happy to help.</h2>
          <Link className='text-sm text-white'>+(254)7 03 702 722</Link>
        </div>
        <div className=" flex flex-col items-center gap-3 p-3 ">
          <div className='bg-gray-100 w-10 h-10 p-3 rounded-xl '><MdEmail/></div>
          <h1 className='font-bold text-2xl'>Visit us:</h1>
          <h2 className='text-xl'>We are located at Wataalam, Off Ruiru Kiambu Road Ebenezer Building Ground floor Office Number 7.</h2>
          <Link className='text-sm text-white outline-amber-200 outline-3 rounded-2xl p-3'>Google Map </Link>
        </div>
      

      </div>

    </div>
    </div>
  )
}

export default Contact
