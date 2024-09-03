// src/components/ImcCalculator.tsx
import React, { useState } from 'react';
import './imc.css'
import ButtonBack from '../buttons/back-to-menu';

const ImcCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [imc, setImc] = useState<number | null>(null);

  const calculateIMC = () => {
    if (height > 0 && weight > 0) {
      const calculatedIMC = weight / (height * height);
      setImc(calculatedIMC);
    } else {
      alert('Por favor, insira um peso e uma altura válidos.');
    }
  };

  const getImcCategory = (imc: number) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <div>
      <ButtonBack></ButtonBack>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {imc !== null && (
        <div>
          <h2>Seu IMC é: {imc.toFixed(2)}</h2>
          <p>Categoria: {getImcCategory(imc)}</p>
        </div>
      )}
    </div>
  );
};

export default ImcCalculator;
