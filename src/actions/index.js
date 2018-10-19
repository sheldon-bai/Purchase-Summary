export const showItemDetail = () => ({
    type: 'SHOW',
})

export const hideItemDetail = () => ({
    type: 'HIDE',
})

export const showPromotion = () => ({
    type: 'SHOWP',
})

export const hidePromotion = () => ({
    type: 'HIDEP',
})

export const applyCode = (code) => ({
    type: 'APCODE',
    code
})

export const showDialog = () => ({
    type: 'SHOWD',
})

export const hideDialog = () => ({
    type: 'HIDED',
})