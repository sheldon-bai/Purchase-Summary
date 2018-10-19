import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class ItemDetail extends React.Component {
    handleClick = (e) => {
        alert('abc')
    }
    render() {
        console.log(this.props.products)
        return (
            <div className='item-detail'>
                {this.props.toggleItemDetail === 'hide' ?
                (<div><a href='#' onClick={this.props.showItemDetail}>See item details<span className='plus'>+</span></a></div>) :
                (<div className='item-details'>
                    <div><a href='#' onClick={this.props.hideItemDetail}>Hide item detail<span className='minus'>-</span></a></div>
                    {
                        this.props.products.map(item => {
                            return (
                                <div className='item'>
                                    <div className='item-image'><img src={item.image} alt='abc'/></div>
                                    <p>{item.name}</p>
                                    <p><span>${item.price}</span><span className='right-text'>Qty: {this.props.products[0].qty}</span></p>
                                </div>
                            )
                        })
                    }
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    toggleItemDetail: state.toggleItemDetail,
}) 

const mapDispatchToProps = dispatch => ({
    showItemDetail: () => {
        dispatch(actions.showItemDetail())
    },
    hideItemDetail: () => {
        dispatch(actions.hideItemDetail())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
