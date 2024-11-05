<<<<<<< HEAD
/**
 * App.js
 * 
 * Main application component that initializes sound management,
 * handles the layout of the app, and renders the header, speaker, 
 * and footer components. It also manages pad press events.
 */

=======
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Accelerometer } from 'react-native-sensors';
>>>>>>> 3b8f3e72994658d946ef498eebfa07a0dc4c61ee

const WalkingMode = () => {
  const [cadence, setCadence] = useState(0);

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const subscription = new Accelerometer({
      updateInterval: 100,
    }).subscribe(({ x, y, z }) => {
      // Calculate and update cadence based on accelerometer data
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <View>
      <Text>Current Cadence: {cadence} steps/min</Text>
    </View>
  );
};

export default WalkingMode;
>>>>>>> 3b8f3e72994658d946ef498eebfa07a0dc4c61ee
