import React from 'react'

const Subtotal = (props) => {
    return (
        <div>
            <p className='left-text'>Subtotal</p>
            <p className='right-text'>${props.price}</p>
        </div>
    )
}

export default Subtotal