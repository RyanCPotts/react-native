import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { playSound } from './SoundManager';

const WalkingMode = () => {
  const [cadence, setCadence] = useState(0); // Steps per minute
  const [stepCount, setStepCount] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const subscription = Accelerometer.addListener((data) => {
      handleAccelerometerData(data);
    });

    // Cleanup function to stop the accelerometer and clear interval
    return () => {
      subscription.remove();
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleAccelerometerData = (data) => {
    const threshold = 1.5; // Adjust this threshold based on testing
    const { y } = data; // Use the y-axis for detecting vertical movement

    // Check if the accelerometer data indicates a downward movement
    if (y < -threshold && lastY >= -threshold) {
      playSound('Q Down Bass Drum'); // Play bass drum sound
      setStepCount(prev => prev + 1); // Increment step count
    } else if (y > threshold && lastY <= threshold) {
      playSound('Acoustic-Snare-01'); // Play snare sound
      setStepCount(prev => prev + 1); // Increment step count
    }

    // Update lastY for next comparison
    setLastY(y);
  };

  useEffect(() => {
    // Update cadence every millisecond
    const cadenceInterval = setInterval(() => {
      const newCadence = (stepCount * 60) / (1 / 1000); // Convert to steps per minute
      setCadence(newCadence);
      setStepCount(0);
    }, 1000); // Update cadence every second for smoother response

    setIntervalId(cadenceInterval);

    // Cleanup cadence interval on unmount
    return () => clearInterval(cadenceInterval);
  }, [stepCount]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Walking Mode</Text>
      <Text style={styles.cadence}>Cadence: {cadence.toFixed(0)} BPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cadence: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WalkingMode;
