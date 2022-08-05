import CardsButton from "./CardsButton";

const Cards = (props) => { //con destructuring podria pasarle {(img,title,text)} y abajo invocar sin usar props.
    return (
            <div className="w-72 h-auto p-4 m-1.5 rounded-lg overflow-hidden bg-white transition-all duration-500 shadow-md cursor-pointer hover:shadow-lg hover:scale-110 hover:transtion-all">
                <div className="h-full w-full flex flex-col justify-around items-center">
                    <img  className="m-4 w-2/5 h-6/12" src={props.img} alt="libro"></img>
                    <h2 className="text-xl font-bold text-center">{props.title}</h2>
                    <p className="text-center">{props.text}</p>
                    <CardsButton/>
                </div>
            </div>
    );
    };
    export default Cards;