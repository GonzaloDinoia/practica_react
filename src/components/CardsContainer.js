import Cards from "./Cards";
import DataCards from "./DataCards";
const CardsContainer = () => {
  return (
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
  )
}

export default CardsContainer
