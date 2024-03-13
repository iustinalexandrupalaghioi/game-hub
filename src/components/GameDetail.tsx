import { Box, Heading, List, ListItem } from "@chakra-ui/react";

interface Props {}

const GameDetail = () => {
  return (
    <Box marginTop={2}>
      <Heading color={"GrayText"}>Platforms</Heading>
      <List>
        <ListItem>spec1</ListItem>
        <ListItem>spec2</ListItem>
      </List>
    </Box>
  );
};

export default GameDetail;
