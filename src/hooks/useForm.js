/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(ValoresIniciais) {
  const [values, setValues] = useState(ValoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(ValoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
