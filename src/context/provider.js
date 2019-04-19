import React, { Component } from 'react';
import AddContext from './context';
import { setLocale, getLocale, languageLabels } from '../util/locale'
class AddProvider extends Component {
  state = {
    country: getLocale() === '' ? 'Philippines' : getLocale()
  };
  change = (countryCode) => {
    this.setState({ country: languageLabels[countryCode] });
    setLocale(countryCode)
  }
  render() {
    return (
      <AddContext.Provider
        value={{
          country: this.state.country,
          change: this.change,
        }}
      >
        {this.props.children}
      </AddContext.Provider>
    );
  }
}

export default AddProvider;