import { Heading } from "@chakra-ui/react";
import React from "react";
import ProductSlider from "./ProductSlider";
const CartProductSection = ({
  heading,
  products,
  type,
  images,
  perSlide,
  displayQty,
}) => {
  products && (products.type = type);
  return (
    <div
      className={
        products?.type === "cartProduct"
          ? "cart_product_section"
          : products?.type === "pinkCoverBackground"
          ? "pink_cover_background"
          : "title_product_section"
      }
    >
      <Heading p={8} as={"h4"} fontSize="2xl" color={"white"}>
        {heading}
      </Heading>
      <ProductSlider
        // images={products.map((item) => item.image)}
        // mrp={products.map((item) => item.mrp)}
        // price={products.map((item) => item.price)}
        // title={products.map((item) => item.title)}
        images={images}
        products={products}
        perSlide={perSlide}
        displayQty={displayQty}
      />
    </div>
  );
};

export default CartProductSection;
