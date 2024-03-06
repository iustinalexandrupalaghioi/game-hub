import { gameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";
const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: gameQuery | null) => {
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
    staleTime: 24 * 60 * 60 * 1000, //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export default useGames;
