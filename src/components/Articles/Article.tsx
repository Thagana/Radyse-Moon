import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import ImageView from '../ImageView';
import {SharedElement} from 'react-navigation-shared-element';

import styles from './Article.style';

type Props = {
  item: any;
  isDownload: boolean;
  navigation: {
    navigate(param: string, payload: any): void;
  };
};

const Article = (props: Props) => {
  const {item, navigation} = props;
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
    <TouchableOpacity style={styles.card} onPress={handleNavigate}>
      <ImageView image={urlToImage} />
      <View style={styles.content}>
        <SharedElement id={`item.${item.urlToImage}.title`}>
          <Text style={styles.headerText} lineBreakMode="tail">
            {title}
          </Text>
        </SharedElement>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.sourceText}>{source}</Text>
          </View>
          <View>
            <Text style={styles.pipe}>-</Text>
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
};

export default Article;
