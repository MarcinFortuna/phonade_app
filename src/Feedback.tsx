import React from 'react';
import { most_common } from './transcriptions';

const Feedback = (props:any) => {

    let text_to_display: string = "";
    if (props.currentArr.length > 0 && props.currentStage) {
        let item_idx: number = props.currentArr[props.idx];
        text_to_display = `${props.val.trim() === most_common[item_idx].ipa_strong.trim() ? "CORRECT!" : "INCORRECT"} Your answer: ${props.val} Correct answer: ${most_common[item_idx].ipa_strong}`
    }
 
    return (
        <div className="feedbackBox">
            {text_to_display}
        </div>
    )
}

export default Feedback;