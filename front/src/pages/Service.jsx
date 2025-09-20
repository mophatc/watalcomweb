import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({service}) => {
    const {Title, id, images, Description} = service


  return (
   <>
   

<div key={id} className=" overflow-hidden bg-white border mb-5 md:mb-10 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in" data-aous-delay="100">
    <Link to={`/services/${id}`}  >
    
    <span className={``} >
        <img className="rounded-t-lg hover:scale-105 transition-all h-100 w-full   "  src={images[0]?.url} alt="" />
    </span>
    <div className="  p-5">
        <span >
           
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Title }</h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{Description }</p>
        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </span>
    </div>
    </Link>
</div>

   </>
  )
}

export default Service