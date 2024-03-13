import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";

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
      <GameTrailer id={game.id} />
    </div>
  );
};

export default GameDetailsPage;
