import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesDetails = () => {
      useEffect(() => {
       AOS.init({
       duration: 1000,  
       offset:100,
       easing: 'ease-in-out'
       });
       AOS.refresh()
       }, []);
const { id }= useParams()
  const services = useSelector((state)=>state.service.filteredService)
  
const product = services.find((item)=>item.id ===+id)
const{Description,Title, images } = product

const [imageUrl, setImageUrl] = useState("")
useEffect(()=>{
    if(imageUrl===""){
        setImageUrl(images[0]?.url)
    }


}, [product])
  return (
    <div className='bg-slate-50'>
        <div className='py-20 px-10'>
            <div className='flex md:flex-row gap-10 flex-col'>
                <div className='flex-1' >

                   <div className=''>
                    <div className=''>
                         <img src={imageUrl} className=' rounded-xl h-[500px]' alt="Product Detail Image"  />
                    </div>
                    <div className=' flex justify-center mt-10 gap-3'>
                        {images.map((image)=>(

                        <div className={` ${ imageUrl===image.url ? `w-[10%] border-4 rounded-xl  p-3 cursor-pointer border-red-400` :`w-[10%] border-1 rounded-xl  p-3 cursor-pointer border-black `}`} onClick={()=>{setImageUrl(image.url)}}>
                            <img src={image.url} alt=""  className={` hover:opacity-100 w-full object-cover rounded h-20 ${ imageUrl===image.url ? `  opacity-100 transition-all`: `opacity-50 transition-all`}`} />
                        
                        </div>
                        ))}
                       
                    </div>
                   </div>

                </div>
                <div className='flex-1'>
                    <div className='gap-3 flex flex-col '><h1 className='text-black font-bold  text-4xl'>{Title}</h1>
                    <p className='text-slate-600 text-xl py-2'>SKU: WH1000XM4</p></div>

                    <div className='flex items-center gap-10 '>
                        <h3 className='font-bold text-2xl py-3  '>$349.99 </h3>
                        <span className='text-sm text-slate-600 line-through'>$399.99</span>
                    </div>
                    <div className='flex items-center gap-5 text-xl text-slate-600 py-3'>
                        <span><BsStarFill/>   </span>
                        <span>4.5 (120 reviews)</span>
                    </div>
                    <div className='text-xl py-4 text-slate-500'>
                        <p>{Description}</p>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <div><h1 className='color-black font-bold text-2xl'>Color:</h1></div>
                        <div className='flex cursor-pointer py-5 gap-2'>
                            <span className='w-10 h-10 p-3 bg-black rounded-full'> </span>
                            <span className='w-10 h-10 p-3 bg-gray-500 rounded-full'>  </span>
                            <span className='w-10 h-10 p-3 bg-blue-500 rounded-full'> </span>
                        </div>
                    </div>

                    <div>
                        <div className='text-2xl font-black py-4 '>Quantity:</div>
                        <div><input className='w-30 outline-1 p-2 rounded-xl mb-4' type="number" name="" id="" /></div>
                    </div>

                    <div>
                        <div className='flex md:flex-row  flex-col p-3 gap-4 text-xl '>
                            <button className='bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-xl'>Add To Cart</button>
                            <button className='bg-gray-600 cursor-pointer text-white px-5 py-2 rounded-xl'>Add To Cart</button>
                          
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className='text-3xl font-bold  py-3'>Key Features:</div>
                            <div>
                                <ul className='list-disc'>
                                    <li>Industry-leading noise cancellation</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesDetails