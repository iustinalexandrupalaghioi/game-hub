import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: images, error, isLoading } = useGameScreenshots(gameId);
  if (error)
    return (
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>Unexpected error occured</Text>
      </Box>
    );
  if (isLoading)
    return (
      <Text>
        Is Loading... <Spinner />
      </Text>
    );
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2}>
      {images?.results.map((image) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
