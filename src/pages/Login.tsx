import logoIMG from '../assets/logo.svg'
import {Container} from '../styles/pages/Login'

import { FormEvent , useState} from 'react'
import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify';
import { api } from '../services/api'




export function Login(){
  
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [isValid,setIsvalid] = useState(false)
  const [validpassword,setValidPassword] = useState(false)

  const history = useHistory()

  async function handleSubmit(event:FormEvent) {
    event.preventDefault()

    try {

      if(login.trim() === ''){
        
        setIsvalid(true)
        return
      }
      if(password.trim() === ''){
        
        setValidPassword(true)
        return
      }
      const response = await api.post('login',{
        username: login,
        password: password
      });

      if(response.data.success){
        api.defaults.headers.Authorization = response.data.token
        toast.success("Login efetuado com sucesso")
        history.push('/users')
      }else {
        
        setIsvalid(false)
        setValidPassword(false)
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
              {isValid && <span>Por favor, insira um valor ao campo</span>}
              <p>Password :</p>
              <input 
                type="password"
                onChange={event => setPassword(event.target.value)}
              />
              {validpassword && <span>Por favor, insira um valor ao campo</span>}
              <div className="button-area">
                <button type="submit">Entrar</button>
              </div>
          </form>
        </main>
      </Container>
  )
}