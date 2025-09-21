// {
//     "id": "02871edc-272b-4e20-bcc2-b32681213b3c",
//     "category": "Bottle",
//     "name": "Steel Metal Bottle 2L",
//     "seller": "Addidas",
//     "price": 37,
//     "stock": 14,
//     "ratings": 4,
//     "ratingsCount": 68,
//     "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg",
//     "shipping": 27,
//     "quantity": 0
// }
const Bottle = ({
  bottle: { img: image, name, seller, price },
  handleAddToCart,
}) => {
  return (
    <div className="p-5 rounded-lg shadow-md text-center">
      <img className="rounded mb-4" src={image} alt="" />
      <h3 className="text-base text-[#333] font-semibold">{name}</h3>
      <h5 className="text-xs font-semibold text-gray-700 mb-4">{seller}</h5>
      <h4 className="text-2xl text-[#333] font-bold mb-6">${price}</h4>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-orange-600 rounded-md text-white font-semibold active:translate-y-0.5 active:scale-95"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
