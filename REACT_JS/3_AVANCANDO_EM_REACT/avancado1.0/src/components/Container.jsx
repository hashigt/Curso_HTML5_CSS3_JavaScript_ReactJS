const Container = ({children}) => {
  return (
    <div>
        <h1>Conteudo do componente pai:</h1>
        {children}
    </div>
  )
}

export default Container