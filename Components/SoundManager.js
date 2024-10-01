import { Audio } from 'expo-av';

// Define your sound files
const sounds = {
  kick: require('../assets/sounds/CYCdh_AcouKick-06.wav'),
  snare: require('../assets/sounds/Acoustic-Snare-01.wav'),
  hihat: require('../assets/sounds/Acoustic-Hat-01.wav'),
  crash: require('../assets/sounds/CYCdh_Crash-03.wav'),
};

// Object to keep track of loaded sounds
const loadedSounds = {};

// Load sounds asynchronously and store multiple instances
export const loadSounds = async () => {
  for (const [key, value] of Object.entries(sounds)) {
    const { sound } = await Audio.Sound.createAsync(value);
    loadedSounds[key] = {
      instances: [sound], // Store an initial instance
    };
  }
};

// Play a sound and allow multiple instances to play
export const playSound = async (soundId) => {
  const soundData = loadedSounds[soundId];
  if (soundData) {
    // Create a new instance of the sound to avoid stopping the currently playing instance
    const { sound } = await Audio.Sound.createAsync(sounds[soundId]);
    soundData.instances.push(sound); // Store the new instance
    await sound.playAsync();
  }
};

// Unload sounds to free resources
export const unloadSounds = async () => {
  for (const soundData of Object.values(loadedSounds)) {
    for (const sound of soundData.instances) {
      await sound.unloadAsync();
    }
  }
};
