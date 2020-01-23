const status = (state = { requestStatus: '' }, action) => {
  switch (action.type) {
    case 'QUESTIONS_REQUESTED':
      return Object.assign({}, state, { requestStatus: 'Loading questions...' });
    case 'QUESTIONS_RECEIVED':
      return Object.assign({}, state, { requestStatus: '' });
    case 'QUESTIONS_FAILED':
      return Object.assign({}, state, { requestStatus: 'There was an error.' });
    default:
      return state;
  }
};

export default status;