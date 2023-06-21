import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    { id: 1, name: 'john', age: 22, hobby: 'fuck some bitches'},
    { id: 2, name: 'peter', age: 11, hobby: 'fuck some bitches'}
  ];

  const [person, setPerson ] = useState({
    name: 'john', age: 22, hobby: 'fuck some bitches'
  })

  const displayPerson = () => {
    setPerson({
      name: 'peter', age: 11, hobby: 'fuck some bitches'
    })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button onClick={displayPerson}>show Peter</button>
    </>
  );
}

export default App