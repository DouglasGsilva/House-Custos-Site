import * as C from "./style";
import { formatDate } from "../../../../../helpers/dateFilter";
import { categories } from "../../../../../data/categories";
export const TableItem = ({ item }) => {
  const category = categories[item.category];

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        {category ? (
          <C.Category color={category.color}>
            {categories[item.category].title}
          </C.Category>
        ) : (
          <C.Category color='gray'>Categoria Desconhecida</C.Category>
        )}
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>

      <C.TableColumn>
        {category ? (
          <C.Value color={categories[item.category].expense ? "red" : "green"}>
            R$ {item.value}
          </C.Value>
        ) : (
          <C.Value color='gray'>{item.value}</C.Value>
        )}
      </C.TableColumn>
    </C.TableLine>
  );
};
