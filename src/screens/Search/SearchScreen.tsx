import * as React from 'react';
import {SafeAreaView, TextInput, View, FlatList, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
/** Component */
import Article from '../../components/Articles';

/** news API */
import {getSearchedNews} from '../../functions/newsController';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Search.style';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Loading from '../../components/Loading';

type SERVER_STATES = 'IDLE' | 'LOADING' | 'ERROR' | 'SUCCESS';

type Props = {
  navigation: {
    navigate(param: string): void;
  };
};

const Search = (props: Props) => {
  const {navigation} = props;
  const [term, setterm] = React.useState('');
  const [articles, setArticle] = React.useState([]);
  const [SERVER_STATE, setServerSate] = React.useState<SERVER_STATES>('IDLE');

  const handleSearch = async () => {
    try {
      setServerSate('LOADING');
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
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          onChangeText={val => setterm(val)}
          value={term}
          autoFocus
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" color="#fff" size={widthPercentageToDP(10)} />
        </TouchableOpacity>
      </View>
      {SERVER_STATE === 'LOADING' && <Loading />}
      {SERVER_STATE === 'ERROR' && (
        <View>
          <Text>Something went wrong please try again</Text>
        </View>
      )}
      {SERVER_STATE === 'SUCCESS' && (
        <FlatList
          data={articles}
          renderItem={({item}) => (
            <Article item={item} isDownload={false} navigation={navigation} />
          )}
          keyExtractor={(_, index) => 'key-' + index}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
