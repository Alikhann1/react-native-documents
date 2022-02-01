import * as React from 'react'
import {Platform, Pressable,  StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';



export default function drawerScreen() {
    const navigation = useNavigation();
    const Drawer = createDrawerNavigator()

    const drawerscr = () => {
        return (

            <Text>drawer</Text>
        )
    }

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='drawer' component={drawerscr}/>
        </Drawer.Navigator>    
    )
}



const styles = StyleSheet.create({})
