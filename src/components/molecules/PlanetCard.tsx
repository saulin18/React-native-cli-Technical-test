import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { Planet } from '../../types/api.types';

interface PlanetCardProps {
  planet: Planet;

}

export const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text variant="header">{planet.nombre}</Text>
      <Text variant="body">Clima: {planet.clima}</Text>
      <Text variant="body">Terreno: {planet.terreno}</Text>
      <Text variant="body">Población: {planet.poblacion}</Text>
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