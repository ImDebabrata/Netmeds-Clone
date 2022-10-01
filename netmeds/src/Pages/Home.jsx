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
      <ProductSlider images={trending_products} perSlide={1} displayQty={3} />
      {/* Cart product section */}
      <CartProductSection
        heading={"Limited Time Deals"}
        products={limited_time_deals}
      />
    </div>
  );
};

export default Home;
