import React from 'react';
import {useAppContext} from "../libs/ContextLib";
import {Scope, Sets} from "../enums/enums";

interface ResultAlertInterface {
    display: boolean
    hideAlert: (val: boolean) => void
}

export const ResultAlert = (props: ResultAlertInterface) => {

    const {display, hideAlert} = props;

    const ctx = useAppContext();

    const finish = () => {
        hideAlert(false);
        ctx?.setGameOn(false);
    }

    const achieved90PerCent = ctx?.score !== undefined &&
        (ctx?.score >= 180
            || (ctx?.currentMode.scope === Scope.TEST && ctx?.score >= 18)
            || (ctx?.currentMode.set === Sets.INFLECTION && ctx?.score >= 54)
            || (ctx?.currentMode.set === Sets.SENTENCES && ctx?.score >= 82)
        )

    return (
        display && achieved90PerCent ?
            <div className="alert alert-success shadow-lg fixed top-1 md:top-3 right-1 md:right-3 w-max max-w-[320px]" onClick={() => finish()}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="alert alert-success">You have successfully completed the question set! Your score is {ctx?.score}</span>
                </div>
            </div>
            : display && ctx?.score !== undefined ?
            <div className="alert alert-info shadow-lg fixed top-1 md:top-3 right-1 md:right-3 w-max max-w-[320px]" onClick={() => finish()}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-current flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="alert alert-info">You have finished the question set! Your score is {ctx?.score}</span>
                </div>
            </div>
            : null
    )
}