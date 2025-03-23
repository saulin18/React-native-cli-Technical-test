import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, View } from 'react-native';
import { CharacterCard } from '../molecules/CharacterCard';
import { Character } from '../../types/api.types';
import { Text } from '../atoms/Text';

interface CharacterListProps {
  characters: Character[];
  onCharacterPress: (character: Character) => void;
  isLoading?: boolean;
  onEndReached?: () => void;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onCharacterPress,
  isLoading,
  onEndReached,
}) => {
  if (isLoading && characters.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <CharacterCard
          character={item}
          onPress={() => onCharacterPress(item)}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          <View style={styles.footer}>
            <ActivityIndicator />
          </View>
        ) : null
      }
      ListEmptyComponent={
        <View style={styles.centered}>
          <Text variant="body">No se encontraron personajes</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    padding: 20,
  },
});