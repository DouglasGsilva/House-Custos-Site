import * as C from "./style";
import { TableItem } from "../TableItem/TableItem";
export const TableArea = ({ list }) => {
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
