import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaborador)
  }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
