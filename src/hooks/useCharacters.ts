import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useCallback } from 'react';
import { api } from '../services/api.service';
import { Character } from '../types/api.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type CharactersScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Characters'
>;

export const useCharacters = (navigation: CharactersScreenNavigationProp) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['characters', searchQuery],
      queryFn: ({ pageParam }) =>
        searchQuery
          ? api.searchCharacters(searchQuery, pageParam)
          : api.getCharacters(pageParam),
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return undefined;
        const matches = lastPage.next.match(/page=(\d+)/);
        return matches ? parseInt(matches[1], 10) : undefined;
      },
      initialPageParam: 1,
    });

  const characters = data?.pages.flatMap((page) => page.results) || [];

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleCharacterPress = useCallback(
    (character: Character) => {
      navigation.navigate('CharacterDetail', { character });
    },
    [navigation]
  );

  return {
    searchQuery,
    setSearchQuery,
    characters,
    isLoading,
    isFetchingNextPage,
    handleEndReached,
    handleCharacterPress,
  };
};