import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TemperatureInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TemperatureInput = ({ value, onChange }: TemperatureInputProps) => (
  <div className="space-y-2">
    <Label htmlFor="valor">Valor</Label>
    <Input
      type="number"
      id="valor"
      placeholder="Digite o valor"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

