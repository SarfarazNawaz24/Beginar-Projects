import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
        <h1 className='container text-center font-bold text-2xl sm:text-4xl mb-2'>Customer <span className='underline underline-offset-4 font-light decoration-1 under'>Testimonials</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Real Stories from Those Whose Found Home with Us</p>
    
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonials,index)=>(
                <div key={index} className='px-8 py-12 border rounded shadow-lg text-center max-w-[340px]'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                    <p className='text-gray-500 text-sm mb-4'>{testimonials.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonials.rating},(item, index)=>(
                            <img key={index} src={assets.star_icon} alt=""/>
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonials.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials