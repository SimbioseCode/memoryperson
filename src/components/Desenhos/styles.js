import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
     justifyContent: 'center',
      // backgroundColor: 'black' ,
    // height: 800
  },
 
  card: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20
  },
  
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  title: {
   // fontFamily: 'Poppins_400Regular',
    color: '#000',
    fontSize: 30,
    lineHeight: 50,
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  text:{
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize:20
  }
  
});

export default styles;