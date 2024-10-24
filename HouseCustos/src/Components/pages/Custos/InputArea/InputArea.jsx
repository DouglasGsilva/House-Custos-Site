import { useState } from "react";
import * as C from "./style";
import { categories } from "../../../../data/categories";
import { newDateAjusted } from "../../../../helpers/dateFilter";
export const InputArea = ({ onAdd }) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);
  let categoryKeys = Object.keys(categories);

  const handleAddEvent = () => {
    onAdd({
      date: newDateAjusted(dateField),
      category: categoryField,
      title: titleField,
      value: valueField,
    });
    clearFields();
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

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

      <C.InputLabel>
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
          step={"0.01"}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};