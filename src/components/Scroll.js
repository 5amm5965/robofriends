import React from 'react'

const Scroll = (props) => {

    return (
        <div style={{ overflowY: 'scroll', height: '50rem' }}>
            {props.children}
        </div>
    )

}

export default Scroll