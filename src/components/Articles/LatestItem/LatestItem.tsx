import * as React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import styles from './Latest.styles';
import {SharedElement} from 'react-navigation-shared-element';

type Props = {
  navigation: {
    navigate(param: string, payload: any): void;
  };
  item: {
    urlToImage: string;
    title: string;
    source: string;
    publishedAt: string;
    description: string;
    url: string;
  };
};

export default function LatestItem({item, navigation}: Props) {
  const {urlToImage, title, source, publishedAt, description, url} = item;
  const handleNavigate = () => {
    navigation.navigate('ArticleDetails', {
      urlToImage,
      title,
      source,
      publishedAt,
      description,
      url,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View>
        <SharedElement id={`item.${urlToImage}.image`}>
          <Image source={{uri: urlToImage}} style={styles.image} />
        </SharedElement>
      </View>
      <View style={styles.content}>
        <View>
          <SharedElement id={`item.${urlToImage}.title`}>
            <Text style={styles.titleText}>{title}</Text>
          </SharedElement>
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
