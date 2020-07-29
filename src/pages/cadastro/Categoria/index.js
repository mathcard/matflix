import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function  CadastrarCategoria(){
  const [categorias, setCategorias] = useState(['Filmes']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000',
  }

  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e){
    e.preventDefault();
   setCategorias([...categorias, values]);   
  }

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // nome: 'Matheus'
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
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
              name="nome"
              value={values.nome}
              onChange={handleChange}                                                
            />          
          </label>
        </div>

        <div>
          <label>          
            Nome da Categoria: 
            < textarea               
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />          
          </label>
        </div>

        <div>
          <label>          
            Nome da Categoria: 
            < input 
              type="color" 
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />          
          </label>
        </div>
        
        <button>Cadastrar</button>
      </form>

        <ul>
          {categorias.map((categoria, indice) => {            
            return(              
              <li key={`${categoria}${indice}`}>
                {categoria.nome} 
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