import React from 'react';
import {WebView} from 'react-native-webview';

const LinkView = ({route}: any) => {
  const {url} = route.params;
  return <WebView source={{uri: url}} />;
};

export default LinkView;
