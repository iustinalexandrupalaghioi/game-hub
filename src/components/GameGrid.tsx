import React from "react";
import { gameQuery } from "../App";
import useGames from "../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery, {
    pageSize,
  });
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Box padding={"10px"}>
      {error && <Text>{error.message}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
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
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading...." : "Load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
