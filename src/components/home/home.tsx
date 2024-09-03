/* import { Component } from "react";
import Imc from "../imc/imc";
import Math from "../math/math"; */
import { Link } from "react-router-dom";
import './home.css'

const components = [
    {name:"IMC", path:"/imc"},
    {name:"math", path:"/math"},
    {name:"moeda", path:"/moeda"},
]
function Home(){
	return(
		<main className="principal-container">
            <h1>Escolha sua calculadora</h1>
            <div className="button-container">
                {components.map((component) => (
                    <Link to={component.path} key={component.name}>
                        <button>{component.name}</button>
                    </Link>
                ))}
            </div>
        </main>
	)

}
export default Home;