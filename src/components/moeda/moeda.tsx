import axios from 'axios';
import ButtonBack from '../buttons/back-to-menu';
import { useState } from 'react';

interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

const Moeda: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BRL');
  const [amount, setAmount] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  const handleConvert = async () => {
    try {
      const response = await axios.get<{ [key: string]: CurrencyData }>(
        `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`
      );
      const data = response.data[`${fromCurrency}${toCurrency}`];
      setResult(parseFloat(data.ask) * amount);
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
    }
  };

  return (
    <div>
        <ButtonBack></ButtonBack>
      <h2>Conversor de Moedas</h2>
      <label>
        De:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BRL">BRL</option>
        </select>
      </label>
      <br />
      <label>
        Para:
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </label>
      <br />
      <button onClick={handleConvert}>Converter</button>
      <p>Resultado: {result.toFixed(2)}</p>
    </div>
  );
};


export  default Moeda;