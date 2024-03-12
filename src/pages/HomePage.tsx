import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import GamesHeading from "../components/GamesHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortFilter from "../components/SortFilter";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "max-content 1fr",
      }}
    >
      <Show above="1024px">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <Box paddingLeft={2}>
          <GamesHeading />
          <HStack spacing={5} paddingBottom={2}>
            <PlatformSelector />
            <SortFilter />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
