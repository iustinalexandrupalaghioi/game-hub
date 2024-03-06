import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortFilter from "./components/SortFilter";
import GamesHeading from "./components/GamesHeading";

export interface gameQuery {
  genre_id: number | null;
  platform_id: number | null;
  sort: string | null;
  searchText: string;
  pageSize: number;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="1024px">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre_id}
            onSelectGenre={(genre_id) =>
              setGameQuery({ ...gameQuery, genre_id })
            }
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <Box paddingLeft={2}>
          <GamesHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform_id}
              onSelectPlatform={(platform_id) =>
                setGameQuery({ ...gameQuery, platform_id })
              }
            />
            <SortFilter
              sort={gameQuery.sort}
              setSort={(sort) => setGameQuery({ ...gameQuery, sort })}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
