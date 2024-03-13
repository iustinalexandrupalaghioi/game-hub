import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

import ErrorPage from "./ErrorPage";
import ExpandableText from "../components/ExpandableText";

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
  if (error || !game) return <ErrorPage />;
  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </div>
  );
};

export default GameDetailsPage;
