import { createBrowserRouter } from "react-router-dom";
import Imc from "./components/imc/imc";
import Home from "./components/home/home";
import Math from "./components/math/math";
import Moeda from './components/moeda/moeda';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/home',
        element: <Home />,
    },
    {
        path: '/imc',
        element: <Imc />
    },
    {
        path: '/math',
        element: <Math />
    },
    {
        path: '/moeda',
        element: < Moeda/>
    }
])
export default router;
