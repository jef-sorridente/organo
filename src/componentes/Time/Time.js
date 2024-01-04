import Colaborador from "../Card";
import "./Time.css";

export const Time = (props) => {
  return (
    props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: props.corPrimaria }}>
    <h3>{props.nome}</h3>
    <hr style={{ borderColor: props.corSecundaria }} />
    <div className="times-colaboradores">
      {props.colaboradores.map((colaborador) => (
        <Colaborador key={colaborador.nome}corSecundaria={props.corSecundaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>
      ))}
    </div>
  </section>
  );
};
