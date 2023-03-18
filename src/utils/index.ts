import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const getDimensions = () => {
  return { screenWidth, screenHeight };
};

export { getDimensions };
