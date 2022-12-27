import React from 'react';
import {useAppContext} from "../libs/ContextLib";

export const UseIpaToggle = () => {

    const ctx = useAppContext();

    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text mr-2">Use X-Sampa</span>
                <input type="checkbox" className="toggle" checked={ctx?.useIpa} onChange={ctx?.toggleUseIpa}/>
                <span className="label-text ml-2">Use IPA</span>
            </label>
        </div>
    );
}

