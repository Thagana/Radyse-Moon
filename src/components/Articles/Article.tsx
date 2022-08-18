import React from 'react';
import {View, Text, TouchableOpacity, Share, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `${title} | ${description} - ${url}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          //
        } else {
          //
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Closed');
      }
    } catch (error) {
      Alert.alert(error as string);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.imageContainer} onPress={() => {}}>
        <ImageView image={urlToImage} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.cardSource}>
            {source} - {moment(publishedAt, 'YYYYMMDD').fromNow()}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.8}
            onPress={handleShare}>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.8}
            onPress={() => {}}>
            <AntDesign name="download" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Article;
