import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortFilter from "./components/SortFilter";
import GamesHeading from "./components/GamesHeading";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "max-content 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
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

export default App;
