import React, { Component } from 'react';

import AddContext from './context';
import { setLocale } from '../util/locale'
class AddProvider extends Component {
  state = {
    conutryCode: 'en-PH'
  };
  change = (conutryCode) => {
    this.setState({ conutryCode: conutryCode });
    setLocal(conutryCode)
  }
  render() {
    return (
      <AddContext.Provider
        value={{
          conutryCode: this.state.conutryCode,
          change: this.change,
        }}
      >
        {this.props.children}
      </AddContext.Provider>
    );
  }
}

export default AddProvider;
