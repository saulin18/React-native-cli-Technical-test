import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, View } from 'react-native';
import { FilmCard } from '../molecules/FilmCard';
import { Film } from '../../types/api.types';
import { Text } from '../atoms/Text';

interface FilmListProps {
    films: Film[];
  isLoading?: boolean;
  onEndReached?: () => void;
}

const FilmList: React.FC<FilmListProps> = ({ films, isLoading, onEndReached }) => {
    if (isLoading && films.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => <FilmCard film={item} />}
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
};const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    footer: {
      padding: 20,
    },
  }); export default FilmList;