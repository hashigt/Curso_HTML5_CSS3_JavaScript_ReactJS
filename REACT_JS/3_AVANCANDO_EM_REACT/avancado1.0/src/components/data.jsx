import {useState} from "react"

const Data = () => {
    //let someData = 10; - exemplo de como não funciona

    const [numero, setNumero] = useState(15); //o que está dentro () é o valor inicial
    const [input, setInput] = useState("Nada");

  return (
    <div>
    {/* <div>  - exemplo de como não funciona
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
    </div> */}

    <div>
        <p>valor: {numero}</p>
        <button onClick={() => setNumero(numero + 1)}>Mudar state</button> {/* TEM QUE USAR O SETNUMERO, ELE QUE MODIFICA O ESTADO*/}
    </div>

    <div>
        <p>Escreva algo: {input}</p>
        <input value={input} onChange={muda => setInput(event.target.value)} /> {/* onChange pega a mudança no input*/}
        {/* value está pegando o valor do input  / setInput atualiza o estado do input*/}
    </div>
    </div>
  )
}

export default Data;