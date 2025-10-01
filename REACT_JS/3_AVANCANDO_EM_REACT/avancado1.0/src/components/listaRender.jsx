import { useState } from "react"

const ListaRender = () => {
    const [list] = useState(["Lorenzo", "Pedro", "baguri"]);

    const [users, setUsers] = useState([
      {id: 1, name: "Lorenzo", ano: 20},
      {id: 2, name: "Pedro", ano: 30},
      {id: 3, name: "José", ano: 17},
    ]);

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
      );
    }

  return (
    <div>
      {/* 4 - Render sem key */}
      {/* <ul>
        {list.map((item) => (
          <li>{item}</li> 
        ))}
      </ul> */}
      {/* 5 - Render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.ano} anos 
            </li>
        ))}
      </ul>

      {/* 6 - Render com funçao de remover item(previous state) */}
      <button onClick={deleteRandom}>Deleta aleatorio user</button>
    </div>
  )
};

export default ListaRender