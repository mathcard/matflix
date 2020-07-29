import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function  CadastrarCategoria(){
  const [categorias, setCategoria] = useState(['Filmes']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000',
  }

  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e){
    e.preventDefault();
   //setCategoria([...categorias, nomeCategoria]);
   // setNomeCategoria('');
  }

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>          
            Nome da Categoria: 
            < input 
              type="text" 
              value={values.nome}
              onChange={ function handleCategoria(infoEvento){              
               // setNomeCategoria(infoEvento.target.value)
              }}
            />          
          </label>
        </div>

        <div>
          <label>          
            Nome da Categoria: 
            < textarea 
              //type="text" 
              value={values.descricao}
              onChange={ function handleCategoria(infoEvento){              
                //setNomeCategoria(infoEvento.target.value)
              }}
            />          
          </label>
        </div>

        <div>
          <label>          
            Nome da Categoria: 
            < input 
              type="color" 
              value={values.cor}
              onChange={ function handleCategoria(infoEvento){              
               // setNomeCategoria(infoEvento.target.value)
              }}
            />          
          </label>
        </div>
        
        <button>Cadastrar</button>
      </form>

        <ul>
          {categorias.map((categoria, indice) => {            
            return(              
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
              
            ) 
          })}
        </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
    //<div></div>
  );
}

export default CadastrarCategoria;