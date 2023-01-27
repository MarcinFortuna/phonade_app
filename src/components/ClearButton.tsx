import React, {MouseEventHandler} from 'react';
import {useAppContext} from "../libs/ContextLib";

const ClearButton = () => {

    const ctx = useAppContext();

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        ctx?.setInputBoxValue("");
    }

    return (
        <button className="btn w-1/2 btn-secondary" onClick={handleClick}>Clear</button>
    )
}

export default ClearButton;