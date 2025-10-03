import React, { useRef } from 'react'

export const UseRefDemo2 = () => {
    const inputRef = useRef(null)
    const handleFocus = ()=>{

        inputRef.current.focus()
    }

  return (
    <div>
        <h1>USE REF DEMO 2</h1>
        <button onClick={handleFocus}>focus</button>
        <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' ref={inputRef}></input>
        </div>
        <div>
            <label>Age</label>
            <input type='text' placeholder='enter Age'></input>
        </div>
    </div>
  )
}