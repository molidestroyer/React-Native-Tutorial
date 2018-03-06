import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

interface IPropsDetailsScreen {
  content: string,
  id: number,
  image: string,
  title: string
}

export class DetailsScreen extends React.Component<IPropsDetailsScreen> {
  constructor(props: { title: string, content: string, image: string, id: number }) {
    super(props);

    // this.state = {
    //   title: props.title,
    //   content: props.content,
    //   image: props.image,
    //   id: props.id
    // }
  }

  // componentWillReceiveProps(nextProps: {} | ((prevState: Readonly<{}>, props: {}) => {} | Pick<{}, never> | null) | Pick<{}, never> | null) {
  //   this.setState(nextProps);
  // }

  render() {

    if (!(this.props.title && this.props.content && this.props.image)) {
      return (
        <View>
          <View></View>
          <Text>Loading</Text>
          <View></View>
        </View>
      );
    }
    else {
      /**
       * we re using dangerouslySetInnerHTML from React to insert content that
       * includes HTML tags into our structure; use this wisely and learn more at
       * https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
       */
      return (
        <View>
          <View></View>
          <Text>{this.props.title}</Text>
          <View>{this.props.content}</View>
        </View>
      );
    }
  }
}