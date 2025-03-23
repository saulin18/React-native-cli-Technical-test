import { Character } from '../types/api.types';

export type RootStackParamList = {
  Home: undefined;
  Characters: undefined;
  CharacterDetail: { character: Character };
  Films: undefined;
  Planets: undefined;
}; 