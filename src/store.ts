import { combineReducers, createStore } from "redux";

const getShuffledArr: any = (arr: number[]) => {
    if (arr.length === 1) {return arr};
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i !== rand))];
};

const inputBoxReducer = (state: string = "", action: any) => {
    switch (action.type) {
        case "ADD_SYMBOL":
            return [state.slice(0, action.idx), action.value, state.slice(action.idx)].join('');
        case "PURGE":
            return "";
        case "SET_VALUE":
            return action.value;
        default:
            return state;
    }
};

const inputBoxCursorIdxReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case "SET_CURSOR_IDX":
            return action.val;
        default:
            return state;
    }
}

const currentTransReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case "TRANS_INCREMENT":
            return state + 1;
        case "TRANS_DECREMENT":
            return state - 1;
        case "TRANS_RESET":
            return 0
        default:
            return state;
    }
}

const currentIdxArrayReducer = (state: number[] = [], action: any) => {
    switch (action.type) {
        case "ARR_SEQ_ALL":
            return [...Array(200).keys()];
        case "ARR_RANDOM_ALL":
            return getShuffledArr([...Array(200).keys()]);
        case "ARR_RANDOM_TEST":
            return getShuffledArr([...Array(200).keys()]).slice(0,20);
        default:
            return state;
    }
}

const scoreReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case "SCORE_INCREMENT":
            return state + 1;
        case "SCORE_RESET":
            return 0
        default:
            return state;
    }
}

const stageReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case 'CHANGE_STAGE':
            return !state;
        default:
            return state;
    }
}

const modeReducer = (state: string | null = null, action: any) => {
    switch (action.type) {
        case 'SEQ_ALL':
            return "All (sequential)";
        case 'RANDOM_ALL':
            return "All (random order)";
        case 'RANDOM_TEST':
            return "Test (random order)";
        default:
            return state
    }
}

const rootReducer = combineReducers({inputBoxReducer, currentTransReducer, currentIdxArrayReducer, scoreReducer, stageReducer, modeReducer, inputBoxCursorIdxReducer});

// @ts-ignore
let store = createStore(rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;