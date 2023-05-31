import "./Campo.css";

const Campo = (props) => {
  const placeHolderMod = `${props.placeholder}...`;

  const { type = "tezt" } = props;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeHolderMod}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
