import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
        <img class="Logo" src={Logo} alt="Matflix Logo"/>
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
            
    </nav>
  );
}

export default Menu;