import useGenres from "./useGenres";

const useGame = (id: number | null | undefined) => {
  const { data: genres } = useGenres();

  return genres?.results.find((genre) => genre.id === id);
};
export default useGame;
