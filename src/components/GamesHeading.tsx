import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery | null;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.genre?.name || ''} ${gameQuery?.platform?.name || ''}`;
  return <Heading marginY={5}>{heading} Games</Heading>;
};

export default GamesHeading;
