// ESTILOS
import * as C from "./style";

// FUNÇÃO PRINCIPAL PASSANDO TRÊS PARAMETROS
export const ResumeItem = ({ title, value, color }) => {
  // RETORNO DA FUNÇÃO RESUMEITEM
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  );
};
