import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastrarCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'Matheus'
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;   NÃO FUNCIONOU
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://mathcard-netflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //  setCategorias([
    //    ...categorias,
    //    {
    //      "id": 1,
    //      "nome" : "Front End",
    //      "descricao" : "Uma categoria bacana",
    //      "cor": "#cbd1ff"
    //    },
    //    {
    //      "id": 2,
    //      "nome" : "Back End",
    //      "descricao" : "Uma categoria bacana",
    //      "cor": "#cbd133"
    //    },
    //  ]);
    // }, 4 * 1000 );
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          placeholder="Nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria: "
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (<div>Loading...</div>) }

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
    // <div></div>
  );
}

export default CadastrarCategoria;
