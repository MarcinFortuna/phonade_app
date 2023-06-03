import React from 'react';
import {all_inflected, most_common, sentences} from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";
import {Sets} from "../enums/enums";

const ShowItemToTransc = () => {

    const ctx = useAppContext();

    let item_idx: number = 0;
    let item_to_transcribe: string = "";
    if (ctx?.gameOn) {
        try {        item_idx = ctx?.currentArray[ctx?.currentTransIdx] || 0;
        item_to_transcribe = ctx?.currentMode.set === Sets.INFLECTION
            ? all_inflected[item_idx].infl
            : ctx?.currentMode.set === Sets.WORDS
                ? most_common[item_idx].spelling
                : sentences[item_idx].spelling
} catch(error) {
            console.log(error);
            console.log(ctx);
        }
    }

    return (
        <div className="pl-2 pr-2">
            <div className={`card-title ${ctx?.currentMode.set === Sets.SENTENCES ? "h-6" : "h-1 w-max"}`}>{ctx && ctx?.currentArray.length > 0 ? item_to_transcribe : ""}</div>
        </div>
    )
}

export default ShowItemToTransc;