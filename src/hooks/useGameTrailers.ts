import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const useGameTrailes = (id: number) => {
  const apiClient = new APIClient<Trailer>("/games");
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: () => apiClient.getTriller(id),
  });
};

export default useGameTrailes;
