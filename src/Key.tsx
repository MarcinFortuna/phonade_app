import React from 'react';

const Key = (props:any) => {

    const handleClick = async () => {
        console.log(props.idx);
        // @ts-ignore
        await props.setInputCursorIdx(document.getElementById("mainInput").selectionStart + 1)
        props.handleSpecialKey(props.val[0], props.idx);
        // @ts-ignore
        document.getElementById("mainInput").setSelectionRange(props.idx + 1, props.idx + 1);
    }

    return(
        <button className="key" onClick={handleClick} id={"click-"+props.val[0]} title={props.val[1]}>{props.val[0]}</button>
    )
}
 
export default Key;