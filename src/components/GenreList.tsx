import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import getCropedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../services/gameQueryStore";

const GenreList = () => {
  const genre_id = useGameQueryStore((s) => s.gameQuery.genre_id);
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const { data, isLoading, error } = useGenres();
  const genresSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  if (isLoading)
    return (
      <List>
        {genresSkeletons.map((genre) => (
          <GenreListSkeleton key={genre} />
        ))}
      </List>
    );
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="10px"
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === genre_id ? "Bold" : "Normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
