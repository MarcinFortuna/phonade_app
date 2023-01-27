import React from 'react';
import {useAppContext} from "../libs/ContextLib";

interface KeyInterface {
    val: string[]
}

const Key = (props: KeyInterface) => {

    const ctx = useAppContext();

    const inputRef: HTMLInputElement = document.getElementById("mainInput") as HTMLInputElement;

    const handleClick = async () => {
        const idx: number = inputRef?.selectionStart || 0;
        await ctx?.handleSpecialKey(props.val[0], idx);
        inputRef.setSelectionRange(idx+1, idx+1);
    }

    return(
        <kbd className="kbd kbd-sm sm:kbd-md mx-1 sm:mx-0 cursor-pointer" onClick={handleClick} id={"click-"+props.val[1]} title={props.val[1]}>{props.val[0]}</kbd>
    )
}
 
export default Key;