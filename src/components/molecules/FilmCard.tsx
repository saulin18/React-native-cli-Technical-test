import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { Film } from '../../types/api.types';

interface FilmCardProps {
  film: Film;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text variant="header">{film.titulo}</Text>
        <Text variant="body">Episodio: {film.episodio_id}</Text>
        <Text variant="body">Director: {film.director}</Text>
        <Text variant="body">Estreno: {film.fecha_lanzamiento}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      margin: 8,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2,
    },
  });