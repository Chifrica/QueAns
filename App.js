import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './frontend/screen/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './frontend/screen/signup';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <<View style={styles.container}>
    //   <Login />
    //   <StatusBar style="auto" />
    // </View>>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={
            {headerShown: false}
            }
        />

<Stack.Screen 
          name='Signup' 
          component={Signup} 
          options={
            {headerShown: false}
            }
        />
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
});
