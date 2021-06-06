import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {appStyles, Navigation} from './src/services';
import {
  MainWrapper,
  ButtonColored,
  ButtonBordered,
  RowWrapper,
  ButtonColoredSmall,
  ButtonBorderedSmall,
  Wrapper,
} from './src/components';
import {Provider} from 'react-redux';
import store from './src/Redux/index'
console.disableYellowBox = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Provider store={store}>
        <Navigation />
        </Provider>
      </Wrapper>
    );
  }
}

export default App;
