import React from 'react'

const EstFees = (props) => {
    return (
        <div className='est-fees'>
            <p className='left-text'>Est. taxes & fees (Based on 94085)</p>
            <p className='right-text'>${Math.round(props.tax * 100) / 100}</p>
        </div>
    )
}

export default EstFees