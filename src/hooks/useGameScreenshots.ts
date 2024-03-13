import { useQuery } from "@tanstack/react-query";
import { GameScreenshot } from "../entities/GameScreenshot";
import APIClient from "../services/api-client";
import ms from "ms";
const useGameScreenshots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshot>(
    "/games/" + gameId + "/screenshots"
  );

  return useQuery({
    queryKey: ["images", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameScreenshots;
