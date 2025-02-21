// ESTILOS
import * as C from "./style";
// REACT HOOKS E REACT ROUTER DOM HOOKS
import { useState } from "react";
// SCHEMAS,SERVICES,CONTEXTS,HELPERS E DATA
import { categories } from "../../../../data/categories";
import { newDateAjusted } from "../../../../helpers/dateFilter";

// FUNÇÃO PRINCIPAL PASSANDO UM PARAMETRO
export const InputArea = ({ onAdd }) => {
  let categoryKeys = Object.keys(categories);
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState(categoryKeys[0]);
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  // FUNÇÃO PARA ADICIONAR OS DADOS DO CUSTO UTILIZANDO O PARAMETRO
  const handleAddEvent = () => {
    onAdd({
      date: newDateAjusted(dateField),
      category: categoryField,
      title: titleField,
      value: valueField,
    });
    clearFields();
  };

  // FUNÇÃO  PARA LIMPAR OS DADOS ANTIGOS DO CUSTO
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  // RETORNO DA FUNÇÃO INPUTAREA CHAMANDO OS STATES COM OPERADOR TERNARIO PARA A CATEGORIA
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type='date'
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputLabel>

      <C.InputLabel maxwidth='100px'>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            {categoryKeys.map((key, index) => {
              return (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              );
            })}
          </>
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Titulo</C.InputTitle>
        <C.Input
          type='text'
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type='number'
          value={valueField}
          onChange={(e) =>
            setValueField(
              e.target.value === "" ? "" : parseFloat(e.target.value)
            )
          }
          minwidth='120px'
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
