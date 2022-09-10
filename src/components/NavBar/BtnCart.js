import { useConsumer } from "../cartContextProviders";
const BtnCart = () => {
  const [state] = useConsumer();

  const cartItemNumber = state.cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  return (
    <>
      <button className="md:relative md:flex md:justify-center w-10 h-10 p-1 ml-8 text-3xl font-bold text-gray-800 align-middle duration-500 border-2 border-gray-800 border-solid rounded-full cursor-pointer hover:text-gray-400 hover:border-gray-400 ">
        <ion-icon name="cart-outline"></ion-icon>
      </button>
      {state.cart.length > 0 && (
        <div className="inline-flex md:absolute top-2 right-8  justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
          {cartItemNumber}
        </div>
      )}
    </>
  );
};
export default BtnCart;
