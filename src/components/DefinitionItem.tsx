import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading
        as={"dt"}
        color={"gray.600"}
        fontSize={{ base: "medium", md: "x-large" }}
      >
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default DefinitionItem;
