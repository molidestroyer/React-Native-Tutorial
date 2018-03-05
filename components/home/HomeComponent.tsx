import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { Button, View, Text } from 'react-native';

export class HomeComponent extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="hola" onPress={() => this.props.navigation.navigate('Details')}>
                </Button>
            </View>
        );
    }
}