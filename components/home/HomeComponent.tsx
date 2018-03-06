import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { Button, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Service } from '../../services/services';
import { List, ListItem, SearchBar } from 'react-native-elements';

interface IStateHomeComponent {
    page: number,
    seed: number,
    loading: boolean,
    data: any[],
    error: any,
    refreshing: boolean
}

export class HomeComponent extends React.Component<any, IStateHomeComponent> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        this.setState({ loading: true });
        Service.requestRandomData(page, seed).then((res) => {
            this.setState({
                data: page === 1 ? res.results : [...this.state.data, ...res.results],
                error: res.error || null,
                loading: false,
                refreshing: false
            });
        }).catch(error => {
            this.setState({ error, loading: false });
        });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return <View></View>;
    
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => item.email}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                />
            </List>
        );
    }
}