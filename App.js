import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoEmpire from './assets/LogoEmpire.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoEmpire} style={styles.logo}/>
      <Text style={styles.titleText}>StarWars - Wiki</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 64,
    height: 64
  },
  titleText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    marginTop: 12,
  }
});
