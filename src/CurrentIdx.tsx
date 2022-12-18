import React from 'react';

const CurrentIdxBox = (props:any) => {

    let text_to_display = ""

    if (!(props.currentArr.length > 0)) {
        text_to_display = ""
    } else {
        let idx = props.idx + 1;
        let range = props.currentMode === "Test (random order)" ? 20 : 200;
        text_to_display = idx + "/" + range; 
    }

    return (
        <div className="currentIdxBox">{text_to_display}</div>
    )
}

export default CurrentIdxBox;