import { Button } from "@chakra-ui/react";

const Buttons = ({ name, Icon }) => {
  // const Icons = {
  //   BiReceipt,
  //   FaShoppingCart,
  //   HiUserCircle,
  // };
  //   console.log("Icon packs---", icons.BiReceipt);
  //   console.log("setIcon:", setIcon);
  return <Button leftIcon={<Icon />}>{name}</Button>;
};
export default Buttons;
