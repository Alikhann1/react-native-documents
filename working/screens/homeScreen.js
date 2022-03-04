import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllProduct from './AllProduct';
import productCategories from './productCategories';
import seeting from './seeting';
import addToCart from './addToCart';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  useSelector } from 'react-redux';

const homeScreen = () => {

    const data = useSelector((state) => state.cartItem);

    const Tab = createBottomTabNavigator();

    return (  
        
        
        <Tab.Navigator screenOptions={{
            headerShown : false,
            tabBarShowLabel : false,
            tabBarStyle : {
                backgroundColor : '#ECECEC',
                margin : '10px'
            },
            tabBarInactiveTintColor : 'gray',
            tabBarActiveTintColor : 'blue'
            }}>
            <Tab.Screen name='Home' component={AllProduct}
            options={{headerShown : false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen name='Categories'  component={productCategories}
             options={{ headerShown : false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="collage" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen name='Seeting'  component={seeting}
            options={{ headerShown : false, tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-settings-sharp" color={color} size={size} />
              ),
            }}/>
            <Tab.Screen name='Cart'  component={addToCart}
            options={{ headerShown : false, tabBarBadge : data.length,
                tabBarBadgeStyle : ({
                    
                }),
                tabBarIcon: ({ color, size } ) => (
                <MaterialCommunityIcons name="cart-arrow-down" color={color} size={size} />
              ),
            }}/>
            </Tab.Navigator>
    )}

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
