import placeholder from "../assets/no-image-placeholder-6f3882e0.webp";
const getCropedImageUrl = (url: string) => {
  if(!url) return placeholder;
  const target = "media/";
  const indexOfTarget = url.indexOf(target) + target.length;
  return (
    url.slice(0, indexOfTarget) + "crop/600/400/" + url.slice(indexOfTarget)
  );
};
export default getCropedImageUrl;
