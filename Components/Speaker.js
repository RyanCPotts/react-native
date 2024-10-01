// Speaker.js

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Vibration, useWindowDimensions } from 'react-native';
import { playSound } from './SoundManager'; // Import playSound function from SoundManager

const padSize = 100; // Adjust pad size based on your preference
const padMargin = 10; // Adjust margin between pads

const pads = [
  { id: 'hihat', label: 'Hi-Hat' },
  { id: 'snare', label: 'Snare' },
  { id: 'kick', label: 'Kick' },
];

const Speaker = ({ onPadPress }) => {
  const windowWidth = useWindowDimensions().width; // Get the current window width
  const windowHeight = useWindowDimensions().height; // Get the current window height
  const isPortrait = windowWidth < windowHeight; // Check if the current orientation is portrait

  return (
    <View style={[styles.container, !isPortrait && styles.landscapeContainer]}>
      {/* Crash above the row */}
      <View style={styles.crashContainer}>
        <TouchableOpacity
          key="crash"
          style={[styles.pad, styles.crashPad]}
          onPress={() => {
            playSound('crash'); // Play sound for crash
            Vibration.vibrate(50); // Vibrate for 50 milliseconds
            if (onPadPress) onPadPress('crash'); // Optionally pass the pad id up to a parent component
          }}
        >
          <Text style={styles.label}>Crash</Text>
        </TouchableOpacity>
      </View>

      {/* Row of Pads */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          key={pads[0].id}
          style={[styles.pad, styles.hihatPad]}
          onPress={() => {
            playSound(pads[0].id); // Play sound for hi-hat
            Vibration.vibrate(50); // Vibrate for 50 milliseconds
            if (onPadPress) onPadPress(pads[0].id); // Optionally pass the pad id up to a parent component
          }}
        >
          <Text style={styles.label}>{pads[0].label}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={pads[1].id}
          style={[styles.pad, styles.snarePad]}
          onPress={() => {
            playSound(pads[1].id); // Play sound for snare
            Vibration.vibrate(50); // Vibrate for 50 milliseconds
            if (onPadPress) onPadPress(pads[1].id); // Optionally pass the pad id up to a parent component
          }}
        >
          <Text style={styles.label}>{pads[1].label}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={pads[2].id}
          style={[styles.pad, styles.kickPad]}
          onPress={() => {
            playSound(pads[2].id); // Play sound for kick
            Vibration.vibrate(50); // Vibrate for 50 milliseconds
            if (onPadPress) onPadPress(pads[2].id); // Optionally pass the pad id up to a parent component
          }}
        >
          <Text style={styles.label}>{pads[2].label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align pads at the top
    alignItems: 'center',
    marginTop: 50, // Adjusted margin for top position in portrait mode
  },
  landscapeContainer: {
    marginTop: 0, // Adjusted margin for top position in landscape mode
  },
  crashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row', // Arrange pads horizontally
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: padSize * 0.5, // Space between crash and pads row
  },
  pad: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: padSize / 2, // Make pads circular
    width: padSize,
    height: padSize,
  },
  crashPad: {
    marginBottom: padMargin, // Space below crash pad
  },
  hihatPad: {
    marginRight: padMargin, // Space between hi-hat and snare
  },
  snarePad: {
    marginHorizontal: padMargin, // Space between snare and kick
  },
  kickPad: {
    marginLeft: padMargin, // Space between kick and screen edge
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Speaker;
