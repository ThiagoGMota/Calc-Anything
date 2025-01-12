import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormatSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormatSelect = ({ id, label, value, onChange }: FormatSelectProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id}>
        <SelectValue placeholder={`Selecione o formato de ${id === 'formatoEntrada' ? 'entrada' : 'saída'}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="celcius">Celsius (°C)</SelectItem>
        <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
        <SelectItem value="kelvin">Kelvin (K)</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

