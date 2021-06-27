import {MainTr} from './style'


type User = {
  
  id:number
  name: string
}

type Trprops =  {
  
  user: User
  navigateToNewRoom: (id:number) => void
}


export function Tr({ user,navigateToNewRoom }: Trprops){
  return (
    <MainTr>
      <td>
        {user.name}
        <button onClick={ () => navigateToNewRoom(user.id) }>Visualizar Estatisticas</button>
      </td>
    </MainTr>
  )
}