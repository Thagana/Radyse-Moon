import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import ImageView from '../ImageView';

import styles from './Article.style';

type Props = {
  item: any;
  isDownload: boolean;
};

const Article = (props: Props) => {
  const {item} = props;
  const {url, urlToImage, title, description, source, publishedAt} = item;

  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <ImageView image={urlToImage} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.headerText} lineBreakMode="tail">
            {title}
          </Text>
        </View>
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
