import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { loadSounds, unloadSounds, playSound } from './Components/SoundManager'; // Adjust the import path
// import Touchscreen from './Components/Touchscreen'; // Adjust the import path
import Speaker from './Components/Speaker'; // Adjust the import path

const App = () => {
  useEffect(() => {
    // Load sounds when the component mounts
    loadSounds();

    // Clean up by unloading sounds when the component unmounts
    return () => {
      unloadSounds();
    };
  }, []);

  const handlePadPress = (padId) => {
    // Play sound corresponding to the pad pressed
    playSound(padId);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* <Touchscreen onPadPress={handlePadPress} /> */}
        <Speaker onPadPress={handlePadPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default App;
