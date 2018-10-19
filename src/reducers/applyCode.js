import { DISCOUNT_TYPE } from '../constants'

const applyCode = (state = 'NONE', action) => {
    if (!DISCOUNT_TYPE.includes(action.code)) {
        return state
    }
    switch(action.type) {
        case 'APCODE':
            return action.code
        default:
            return state
    }
}

export default applyCode