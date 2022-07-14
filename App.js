import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import Details from './components/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return (
        <View style={s.container}>
            <ActivityIndicator size='large' color='#293462'/>
        </View>
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen 
            name="Details" 
            component={Details} 
            options={{headerShown: true, title: '7 Days Forecast', headerTitleStyle: s.titleStyle}}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const s = StyleSheet.create({
  titleStyle: {
    color: '#3A5BA0',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_700Bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
