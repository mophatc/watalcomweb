import React, { useState } from 'react'
import { logo } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { RiCloseLargeLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navItems = [
        "Home",
        "About Us",
        "Services",
        "Shop",
        "Contact us",
        
        
    ]
    const userMenu =[
        "Sign In",
        "Register"
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuBar=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    let [qty, setQty] = useState(0)

     const itemsInCart = useSelector(state=>state.cart.itemsInCart)
    

    return (
        <div className='z-999 shadow-2xl top-0 left-0 right-0 bottom-0 sticky bg-slate-300 ' >
            <div className="container md:w-[90%] mx-auto ">
            <div className='hidden md:flex justify-between items-center w-full flex-wrap  '>
            {/* logo */}
            <div className='flex  w-70'>
                <Link to={"/"}>
                    <img src={logo} alt="Watalcom Logo" title="Watalcom Centre" />
                </Link>
            </div>

            <div className="flex uppercase text-xl  p-5">
                {navItems.map((item, index)=>(

                <NavLink className='hover:bg-blue-900 p-4 hover:text-white' key={index} to={item} >{item}</NavLink>
                ))}
            </div>

            <div className="flex uppercase text-2xl gap-4">
                {userMenu.map((user, index)=>(
                    <NavLink key={index} className='hover:bg-blue-900 p-4 hover:text-white' to={user}>{user}</NavLink>
                ))}
            </div >

            <div className="relative">

                 <Link to={'/cart'}>
                 
                 <FaShoppingCart size={40} className='' />
                {itemsInCart.length>0&& ( <span className='bg-red-600 p-2 font-bold w-10 h-10 text-center -top-8 left-5 rounded-full text-white absolute'>{ itemsInCart.length }</span>)}
                 
                 </Link>
            </div>
                 
            </div>
            
            <div>

               <div className="flex w-full justify-between items-center md:hidden ">
                  <div className='w-30'>
                <Link to={"/"}>
                    <img src={logo} alt="Watalcom Logo" title="Watalcom Centre" className='' />
                </Link>

               
            </div>
             <div className="relative">

                 <Link to={'/cart'}>
                 
                 <FaShoppingCart size={40} className='' />
                  {itemsInCart.length>0&& ( <span className='bg-red-600 p-2 font-bold w-10 h-10 text-center -top-3 left-5 rounded-full text-white absolute'>{ itemsInCart.length }</span>)}
                 
                 </Link>
            </div>
                <div onClick={handleMenuBar} className=' '>

                    {isMenuOpen ? (  <RiCloseLargeLine className='h-8 w-8 cursor-pointer ' />): <FaBars className='cursor-pointer h-8 w-8'/>}
                     
                    
                </div>

                
               </div>
               {isMenuOpen? ( 

            <div className='flex flex-col items-center  transition-all duration-100  md:hidden  '>
            {/* logo */}
          

            <div className="flex flex-col uppercase text-xl text-center w-full  ">
                {navItems.map((item, index)=>(

                <NavLink className=' p-4 hover:font-extrabold' key={index} to={item} onClick={()=>{setIsMenuOpen(false)}} >{item}</NavLink>
                ))}

                <div className='border-b-2'></div>
            </div>
        

            <div className="flex flex-col uppercase text-2xl w-full text-center gap-0">
                {userMenu.map((user, index)=>(
                    <NavLink key={index} className='hover:font-bold ease-in p-4 ' onClick={()=>{setIsMenuOpen(false)}} to={user}>{user}</NavLink>
                    
                ))}
            </div>
            

            </div>

                ):""}
            </div>

           

            </div>
        </div>
    )
}

export default Navbar