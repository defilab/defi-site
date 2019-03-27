import { createStore } from 'redux'

import {getLocle} from '../util/locale'
const reducer = (state, action) => {
    if(getLocle()){
        return getLocle()
    }
    else{
        return 'Philippines'
    }
};
let store = createStore(reducer);
export default store