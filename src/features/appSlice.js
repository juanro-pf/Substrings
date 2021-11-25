import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  inputText: '',
  highlightArray: []
}

export const appSlice= createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateInputText: (state, action) => {
      state.inputText= action.payload
    },
    updateHighlightArray: (state, action) => {
      state.highlightArray= action.payload
    }
  }
});

export const { updateInputText, updateHighlightArray }= appSlice.actions;

export default appSlice.reducer;