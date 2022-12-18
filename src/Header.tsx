import React from 'react';

const Header = (props:any) => {

    const handleClickSeqAll = () => {
        props.resetMode();
        props.modeSeqAll();
        props.arrSeqAll();
    }
    const handleClickRandomAll = () => {
        props.resetMode();
        props.modeRandomAll();
        props.arrRandomAll();
    }
    const handleClickRandomTest = () => {
        props.resetMode();
        props.modeRandomTest();
        props.arrRandomTest();
    }

    return(
        <header>
            <div className="text-3xl font-bold underline">PHONADE</div>
            <div>Current mode: {props.currentMode}</div>
            <div className="modeButtonsContainer">
                <button className="modeChange" onClick={handleClickSeqAll}>All - Sequential</button>
                <button className="modeChange" onClick={handleClickRandomAll}>All - Random</button>
                <button className="modeChange" onClick={handleClickRandomTest}>TEST - 20 Random</button>
            </div>
        </header>
    )
}

export default Header;