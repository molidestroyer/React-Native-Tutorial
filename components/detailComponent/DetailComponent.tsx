import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Button } from 'react-native-elements';
import { UserModel } from '../../models/userModel';

interface IPropsDetailsScreen {
  item: UserModel
}

export class DetailsScreen extends React.Component<IPropsDetailsScreen> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: 'Deatil user',
      headerRight: (
        <View style={{flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row' }}>
          <Button onPress={() => {
            navigation.navigate('CameraComponent', {})
          }}
            title="+C" color="#fff" />

          <Button onPress={() => {
            navigation.navigate('BarcodeComponent', {})
          }}
            title="+B" color="#fff" />
        </View>
      ),
    };
  };

  constructor(props: any) {
    super(props);
    console.log(props.item);

  }
  // componentWillReceiveProps(nextProps: {} | ((prevState: Readonly<{}>, props: {}) => {} | Pick<{}, never> | null) | Pick<{}, never> | null) {
  //   this.setState(nextProps);
  // }

  render() {

    return (
      <Card title="User carde">
        <View style={this.styles.user}>
          <Avatar
            xlarge
            rounded
            source={{ uri: this.props.item.picture.large }}
            onPress={() => console.log("Workeds!")}
            activeOpacity={0.7}
          />
          <Text style={this.styles.name}>{this.props.item.name.title} {this.props.item.name.first} {this.props.item.name.last}</Text>
          <Text>{this.props.item.cell}</Text>
          <Text>{this.props.item.email}</Text>
          <Text>{this.props.item.gender}</Text>
          <View style={this.styles.lineStyle} />
          <Text>{this.props.item.location.city}</Text>
          <Text>{this.props.item.location.postcode}</Text>
          <Text>{this.props.item.location.state}</Text>
          <Text>{this.props.item.location.street}</Text>
          <View style={this.styles.lineStyle} />
          <Text>{this.props.item.phone}</Text>
          <View style={this.styles.lineStyle} />
          <Text>Registered on {this.props.item.registered}</Text>
        </View>
      </Card>
    );
  }

  styles = StyleSheet.create({
    lineStyle: {
      borderWidth: 0.5,
      borderColor: 'black',
      margin: 10,
    },
    user: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto'
    },
    name: {
      fontSize: 30,
      color: 'blue',
      fontWeight: 'normal',
    },
  });
}