import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  LinkOverlay,
  IconButton,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
  Image,
  Stack,
  Heading,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { Pokemons } from "../../constants";
import { AiOutlineHome } from "react-icons/ai";

const Details = ({ pokemon }) => {
  return (
    <Container maxW="2xl" paddingX="10" paddingY="5" centerContent>
      <LinkOverlay as={Link} href="/">
        <IconButton aria-label="Home" icon={<AiOutlineHome />} />
      </LinkOverlay>
      <Card maxW="sm" marginTop="5" alignContent="center">
        <CardBody>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width="fit-content"
            minHeight="200px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center">
              {pokemon.name}
            </Heading>
            <Text fontSize="2xl" textAlign="center">
              #{pokemon.number}
            </Text>
            <Text>{pokemon.descriptions}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <TableContainer w="100%">
            <Table variant="unstyled" whiteSpace={"initial"}>
              <Tbody>
                <Tr>
                  <Td fontWeight="medium">Type(s)</Td>
                  <Td> | {pokemon.types.map((type) => type + " | ")}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Height</Td>
                  <Td>{pokemon.height}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Weight</Td>
                  <Td>{pokemon.weight}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Weakness(es)</Td>
                  <Td w={"100%"}>
                    | {pokemon.weaknesses.map((weakness) => weakness + " | ")}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardFooter>
      </Card>
    </Container>
  );
};

export function getServerSideProps({ query }) {
  const { number } = query;

  const pokemon = Pokemons.find((element) => element.number === number);
  return {
    props: { pokemon },
  };
}

export default withRouter(Details);
