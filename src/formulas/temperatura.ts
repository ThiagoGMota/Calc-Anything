export const convertTemperature = (
    value: number,
    fromUnit: string,
    toUnit: string
  ): number => {
    if (fromUnit === toUnit) {
      return value;
    }
  
    switch (fromUnit) {
      case "celcius":
        return celciusTo(value, toUnit);
      case "fahrenheit":
        return fahrenheitTo(value, toUnit);
      case "kelvin":
        return kelvinTo(value, toUnit);
      default:
        throw new Error("Invalid input unit");
    }
  };
  
  const celciusTo = (value: number, toUnit: string): number => {
    switch (toUnit) {
      case "fahrenheit":
        return (value * 9) / 5 + 32;
      case "kelvin":
        return value + 273.15;
      default:
        throw new Error("Invalid output unit");
    }
  };
  
  const fahrenheitTo = (value: number, toUnit: string): number => {
    switch (toUnit) {
      case "celcius":
        return ((value - 32) * 5) / 9;
      case "kelvin":
        return ((value - 32) * 5) / 9 + 273.15;
      default:
        throw new Error("Invalid output unit");
    }
  };
  
  const kelvinTo = (value: number, toUnit: string): number => {
    switch (toUnit) {
      case "celcius":
        return value - 273.15;
      case "fahrenheit":
        return ((value - 273.15) * 9) / 5 + 32;
      default:
        throw new Error("Invalid output unit");
    }
  };
  
  