import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import Map from './screens/Map';

import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import { init } from './util/database';

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding when the app loads
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Initialize the database
        await init();
        setDbInitialized(true); // Mark the database as initialized
      } catch (error) {
        console.error('Database initialization failed:', error);
      } finally {
        // Hide the splash screen after the database is initialized
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!dbInitialized) {
    // Optionally render something else while waiting for db initialization, though SplashScreen is handling this
    return null;
  }

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
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favourite Place',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              )
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a New Place'
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
