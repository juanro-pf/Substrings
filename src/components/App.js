import React from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputText } from '../features/appSlice';
import Detector from './Detector';
import './App.css';

// ALL THE COMMENTED STUFF WAS USED BEFORE IMPLEMENTING REDUX

const App = () => {

  const dispatch= useDispatch();

  const { inputText, highlightArray }= useSelector(state => state.app);

  // const [text, setText] = useState('');
  // const [highlightArray, setHighlightArray] = useState([]);

  const textArray= inputText.split('');

  const handleInputChange= e => {
    dispatch(updateInputText(e.target.value));
    // setText(e.target.value);
  };

  return (
    <div className='main_container'>
      <h1>Start typing some words to see the magic</h1>
      <textarea className='main_container_textarea'
        placeholder={`Don't be shy, start typing...`}
        value={inputText}
        onChange={handleInputChange}
      />
      <div className='main_container_div'>
        {
          textArray.map((el, i) => <span key={i} style={highlightArray.includes(i) ? {color: 'red'} : {}}>{el}</span>)
        }
      </div>
      <Detector
        // inputText={inputText}
        // setInputText={setText}
        // setHighlightArray={setHighlightArray}
      />
    </div>
  )
};

export default App;
