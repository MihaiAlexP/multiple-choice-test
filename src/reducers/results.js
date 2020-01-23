const results = (state = { totalCount: null, correctCount: null, resultsStatus: '' }, action) => {
  switch(action.type) {
    case 'SUBMIT_REQUESTED':
      return Object.assign({}, state, { resultsStatus: 'Loading results...' });
    case 'SUBMIT_RECEIVED':
      return Object.assign({}, state, { resultsStatus: '' });
    case 'SUBMIT_FAILED':
      return Object.assign({}, state, { resultsStatus: 'There was an error.' });
    case 'UPDATE_RESULTS':
      return Object.assign({}, state, { totalCount: action.totalCount, correctCount: action.correctCount });
    default:
      return state;
  }
};

export default results;
