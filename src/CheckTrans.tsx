import React from 'react';
import { most_common } from './transcriptions';

const CheckTrans = (props:any) => {

    const handleClick = () => {
        if (!props.currentStage) {
            if (props.val.length < 1) return;
            let item_idx = props.currentArr[props.idx];
            console.log(item_idx);
            let correct_trans = most_common[item_idx].ipa_strong;
            if (props.val.trim() === correct_trans.trim()) {
                console.log("CORRECT");
                props.incrementScore();
            } else {
                console.log("INCORRECT");
            }
        } else {
            if ((props.currentArr.length === 20 && props.idx === 19) || (props.currentArr.length === 200 && props.idx === 199)) {
                alert("You have finished the question set! Your score is "+props.score);
            } else {
                props.nextTrans();
            }
            props.purge();
        }
        props.changeStage();
    }
 
    return (
        <button id="checkTransButton" className="checkButton" onClick={handleClick}>{props.currentStage ? "Next" : "Check"}</button>
    )
}

export default CheckTrans;