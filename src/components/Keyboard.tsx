import React from 'react';
import Key from './Key';
import {vowels, consonants, other_symbols} from "../data/symbols";
import {useAppContext} from "../libs/ContextLib";

const Keyboard = () => {

    const ctx = useAppContext();

    return(
        <div className={`flex flex-row justify-center mt-8 transition-all duration-200 ${ctx?.useIpa ? 'scale-100' : 'scale-0'}`}>
            <div className="flex flex-col mr-1 items-center">
                <span className="badge h-8 mt-1 hidden md:inline-flex">Vowels:</span>
                <div className="">{vowels.map(key => <Key val={key} key={key[1]}></Key>)}</div>
                <span className="badge h-8 mt-1 hidden md:inline-flex">Consonants:</span>
                <div className="">{consonants.map(key => <Key val={key} key={key[1]}></Key>)}</div>
                <span className="badge h-8 mt-1 hidden md:inline-flex">Other:</span>
                <div className="">{other_symbols.map(key => <Key val={key} key={key[1]}></Key>)}</div>
            </div>
        </div>
    )
}

export default Keyboard;