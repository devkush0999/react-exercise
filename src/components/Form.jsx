// Create a form that takes user input and displays it in real-time

import React, { useState } from 'react'

function Form() {
    const  [input, setInput] = React.useState('');
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>User Input : {input}</p>
        
    </div>
  )
}

export default Form