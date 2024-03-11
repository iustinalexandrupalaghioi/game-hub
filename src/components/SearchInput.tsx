import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../services/gameQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearch(ref.current?.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
