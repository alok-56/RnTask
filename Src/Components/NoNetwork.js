import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NoNetwork = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../Assets/Images/network.jpg")}
				style={styles.image}
			/>
			<Text style={styles.text}>No network connection</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff" 
	},
	image: {
		width: 350,
		height: 350,
		marginBottom: 20
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333" 
	}
});

export default NoNetwork;
