import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputText, updateHighlightArray } from '../features/appSlice';
// import Proptypes from 'prop-types';
import './Detector.css';

// ALL THE COMMENTED STUFF WAS USED BEFORE IMPLEMENTING REDUX

const Detector = () => {
// const Detector = props => {

  const dispatch= useDispatch();

  const { inputText }= useSelector(state => state.app);

  const [state, setState] = useState({
    find: '',
    replace: ''
  });
  const { find, replace }= state;

  // const {inputText, setInputText, setHighlightArray}= props;

  useEffect(() => {
    changeHighlight();
  }, [inputText, find]);

  let highlightArray= [];
  let index=0;

  const changeHighlight= () => {
    index= 0;
    highlightArray= [];
    if(find!=='') do {
      index= inputText.indexOf(find, index);
      if(index !== -1){
        // highlightArray.push(index);
        for(let j=index; j<index + find.length; j++){
          highlightArray.push(j);
        }
        index= index + find.length;
      }
    } while(index!==-1);
    dispatch(updateHighlightArray(highlightArray));
    // setHighlightArray(highlightArray);
  };

  const handleInputChange= ({target}) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  };

  const handleRemove = () => {
    dispatch(updateInputText(inputText.replaceAll(find, '')));
    // setInputText(inputText.replaceAll(find, ''));
  };

  const handleReplace = () => {
    if(replace!=='') dispatch(updateInputText(inputText.replaceAll(find, replace)));
    // if(replace!=='') setInputText(inputText.replaceAll(find, replace));
  };

  return (
    <div className='detector_container' >
      <div className='detector_container_inner' >
        <textarea
          placeholder='Text to find...'
          name='find'
          value={find}
          onChange={handleInputChange}
        />
        <button
          className='detector_container_inner_button--remove'
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
      <div className='detector_container_inner' >
        <textarea
          placeholder='Replace with...'
          name='replace'
          value={replace}
          onChange={handleInputChange}
        />
        <button
          className='detector_container_inner_button--replace'
          onClick={handleReplace}
        >
          Replace
        </button>
      </div>
    </div>
  )
};

// Detector.propTypes= {
//   inputText: Proptypes.string.isRequired,
//   setInputText: Proptypes.func.isRequired,
//   setHighlightArray: Proptypes.func.isRequired
// }

export default Detector;
