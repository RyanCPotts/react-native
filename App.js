import React from 'react';
import { ScrollView, View } from 'react-native';
import { WalkingMode, Footer, Header, styles } from './Components';

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