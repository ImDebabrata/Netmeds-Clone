import React from "react";
import SlidingImage from "../Components/SlidingImage";
import ProductSlider from "../Components/ProductSlider";
import CartProductSection from "../Components/cartProductSec";
import db from "../Database/db.json";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

const {
  sliding_images,
  top_catagories,
  trending_products,
  limited_time_deals,
  origin_nutrition,
  shop_by_catagory,
  new_arrivals,
  top_brands,
  catagory_in_focus,
  explore_beauty,
  best_in_beauty,
  mens_grooming,
  health_concerns,
  health_liberary,
} = db;

const Home = () => {
  return (
    <div>
      {/* Sliding Image Component for image Slider */}
      <SlidingImage images={sliding_images} />
      {/* Block */}
      <Flex
        // border={"1px solid black"}
        p={"0 3vw"}
        justifyContent={"space-between"}
        gap={5}
      >
        {top_catagories.map((item) => (
          <Box
            m={"20px"}
            bgColor={"white"}
            boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
            key={item.icon}
            w={"calc(100%/3)"}
            padding={"10px"}
            borderRadius={"xl"}
          >
            <Flex>
              <Image mr={"2vw"} src={item.icon} />
              <Flex direction={"column"} justifyContent="center">
                <Heading fontSize={"lg"}>{item.heading}</Heading>
                <Text color={"green"}>Save Upto {item.discount} off</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
      {/* Product Image slider */}
      {/* <ProductSlider images={trending_products} perSlide={1} displayQty={3} /> */}
      <CartProductSection
        heading={"Trending Today"}
        images={trending_products}
        type="imageProduct"
        perSlide={1}
        displayQty={3}
      />
      {/* Cart product section */}
      <CartProductSection
        heading={"Limited Time Deals"}
        products={limited_time_deals}
        type="cartProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Origin origin_nutrition section */}
      <CartProductSection
        heading={"Origin Nutrition - Upto 35% off"}
        products={origin_nutrition}
        type="cartProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Shop by catagory */}
      <CartProductSection
        heading={"Shop by Category"}
        products={shop_by_catagory}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* new arrivals image product slider */}
      <CartProductSection
        heading={"New Arrivals"}
        images={new_arrivals}
        type="imageProduct"
        perSlide={1}
        displayQty={3}
      />
      {/* {Top brands section} */}
      <CartProductSection
        heading={"Top Brands"}
        products={top_brands}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Catagory in focus */}
      <CartProductSection
        heading={"Catagory in focus"}
        products={catagory_in_focus}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />

      {/* Explore beauty section */}
      <CartProductSection
        heading={"Explore Beauty"}
        products={explore_beauty}
        type="pinkCoverBackground"
        perSlide={1}
        displayQty={5}
      />
      {/* Best in beauty */}
      <CartProductSection
        heading={"Best in Beauty"}
        products={best_in_beauty}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Personal Care */}
      <CartProductSection
        heading={"Mens Grooming"}
        products={mens_grooming}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Health Concerns */}
      <CartProductSection
        heading={"Health Concerns"}
        products={health_concerns}
        type="titleProduct"
        perSlide={1}
        displayQty={5}
      />
      {/* Health Liberary */}
      {/* <CartProductSection
        heading={"Health Liberary"}
        images={health_liberary}
        type="titleProduct"
        perSlide={1}
        displayQty={4}
      /> */}
    </div>
  );
};

export default Home;
