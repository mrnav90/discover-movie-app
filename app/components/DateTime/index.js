import React from 'react';
import moment from 'moment';
import { Text } from 'react-native';

export default (props) => {
 const format = props.format ? props.format : 'MM/DD/YYYY HH:mm';
 return (
   <Text style={props.style}>{moment(Date.parse(props.date)).format(format)}</Text>
 );
};
