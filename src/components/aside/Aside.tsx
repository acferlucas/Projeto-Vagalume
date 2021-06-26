import {Container} from './style'
import logoIMG from '../../assets/logo.svg'
import {FiUser, FiMail,FiUsers,FiServer,FiSettings} from 'react-icons/fi'

export function Aside(){
  return (
      <Container>
        <img src={logoIMG} alt="Logo img" />
        <div id="icons-container">
          <FiUser size={35} color="#fff"/>
          <FiMail size={35} color="#fff"/>
          <FiUsers size={35} color="#FF9801"/>
          <FiServer size={35} color="#fff"/>
          <FiSettings size={35} color="#fff"/>
        </div>
      </Container>
  )
}