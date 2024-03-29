import React from "react";
import useGames from "../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <InfiniteScroll
      dataLength={
        data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0
      }
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding={"10px"}
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={6}
      >
        {error && <Text>{error.message}</Text>}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
