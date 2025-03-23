
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Pressable } from 'react-native';
import { CharactersScreen } from '../screens/CharactersScreen';
import { PlanetsScreen } from '../screens/PlanetsScreen';
import { FilmsScreen } from '../screens/FilmsScreen';
import { CharacterDetailScreen } from '../screens/CharacterDetailScreen';
import { Text } from '../components/atoms/Text';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HeaderButtons = ({ navigation }: { navigation: any }) => (
  <View style={styles.headerButtons}>
    <Pressable
      onPress={() => navigation.navigate('Planets')}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>Planetas</Text>
    </Pressable>
    <Pressable
      onPress={() => navigation.navigate('Films')}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>Películas</Text>
    </Pressable>
  </View>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Characters"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={({ navigation }) => ({
            title: 'Personajes',
            headerRight: () => <HeaderButtons navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Planets"
          component={PlanetsScreen}
          options={{ title: 'Planetas' }}
        />
        <Stack.Screen
          name="Films"
          component={FilmsScreen}
          options={{ title: 'Películas' }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{ title: 'Detalle del Personaje' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2c3e50',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    marginRight: 16,
    gap: 20,
  },
  button: {
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
  },
});