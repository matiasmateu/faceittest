import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import FeedScreen from '@screens/FeedScreen';
import PostScreen from '@screens/PostScreen';
import UserScreen from '@screens/UserScreen';
import store from '@redux/store';
import { RootStackParamList } from '@interfaces/navigation';
import { SCREENS } from '@interfaces/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREENS.FEED_SCREEN}>
          <Stack.Screen name={SCREENS.FEED_SCREEN} component={FeedScreen} />
          <Stack.Screen name={SCREENS.POST_SCREEN} component={PostScreen} />
          <Stack.Screen name={SCREENS.USER_SCREEN} component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
