import { combineReducers } from 'redux';
import questions from './questions';
import results from './results';
import status from './status';

export default combineReducers({
  questions,
  results,
  status
});
