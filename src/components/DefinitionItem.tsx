import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading as={"dt"} color={"gray.600"}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default DefinitionItem;
