import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import ErrorPage from "./ErrorPage";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);
  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <>
        <Text>
          Loading...
          <Spinner />
        </Text>
      </>
    );
  return (
    <div>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </div>
  );
};

export default GameDetailsPage;
