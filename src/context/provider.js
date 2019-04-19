import React, { Component } from 'react';
import RegionContext from './context';
import { setLocale, getLocale } from '../util/locale'

class RegionProvider extends Component {
    state = {
        countryCode: getLocale() === '' ? 'en-PH' : getLocale()
    };
    change = (countryCode) => {
        this.setState({ countryCode: countryCode });
        setLocale(countryCode)
    }
    render() {
        return (
            <RegionContext.Provider value={{ countryCode: this.state.countryCode, change: this.change }}>
                {this.props.children}
            </RegionContext.Provider>
        );
    }
}

export default RegionProvider;