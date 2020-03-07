import {combineReducers} from 'redux'

import eventReducer from './eventReducer'
import filterReducer from './filterReducer'

const allReducers = combineReducers({
   
    eventState: eventReducer,
    filterState: filterReducer
})

export default allReducers

