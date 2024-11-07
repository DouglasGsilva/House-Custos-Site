import * as C from "./style";
import { TableItem } from "../TableItem/TableItem";
export const TableArea = ({ list }) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn textalign='start'>Data</C.TableHeadColumn>
          <C.TableHeadColumn textalign='center'>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn textalign='center'>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn textalign='center'>Valor</C.TableHeadColumn>
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
