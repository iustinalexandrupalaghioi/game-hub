import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="1024px">
        <GridItem gridArea="aside">Aside</GridItem>
      </Show>
      <GridItem gridArea="main">Main</GridItem>
    </Grid>
  );
};

export default App;
