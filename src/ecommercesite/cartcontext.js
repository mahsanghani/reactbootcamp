import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    // Get the data from the api
    // save the data to state
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavourite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavourite);
        return {
          ...photo,
          isFavourite: !photo.isFavourite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavourite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
