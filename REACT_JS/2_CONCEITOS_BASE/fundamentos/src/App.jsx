import './App.css'
// 2 - importando o componente firstComponent
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - Hierarquia de componentes
import MeuComponente from './components/MeuComponente';
import Events from './components/Events';

function App() {
  // 3 - comentários
  return (
      <div className="app">
        {/* 4 - comentário JSX */}
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpression/>
        <MeuComponente/>
        <Events/>
      </div>
  )
}

export default App;
