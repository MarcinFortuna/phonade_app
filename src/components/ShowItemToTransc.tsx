import React from 'react';
import {all_inflected, most_common, sentences} from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";
import {Sets} from "../enums/enums";

const ShowItemToTransc = (props:any) => {

    const {idx} = props;

    const ctx = useAppContext();

    let item_idx: number = ctx?.currentArray[idx] || 0;
    let item_to_transcribe = ctx?.currentMode.set === Sets.INFLECTION
        ? all_inflected[item_idx].infl
        : ctx?.currentMode.set === Sets.WORDS
            ? most_common[item_idx].spelling
            : sentences[item_idx].spelling

    return (
        <div className="pl-2 pr-2">
            <div className="card-title h-1 w-max">{ctx && ctx?.currentArray.length > 0 ? item_to_transcribe : ""}</div>
        </div>
    )
}

export default ShowItemToTransc;