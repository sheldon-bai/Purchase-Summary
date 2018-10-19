import {combineReducers} from 'redux'
import products from './products'
import toggleItemDetail from './toggleItemDetail'
import togglePromotion from './togglePromotion'
import applyCode from './applyCode'
import toggleDialog from './toggleDialog'

const reducers = combineReducers({
    products,
    toggleItemDetail,
    togglePromotion,
    applyCode,
    toggleDialog,
})

export default reducers