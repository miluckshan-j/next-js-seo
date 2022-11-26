import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      align="center"
      justify="center"
      as="header"
      backgroundColor="blackAlpha.800"
      py="1.5"
      height="4rem"
    >
      <Text color="whiteAlpha.800" fontSize="3xl">
        Pokédex
      </Text>
    </Flex>
  );
};

export default Header;
