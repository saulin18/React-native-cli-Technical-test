import React from 'react';
import { PlanetsList } from '../components/organisms/PlanetList'
import { usePlanets } from '../hooks/usePlanets';

export const PlanetsScreen = () => {
  const {  data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, } = usePlanets();

    const planets = data?.pages || [];

    const fetchMore = () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

  return (
    <PlanetsList
      planets={planets}
      isLoading={isLoading}
      onEndReached={fetchMore}
    />
  );
};