import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUserName] = useState(0)


  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((response) =>{
      setListOfUsers(response.data)
    })
  },[])

  const userElement = listOfUsers.map(user =>{
    return(
      <div>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <h2>UserName: {user.username}</h2>
      </div>
    )
  })

  const createUser = () =>{
    Axios.post('http://localhost:3001/createUser', {name, age, username}).then((repsonse) =>{
      setListOfUsers([...listOfUsers, {name, age, username}])
    })
  }

  return (
    <div className="App">
      <div className='usersDisplay'>
        {userElement}
      </div>

      <div>
        <input type='text' placeholder='Name...' onChange={(event) => {setName(event.target.value)}}/>
        <input type='number' placeholder='age...' onChange={(event) => {setAge(event.target.value)}}/>
        <input type='text' placeholder='Email...' onChange={(event) => {setUserName(event.target.value)}}/>
        <button onClick={createUser}>Submit</button>
      </div>
    </div>
  );
}

export default App;
