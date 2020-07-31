import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsdata";

// Find the product with the id of `productId` from the `productsData` array
// and display its data in the component below

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);
  console.log(thisProduct);
  console.log(productId);

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
}

export default ProductDetail;
