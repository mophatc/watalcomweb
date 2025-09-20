import React, { useEffect, useState } from 'react'
import { logo, sign } from '../assets/assets'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signin = () => {
    useEffect(() => {
         AOS.init({
         duration: 1000,  
         offset:100,
         easing: 'ease-in-out'
         });
         AOS.refresh()
         }, []);

         const initialState = {
          email:"", 
          password:""
         }
  
         const [formData, setFormData] = useState( initialState )

         const handleChange = (e)=>{
          setFormData({
            ...formData,
            [e.target.name] : e.target.value
          })
         }

         const handleSubmit = (e)=>{
          e.preventDefault()
          console.log(formData)
          setFormData(initialState)
         }
  return (
    <div className='bg-slate-100 pt-20 px-20 '>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
            {/* start here */}

            
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src={`${logo}`} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={(e)=>{handleSubmit(e)}}>
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={(e)=>{handleChange(e)}} value={formData.email} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={(e)=>{handleChange(e)}} value={formData.password} />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">Click here to Register</Link>
    </p>
  </div>
</div>

            {/* end here */}

        </div>
        <div className="  rounded-2xl flex-1 " style={{
          background:`url(${sign})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',

        }} ></div>
      </div>

    </div>
  )
}

export default Signin