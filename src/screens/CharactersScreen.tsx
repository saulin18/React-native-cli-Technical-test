import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from '../components/atoms/Text';
import { CharacterList } from '../components/organisms/CharacterList';
import { useCharacters } from '../hooks/useCharacters';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Characters'>;

export const CharactersScreen: React.FC<Props> = ({ navigation }) => {
  const {
    searchQuery,
    setSearchQuery,
    characters,
    isLoading,
    isFetchingNextPage,
    handleEndReached,
    handleCharacterPress,
  } = useCharacters(navigation);

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
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  link: {
    padding: 8,
    borderRadius: 8,
  },
  pressed: {
    backgroundColor: '#e0e0e0',
  },
  linkText: {
    color: '#2c3e50',
    fontWeight: '500',
  },
});