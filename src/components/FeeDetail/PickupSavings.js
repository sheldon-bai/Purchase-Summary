import React from 'react'
import { PICKUP_SAVING_ALERT } from '../../constants'
const PickupSavings = (props) => {
    return (
        <div className='pickup-saving'>
            <p className='saving'>
                <a href={'#'} onClick={props.showDialog} className='left-text'>Pickup savings</a>
                <p className='right-text'>-${props.shipping}</p>
            </p>
            {props.toggleDialog === 'hideD' ? null :
            (<div className='dialog dialog-box' onClick={props.hideDialog}>
                <span className='triangle'></span>
                <p>{PICKUP_SAVING_ALERT}</p>
            </div>)
            }
        </div>
    )
}

export default PickupSavings 