import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

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

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    clearForm,
    values,
    handleChange,
  };
}

export default useForm;
