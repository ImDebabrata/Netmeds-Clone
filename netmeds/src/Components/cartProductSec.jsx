import { Heading } from "@chakra-ui/react";
import React from "react";
import ProductSlider from "./ProductSlider";
const CartProductSection = ({ heading, products }) => {
  return (
    <div className="cart_product_section">
      <Heading as={"h4"} fontSize="2xl" color={"white"}>
        {heading}
      </Heading>
      <ProductSlider
        // images={products.map((item) => item.image)}
        // mrp={products.map((item) => item.mrp)}
        // price={products.map((item) => item.price)}
        // title={products.map((item) => item.title)}
        products={products}
        perSlide={1}
        displayQty={5}
      />
    </div>
  );
};

export default CartProductSection;
