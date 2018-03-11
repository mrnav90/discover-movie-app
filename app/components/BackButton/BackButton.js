import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

class BackButton extends React.Component {

  static defaultProps = {
    color: '#418ADB'
  }

  render() {
    return <MaterialIcons size={40} color={this.props.color} name="navigate-before" onPress={() => { this.props.navigation.goBack(); }} />;
  }
}

export default withNavigation(BackButton);
