import logoIMG from '../assets/logo.svg'
import {Container} from '../styles/pages/Login'
import { FormEvent , useState} from 'react'
import { toast } from 'react-toastify';
import { api } from '../services/api'
import { useHistory } from 'react-router-dom'



export function Login(){
  
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()

  async function handleSubmit(event:FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('login',{
        username: login,
        password: password
      });

      if(response.data.success){
        api.defaults.headers.Authorization = response.data.token
        toast.success("Bem vindo")
        history.push('/users')
      }else {
        toast.error("Usuario ou senha incorretos")
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
      <Container>
        <main>
          <div className="logo">
            <img src={logoIMG} alt="" />
            <h1>Vagalume</h1>
          </div>
          <form onSubmit={handleSubmit}>
              <p>Username :</p>
              <input 
                type="text"
                onChange={event => setLogin(event.target.value)}
              />
              <p>Password :</p>
              <input 
                type="password"
                onChange={event => setPassword(event.target.value)}
              />
              <div className="button-area">
                <button type="submit">Entrar</button>
              </div>
          </form>
        </main>
      </Container>
  )
}