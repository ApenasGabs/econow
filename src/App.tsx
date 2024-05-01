import { useEffect, useState } from "react";
import ecoNowLogo from  "./assets/Logo_ECHONOW black.png"
import "./App.css";
import Tree from "./components/Tree/Tree";

function App() {
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div>
        <img src={ecoNowLogo} className="logo" alt="Eco logo" />
        <p>Voce ja plantou {count} arvores</p> 
      </div>
      <h1>Eco Now</h1>
      <h2>Menos gastos, mais sustentabilidade.</h2>
      <p>E se ajudar o planeta fosse tao facil quanto apertar um botao? </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clique para plantar uma arvore
        </button>
      </div>
      {Array.from({ length: count }, (_, i) => (
        <Tree key={i} />
      ))}
    </>
  );
}

export default App;
