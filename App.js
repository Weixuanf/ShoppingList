import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Events from './src/components/Events';
import Groups from './src/components/Groups';
import EventDetail from './src/components/EventDetail';
import AddPeople from './src/components/AddPeople';


const DrawerNav = DrawerNavigator({
  Events: {
    screen: Events
  },
  ClockInOut: {
    screen: Groups
  },
  SignOut: {
    screen: Events
  }
}, {
  drawerWidth: 300
});

const RootStack = StackNavigator(
  {
    MainApp: {
      screen: DrawerNav,
    },
    //Events drawer tab
    EventDetail: {
      screen: EventDetail
    },
    AddPeople: {
      screen: AddPeople
    },
    //Clock in out drawer tab
    Groups: {
      screen: Groups,
    }
  },
  {
    initialRouteName: 'MainApp',
    headerMode: 'none',
  }
);

export default RootStack;
