import logoIMG from '../assets/logo.svg'
import {Container} from '../styles/pages/Login'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

import { FormEvent , useState } from 'react'
import { useToken } from '../hooks/useToken'


export function Login(){
  
  const history = useHistory()
  const { doLogin } = useToken()
  
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')

  const [isValid,setIsvalid] = useState(false)
  const [validpassword,setValidPassword] = useState(false)
  
  async function handleSubmit(event:FormEvent) {
    event.preventDefault()
    
    if(login.trim() === ''){
      
      setIsvalid(true)
      return
    }
    
    if(password.trim() === ''){
      
      setValidPassword(true)
      return
    }

    try {
      await doLogin(login,password)

      toast.success("Login efetuado com sucesso")
      history.push('/users')
    } catch(error) {
      toast.error(error.message)
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
  