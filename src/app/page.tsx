'use client'
import { useState } from "react";
import "./globals.css";

export default function Randomizador() {
  const possibilidades = [
    ''
  ];

  const [escolhida, setEscolhida] = useState('');

  const respostaAleatoria = () => {
    const possibilidadesIndex = Math.floor(Math.random() * possibilidades.length);
    setEscolhida(possibilidades[possibilidadesIndex]);
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
            placeholder="digite as possiveis escolhas"
            
          />
          <button>
            adicionar
          </button>
        </div>
        <div id="possibilidades">
          
        </div>
        <div id="historico">
          
        </div>
      </div>
    </div>
  );
}
