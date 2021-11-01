import { useState } from "react";
import ColorBox from "./components/ColorBox";

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);

  return (
    <>
      <div>
        <h3>Vermelho:{red}</h3>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={({ target }) => setRed(parseInt(target.value))}
        />
      </div>

      <div>
        <h3>Verde:{blue}</h3>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={({ target }) => setBlue(parseInt(target.value))}
        />
      </div>

      <div>
        <h3>Azul:{green}</h3>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={({ target }) => setGreen(parseInt(target.value))}
        />
      </div>
      <ColorBox backgroundColor={`rgb(${red},${blue},${green})`} />

      <button onClick={() => setHistory([`${red},${blue},${green}`])}>Salvar cor selecionada</button>

      <p>{history}</p>
    </>
  );
}
