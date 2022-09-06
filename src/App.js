import './components/styles.css';
import CardsGenerator from "./components/Cards/CardsGenerator";
import Navbar from './components/NavBar/Navbar';
import Carrito from './components/Carrito/Carrito';
import { Proveedor } from './components/cartContextProviders';
import { BrowserRouter as Router, Route, Routes } from
"react-router-dom";


function App() {
 
  return (
    
    <Proveedor>
    <Router>
    <Navbar/>
<Routes>
<Route path="/" element={<CardsGenerator/>}/>
<Route path="/Carrito" element={<Carrito></Carrito>}/>

</Routes>
</Router>
</Proveedor>


  );
}

export default App;
