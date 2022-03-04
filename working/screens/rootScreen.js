import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View , KeyboardAvoidingView , TouchableOpacity , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './loginScreen';
import homeScreen from './homeScreen';
import registrationScreen from './registrationScreen'
import { useNavigation } from '@react-navigation/native'
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';




const Stack = createNativeStackNavigator();

const LoginAndRegistration = () =>{
  const navigation = useNavigation();

  const handleLogin = () =>{
        navigation.push('Login')
}
  const handleRegistration = () =>{
        navigation.push('registrationScreen')
}
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style = {styles.buttonContainer}>
          <StatusBar 
          barSyle = 'dark-content'
          backgroundColor='red'
          hidden={false}
          translucent={false}
          />
          <Image source={require('../assets/images/logo.gif')}
          style={styles.image}
          />
            <TouchableOpacity onPress={handleLogin} style={styles.button} >
                <Text style = {styles.buttonText}> Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegistration} style={[styles.button , styles.buttonOutline]} >
                <Text style = {styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
)
}

 const rootscreen =() => {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginAndRegistration" options={{headerShown : false}} component={LoginAndRegistration} />
      <Stack.Screen name="registrationScreen" options={{headerShown : false}}  component={registrationScreen} />
      <Stack.Screen name="Login" LoginAndRegistration options={{headerShown : false}} component={loginScreen} />
      <Stack.Screen name="Home" options={{headerShown : false}} component={homeScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  
  );
}

export default rootscreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer : {
    width : '60%',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop : 40,

},
  button : {
    backgroundColor : '#0782F9',
    width : '100%',
    padding : 15,
    borderRadius:10,
    alignItems: 'center'

} ,
buttonOutline : {
    backgroundColor : 'white',
    marginTop :5,
    marginBottom:100,
    borderColor : '#0782F9' , 
    borderWidth : 2
},
buttonText : {
    color : 'white',
    fontWeight : '700',
    fontSize : 16,


},


buttonOutlineText : {
    color : '#0782F9',
    fontWeight : '700',
    fontSize : 16,
},

image:{
  width:150,
  height: 150,
  marginBottom: 150,

},

});
