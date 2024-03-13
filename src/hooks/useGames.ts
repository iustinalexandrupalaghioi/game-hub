import APIClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../services/gameQueryStore";
import { Game } from "../entities/Game";
const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre_id,
          parent_platforms: gameQuery?.platform_id,
          ordering: gameQuery?.sort,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"), //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export default useGames;
