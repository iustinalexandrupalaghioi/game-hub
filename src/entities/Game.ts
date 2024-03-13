import { Genre } from "./Genre";
import { Platform } from "./Platform";

interface Publishers {
  id: number;
  name: string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  publishers: Publishers[];
  genres: Genre[];
}
