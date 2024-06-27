import { Audio } from 'expo-av';

const sounds = {
  kick: require('../assets/sounds/CYCdh_AcouKick-06.wav'),
  snare: require('../assets/sounds/Acoustic Snare-01.wav'),
  hihat: require('../assets/sounds/Acoustic Hat-01.wav'),
  crash: require('../assets/sounds/CYCdh_Crash-03.wav'),
};

const loadedSounds = {};

// Load sounds asynchronously
export const loadSounds = async () => {
  for (const [key, value] of Object.entries(sounds)) {
    const { sound } = await Audio.Sound.createAsync(value);
    loadedSounds[key] = sound;
  }
};

// Play a sound immediately
export const playSound = async (soundId) => {
  const sound = loadedSounds[soundId];
  if (sound) {
    await sound.replayAsync();
  }
};

// Unload sounds to free resources
export const unloadSounds = async () => {
  for (const sound of Object.values(loadedSounds)) {
    await sound.unloadAsync();
  }
};
