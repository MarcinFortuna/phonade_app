import React from 'react';
import Key from './Key';
import {vowels, consonants, other_symbols} from "../data/symbols";
import {useAppContext} from "../libs/ContextLib";

const Keyboard = () => {

    const ctx = useAppContext();

    return(
        <div className={`flex flex-row justify-center mt-6 mb-3 transition-all duration-200 ${ctx?.useIpa ? 'scale-100' : 'scale-0'}`}>
            <div className="flex flex-col justify-right items-end mr-1">
                <span className="badge h-8 mb-1">Vowels:</span>
                <span className="badge h-8 mb-1">Consonants:</span>
                <span className="badge h-8">Other:</span>
            </div>
            <div className="flex flex-col justify-left">
                <div className="">{vowels.map(key => <Key val={key} key={key[1]}></Key>)}</div>
                <div className="">{consonants.map(key => <Key val={key} key={key[1]}></Key>)}</div>
                <div className="">{other_symbols.map(key => <Key val={key} key={key[1]}></Key>)}</div>
            </div>
        </div>
    )
}

export default Keyboard;