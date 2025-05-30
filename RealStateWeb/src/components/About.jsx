import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='font-light underline underline-offset-4 decoration-1 '>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row  items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='mt-10 flex flex-col md:items-start text-gray-600 '>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='font-medium text-4xl text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='font-medium text-4xl text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='font-medium text-4xl text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='font-medium text-4xl text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-6 max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iste inventore obcaecati? Aspernatur nisi culpa doloribus repellendus.</p>
          <button className='bg-blue-600 text-white py-2 px-8 rounded'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About