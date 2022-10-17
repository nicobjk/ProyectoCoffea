import { useEffect, useState } from 'react';
import "../assets/css/styles.css"
import { FiUsers } from "react-icons/fi"
import { FiUser } from "react-icons/fi"

function Users() {
    const [usersInDb, setUsersInDb]= useState([])

    const [lastUserInDb, setLastUserInDb]= useState({})
    useEffect(()=>{
    fetch("http://localhost:3000/api/users/")
    .then(usuarios=>usuarios.json())
    .then(({users})=>{
      setUsersInDb(users)
      setLastUserInDb(users[users.length-1])
    })
  },[])

  return(
    <>

    <div className='usersContainer'> 

    <div className='usersInDb'>
        <h2 ><FiUsers/>Cantidad total de usuarios </h2>
        <div><h4 className='productsH4'>{usersInDb.length}</h4></div>
    </div>

    <br/> 
    <br/> 
    <br/> 
    <div className='usersInDb'>
        <h2><FiUser/>Último usuario creado </h2>
        <div>           
          <h4> Id: {lastUserInDb.id}</h4>
          <h4> Nombre: {lastUserInDb.name}</h4>
          <h4> Email: {lastUserInDb.email}</h4>
        </div>
    </div>
    </div>
    <hr className='hr1'></hr>
    </>
  )
}

export default Users;