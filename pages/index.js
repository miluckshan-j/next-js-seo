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
    <Grid templateColumns="repeat(5, 1fr)" gap="6" paddingX="10" paddingY="5">
      {Pokemons.map((pokemon) => {
        return (
          <Card maxW="sm" key={pokemon.number}>
            <CardBody>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width="200"
                height="200"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{pokemon.name}</Heading>
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
