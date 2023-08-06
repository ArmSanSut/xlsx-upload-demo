import {combineReducers} from 'redux'
import excelReducer from './excelReducer'
import paginationReducer from './paginationReducer'

const rootReducer = combineReducers({
    excelData: excelReducer,
    pagination: paginationReducer,
})

export default rootReducer