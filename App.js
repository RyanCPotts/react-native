import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import WalkingMode from './WalkingMode'; // Assuming WalkingMode is in the same directory

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header component */}
      <Header />

      {/* WalkingMode as the main content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <WalkingMode />
      </ScrollView>

      {/* Footer component */}
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
