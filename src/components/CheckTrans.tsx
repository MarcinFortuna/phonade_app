import React, {MouseEventHandler, useEffect, useState} from 'react';
import {most_common} from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";
import {translateIpaToSampa} from "../helperFunctions";
import {ResultAlert} from "./ResultAlert";

const CheckTrans = () => {

    const ctx = useAppContext();

    const [finishGame, setFinishGame] = useState<boolean>(false);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        if (ctx && !ctx.guessActive) {
            let transcription_to_check: string = ctx?.inputBoxValue.trim();
            if (transcription_to_check.length < 1) return;
            if (ctx?.useIpa) transcription_to_check = translateIpaToSampa(transcription_to_check);
            ctx?.setLastTranscription(transcription_to_check);
            let item_idx: number = ctx.currentArray[ctx.currentTransIdx];
            let correct_trans: string = most_common[item_idx].sampa_strong.trim();
            ctx?.setLastCorrectTranscription(correct_trans);
            if (transcription_to_check === correct_trans) {
                console.log("CORRECT");
                ctx?.incrementScore();
            } else {
                console.log("INCORRECT");
            }
        } else {
            if ((ctx?.currentArray.length === 20 && ctx?.currentTransIdx === 19) || (ctx?.currentArray.length === 200 && ctx?.currentTransIdx === 199)) {
                setFinishGame(true);
            } else {
                ctx?.incrementTransIdx();
            }
            ctx?.setInputBoxValue("");
        }
        ctx?.toggleGuessActive();
    }

    useEffect(() => {
        if (finishGame) setFinishGame(false);
    }, [ctx?.score, ctx?.currentTransIdx]);

    return (
        <>
            <button id="checkTransButton" className="btn btn-square w-28 btn-secondary"
                    onClick={handleClick}>{ctx?.guessActive ? "Next" : "Check"}</button>
            <ResultAlert display={finishGame} hideAlert={setFinishGame}></ResultAlert>
        </>
    )
}

export default CheckTrans;