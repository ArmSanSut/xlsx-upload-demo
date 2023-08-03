import {combineReducers} from 'redux'
import excelReducer from './excelReducer'

const rootReducer = combineReducers({
    excelData: excelReducer
})

export default rootReducer