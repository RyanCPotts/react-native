import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Touchscreen from './Components/Touchscreen';
import { loadSounds, playSound, unloadSounds } from './Components/SoundManager';

// Main App Component
export default function App() {
  const [currentSound, setCurrentSound] = useState(null);

  useEffect(() => {
    // Load sounds when the component mounts
    loadSounds();

    // Cleanup sounds when the component unmounts
    return () => {
      unloadSounds();
    };
  }, []);

  const handlePadPress = (padId) => {
    setCurrentSound(padId);
    playSound(padId); // Play the sound immediately
  };

  return (
    <View style={styles.container}>
      <Touchscreen onPadPress={handlePadPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
