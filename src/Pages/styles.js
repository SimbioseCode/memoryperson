import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0083c0',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
   // fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
   //fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonLogin: {
    height: 50,
    width: '18%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#111ec1',
  },

  buttonSecondary: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    //fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    //fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;