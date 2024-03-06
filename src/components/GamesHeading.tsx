import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: gameQuery | null;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const genre = data?.results.find((genre) => genre.id === gameQuery?.genre_id);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery?.platform_id
  );
  const heading = `${genre?.name || ""} ${platform?.name || ""}`;
  return <Heading marginY={5}>{heading} Games</Heading>;
};

export default GamesHeading;
