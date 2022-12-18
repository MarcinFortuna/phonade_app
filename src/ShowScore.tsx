import React from 'react';

const ShowScore = (props:any) => {

    let text_to_display = "";

    if (props.currentArr.length > 0) {
        text_to_display = "Score: "+ props.score;
    }

    return (
        <div className="scoreBox">{text_to_display}</div>
    )
}

export default ShowScore;