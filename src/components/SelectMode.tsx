import React from 'react';
import {Order, Scope, Sets} from "../enums/enums";
import {AppContextInterface, useAppContext} from "../libs/ContextLib";

const SelectMode = () => {

    const ctx = useAppContext();

    const {currentMode, setCurrentMode, gameOn, setGameOn} = ctx as AppContextInterface;

    const handleModeChange = (obj: object) => {
        let newModeVal = {...currentMode, ...obj}
        setCurrentMode(newModeVal);
    }

    return (
        <>
            <div className={`m-auto flex flex-col justify-center md:gap-1 ${gameOn ? 'hidden' : ''}`}>
                <div className="btn-group flex w-full">
                    <button onClick={() => handleModeChange({'set': Sets.WORDS})}
                            className={`btn w-1/3 ${currentMode.set === Sets.WORDS ? "btn-secondary" : "btn-primary"}`}>Words
                    </button>
                    <button onClick={() => handleModeChange({'set': Sets.INFLECTION})}
                            className={`btn w-1/3 ${currentMode.set === Sets.INFLECTION ? "btn-secondary" : "btn-primary"}`}>Inflection
                    </button>
                    <button onClick={() => handleModeChange({'set': Sets.SENTENCES})}
                            className={`btn w-1/3 ${currentMode.set === Sets.SENTENCES ? "btn-secondary" : "btn-primary"}`}>Sentences
                    </button>
                </div>
                <div className="btn-group flex w-full">
                    <button onClick={() => handleModeChange({'order': Order.SEQ})}
                            disabled={currentMode.scope === Scope.TEST}
                            className={`btn w-1/2 ${currentMode.order === Order.SEQ ? "btn-secondary" : "btn-primary"} ${currentMode.scope === Scope.TEST ? 'disabled' : ''}`}>
                        Sequential
                    </button>
                    <button onClick={() => handleModeChange({'order': Order.RANDOM})}
                            className={`btn w-1/2 ${currentMode.order === Order.RANDOM ? "btn-secondary" : "btn-primary"}`}>Random
                    </button>
                </div>
                <div className="btn-group flex w-full">
                    <button onClick={() => handleModeChange({'scope': Scope.ALL})}
                            className={`btn w-1/2 ${currentMode.scope === Scope.ALL ? "btn-secondary" : "btn-primary"}`}>All
                    </button>
                    <button onClick={() => handleModeChange({'scope': Scope.TEST, 'order': Order.RANDOM})}
                            className={`btn w-1/2 ${currentMode.scope === Scope.TEST ? "btn-secondary" : "btn-primary"}`}>Test<br/>20
                        Random
                    </button>
                </div>
            </div>
            <button className={`btn btn-primary w-full sm:w-64 m-auto`}
                    onClick={() => setGameOn(!gameOn)}>{gameOn ? "STOP GAME" : "START GAME"}</button>
        </>
    );
}

export default SelectMode;