import * as C from "./style";

export const TableItem = ({ item }) => {
  return (
    <C.TableLine>
      <C.TableColumn>...</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R${item.value}</C.TableColumn>
    </C.TableLine>
  );
};
