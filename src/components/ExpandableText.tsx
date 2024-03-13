import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = children.substring(0, limit);
  return (
    <Text>
      {!expanded ? summary + "..." : children}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
