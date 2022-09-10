import { useContext, useReducer, createContext } from "react";
import { TYPES } from "./actions";

const StateContext = createContext();
const DispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export const Proveedor = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [
      {
        id: 1,
        stock: 11,
        img:"https://contentv2.tap-commerce.com/cover/large/9789506445843_1.jpg",
        title: "Billy Summers",
        author: "Stephen King",
        price: 10,
      },
      {
        id: 2,
        stock: 12,
        img:"https://contentv2.tap-commerce.com/cover/large/9789506445386_1.jpg",
        title: "La Sangre Manda",
        author: "Stephen King",
        price: 20,
      },
      {
        id: 3,
        stock: 9,
        img:"https://contentv2.tap-commerce.com/cover/large/9789875667235_1.jpg",
        title: "22/11/1963",
        author: "Stephen King",
        price: 30,
      },
      {
        id: 4,
        stock: 20,
        img:"https://contentv2.tap-commerce.com/cover/large/9789873952333_1.jpg",
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        price: 40,
      },
      {
        id: 5,
        stock: 8,
        img:"https://contentv2.tap-commerce.com/cover/large/9789878317649_1.jpg",
        title: "Muerte en el Nilo",
        author: "Agatha Christie",
        price: 50,
      },
      {
        id: 6,
        stock: 30,
        img:"https://contentv2.tap-commerce.com/cover/large/9789875666733_1.jpg",
        title: "Trilogía de la Fundación",
        author: "Isaac Asimov",
        price: 60,
      },
    ],
    cart: [],
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function useConsumer() {
  
  return [useContext(StateContext), useContext(DispatchContext)].map((ctx) => {
    if (ctx === undefined) throw new Error(`Provider not found`);
    return ctx;
  });
}

/*
 * Exportamos
 */

export { useConsumer };
