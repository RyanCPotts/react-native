// App.js

import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { loadSounds, unloadSounds } from './Components/SoundManager'; // Adjusted import paths
import Speaker from './Components/Speaker'; // Adjusted import paths
import Header from './Components/Header'; // Import the Header component
import Footer from './Components/Footer'; // Import the Footer component

const App = () => {
  useEffect(() => {
    loadSounds();
    return () => {
      unloadSounds();
    };
  }, []);

  const handlePadPress = (padId) => {
    console.log(`Pressed pad: ${padId}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Speaker onPadPress={handlePadPress} />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  mainContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
