import React, {useEffect, KeyboardEventHandler, ChangeEventHandler} from 'react';
import {useAppContext} from "../libs/ContextLib";
import {translateSampaToIpa, translateIpaToSampa, translateConvenientSymbolsToIpa} from "../helperFunctions";

function InputBox() {

    const ctx = useAppContext();

    const handleChange: ChangeEventHandler<HTMLInputElement> = async (e: React.ChangeEvent<HTMLInputElement>) => {
        let idx: number = e.target.selectionStart as number;
        let str: string = e.target.value;
        if (ctx?.useIpa) str = translateConvenientSymbolsToIpa(translateSampaToIpa(str));
        await ctx?.setInputBoxValue(str);
        e.target.setSelectionRange(idx, idx);
    }

    const handleEnter: KeyboardEventHandler<HTMLInputElement> = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const checkTransButton = document.getElementById("checkTransButton");
            checkTransButton?.click();
        }
    }

    useEffect(() => {
        document.getElementById("mainInput")?.focus();
    });

    useEffect(() => {
        if (ctx?.useIpa) {
            ctx?.setInputBoxValue(translateSampaToIpa(ctx?.inputBoxValue));
        } else {
            ctx?.setInputBoxValue(translateIpaToSampa(ctx?.inputBoxValue));
        }
    }, [ctx?.useIpa]);

    return(
        <input id="mainInput" className="input input-bordered w-full" value={ctx?.inputBoxValue} onChange={handleChange} onKeyUp={handleEnter} autoFocus></input>
    );
}

export default InputBox;