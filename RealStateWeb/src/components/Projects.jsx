import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  return (
    <div id='Projects' className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='container text-center font-bold text-2xl sm:text-4xl mb-2'>Projects <span 
        className='underline underline-offset-4 font-light decoration-1 under'>Completed</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Crafting Spaces, building Legacies-Explore Our Portfolio</p>
        {/* Slider Buttons */}
        <div className='flex justify-end items-center mb-8'>
            <button className='bg-gray-200 p-3 rounded mr-2'>
                <img src={assets.left_arrow} alt="" />
            </button>
            <button className='bg-gray-200 p-3 rounded'>
                <img src={assets.right_arrow} alt="" />
            </button>
        </div>
        {/* Project Slider Container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt="" className='mb-14 h-auto w-full'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='bg-white inline-block w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-gray-800 font-semibold text-xl'>{project.title}</h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects