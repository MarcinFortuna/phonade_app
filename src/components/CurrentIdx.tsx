import React, {useEffect} from 'react';
import {useAppContext} from "../libs/ContextLib";

const CurrentIdxBox = () => {

    const ctx = useAppContext();

    let idx: number = (ctx?.currentTransIdx || 0) + 1;
    let range: number = ctx?.currentMode === "Test (random order)" ? 20 : 200;

    const calculateStepClassnames = (i: number) => i < idx ? "step step-primary" : "step";

    useEffect(() => {
        let current = document.querySelector(`li.step:nth-child(${idx})`);
        current?.scrollIntoView();
    }, [idx]);

    return (
        <div
            className={`overflow-x-auto max-w-[320px] transition-all duration-250 ${ctx?.useIpa ? "translate-y-0" : "-translate-y-32"}`}>
            <ul className="steps">
                {
                    [...Array(range)].map((x, i) =>
                        <li className={calculateStepClassnames(i)} key={i}>{x}</li>)
                }
            </ul>
        </div>
    )
}

export default CurrentIdxBox;