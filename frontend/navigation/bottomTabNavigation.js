import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screen/(tabs)/home";
import QA from "../screen/(tabs)/qa";
import Books from "../screen/(tabs)/books";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name == 'QA') {
              iconName = focused
              ? 'help-circle' 
              : 'help-circle-outline';
            } else if (route.name == 'Books') {
              iconName = focused
              ? 'book'
              : 'book-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#10CA0C',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Tab.Screen name='QA' component={QA} options={{headerShown: false}}/>
        <Tab.Screen name='Books' component={Books} options={{headerShown: false}}/>
      </Tab.Navigator>
    )
}

export default BottomNavigation;