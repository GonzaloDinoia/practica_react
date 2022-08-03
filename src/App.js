import Cards from "./components/Cards";
import DataCards from "./components/DataCards";
import './components/styles.css';



function App() {
  return (
    <>
    <div class="title-section">
    <h2>Tienda de libros</h2>
</div>
  <div className="cards-container">
  {DataCards.map((e) => {
    let imglibro;
    if(e.stock < 10 ){
      imglibro="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
    }else{
        imglibro=e.img;
      }
       return (
       <Cards title={e.title} img={imglibro} text={e.text}/>
     );})}
            
  </div>
  </>
  
  );
}

export default App;
