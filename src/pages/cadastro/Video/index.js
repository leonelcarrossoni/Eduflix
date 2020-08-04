/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const { handleChange, values } = useForm({
    
  });
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastar Categoria
      </Link>
    </PageDefault>
  );
}
export default CadastroVideo;