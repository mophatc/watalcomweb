import React, { useEffect, useState } from 'react'
import { logo, regi, sign } from '../assets/assets'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out'
    });
    AOS.refresh()
  }, []);

  const initialState = {
    
    name: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  }

  const [formData, setFormData] = useState( initialState  )

  const handleChange = (e)=>{
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
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

          <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
            <div className="text-center mb-12 sm:mb-16">
              <a href="javascript:void(0)"><img
                src={`${logo}`} alt="logo" className='w-44 inline-block' />
              </a>
              <h4 className="text-slate-600 text-base mt-6">Sign up into your account</h4>
            </div>

            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
                  <input name="name" type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" value={formData.name} onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
                  <input name="lname" type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" value={formData.lname}  onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
                  <input name="email" type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" value={formData.email} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Mobile No.</label>
                  <input name="number" type="number" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" value={formData.number}   onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                  <input name="password" type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" value={formData.password}  onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                  <input name="cpassword" type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" value={formData.cpassword} onChange={(e)=>handleChange(e)}  />
                </div>
              </div>

              <div className="mt-12">
                <button type="submit" className="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                  Sign up
                </button>
              </div>
            </form>
          </div>




          {/* end here */}

        </div>
        <div className="  rounded-2xl flex-1 " style={{
          background: `url(${regi})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',

        }} ></div>
      </div>

    </div>
  )
}

export default Register