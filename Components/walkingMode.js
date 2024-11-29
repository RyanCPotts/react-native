import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { playSound } from './SoundManager';
import styles from 'styles/WalkingModeStyles.js';

const WalkingMode = () => {
  const [cadence, setCadence] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [lastY, setLastY] = useState(0);
  const cadenceInterval = useRef(null);

  useEffect(() => {
    const subscription = Accelerometer.addListener(handleAccelerometerData);

    return () => {
      subscription.remove();
      clearInterval(cadenceInterval.current);
    };
  }, []);

  const handleAccelerometerData = ({ y }) => {
    const threshold = 1.5;
    console.log("Accelerometer data:", data);


    if (y < -threshold && lastY >= -threshold) {
      playSound('Q Down Bass Drum');
      setStepCount(prev => prev + 1);
    } else if (y > threshold && lastY <= threshold) {
      playSound('Acoustic-Snare-01');
      setStepCount(prev => prev + 1);
    }

    setLastY(y);
  };

  useEffect(() => {
    cadenceInterval.current = setInterval(() => {
      setCadence(stepCount * 60);
      setStepCount(0);
    }, 1000);

    return () => clearInterval(cadenceInterval.current);
  }, [stepCount]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Walking Mode</Text>
      <Text style={styles.cadence}>Cadence: {cadence.toFixed(0)} BPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { /* styles */ },
  title: { /* styles */ },
  cadence: { /* styles */ },
});

export default WalkingMode;
