import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "../components/header";
import { TemperatureInput } from "@/components/temperatura/input"; 
import { FormatSelect } from "@/components/temperatura/select";
import { ResultDisplay } from "@/components/temperatura/resultado";
import { convertTemperature } from "@/formulas/temperatura";

const Temperatura = () => {
  const [valor, setValor] = useState("");
  const [formatoEntrada, setFormatoEntrada] = useState("celcius");
  const [formatoSaida, setFormatoSaida] = useState("kelvin");
  const [resultado, setResultado] = useState(0);

  const handleConvert = () => {
    const numericValue = parseFloat(valor);
    if (isNaN(numericValue)) {
      alert("Por favor, insira um valor numérico válido.");
      return;
    }

    const resultadoConvertido = convertTemperature(numericValue, formatoEntrada, formatoSaida);
    setResultado(resultadoConvertido);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Header />
      <Card className="w-11/12 max-w-md pb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Conversor de Temperatura</CardTitle>
          <CardDescription className="text-center">Converta entre diferentes formatos de temperatura</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TemperatureInput value={valor} onChange={setValor} />
          <FormatSelect
            id="formatoEntrada"
            label="Formato de Entrada"
            value={formatoEntrada}
            onChange={setFormatoEntrada}
          />
          <FormatSelect
            id="formatoSaida"
            label="Formato de Saída"
            value={formatoSaida}
            onChange={setFormatoSaida}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleConvert}>
            Converter
          </Button>
        </CardFooter>
        <ResultDisplay resultado={resultado} />
      </Card>
    </div>
  );
};

export default Temperatura;

