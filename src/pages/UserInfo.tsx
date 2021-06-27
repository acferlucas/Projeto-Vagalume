import Chart from 'react-apexcharts'
import { api } from '../services/api'
import {useParams } from 'react-router-dom'
import { useState } from 'react'
import { ApexOptions } from 'apexcharts'

type ClientParam = {
  id: string
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

export function UserInfo(){
  const param = useParams<ClientParam>()

  const [values, setValues] = useState<number[]>([])

  async function loadGraph(id:string){

    const response = await api.get(`get_client_data/${id}`)
    setValues(response.data.data)
  }
  loadGraph( param.id)

  
  return (
    <>
      <h1>Graficos</h1>
      <div>
        <Chart 
          options={options} 
          series={[{
            name: 'series',
            data: values
          }]} 
          type="area" 
          height={200} 
        />
      </div>
    </>
  )
}