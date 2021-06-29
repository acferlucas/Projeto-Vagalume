import {Container} from './style'
import logoIMG from '../../assets/logo.svg'
import {FiUser, FiMail,FiUsers, FiSettings,FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Aside(){
  return (
    <Container>
      <img src={logoIMG} alt="Logo img" />
      <div id="icons-container">
        <FiUser size={35}/>
        <FiMail size={35}/>
        <FiUsers size={35} color="#FF9801"/>
        <FiSettings size={35}/>
        <Link to="/"><FiLogOut size={35}/></Link>
      </div>
    </Container>
    )
  }