import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useReducer } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const reducer = (state, action) => {
  switch (action.type) {
    case "SLIDE":
      return {
        ...state,
        currentImageIndex: state.currentImageIndex + action.perSlide,
        pos: state.pos - action.pos,
      };
    case "RESET":
      return {
        ...state,
        currentImageIndex: 0,
        pos: 0,
      };
    case "SLIDE_LEFT":
      return {
        ...state,
        currentImageIndex: state.currentImageIndex - action.perSlide,
        pos: state.pos + action.pos,
      };
    case "SLIDE_RIGHT":
      return {
        ...state,
        currentImageIndex: state.currentImageIndex + action.perSlide,
        pos: state.pos - action.pos,
      };
    default:
      return state;
  }
};

const ProductSlider = ({ images, perSlide, displayQty, products }) => {
  const [state, dispatch] = useReducer(reducer, {
    totalItem: products?.length || images?.length,
    currentImageIndex: 0,
    pos: 0,
  });
  const boxSize = 100 / displayQty;

  state.currentImageIndex === state.totalItem - displayQty + 1 &&
    dispatch({ type: "RESET" });
  useEffect(() => {
    setInterval(
      () => dispatch({ type: "SLIDE", perSlide, pos: boxSize * perSlide }),
      5000
    );
  }, []);
  return (
    <div className="sliding_box">
      <div
        style={{ transform: `translateX(${state.pos}vw)` }}
        className="image_wraper product_wrapper"
      >
        {products
          ? products.map((product, index) => (
              <div
                style={{
                  width: `calc(100vw/${displayQty})`,
                  // height: "100px",
                }}
                className="product_box"
                key={index}
              >
                <div className="product_item_box">
                  <img
                    style={{ display: "block", margin: "auto" }}
                    src={product.image}
                  />
                  <Heading
                    w={"90%"}
                    m="auto"
                    noOfLines={2}
                    fontSize={["base", "md"]}
                  >
                    {product.title}
                  </Heading>
                  <Text display={"block"} w={"90%"} m="auto" as={"b"}>
                    ₹ {product.price}
                    <Text
                      fontWeight={100}
                      color="GrayText"
                      fontSize={"sm"}
                      as={"s"}
                      m={2}
                      display={"inline"}
                    >
                      {product.mrp}
                    </Text>
                  </Text>
                  <Text
                    w={"90%"}
                    m="auto"
                    display={"block"}
                    as={"b"}
                    color={"green"}
                  >
                    UPTO {10}% off
                  </Text>
                  <Button
                    color={"white"}
                    bg={"#24aeb1"}
                    display={"block"}
                    m={"auto"}
                    w={"90%"}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))
          : images.map((image, index) => (
              <div
                style={{ width: `calc(100vw / ${displayQty})` }}
                className="product_box"
                key={index}
              >
                <img
                  src={image}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            ))}
      </div>
      {/* Arrow Buttons */}
      <div className="button_wrapper">
        <button
          disabled={state.currentImageIndex === 0}
          onClick={() =>
            dispatch({
              type: "SLIDE_LEFT",
              perSlide,
              pos: boxSize * perSlide,
            })
          }
        >
          {" "}
          <IoIosArrowBack className="sliding_arrow sliding_left" />{" "}
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "SLIDE_RIGHT",
              perSlide,
              pos: boxSize * perSlide,
            })
          }
        >
          {" "}
          <IoIosArrowForward className="sliding_arrow sliding_right" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
