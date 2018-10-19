import * as actions from './index'

describe('purchase actions', () => {
    it('show promotion code create SHOWP action', () => {
        expect(actions.showPromotion()).toEqual({
            type: 'SHOWP',
        })
    })

    it('hide promotion code create HIDEP action', () => {
        expect(actions.hidePromotion()).toEqual({
            type: 'HIDEP',
        })
    })

    it ('apply promotion code create APCODE action', () => {
        expect(actions.applyCode('DISCOUNT')).toEqual({
            type: 'APCODE',
            code: 'DISCOUNT',
        })
    })
})