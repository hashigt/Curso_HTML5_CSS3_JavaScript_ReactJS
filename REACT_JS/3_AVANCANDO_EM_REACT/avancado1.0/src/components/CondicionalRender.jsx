import React from 'react';

const CondicionalRender = () => {
    const x = true;

    const nome = "Lorenzo";

  return (
    <div> 
        {/* 7 -  Render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>} {/* se x for true exibe o paragrafo (é igual ao if) */}
        {/* 8 - else */}
        <h3>Render ternario</h3>
        {nome === "José" ? (
            <div>
                <p>O nome é José</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  );
};

export default CondicionalRender;