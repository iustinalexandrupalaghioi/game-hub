import usePlatforms from "./usePlatforms";

const usePlatform = (id: number | null | undefined) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlatform;
