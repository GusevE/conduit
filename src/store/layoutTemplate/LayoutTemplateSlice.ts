import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface LayoutTemplateState{
  count: number;
  getCount: number;
  selectTag: string;
}

const initial: LayoutTemplateState = {
  count: 1,
  getCount: 0,
  selectTag: ''
 
};


export const LayoutTemplateState = createSlice({
  name: 'layoutTemplate',
  initialState: initial,

  reducers: {
    updateCount: (state, { payload }: PayloadAction<number>) => {
      state.getCount = Math.ceil(payload / 10)   
},
    countChange: (state, { payload }: PayloadAction<number>) => {
          state.count = payload
    },
    changeTag: (state, { payload }: PayloadAction<string>) => {
      state.count = 0
      state.selectTag = payload
},
  },
});

export const {
  updateCount,
  countChange,
  changeTag,
} = LayoutTemplateState.actions;

export default LayoutTemplateState.reducer;
