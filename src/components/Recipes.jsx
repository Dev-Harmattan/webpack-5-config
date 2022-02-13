const leader = {
  name: 'John Reddi',
  age: 36,
  post: 'ceo',
}

const worker = {
  name: 'John Smith',
  age: 40,
  post: 'worker'
}

import {useState} from 'react';
const Recipes = () => {
  const [user, setUser] = useState([]);
  return(
    <div>
      <h3>Current user</h3>
      <button onClick={() => setUser(leader)}>Worker</button>
      <button onClick={() => setUser(worker)}>Leader</button>
      <ul>
        {Object.keys(user).map(detail => <li keys={detail}>{detail}: {user[detail]}</li>)}
      </ul>
    </div>
  )
}

export default Recipes;