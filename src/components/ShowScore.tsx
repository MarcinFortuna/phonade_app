import React from 'react';
import {useAppContext} from "../libs/ContextLib";

const ShowScore = () => {

    const ctx = useAppContext();

    return (
        <div className="stats-shadow">
            <div className="stat">
                <div className="stat-title text-center md:text-left">Score</div>
                <div className="stat-value text-center md:text-left">{ctx?.score || 0}</div>
            </div>
        </div>
    )
}

export default ShowScore;