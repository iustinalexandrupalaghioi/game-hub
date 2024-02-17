import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorModeText =
    colorMode.charAt(0).toUpperCase() +
    colorMode.substring(1, colorMode.length);
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>{colorModeText}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
