import React, { useEffect, useState } from 'react'

export const Input = (props) => {
    const [value,setValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() =>{
            props.updateSearchValue(value)
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [value])
  return (
    <div className="input">
        <input
         type="text" 
         placeholder='Add Value'
         value={value}
         onChange={e => setValue(e.target.value)}
         />
    </div>
  )
}
