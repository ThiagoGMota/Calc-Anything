import { Activity, Calculator, DollarSign, LucideProps, Thermometer } from "lucide-react";
import ImcCalculator from "./imc";
import Math from "./math";
import Moeda from "./moeda";
import Temperatura from "./temperatura";

export const pagesManager: Array<{
    name: string;
    path: string;
    component: React.ComponentType;
    icon: React.FC<LucideProps>; // Define o tipo do ícone como um componente React
}> = [
    { name: "IMC", path: "/imc", component: ImcCalculator, icon: Activity },
    { name: "Math", path: "/math", component: Math, icon: Calculator },
    { name: "Moeda", path: "/moeda", component: Moeda, icon: DollarSign },
    { name: "Temperatura", path: "/temperatura", component: Temperatura, icon: Thermometer },

];
