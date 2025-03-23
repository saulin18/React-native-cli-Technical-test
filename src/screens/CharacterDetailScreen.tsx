import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '../components/atoms/Text';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetail'>;

export const CharacterDetailScreen: React.FC<Props> = ({route}) => {
  const {character} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text variant="header">{character.nombre}</Text>

        <View style={styles.detailRow}>
          <Text variant="body">{character.altura} cm</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="body">{character.peso} kg</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="body">{character.anio_nacimiento}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="body">{character.genero}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="body">{character.color_ojos}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="body">{character.color_piel}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
