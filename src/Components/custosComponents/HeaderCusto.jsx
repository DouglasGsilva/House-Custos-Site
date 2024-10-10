import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import "../custosComponents/HeaderCusto.css";
import { MdOutlineExitToApp } from "react-icons/md";

const HeaderCusto = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='custos-container'>
      <h2 className='name-custos'>{user.name}</h2>
      <h2 className='custos-name'>Custos</h2>
      <MdOutlineExitToApp className='btn-exit' />
    </div>
  );
};

export default HeaderCusto;
