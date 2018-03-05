import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeComponent } from './components/home/HomeComponent';
import { DetailsScreen } from './components/detailComponent/DetailComponent';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeComponent,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

