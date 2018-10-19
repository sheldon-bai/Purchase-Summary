import store from './configureStore';
import ItemDetail from '../containers/ItemDetail';

describe('Test for store', () => {
  it('Should have the init value', () => {
    const initState = {
      products: [
        {
          name: 'OFM Essentials Racecar-Style Leather Gaming Chair, Multiple Colors',
          price: 102.96,
          qty: 1,
          image: 'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
        }],
        toggleItemDetail: 'hide',
        togglePromotion: 'hideP',
    }
    expect(store.getState()).toEqual(initState)
  })
});