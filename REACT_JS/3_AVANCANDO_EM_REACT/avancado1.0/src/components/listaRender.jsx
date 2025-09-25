import { useState } from "react"

const ListaRender = () => {
    const [list] = useState(["Lorenzo", "Pedro", "baguri"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListaRender