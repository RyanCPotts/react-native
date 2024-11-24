import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import WalkingMode from './WalkingMode'; // Assuming WalkingMode is in the same directory
import styles from './styles/AppStyles.js'; //Importing separated styles

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

export default App;
