import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./Publishers";

export default interface Game {
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
