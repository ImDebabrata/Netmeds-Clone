import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const ProductSlider = ({ images }) => {
  const [state, dispatch] = useReducer(reducer, {
    totalItem: images.length,
  });
  return (
    <div className="sliding_box">
      <div
        style={{ transform: "translateX(0%)" }}
        className="image_wraper product_wrapper"
      >
        {images.map((image, index) => (
          <div className="product_box">{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
