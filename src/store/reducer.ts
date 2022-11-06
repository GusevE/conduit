import { combineReducers } from '@reduxjs/toolkit';

import layoutTemplateReducer from './layoutTemplate/LayoutTemplateSlice';


export const rootReducer = combineReducers({
  LayoutTemplateState: layoutTemplateReducer,
});
