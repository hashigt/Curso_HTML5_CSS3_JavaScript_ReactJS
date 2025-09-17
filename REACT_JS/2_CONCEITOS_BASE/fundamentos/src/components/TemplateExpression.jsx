// 4 - template expression

const TemplateExpression = () => {
  const name = "lorenzo"

  const data = {
    ano: 20,
    trabalho: "Programador",
  }

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vindo {name}</h3>
      <p>
        Você tem {data.ano} e é um {data.trabalho} {/* lembrar -> {nome_do_objeto.nome_do_tipo}*/}
        </p>
    </div>
  )
}

export default TemplateExpression