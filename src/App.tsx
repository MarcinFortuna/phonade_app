import React, {useState} from 'react';
import {AppContextInterface, AppContextProvider} from "./libs/ContextLib";
import {getShuffledArr} from "./helperFunctions";
import Keyboard from './components/Keyboard';
import ShowItemToTransc from './components/ShowItemToTransc';
import ShowScore from './components/ShowScore';
import SelectMode from './components/SelectMode';
import CurrentIdxBox from './components/CurrentIdx';
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import InputBox from "./components/InputBox";
import CheckTrans from "./components/CheckTrans";
import ClearButton from "./components/ClearButton";

function App() {

    // Guess active
    const [guessActive, setGuessActive] = useState<boolean>(false);
    const toggleGuessActive = () => setGuessActive(!guessActive);

    // Score
    const [score, setScore] = useState<number>(0);
    const incrementScore = () => setScore(score + 1);
    const resetScore = () => setScore(0);

    // Current array of examples
    const [currentArray, setCurrentArray] = useState<number[]>([]);
    const setArrSeqAll = () => setCurrentArray([...Array(200).keys()]);
    const setArrRandomAll = () => setCurrentArray(getShuffledArr([...Array(200).keys()]));
    const setArrRandomTest = () => setCurrentArray(getShuffledArr([...Array(200).keys()]).slice(0, 20));

    // Currently displayed transcription
    const [currentTransIdx, setCurrentTransIdx] = useState<number>(0);
    const incrementTransIdx = () => setCurrentTransIdx(currentTransIdx + 1);
    const decrementTransIdx = () => setCurrentTransIdx(currentTransIdx - 1);
    const resetTransIdx = () => setCurrentTransIdx(0);

    const [currentMode, setCurrentMode] = useState<string>("");

    const [inputBoxValue, setInputBoxValue] = useState<string>("");

    const handleSpecialKey = (value: string, position: number) => {
        let newVal = inputBoxValue.slice(0, position) + value + inputBoxValue.slice(position);
        setInputBoxValue(newVal);
    }

    const [useIpa, setUseIpa] = useState<boolean>(true);
    const toggleUseIpa = () => setUseIpa(!useIpa);

    const [lastTranscription, setLastTranscription] = useState<string>("");
    const [lastCorrectTranscription, setLastCorrectTranscription] = useState<string>("");

    const resetMode = () => {
        console.log("RESET");
        setInputBoxValue("");
        resetTransIdx();
        resetScore();
        if (guessActive) toggleGuessActive();
    }

    const appContext: AppContextInterface = {
        guessActive: guessActive,
        toggleGuessActive: toggleGuessActive,
        score: score,
        incrementScore: incrementScore,
        resetScore: resetScore,
        currentArray: currentArray,
        currentTransIdx: currentTransIdx,
        incrementTransIdx: incrementTransIdx,
        decrementTransIdx: decrementTransIdx,
        resetTransIdx: resetTransIdx,
        currentMode: currentMode,
        setCurrentMode: setCurrentMode,
        inputBoxValue: inputBoxValue,
        setInputBoxValue: setInputBoxValue,
        handleSpecialKey: handleSpecialKey,
        useIpa: useIpa,
        toggleUseIpa: toggleUseIpa,
        lastTranscription: lastTranscription,
        lastCorrectTranscription: lastCorrectTranscription,
        setLastTranscription: setLastTranscription,
        setLastCorrectTranscription: setLastCorrectTranscription,
        resetMode: resetMode
    }

    return (
        <AppContextProvider value={appContext}>
            <div className="App flex flex-col gap-3 items-center">
                <Header/>
                <SelectMode setCurrentMode={setCurrentMode} arrSeqAll={setArrSeqAll} arrRandomAll={setArrRandomAll}
                            arrRandomTest={setArrRandomTest}
                            currentMode={currentMode} resetMode={resetMode}/>
                <div className="flex justify-center">
                    <Feedback/>
                    <ShowScore/>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <ShowItemToTransc idx={currentTransIdx}/>
                    </div>
                </div>
                <div className="form-control text-center">
                    <div className="input-group flex justify-center">
                        <InputBox/>
                        <CheckTrans/>
                        <ClearButton/>
                    </div>
                </div>
                <Keyboard/>
                <CurrentIdxBox/>
            </div>
        </AppContextProvider>
    );
}

export default App;
