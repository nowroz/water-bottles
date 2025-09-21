import { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "../cartItems/Cart";
import {
  addCartItemToLocalStorage,
  getCartItemIDsFromLocalStorage,
  removeCartItemFromLocalStorage,
} from "../../utils/storage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemIDs = getCartItemIDsFromLocalStorage();

    let storedItems = [];

    itemIDs.forEach((id) => {
      const item = bottles.find((bottle) => bottle.id === id);

      item && storedItems.push(item);
    });

    setCartItems(storedItems);
  }, [bottles]);

  const handleAddToCart = (cartItem) => {
    setCartItems([...cartItems, cartItem]);

    addCartItemToLocalStorage(cartItem.id);
  };

  const handleRemoveFromCart = (itemId) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);

    setCartItems(newCartItems);
    removeCartItemFromLocalStorage(itemId);
  };

  return (
    <div className="container mx-auto px-4 my-10 ">
      <Cart
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      ></Cart>

      <h2 className="text-3xl text-center font-bold text-[#333] my-6">
        Bottles
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={() => handleAddToCart(bottle)}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
