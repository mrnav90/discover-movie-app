import React, { Component } from 'react';
import moment from 'moment';
import { Text } from 'react-native';

export default class DateTime extends Component {
  render() {
    const format = this.props.format ? this.props.format : 'MM/DD/YYYY HH:mm';
    return (
      <Text style={this.props.style}>{moment(Date.parse(this.props.date)).format(format)}</Text>
    );
  }
}
