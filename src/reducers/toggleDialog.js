const toggleDialog = (state = 'hideD', action) => {
    switch(action.type) {
        case 'SHOWD':
            return 'showD'
        case 'HIDED':
            return 'hideD'
        default:
            return state
    }
}

export default toggleDialog