import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: gameQuery | null) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sort,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
