import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";
import { Time } from "./componentes/Time/Time";
import { Rodape } from "./componentes/Rodape/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#D9F7E9",
      corSecundaria: "#57C278",
    },
    {
      nome: "Front End",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA",
    },
    {
      nome: "Data Science",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "Devops",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
