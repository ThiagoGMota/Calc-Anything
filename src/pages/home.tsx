/* import { Component } from "react";
import Imc from "../imc/imc";
import Math from "../math/math"; */
import { Link } from "react-router-dom";

import { pagesManager } from "./managerPageRoute";

function Home(){
	return(
		<div className="max-w-4xl mx-auto p-6 text-center">
      <header className="mb-12">
      <span className="text-3xl font-bold pb-8">CalcAnything</span>
      <p className="text-xl text-gray-600">Escolha uma calculadora para começar</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
        {pagesManager.map((calc) => (
          <Link 
            to={calc.path} 
            key={calc.name} 
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <calc.icon size={48} className="mb-4 text-blue-500" />
            <span className="text-xl font-semibold text-gray-700">{calc.name}</span>
          </Link>
        ))}

      </main>
    </div>
	)

}
export default Home;