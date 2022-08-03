import CardsButton from "./CardsButton";

const Cards = (props) => { //con destructuring podria pasarle {(img,title,text)} y abajo invocar sin usar props.
    return (
            <div className="card">
                <div className="contenido">
                    <img  className="card-image" src={props.img} alt="libro"></img>
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.text}</p>
                    <CardsButton/>
                </div>
            </div>
    );
    };
    export default Cards;