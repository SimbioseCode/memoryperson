import React, { Component } from 'react';
import { Button, View, Text , Image, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './styles'; 


// ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

export default class Homescreen extends Component {
  
  render() {
    return (
      
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memoria</Text>
      
      <View style={{ flex: 0,  flexDirection: 'row', flexWrap: 'wrap'}}>        
        <TouchableOpacity style={styles.card} onPress={()=>{this.props.navigation.navigate('Desenhos'); }}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Desenhos.png')}      />
          <Text style={styles.text} >Desenhos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('Jogos')}}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Jogos.png')}
                />
           <Text style={styles.text} >Jogos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('Personagens')}}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Personagens.png')}     />
           <Text style={styles.text} >Personagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('Filmes')}}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Filmes.png')}      />
           <Text style={styles.text} >Filmes</Text>
        </TouchableOpacity>     

         <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('Personagens')}}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Esports.png')}     />
           <Text style={styles.text} >Esports</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('Outros')}}>
          <Image
          style={styles.image}
          source={require('../../../assets/Home/Configura.png')}     />
           <Text style={styles.text} >Configura</Text>
        </TouchableOpacity>         
      </View> 
    </View>
    )
  }
}