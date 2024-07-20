import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ScrollView, StyleSheet } from "react-native";
import ImageSlider from "../Components/ImageSlider";
import { GetImages } from "../Api/Api";
import SkeltonLoader from "../Components/SkeltonLoader";

const Search = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(4)
    const [limit, setLimit] = useState(10)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        handleGetImages(page, limit);
    }, [page, limit]);

    const handleGetImages = () => {
        if (page === 4) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        GetImages(page, limit)
            .then((res) => {
                setData([...data, ...res]);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    };

    const ReachedEnd = () => {
        setPage(page + 1)
    }


    return (
        <SafeAreaView style={styles.contaier}>

            {
                loading ? <SkeltonLoader></SkeltonLoader> : <ScrollView>
                    <View style={styles.head}>
                        <Text style={styles.heading}>Discover The World</Text>
                        <TextInput placeholderTextColor="grey" placeholder="Search" style={styles.inputbox}></TextInput>
                    </View>
                    <View style={{ width: "85%", alignSelf: "center" }}>
                        <Image style={styles.banner} resizeMode="cover" source={{ uri: 'https://picsum.photos/400' }}></Image>
                        <Text style={{ position: "absolute", bottom: 10, left: 10, fontSize: 22, fontWeight: "700", color: "#fff" }}>#Top Search of The Day</Text>
                    </View>
                    <ImageSlider titile={"Trending Hashtags"} data={data} ReachedEnd={ReachedEnd}></ImageSlider>
                    <ImageSlider titile={"Top Community"} data={data} ReachedEnd={ReachedEnd} ></ImageSlider>
                    <ImageSlider titile={"Top Nomads"} data={data} ReachedEnd={ReachedEnd} circular={true}></ImageSlider>
                </ScrollView>
            }


        </SafeAreaView>


    )
}

export default Search

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        backgroundColor: "#EBF4FA"
    },
    head: {
        marginTop: 30,
        width: "85%",
        alignSelf: "center"
    },
    heading: {
        fontSize: 30,
        fontWeight: "700",
        color: "#838996"
    },
    inputbox: {
        width: "100%",
        borderColor: "grey",
        fontWeight: "500",
        fontSize: 20,
        paddingLeft: 30,
        marginTop: 10,
        borderRadius: 12,
        borderWidth: 1,
        height: 50
    },
    banner: {
        height: 200,
        width: "100%",
        marginTop: 35,
        borderRadius: 12,
        elevation: 10,
        resizeMode: "cover"
    }
})