import { useState } from 'react'
import './App.css'
import { Input } from './input'

function App() {
  const[searchValue,setSearchedValue] = useState('')

  const updateSearchValue = newValue => {
    setSearchedValue(newValue)
  }
  return (
      <div className="mainClass">
        <Input updateSearchValue={updateSearchValue}/>
        {searchValue}
      </div>
  )
}

export default App
