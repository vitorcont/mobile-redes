import AppContent from '@mobile/AppContent';
import store from '@mobile/store';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let fonts = {
  'Segoe-UI': require('./src/fonts/SegoeUI.ttf'),
  'Segoe-UI-Bold': require('./src/fonts/SegoeUIBold.ttf'),
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(fonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    try {
      _loadFontsAsync();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
      <AppContent />
    </Provider>
  );
};

export default App;
