import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      align="center"
      justify="center"
      as="header"
      backgroundColor="blackAlpha.800"
      py="1"
      height="2rem"
    >
      <Text color="whiteAlpha.800" fontSize={["0.45rem", "md"]}>
        {`©${new Date().getFullYear()} Pokémon. ©1995 - ${new Date().getFullYear()} Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.`}
      </Text>
    </Flex>
  );
};

export default Footer;
