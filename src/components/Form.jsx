// Create a form that takes user input and displays it in real-time

import './../main.css'
import React, { useState } from 'react'

function Form() {
    const  [input, setInput] = React.useState('');
  return (
    <div className='bg-yellow-300'>
        <input type="text" className='border border-green-400 bg-yellow-300' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>User Input : {input}</p>
        
    </div>
  )
}

export default Form