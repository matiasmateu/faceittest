import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '@screens/FeedScreen';
import PostScreen from '@screens/PostScreen';
import UserScreen from '@screens/UserScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="User" component={UserScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};
