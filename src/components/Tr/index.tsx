import {MainTr} from './style'


type User = {
  
  id:number
  name: string
}

type Trprops =  {
  
  user: User
}


export function Tr(props: Trprops){
  return (
    <MainTr>
      <td>
        {props.user.name}
        <button>Visualizar Estatisticas</button>
      </td>
    </MainTr>
  )
}