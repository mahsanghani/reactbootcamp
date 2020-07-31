import React from "react";
import { Link } from "react-router-dom";

import productsData from "./productsdata";

/**
 * Challenge:
 *
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 *
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */

function Products() {
  const products = productsData.map((prod) => (
    <div key={prod.id}>
      <h3>
        <Link to={`/products/${prod.id}`}>{prod.name}</Link>
      </h3>
      <p>Price: ${prod.price}</p>
      <hr />
    </div>
  ));

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
}

export default Products;
