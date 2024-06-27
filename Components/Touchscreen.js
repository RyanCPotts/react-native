import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

const pads = [
  { id: 'kick', label: 'Kick' },
  { id: 'snare', label: 'Snare' },
  { id: 'hihat', label: 'Hi-Hat' },
  { id: 'crash', label: 'Crash' }
];

const Touchscreen = ({ onPadPress }) => {
  const [activePads, setActivePads] = useState([]);

  const handleGestureEvent = (event, padId) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setActivePads((prevPads) => [...prevPads, padId]);
      onPadPress(padId);
    } else if (event.nativeEvent.state === State.END) {
      setActivePads((prevPads) => prevPads.filter((id) => id !== padId));
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {pads.map((pad) => (
        <PanGestureHandler
          key={pad.id}
          onGestureEvent={(event) => handleGestureEvent(event, pad.id)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.pad}>
              <Text style={styles.label}>{pad.label}</Text>
            </View>
          </TouchableWithoutFeedback>
        </PanGestureHandler>
      ))}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pad: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Touchscreen;
