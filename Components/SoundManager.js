const sounds = {
  kick: require('../assets/sounds/CYCdh_AcouKick-06.wav'),
  snare: require('../assets/sounds/Acoustic-Snare-01.wav'),
  hihat: require('../assets/sounds/Acoustic-Hat-01.wav'),
  crash: require('../assets/sounds/CYCdh_Crash-03.wav'),
  bassDrum: require('../assets/sounds/Q Down Bass Drum.wav'), // New identifier
};

// Modify playSound function to use soundId correctly
export const playSound = async (soundId) => {
  const soundKey = soundId === 'Q Down Bass Drum' ? 'bassDrum' : soundId; // Map to the correct key
  const soundData = loadedSounds[soundKey];
  if (soundData) {
    const { sound } = await Audio.Sound.createAsync(sounds[soundKey]);
    soundData.instances.push(sound);
    await sound.playAsync();
  }
};
