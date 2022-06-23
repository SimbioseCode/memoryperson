import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import HomeScreen from './src/Pages/HomeScreen/Homescreen';
import Filmes from './src/components/Filmes/Filmes';
import Desenhos from './src/components/Desenhos/Desenhos';
import Jogos from './src/components/Jogos/Jogos';
import Outros from './src/components/Outros/Outros';
import Personagens from './src/components/Personagens/Personagens';
import Esportes from './src/components/Esportes/Esportes';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Filmes: {
    screen: Filmes
  },
  Desenhos: {
    screen: Desenhos
  },
  Jogos: {
    screen: Jogos
  },
  Outros: {
    screen: Outros
  },
  Personagens: {
    screen: Personagens
  },
  Esportes: {
    screen: Esportes
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});