import {useEffect, useState} from 'react'
import { api } from '../services/api'

type User = {
  
  id:number
  name: string
}

export function Users(){
  const [users,setUsers] = useState<User[]>([])

  useEffect(() =>{
    
    async function loadUsers(){

     const response = await api.get('get_clients') 

     console.log(response)
     
     setUsers(response.data.clients)  
    }

    loadUsers()
  },[])
  
  return (
    <div>
      {users.map(user => (
        <h1>{user.name}</h1>
      ))}
    </div>
  )
}