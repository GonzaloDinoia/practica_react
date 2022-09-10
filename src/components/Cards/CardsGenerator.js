import { TYPES } from "../actions";
import Cards from "./Cards";
import { useConsumer } from "../cartContextProviders";

const CardsGenerator = () => {
  const [state, dispatch] = useConsumer();
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-24">
        <h2>PRODUCTOS</h2>
        {state.products.map((product) => {
          return (
            <Cards key={product.id} data={product} addToCart={addToCart} />
          );
        })}
      </div>
    </>
  );
};

export default CardsGenerator;
