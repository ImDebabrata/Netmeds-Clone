import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import db from "../Database/db.json";
const { footer } = db;
console.log("footer:", footer);

const Footer = () => {
  return (
    <footer>
      {footer.map((section, id) => (
        <div className="footer_section_box" key={id}>
          <Heading fontSize={"md"} as={"h4"}>
            {section.title}
          </Heading>
          {section.subtitle.map((sub, id) => (
            <Text w={["auto", 280]} key={id}>
              {sub}
            </Text>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
