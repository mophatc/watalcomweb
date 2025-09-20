import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../components/redux/cartSlice'
import { toast } from 'react-toastify'


const ShopItem = ({shopItems}) => {
    const {name, id, image, description, reviews, price} = shopItems
    const dispatch = useDispatch()

    const handleAddToCart = (id)=>{

        
        dispatch(addToCart(id))
    }
        const notify = () => toast.success("Added to Cart Successfully!", {
            position:'top-left',
            autoClose:1000
        });

  return (
   <>
   

<div key={id} className=" bg-white border mb-5 md:mb-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in " data-aous-delay="300" >
    <Link>
        <img className="rounded-t-lg w-full md:h-100" src={image} alt=""  />
    </Link>
    <div className="p-5 flex flex-col items-center">

        <Link href="#">
           
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ name }</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description }</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{reviews } reviews</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Kshs. {price }</p>
        <button  onClick={ ()=>{handleAddToCart(id), notify()}}  className=" items-center px-3 py-2 text-sm cursor-pointer font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-[90%]">
            Add to Cart
             
        </button>
    </div>
</div>

   </>
  )
}

export default ShopItem