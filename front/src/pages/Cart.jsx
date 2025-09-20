import React, { useEffect, useState } from 'react'
import { ImBin } from 'react-icons/im'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { RiDeleteBinFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity, reduceQuantity, removeFromCart } from '../components/redux/cartSlice'
import { toast } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cart = () => {

      useEffect(() => {
           AOS.init({
           duration: 1000,  
           offset:100,
           easing: 'ease-in-out'
           });
           AOS.refresh()
           }, []);
    const itemsInCart = useSelector(state => state.cart.itemsInCart)
   
   
    const dispatch = useDispatch()
    let [total, setTotal] = useState(0)
  
        itemsInCart.map((item)=>{
            total = total + (item.qty * item.price)
        })



       
                const notify = () => toast.warning("Removed Successfully!", {
                    position:'bottom-right',
                    autoClose:1000
                });
        

        

    return (
        <div className="py-20 px-10 bg-amber-50">
            <div>
                <h1 className='md:text-3xl text-shadow-amber-50 font-bold text-center'>Cart Details </h1>
            </div>
            <div className='py-4 px-20'>

                <div className="flex flex-col-reverse md:flex-row  border-1 p-2 rounded-2xl border-slate-400 gap-5">

                     <div className='flex-4 flex flex-col gap-4'>
                            
                       
                    {itemsInCart.length > 0 ? itemsInCart.map((item, index)=>(
(
                       
                        <div key={index} className="flex-4 flex flex-col md:flex-row items-center p-5  border-1 border-slate-500 rounded-2xl ">

                            <div className="flex-2 p-3 flex items-center ">
                                <img className='rounded-2xl w-40' src={`${item.image}`} alt="cart_Item" />
                            </div>
                            <div className="flex-4 flex flex-col items-center gap-3">
                              <Link to={'/shop'}>  <h1 className='text-center font-bold'>{item.name}</h1></Link>
                                <div className='flex gap-3 text-sm'>
                                    <span className='flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-pointer'> <IoIosHeartEmpty /> Add to Favorites</span>
                                    <span onClick={()=>dispatch(removeFromCart(item.id), notify())} className='text-red-600 cursor-pointer flex items-center hover:underline gap-1'> <RiDeleteBinFill /> Remove</span>
                                </div>
                            </div>
                            <div className="flex-2 py-10 flex justify-center items-center ">
                                <div className=''>
                                    <button className='p-3 cursor-pointer text-xl bg-slate-200 rounded-xl' onClick={()=>dispatch(addQuantity(item.id))}>+</button>
                                    <button className='p-3  text-xl '>{item.qty}</button>
                                    <button className='p-3 cursor-pointer click:bg-red text-xl bg-slate-200 rounded-xl'onClick={()=>dispatch(reduceQuantity(item.id))} >-</button>
                                </div>
                            </div>
                            <div className="flex-2 flex items-center justify-center text-2xl font-bold">
                                <h1>Kshs. {item.price* item.qty}</h1>
                            </div>



                        </div>
                    )

                    ))  : (
                        <div className='text-2xl font-bold flex-4 py-20 px-20'> <h1> Your Cart is Empty you can  <Link to={'/shop'} className='px-2 text-blue-700'>shop now </Link> </h1></div>


                    )}

                     </div>









                    <div className="flex-2 border-1 p-4 border-slate-500 rounded-2xl">

                        <div className='border-1 p-3 border-slate-400 rounded-2xl'>


                        <div className='flex justify-between  '>
                            <h1 className='text-black text-2xl p-3 font-bold'>Order Summary</h1>
                           
                            
                            
                            </div>
                            <div className='grid grid-cols-2 '>

                            <h1 className='text-slate-500 text-xl px-3 '>Total Price</h1>
                            <h1 className='text-slate-500 text-xl px-3 '>Kshs. {total} </h1>
                          
                           
                            
                            
                            </div>
                              <button disabled={itemsInCart.length<1} className='py-5 text-white mt-4 cursor-pointer disabled:bg-blue-500/50 disabled:cursor-not-allowed text-2xl px-6 w-full bg-blue-500 rounded-xl'>Check Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart