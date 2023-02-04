import React from 'react';
import {GameModes} from '../enums/enums';

const SelectMode = (props: any) => {

    const handleClickSeqAll = () => {
        props.resetMode();
        props.setCurrentMode(GameModes.ALL_SEQ);
        props.arrSeqAll();
    }
    const handleClickRandomAll = () => {
        props.resetMode();
        props.setCurrentMode(GameModes.ALL_RANDOM);
        props.arrRandomAll();
    }
    const handleClickRandomTest = () => {
        props.resetMode();
        props.setCurrentMode(GameModes.TEST_RANDOM);
        props.arrRandomTest();
    }

    const handleClickInflection = () => {
        props.resetMode();
        props.setCurrentMode(GameModes.INFL);
        props.generateInfl();
    }

    return (
        <div className="sm:btn-group m-auto flex justify-center md:gap-1 flex-wrap">
            <button className={`btn-sm basis-2/4 sm:basis-1/5 sm:btn-md btn ${props.currentMode === GameModes.ALL_SEQ ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickSeqAll}>All<br/>Sequential</button>
            <button className={`btn-sm basis-2/4 sm:basis-1/5 sm:btn-md btn ${props.currentMode === GameModes.ALL_RANDOM ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomAll}>All<br/>Random</button>
            <button className={`btn-sm basis-2/4 sm:basis-1/5 sm:btn-md btn ${props.currentMode === GameModes.TEST_RANDOM ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomTest}>TEST<br/>20 Random</button>
            <button className={`btn-sm basis-2/4 sm:basis-1/5 sm:btn-md btn ${props.currentMode === GameModes.INFL ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickInflection}>Inflection</button>
        </div>
    )
}

export default SelectMode;