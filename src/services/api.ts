import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.elcoma.com.br/api/visits'
})

