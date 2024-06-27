import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { playSound } from './SoundManager'; // Import playSound function from SoundManager

const pads = [
  { id: 'kick', label: 'Kick' },
  { id: 'snare', label: 'Snare' },
  { id: 'hihat', label: 'Hi-Hat' },
  { id: 'crash', label: 'Crash' }
];

const Speaker = ({ onPadPress }) => {
  return (
    <View style={styles.container}>
      {pads.map((pad) => (
        <TouchableOpacity
          key={pad.id}
          style={styles.pad}
          onPress={() => {
            playSound(pad.id); // Play sound when pad is pressed
            if (onPadPress) onPadPress(pad.id); // Optionally pass the pad id up to a parent component
          }}
        >
          <Text style={styles.label}>{pad.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Speaker;
