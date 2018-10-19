import React from 'react'

const ApplyPromo = (props) => {
    let input
    return(
        <div className='promo-code'>
            <p>Promo Code</p>
            <input ref = {
                node => {
                    input = node
                }
            } onKeyDown = {
                e => {
                    if (e.key === 'Enter') {
                        props.applyCode(input.value)
                        input.value = ''
                    }
                }
            } />
            <button onClick = {() => {
                props.applyCode(input.value)
                input.value = ''
            }}>
                Apply
            </button>
        </div>
    )
}
export default ApplyPromo