import * as React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';

/** Component */
import Article from '../../components/Articles';

/** news API */
import {getSearchedNews} from '../../functions/newsController';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Search.style';

const Home = () => {
  const [term, setterm] = React.useState('');
  const [articles, setArticle] = React.useState([]);
  const [SERVER_STATE, setServerSate] = React.useState('IDLE');

  const handleSearch = async () => {
    try {
      const {data, success} = await getSearchedNews(term);
      if (success) {
        const mapped = data.map(
          (item: {
            source: {name: string};
            author: string;
            name: string;
            urlToImage: string;
            publishedAt: string;
            url: string;
            title: string;
            description: string;
          }) => ({
            source: item.source.name || 'unknown',
            author: item.author || 'unknown',
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt,
            title: item.title,
            url: item.url || 'https://theultimatenews.xyz',
            description: item.description,
          }),
        );
        setArticle(mapped);
        setServerSate('SUCCESS');
      } else {
        setServerSate('ERROR');
      }
    } catch (error) {
      console.log(error);
      setServerSate('ERROR');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput
        placeholder="Search"
        onChangeText={val => setterm(val)}
        value={term}
        autoFocus
        style={styles.textInput}
        keyboardAppearance="dark"
      />
      <View>
        <ScrollView>
          <View>
            {SERVER_STATE === 'SUCCESS' &&
              articles.map((item, index) => {
                return <Article key={index} item={item} isDownload={false} />;
              })}
            {SERVER_STATE === 'IDLE' && (
              <View style={styles.viewContainer}>
                <TouchableOpacity
                  onPress={handleSearch}
                  disabled={term === ''}
                  style={styles.textInput}>
                  <Text>FIRE SEARCH</Text>
                </TouchableOpacity>
              </View>
            )}
            {SERVER_STATE === 'ERROR' && (
              <View style={styles.searchBtn}>
                <Text>FAILED TO SEARCH</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
