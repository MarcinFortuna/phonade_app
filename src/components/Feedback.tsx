import React from 'react';
import {useAppContext} from "../libs/ContextLib";
import {translateSampaToIpa} from "../helperFunctions";
import {Sets} from "../enums/enums";

const Feedback = () => {

    const ctx = useAppContext();

    const displayFeedback: boolean = (ctx && ctx.currentArray.length > 0 && ctx.guessActive) || false;

    let text_to_display: React.ReactNode;
    let correct_bool: boolean | undefined;
    let feedback_correct_css_class: string = "stat-value";
    let lastTranscriptionToDisplay: string = "";
    let lastCorrectTranscriptionToDisplay: string = "";

    if (displayFeedback) {
        correct_bool = ctx?.lastGuessCorrect;
        text_to_display = correct_bool ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${ctx?.currentMode.set === Sets.SENTENCES && 'self-center'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${ctx?.currentMode.set === Sets.SENTENCES && 'self-center'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        feedback_correct_css_class = correct_bool ? "stat-value text-success" : "stat-value text-warning";
        lastTranscriptionToDisplay = (ctx?.useIpa ? translateSampaToIpa(ctx?.lastTranscription) : ctx?.lastTranscription) as string;
        lastCorrectTranscriptionToDisplay = (ctx?.useIpa ? translateSampaToIpa(ctx?.lastCorrectTranscription) : ctx?.lastCorrectTranscription) as string;
    }

    return (
        ctx?.currentMode.set === Sets.SENTENCES
            ? <div className="shadow flex flex-col w-full">
            <div className="flex justify-around">
                <div className={`flex align-center text-sm ${feedback_correct_css_class}`}>{displayFeedback ? text_to_display : "-"}</div>
                <div className="flex flex-col">
                    <div className="stat-title text-center text-xs sm:text-sm md:text-md">Score</div>
                    <div className="stat-value text-center text-sm md:text-lg">{ctx?.score || 0}</div>
                </div>
            </div>
            <div className="stat-title text-center text-xs sm:text-sm md:text-md">Your answer</div>
            <div className="stat-value text-center text-sm sm:text-md md:text-lg w-[384px]">{displayFeedback ? lastTranscriptionToDisplay : "------"}</div>
            <div className="stat-title text-center text-xs sm:text-sm md:text-md">Correct answer</div>
            <div className="stat-value text-center text-sm sm:text-md md:text-lg">{displayFeedback ? lastCorrectTranscriptionToDisplay : "------"}</div>
            </div>
            : <div className="stats shadow flex">
            <div className="stat flex items-center justify-center w-1/8 text-xs min-w-[24px]">
                <div className={`text-sm ${feedback_correct_css_class}`}>{displayFeedback ? text_to_display : "-"}</div>
            </div>
            <div className="stat w-3/8">
                <div className="stat-title text-center text-xs sm:text-sm md:text-md">Your answer</div>
                <div className="stat-value text-center text-sm sm:text-md md:text-lg">{displayFeedback ? lastTranscriptionToDisplay : "------"}</div>
            </div>
            <div className="stat w-3/8">
                <div className="stat-title text-center text-xs sm:text-sm md:text-md">Correct answer</div>
                <div className="text-center text-sm sm:text-md md:text-lg flex">{displayFeedback ? lastCorrectTranscriptionToDisplay : "------"}</div>
            </div>
            <div className="stat w-1/8">
                <div className="stat-title text-center text-xs sm:text-sm md:text-md">Score</div>
                <div className="stat-value text-center text-md">{ctx?.score || 0}</div>
            </div>
        </div>
    )
}

export default Feedback;