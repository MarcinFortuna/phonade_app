import React from 'react';
import { most_common } from './transcriptions';

const ShowItemToTransc = (props:any) => {

    let item_idx = props.currentArr[props.idx];

    return (
        <div className="itemBox">{props.currentArr.length > 0 ? most_common[item_idx].spelling : ""}</div>
    )
}

export default ShowItemToTransc;