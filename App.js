import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import WalkingMode from './Components/walkingMode.js'; // Assuming WalkingMode is in the same directory
import styles from './Components/styles.js'; //Importing separated styles
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.mainContent}>
        <WalkingMode />
      </ScrollView>

      <Footer />
    </View>
  );
};

export default App;
