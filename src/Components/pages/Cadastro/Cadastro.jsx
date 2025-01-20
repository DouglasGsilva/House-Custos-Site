// ESTILOS
import { ContainerCadastro } from "./style";
// IMPORTAÇÃO DE COMPONENTE SEPARADO
import Form from "../../layout_Cadastro/Form/Form";
// FUNÇÃO PRINCIPAL
const Cadastro = () => {
  // RETORNO DA FUNÇÃO CADASTRO
  return (
    <ContainerCadastro>
      <Form />
    </ContainerCadastro>
  );
};

export default Cadastro;
