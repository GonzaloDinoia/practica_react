const CartItem = ({data,deleteFromCart,addToCart}) => {
    const {id,img,title,author,price,quantity}=data;
    let subtotal=quantity*price
    
    return (
    <div className="w-full h-48 p-4 m-1.5 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg">
    <div className="flex flex-row items-center justify-around w-full h-full">
    <img  className="w-30 m-4 h-40" src={img} alt="libro"></img>
    <div className="flex flex-col items-center p-4">
    <h2 className="font-ftitles text-xl font-bold text-center mb-4">{title}</h2>
    <p className="font-ftext text-center">{author}</p>
    </div>
    <div className="flex flex-col items-center p-4">
    <h2 className="font-ftitles text-xl font-bold text-center mb-4">Precio Unitario</h2>
    <p className="font-ftext text-center">${price}</p>
    </div>
    <div className="flex flex-col items-center p-4">
    <h2 className="font-ftitles text-xl font-bold text-center mb-4">Cantidad</h2>
    <div className="flex">
    <button onClick={() => deleteFromCart(id)} >-</button>
    <p className="font-ftext text-center">{quantity}</p>
    <button onClick={() => addToCart(id)} >+</button>
    </div>
    </div>
    <div className="flex flex-col items-center p-4">
    <h2 className="font-ftitles text-xl font-bold text-center mb-4">Subtotal</h2>
    <p className="font-ftext text-center">${subtotal}</p>
    </div>
    <button className="text-2xl" onClick={() => deleteFromCart(id, true)}><ion-icon name="trash-outline"></ion-icon></button>
    </div>
    </div>

    )
    }
    export default CartItem