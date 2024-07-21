import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ImageSlider = ({titile, data, ReachedEnd, circular}) => {
  const [loading, setLoading] = useState(Array(data.length).fill(true));
  console.log(loading);

  const handleImageLoad = index => {
    const updatedLoading = [...loading];
    updatedLoading[index] = false;
    setLoading(updatedLoading);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.titile}>{titile}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#838996',
            marginTop: 5,
          }}>
          See All
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onEndReached={ReachedEnd}
        onEndReachedThreshold={0.5}
        horizontal
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              {loading[index] && (
                <SkeletonPlaceholder borderRadius={4}>
                  <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center"
                    marginTop={20}
                    marginLeft={20}>
                    <SkeletonPlaceholder.Item width={140} height={160} />
                    <SkeletonPlaceholder.Item
                      width={140}
                      height={160}
                      marginLeft={10}
                    />
                    <SkeletonPlaceholder.Item
                      width={140}
                      height={160}
                      marginLeft={10}
                    />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              )}
              {circular ? (
                <View>
                  <Image
                    style={{
                      height: 100,
                      marginLeft: index === 0 ? 0 : 10,
                      width: 100,
                      marginTop: 10,
                      borderRadius: 100,
                    }}
                    onLoad={() => handleImageLoad(index)}
                    source={{uri: item.download_url}}></Image>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 10,
                      textAlign: 'center',
                      marginBottom: 15,
                    }}>
                    {item.author.slice(0, 11)}
                  </Text>
                </View>
              ) : (
                <>
                  <Image
                    style={{
                      height: 150,
                      marginLeft: index === 0 ? 0 : 10,
                      width: 150,
                      marginTop: 10,
                      borderRadius: 10,
                    }}
                    onLoad={() => handleImageLoad(index)}
                    source={{uri: item.download_url}}></Image>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 20,
                      bottom: 10,
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    #{item.author.slice(0, 11)}
                  </Text>
                </>
              )}
            </>
          );
        }}
      />
    </View>
  );
};
export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 25,
  },
  headers: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titile: {
    fontSize: 24,
    fontWeight: '700',
    color: '#838996',
  },
  skeltonitem:{
    
  }
});
