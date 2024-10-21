'use client';
import { useState } from "react";
import "./globals.css";

export default function Randomizador() {
  const [possibilidades, setPossibilidades] = useState([]);
  const [novaPossibilidade, setNovaPossibilidade] = useState('');
  const [escolhida, setEscolhida] = useState('');

  const respostaAleatoria = () => {
    if (possibilidades.length > 0) {
      const possibilidadesIndex = Math.floor(Math.random() * possibilidades.length);
      setEscolhida(possibilidades[possibilidadesIndex]);
    }
  };

  const adicionarPossibilidade = () => {
    if (novaPossibilidade.trim() !== '') {
      setPossibilidades([...possibilidades, novaPossibilidade]);
      setNovaPossibilidade('');
    }
  };

  return (
    <div id="page">
      <div id="titulo">
        <h1>Randomizador</h1>
      </div>
      <div id="area-do-resultado">
        <p id="resultado">{escolhida}</p>
        <button onClick={respostaAleatoria} id="pedir-resultado">
          Resposta Aleatória
        </button>
      </div>
      <div id="seleção">
        <div id="adicionando-possibilidades">
          <input 
            type="text"
            placeholder="digite as possíveis escolhas"
            value={novaPossibilidade}
            onChange={(e) => setNovaPossibilidade(e.target.value)}
          />
          <button onClick={adicionarPossibilidade}>
            Adicionar
          </button>
        </div>
        <div id="possibilidades">
          <ul>
            {possibilidades.map((possibilidade, index) => (
              <li key={index}>{possibilidade}</li>
            ))}
          </ul>
        </div>
        <div id="historico">
          
        </div>
      </div>
    </div>
  );
}