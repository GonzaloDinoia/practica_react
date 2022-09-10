import CartItem from "./CartItem";
import { TYPES } from "../actions";
import { useConsumer } from "../cartContextProviders";

const Carrito = () => {
  const [state, dispatch] = useConsumer();

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const totalPrice = state.cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  return (
    <div className="flex flex-wrap justify-center mt-24">
      {state.cart.length <= 0 && (
        <p className="font-ftitles text-2xl">No hay ítems en tu carrito</p>
      )}

      {state.cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            data={item}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
          />
        );
      })}

      {state.cart.length > 0 && (
        <div className="flex justify-center md:justify-end items-center py-8 md:px-4 w-full h-12 p-4 m-1.5 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg">
          <h2 className="font-ftitles text-3xl font-bold mb-4">
            Total ${totalPrice}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Carrito;
