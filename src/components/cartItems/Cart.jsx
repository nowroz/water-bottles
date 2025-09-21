import CartItem from "./CartItem";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-[#333] mb-6">
        Cart Items
      </h2>
      <div className="space-y-4">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            handleRemoveFromCart={() => handleRemoveFromCart(cartItem.id)}
          ></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
