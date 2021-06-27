import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

import { api } from '../services/api'
import {useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Aside } from '../components/aside/Aside'
import { Container } from '../styles/pages/UserChart'
import { FiUser, FiChevronLeft} from 'react-icons/fi'


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
  }
}

export function UserChart(){
  const param = useParams<ClientParam>()
  const [isloading,SetIsLoading] = useState(true)

  const [values, setValues] = useState<number[]>([])

  useEffect(() => {
    async function loadGraph(id:string){

      const response = await api.get(`get_client_data/${id}`)
      setValues(response.data.data)
      console.log('fim da requisição')
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
          <div className="graphic-container">
          {isloading ? 
            <div id="loading"></div> : 
            <Chart options={options} series={[{ name: 'series', data: values}]} type="area" height={200} />
          }
          </div>
        </main>
    </Container>
  )
}