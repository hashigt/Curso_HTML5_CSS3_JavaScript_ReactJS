// 6 - Evento de click
const Events = () => {

  const handleClick = (e) => {
    console.log(e);
    console.log("executou");
  }

// 8 - Função de renderização
const renderizaAlgo = (x) => {
  if(x){
    return <h1>Renderizando isso!</h1>
  }
  else{
    return <h1>Renderizando outro!</h1>
  }
}

  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>Clique aqui!</button>
        </div>
        {/* 7 - evento com função */}
        <div>
          <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função render */}
        {renderizaAlgo(true)}  {/*Dentro de {} por ser javaScript*/}
        {renderizaAlgo(false)}
    </div>
  )
}

export default Events 