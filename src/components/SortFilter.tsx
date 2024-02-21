import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { sortOrders } from "../data/sortOrder";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSort: (filter: string) => void;
  sort: string | null;
}
const SortFilter = ({ setSort, sort }: Props) => {
  
  

  const order = sortOrders.find(filter => filter.value === sort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {order?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((filter) => (
          <MenuItem
            onClick={() => {
              setSort(filter.value);
              
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
