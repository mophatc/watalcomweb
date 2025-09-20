import React from 'react'
import Service from './Service'
import {  useDispatch, useSelector } from 'react-redux'
import { searchedWord } from '../components/redux/serviceSlice'

const Services = () => {



  const services = useSelector((state)=>state.service.filteredService)
  const searchTerm = useSelector((state)=>state.service.searchTerm)
const dispatch = useDispatch()

  const handleOnChange = (e)=>{
    dispatch(searchedWord(e.target.value))
 
  }
  return (
    <div className='py-20 px-10 bg-amber-50'>
      <div>
        <div>
          <h1 className='md:text-6xl text-center font-bold '>Our Services Powered by Innovation, Driven by Passion</h1>
          <h2 className='py-10 px-10 text-2xl text-gray-500 text-center'>Browse through our services, Solutions that work for you. </h2>
          <div className=''>
            <input type="text" name="searchTerm" value={searchTerm} onChange={(e)=>handleOnChange(e)} id="searchTerm" className='p-3 focus-visible:outline-amber-600 outline-1 w-full md:w-[70%] rounded-2xl ' placeholder="Search our services here" />
          </div>
        </div>

        <div className="py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3" >

           {services.map((service, index)=>(
            <Service key={index} service={service}/>
           ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
