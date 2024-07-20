import React from "react";
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";


const HEIGHT = Dimensions.get("window").height;
const ImageAction = () => {
    
    return (
        <View style={{ position: "absolute", top: Platform.OS === "ios" ? HEIGHT / 2.3 : HEIGHT / 2.1, right: 20 }}>
            <TouchableOpacity>
                <Image style={{ tintColor: "#fff", height: 30, width: 30 }} source={require('../Assets/Images/add-user.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{ tintColor: "#fff", height: 30, width: 30, marginTop: 20 }} source={require('../Assets/Images/conversation.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{ tintColor: "#fff", height: 30, width: 30, marginTop: 20 }} source={require('../Assets/Images/heart.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{ tintColor: "#fff", height: 30, width: 30, marginTop: 20 }} source={require('../Assets/Images/share.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{ tintColor: "#fff", height: 30, width: 30, marginTop: 20 }} source={require('../Assets/Images/send.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default ImageAction