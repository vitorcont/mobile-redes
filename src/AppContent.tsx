import { navigationRef } from '@mobile/services/navigation';
import Navigator from '@mobile/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppContent = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
      >
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContent;
