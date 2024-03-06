import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGame from "../hooks/useGame";

interface Props {
  gameQuery: gameQuery | null;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery?.platform_id);
  const genre = useGame(gameQuery?.genre_id);
  const heading = `${genre?.name || ""} ${platform?.name || ""}`;
  return <Heading marginY={5}>{heading} Games</Heading>;
};

export default GamesHeading;
