import React from 'react';
import Key from './Key';
import ClearButton from './ClearButton';

const Keyboard = (props: any) => {
    let keys_v: string[][] = [['ɪ', 'Alt+i'], ['æ', 'Alt+9'], ['ʌ', 'Alt+v'], ['ə', 'Alt+6'],['ɜ', 'Alt+3'], ['ɑ', 'Alt+a'], ['ɒ', 'Alt+0'], ['ɔ', 'Alt+o'], ['ʊ', 'Alt+u']];
    let keys_c: string[][] = [['θ', 'Alt+t'], ['ð','Alt+d'], ['ʃ','Alt+s'], ['ʒ','Alt+z'], ['ŋ','Alt+n']];
    let keys_other: string[] = ['ː', 'ˈ', '‖'];
    return(
        <div id="keyboard_container">
            <div id="keyboard">
                <div id="kb_v">
                    <div className="kb_row_left">Vowels:</div>
                    <div className="kb_row_right">{keys_v.map(key => <Key val={key} idx={props.currentInputCursorIdx} handleSpecialKey={props.handleSpecialKey} setInputCursorIdx={props.setInputCursorIdx}></Key>)}</div>
                </div>
                <div id="kb_c">
                    <div className="kb_row_left">Consonants:</div>
                    <div className="kb_row_right">{keys_c.map(key => <Key val={key} idx={props.currentInputCursorIdx} handleSpecialKey={props.handleSpecialKey} setInputCursorIdx={props.setInputCursorIdx}></Key>)}</div>
                </div>
                <div id="kb_other">
                    <div className="kb_row_left">Other:</div>
                    <div className="kb_row_right">{keys_other.map(key => <Key val={key} idx={props.currentInputCursorIdx} handleSpecialKey={props.handleSpecialKey} setInputCursorIdx={props.setInputCursorIdx}></Key>)}</div>
                </div>
                <ClearButton clear={props.clear}/>
            </div>
        </div>
    )
}

export default Keyboard;