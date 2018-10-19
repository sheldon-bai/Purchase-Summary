import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

import { TAX_RATE, SHIP_FEE, DISCOUNT_CODE_PAIR } from '../constants'

import EstFees from '../components/FeeDetail/EstFees'
import EstTotal from '../components/FeeDetail/EstTotal'
import PickupSavings from '../components/FeeDetail/PickupSavings'
import Subtotal from '../components/FeeDetail/Subtotal'



class FeeDetail extends React.Component {
    render() {
        this.sumPrice = this.props.products.reduce((acc, cur) => acc.price + cur.price)
        this.price = Math.round(this.sumPrice * DISCOUNT_CODE_PAIR[this.props.discount] * 100) / 100
        this.tax = this.props.products[0].price * TAX_RATE
        console.log(this.props)
        return (
            <div>
                <Subtotal price={this.price}/>
                <PickupSavings 
                    shipping={SHIP_FEE} 
                    toggleDialog={this.props.toggleDialog}
                    showDialog={this.props.showDialog} 
                    hideDialog={this.props.hideDialog}/>
                <EstFees tax={this.tax}/>
                <EstTotal total={Math.round((this.price + this.tax - SHIP_FEE) * 100) / 100}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    products: state.products,
    discount: state.applyCode,
    toggleDialog: state.toggleDialog,
}) 

const mapDispatchToProps = dispatch => ({
    showDialog: () => {
        dispatch(actions.showDialog())
    },
    hideDialog: () => {
        dispatch(actions.hideDialog())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(FeeDetail)
