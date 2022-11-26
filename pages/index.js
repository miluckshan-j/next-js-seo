import { default as RouterLink } from "next/link";
import {
  Grid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";
import { Pokemons } from "../constants";

export default function Home() {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}
      gap="6"
      paddingX="10"
      paddingY="5"
    >
      {Pokemons.map((pokemon) => {
        return (
          <Card maxW="sm" key={pokemon.number} alignContent="center">
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
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf="center">
              <LinkOverlay
                as={RouterLink}
                href={{
                  pathname: "/details/[number]",
                  query: { number: pokemon.number },
                }}
              >
                <Button variant="solid">View More</Button>
              </LinkOverlay>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
}
