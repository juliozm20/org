import Colaborador from "../Colaborador";
import "./equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, favorite } =
    props;
  const estiloTitulo = { borderColor: colorPrimario };
  return (
    colaboradores.length > 0 && (
      <section
        className="equipo"
        style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
      >
        <input
          type="color"
          className="input-color"
          value={hexToRgba(colorPrimario, 0.6)}
          onChange={(e) => {
            actualizarColor(e.target.value, id);
          }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => (
            <Colaborador
              datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              favorite={favorite}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Equipo;