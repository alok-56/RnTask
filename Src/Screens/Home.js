import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';
import {GetImages} from '../Api/Api';
import ImageAction from '../Components/ImageAction';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetImages();
  }, [page, limit]);

  const handleGetImages = () => {
    setLoading(true);
    GetImages(page, limit)
      .then(res => {
        setData([...data, ...res]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageStyle}
          source={{uri: item.download_url}}
          resizeMode="cover"></ImageBackground>
        <View style={styles.textOverlay}>
          <Text style={styles.textStyle}>Caption</Text>
          <Text style={styles.textStyle}>
            I don’t know where I’m going, but I’m on my way. selfie with no
            filter
          </Text>
          <Text style={styles.textStyle}>#Coding#Startup#Life</Text>
        </View>
        <View style={styles.textOverlaytop}>
          <Text style={styles.textStyletop}>FOR YOU</Text>
        </View>
        <ImageAction></ImageAction>
      </View>
    );
  };

  const reachedEnd = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={renderItem}
        pagingEnabled={true}
        snapToInterval={HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onEndReached={reachedEnd}
        onEndReachedThreshold={0.5}
        initialNumToRender={data.length > 1000 ? data.length : 1000}
        maxToRenderPerBatch={data.length > 1000 ? data.length : 1000}
        windowSize={1}
        contentContainerStyle={{minHeight: HEIGHT}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 170 : 100,
    left: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    width: '60%',
  },
  textOverlaytop: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
  textStyletop: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontWeight: 'bold',
  },
});

export default Home;
