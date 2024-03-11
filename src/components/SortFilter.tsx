import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { sortOrders } from "../data/sortOrder";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../services/gameQueryStore";

const SortFilter = () => {
  const setOrder = useGameQueryStore((s) => s.setOrder);
  const sort = useGameQueryStore((s) => s.gameQuery.sort);

  const order = sortOrders.find((filter) => filter.value === sort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {order?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((filter) => (
          <MenuItem
            onClick={() => {
              setOrder(filter.value);
            }}
            key={filter.value}
          >
            {filter.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortFilter;
