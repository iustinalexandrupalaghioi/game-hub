import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
        <Skeleton boxSize='32px'/>
        <SkeletonText/>
    </HStack>
  );
};

export default GenreListSkeleton;
