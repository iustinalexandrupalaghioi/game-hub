import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../services/gameQueryStore";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (location.pathname !== "/") {
          navigate("/");
        }
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
