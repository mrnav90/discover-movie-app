import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

export class ShowIf extends React.Component {
  render() {
    if (this.props.condition) {
      if (typeof this.props.children.length !== 'undefined') {
        return (
          <View>{this.props.children}</View>
        );
      } else {
        return this.props.children;
      }
    } else {
      return null;
    }
  }
}

ShowIf.propTypes = {
  condition: PropTypes.bool.isRequired
};

ShowIf.defaultProps = {
  condition: true
};
