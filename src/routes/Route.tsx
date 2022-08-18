import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {useStoreState} from 'easy-peasy';

import Welcome from './AuthRoutes/Welcome';
import TabScreen from './HomeRoutes';

export default function App() {
  const isAuth = useStoreState<any>(state => state.isAuth);

  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      {isAuth ? <TabScreen /> : <Welcome />}
    </NavigationContainer>
  );
}
