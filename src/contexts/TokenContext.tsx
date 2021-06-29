import { createContext, ReactNode, useState} from "react"
import {api} from '../services/api'

type TokenContextType = {
  
  token: string
  doLogin: (login:string, password:string) => Promise<void>
}

type TokenContextProviderProps = {
  
  children:ReactNode
}

export const TokenContext = createContext({} as TokenContextType)

export function TokenContextProvider(props:TokenContextProviderProps){
  
  const [token,setToken] = useState('')

  async function doLogin(login:string, password:string){

    const response = await api.post('login',{
      username: login,
      password: password
    });
    if(response.data.success){
        
      api.defaults.headers.Authorization = response.data.token
      
      setToken(response.data.token);
    }else {
      throw new Error('Usuario ou Senha incorreto')
    }
  }
  
  return (
    <TokenContext.Provider value={{token,doLogin}}>
      {props.children}
    </TokenContext.Provider>
  )
}