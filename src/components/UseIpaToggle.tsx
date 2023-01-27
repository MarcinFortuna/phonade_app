import React from 'react';
import {useAppContext} from "../libs/ContextLib";

export const UseIpaToggle = () => {

    const ctx = useAppContext();

    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text mr-1 sm:mr-2 text-xs sm:text-base">X-Sampa</span>
                <input type="checkbox" className="toggle toggle-xs sm:toggle-md md:toggle-xl" checked={ctx?.useIpa} onChange={ctx?.toggleUseIpa} />
                <span className="label-text ml-1 sm:ml-2 text-xs sm:text-base">IPA</span>
            </label>
        </div>
    );
}

