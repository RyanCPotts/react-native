/**
 * App.js
 * 
 * Main application component that initializes sound management,
 * handles the layout of the app, and renders the header, speaker, 
 * and footer components. It also manages pad press events.
 */


import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { loadSounds, unloadSounds } from './Components/SoundManager'; // Adjusted import paths
import Speaker from './Components/Speaker'; // Adjusted import paths
import Header from './Components/Header'; // Import the Header component
import Footer from './Components/Footer'; // Import the Footer component

const App = () => {
  useEffect(() => {
    // Load sound files when the component mounts
    loadSounds();
     // Cleanup function to unload sounds when the component unmounts
  return () => {
    unloadSounds();
  };
}, []);

const handlePadPress = (padId) => {
  // Log the ID of the pressed pad; this function can be expanded
  // to trigger sound playback or other actions associated with the pad.
  console.log(`Pressed pad: ${padId}`);
};


return (
  <View style={styles.container}>
    {/* Render the Header component */}
    <Header />

    {/* Main content area with scrollable speaker pads */}
    <ScrollView contentContainerStyle={styles.mainContent}>
      <Speaker onPadPress={handlePadPress} />
    </ScrollView>

    {/* Render the Footer component */}
    <Footer />
  </View>
);


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
