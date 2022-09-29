import React from "react";
import SlidingImage from "../Components/SlidingImage";
import db from "../Database/db.json";
import { Flex, Spacer, Box, Image, Heading, Text } from "@chakra-ui/react";

const { sliding_images, top_catagories } = db;

const Home = () => {
  return (
    <div>
      {/* Sliding Image Component for image Slider */}
      <SlidingImage images={sliding_images} />
      {/* Block */}
      <Flex justifyContent={"space-between"} gap={5}>
        {top_catagories.map((item) => (
          <Box
            boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
            key={item.icon}
            padding={"10px"}
            borderRadius={"17px"}
          >
            <Flex>
              <Image src={item.icon} />
              <Box>
                <Heading>{item.heading}</Heading>
                <Text>Save Upto {item.discount} off</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default Home;
