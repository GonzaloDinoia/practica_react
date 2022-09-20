//item carrito
const CartItem = ({ data, deleteFromCart, addToCart }) => {
  const { id, img, title, author, price, quantity,stock } = data;
  
  let buttontype;
  let actividad;
  if (stock > 10) {
    buttontype="opacity-100 cursor-pointer"
    actividad=false
    
    
  } else {
    buttontype="opacity-50 cursor-not-allowed"
    actividad=true
   
  }
  let subtotal = quantity * price;

  return (
    <div className="flex flex-row justify-around w-full h-48 py-2 px-2  m-1.5 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg">
      <div className="w-full h-full flex  items-center justify-around rounded-lg flex-row border-2 p-2">
        <div className=" h-full flex flex-none items-center justify-center">
          <img className="w-30 h-40" src={img} alt="libro"></img>
        </div>

        <div className=" h-full  flex  items-start justify-around flex-col md:ml-4 md:items-center md:flex-row md:w-full md:justify-between">
          <div className="flex flex-col items-center justify-center md:w-60 md:items-start ">
            <h2 className="font-ftitles text-xl font-bold mb-1">{title}</h2>
            <p className="font-ftext">{author}</p>
            <p className="font-ftext">Disponibles: {stock}</p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center md:flex-none">
            <h2 className="font-ftitles text-xl font-bold mb-1">
              Precio Unitario
            </h2>
            <p className="font-ftext">${price}</p>
          </div>
          <div className="flex flex-col items-center justify-start md:mr-20">
            <h2 className="hidden md:flex font-ftitles text-xl font-bold mb-2">
              Cantidad
            </h2>
            <div className="flex items-center">
              <button
                onClick={() => deleteFromCart(id) }
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2.5 rounded-l"
              >
                -
              </button>
              <p className="p-1 font-ftext text-xl text-center">{quantity}</p>
              <button
                onClick={() => addToCart(id)}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-r ${buttontype}`}  disabled={actividad}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col items-center justify-between md:flex-row-reverse">
          <div className="md:ml-12">
            <button
              className=" text-3xl hover:text-red-800 hover:scale-125"
              onClick={() => deleteFromCart(id, true)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-ftitles text-xl font-bold mb-1">Subtotal</h2>
            <p className="font-ftext">${subtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
