import React, {MouseEventHandler, useEffect, useState} from 'react';
import {all_inflected, most_common, sentences} from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";
import {translateIpaToSampa} from "../helperFunctions";
import {ResultAlert} from "./ResultAlert";
import {Sets} from "../enums/enums";

const CheckTrans = () => {

    const ctx = useAppContext();

    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        if (ctx && !ctx.guessActive) {
            let transcription_to_check: string = ctx?.inputBoxValue.trim();
            if (transcription_to_check.length < 1) return;
            if (ctx?.useIpa) transcription_to_check = translateIpaToSampa(transcription_to_check);
            ctx?.setLastTranscription(transcription_to_check);
            let item_idx: number = ctx.currentArray[ctx.currentTransIdx];
            let correct_trans: string = ctx?.currentMode.set === Sets.INFLECTION ? all_inflected[item_idx].sampa_infl : ctx?.currentMode.set === Sets.WORDS ? most_common[item_idx].sampa_strong : sentences[item_idx].sampa
            ctx?.setLastCorrectTranscription(correct_trans);
            if (transcription_to_check === correct_trans) {
                console.log("CORRECT");
                ctx?.incrementScore();
            } else {
                console.log("INCORRECT");
            }
        } else {
            if ((ctx?.currentArray.length === 20 && ctx?.currentTransIdx === 19) || (ctx?.currentArray.length === 200 && ctx?.currentTransIdx === 199)) {
                setShowAlert(true);
            } else {
                ctx?.incrementTransIdx();
            }
            ctx?.setInputBoxValue("");
        }
        ctx?.toggleGuessActive();
    }

    useEffect(() => {
        if (showAlert) setShowAlert(false);
    }, [ctx?.score, ctx?.currentTransIdx]);

    return (
        <>
            <button id="checkTransButton" className="btn btn-square w-1/2 btn-secondary"
                    onClick={handleClick}>{ctx?.guessActive ? "Next" : "Check"}</button>
            <ResultAlert display={showAlert} hideAlert={setShowAlert}></ResultAlert>
        </>
    )
}

export default CheckTrans;