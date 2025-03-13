import { registerRootComponent } from 'expo';
import App from './App';

// Register the main component of the app
try {
  registerRootComponent(App);
} catch (error) {
  console.error('Error registering root component:', error);
}

// Export components and styles
export { default as WalkingMode } from './Components/walkingMode';
export { default as Footer } from './Components/Footer';
export { default as Header } from './Components/Header';
export { default as styles } from './Components/styles';