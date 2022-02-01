import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebaseAuth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './drawerScreen'

const homeScreen = () => {

    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    const Drawer = createBottomTabNavigator();
    const stack = createNativeStackNavigator();

    const handleSignout = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('LoginAndRegistration')
            }

            )
    }

    const tab1 = () => {
        return(
        //     <View style={styles.container}>
        //     <Text>Email: {auth.currentUser?.email}</Text>
        //     <TouchableOpacity
        //         onPress={handleSignout}
        //         style={styles.button}>
        //         <Text style={styles.buttonText}> Sign out</Text>
        //     </TouchableOpacity>
        // </View>
        <Text> Tab one</Text>
        )
    }
    const tab2 = () => {
        return(
            <Text> Tab two</Text>
        )
    }
    const tab3 = () => {
        return(
            <Text> Tab three</Text>
        )
    }
    const tab4 = () => {
        return(
            <Text> Tab four</Text>
        )
    }

    const TabNavigator = () =>{
        return(
            <Tab.Navigator>
            <Tab.Screen name='tab1' component={tab1}/>
            <Tab.Screen name='tab2' component={tab2}/>
            <Tab.Screen name='tab3' component={tab3}/>
            <Tab.Screen name='tab4' component={tab4}/>
            </Tab.Navigator>
        )
    }
    const drawerscr = () => {
        <Text>drawer</Text>
    }

    return (
        <NavigationContainer>
       <Drawer.Navigator>
           <Drawer.Screen name='drawer' component={drawerscr}/>
           <Drawer.Screen name='tab' component={TabNavigator}/>
       </Drawer.Navigator>
       </NavigationContainer>
        
        // <Tab.Navigator>
        // <Tab.Screen name='tab1' component={tab1}/>
        // <Tab.Screen name='tab2' component={tab2}/>
        // <Tab.Screen name='tab3' component={tab3}/>
        // <Tab.Screen name='tab4' component={tab4}/>
        // </Tab.Navigator>

        // <stack.Navigator>
        //     <stack.Screen name = 'drawer' component = {DrawerScreen}/>
        //     <stack.Screen name = 'tab' options={{headerShown : false}} component = {TabNavigator}/>
    
        // </stack.Navigator>
      

        // <View style={styles.container}>
        //     <Text>Email: {auth.currentUser?.email}</Text>
        //     <TouchableOpacity
        //         onPress={handleSignout}
        //         style={styles.button}>
        //         <Text style={styles.buttonText}> Sign out</Text>
        //     </TouchableOpacity>
        // </View>

    )
}

export default homeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40

    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

})
