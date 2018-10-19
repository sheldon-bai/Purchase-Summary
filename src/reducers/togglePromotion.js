const togglePromotion = (state = 'hideP', action) => {
    switch (action.type) {
        case 'SHOWP':
            return 'showP'
        case 'HIDEP':
            return 'hideP'
        default:
            return state
    }
} 

export default togglePromotion