
import { useEffect, useState } from "react"
import Bottles from "./components/bottles/bottles";

function App() {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Memorable Bottles</h1>
      <div>
        <Bottles bottles = {bottles}/>
      </div>
    </>
  )
}

export default App
