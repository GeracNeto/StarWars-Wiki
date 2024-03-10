import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Components
import { CustomText } from '../../components';
import { Logo } from '../../components';
import { ThemeProvider } from 'styled-components/native';

const theme = {
  bg: '#fff'
}

export const SplashScreen = () => {
  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <Logo />
      <CustomText>Star Wars - Wiki</CustomText>
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
