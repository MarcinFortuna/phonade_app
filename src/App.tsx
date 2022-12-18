import React from 'react';
import InputBox from './InputBox';
import Keyboard from './Keyboard';
import { Provider, connect } from 'react-redux';
import store from './store'; 
import ShowItemToTransc from './ShowItemToTransc';
import ShowScore from './ShowScore';
import CheckTrans from './CheckTrans';
import Feedback from './Feedback';
import Header from './Header';
import CurrentIdxBox from './CurrentIdx';

const mapStateToProps = (state: any) => {
  return {
    inputBoxValue: state.inputBoxReducer,
    currentItemToTranscr: state.currentTransReducer,
    currentScore: state.scoreReducer,
    currentStage: state.stageReducer,
    currentMode: state.modeReducer,
    currentArr: state.currentIdxArrayReducer,
    currentInputCursorIdx: state.inputBoxCursorIdxReducer
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleSpecialKey: (val: string, idx: number) => dispatch({type: "ADD_SYMBOL", value: val, idx: idx}),
    purge: () => dispatch({type: "PURGE"}),
    setValue: (val: string) => dispatch({type: "SET_VALUE", value: val}),
    incrementScore: () => dispatch({type: "SCORE_INCREMENT"}),
    resetScore: () => dispatch({type: "SCORE_RESET"}),
    nextTrans: () => dispatch({type: "TRANS_INCREMENT"}),
    resetTrans: () => dispatch({type: "TRANS_RESET"}),
    changeStage: () => dispatch({type: "CHANGE_STAGE"}),
    modeSeqAll: () => dispatch({type: "SEQ_ALL"}),
    modeRandomAll: () => dispatch({type: "RANDOM_ALL"}),
    modeRandomTest: () => dispatch({type: "RANDOM_TEST"}),
    arrSeqAll: () => dispatch({type: "ARR_SEQ_ALL"}),
    arrRandomAll: () => dispatch({type: "ARR_RANDOM_ALL"}),
    arrRandomTest: () => dispatch({type: "ARR_RANDOM_TEST"}),
    setInputCursorIdx: (idx: number) => dispatch({type: "SET_CURSOR_IDX", val: idx})
  }
}

// @ts-ignore
const Component = ({inputBoxValue, handleSpecialKey, purge, setValue, currentItemToTranscr, currentScore, incrementScore, resetScore, nextTrans, resetTrans, currentStage, changeStage, modeSeqAll, modeRandomAll, modeRandomTest, arrSeqAll, arrRandomAll, arrRandomTest, currentMode, currentArr, currentInputCursorIdx, setInputCursorIdx}) => { 
  const resetMode = () => {
    console.log("RESET");
    purge();
    resetTrans();
    resetScore();
    if (currentStage) changeStage();
  }
  return <div className="App">
    <Header modeSeqAll={modeSeqAll} modeRandomAll={modeRandomAll} modeRandomTest={modeRandomTest} arrSeqAll={arrSeqAll} arrRandomAll={arrRandomAll} arrRandomTest={arrRandomTest} currentMode={currentMode} resetMode={resetMode} currentArr={currentArr} />
    <CurrentIdxBox currentMode={currentMode} idx={currentItemToTranscr} currentArr={currentArr} />
    <ShowItemToTransc idx={currentItemToTranscr} currentArr={currentArr}/>
    <ShowScore score={currentScore} currentArr={currentArr} />
    <Feedback val={inputBoxValue} idx={currentItemToTranscr} currentStage={currentStage} currentArr={currentArr}/>
    <div id="inputBoxContainer">
      <InputBox val={inputBoxValue} setValue={setValue} currentInputCursorIdx={currentInputCursorIdx} setInputCursorIdx={setInputCursorIdx} />
      <CheckTrans idx={currentItemToTranscr} val={inputBoxValue} purge={purge} incrementScore={incrementScore} nextTrans={nextTrans} currentStage={currentStage} changeStage={changeStage} currentArr={currentArr} score={currentScore}/>
    </div>
    <Keyboard handleSpecialKey={handleSpecialKey} currentInputCursorIdx={currentInputCursorIdx} setInputCursorIdx={setInputCursorIdx} clear={purge}/>
  </div>
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


function App() {
  return (
    // @ts-ignore    
    <Provider store={store}><Container /></Provider>
  );
}

export default App;
