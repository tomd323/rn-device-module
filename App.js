import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 }
          }}
        >
          <Stack.Screen name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favourite Place',
              headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />

            })}
          />
          <Stack.Screen name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a New Place'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
