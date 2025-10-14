import './App.css'

// 2 - imagem em assets
import noite from"./assets/night.jpg";

// 3 - useState
import Data from './components/data';

// 4 - renderizaçao de lista
import ListaRender from './components/listaRender'

// 7 - render condiconal
import CondicionalRender from './components/CondicionalRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturação de props
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componentes
const cars = [
   {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
   {id: 2, brand: "KIA", color: "Verde", km: 15546},
   {id: 3, brand: "Renault", color: "Vermelho", km: 78854},
];

// 12 -  fragments
  import Fragments from './components/fragments';

// 13 - Children
import Container from './components/Container';

// 14 - Função em props
import ExecuteFuncion from './components/ExecuteFuncion';

// 15 - state lift
import {useState} from "react";
import Message from './components/message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  // 14 - Função em props
  function showMessage() {
    console.log("Evento do componete pai")
  }

  // 15 - stete lift
  const [message, SetMessage] = useState("");

  const handleMessage = (msg) => {
  SetMessage(msg);
  }
  return (
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />

        {/* 2 - imagem em assests */}
        <img src={noite} alt="outra imagem" />

        {/* 3 - useState */}
        <Data />

        {/* 4 - renderizaçao de lista */}
        <ListaRender />

        {/* 7 - render condiconal */}
        <CondicionalRender />

        {/* 8 - props */}
        <ShowUserName name="Lorenzo" />

        {/* 9 - desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/> 

        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails brand="Ford" km={2000} color="Azul"/>
        <CarDetails color="Dourado" brand="Fiat" km={10002}/> {/* A ordem não muda nada */}

        {/* 11 - Renderização de componentes com map */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}

        {/* 12 - fragments */}
        <Fragments />
        
        {/* 13 - children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>

        {/* 14 - função em prop */}
        <ExecuteFuncion myFunction={showMessage} />

        {/* 15 - state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
  );
};

export default App;
