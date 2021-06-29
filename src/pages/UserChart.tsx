import Chart from 'react-apexcharts'

import { api } from '../services/api'
import {useParams, Link, useHistory,} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken'

import { Aside } from '../components/aside/Aside'
import { Container } from '../styles/pages/UserChart'
import { FiUser, FiChevronLeft} from 'react-icons/fi'
import { ApexOptions } from 'apexcharts'


type ClientParam = {
  id: string
  name: string
}

const options: ApexOptions = {
  chart: {
    
    toolbar:{
      show:false
    },
    zoom:{
      enabled:false
    },
    foreColor :'#000'
    
  },
  grid: {
    show: true
  },
  fill: {
    colors: ['#646464']
  },
  colors:['#4A4B4C'],
  
  xaxis:{
    categories:[
      '07:22',
      '08:22',
      '09:22',
      '10:22',
      '11:22',
      '17:22',
      '18:22',
      '19:22',
      '20:22',
      '21:22',
      '22:22',
      '23:22',
    ]
  },
}

export function UserChart(){
  
  const param = useParams<ClientParam>()
  const [isloading,SetIsLoading] = useState(true)
  
  const {token} = useToken()
  const history = useHistory()
  
  const [values, setValues] = useState<number[]>([])
  
  if(!token){
    history.push('/')
  }
  
  useEffect(() => {
    async function loadGraph(id:string){
      
      const response = await api.get(`get_client_data/${id}`)
      setValues(response.data.data)
      SetIsLoading(false)
    }
    loadGraph( param.id)
  }, [param.id])
  
  return (

    <Container >
      <Aside />
      <main>
        <Link to="/users"><FiChevronLeft size={35}/></Link>
        <div className="main-header">
          <div className="header-content">
            <FiUser size={55}/>
            <h1>{param.name}</h1>
          </div>
        </div>
        <div className="chart-container">
        {isloading ? 
          <div id="loading"></div> : 
          <Chart 
          options={options} 
          series={[{ name: 'series', data: values}]} 
          type="area" 
          height={250} 
          />
        }
        </div>
      </main>
    </Container>
    )
  }