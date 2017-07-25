import { combineReducers } from 'redux';
import LibaryReducer from './LibaryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibaryReducer,
  selectedLibraryId: SelectionReducer
});
