const getCropedImageUrl = (url: string) => {
  const target = "media/";
  const indexOfTarget = url.indexOf(target) + target.length;
  return (
    url.slice(0, indexOfTarget) + "crop/600/400/" + url.slice(indexOfTarget)
  );
};
export default getCropedImageUrl;
