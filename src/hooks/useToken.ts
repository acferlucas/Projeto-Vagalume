import {useContext} from 'react'
import {TokenContext} from '../contexts/TokenContext'

export function useToken(){
  
  const value = useContext( TokenContext )

  return value
}