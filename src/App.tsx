import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="red">
        Nav
      </GridItem>
      <Show above="1024px">
        <GridItem gridArea="aside" bg="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
