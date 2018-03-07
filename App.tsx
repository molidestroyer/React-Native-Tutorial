import * as React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import { HomeComponent } from './components/home/HomeComponent';
import { DetailsScreen } from './components/detailComponent/DetailComponent';
import { StackNavigator } from 'react-navigation';
import { BarcodeComponent } from './components/barcodeReaderComponent/barcodeComponent';
import { CameraComponent } from './components/cameraComponent/cameraComponent';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const mapNavigationStateParamsToProps = (SomeComponent: any) => {
  return class extends React.Component<any> {
      static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
      render() {
          const { navigation: {state: {params}}} = this.props
          return <SomeComponent {...params} {...this.props} />
      }
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeComponent,
    },
    Details: {
      screen: mapNavigationStateParamsToProps(DetailsScreen) ,
    },
    BarcodeComponent:{
      screen: BarcodeComponent,
    },
    CameraComponent:{
      screen: CameraComponent,
    }
  },
  {
    initialRouteName: 'Home',
  }
);


