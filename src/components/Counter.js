import React, { useState } from 'react'

function Counter() {
    const  [count, setCount] = React.useState(700)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}> + </button>
        <span> {count}</span>
        <button onClick={()=>setCount(count-1)}> - </button>
    </div>
  )
}

export default Counter