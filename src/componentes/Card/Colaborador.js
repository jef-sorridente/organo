import "./Colaborador.css";

export const Colaborador = ({corSecundaria, imagem, nome,cargo}) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corSecundaria}}>
        <img src={imagem} alt={`Imagem de perfil do ${nome}`} />
      </div>
      <div className="rodape-card">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
