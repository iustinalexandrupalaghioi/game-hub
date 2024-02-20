import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  filter,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSort: (filter: string) => void;
  sort: string | null;
}
const SortFilter = ({ setSort, sort }: Props) => {
  
  const sortOrders = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Date Realesed" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

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
