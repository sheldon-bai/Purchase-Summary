const toggleItemDetail = (state = 'hide', action) => {
    switch (action.type) {
        case 'SHOW':
            return 'show'
        case 'HIDE':
            return 'hide'
        default:
            return state
    }
}
export default toggleItemDetail