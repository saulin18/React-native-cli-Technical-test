import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, View } from 'react-native';
import { PlanetCard } from '../molecules/PlanetCard';
import { Planet } from '../../types/api.types';
import { Text } from '../atoms/Text';

interface PlanetsListProps {
  planets: Planet[];
  isLoading?: boolean;
  onEndReached?: () => void;
}

export const PlanetsList: React.FC<PlanetsListProps> = ({
  planets,
  isLoading,
  onEndReached,
}) => {
  if (isLoading && planets.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={planets}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <PlanetCard planet={item}  />
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
          <Text variant="body">No se encontraron planetas</Text>
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