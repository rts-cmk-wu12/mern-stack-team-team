import { useEffect, useState } from "react"

function App() {

  const  [ users, setUsers] = useState([]);
  
   useEffect(() => {
   async function fetchData() {
      const response = await fetch('/api/users');
      const data = await response.json();

      setUsers(data);
    }

    fetchData();

   },  [])

  return (
    <>
      <h1>Blog</h1>
      {users.map( (user, index) => {
        <div key={index}>{user.name} - {user.email}</div>
      })}
    </>
  )
}
