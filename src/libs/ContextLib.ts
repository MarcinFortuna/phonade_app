import {useContext, createContext} from "react";

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
    currentMode: string
    setCurrentMode: (val: string) => void
    inputBoxValue: string
    setInputBoxValue: (val: string) => void
    handleSpecialKey: (val: string, position: number) => void
    useIpa: boolean
    toggleUseIpa: () => void
    lastTranscription: string
    setLastTranscription: (val: string) => void
    lastCorrectTranscription: string
    setLastCorrectTranscription: (val: string) => void
    resetMode: () => void
}

const ctx = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctx.Provider;

export function useAppContext() {
    return useContext(ctx);
}
