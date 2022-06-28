import React, { Component , useEffect, useState} from 'react';
import { Button, View, Text , Image, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './styles'; 

// ScreenOrientation.unlockAsync()

export default class Jogos extends Component {
  render() {
    
    return (
      
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memoria</Text>
      
      <View style={{ flex: 0,  flexDirection: 'row', flexWrap: 'wrap'}}>        
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/FallGuys.png')}      />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/Jogos/FallGuys.png')}     />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/StumbleGuys.png')} 
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/StumbleGuys.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/BrawlStars.png')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
        <Image
        style={styles.image}
        source={require('../../../assets/Jogos/BrawlStars.png')}
        />
      </TouchableOpacity> 
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/Roblox.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/Jogos/Roblox.png')}
              />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/SubwaySurfers.png')}
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/SubwaySurfers.png')}
        />
          </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/PkXd.png')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Jogos/PkXd.png')}
                />
        </TouchableOpacity>        
      </View> 
    </View>
    )
  }
}