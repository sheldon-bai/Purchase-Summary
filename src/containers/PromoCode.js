import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import ApplyPromo from '../components/ApplyPromo'

class PromoCode extends React.Component {
    handleClick = (e) => {
        alert('promo code')
    }
    render() {
        return (
            <div className='promo'>
                {
                    this.props.togglePromotion === 'hideP' ?
                    (<a href='#' onClick={this.props.showPromotion}>Apply promo code</a>) :
                    (<div>
                        <a href='#' onClick={this.props.hidePromotion}>Hide promo code</a>
                        <ApplyPromo applyCode={this.props.applyCode}/>
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    togglePromotion: state.togglePromotion,
}) 

const mapDispatchToProps = dispatch => ({
    showPromotion: () => {
        dispatch(actions.showPromotion())
    } ,
    hidePromotion: () => {
        dispatch(actions.hidePromotion())
    },
    applyCode: (code) => {
        dispatch(actions.applyCode(code))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)
