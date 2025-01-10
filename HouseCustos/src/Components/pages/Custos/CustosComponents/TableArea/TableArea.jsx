// ESTILOS
import * as C from "./style";
// IMPORT DE COMPONENTE
import { TableItem } from "../TableItem/TableItem";

// FUNÇÃO PRINCIPAL PASSANDO UM PARAMETRO
export const TableArea = ({ list }) => {
  // RETORNO DA FUNÇÃO TABLEAREA COM LOGICA DE MAP PARA FILTRAR OS ITEMS
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn>Data</C.TableHeadColumn>
          <C.TableHeadColumn>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return <TableItem key={index} item={item} />;
        })}
      </tbody>
    </C.Table>
  );
};
