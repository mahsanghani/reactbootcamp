import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../cartcontext";
import useHover from "../hooks/usehover";

function Image({ className, img }) {
  const [hovered,ref]=useHover()
  // const [hovered, setHovered] = useState(false);
  const { toggleFavourite, cartItems, addToCart, removeFromCart } = useContext(
    Context
  );
  /**
     <i className="ri-heart-line favorite"></i>
     <i className="ri-add-circle-line cart"></i>
    <i className="ri-heart-fill favorite"></i>
     */
  // const heartIcon = hovered && (
  //   <i
  //     className="ri-heart-line favorite"
  //     onClick={() => toggleFavourite(img.id)}
  //   ></i>
  // );

  function heartIcon() {
    if (img.isFavourite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavourite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavourite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    // if the item is already in the cart
    // return <i className="ri-shopping-cart-fill cart"></i>
    // else if the image is being hovered
    // return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  // const cartIcon = hovered && (
  //   <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  // );

  return (
    <div
      className={`${className} image-container`}
      ref={ref}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
