const CartItem = ({
  cartItem: { img: image, name, seller, price },
  handleRemoveFromCart,
}) => {
  return (
    <div className="flex justify-between border border-gray-200 rounded-lg p-4">
      <div className="flex gap-4">
        <img className="max-w-20 h-auto" src={image} alt="" />
        <div>
          <h3 className="text-base text-[#333] font-bold">{name}</h3>
          <h4 className="text-sm text-[#333] font-medium">{seller}</h4>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <h4 className="text-base text-[#333] font-bold">${price}</h4>
        <button
          onClick={handleRemoveFromCart}
          className="px-3 py-1 bg-red-500 rounded-md text-white font-semibold active:translate-y-0.5 active:scale-95"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
