import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button
          title="Jogos"
          onPress={() => this.props.navigation.navigate('About')}/>
          <Button
          title="Desenhos"
          onPress={() => this.props.navigation.navigate('About')}/>
          <Button
          title="Filmes"
          onPress={() => this.props.navigation.navigate('About')}/>
      </View>
    )
  }
}