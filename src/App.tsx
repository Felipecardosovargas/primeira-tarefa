import { useState } from 'react';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  console.log("Renderizou!");


  return (
    <>
      <h1>O contador é: {count}</h1>

      <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>
        Adicionar
      </button>
    </>
  )
}

export default App
