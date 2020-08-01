import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastrarVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=6YOxrUKkHqQ',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastrar vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,

        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
          // suggestions={['Front End', 'Back End']}
        />

        <Button type="submit">Cadastrar</Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
    // <div></div>
  );
}

export default CadastrarVideo;
