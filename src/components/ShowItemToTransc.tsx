import React from 'react';
import { most_common } from '../data/transcriptions';
import {useAppContext} from "../libs/ContextLib";

const ShowItemToTransc = (props:any) => {

    const ctx = useAppContext();

    let item_idx: number = ctx?.currentArray[props.idx] || 0;

    return (
        <div className="pl-2 pr-2">
            <div className="card-title h-1 w-max">{ctx && ctx?.currentArray.length > 0 ? most_common[item_idx].spelling : ""}</div>
        </div>
    )
}

export default ShowItemToTransc;