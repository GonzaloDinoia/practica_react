const Cards = ({data,addToCart}) => { //con destructuring podria pasarle {(img,title,text)} y abajo invocar sin usar props.
    const {id,img,title,author,price,stock}=data
    let imglibro;
                        if(stock < 10 ){
                          imglibro="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
                        }else{
                            imglibro=img;}                          
    return (
            <div className="w-72 h-auto p-4 m-1.5 rounded-lg overflow-hidden bg-white transition-all duration-500 shadow-md cursor-pointer hover:shadow-lg hover:scale-110 hover:transtion-all ease-in-out">
                <div className="flex flex-col items-center justify-around w-full h-full">
                    <img  className="w-2/5 m-4 h-6/12" src={imglibro} alt="libro"></img>
                    <h2 className="text-xl font-bold text-center">{title}</h2>
                    <p className="text-center">{author}</p>
                    <p className="text-center">${price}</p>
                    <button onClick={()=>addToCart(id)} className="my-2.5 p-2 w-32 font-bold cursor-pointer rounded-xl bg-transparent border-solid border-2 border-black hover:bg-black hover:text-white transition-all duration-600 ease-in">
        Agregar al Carrito
    </button>
                </div>
            </div>
    );
    };
    export default Cards;