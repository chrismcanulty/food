import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    }
  }
);

export default createAppContainer(navigator);


// Yelp API

// Client ID
// Aj5EazIznW_5ZBxuwPED2w

// API Key
// MxCsrM_lBrAG1dkBtc8T2SR2yL4YfrYxPlKkJ4CEoySq5R4CD-hanESEHXo-UvZhqYe1oyso4V7TvHC7mpuDBsAQgFh20Uf2-X1Kb3gRXrBoS3VLcEJ-ZRFC9UGIY3Yx
