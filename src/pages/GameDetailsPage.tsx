import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);

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
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <SimpleGrid columns={{ base: 1, lg: 2 }} marginY={5}>
        <GameTrailer id={game.id} />
        <GameScreenshots gameId={game.id} />
      </SimpleGrid>
    </div>
  );
};

export default GameDetailsPage;
