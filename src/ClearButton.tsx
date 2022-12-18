import React from 'react';

const ClearButton = (props:any) => {

    const handleClick = () => {
        props.clear();
    }

    return(
        <button className="clear" onClick={handleClick}>Clear</button>
    )
}

export default ClearButton;