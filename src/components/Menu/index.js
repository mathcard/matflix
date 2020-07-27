import React from 'react';
import Logo from '../../assets/imagens/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img class="Logo" src={Logo} alt="Matflix Logo"/>
      </a>

      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
            
    </nav>
  );
}

export default Menu;