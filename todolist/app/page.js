"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, description }])
    setdescription("")
    settitle("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    const copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0){
    renderTask = mainTask.map((t, i)=>{
    return <div>
      <li key={i} className='bg-slate-300 p-4 m-4 flex items-center justify-between'>
        <h4 className='font-bold text-xl capitalize'>{t.title}</h4>
        <h5 className='text-2xl'>{t.description}</h5>
        <button 
          onClick={()=>deleteHandler(i)}
          className='bg-red-500 text-white p-2 cursor-pointer rounded'>Delete</button>
      </li>
    </div>
    })
   } else {
       renderTask = <h2 className='pl-10'>No Task Available</h2>}
   
  
  return (
    <div>
      <h1 className='bg-slate-700 text-white font-bold text-5xl p-8 text-center'>Todo List</h1>

        <form className='pl-10' onSubmit={submitHandler}>
        <input type='text'
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder='Enter Task here' 
          className='border-4 border-zinc-800 m-8 px-4 py-2' />

        <input type="text" 
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder='Enter Descripation here' 
          className='border-4 border-zinc-800 px-4 py-2 m-8'/>
        <button 
         className='bg-green-700 px-4 py-2 rounded cursor-pointer text-white font-bold'>Add Task</button>
      </form>

      {/* <hr /> */}
      <div className='bg-slate-200 p-8'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default page