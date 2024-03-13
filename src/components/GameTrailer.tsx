import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGameTrailes from "../hooks/useGameTrailers";
interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data: movies, error, isLoading } = useGameTrailes(id!);
  if (isLoading)
    return (
      <Text>
        Is Loading... <Spinner />
      </Text>
    );
  if (error)
    return (
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>Unexpected error occured</Text>
      </Box>
    );

  return (
    <video controls>
      <source src={movies?.results[0].data.max} type="video/mp4" />
      <p>Your browser cannot play the provided video file.</p>
    </video>
  );
};

export default GameTrailer;
