import React from 'react';

import { createStack } from '@mobile/services/navigation';
import Home from './Home';

const ContentStack = () => {
  const Content = createStack();

  return (
    <Content.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Content.Screen name="HomeScreen" component={Home} />
    </Content.Navigator>
  );
};

export default ContentStack;
