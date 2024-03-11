import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGame from "../hooks/useGame";
import useGameQueryStore from "../services/gameQueryStore";

const GamesHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genre_id);
  const genre = useGame(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platform_id);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""}`;
  return <Heading marginY={5}>{heading} Games</Heading>;
};

export default GamesHeading;
