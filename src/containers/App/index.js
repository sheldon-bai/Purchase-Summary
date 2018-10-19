import React from 'react'
import '../../App.css'
import FeeDetail from '../FeeDetail'
import ItemDetail from '../ItemDetail'
import PromoCode from '../PromoCode'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <FeeDetail />
                <ItemDetail />
                <PromoCode />
            </div>
        )
    }
}


export default App
