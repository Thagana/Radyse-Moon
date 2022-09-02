import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

import {useStoreState} from 'easy-peasy';

import Welcome from './AuthRoutes/Welcome';
import TabScreen from './HomeRoutes';

export default function App() {
  const isAuth = useStoreState<any>(state => state.isAuth);
  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>();

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const notification = JSON.parse(remoteMessage.data?.payload || '');
      if (notification) {
        //
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}>
      {isAuth ? <TabScreen /> : <Welcome />}
    </NavigationContainer>
  );
}
