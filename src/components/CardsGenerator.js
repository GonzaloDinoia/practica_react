import Cards from "./Cards";
import DataCards from "./DataCards";

const CardsGenerator = () => {
  return (
    <div className="mt-24 flex justify-center flex-wrap">
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

export default CardsGenerator
