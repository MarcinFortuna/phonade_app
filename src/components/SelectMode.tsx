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
        <div className="btn-group m-auto gap-1 flex justify-center">
            <button className={`btn ${props.currentMode === 'All (sequential)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickSeqAll}>All - Sequential</button>
            <button className={`btn ${props.currentMode === 'All (random order)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomAll}>All - Random</button>
            <button className={`btn ${props.currentMode === 'Test (random order)' ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handleClickRandomTest}>TEST - 20 Random</button>
        </div>
    )
}

export default SelectMode;