import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import RequestSent from './screens/RequestSent';
import RequestInbox from './screens/RequestInbox';
import { useNavigation } from '@react-navigation/core';
import ProgressTaaruf from './screens/ProgressTaaruf';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="HomeTab" component={Home} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          />
        <Stack.Screen name="Request Sent" component={RequestSent} />
        <Stack.Screen name="Progress" component={ProgressTaaruf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function Home() {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: "#85586F",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Request Inbox"
      component={RequestInbox}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="message" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
     </Tab.Navigator>
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
