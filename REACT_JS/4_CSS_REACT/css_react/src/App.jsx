import './App.css'

// 2 - css de componente
import MeuComponente from './componentes/MeuComponente'
import Titulo from './componentes/Titulo'

function App() {

  // 3 - classes dinamicas
  const redTitle = true

  return (
      <div className="card">
        {/* 1 - css global */}
        <h1>CSS no react</h1>

        {/* 2 - css de componente */}
        <MeuComponente />

        {/* 3 - classes dinamicas */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>

        {/* 4 - css modules */}
        <Titulo />
      </div>
     
  )
}

export default App
