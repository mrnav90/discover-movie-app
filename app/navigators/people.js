import { StackNavigator } from 'react-navigation';
import PeopleScreen from '../screens/PeopleScreen';

const PeopleNavigator = StackNavigator({
  people: {
    screen: PeopleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'People',
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb'
      }
    })
  }
});

export { PeopleNavigator };
