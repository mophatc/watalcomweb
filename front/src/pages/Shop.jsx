import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import { searchProducts } from '../components/redux/cartSlice'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Shop = () => {
  useEffect(() => {
   AOS.init({
   duration: 1000,  
   offset:100,
   easing: 'ease-in-out'
   });
   AOS.refresh()
   }, []);
 



 



const dispatch = useDispatch()
  
 const product =  useSelector((state)=>
   state.cart.products
 
  
      )

      const productName = useSelector((state)=>state.cart.productName)
      const shopItems = useSelector((state)=>state.cart.products)




   

  

  return (
    <div className='py-20 px-10 bg-amber-50'>
      <div>
        <div>
          <h1 className='md:text-6xl text-center font-bold '>Welcome to our online store!</h1>
          <h2 className='py-10 px-10 text-2xl text-gray-500 text-center'>Browse through our products, competitive prices and quality is assured . </h2>
          <div className=''>
            <input type="text" value={productName} onChange={(e)=>{dispatch(searchProducts(e.target.value))}} name="search" id="search" className='p-3 focus-visible:outline-amber-600 outline-1 w-full md:w-[70%] rounded-2xl ' placeholder="Search Products Here to Purchase" />
          </div>
        </div>

        <div className="py-20">
          {}

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3" >

           {shopItems.map((shopItem, id)=>(
            <ShopItem shopItems={shopItem} key={id} />
           ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
