import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FormHeader from './components/FormHeader';
import FormSelectorBtn from './components/FormSelectorBtn';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <FormHeader
            leftHeading="Welcome "
            rightHeading="Back"
            subHeading="Tony Stark!!"
          />
        </View>
        <View style={styles.touchableMainView}>
          <FormSelectorBtn
            style={styles.borderLeft}
            backgroundColor="rgba(27,27,51,1)"
            title="Login"
          />
          <FormSelectorBtn
            style={styles.borderRight}
            backgroundColor="rgba(27,27,51,0.4)"
            title="Sign up"
          />
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <LoginForm />
          <ScrollView>
            <SignUpForm />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 60,
  },
  subView: {
    height: 80,
  },
  touchableMainView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
