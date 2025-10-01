import './App.css'

// 2 - imagem em assets
import noite from"./assets/night.jpg";

// 3 - useState
import Data from './components/data';

// 4 - renderizaçao de lista
import ListaRender from './components/listaRender'

function App() {
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

        
      </div>
  )
}

export default App;
