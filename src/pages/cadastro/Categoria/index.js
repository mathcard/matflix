import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField, { FormFieldArrea } from '../../../components/FormField';
import { Link } from 'react-router-dom';

function  CadastrarCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e){
    e.preventDefault();
   setCategorias([...categorias, values]);   
   setValues(valoresIniciais)
  }

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // nome: 'Matheus'
    })
  }

  function handleChange(infosDoEvento){
    //const { getAttribute, value } = infosDoEvento.target;   NÃO FUNCIONOU
    const { name, value } = infosDoEvento.target;                
    setValue(name, value);
  }

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {values.nome}</h1>
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria: " 
          type="text"          
          name="nome"
          placeholder="Nome"
          value={values.nome}
          onChange={handleChange}
        /> 

        <FormFieldArrea
          label="Descrição da Categoria: "           
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        /> 

        {/*<div>
          <label>          
            Descrição da Categoria: 
            <textarea               
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />          
          </label>
        </div> */}

        <FormField
          label="Cor da Categoria: " 
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        /> 



        
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