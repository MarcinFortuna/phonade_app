import React, { useRef, useEffect } from 'react';

function InputBox(props:any = "") {

    const mainInput = useRef(null);

    const replaceSymbols = (str: string) => {
        return str.replace("'", "ˈ").replace(":", "ː").replace("g", "ɡ");
    }

    const handleChange = (e: any) => {
        let idx = e.target.selectionStart;
        let str = replaceSymbols(e.target.value);
        props.setValue(str);
        if (mainInput) { 
            // @ts-ignore
            mainInput.current.focus(); mainInput.current.setSelectionRange(idx+1, idx+1);
            props.setInputCursorIdx(e.target.selectionStart);
        }
    }

    const handleEnterAndAlt = (e: any) => {
        props.setInputCursorIdx(e.target.selectionStart);
        if (e.key === 'Enter') {
            const checkTransButton = document.getElementById("checkTransButton");
            checkTransButton?.click();
        }
        if (e.altKey && e.key === '3') {
            e.preventDefault();
            document.getElementById("click-ɜ")?.click();
        }
        if (e.altKey && e.key === 'i') {
            e.preventDefault();
            document.getElementById("click-ɪ")?.click();
        }
        if (e.altKey && e.key === '9') {
            e.preventDefault();
            document.getElementById("click-æ")?.click();
        }
        if (e.altKey && e.key === 'v') {
            e.preventDefault();
            document.getElementById("click-ʌ")?.click();
        }
        if (e.altKey && e.key === '6') {
            e.preventDefault();
            document.getElementById("click-ə")?.click();
        }
        if (e.altKey && e.key === 'a') {
            e.preventDefault();
            document.getElementById("click-ɑ")?.click();
        }
        if (e.altKey && e.key === '0') {
            e.preventDefault();
            document.getElementById("click-ɒ")?.click();
        }
        if (e.altKey && e.key === 'o') {
            e.preventDefault();
            document.getElementById("click-ɔ")?.click();
        }
        if (e.altKey && e.key === 'u') {
            e.preventDefault();
            document.getElementById("click-ʊ")?.click();
        }
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            document.getElementById("click-θ")?.click();
        }
        if (e.altKey && e.key === 'd') {
            e.preventDefault();
            document.getElementById("click-ð")?.click();
        }
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            document.getElementById("click-ʃ")?.click();
        }
        if (e.altKey && e.key === 'z') {
            e.preventDefault();
            document.getElementById("click-ʒ")?.click();
        }
        if (e.altKey && e.key === 'n') {
            e.preventDefault();
            document.getElementById("click-ŋ")?.click();
        }
    }

    useEffect(() => {
        // @ts-ignore
        if (mainInput) mainInput.current.focus();
    })

    return(
        // @ts-ignore
        <input id="mainInput" ref={mainInput} value={props.val} onChange={handleChange} onKeyUp={handleEnterAndAlt} onClick={(e) => props.setInputCursorIdx(e.target.selectionStart)} autoFocus></input>
    )
}

export default InputBox;