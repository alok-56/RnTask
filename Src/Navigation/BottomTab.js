import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import { Platform, Image, StyleSheet } from 'react-native';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import Community from '../Screens/Community';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS === "ios" ? 90 : 80,
                },
                tabBarLabelStyle: {
                    marginBottom: Platform.OS === "ios" ? 5 : 10
                }
            }
        }>

            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image style={styles.imagestyle} source={require('../Assets/Images/home.png')}></Image>
                ),
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image style={styles.imagestyle} source={require('../Assets/Images/search.png')}></Image>
                ),
            }} name="Discover" component={Search} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image style={styles.imagestyle} source={require('../Assets/Images/add.png')}></Image>
                ),
            }} name="Create" component={Community} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image style={[styles.imagestyle, { tintColor: "black" }]} source={require('../Assets/Images/community.png')}></Image>
                ),
            }} name="Community" component={Profile} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image style={[styles.imagestyle, { tintColor: "black" }]} source={require('../Assets/Images/user.png')}></Image>
                ),
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default BottomTab


const styles = StyleSheet.create({
    imagestyle: {
        height: 30,
        width: 30
    }
})