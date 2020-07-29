import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function  CadastrarVideo(){
  return (
    <PageDefault>
      <h1>Cadastrar vídeo</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
    //<div></div>
  );
}

export default CadastrarVideo;