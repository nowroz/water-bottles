const key = "cart";

const getCartItemIDsFromLocalStorage = () => {
  const serializedData = localStorage.getItem(key);

  const cartItems = JSON.parse(serializedData);

  return cartItems ? cartItems : [];
};

const saveCartItemsToLocalStorage = (itemIDs) => {
  localStorage.setItem(key, JSON.stringify(itemIDs));
};

const addCartItemToLocalStorage = (itemID) => {
  const itemIDs = getCartItemIDsFromLocalStorage();

  saveCartItemsToLocalStorage([...itemIDs, itemID]);
};

const removeCartItemFromLocalStorage = (itemID) => {
  const itemIDs = getCartItemIDsFromLocalStorage().filter(
    (id) => id !== itemID,
  );

  saveCartItemsToLocalStorage(itemIDs);
};

export {
  getCartItemIDsFromLocalStorage,
  addCartItemToLocalStorage,
  removeCartItemFromLocalStorage,
};
