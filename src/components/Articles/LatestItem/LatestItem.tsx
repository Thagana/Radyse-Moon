import * as React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import styles from './Latest.styles';

type Props = {
  item: {
    urlToImage: string;
    title: string;
    source: string;
    publishedAt: string;
  };
};

export default function LatestItem(props: Props) {
  const {urlToImage, title, source, publishedAt} = props.item;
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={{uri: urlToImage}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.sourceText}>{source}</Text>
          </View>
          <View>
            <Text style={styles.pipe}>|</Text>
          </View>
          <View>
            <Text style={styles.publishedAtText}>
              {moment(publishedAt, 'YYYYMMDD').fromNow()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
