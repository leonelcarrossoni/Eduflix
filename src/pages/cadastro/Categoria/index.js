import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const ValoresIniciais ={
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState(['Teste']);
  const [values, setValues] = useState(ValoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]:valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;

    setValue(
      name,
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(ValoresIniciais)
        
      }}>


        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              //onChange={function funcaoHandler(infosDoEvento) { 
                // setNomeDaCategoria(infosDoEvento.target.value);

            
            />
          </label>          
        </div>

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>      
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
              //onChange={function funcaoHandler(infosDoEvento) { 
                // setNomeDaCategoria(infosDoEvento.target.value);

            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key = {`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;