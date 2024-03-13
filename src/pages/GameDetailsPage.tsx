import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const params = useParams();
  const { data: game, error, isLoading } = useGameDetails(params.slug!);

  if (isLoading)
    return (
      <>
        <Text>
          Loading...
          <Spinner />
        </Text>
      </>
    );
  if (error || !game)
    return (
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>Unexpected error occured</Text>
      </Box>
    );

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} marginY={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
