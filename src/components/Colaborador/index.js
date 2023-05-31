import "./Colaborador.css";
import { MdCancel } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, favorite } = props;
  return (
    <div className="colaborador">
      <MdCancel onClick={() => eliminarColaborador(id)} className="eliminar" />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => favorite(id)} />
        ) : (
          <AiOutlineHeart onClick={() => favorite(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
