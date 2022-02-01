import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , KeyboardAvoidingView , TouchableOpacity , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/loginScreen';
import homeScreen from './screens/homeScreen';
import registrationScreen from './screens/registrationScreen'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import drawerScreen  from './screens/drawerScreen'




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const LoginAndRegistration = () =>{
//   const navigation = useNavigation();

//   const handleLogin = () =>{
//         navigation.push('Login')
// }
//   const handleRegistration = () =>{
//         navigation.push('registrationScreen')
// }
//   return (
//     <KeyboardAvoidingView style={styles.container} behavior='padding'>
//         <View style = {styles.buttonContainer}>
//           <StatusBar 
//           barSyle = 'dark-content'
//           backgroundColor='red'
//           hidden={false}
//           translucent={false}
//           />
//           <Image source={require('./assets/images/logo.gif')}
//           style={styles.image}
//           />
//             <TouchableOpacity onPress={handleLogin} style={styles.button} >
//                 <Text style = {styles.buttonText}> Login</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleRegistration} style={[styles.button , styles.buttonOutline]} >
//                 <Text style = {styles.buttonOutlineText}>Register</Text>
//             </TouchableOpacity>
//         </View>
//     </KeyboardAvoidingView>
// )
// }

// export default function App() {
//   return (
    
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="LoginAndRegistration" options={{headerShown : false}} component={LoginAndRegistration} />
//       <Stack.Screen name="registrationScreen"  component={registrationScreen} />
//       <Stack.Screen name="Login" LoginAndRegistration component={loginScreen} />
//       <Stack.Screen name="drawer" component={drawerScreen} />
//       <Stack.Screen name="Home" options={{headerShown : false}} component={homeScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// }

const Home = () => {
  return(

    <Text>Home</Text>
  )
};
const Profile = () => {
  return(

    <Text>Profile</Text>
  )
 
};
const Settings = () => {
  return(

    <Text> Settings </Text>
  )
  
};

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={TabNavigator} />
    </Drawer.Navigator>
  );
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
      <Tab.Screen name='tab2' component={tab2}/>
      <Tab.Screen name='tab3' component={tab3}/>
      <Tab.Screen name='tab4' component={tab4}/>
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
