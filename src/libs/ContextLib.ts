import {useContext, createContext, Dispatch, SetStateAction} from "react";
import {current_mode} from "../types/types";

export interface AppContextInterface {
    guessActive: boolean
    toggleGuessActive: () => void
    score: number
    incrementScore: () => void
    resetScore: () => void
    currentArray: number[]
    currentTransIdx: number
    incrementTransIdx: () => void
    decrementTransIdx?: () => void
    resetTransIdx: () => void
    gameOn: boolean
    setGameOn: Dispatch<SetStateAction<boolean>>
    currentMode: current_mode
    setCurrentMode: (val: current_mode) => void
    inputBoxValue: string
    setInputBoxValue: (val: string) => void
    handleSpecialKey: (val: string, position: number) => void
    useIpa: boolean
    toggleUseIpa: () => void
    lastTranscription: string
    setLastTranscription: (val: string) => void
    lastCorrectTranscription: string
    setLastCorrectTranscription: (val: string) => void
    lastGuessCorrect: boolean
    setLastGuessCorrect: Dispatch<SetStateAction<boolean>>
    resetMode: () => void
}

const ctx = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctx.Provider;

export function useAppContext() {
    return useContext(ctx);
}
