import React from 'react';

const SelectMode = (props: any) => {

    const handleClickSeqAll = () => {
        props.resetMode();
        props.setCurrentMode('All (sequential)');
        props.arrSeqAll();
    }
    const handleClickRandomAll = () => {
        props.resetMode();
        props.setCurrentMode('All (random order)');
        props.arrRandomAll();
    }
    const handleClickRandomTest = () => {
        props.resetMode();
        props.setCurrentMode('Test (random order)');
        props.arrRandomTest();
    }

    return (
        <div className="btn-group m-auto flex justify-center md:gap-1">
            <button className={`btn-sm sm:btn-md btn ${props.currentMode === 'All (sequential)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickSeqAll}>All<br/>Sequential</button>
            <button className={`btn-sm sm:btn-md btn ${props.currentMode === 'All (random order)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomAll}>All<br/>Random</button>
            <button className={`btn-sm sm:btn-md btn ${props.currentMode === 'Test (random order)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomTest}>TEST<br/>20 Random</button>
        </div>
    )
}

export default SelectMode;