import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import colors from "./app/constant/colors";
import strings from './app/constant/strings';
//Import external files
import Home from './app/screens/Home';
import RegisterUser from './app/screens/RegisterUser';
import UpdateUser from './app/screens/UpdateUser';
import ViewAllUser from './app/screens/ViewAllUser';
import DeleteUser from './app/screens/DeleteUser';

const HomeNavigtion = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: strings.screenHeading.home,
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: colors.white,
    },
  },
 
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: strings.screenHeading.viewAll,
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: colors.white,
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: strings.screenHeading.updateUser,
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: colors.white,
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: strings.screenHeading.register,
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: colors.white,
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: strings.screenHeading.delete,
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: colors.white,
    },
  },
});

const App = createSwitchNavigator(
	{
    HomeNavigtion
	},
);
export default createAppContainer(App);