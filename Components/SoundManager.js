// SoundManager.js
import { Audio } from 'expo-av';

// This will hold references to all the active sounds being played
const activeSounds = [];

// This function will play a sound based on its name
export const playSound = async (motionType) => {
  try {
    const soundFiles = {
      'DOWN': require('../assets/sounds/Q-Down-Bass-Drum.wav'),
      'UP': require('../assets/sounds/Acoustic-Snare-01.wav'),
      'PIVOT': require('../assets/sounds/jungle.wav'), // Example for pivot sound
      // Add more sounds as needed
    };

    if (!soundFiles[motionType]) return;

    // Create and load sound object
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(soundFiles[motionType]);
    await soundObject.playAsync();

    // Track this sound in the active sounds array
    activeSounds.push(soundObject);

    // Clean up when the sound finishes playing
    soundObject.setOnPlaybackStatusUpdate((status) => {
      if (!status.isPlaying) {
        // Remove the sound from active sounds and unload it
        const index = activeSounds.indexOf(soundObject);
        if (index !== -1) {
          activeSounds.splice(index, 1);
        }
        soundObject.unloadAsync();
      }
    });
  } catch (error) {
    console.error('Error loading or playing sound', error);
  }
};
