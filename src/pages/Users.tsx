import {useEffect, useState} from 'react'
import { api } from '../services/api'
import {Aside} from '../components/aside/Aside'
import {Container, MainTable} from '../styles/pages/Users'
import {FiChevronDown} from 'react-icons/fi'
import {Tr} from '../components/Tr/index'


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
            {users.map(user => <Tr key={user.id} user={user}/>)}
          </tbody>
        </MainTable>
      </main>
    </Container>
  )
}