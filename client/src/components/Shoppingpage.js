// Shopping.js
import React, { useState } from "react";
import products from "../data/product";
import { FaShoppingCart } from "react-icons/fa";

function Shopping() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container mt-5">
      {/* Header with title and cart */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Our Spices</h2>
        <div className="position-relative">
          <FaShoppingCart size={28} className="text-primary" />
          {cartCount > 0 && (
            <span
              className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: "12px" }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Products list */}
      <div className="row">
        {products.map((product) => (
          <div className="col-12 mb-3" key={product.id}>
            <div className="card shadow-sm d-flex flex-row" style={{ height: "120px" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "120px", height: "100%", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between p-2">
                <h6 className="card-title mb-1" style={{ fontSize: "0.9rem" }}>
                  {product.name}
                </h6>
                <p className="card-text mb-1" style={{ fontSize: "0.8rem" }}>
                  {product.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success" style={{ fontSize: "0.85rem" }}>
                    ₹{product.price}
                  </span>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleAddToCart}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
