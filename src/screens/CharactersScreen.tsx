import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../services/api.service';
import { CharacterList } from '../components/organisms/CharacterList';
import { Text } from '../components/atoms/Text';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Character } from '../types/api.types';

type Props = NativeStackScreenProps<RootStackParamList, 'Characters'>;

export const CharactersScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['characters', searchQuery],
    queryFn: ({ pageParam }) => 
      searchQuery
        ? api.searchCharacters(searchQuery, pageParam)
        : api.getCharacters(pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      return Number(url.searchParams.get('page'));
    },
    initialPageParam: 1,
  });

  const characters = data?.pages.flatMap((page: { results: any; }) => page.results) || [];

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleCharacterPress = (character: Character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="header">Star Wars Personajes</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar personajes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <CharacterList
        characters={characters}
        onCharacterPress={handleCharacterPress}
        isLoading={isLoading || isFetchingNextPage}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

// Mantener los mismos estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
}); 