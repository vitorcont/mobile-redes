import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraWrapper: {
    width: '100%',
    height: '90%',
    zIndex: 1,
  },
  contentWrapper: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
  },
  mainContent: {
    flex: 1,
    position: 'relative',
  },
});

export default styles;
