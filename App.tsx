import * as React from 'react';
import {View, Text} from 'react-native';
import {
  createStore,
  StoreProvider as Provider,
  useStoreRehydrated,
} from 'easy-peasy';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';

import Routes from './src/routes/Route';

import Store from './src/Store/model';

type Props = Provider['props'] & {children: React.ReactNode};

const StoreProviderCasted = Provider as unknown as React.ComponentType<Props>;

const store = createStore(Store);

export const RootWrapper = () => {
  const isHydrated = useStoreRehydrated();

  if (isHydrated) {
    return <Routes />;
  }
  return (
    <View>
      <Text>Loading ...</Text>
    </View>
  );
};

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <StoreProviderCasted store={store}>
      <RootWrapper />
      <FlashMessage position="top" />
    </StoreProviderCasted>
  );
}
