import React, {useEffect, useState} from 'react';
import {AppContextInterface, AppContextProvider} from "./libs/ContextLib";
import {getShuffledArr} from "./helperFunctions";
import Keyboard from './components/Keyboard';
import ShowItemToTransc from './components/ShowItemToTransc';
import SelectMode from './components/SelectMode';
import CurrentIdxBox from './components/CurrentIdx';
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import InputBox from "./components/InputBox";
import CheckTrans from "./components/CheckTrans";
import ClearButton from "./components/ClearButton";
import {Order, Scope, Sets} from "./enums/enums";
import {current_mode} from "./types/types";

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
    const handleSettingCurrentArray = (config: current_mode) => {
        let arrLengthToChooseFrom: number = config.set === Sets.WORDS
            ? 200
            : config.set === Sets.INFLECTION
                ? 60
                : 91

        let arrOfKeys = [...Array(arrLengthToChooseFrom).keys()];
        if (config.order === Order.RANDOM) arrOfKeys = getShuffledArr(arrOfKeys);
        if (config.scope === Scope.TEST) arrOfKeys = arrOfKeys.slice(0, 20);

        setCurrentArray(arrOfKeys);
    }

    // Currently displayed transcription
    const [currentTransIdx, setCurrentTransIdx] = useState<number>(0);
    const incrementTransIdx = () => setCurrentTransIdx(currentTransIdx + 1);
    const decrementTransIdx = () => setCurrentTransIdx(currentTransIdx - 1);
    const resetTransIdx = () => setCurrentTransIdx(0);

    const [currentMode, setCurrentMode] = useState<current_mode>({
        set: Sets.WORDS,
        order: Order.SEQ,
        scope: Scope.ALL
    });

    const [gameOn, setGameOn] = useState<boolean>(false);

    const [inputBoxValue, setInputBoxValue] = useState<string>("");

    const handleSpecialKey = (value: string, position: number) => {
        let newVal = inputBoxValue.slice(0, position) + value + inputBoxValue.slice(position);
        setInputBoxValue(newVal);
    }

    const [useIpa, setUseIpa] = useState<boolean>(true);
    const toggleUseIpa = () => setUseIpa(!useIpa);

    const [lastTranscription, setLastTranscription] = useState<string>("");
    const [lastCorrectTranscription, setLastCorrectTranscription] = useState<string>("");
    const [lastGuessCorrect, setLastGuessCorrect] = useState<boolean>(true);

    const resetMode = async () => {
        console.log("RESET");
        setCurrentArray([0]);
        setInputBoxValue("");
        resetTransIdx();
        resetScore();
        if (guessActive) toggleGuessActive();
    }

    useEffect(() => {
        if (gameOn) {
            handleSettingCurrentArray(currentMode);
        } else {
            resetMode();
        }
    }, [gameOn]);

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
        gameOn: gameOn,
        setGameOn: setGameOn,
        inputBoxValue: inputBoxValue,
        setInputBoxValue: setInputBoxValue,
        handleSpecialKey: handleSpecialKey,
        useIpa: useIpa,
        toggleUseIpa: toggleUseIpa,
        lastTranscription: lastTranscription,
        lastCorrectTranscription: lastCorrectTranscription,
        setLastTranscription: setLastTranscription,
        setLastCorrectTranscription: setLastCorrectTranscription,
        lastGuessCorrect: lastGuessCorrect,
        setLastGuessCorrect: setLastGuessCorrect,
        resetMode: resetMode
    }

    return (
        <AppContextProvider value={appContext}>
            <div className="App flex flex-col gap-3 items-center">
                <Header/>
                <div className={`prose flex flex-col justify-center items-center ${gameOn && 'hidden'}`}>
                    <h3>Welcome to phonade!</h3>
                    <h4>Choose game settings:</h4>
                </div>
                <SelectMode/>
                <div className={gameOn ? '' : 'hidden'}>
                    <div className="flex justify-center">
                        <Feedback/>
                    </div>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <ShowItemToTransc />
                        </div>
                    </div>
                    <div className="form-control text-center w-full max-w-[382px]">
                        <div
                            className={`flex justify-center flex-col ${currentMode.set !== Sets.SENTENCES && "md:flex-row"}`}>
                            <InputBox/>
                            <div className="flex w-full">
                                <CheckTrans/>
                                <ClearButton/>
                            </div>
                        </div>
                    </div>
                    <Keyboard/>
                    <CurrentIdxBox/>
                </div>
            </div>
        </AppContextProvider>
    );
}

export default App;
