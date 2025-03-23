
import React from 'react';
import FilmList  from '../components/organisms/FilmList';
import { useFilms } from '../hooks/useFilms';

export const FilmsScreen = () => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFilms();

  const films = data?.pages || [];

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FilmList
      films={films}
      isLoading={isLoading || isFetchingNextPage}
      onEndReached={handleEndReached}
    />
  );
};
