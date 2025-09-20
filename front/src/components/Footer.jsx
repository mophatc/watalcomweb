import React, { useState } from 'react'
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { logo } from '../assets/assets'

const Footer = () => {
  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const [isFindUsOpen, setIsFindUsOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  const handleLinks = ()=>{
    setIsLinkOpen(!isLinkOpen)
  }
  const handleFindUs = ()=>{
    setIsFindUsOpen(!isFindUsOpen)
  }
  const handleLocation = ()=>{
    setIsLocationOpen(!isLocationOpen)

    
  }

  const dates = new Date(Date.now())

  const year = dates.getFullYear()
  return (
    <div className='bg-slate-900 text-white ' >
     <a href="#home"> <div className='w-10 h-10 flex items-center fixed bottom-30 left-10 rounded-full animate-bounce bg-amber-600/50 hover:bg-transparent hover:text-black p-3  '> Up </div></a>
     <div className='pt-20 py-5'>
      <div className='hidden md:grid grid-cols-3 gap-1'>
        
        <div className='flex flex-col items-center gap-4 '>
          <h1 className=' md:text-2xl text-white text-center ' >Quick Links </h1>



          

          <Link className='text-white md:text-xl p-3 ' to={"/"}>Home</Link>
          <Link className='text-white md:text-xl p-3 ' to={"/servces"}>Services</Link>
          <Link className='text-white md:text-xl p-3 ' to={"/about us"}>About Us</Link>
          <Link className='text-white md:text-xl p-3 ' to={"/shop"}>Shop</Link>
          <Link className='text-white md:text-xl p-3 ' to={"/contact us"}>Contact us</Link>
          </div>
     

       
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-xl  md:text-2xl text-white text-center' onClick={()=>handleFindUs()} >Find us On Social Media</h1>
           

          <Link className='text-white md:text-xl p-3 ' target='_blank' to={"https://www.facebook.com/watalcomcentre"}> <FaFacebook/> </Link>
          <Link className='text-white md:text-xl p-3 ' target='_blank' to={"https://www.x.com/ChemiatiMophat"} > <FaXTwitter/> </Link>
          <Link className='text-white md:text-xl p-3 ' target='_blank' to={"https://www.youtube.com/@watalcomcentre"}    > <FaYoutube/> </Link>
          <Link className='text-white md:text-xl p-3 ' target='_blank' to={"https://www.tiktok.com/@watalcomcentre"}> <FaTiktok/> </Link>
          <Link className='text-white md:text-xl p-3 ' target='_blank' to={"mailto:watalcomcentre@gmail.com"}> <IoMdMail/></Link>
            
        </div>
        <div className='flex flex-col gap-4 items-center p-3'>
          <h1 className='text-xl  md:text-2xl text-white text-center' onClick={()=>handleLocation()} > Visit Watalcom Centre ~ Your Tech Hub in Ruiru! </h1>
          
          <FaLocationDot size={30}/>
          <p className='p-3 text-white md:text-xl '>Find us at Ebenezer Building, Ground Floor, Office No. 7, along Wataalam Road, just off Ruiru Kamiti Road. We're right where innovation meets convenience ~ Walk in today and experience expert tech services with a personal touch!</p>
          </div>
         
      </div>
      {/* mobile footer */}
      <div className='md:hidden grid grid-cols-1 gap-10'>

        <div className='flex flex-col items-center gap-4 '>
          
          <h1 className='text-xl   text-white text-center delay-200' onClick={()=>handleLinks()}>Quick Links </h1>
          {isLinkOpen&& (


          <div className='flex flex-col transition-all ease-in duration-1000 gap-4 items-center'>
            

          <Link className='text-white  p-3 ' to={'/'} >Home</Link>
          <Link className='text-white  p-3 ' to={"/servces"}>Services</Link>
          <Link className='text-white  p-3 ' to={"/about us"}>About Us</Link>
          <Link className='text-white  p-3 ' to={"/shop"}>Shop</Link>
          <Link className='text-white  p-3 ' to={"/contact us"}>Contact us</Link>
          </div>
          )}

        </div>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-xl   text-white text-center' onClick={()=>handleFindUs()} >Find us On Social Media</h1>
            {isFindUsOpen&&(

            <div className='flex gap-6 '>

          <Link className='text-white  p-3 ' target='_blank' to={"https://www.facebook.com/mophatc"}> <FaFacebook/> </Link>
          <Link className='text-white  p-3 ' target='_blank' to={"https://www.x.com/ChemiatiMophat"} > <FaXTwitter/> </Link>
          <Link className='text-white  p-3 ' target='_blank' to={"https://www.youtube.com/@watalcomcentre"}    > <FaYoutube/> </Link>
          <Link className='text-white  p-3 ' target='_blank' to={"https://www.tiktok.com/@watalcomcentre"}> <FaTiktok/> </Link>
          <Link className='text-white  p-3 ' target='_blank' to={"mailto:watalcomcentre@gmail.com"}> <IoMdMail/></Link>
            </div>
            )}
        </div>
        <div className='flex flex-col gap-4 items-center p-3'>
          <h1 className='text-xl   text-white text-center' onClick={()=>handleLocation()} > Visit Watalcom Centre ~ Your Tech Hub in Ruiru! </h1>
          {isLocationOpen&&(


          <div className='flex items-center flex-col gap-3'>


          <FaLocationDot/>
          <p className='p-3 text-white '>Find us at Ebenezer Building, Ground Floor, Office No. 7, along Wataalam Road, just off Ruiru Kamiti Road. We're right where innovation meets convenience ~ Walk in today and experience expert tech services with a personal touch!</p>
          </div>
          )}
        </div>
      </div>
      <div className="flex items-center text-center flex-col  md:flex-row md:justify-between  font-black pt-10 py-5 px-20  ">

        <div>

          <h1>Copyright WATALCOM CENTRE &copy; {
          year
           
           } </h1>

        </div>
        <div className='flex  gap-3 flex-col md:flex-row md:gap-10 ' onClick={()=>{alert('coming soon')}}>
          <Link className=''>Terms and Conditions </Link>
          <Link>Privacy Policy </Link>
        </div>
      </div>
           </div>
    </div>
  )
}

export default Footer
