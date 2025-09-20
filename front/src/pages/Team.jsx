import React from 'react'
import { ceo, director, tech } from '../assets/assets'



const Team = () => {


    const teamMembers = [
        {
            id: 1,
            name: 'Mophat Chemiati',
            Position: 'Chief Developer & CEO',
            image: ceo
        },
        {
            id: 2,
            name: 'Agnes Simiyu ',
            Position: 'Director',
            image: director
        },
        {
            id: 3,
            name: 'Amos Wanyonyi',
            Position: 'Technical Manager',
            image: tech
        },

    ]
    return (
        <div className='bg-slate-600 py-20'>
            <h1 className='text-center md:text-7xl font-black pt-5 py-10 text-amber-300' data-aos="zoom-in" data-aous-delay="100">Meet Our Amazing Team </h1>
            <p className='text-xl text-slate-100 px-10 py-15' data-aos="fade-left" data-aous-delay="200">
               Behind every great service is an even greater team. We are a vibrant mix of creative minds, tech experts, and service professionals who are passionate about turning your ideas into reality. From skilled web developers and graphic designers to reliable phone technicians and experienced photographers, every member of our team brings talent, innovation, and dedication to the table.

                We believe in collaboration, quality, and customer satisfaction. Our team isn’t just trained – we’re driven, committed, and constantly evolving to stay ahead of the trends. Whether you're visiting us for a website, a phone repair, or a photoshoot, you’re guaranteed to be served by someone who cares.

                Skilled. Creative. Reliable.
                We’re not just a team — we’re your digital and tech support squad. Come meet the people behind the brand and experience the Watalcom difference!
            </p>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 px-20'>

                {teamMembers.map((member,id) => (



                    <div key={id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" data-aos="flip-left" data-aous-delay="400">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${member.image}`} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ member.name }</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{ member.Position }</span>

                        </div>
                    </div>
                ))}





            </div>
        </div>
    )
}

export default Team