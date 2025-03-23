import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { Character } from '../../types/api.types';

interface CharacterCardProps {
  character: Character;
  onPress?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Text variant="title">{character.nombre}</Text>
        <Text variant="body">Género: {character.genero}</Text>
        <Text variant="body">Año de nacimiento: {character.anio_nacimiento}</Text>
        <Text variant="caption">
          Características físicas:
        </Text>
        <Text variant="caption">
          Altura: {character.altura}cm, Peso: {character.peso}kg
        </Text>
        <Text variant="caption">
          Color de ojos: {character.color_ojos}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};
