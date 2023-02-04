import React from 'react';
import {all_inflected, most_common} from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";
import {GameModes} from "../enums/enums";

const ShowItemToTransc = (props:any) => {

    const ctx = useAppContext();

    let item_idx: number = ctx?.currentArray[props.idx] || 0;
    let item_to_transcribe = ctx?.currentMode === GameModes.INFL ? all_inflected[item_idx].infl : most_common[item_idx].spelling;

    return (
        <div className="pl-2 pr-2">
            <div className="card-title h-1 w-max">{ctx && ctx?.currentArray.length > 0 ? item_to_transcribe : ""}</div>
        </div>
    )
}

export default ShowItemToTransc;