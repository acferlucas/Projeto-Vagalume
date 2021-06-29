import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToken } from '../hooks/useToken'

import { api } from '../services/api'

import {Aside} from '../components/aside/Aside'
import {Container, MainTable} from '../styles/pages/Users'
import {Tr} from '../components/Tr/index'
import {FiChevronDown} from 'react-icons/fi'


type User = {
  id:number
  name: string
}

export function Users(){
  
  const [users,setUsers] = useState<User[]>([])
  const history = useHistory()
  const {token} = useToken()

  if(!token){
    history.push('/')
  }

  useEffect(() =>{
    
    async function loadUsers(){

     const response = await api.get('get_clients') 

     console.log(response)
     
     setUsers(response.data.clients)  
    }

    loadUsers()
  },[])

  function navigateToNewRoom(id:number,name:string){
    
    history.push(`/users/${name}/${id}`) 
  }
  
  return (
    <Container>
      <Aside />
      <main>
        <h1>Visão Geral</h1>
        <MainTable>
          <thead>
            <tr>
              <th>Nomes <FiChevronDown size={24}/></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <Tr key={user.id} user={user} navigateToNewRoom={navigateToNewRoom}/>)}
          </tbody>
        </MainTable>
      </main>
    </Container>
  )
}