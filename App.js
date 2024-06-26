import { StyleSheet, Text, View } from 'react-native';
import Login from './frontend/screen/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './frontend/screen/signup';
import BottomNavigation from './frontend/navigation/bottomTabNavigation';
import English from './frontend/screen/questionHome/subjects/english';
import Correct from './frontend/screen/questionHome/correct';
import Math from './frontend/screen/questionHome/subjects/maths';
import Chemistry from './frontend/screen/questionHome/subjects/chemistry';
import Physics from './frontend/screen/questionHome/subjects/physics';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* StackNavigation */}
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

        <Stack.Screen 
          name='MainApp' 
          component={BottomNavigation} 
          options={
            {headerShown: false}
          }
        />

        <Stack.Screen 
          name='EnglishQuestion'
          component={English}
          options={
            {headerShown: false}
          }
        />

        <Stack.Screen 
          name='Correct'
          component={Correct}
          options={
            {headerShown: false}
          }
        />

        <Stack.Screen 
          name='MathQuestion'
          component={Math}
          options={
            {headerShown: false}
          }
        />

        <Stack.Screen 
          name='ChemistryQuestion'
          component={Chemistry}
          options={
            {headerShown: false}
          }
        />

        <Stack.Screen 
          name='PhysicsQuestion'
          component={Physics}
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
