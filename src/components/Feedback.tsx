import React from 'react';
import {useAppContext} from "../libs/ContextLib";
import {translateSampaToIpa} from "../helperFunctions";

const Feedback = () => {

    const ctx = useAppContext();

    const displayFeedback: boolean = (ctx && ctx.currentArray.length > 0 && ctx.guessActive) || false;

    let text_to_display: React.ReactNode;
    let correct_bool: boolean;
    let feedback_correct_css_class: string = "stat-value";
    let lastTranscriptionToDisplay: string = "";
    let lastCorrectTranscriptionToDisplay: string = "";

    if (displayFeedback) {
        correct_bool = ctx?.lastTranscription === ctx?.lastCorrectTranscription;
        text_to_display = correct_bool ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        feedback_correct_css_class = correct_bool ? "stat-value text-success" : "stat-value text-warning";
        lastTranscriptionToDisplay = (ctx?.useIpa ? translateSampaToIpa(ctx?.lastTranscription) : ctx?.lastTranscription) as string;
        lastCorrectTranscriptionToDisplay = (ctx?.useIpa ? translateSampaToIpa(ctx?.lastCorrectTranscription) : ctx?.lastCorrectTranscription) as string;
    }

    return (
        <div className="stats shadow">
            <div className="stat flex items-center justify-center w-[80px]">
                <div className={feedback_correct_css_class}>{displayFeedback ? text_to_display : "-"}</div>
            </div>
            <div className="stat">
                <div className="stat-title w-[140px] text-center">Your answer</div>
                <div className="stat-value w-[140px] text-center">{displayFeedback ? lastTranscriptionToDisplay : "------"}</div>
            </div>
            <div className="stat">
                <div className="stat-title w-[140px] text-center">Correct answer</div>
                <div className="stat-value w-[140px] text-center">{displayFeedback ? lastCorrectTranscriptionToDisplay : "------"}</div>
            </div>
        </div>
    )
}

export default Feedback;