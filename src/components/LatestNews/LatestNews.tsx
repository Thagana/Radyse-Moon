import {FlatList} from 'react-native';
import React from 'react';
import LatestItem from '../Articles/LatestItem';

type Props = {
  latest: any[];
};

export default function LatestNews(props: Props) {
  const {latest} = props;
  return (
    <FlatList
      horizontal
      data={latest}
      renderItem={({item}) => <LatestItem item={item} />}
    />
  );
}
