import { useState, useEffect } from "react";

const data = [
  {"id": 1 , "name": "Kire"},
  {"id": 2 , "name": "Mile"},
  {"id": 3 , "name": "Pavic"}
]
const UserChallenge = () => {
  const [name,setName] = useState('');
  const [users,setUsers] = useState(data);

  const GetName = (e)=> {
    setName(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) return
    const newUser = {id:users.length+1,name};
    console.log(newUser)
    const updatetUsers = ([...users,newUser]);
    setUsers(updatetUsers);
    setName('')
  }
  const removeBtn = (id) =>{
    const updatetUsers = users.filter((user)=> user.id !== id);
    setUsers(updatetUsers);
    }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={GetName} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <div>
        <h4>Users:</h4>
        {users.map((user) => {
          return <div key={user.id}> 
            <h3>{user.name}</h3>
            <button className="btn" onClick={()=> removeBtn(user.id)}>Remove</button>
          </div>
        })}
      </div>
    </div>
  );
};
function App() {
  return (<UserChallenge />)
}

export default App;
