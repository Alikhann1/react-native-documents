import React from 'react'
import {Text , View , TouchableOpacity , StyleSheet } from 'react-native'
import { auth } from '../firebaseAuth'
import { useNavigation } from '@react-navigation/native'

const seeting = () => {

    const navigation = useNavigation();

    const handleSignout = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('LoginAndRegistration')
            }

            )
    }
  return (
    <View style={styles.container}>
    <Text>Email: {auth.currentUser?.email}</Text>
    <TouchableOpacity
        onPress={handleSignout}
        style={styles.button}>
        <Text style={styles.buttonText}> Sign out</Text>
    </TouchableOpacity>
</View>
  )
}

export default seeting

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
