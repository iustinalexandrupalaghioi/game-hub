import { create } from "zustand";
interface gameQuery {
  genre_id?: number;
  platform_id?: number;
  sort?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: gameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setOrder: (order: string) => void;
  setSearch: (searchTexttext: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as gameQuery,
  setSearch: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genre_id: genreId } })),
  setPlatform: (plaformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platform_id: plaformId },
    })),
  setOrder: (order) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sort: order } })),
}));

export default useGameQueryStore;
