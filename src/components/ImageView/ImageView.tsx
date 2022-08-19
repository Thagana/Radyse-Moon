import React from 'react';
import {Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import styles from './ImageView.style';

type Props = {
  image: string;
};

export default function ImageView(props: Props) {
  const {image} = props;
  return (
    <SharedElement id={`item.${image}.image`}>
      <Image
        source={
          image === null || image === ''
            ? require('../../assets/download.png')
            : {uri: image}
        }
        style={styles.cover}
      />
    </SharedElement>
  );
}
