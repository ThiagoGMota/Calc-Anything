import { Link } from "react-router-dom";

export const Header = () => (
  <>
    <span className="text-3xl font-bold pb-8">CalcAnything</span>
    <div className="w-full mb-6">
      <Link to={"/"} className="pl-6 bg-white p-2 pr-4 rounded-lg shadow-lg">
        Voltar
      </Link>
    </div>
  </>
);

