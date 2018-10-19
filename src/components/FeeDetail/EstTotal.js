import React from 'react'

const EstTotal = (props) => {
    return (
        <div className='est-total'>
            <p className='left-text'>Est. total</p>
            <p className='right-text'>${props.total}</p>
        </div>
    )
}

export default EstTotal